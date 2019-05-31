"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("../tags");
var ParseState;
(function (ParseState) {
    ParseState[ParseState["BeginField"] = 1] = "BeginField";
    ParseState[ParseState["ParsingTag"] = 2] = "ParsingTag";
    ParseState[ParseState["ParsingValue"] = 3] = "ParsingValue";
    ParseState[ParseState["ParsingRawDataLength"] = 4] = "ParsingRawDataLength";
    ParseState[ParseState["ParsingRawData"] = 5] = "ParsingRawData";
    ParseState[ParseState["MsgComplete"] = 6] = "MsgComplete";
})(ParseState = exports.ParseState || (exports.ParseState = {}));
class AsciiParserState {
    constructor(elasticBuffer) {
        this.elasticBuffer = elasticBuffer;
    }
    beginTag(pos) {
        this.parseState = ParseState.ParsingTag;
        this.tagStartPos = pos;
        this.equalPos = this.valueEndPos = -1;
        this.currentTag = 0;
    }
    endTag(pos) {
        this.equalPos = pos;
        const state = this.parseState;
        switch (state) {
            case ParseState.ParsingTag: {
                this.currentTag = this.elasticBuffer.getWholeNumber(this.tagStartPos, pos - 1);
                break;
            }
            default:
                throw new Error(`EndTag: unexpected state ${state}`);
        }
        this.checkRawTag();
    }
    incRaw() {
        ++this.rawDataRead;
        return this.rawDataRead === this.rawDataLen + 1;
    }
    checkRawTag() {
        const msg = this.message;
        if (!msg || !msg.containsRaw) {
            this.parseState = ParseState.ParsingValue;
            return;
        }
        const isDataLength = msg.containedLength[this.currentTag];
        if (isDataLength) {
            this.parseState = ParseState.ParsingRawDataLength;
        }
        else {
            this.rawDataRead = 0;
            const isData = this.rawDataLen > 0;
            if (isData) {
                this.parseState = ParseState.ParsingRawData;
            }
            else {
                this.parseState = ParseState.ParsingValue;
            }
        }
    }
    store() {
        const valueEndPos = this.elasticBuffer.getPos() - 1;
        this.valueEndPos = valueEndPos;
        const equalPos = this.equalPos;
        const tag = this.currentTag;
        const locations = this.locations;
        const buffer = this.elasticBuffer;
        const terminates = this.checksumExpectedPos;
        switch (this.parseState) {
            case ParseState.ParsingValue:
            case ParseState.ParsingRawData: {
                this.rawDataLen = 0;
                locations.store(equalPos + 1, valueEndPos - equalPos - 1, tag);
                break;
            }
            case ParseState.ParsingRawDataLength: {
                this.rawDataLen = buffer.getWholeNumber(equalPos + 1, valueEndPos - 1);
                locations.store(equalPos + 1, valueEndPos - equalPos - 1, tag);
                break;
            }
        }
        this.parseState = ParseState.BeginField;
        this.count++;
        const nextTagPos = locations.nextTagPos;
        switch (tag) {
            case tags_1.Tags.BeginString: {
                if (nextTagPos !== 1) {
                    throw new Error(`BeginString: not expected at position [${nextTagPos}]`);
                }
                break;
            }
            case tags_1.Tags.BodyLengthTag: {
                if (nextTagPos !== 2) {
                    throw new Error(`BodyLengthTag: not expected at position [${nextTagPos}]`);
                }
                this.bodyLen = buffer.getWholeNumber(equalPos + 1, valueEndPos - 1);
                this.checksumExpectedPos = this.bodyLen + valueEndPos;
                this.elasticBuffer.checkGrowBuffer(this.bodyLen);
                break;
            }
            case tags_1.Tags.MsgTag: {
                if (nextTagPos !== 3) {
                    throw new Error(`MsgTag: not expected at position [${nextTagPos}]`);
                }
                this.msgType = buffer.getString(equalPos + 1, valueEndPos);
                this.message = locations.definitions.message.get(this.msgType);
                break;
            }
            case tags_1.Tags.CheckSumTag: {
                if (valueEndPos < this.bodyLen) {
                    throw new Error(`CheckSumTag: [${valueEndPos}] expected after ${this.bodyLen}`);
                }
                this.parseState = ParseState.MsgComplete;
                break;
            }
            default: {
                if (terminates && valueEndPos > terminates) {
                    throw new Error(`Tag: [${tag}] cant be after ${terminates}`);
                }
                break;
            }
        }
        switch (nextTagPos) {
            case 1: {
                if (tag !== tags_1.Tags.BeginString) {
                    throw new Error(`position 1 [${tag}] must be BeginString: 8=`);
                }
                break;
            }
            case 2: {
                if (tag !== tags_1.Tags.BodyLengthTag) {
                    throw new Error(`position 2 [${tag}] must be BodyLengthTag: 9=`);
                }
                break;
            }
            case 3: {
                if (tag !== tags_1.Tags.MsgTag) {
                    throw new Error(`position 3 [${tag}] must be MsgTag: 35=`);
                }
                break;
            }
        }
    }
    beginMessage() {
        this.elasticBuffer.reset();
        this.locations.reset();
        this.checksumExpectedPos = 0;
        this.parseState = ParseState.BeginField;
        this.count = 0;
        this.currentTag = 0;
        this.tagStartPos = 0;
        this.valueEndPos = 0;
        this.equalPos = 0;
        this.rawDataRead = 0;
        this.rawDataLen = 0;
        this.bodyLen = 0;
        this.message = null;
        this.msgType = null;
    }
}
exports.AsciiParserState = AsciiParserState;
//# sourceMappingURL=ascii-parser-state.js.map