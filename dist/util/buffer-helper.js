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
const util_1 = require("util");
const fs = require("fs");
function getWords(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const readFile = util_1.promisify(fs.readFile);
        const res = yield readFile(path);
        return res.toString().split(' ').map((w) => w.trim());
    });
}
exports.getWords = getWords;
//# sourceMappingURL=buffer-helper.js.map