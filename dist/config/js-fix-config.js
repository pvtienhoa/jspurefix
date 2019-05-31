"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empty_log_factory_1 = require("./empty-log-factory");
const buffer_1 = require("../buffer");
class JsFixConfig {
    constructor(factory, definitions, description, delimiter = buffer_1.AsciiChars.Soh, logFactory = new empty_log_factory_1.EmptyLogFactory()) {
        this.factory = factory;
        this.definitions = definitions;
        this.description = description;
        this.delimiter = delimiter;
        this.logFactory = logFactory;
    }
}
exports.JsFixConfig = JsFixConfig;
//# sourceMappingURL=js-fix-config.js.map