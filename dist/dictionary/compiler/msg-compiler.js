"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../../buffer");
const standard_snippet_1 = require("./standard-snippet");
const dict_primitive_1 = require("../dict-primitive");
const compiler_type_1 = require("./compiler-type");
const collections_1 = require("../../collections");
const fs = require("fs");
const Util = require("util");
const Path = require("path");
const fields_dispatch_1 = require("../fields-dispatch");
const set_reduce_1 = require("../set-reduce");
class MsgCompiler {
    constructor(definitions, settings) {
        this.definitions = definitions;
        this.settings = settings;
        this.queue = [];
        this.buffer = new buffer_1.ElasticBuffer();
        this.completed = new collections_1.Dictionary();
        this.snippets = new standard_snippet_1.StandardSnippet(this.settings);
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            const types = this.settings.types || this.definitions.message.keys();
            return this.createTypes(types);
        });
    }
    getFileName(compilerType) {
        const settings = this.settings;
        const fileName = `${compilerType.snaked}.ts`;
        return Path.join(settings.output, fileName);
    }
    createTypes(types) {
        return __awaiter(this, void 0, void 0, function* () {
            const definitions = this.definitions;
            types.forEach((type) => {
                const definition = definitions.containedSet(type);
                if (!definition) {
                    throw new Error(`no type ${type} defined`);
                }
                const ct = new compiler_type_1.CompilerType(this.definitions, definition, definition.name);
                this.enqueue(ct);
            });
            yield this.work();
            yield this.index();
        });
    }
    work() {
        return __awaiter(this, void 0, void 0, function* () {
            const q = this.queue;
            const writeFile = Util.promisify(fs.writeFile);
            while (q.length > 0) {
                const compilerType = q.pop();
                const api = this.generateMessages(compilerType);
                const fullName = this.getFileName(compilerType);
                yield writeFile(fullName, api, {
                    encoding: 'utf8'
                });
            }
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const writeFile = Util.promisify(fs.writeFile);
            const settings = this.settings;
            const fileName = 'index.ts';
            const done = this.completed.values();
            const exports = done.reduce((prev, current) => {
                prev.push(`export * from '${current.snaked}'`);
                return prev;
            }, [`export * from './enum'`]);
            const newLine = require('os').EOL;
            exports.sort();
            exports.push('');
            const api = exports.join(newLine);
            const fullName = Path.join(settings.output, fileName);
            yield writeFile(fullName, api, {
                encoding: 'utf8'
            });
        });
    }
    generateMessages(compilerType) {
        const definition = compilerType.set;
        const buffer = this.buffer;
        buffer.reset();
        const snippets = this.snippets;
        const newLine = require('os').EOL;
        let ptr = this.imports(compilerType);
        if (ptr > 0) {
            buffer.writeString(newLine);
            buffer.writeString(newLine);
        }
        if (this.settings.comment && definition.description) {
            const comment = snippets.commentBox(definition.description);
            buffer.writeString(snippets.startBlockComment(0));
            buffer.writeString(newLine);
            buffer.writeString(comment);
            buffer.writeString(newLine);
            buffer.writeString(snippets.endBlockComment(0));
            buffer.writeString(newLine);
        }
        buffer.writeString(snippets.interface(compilerType.qualifiedName, 0));
        buffer.writeChar(buffer_1.AsciiChars.Space);
        buffer.writeString(snippets.startBlock(0));
        buffer.writeString(newLine);
        this.fields(compilerType);
        buffer.writeString(snippets.endBlock(0));
        buffer.writeString(newLine);
        return buffer.toString();
    }
    enqueue(ct) {
        const completed = this.completed;
        const fullName = this.getFileName(ct);
        if (completed.get(fullName)) {
            return;
        }
        this.queue.push(ct);
        completed.addUpdate(fullName, ct);
    }
    fieldSimple(simple) {
        const snippets = this.snippets;
        const settings = this.settings;
        const buffer = this.buffer;
        const newLine = require('os').EOL;
        const len = buffer.writeString(snippets.simple(simple.name, buffer_1.Tags.toJSType(simple), simple.required, 1));
        if (settings.tags) {
            buffer.writeString(snippets.commentLine(`${simple.definition.tag}`, 50 - len));
        }
        buffer.writeString(newLine);
    }
    fieldGroup(groupField, compilerType) {
        const newLine = require('os').EOL;
        const buffer = this.buffer;
        const snippets = this.snippets;
        const extended = compilerType.getExtended(groupField);
        buffer.writeString(snippets.group(compilerType.getFieldGroupName(groupField), extended, groupField.required, 1));
        this.enqueue(new compiler_type_1.CompilerType(this.definitions, groupField.definition, extended));
        buffer.writeString(newLine);
    }
    fieldComponent(componentField, compilerType) {
        const newLine = require('os').EOL;
        const buffer = this.buffer;
        const snippets = this.snippets;
        const extended = compilerType.getExtended(componentField);
        buffer.writeString(snippets.component(extended, componentField.required, 1));
        this.enqueue(new compiler_type_1.CompilerType(this.definitions, componentField.definition, extended));
        buffer.writeString(newLine);
    }
    fields(compilerType) {
        this.attributes(compilerType);
        fields_dispatch_1.dispatchFields(compilerType.set.fields, {
            group: (g) => this.fieldGroup(g, compilerType),
            simple: (simple) => this.fieldSimple(simple),
            component: (c) => this.fieldComponent(c, compilerType)
        });
    }
    attributes(compilerType) {
        const settings = this.settings;
        const newLine = require('os').EOL;
        const snippets = this.snippets;
        const buffer = this.buffer;
        compilerType.set.localAttribute.forEach((simple) => {
            const len = buffer.writeString(snippets.simple(simple.definition.name, buffer_1.Tags.toJSType(simple), simple.required, 1));
            if (settings.tags) {
                buffer.writeString(snippets.commentLine(`${simple.definition.tag}`, 50 - len));
            }
            buffer.writeString(newLine);
        });
    }
    imports(compilerType) {
        const isMsg = compilerType.set.type === dict_primitive_1.ContainedSetType.Msg;
        const snippets = this.snippets;
        const imports = set_reduce_1.reduceSet(compilerType.set, {
            component: (a, c) => {
                a.push(`${snippets.import(compilerType.getExtended(c), isMsg, 0)}`);
                return a;
            },
            group: (a, g) => {
                a.push(`${snippets.import(compilerType.getExtended(g), isMsg, 0)}`);
                return a;
            }
        }, []);
        return this.buffer.writeString(imports.join(require('os').EOL));
    }
}
exports.MsgCompiler = MsgCompiler;
//# sourceMappingURL=msg-compiler.js.map