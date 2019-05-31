"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definition_1 = require("../../definition");
const collections_1 = require("../../../collections");
const contained_1 = require("../../contained");
const dict_primitive_1 = require("../../dict-primitive");
const fix_versions_1 = require("../../fix-versions");
class Repository {
    constructor(version, getLogger) {
        this.version = version;
        this.getLogger = getLogger;
        this.groupLookup = new collections_1.Dictionary();
        this.logger = getLogger('Repository');
        switch (version) {
            case fix_versions_1.FixVersion.FIX44:
            case fix_versions_1.FixVersion.FIX50:
            case fix_versions_1.FixVersion.FIX50SP1:
            case fix_versions_1.FixVersion.FIX50SP2:
                this.includesAbbreviations = true;
                break;
            default: {
                this.includesAbbreviations = false;
                break;
            }
        }
        this.definitions = new definition_1.FixDefinitions(fix_versions_1.FixDefinitionSource.FixRepo, version);
    }
    assign(name, data) {
        switch (name) {
            case 'Fields': {
                this.Fields = data;
                break;
            }
            case 'Enums': {
                this.Enums = data;
                break;
            }
            case 'Components': {
                this.Components = data;
                break;
            }
            case 'Messages': {
                this.Messages = data;
                break;
            }
            case 'MsgContents': {
                this.MsgContents = data;
                if (!this.includesAbbreviations) {
                    this.toDefinitions();
                }
                break;
            }
            case 'Abbreviations': {
                this.Abbreviations = data;
                this.toDefinitions();
                break;
            }
        }
    }
    summarise() {
        const logger = this.logger;
        logger.info(`definitions: ${this.definitions.simple.count()} fields`);
        logger.info(`definitions: ${this.definitions.component.count()} components`);
        logger.info(`definitions: ${this.definitions.message.count()} messages`);
    }
    toDefinitions() {
        this.fields();
        this.complex();
        this.header();
        this.trailer();
        this.summarise();
    }
    complex() {
        this.contentLookup = this.contents();
        this.componentLookup = this.components();
        this.Components.forEach((c) => this.resolve(c));
        this.Messages.forEach((m) => {
            const msg = this.message(m);
            this.logger.debug(`${msg.toString()}`);
            this.definitions.addMessage(msg);
        });
    }
    header() {
        const h = this.definitions.component.get('StandardHeader');
        this.definitions.component.add('header', h);
    }
    trailer() {
        const t = this.definitions.component.get('StandardTrailer');
        this.definitions.component.add('trailer', t);
    }
    fields() {
        const definitions = this.definitions;
        this.Fields.forEach((f) => {
            definitions.addSimpleFieldDef(new definition_1.SimpleFieldDefinition(f.Tag, f.Name, f.AbbrName ? f.AbbrName : f.Name, f.BaseCategory, f.BaseCategoryAbbrName, f.Type.toUpperCase(), f.Description));
        });
        for (const e of this.Enums) {
            const field = definitions.tagToSimple[parseInt(e.Tag, 10)];
            if (field == null) {
                continue;
            }
            if (e.Value && e.SymbolicName) {
                field.addEnum(e.Value, e.SymbolicName, e.Description);
            }
        }
    }
    contents() {
        return this.MsgContents.reduce((a, current) => {
            let content = a.get(current.ComponentID);
            if (!content) {
                content = [];
                a.add(current.ComponentID, content);
            }
            content[content.length] = current;
            return a;
        }, new collections_1.Dictionary());
    }
    resolveToFieldSet(content, parentSet) {
        content.forEach((current) => {
            const required = current.Reqd === '1';
            const tag = parseInt(current.TagText, 10);
            if (!isNaN(tag)) {
                const sf = this.definitions.tagToSimple[tag];
                if (sf) {
                    parentSet.add(new contained_1.ContainedSimpleField(sf, parentSet.fields.length, required, false));
                }
            }
            else {
                let childSet = this.definitions.component.get(current.TagText);
                if (!childSet) {
                    const cl = this.componentLookup.get(current.TagText);
                    if (cl) {
                        childSet = this.resolve(cl);
                    }
                }
                switch (childSet.type) {
                    case dict_primitive_1.ContainedSetType.Component: {
                        parentSet.add(new contained_1.ContainedComponentField(childSet, parentSet.fields.length, required));
                        break;
                    }
                    case dict_primitive_1.ContainedSetType.Group: {
                        parentSet.add(new contained_1.ContainedGroupField(childSet, parentSet.fields.length, required));
                        break;
                    }
                    default: {
                        throw new Error(`unknown set type ${childSet.type}`);
                    }
                }
            }
            return parentSet;
        });
    }
    resolve(c) {
        switch (c.ComponentType) {
            case 'ImplicitBlockRepeating':
            case 'BlockRepeating': {
                const content = this.contentLookup.get(c.ComponentID);
                const noField = this.definitions.tagToSimple[parseInt(content[0].TagText, 10)];
                let def = this.groupLookup.get(c.ComponentID);
                if (!def) {
                    def = new definition_1.GroupFieldDefinition(c.Name, c.AbbrName, c.CategoryID, noField, c.Description);
                    this.resolveToFieldSet(content.slice(1), def);
                    this.groupLookup.add(c.ComponentID, def);
                }
                return def;
            }
            default: {
                const content = this.contentLookup.get(c.ComponentID);
                let def = this.definitions.component.get(c.Name);
                if (!def) {
                    def = new definition_1.ComponentFieldDefinition(c.Name, c.AbbrName, c.CategoryID, c.Description);
                    this.resolveToFieldSet(content, def);
                    this.definitions.addComponentFieldDef(def);
                }
                return def;
            }
        }
    }
    message(m) {
        const definitions = this.definitions;
        const content = this.contentLookup.get(m.ComponentID);
        let def = definitions.message.get(m.Name);
        if (!def) {
            def = new definition_1.MessageDefinition(m.Name, m.AbbrName, m.MsgType, m.CategoryID, m.Description);
            this.resolveToFieldSet(content, def);
            definitions.addComponentFieldDef(def);
        }
        return def;
    }
    components() {
        return this.Components.reduce((a, current) => {
            a.add(current.Name, current);
            a.add(current.ComponentID, current);
            return a;
        }, new collections_1.Dictionary());
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map