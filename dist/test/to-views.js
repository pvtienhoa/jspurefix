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
const config_1 = require("../config");
const buffer_1 = require("../buffer");
const util_1 = require("../util");
class ToViews {
    constructor(testFolder) {
        this.testFolder = testFolder;
        this.views = [];
        this.batch = null;
        this.root = path.join(__dirname, '../../data');
    }
    load(file = 'repofixml') {
        return __awaiter(this, void 0, void 0, function* () {
            const root = this.root;
            const testFolder = this.testFolder;
            const views = this.views;
            this.definitions = yield util_1.getDefinitions(file);
            const definitions = this.definitions;
            const fs = require('fs');
            const fullName = path.join(root, `${testFolder}/fix.xml`);
            const readStream = fs.createReadStream(fullName);
            const sessionDescription = require(path.join(root, 'session/test-initiator.json'));
            const config = new config_1.JsFixConfig(null, definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
            const xmlParser = new buffer_1.FiXmlParser(config, readStream);
            return new Promise((accept, reject) => {
                xmlParser.on('msg', (msgType, v) => {
                    views.push(v.clone());
                });
                xmlParser.on('batch', (msgType, v) => {
                    this.batch = v.clone();
                });
                xmlParser.on('close', () => {
                    accept();
                });
                xmlParser.on('error', (e) => {
                    reject(e);
                });
            });
        });
    }
}
exports.ToViews = ToViews;
//# sourceMappingURL=to-views.js.map