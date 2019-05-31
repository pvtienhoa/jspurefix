"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_parser_1 = require("./base-parser");
class EnumsParser extends base_parser_1.BaseParser {
    constructor(parser) {
        super(parser, 'Enum');
        this.parser = parser;
    }
}
exports.EnumsParser = EnumsParser;
//# sourceMappingURL=enums-parser.js.map