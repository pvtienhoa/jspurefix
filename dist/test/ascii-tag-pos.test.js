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
let tp;
const testTags = [
    new buffer_1.TagPos(0, 120, 0, 1),
    new buffer_1.TagPos(1, 50, 1, 1),
    new buffer_1.TagPos(2, 50, 2, 1),
    new buffer_1.TagPos(3, 120, 3, 1),
    new buffer_1.TagPos(4, 100, 4, 1)
];
const expected = [
    new buffer_1.TagPos(1, 50, 1, 1),
    new buffer_1.TagPos(2, 50, 2, 1),
    new buffer_1.TagPos(4, 100, 4, 1),
    new buffer_1.TagPos(0, 120, 0, 1),
    new buffer_1.TagPos(3, 120, 3, 1)
];
const unsortedLogon = [
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
    new buffer_1.TagPos(20, 554, 196, 11)
];
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/test-initiator.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    const config = new config_1.JsFixConfig(null, definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
    session = new transport_1.AsciiMsgTransmitter(config);
    views = yield util_1.replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/quickfix/logon/fix.txt'), buffer_1.AsciiChars.Pipe);
    if (views && views.length > 0) {
        structure = views[0].structure;
        tp = views[0].structure.tags.tagPos.slice(0, views[0].segment.endPosition);
    }
}), 45000);
test('logon tags parsed fully', () => {
    expect(tp).toEqual(unsortedLogon);
});
test('expect tags to sort in tag first order', () => {
    const sorted = testTags.slice().sort(buffer_1.TagPos.compare);
    const sortedTags = sorted.map(e => e.tag);
    expect(sortedTags).toEqual([50, 50, 100, 120, 120]);
});
test('expect tags to sort in tag then start order', () => {
    const sorted = testTags.slice().sort(buffer_1.TagPos.compare);
    expect(sorted[0].tag).toEqual(sorted[1].tag);
    expect(sorted[0].start < sorted[1].start).toEqual(true);
});
test('expect start to carry with its tag', () => {
    const sorted = testTags.slice().sort(buffer_1.TagPos.compare);
    expect(sorted).toEqual(expected);
});
test('binary search on sorted', () => {
    const sorted = testTags.slice().sort(buffer_1.TagPos.compare);
    expect(buffer_1.TagPos.binarySearch(sorted, 100)).toEqual(2);
});
test('binary search for non existing tag', () => {
    const sorted = testTags.slice().sort(buffer_1.TagPos.compare);
    expect(buffer_1.TagPos.binarySearch(sorted, 1000) < 0).toEqual(true);
});
test('binary search duplicate tag', () => {
    const sorted = testTags.slice().sort(buffer_1.TagPos.compare);
    expect(buffer_1.TagPos.binarySearch(sorted, 50) <= 1).toEqual(true);
});
test('check logon', () => {
    const sorted = tp.slice().sort(buffer_1.TagPos.compare);
    expect(sorted[0].tag).toEqual(8);
    expect(sorted[sorted.length - 1].tag).toEqual(789);
});
//# sourceMappingURL=ascii-tag-pos.test.js.map