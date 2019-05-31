"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../buffer");
const stream_1 = require("stream");
const msg_payload_1 = require("./msg-payload");
const events = require("events");
class MsgTransmitter extends events.EventEmitter {
    constructor(definitions, session) {
        super();
        this.definitions = definitions;
        this.session = session;
        this.buffer = new buffer_1.ElasticBuffer(10 * 1024);
        this.encodeStream = this.encoderStream();
        this.encodeStream.on('error', (e) => {
            this.emit('error', e);
        });
        this.encodeStream.on('done', () => {
            this.emit('done');
        });
    }
    send(msgType, obj) {
        this.encodeStream.write(new msg_payload_1.MsgPayload(msgType, obj));
    }
    encoderStream() {
        const transmitter = this;
        return new stream_1.Transform({
            writableObjectMode: true,
            transform(payload, encoding, done) {
                try {
                    const msgType = payload.msgType;
                    transmitter.buffer.reset();
                    transmitter.encodeMessage(msgType, payload.obj);
                    payload.encoded = transmitter.buffer.slice();
                    this.push(payload.encoded);
                    transmitter.emit('encoded', msgType, payload.encoded);
                    done();
                }
                catch (e) {
                    done(e);
                }
            }
        });
    }
}
exports.MsgTransmitter = MsgTransmitter;
//# sourceMappingURL=msg-transmitter.js.map