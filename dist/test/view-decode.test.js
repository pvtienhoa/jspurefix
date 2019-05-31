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
const config_1 = require("../config");
const util_1 = require("../util");
const root = path.join(__dirname, '../../data');
let definitions;
let session;
let views;
let structure;
let view;
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/qf-fix44.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    const config = new config_1.JsFixConfig(null, definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
    session = new transport_1.AsciiMsgTransmitter(config);
    views = yield util_1.replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/quickfix/md-data-snapshot/fix.txt'), buffer_1.AsciiChars.Pipe);
    if (views && views.length > 0) {
        view = views[0];
        structure = view.structure;
    }
}), 45000);
test('expect a structure from fix msg', () => {
    expect(structure).toBeTruthy();
});
test('get NoMDEntries directly - expect an array', () => {
    const noMDEntriesView = view.getView('NoMDEntries');
    expect(noMDEntriesView).toBeTruthy();
    const noMDEntries = noMDEntriesView.toObject();
    expect(Array.isArray(noMDEntries)).toEqual(true);
    expect(noMDEntries.length).toEqual(2);
});
test('get NoMDEntries via MDFullGrp - array within a component', () => {
    const mdFullGrp = view.getView('MDFullGrp');
    expect(mdFullGrp).toBeTruthy();
    const mdFullGrpAsObject = mdFullGrp.toObject();
    const noMDEntries = mdFullGrpAsObject.NoMDEntries;
    expect(Array.isArray(noMDEntries)).toEqual(true);
    expect(noMDEntries.length).toEqual(2);
});
function getMdEntriesObjects() {
    const noMDEntriesView = view.getView('NoMDEntries');
    expect(noMDEntriesView).toBeTruthy();
    const noMDEntries = noMDEntriesView.toObject();
    expect(Array.isArray(noMDEntries)).toEqual(true);
    expect(noMDEntries.length).toEqual(2);
    return noMDEntries;
}
test('get UTCDATEONLY from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryDateAsString = mmEntryView.getString('MDEntryDate');
    expect(mmEntryDateAsString).toEqual('20180608');
    expect(mmEntryView.getString(272)).toEqual('20180608');
    const asUtc = new Date(Date.UTC(2018, 5, 8));
    expect(instance.MDEntryDate).toEqual(asUtc);
});
test('get UTCTIMEONLY from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryTimeAsString = mmEntryView.getString('MDEntryTime');
    expect(mmEntryTimeAsString).toEqual('20:53:14.717');
    expect(mmEntryView.getString(273)).toEqual('20:53:14.717');
    const asUtc = new Date(Date.UTC(0, 0, 0, 20, 53, 14, 717));
    expect(instance.MDEntryTime).toEqual(asUtc);
});
test('get UTCTIMESTAMP from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryExpireTimeAsString = mmEntryView.getString('ExpireTime');
    expect(mmEntryExpireTimeAsString).toEqual('20180608-20:53:14.000');
    expect(mmEntryView.getString(126)).toEqual('20180608-20:53:14.000');
    const asUtc = new Date(Date.UTC(2018, 5, 8, 20, 53, 14, 0));
    const d = instance.ExpireTime;
    expect(d).toEqual(asUtc);
});
test('get MinQty from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryMinQtyAsString = mmEntryView.getString('MinQty');
    expect(mmEntryMinQtyAsString).toEqual('53495');
    expect(mmEntryView.getString(110)).toEqual('53495');
    expect(instance.MinQty).toEqual(53495);
});
test('get selection tags one call - tag ids', () => {
    const [a, b, c, d] = view.getTypedTags([8, 9, 35, 49]);
    expect(a).toEqual('FIX4.4');
    expect(b).toEqual(2955);
    expect(c).toEqual('W');
    expect(d).toEqual('sender-10');
});
test('get selection tags one call - tag names', () => {
    const [a, b, c, d, e, f] = view.getTypedTags([
        'BeginString',
        'BodyLength',
        'MsgType',
        'MsgSeqNum',
        'MDReqID',
        'Symbol'
    ]);
    expect(a).toEqual('FIX4.4');
    expect(b).toEqual(2955);
    expect(c).toEqual('W');
    expect(d).toEqual(1);
    expect(e).toEqual('ipsum');
    expect(f).toEqual('sit');
});
test('nested view fetch', () => {
    const legGrpView = view.getView('InstrmtLegGrp.NoLegs');
    expect(legGrpView).toBeTruthy();
    const legGrp = legGrpView.toObject();
    expect(legGrp).toBeTruthy();
    expect(Array.isArray(legGrp));
    expect(legGrp.length).toEqual(2);
});
//# sourceMappingURL=view-decode.test.js.map