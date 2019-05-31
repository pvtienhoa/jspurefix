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
const buffer_1 = require("../buffer");
const util_1 = require("../util");
const transport_1 = require("../transport");
const path = require("path");
let definitions;
let jsonHelper;
const root = path.join(__dirname, '../../data');
const logon = '8=FIX4.4|9=0000208|35=A|49=sender-10|56=target-20|34=1|57=sub-a|52=20180610-10:39:01.621|98=2|108=62441|95=20|96=VgfoSqo56NqSVI1fLdlI|141=Y|789=4886|383=20|384=1|372=ipsum|385=R|464=N|553=sit|554=consectetur|10=49|';
const expectedTagPos = [
    new buffer_1.TagPos(0, 8, 2, 6),
    new buffer_1.TagPos(1, 9, 11, 7),
    new buffer_1.TagPos(2, 35, 22, 1),
    new buffer_1.TagPos(3, 49, 27, 9),
    new buffer_1.TagPos(4, 56, 40, 9),
    new buffer_1.TagPos(5, 34, 53, 1),
    new buffer_1.TagPos(6, 57, 58, 5),
    new buffer_1.TagPos(7, 52, 67, 21),
    new buffer_1.TagPos(8, 98, 92, 1),
    new buffer_1.TagPos(9, 108, 98, 5),
    new buffer_1.TagPos(10, 95, 107, 2),
    new buffer_1.TagPos(11, 96, 113, 20),
    new buffer_1.TagPos(12, 141, 138, 1),
    new buffer_1.TagPos(13, 789, 144, 4),
    new buffer_1.TagPos(14, 383, 153, 2),
    new buffer_1.TagPos(15, 384, 160, 1),
    new buffer_1.TagPos(16, 372, 166, 5),
    new buffer_1.TagPos(17, 385, 176, 1),
    new buffer_1.TagPos(18, 464, 182, 1),
    new buffer_1.TagPos(19, 553, 188, 3),
    new buffer_1.TagPos(20, 554, 196, 11),
    new buffer_1.TagPos(21, 10, 211, 2)
];
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    expect.assertions(1);
    const sessionDescription = require(path.join(root, 'session/test-initiator.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    jsonHelper = new util_1.JsonHelper(definitions);
}), 45000);
class ParsingResult {
    constructor(event, msgType, view, contents, parser) {
        this.event = event;
        this.msgType = msgType;
        this.view = view;
        this.contents = contents;
        this.parser = parser;
    }
}
function toParse(text, chunks = false) {
    return new Promise((resolve, reject) => {
        const parser = new buffer_1.AsciiParser(definitions, new transport_1.StringDuplex(text, chunks).readable, buffer_1.AsciiChars.Pipe);
        parser.on('error', (e) => {
            reject(e);
        });
        parser.on('msg', (msgType, view) => {
            resolve(new ParsingResult('msg', msgType, view.clone(), parser.state.elasticBuffer.toString(), parser));
        });
        parser.on('done', () => {
            resolve(new ParsingResult('done', null, null, parser.state.elasticBuffer.toString(), parser));
        });
    });
}
test('begin string incorrectly placed', () => {
    return expect(toParse('8=FIX4.4|8=FIX4.4|')).rejects.toEqual(new Error('BeginString: not expected at position [2]'));
});
test('body length incorrectly placed', () => {
    return expect(toParse('8=FIX4.4|9=101|9=101|')).rejects.toEqual(new Error('BodyLengthTag: not expected at position [3]'));
});
test('msg type incorrectly placed', () => {
    return expect(toParse('8=FIX4.4|9=101|35=A|35=A|')).rejects.toEqual(new Error('MsgTag: not expected at position [4]'));
});
test('do not start with 8=', () => {
    return expect(toParse('59=FIX4.4|')).rejects.toEqual(new Error('position 1 [59] must be BeginString: 8='));
});
test('body length incorrectly placed', () => {
    return expect(toParse('8=FIX4.4|59=101|9=101|')).rejects.toEqual(new Error('position 2 [59] must be BodyLengthTag: 9='));
});
test('msgTag incorrectly placed', () => {
    return expect(toParse('8=FIX4.4|9=101|59=A|')).rejects.toEqual(new Error('position 3 [59] must be MsgTag: 35='));
});
test('first 3 fields correctly placed', () => __awaiter(this, void 0, void 0, function* () {
    const res = yield toParse('8=FIX4.4|9=101|35=A|');
    expect(res.event).toEqual('done');
}));
test('complete msg parsed', () => __awaiter(this, void 0, void 0, function* () {
    const res = yield toParse(logon);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
}));
test('complete msg in chunks parsed', () => __awaiter(this, void 0, void 0, function* () {
    const res = yield toParse(logon, true);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
}));
test('msg sent in chunks matches parser buffer', () => __awaiter(this, void 0, void 0, function* () {
    const res = yield toParse(logon, true);
    expect(res.msgType).toEqual('A');
    expect(res.contents).toEqual(logon);
}));
test('logon parsers to correct tag set', () => __awaiter(this, void 0, void 0, function* () {
    const res = yield toParse(logon, true);
    expect(res.msgType).toEqual('A');
    expect(res.view.structure.tags.tagPos).toEqual(expectedTagPos);
}));
test('tags other than 10 past body length', () => __awaiter(this, void 0, void 0, function* () {
    const begin = '8=FIX4.4|9=0000208|';
    const changed = logon.replace('10=49|', '555=you know nothin|10=49');
    return expect(toParse(changed)).rejects.toEqual(new Error(`Tag: [555] cant be after ${208 + begin.length - 1}`));
}));
test('unknown message type', () => __awaiter(this, void 0, void 0, function* () {
    const changed = logon.replace('35=A', '35=ZZ');
    const res = yield toParse(changed);
    expect(res.view).toBeTruthy();
    expect(res.view.segment.type).toEqual(buffer_1.SegmentType.Unknown);
}));
test('missing 1 required tag', () => __awaiter(this, void 0, void 0, function* () {
    const changed = logon.replace('108=62441|', '000=62441|');
    const res = yield toParse(changed);
    expect(res.view).toBeTruthy();
    const missing = res.view.missing();
    expect(missing).toEqual([108]);
}));
test('missing 2 required tags', () => __awaiter(this, void 0, void 0, function* () {
    const changed = logon.replace('98=2|108=62441|', '01=2|000=62441|');
    const res = yield toParse(changed);
    expect(res.view).toBeTruthy();
    const missing = res.view.missing();
    expect(missing).toEqual([98, 108]);
}));
//# sourceMappingURL=ascii-parser.test.js.map