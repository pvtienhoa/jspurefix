"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_parser_1 = require("./base-parser");
class ComponentsParser extends base_parser_1.BaseParser {
    constructor(parser) {
        super(parser, 'Component');
        this.parser = parser;
    }
}
exports.ComponentsParser = ComponentsParser;
//# sourceMappingURL=components-parser.js.map