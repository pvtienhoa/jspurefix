"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_parser_1 = require("./base-parser");
class MsgContentsParser extends base_parser_1.BaseParser {
    constructor(parser) {
        super(parser, 'MsgContent');
        this.parser = parser;
    }
}
exports.MsgContentsParser = MsgContentsParser;
//# sourceMappingURL=msg-contents-parser.js.map