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
let config;
const root = path.join(__dirname, '../../data');
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/qf-fix44.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    jsonHelper = new util_1.JsonHelper(definitions);
    config = new config_1.JsFixConfig(new transport_1.SessionMsgFactory(sessionDescription), definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
}), 45000);
function testEncodeDecode(msgType, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let session = new transport_1.AsciiMsgTransmitter(config);
            const parser = new buffer_1.AsciiParser(definitions, session.encodeStream, buffer_1.AsciiChars.Pipe);
            parser.on('msg', (msgType, view) => {
                resolve(view.toObject());
            });
            parser.on('error', (e) => {
                reject(e);
            });
            session.send(msgType, msg);
        }));
    });
}
test('test logon JSON => object => fix => object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = 'A';
    const file = path.join(root, 'examples/FIX.4.4/quickfix/logon/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('test execution report JSON => object => fix => object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = '8';
    const file = path.join(root, 'examples/FIX.4.4/quickfix/execution-report/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 2000);
test('test order cxl reject JSON => object => fix => object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = '9';
    const file = path.join(root, 'examples/FIX.4.4/quickfix/order-cancel-reject/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('test quote request JSON => object => fix => object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = 'R';
    const file = path.join(root, 'examples/FIX.4.4/quickfix/quote-request/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('test md request JSON => object => fix => object', () => __awaiter(this, void 0, void 0, function* () {
    const msgType = 'W';
    const file = path.join(root, 'examples/FIX.4.4/quickfix/md-data-snapshot/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
//# sourceMappingURL=qf-full-msg.test.js.map