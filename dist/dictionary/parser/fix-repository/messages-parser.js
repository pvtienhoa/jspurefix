"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_parser_1 = require("./base-parser");
class MessagesParser extends base_parser_1.BaseParser {
    constructor(parser) {
        super(parser, 'Message');
        this.parser = parser;
    }
}
exports.MessagesParser = MessagesParser;
//# sourceMappingURL=messages-parser.js.map