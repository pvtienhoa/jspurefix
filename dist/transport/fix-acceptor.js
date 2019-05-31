"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events = require("events");
class FixAcceptor extends events.EventEmitter {
    constructor(application) {
        super();
        this.application = application;
        this.transports = {};
    }
}
exports.FixAcceptor = FixAcceptor;
//# sourceMappingURL=fix-acceptor.js.map