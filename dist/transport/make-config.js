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
const config_1 = require("../config");
const util_1 = require("../util");
function makeConfig(description, logFactory, msgFactory) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const definitions = yield util_1.getDefinitions(description.application.dictionary, (t) => logFactory.logger(`${description.application.type}.${t}`));
                const config = new config_1.JsFixConfig(msgFactory, definitions, description, buffer_1.AsciiChars.Soh, logFactory);
                accept(config);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.makeConfig = makeConfig;
//# sourceMappingURL=make-config.js.map