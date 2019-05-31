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
const transport_1 = require("../transport");
const util_1 = require("../util");
const path = require("path");
let definitions;
let jsonHelper;
const root = path.join(__dirname, '../../data');
const logon = '8=FIX4.4|9=0000208|35=A|49=sender-10|56=target-20|34=1|57=sub-a|52=20180610-10:39:01.621|98=2|108=62441|95=20|96=VgfoSqo56NqSVI1fLdlI|141=Y|789=4886|383=20|384=1|372=ipsum|385=R|464=N|553=sit|554=consectetur|10=49|';
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
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
test('0 gaps', () => __awaiter(this, void 0, void 0, function* () {
    const res = yield toParse(logon);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    const unknowns = res.view.structure.layout['.undefined'];
    expect(unknowns).toBeFalsy();
    const o = res.view.toObject();
    expect(o).toBeTruthy();
    expect(o.Password).toEqual('consectetur');
    expect(o.Username).toEqual('sit');
}));
test('1 gap', () => __awaiter(this, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|9999=im not here');
    const res = yield toParse(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    const unknown = res.view.structure.layout['.undefined'];
    expect(unknown).toBeTruthy();
    expect(unknown.startTag).toEqual(9999);
    expect(unknown.startPosition).toEqual(10);
    const o = res.view.toObject();
    expect(o).toBeTruthy();
    expect(o.Password).toEqual('consectetur');
    expect(o.Username).toEqual('sit');
}));
test('1 gap next to 1 gap', () => __awaiter(this, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|');
    const res = yield toParse(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    const unknowns = res.view.structure.layout['.undefined'];
    expect(unknowns).toBeTruthy();
    expect(Array.isArray(unknowns)).toEqual(true);
    expect(unknowns[0].startTag).toEqual(1);
    expect(unknowns[0].startPosition).toEqual(10);
    expect(unknowns[1].startTag).toEqual(2);
    expect(unknowns[1].startPosition).toEqual(11);
    const o = res.view.toObject();
    expect(o).toBeTruthy();
    expect(o.Password).toEqual('consectetur');
    expect(o.Username).toEqual('sit');
}));
test('1 gap undefined msg', () => __awaiter(this, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|9999=im not here');
    const res = yield toParse(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    expect(res.view.getUndefined()).toBeTruthy();
    expect(res.view.undefinedForMsg()).toEqual('undefined tag = 9999');
}));
test('2 gap undefined msg', () => __awaiter(this, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|');
    const res = yield toParse(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    expect(res.view.getUndefined()).toBeTruthy();
    expect(res.view.undefinedForMsg()).toEqual('undefined tags = 1, 2');
}));
//# sourceMappingURL=ascii-segment.test.js.map