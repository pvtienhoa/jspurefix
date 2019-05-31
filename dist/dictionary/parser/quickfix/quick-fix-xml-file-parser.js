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
const fs = require("fs");
const definition_1 = require("../../definition");
const field_definition_parser_1 = require("./field-definition-parser");
const field_set_parser_1 = require("./field-set-parser");
const message_parser_1 = require("./message-parser");
const fix_parser_1 = require("../../fix-parser");
const fix_versions_1 = require("../../fix-versions");
const util_1 = require("util");
var ParseState;
(function (ParseState) {
    ParseState[ParseState["Begin"] = 1] = "Begin";
    ParseState[ParseState["FieldDefinitions"] = 2] = "FieldDefinitions";
    ParseState[ParseState["ComponentsFirstPass"] = 3] = "ComponentsFirstPass";
    ParseState[ParseState["ComponentsSecondPass"] = 4] = "ComponentsSecondPass";
    ParseState[ParseState["ComponentsThirdPass"] = 5] = "ComponentsThirdPass";
    ParseState[ParseState["Messages"] = 6] = "Messages";
})(ParseState || (ParseState = {}));
class QuickFixXmlFileParser extends fix_parser_1.FixParser {
    constructor(xmlPath, getLogger) {
        super();
        this.xmlPath = xmlPath;
        this.getLogger = getLogger;
        this.parseState = ParseState.Begin;
        this.numberPasses = 0;
        this.singlePass = util_1.promisify(QuickFixXmlFileParser.subscribe);
    }
    static subscribe(instance, saxStream, done) {
        let parser;
        instance.numberPasses++;
        switch (instance.parseState) {
            case ParseState.Begin: {
                instance.parseState = ParseState.FieldDefinitions;
                break;
            }
            case ParseState.FieldDefinitions: {
                instance.parseState = ParseState.ComponentsFirstPass;
                break;
            }
            case ParseState.ComponentsFirstPass: {
                instance.parseState = ParseState.ComponentsSecondPass;
                break;
            }
            case ParseState.ComponentsSecondPass: {
                instance.parseState = ParseState.ComponentsThirdPass;
                break;
            }
            case ParseState.ComponentsThirdPass: {
                instance.parseState = ParseState.Messages;
                break;
            }
        }
        const saxParser = saxStream._parser;
        saxStream.on('error', (e) => {
            done(e, null);
        });
        saxStream.on('closetag', (name) => {
            if (parser != null) {
                parser.close(saxParser.line, name);
            }
            switch (name) {
                case 'repository':
                case 'messages':
                case 'components':
                case 'header':
                case 'trailer': {
                    parser = null;
                    break;
                }
            }
        });
        saxStream.on('opentag', (node) => {
            const saxNode = node;
            switch (saxNode.name) {
                case 'fix': {
                    switch (instance.parseState) {
                        case ParseState.FieldDefinitions: {
                            const major = saxNode.attributes.major;
                            const minor = saxNode.attributes.major;
                            const description = `FIX.${major}.${minor}`;
                            instance.definitions = new definition_1.FixDefinitions(fix_versions_1.FixDefinitionSource.QuickFix, fix_versions_1.VersionUtil.resolve(description));
                            break;
                        }
                    }
                    break;
                }
                case 'fields': {
                    switch (instance.parseState) {
                        case ParseState.FieldDefinitions: {
                            parser = new field_definition_parser_1.FieldDefinitionParser(instance);
                            break;
                        }
                        default: {
                            parser = null;
                        }
                    }
                    break;
                }
                case 'messages': {
                    switch (instance.parseState) {
                        case ParseState.Messages: {
                            parser = new message_parser_1.MessageParser(instance);
                            break;
                        }
                        default:
                            break;
                    }
                    break;
                }
                case 'components': {
                    switch (instance.parseState) {
                        case ParseState.ComponentsFirstPass:
                        case ParseState.ComponentsSecondPass:
                        case ParseState.ComponentsThirdPass:
                            parser = new field_set_parser_1.FieldSetParser(instance);
                            break;
                    }
                    break;
                }
                case 'field':
                case 'value':
                case 'component':
                case 'group': {
                    if (parser != null) {
                        parser.open(saxParser.line, saxNode);
                    }
                    break;
                }
                case 'message': {
                    switch (instance.parseState) {
                        case ParseState.Messages: {
                            if (parser != null) {
                                parser.open(saxParser.line, saxNode);
                            }
                            break;
                        }
                        default:
                            break;
                    }
                    break;
                }
                case 'header':
                case 'trailer': {
                    switch (instance.parseState) {
                        case ParseState.Messages: {
                            parser = new field_set_parser_1.FieldSetParser(instance);
                            parser.open(saxParser.line, node);
                            break;
                        }
                    }
                    break;
                }
            }
        });
        saxStream.on('ready', () => {
            if (done) {
                parser = null;
                done(null, instance.definitions);
            }
        });
    }
    parse() {
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.onePass();
                yield this.onePass();
                yield this.onePass();
                yield this.onePass();
                yield this.onePass();
                accept(this.definitions);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    onePass() {
        return __awaiter(this, void 0, void 0, function* () {
            const pass = fs.createReadStream(this.xmlPath);
            const saxStream = require('sax').createStream(true, {});
            pass.pipe(saxStream);
            yield this.singlePass(this, saxStream);
        });
    }
}
exports.QuickFixXmlFileParser = QuickFixXmlFileParser;
//# sourceMappingURL=quick-fix-xml-file-parser.js.map