"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../buffer");
const ascii_1 = require("./ascii");
const fixml_1 = require("./fixml");
class MsgTransport {
    constructor(id, config, duplex) {
        this.id = id;
        this.config = config;
        this.duplex = duplex;
        const delimiter = config.delimiter;
        if (!delimiter) {
            throw new Error(`no delimiter char given.`);
        }
        const description = config.description;
        const definitions = config.definitions;
        const protocol = description.application.protocol;
        switch (protocol) {
            case 'ascii': {
                this.transmitter = new ascii_1.AsciiMsgTransmitter(config);
                this.receiver = new buffer_1.AsciiParser(definitions, duplex.readable, delimiter, buffer_1.AsciiChars.Pipe);
                break;
            }
            case 'fixml': {
                this.transmitter = new fixml_1.FixmlMsgTransmitter(config);
                this.receiver = new buffer_1.FiXmlParser(config, duplex.readable);
                break;
            }
            default: {
                throw new Error(`session Protocol must ascii or fixml. got ${protocol}`);
            }
        }
        if (duplex.writable) {
            this.transmitter.encodeStream.pipe(duplex.writable);
        }
    }
    end() {
        this.duplex.end();
    }
    wait() {
        return new Promise((resolve, reject) => {
            this.receiver.on('end', () => {
                resolve();
            });
            this.receiver.on('error', (e) => {
                reject(e);
            });
            this.transmitter.on('error', (e) => {
                reject(e);
            });
        });
    }
}
exports.MsgTransport = MsgTransport;
//# sourceMappingURL=msg-transport.js.map