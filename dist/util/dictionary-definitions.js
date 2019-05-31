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
const dictionary_1 = require("../dictionary");
const config_1 = require("../config");
const path = require("path");
const fs = require("fs");
const root = path.join(__dirname, '../../');
function getDictPath(p) {
    const dictionary = require(path.join(root, 'data/dictionary.json'));
    return dictionary[p];
}
exports.getDictPath = getDictPath;
function getDefinitions(path, getLogger = config_1.makeEmptyLogger) {
    return __awaiter(this, void 0, void 0, function* () {
        let parser;
        const dp = getDictPath(path);
        if (dp) {
            path = dp.dict;
        }
        path = norm(path);
        if (fs.lstatSync(path).isDirectory() && path.indexOf('fixml') >= 0) {
            parser = new dictionary_1.FixXsdParser(path, getLogger);
        }
        else if (fs.lstatSync(path).isDirectory()) {
            parser = new dictionary_1.RepositoryXmlParser(path, getLogger);
        }
        else {
            parser = new dictionary_1.QuickFixXmlFileParser(path, getLogger);
        }
        return parser.parse();
    });
}
exports.getDefinitions = getDefinitions;
function norm(p) {
    let f = p;
    if (!path.isAbsolute(p)) {
        f = path.join(root, f);
    }
    return f;
}
//# sourceMappingURL=dictionary-definitions.js.map