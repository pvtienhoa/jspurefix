"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_parser_1 = require("./base-parser");
class AbbreviationsParser extends base_parser_1.BaseParser {
    constructor(parser) {
        super(parser, 'Abbreviation');
        this.parser = parser;
    }
}
exports.AbbreviationsParser = AbbreviationsParser;
//# sourceMappingURL=abbreviations-parser.js.map