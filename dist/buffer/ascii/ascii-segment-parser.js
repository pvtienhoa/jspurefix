"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = require("../../dictionary");
const segment_description_1 = require("../segment-description");
const structure_1 = require("../structure");
const enum_1 = require("../../types/enum");
class AsciiSegmentParser {
    constructor(definitions) {
        this.definitions = definitions;
        this.headerDefinition = definitions.component.get('header');
        this.trailerDefinition = definitions.component.get('trailer');
    }
    parse(msgType, tags, last) {
        const segments = [];
        const tr = this.trailerDefinition;
        const hd = this.headerDefinition;
        const msgDefinition = this.definitions.message.get(msgType);
        if (!msgDefinition) {
            return null;
        }
        const structureStack = [];
        let currentTagPosition = 0;
        let peek;
        function init() {
            const firstTag = tags.tagPos[0].tag;
            structureStack[structureStack.length] = new segment_description_1.SegmentDescription(tr.name, tags.tagPos[last].tag, tr, currentTagPosition, structureStack.length, segment_description_1.SegmentType.Component);
            structureStack[structureStack.length] = new segment_description_1.SegmentDescription(msgDefinition.name, firstTag, msgDefinition, currentTagPosition, structureStack.length, segment_description_1.SegmentType.Msg);
            structureStack[structureStack.length] = new segment_description_1.SegmentDescription(hd.name, firstTag, hd, currentTagPosition, structureStack.length, segment_description_1.SegmentType.Component);
        }
        function unwind(tag) {
            while (structureStack.length > 1) {
                const done = structureStack.pop();
                done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag);
                segments[segments.length] = done;
                peek = structureStack[structureStack.length - 1];
                if (peek.set.containedTag[tag]) {
                    break;
                }
                if (peek.type === segment_description_1.SegmentType.Msg && !tr.localTag[tag]) {
                    break;
                }
            }
        }
        function examine(tag) {
            switch (peek.currentField.type) {
                case dictionary_1.ContainedFieldType.Simple: {
                    const sf = peek.currentField;
                    if (sf.definition.tag === tag) {
                        currentTagPosition = currentTagPosition + 1;
                    }
                    break;
                }
                case dictionary_1.ContainedFieldType.Component: {
                    const cf = peek.currentField;
                    structureStack[structureStack.length] = new segment_description_1.SegmentDescription(cf.name, tag, cf.definition, currentTagPosition, structureStack.length - 1, segment_description_1.SegmentType.Component);
                    break;
                }
                case dictionary_1.ContainedFieldType.Group: {
                    const gf = peek.currentField;
                    const structure = new segment_description_1.SegmentDescription(gf.name, tag, gf.definition, currentTagPosition, structureStack.length - 1, segment_description_1.SegmentType.Group);
                    structureStack[structureStack.length] = structure;
                    currentTagPosition = currentTagPosition + 1;
                    structure.startGroup(tags.tagPos[currentTagPosition].tag);
                    break;
                }
                default:
                    throw new Error(`unknown tag type ${tag}`);
            }
        }
        function groupDelimiter(tag) {
            let delimiter = false;
            if (tag === peek.delimiterTag) {
                peek.addDelimiterPosition(currentTagPosition);
            }
            else if (structureStack.length > 1) {
                delimiter = structureStack[structureStack.length - 2].groupAddDelimiter(tag, currentTagPosition);
            }
            return delimiter;
        }
        function gap(tag) {
            const gap = new segment_description_1.SegmentDescription('.undefined', tag, peek.set, currentTagPosition, structureStack.length, segment_description_1.SegmentType.Gap);
            gap.end(segments.length, currentTagPosition, tag);
            segments[segments.length] = gap;
            currentTagPosition++;
        }
        function discover() {
            while (currentTagPosition <= last) {
                const tag = tags.tagPos[currentTagPosition].tag;
                peek = structureStack[structureStack.length - 1];
                peek.setCurrentField(tag);
                if (!peek.set.containedTag[tag] || groupDelimiter(tag)) {
                    const unknown = peek.type === segment_description_1.SegmentType.Msg && tag !== enum_1.MsgTag.CheckSum;
                    if (unknown) {
                        gap(tag);
                    }
                    else if (structureStack.length > 1) {
                        unwind(tag);
                    }
                    continue;
                }
                examine(tag);
            }
        }
        function clean() {
            while (structureStack.length > 0) {
                const done = structureStack.pop();
                done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag);
                segments[segments.length] = done;
            }
            const msg = segments[segments.length - 2];
            const trl = segments[segments.length - 1];
            msg.startTag = tags.tagPos[msg.startPosition].tag;
            trl.startPosition = msg.endPosition + 1;
            msg.endPosition = trl.endPosition;
        }
        init();
        discover();
        clean();
        return new structure_1.Structure(tags, segments);
    }
}
exports.AsciiSegmentParser = AsciiSegmentParser;
//# sourceMappingURL=ascii-segment-parser.js.map