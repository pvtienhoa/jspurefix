"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = require("../../dictionary");
const msg_encoder_1 = require("../msg-encoder");
const time_formatter_1 = require("./time-formatter");
const ascii_chars_1 = require("../ascii-chars");
const tags_1 = require("../tags");
class AsciiEncoder extends msg_encoder_1.MsgEncoder {
    constructor(buffer, definitions, timeFormatter = new time_formatter_1.TimeFormatter(buffer), delimiter = ascii_chars_1.AsciiChars.Soh) {
        super(definitions);
        this.buffer = buffer;
        this.definitions = definitions;
        this.timeFormatter = timeFormatter;
        this.delimiter = delimiter;
    }
    static checkGroupInstanceHasDelimiter(gf, instance) {
        const delimiterField = gf.definition.firstSimple;
        if (!delimiterField) {
            throw new Error(`group definition has delimiter field ${delimiterField.definition.name}`);
        }
        while (instance != null) {
            if (instance[delimiterField.definition.name] != null) {
                return true;
            }
            const first = gf.definition.fields[0];
            switch (first.type) {
                case dictionary_1.ContainedFieldType.Component: {
                    const cf = first;
                    instance = instance[cf.definition.name];
                    break;
                }
                default:
                    instance = null;
            }
        }
    }
    encodeSet(objectToEncode, set) {
        const fields = this.getFields(set, objectToEncode);
        dictionary_1.dispatchFields(fields, {
            simple: (sf) => {
                const val = objectToEncode[sf.name];
                if (val != null) {
                    this.encodeSimple(objectToEncode, set, sf, val);
                }
            },
            component: (cf) => {
                const instance = objectToEncode[cf.definition.name];
                if (instance) {
                    this.encodeSet(instance, cf.definition);
                }
            },
            group: (gf) => {
                this.encodeInstances(objectToEncode, gf);
            }
        });
    }
    getFields(set, o) {
        const keys = Object.keys(o);
        let j = 0;
        const fields = keys.reduce((a, current) => {
            const field = set.localNameToField.get(current);
            if (field) {
                a[j++] = field;
            }
            return a;
        }, new Array(keys.length));
        fields.sort((a, b) => a.position - b.position);
        return fields;
    }
    encodeInstances(o, gf) {
        const noOfField = gf.definition.noOfField;
        const instances = o[gf.name] || o[noOfField.name];
        const buffer = this.buffer;
        if (!Array.isArray(instances)) {
            throw new Error(`expected array instance for group ${noOfField.name}`);
        }
        if (instances) {
            this.WriteTagEquals(noOfField.tag);
            buffer.writeWholeNumber(instances.length);
            buffer.writeChar(this.delimiter);
            instances.forEach((i) => {
                if (AsciiEncoder.checkGroupInstanceHasDelimiter(gf, i)) {
                    this.encodeSet(i, gf.definition);
                }
                else {
                    const delimiter = gf.definition.firstSimple;
                    throw new Error(`group instance with no delimiter field ${delimiter.definition.name}`);
                }
            });
        }
    }
    WriteTagEquals(tag) {
        const buffer = this.buffer;
        buffer.writeWholeNumber(tag);
        buffer.writeChar(ascii_chars_1.AsciiChars.Equal);
    }
    encodeSimple(o, set, sf, val) {
        const definition = sf.definition;
        const tag = definition.tag;
        const buffer = this.buffer;
        const delimiter = this.delimiter;
        const tf = this.timeFormatter;
        const pos = buffer.getPos();
        let tagType;
        if (typeof val === 'string') {
            switch (definition.tagType) {
                case tags_1.TagType.Boolean: {
                    tagType = definition.tagType;
                    const vs = val;
                    const first = vs.length > 0 ? vs.charAt(0) : 'N';
                    val = first === 'Y' || first === 'T';
                    break;
                }
                default: {
                    tagType = tags_1.TagType.String;
                }
            }
        }
        else {
            tagType = definition.tagType;
        }
        switch (tagType) {
            case tags_1.TagType.RawData: {
                break;
            }
            default: {
                this.WriteTagEquals(tag);
                break;
            }
        }
        switch (tagType) {
            case tags_1.TagType.String: {
                buffer.writeString(val);
                break;
            }
            case tags_1.TagType.Float: {
                buffer.writeNumber(val);
                break;
            }
            case tags_1.TagType.Int:
            case tags_1.TagType.Length: {
                buffer.writeWholeNumber(val);
                break;
            }
            case tags_1.TagType.Boolean: {
                buffer.writeBoolean(val);
                break;
            }
            case tags_1.TagType.UtcTimestamp: {
                tf.writeUtcTimestamp(val);
                break;
            }
            case tags_1.TagType.UtcTimeOnly: {
                tf.writeUtcTime(val);
                break;
            }
            case tags_1.TagType.UtcDateOnly: {
                tf.writeUtcDate(val);
                break;
            }
            case tags_1.TagType.LocalDate: {
                tf.writeLocalDate(val);
                break;
            }
            case tags_1.TagType.RawData: {
                const b = val;
                const lenField = set.fields[sf.position - 1];
                if (o[lenField.name] == null) {
                    this.WriteTagEquals(lenField.definition.tag);
                    buffer.writeWholeNumber(b.length);
                    buffer.writeChar(delimiter);
                }
                this.WriteTagEquals(tag);
                buffer.writeBuffer(b);
                break;
            }
            default: {
                buffer.writeString(val);
                break;
            }
        }
        buffer.writeChar(delimiter);
        switch (tag) {
            case tags_1.Tags.BodyLengthTag:
                this.bodyLengthPos = pos + 2;
                break;
        }
    }
}
exports.AsciiEncoder = AsciiEncoder;
//# sourceMappingURL=ascii-encoder.js.map