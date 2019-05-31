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
const transport_1 = require("../transport");
const util_1 = require("../util");
const config_1 = require("../config");
const root = path.join(__dirname, '../../data');
let definitions;
let session;
let views;
let structure;
const asStrings = [
    'FIX4.4',
    '0000208',
    'A',
    'sender-10',
    'target-20',
    '1',
    'sub-a',
    '20180610-10:39:01.621',
    '2',
    '62441',
    '20',
    'VgfoSqo56NqSVI1fLdlI',
    'Y',
    '4886',
    '20',
    '1',
    'ipsum',
    'R',
    'N',
    'sit',
    'consectetur',
    '49'
];
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/qf-fix44.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    const config = new config_1.JsFixConfig(null, definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
    session = new transport_1.AsciiMsgTransmitter(config);
    views = yield util_1.replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/quickfix/logon/fix.txt'), buffer_1.AsciiChars.Pipe);
    if (views && views.length > 0) {
        structure = views[0].structure;
    }
}), 45000);
test('expect a structure from fix msg', () => {
    expect(structure).toBeTruthy();
});
test('Logon structure', () => {
    const logon = structure.layout.Logon;
    expect(logon).toBeTruthy();
    expect(logon.type).toEqual(buffer_1.SegmentType.Msg);
    expect(logon.startPosition).toEqual(0);
    expect(logon.startTag).toEqual(8);
    expect(logon.endPosition).toEqual(21);
    expect(logon.endTag).toEqual(554);
});
test('Logon MsgTypes', () => {
    const msgTypes = structure.layout.NoMsgTypes;
    expect(msgTypes).toBeTruthy();
    expect(msgTypes.type).toEqual(buffer_1.SegmentType.Group);
    expect(msgTypes.delimiterTag).toEqual(372);
    expect(msgTypes.delimiterPositions.length).toEqual(1);
    expect(msgTypes.delimiterPositions).toEqual([16]);
});
test('Logon Object', () => {
    const logonAsObject = views[0].toObject();
    expect(logonAsObject).toBeTruthy();
    expect(logonAsObject.Username).toEqual('sit');
    expect(logonAsObject.Password).toEqual('consectetur');
    expect(logonAsObject.NoMsgTypes).toEqual([
        {
            MsgDirection: 'R',
            RefMsgType: 'ipsum'
        }
    ]);
});
test('values as strings', () => {
    const view = views[0];
    const strings = view.getStrings();
    expect(strings).toEqual(asStrings);
});
//# sourceMappingURL=logon.test.js.map