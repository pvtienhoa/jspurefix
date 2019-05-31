"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../buffer");
const dictionary_1 = require("../dictionary");
class MessageGenerator {
    constructor(words, definitions) {
        this.words = words;
        this.definitions = definitions;
        this.word = 0;
        this.length = 0;
    }
    static getRandomEnum(field) {
        const tagType = field.tagType;
        const keys = field.enums.keys();
        const choice = keys[Math.floor(Math.random() * keys.length)];
        switch (tagType) {
            case buffer_1.TagType.Int: {
                return parseInt(choice, 10);
            }
            case buffer_1.TagType.Float: {
                return parseFloat(choice);
            }
            case buffer_1.TagType.Boolean: {
                return choice === 'Y';
            }
            default: {
                return choice;
            }
        }
    }
    static randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static makeRandomString(len) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < len; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    static makeBuffer(len) {
        return Buffer.from(MessageGenerator.makeRandomString(len));
    }
    generate(msgType, density, repeatGroups = true) {
        if (!density) {
            density = 1.0;
        }
        density = Math.max(0.2, density);
        density = Math.min(1.0, density);
        const def = this.definitions.message.get(msgType);
        if (!def) {
            throw new Error(`definitions do not contain type ${msgType}`);
        }
        return this.toObject(def, density, repeatGroups);
    }
    toObject(set, density, repeatGroups) {
        return dictionary_1.reduceSet(set, {
            simple: (a, sf) => {
                const tag = sf.definition.tag;
                let include = tag === set.firstSimple.definition.tag || this.length > 0 || Math.random() <= density;
                if (include) {
                    const val = sf.definition.isEnum() ? MessageGenerator.getRandomEnum(sf.definition) : this.createSimple(sf);
                    if (val != null) {
                        a[sf.name] = val;
                    }
                }
            },
            component: (a, cf) => {
                if (cf.name !== 'StandardHeader' && cf.name !== 'StandardTrailer') {
                    a[cf.name] = this.toObject(cf.definition, density, repeatGroups);
                }
            },
            group: (a, gf) => {
                if (repeatGroups) {
                    const numberGroups = MessageGenerator.randomIntFromInterval(1, 3);
                    const arr = new Array(numberGroups);
                    a[gf.name] = arr;
                    for (let j = 0; j < numberGroups; ++j) {
                        arr[j] = this.toObject(gf.definition, density, repeatGroups);
                    }
                }
            }
        }, {});
    }
    createSimple(field) {
        const tagType = field.definition.tagType;
        switch (tagType) {
            case buffer_1.TagType.String: {
                return this.nextString();
            }
            case buffer_1.TagType.Float: {
                this.length = 0;
                const sign = MessageGenerator.randomIntFromInterval(1, 10) <= 5 ? 1 : -1;
                const num = sign * MessageGenerator.randomIntFromInterval(1, 100000);
                const raised = MessageGenerator.randomIntFromInterval(1, 8);
                const r = num * Math.pow(10, -1 * raised);
                return Math.round(r * 1e7) / 1e7;
            }
            case buffer_1.TagType.Int: {
                this.length = 0;
                return MessageGenerator.randomIntFromInterval(1, 100000);
            }
            case buffer_1.TagType.Length: {
                this.length = MessageGenerator.randomIntFromInterval(5, 20);
                return this.length;
            }
            case buffer_1.TagType.Boolean: {
                this.length = 0;
                return MessageGenerator.randomIntFromInterval(1, 2) === 1;
            }
            case buffer_1.TagType.UtcDateOnly: {
                this.length = 0;
                const now = new Date();
                return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
            }
            case buffer_1.TagType.UtcTimeOnly: {
                this.length = 0;
                const s = new Date();
                return new Date(Date.UTC(0, 0, 0, s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()));
            }
            case buffer_1.TagType.UtcTimestamp: {
                this.length = 0;
                const now = new Date();
                return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
            }
            case buffer_1.TagType.LocalDate: {
                const now = new Date();
                return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
            }
            case buffer_1.TagType.RawData: {
                const length = this.length;
                this.length = 0;
                return length > 0 ? MessageGenerator.makeBuffer(length) : null;
            }
            default: {
                throw new Error(`cannot manage type ${tagType}`);
            }
        }
    }
    nextString() {
        const words = this.words;
        const w = words[this.word++];
        if (this.word === words.length) {
            this.word = 0;
        }
        return w;
    }
}
exports.MessageGenerator = MessageGenerator;
//# sourceMappingURL=message-generator.js.map