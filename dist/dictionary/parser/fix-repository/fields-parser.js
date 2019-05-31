"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_parser_1 = require("./base-parser");
class FieldsParser extends base_parser_1.BaseParser {
    constructor(parser) {
        super(parser, 'Field');
        this.parser = parser;
    }
}
exports.FieldsParser = FieldsParser;
//# sourceMappingURL=fields-parser.js.map