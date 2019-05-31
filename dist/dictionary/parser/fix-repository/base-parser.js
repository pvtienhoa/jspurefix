"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseParser {
    constructor(parser, name) {
        this.parser = parser;
        this.name = name;
        this.data = [];
    }
    value(line, n, v) {
        this.current[n] = v;
    }
    close(line, node) {
        if (node !== this.name) {
            return;
        }
        this.data[this.data.length] = this.current;
    }
    open(line, node) {
        if (node.name !== this.name) {
            return;
        }
        this.current = {};
    }
}
exports.BaseParser = BaseParser;
//# sourceMappingURL=base-parser.js.map