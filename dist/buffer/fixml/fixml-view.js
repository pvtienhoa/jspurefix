"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msg_view_1 = require("../msg-view");
const structure_1 = require("../structure");
const tags_1 = require("../tags");
const ascii_chars_1 = require("../ascii-chars");
const moment = require("moment");
class FixmlView extends msg_view_1.MsgView {
    constructor(segment, values, structure) {
        super(segment, structure);
        this.segment = segment;
        this.values = values;
        this.structure = structure;
    }
    static getTimestamp(s, useUtc) {
        let m = moment(s);
        return useUtc ? m.utc(true).toDate() : m.toDate();
    }
    static getTimeOnly(s, useUtc) {
        let m = moment(s, [moment.HTML5_FMT.TIME_MS, moment.HTML5_FMT.TIME_SECONDS]);
        return useUtc ? m.utc(true).toDate() : m.toDate();
    }
    static getDateOnly(s, useUtc) {
        let m = moment(s);
        let d;
        if (useUtc) {
            d = m.utc(true).toDate();
        }
        else {
            d = m.toDate();
        }
        return d;
    }
    clone() {
        return new FixmlView(this.segment, this.values, new structure_1.Structure(this.structure.tags.clone(), this.structure.segments));
    }
    checksum() {
        return 0;
    }
    create(singleton) {
        return new FixmlView(singleton, this.values, this.structure);
    }
    stringAtPosition(position) {
        if (position < 0 || position >= this.values.length) {
            throw new Error(`illegal position ${position}`);
        }
        return this.values[position];
    }
    toTyped(field) {
        const position = this.getPosition(field.tag);
        if (position >= 0) {
            const s = this.values[position];
            switch (field.tagType) {
                case tags_1.TagType.String: {
                    return this.stringAtPosition(position);
                }
                case tags_1.TagType.Int:
                case tags_1.TagType.Length: {
                    return parseInt(s, 10);
                }
                case tags_1.TagType.Float: {
                    return parseFloat(s);
                }
                case tags_1.TagType.Boolean: {
                    return s && s.length > 0 && ascii_chars_1.AsciiChars.firstChar(s) === ascii_chars_1.AsciiChars.Y;
                }
                case tags_1.TagType.UtcTimestamp: {
                    return FixmlView.getTimestamp(s, true);
                }
                case tags_1.TagType.UtcTimeOnly: {
                    return FixmlView.getTimeOnly(s, true);
                }
                case tags_1.TagType.UtcDateOnly: {
                    return FixmlView.getDateOnly(s, true);
                }
                case tags_1.TagType.LocalDate: {
                    return FixmlView.getDateOnly(s, true);
                }
                case tags_1.TagType.RawData: {
                    return Buffer.alloc(s.length, s, 'utf8');
                }
                default: {
                    return this.stringAtPosition(position);
                }
            }
        }
        return this.stringAtPosition(position);
    }
}
exports.FixmlView = FixmlView;
//# sourceMappingURL=fixml-view.js.map