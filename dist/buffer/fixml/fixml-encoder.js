"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = require("../../dictionary");
const ascii_chars_1 = require("../ascii-chars");
const tags_1 = require("../tags");
const msg_encoder_1 = require("../msg-encoder");
const moment = require("moment");
class FixmlEncoder extends msg_encoder_1.MsgEncoder {
    constructor(buffer, definitions) {
        super(definitions);
        this.buffer = buffer;
        this.definitions = definitions;
        this.attributePerLine = false;
        this.eol = require('os').EOL;
        this.beginDoc = `<FIXML>${this.eol}`;
        this.endDoc = '</FIXML>';
        this.beginBatch = `<Batch>${this.eol}`;
        this.endBatch = '</Batch>';
    }
    static asString(sf, v) {
        switch (sf.definition.tagType) {
            case tags_1.TagType.String: {
                return v;
            }
            case tags_1.TagType.Int:
            case tags_1.TagType.Float:
            case tags_1.TagType.Length: {
                return v.toString();
            }
            case tags_1.TagType.Boolean: {
                return v ? 'Y' : 'N';
            }
            case tags_1.TagType.UtcTimestamp: {
                const d = v;
                return moment(d).utc().format('YYYY-MM-DDTHH:mm:ss.SSS');
            }
            case tags_1.TagType.UtcTimeOnly: {
                const d = v;
                return moment.utc(d).format('HH:mm:ss.SSS');
            }
            case tags_1.TagType.LocalDate: {
                const d = v;
                return moment(d).format('YYYY-MM-DD');
            }
            case tags_1.TagType.UtcDateOnly: {
                const d = v;
                return moment(d).utc(true).format('YYYY-MM-DD');
            }
        }
    }
    encodeSet(o, set) {
        const batch = o.Batch;
        const toWrite = batch || [o];
        let depth = batch ? 1 : 0;
        const buffer = this.buffer;
        const begin = this.beginDoc;
        const indent = '\t';
        const endBatch = batch ? this.endBatch : '';
        const eol = this.eol;
        buffer.reset();
        buffer.writeString(begin);
        if (batch) {
            this.batchStart(o, set, depth);
        }
        toWrite.forEach((next) => {
            this.toXml(next, set.abbreviation, set, depth + 1);
            buffer.writeString(eol);
        });
        if (batch) {
            buffer.writeString(`${indent}${endBatch}`);
        }
        buffer.writeString(this.endDoc);
    }
    batchStart(o, set, depth) {
        const buffer = this.buffer;
        const indent = '\t';
        const beginBatch = this.beginBatch;
        const hdr = o.StandardHeader;
        const eol = this.eol;
        buffer.writeString(`${indent}${beginBatch}`);
        if (hdr) {
            const h = set.fields[0];
            this.toXml(hdr, h.name, h.definition, depth + 1);
            buffer.writeString(eol);
        }
    }
    toXml(o, name, set, depth) {
        const buffer = this.buffer;
        const selfClose = '/>';
        const close = '>';
        const open = '<';
        const indent = '\t'.repeat(depth);
        const newLine = this.eol;
        const fields = this.getPopulatedFields(set, o);
        const eol = fields.length === 0 ? selfClose : close;
        buffer.writeString(`${indent}${open}`);
        buffer.writeString(`${name} `);
        this.attributes(o, set, depth, this.attributePerLine);
        buffer.writeString(`${eol}`);
        dictionary_1.dispatchFields(fields, {
            group: (g) => this.complexGroup(o, g, depth),
            component: (c) => this.complexComponent(o, c, depth)
        });
        if (fields.length) {
            const end = `${newLine}${indent}</${name}>`;
            buffer.writeString(`${end}`);
        }
    }
    getPopulatedFields(set, o) {
        const keys = Object.keys(o);
        const fields = keys.reduce((a, current) => {
            const field = set.localNameToField.get(current);
            if (field && !set.nameToLocalAttribute.containsKey(current)) {
                a.push(field);
            }
            return a;
        }, []);
        fields.sort((a, b) => a.position - b.position);
        return fields;
    }
    encodeAttribute(name, val) {
        if (val == null) {
            return;
        }
        const buffer = this.buffer;
        buffer.writeString(name);
        buffer.writeChar(ascii_chars_1.AsciiChars.Equal);
        buffer.writeChar(ascii_chars_1.AsciiChars.Dq);
        buffer.writeString(val);
        buffer.writeChar(ascii_chars_1.AsciiChars.Dq);
    }
    attributes(o, set, depth, attributePerLine) {
        const newLine = this.eol;
        const indent = '\t'.repeat(depth + 1);
        const attributes = set.localAttribute;
        const buffer = this.buffer;
        if (attributes.length && attributePerLine) {
            buffer.writeString(newLine);
            buffer.writeString(indent);
        }
        const populatedAttributes = this.getPopulatedAttributes(o, attributes);
        for (let a = 0; a < populatedAttributes.values.length; ++a) {
            const last = a === populatedAttributes.values.length - 1;
            const f = populatedAttributes.fields[a];
            if (a || this.attributePerLine)
                buffer.writeChar(ascii_chars_1.AsciiChars.Space);
            this.encodeAttribute(f.name, FixmlEncoder.asString(f, populatedAttributes.values[a]));
            if (!last && attributePerLine) {
                buffer.writeString(newLine);
                buffer.writeString(indent);
            }
        }
    }
    getPopulatedAttributes(o, attributes) {
        return attributes.reduce((a, f) => {
            let v = o[f.definition.name];
            if (v == null) {
                v = o[f.name];
            }
            if (v != null) {
                a.values.push(v);
                a.fields.push(f);
            }
            return a;
        }, {
            values: [],
            fields: []
        });
    }
    complexGroup(o, field, depth) {
        const gf = field;
        const elements = o[gf.definition.name];
        if (elements) {
            if (Array.isArray(elements)) {
                for (const e of elements) {
                    this.buffer.writeString(this.eol);
                    this.toXml(e, gf.name, gf.definition, depth + 1);
                }
            }
            else {
                throw new Error(`expected array for member ${gf.definition.name}`);
            }
        }
    }
    complexComponent(o, field, depth) {
        const cf = field;
        const def = cf.definition;
        const instance = o[def.name];
        if (instance) {
            this.buffer.writeString(this.eol);
            this.toXml(instance, cf.name, def, depth + 1);
        }
    }
}
exports.FixmlEncoder = FixmlEncoder;
//# sourceMappingURL=fixml-encoder.js.map