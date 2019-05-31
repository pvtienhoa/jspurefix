"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_pos_1 = require("./tag-pos");
const enum_1 = require("../types/enum");
var TagType;
(function (TagType) {
    TagType[TagType["String"] = 1] = "String";
    TagType[TagType["Int"] = 2] = "Int";
    TagType[TagType["Float"] = 3] = "Float";
    TagType[TagType["Boolean"] = 4] = "Boolean";
    TagType[TagType["UtcTimestamp"] = 5] = "UtcTimestamp";
    TagType[TagType["UtcDateOnly"] = 6] = "UtcDateOnly";
    TagType[TagType["UtcTimeOnly"] = 7] = "UtcTimeOnly";
    TagType[TagType["LocalDate"] = 8] = "LocalDate";
    TagType[TagType["RawData"] = 9] = "RawData";
    TagType[TagType["Length"] = 10] = "Length";
    TagType[TagType["Unknown"] = 11] = "Unknown";
})(TagType = exports.TagType || (exports.TagType = {}));
class Tags {
    constructor(definitions, startingLength = 30 * 1000) {
        this.definitions = definitions;
        this.startingLength = startingLength;
        this.tagPos = new Array(this.startingLength);
        this.nextTagPos = 0;
    }
    static toJSType(simple) {
        switch (simple.definition.tagType) {
            case TagType.String:
                return 'string';
            case TagType.Int:
            case TagType.Float:
            case TagType.Length:
                return 'number';
            case TagType.RawData:
                return 'Buffer';
            case TagType.Boolean:
                return 'boolean';
            case TagType.UtcTimestamp:
            case TagType.UtcDateOnly:
            case TagType.UtcTimeOnly:
            case TagType.LocalDate:
                return 'Date';
            default:
                return 'string';
        }
    }
    static toType(type) {
        if (type === 'Currency') {
            type = 'string';
        }
        type = type || 'string';
        switch (type.toLowerCase()) {
            case 'string':
            case 'char': {
                return TagType.String;
            }
            case 'int':
            case 'numingroup':
            case 'seqnum': {
                return TagType.Int;
            }
            case 'currency':
            case 'qty':
            case 'percentage':
            case 'amt':
            case 'price':
            case 'priceoffset':
            case 'float': {
                return TagType.Float;
            }
            case 'length': {
                return TagType.Length;
            }
            case 'boolean': {
                return TagType.Boolean;
            }
            case 'utctimestamp': {
                return TagType.UtcTimestamp;
            }
            case 'localmktdate': {
                return TagType.LocalDate;
            }
            case 'utcdateonly': {
                return TagType.UtcDateOnly;
            }
            case 'utctimeonly': {
                return TagType.UtcTimeOnly;
            }
            case 'data': {
                return TagType.RawData;
            }
            default: {
                return TagType.String;
            }
        }
    }
    clone() {
        const next = this.nextTagPos;
        const cloned = new Tags(this.definitions, next);
        cloned.nextTagPos = next;
        for (let i = 0; i < next; ++i) {
            cloned.tagPos[i] = this.tagPos[i].clone();
        }
        return cloned;
    }
    reset() {
        this.nextTagPos = 0;
    }
    store(start, len, tag) {
        const tagPtr = this.nextTagPos;
        if (tagPtr === this.tagPos.length) {
            this.expand();
        }
        const tp = this.tagPos[tagPtr];
        if (tp) {
            tp.assign(tagPtr, tag, start, len);
        }
        else {
            this.tagPos[tagPtr] = new tag_pos_1.TagPos(tagPtr, tag, start, len);
        }
        this.nextTagPos++;
    }
    expand() {
        const size = this.tagPos.length * 2;
        const tagPos = new Array(size);
        for (let i = 0; i < this.tagPos.length; ++i) {
            tagPos[i] = this.tagPos[i];
        }
        this.tagPos = tagPos;
    }
}
Tags.BeginString = enum_1.MsgTag.BeginString;
Tags.BodyLengthTag = enum_1.MsgTag.BodyLength;
Tags.CheckSumTag = enum_1.MsgTag.CheckSum;
Tags.MsgTag = enum_1.MsgTag.MsgType;
exports.Tags = Tags;
//# sourceMappingURL=tags.js.map