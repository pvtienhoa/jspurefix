"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ascii_1 = require("../../buffer/ascii/");
const msg_transmitter_1 = require("../msg-transmitter");
class AsciiMsgTransmitter extends msg_transmitter_1.MsgTransmitter {
    constructor(config) {
        super(config.definitions, config.description);
        this.config = config;
        this.msgSeqNum = 1;
        const buffer = this.buffer;
        const tf = new ascii_1.TimeFormatter(buffer);
        this.encoder = new ascii_1.AsciiEncoder(buffer, config.definitions, tf, config.delimiter);
        this.header = config.definitions.component.get('header');
        this.trailer = config.definitions.component.get('trailer');
    }
    encodeMessage(msgType, obj) {
        const encoder = this.encoder;
        const factory = this.config.factory;
        const hdr = factory.header(msgType, this.msgSeqNum++, this.time || new Date());
        const buffer = this.buffer;
        buffer.reset();
        const msgDef = this.definitions.message.get(msgType);
        if (!msgDef) {
            return;
        }
        encoder.encode(hdr, this.header.name);
        encoder.encode(obj, msgDef.name);
        const lenPos = encoder.bodyLengthPos;
        const len = buffer.getPos() - (lenPos + 8);
        buffer.patchPaddedNumberAtPos(lenPos, len, 7);
        const checksum = buffer.checksum();
        const trl = factory.trailer(checksum);
        encoder.encode(trl, this.trailer.name);
    }
}
exports.AsciiMsgTransmitter = AsciiMsgTransmitter;
//# sourceMappingURL=ascii-msg-transmitter.js.map