"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("../transport");
const config_1 = require("../config");
function replayFixFile(definitions, sessionDescription, replayFile, delimiter) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((accept, reject) => {
            const arr = [];
            const config = new config_1.JsFixConfig(null, definitions, sessionDescription, delimiter);
            const transport = new transport_1.MsgTransport(1, config, new transport_1.FileDuplex(replayFile));
            transport.receiver.on('msg', (msgType, m) => {
                arr.push(m.clone());
            });
            transport.receiver.on('end', () => {
                accept(arr);
            });
            transport.receiver.on('error', (e) => {
                reject(e);
            });
        });
    });
}
exports.replayFixFile = replayFixFile;
//# sourceMappingURL=replay.js.map