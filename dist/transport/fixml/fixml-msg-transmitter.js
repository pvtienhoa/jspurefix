"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../../buffer");
const msg_transmitter_1 = require("../msg-transmitter");
class FixmlMsgTransmitter extends msg_transmitter_1.MsgTransmitter {
    constructor(config) {
        super(config.definitions, config.description);
        this.config = config;
        this.encoder = new buffer_1.FixmlEncoder(this.buffer, config.definitions);
    }
    encodeMessage(msgType, obj) {
        const adapter = this.config.description.application.http.adapter;
        if (adapter) {
            adapter.beginMessage(msgType);
        }
        const fe = this.encoder;
        const factory = this.config.factory;
        obj.StandardHeader = factory.header();
        fe.encode(obj, msgType);
    }
}
exports.FixmlMsgTransmitter = FixmlMsgTransmitter;
//# sourceMappingURL=fixml-msg-transmitter.js.map