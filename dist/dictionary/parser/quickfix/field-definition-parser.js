"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definition_1 = require("../../definition");
const node_parser_1 = require("./node-parser");
class FieldDefinitionParser extends node_parser_1.NodeParser {
    constructor(parser) {
        super(parser);
        this.parser = parser;
    }
    open(line, node) {
        switch (node.name) {
            case 'field': {
                this.currentField = new definition_1.SimpleFieldDefinition(node.attributes.number, node.attributes.name, node.attributes.name, null, null, node.attributes.type, null);
                this.definitions.addSimpleFieldDef(this.currentField);
                break;
            }
            case 'value': {
                this.currentField.addEnum(node.attributes.enum, node.attributes.description);
                break;
            }
        }
    }
    close(line, name) {
        switch (name) {
        }
    }
}
exports.FieldDefinitionParser = FieldDefinitionParser;
//# sourceMappingURL=field-definition-parser.js.map