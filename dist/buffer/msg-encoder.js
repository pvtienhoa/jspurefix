"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events = require("events");
class MsgEncoder extends events.EventEmitter {
    constructor(definitions) {
        super();
        this.definitions = definitions;
    }
    encode(o, name) {
        const set = this.definitions.message.get(name) || this.definitions.component.get(name);
        if (!set) {
            return;
        }
        this.encodeSet(o, set);
    }
}
exports.MsgEncoder = MsgEncoder;
//# sourceMappingURL=msg-encoder.js.map