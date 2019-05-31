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
const root = path.join(__dirname, '../../data');
let definitions;
let views;
let expected;
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/test-initiator.json'));
    expected = require(path.join(root, 'examples/FIX.4.4/fix.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    views = yield util_1.replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/fix.txt'), buffer_1.AsciiChars.Pipe);
}), 45000);
test('expect 50 messages in log', () => {
    expect(views.length).toEqual(50);
});
test('expect 50 messages of specific types in log', () => {
    const layout = views.reduce((a, latest) => {
        const def = definitions.message.get(latest.segment.name);
        if (def) {
            let lookup = a[def.msgType];
            if (!lookup) {
                lookup = 1;
            }
            else {
                lookup++;
            }
            a[def.msgType] = lookup;
        }
        return a;
    }, {});
    expect(layout).toEqual(expected);
});
//# sourceMappingURL=fix-log-replay.test.js.map