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
const path = require("path");
const buffer_1 = require("../buffer");
const util_1 = require("../util");
const transport_1 = require("../transport");
const config_1 = require("../config");
let definitions;
let jsonHelper;
let session;
const root = path.join(__dirname, '../../data');
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/test-initiator.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    jsonHelper = new util_1.JsonHelper(definitions);
    const config = new config_1.JsFixConfig(new transport_1.SessionMsgFactory(sessionDescription), definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
    session = new transport_1.AsciiMsgTransmitter(config);
}), 45000);
function testEncodeDecode(msgType, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const parser = new buffer_1.AsciiParser(definitions, session.encodeStream, buffer_1.AsciiChars.Pipe);
            parser.on('msg', (msgType, view) => {
                const o = view.toObject();
                delete o['StandardHeader'];
                delete o['StandardTrailer'];
                resolve(o);
            });
            parser.on('error', (e) => {
                reject(e);
            });
            session.send(msgType, msg);
        }));
    });
}
test('AE object to ascii fix to object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = 'AE';
    const file = path.join(root, 'examples/FIX.4.4/repo/trade-capture/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    const o = yield testEncodeDecode(msgType, msg);
    yield expect(o).toEqual(msg);
}), 1000);
test('d object to ascii fix to object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = 'd';
    const file = path.join(root, 'examples/FIX.4.4/repo/security-definition/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    const o = yield testEncodeDecode(msgType, msg);
    yield expect(o).toEqual(msg);
}), 1000);
test('D object to ascii fix to object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = 'D';
    const file = path.join(root, 'examples/FIX.4.4/repo/new-order-single/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    const o = yield testEncodeDecode(msgType, msg);
    yield expect(o).toEqual(msg);
}), 1000);
//# sourceMappingURL=repo-full-ascii-msg.test.js.map