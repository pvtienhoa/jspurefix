"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msg_parser_1 = require("../msg-parser");
const tags_1 = require("../tags");
const dictionary_1 = require("../../dictionary");
const segment_description_1 = require("../segment-description");
const structure_1 = require("../structure");
const fixml_view_1 = require("./fixml-view");
class FiXmlParser extends msg_parser_1.MsgParser {
    constructor(config, readStream, maxMessageLocations = 10 * 1024) {
        super();
        this.config = config;
        this.readStream = readStream;
        this.maxMessageLocations = maxMessageLocations;
        this.values = [];
        this.segments = [];
        this.segmentStack = [];
        this.definitions = this.config.definitions;
        const description = config.description;
        const me = description.application.name;
        this.logger = config.logFactory.logger(`${me}:FiXmlParser`);
        this.saxStream = require('sax').createStream(true, {});
        this.locations = new tags_1.Tags(this.definitions, maxMessageLocations);
        this.logger.info('subscribe to stream');
        this.subscribe();
    }
    reset() {
        const segments = this.segments;
        while (segments.length > 0) {
            segments.pop();
        }
        const stack = this.segmentStack;
        this.last = null;
        this.raw = null;
        this.values = [];
        this.locations.reset();
        while (stack.length) {
            stack.pop();
        }
    }
    subscribe() {
        const writeStream = this.saxStream;
        const readStream = this.readStream;
        let instance = this;
        readStream.pipe(writeStream).on('ready', () => {
            this.logger.info('stream close event');
            this.emit('close');
        });
        readStream.on('error', (e) => {
            this.logger.error(e);
            this.emit('error', e);
        });
        readStream.on('end', () => {
            this.logger.info('stream end event');
            this.emit('end');
        });
        writeStream.on('data', (i) => {
            if (instance.last) {
                instance.emit('decoded', instance.last.name, i.toString());
            }
            else {
                this.raw = i.toString();
            }
        });
        writeStream.on('opentag', (node) => {
            const stack = this.segmentStack;
            const saxNode = node;
            switch (saxNode.name) {
                case 'FIXML':
                    this.reset();
                    break;
                case 'Batch': {
                    const locations = this.locations;
                    const ptr = locations.nextTagPos - 1;
                    const segment = new segment_description_1.SegmentDescription(saxNode.name, -1, null, ptr, stack.length, segment_description_1.SegmentType.Batch);
                    segment.startPosition = 0;
                    stack.push(segment);
                    break;
                }
                case 'Hdr': {
                    this.hdr(saxNode);
                    break;
                }
                default: {
                    const stack = this.segmentStack;
                    const isBatch = stack.length === 1 && stack[0].type === segment_description_1.SegmentType.Batch;
                    const isMsg = stack.length === 0;
                    if (isMsg) {
                        this.msg(saxNode);
                    }
                    else if (isBatch) {
                        this.msgInBatch(saxNode);
                    }
                    else {
                        this.element(saxNode);
                    }
                }
            }
        });
        writeStream.on('closetag', (name) => {
            this.pop(name);
        });
        writeStream.on('error', (e) => {
            this.emit('error', e);
        });
    }
    hdr(saxNode) {
        const stack = this.segmentStack;
        if (stack.length === 0) {
            throw new Error(`Hdr not expected before batch or message ${saxNode.name}`);
        }
        let peek = stack[stack.length - 1];
        switch (peek.type) {
            case segment_description_1.SegmentType.Batch: {
                const hdr = this.definitions.component.get('StandardHeader');
                const segment = this.parseAttributes(saxNode.name, hdr, saxNode, segment_description_1.SegmentType.Component);
                this.segmentStack.push(segment);
                break;
            }
            case segment_description_1.SegmentType.Msg: {
                this.element(saxNode);
                break;
            }
            default:
                throw new Error(`Hdr not expected before batch or message ${saxNode.name}`);
        }
    }
    msgInBatch(saxNode) {
        this.logger.info(` ${saxNode.name}: start batch`);
        const locations = this.locations;
        const batch = this.segmentStack[0];
        const ptr = locations.nextTagPos;
        if (!batch.delimiterPositions) {
            batch.startGroup(-1);
        }
        batch.addDelimiterPosition(ptr);
        this.logger.debug(` ${saxNode.name}: begin parse msg ${batch.delimiterPositions.length} in batch`);
        this.msg(saxNode, true);
    }
    getView() {
        const structure = new structure_1.Structure(this.locations, this.segments);
        const last = structure.segments[structure.segments.length - 1];
        return new fixml_view_1.FixmlView(last, this.values, structure);
    }
    pop(name) {
        const locations = this.locations;
        const stack = this.segmentStack;
        const segments = this.segments;
        while (stack.length > 0) {
            const pop = stack.pop();
            const ptr = locations.nextTagPos - 1;
            pop.end(segments.length, ptr, locations.tagPos[ptr].tag);
            segments[segments.length] = pop;
            switch (pop.type) {
                case segment_description_1.SegmentType.Msg: {
                    const last = segments[segments.length - 1];
                    this.last = last;
                    this.emit('msg', last.name, this.getView());
                    if (this.raw) {
                        this.emit('decoded', this.last.name, this.raw);
                        this.raw = null;
                    }
                    break;
                }
                case segment_description_1.SegmentType.Batch: {
                    const last = segments[segments.length - 1];
                    this.logger.debug(`emit batch with ${pop.delimiterPositions.length} elements`);
                    this.emit('batch', last.set.abbreviation, this.getView());
                    break;
                }
            }
            if (pop.name === name) {
                return pop;
            }
        }
        return null;
    }
    startGroup(saxNode, gf) {
        const locations = this.locations;
        const stack = this.segmentStack;
        const ptr = locations.nextTagPos;
        const def = gf.definition;
        const segment = this.parseAttributes(saxNode.name, def, saxNode, segment_description_1.SegmentType.Component);
        const group = new segment_description_1.SegmentDescription(def.name, locations.tagPos[ptr].tag, def, ptr, stack.length, segment_description_1.SegmentType.Group);
        group.startGroup(locations.tagPos[ptr].tag);
        group.addDelimiterPosition(ptr);
        stack.push(group);
        stack.push(segment);
    }
    getNextField(saxNode) {
        const stack = this.segmentStack;
        while (stack.length > 0) {
            let peek = stack[stack.length - 1];
            let field = peek.set.localNameToField.get(saxNode.name);
            if (field) {
                return field;
            }
            if (peek.type === segment_description_1.SegmentType.Group && stack.length > 1) {
                const contained = stack[stack.length - 2].set.localNameToField.get(saxNode.name);
                if (contained instanceof dictionary_1.ContainedGroupField) {
                    if (contained.definition.name === peek.name) {
                        return contained;
                    }
                }
            }
            const locations = this.locations;
            const ptr = locations.nextTagPos - 1;
            const pop = stack.pop();
            const segments = this.segments;
            pop.end(segments.length, ptr, locations.tagPos[ptr].tag);
            segments[segments.length] = pop;
        }
        return null;
    }
    dispatch(saxNode, field) {
        switch (field.type) {
            case dictionary_1.ContainedFieldType.Component: {
                const cf = field;
                const segment = this.parseAttributes(saxNode.name, cf.definition, saxNode, segment_description_1.SegmentType.Component);
                this.segmentStack.push(segment);
                break;
            }
            case dictionary_1.ContainedFieldType.Group: {
                this.dispatchGroup(saxNode, field);
                break;
            }
        }
    }
    dispatchGroup(saxNode, gf) {
        const stack = this.segmentStack;
        const peek = stack[stack.length - 1];
        switch (peek.type) {
            case segment_description_1.SegmentType.Msg:
            case segment_description_1.SegmentType.Component: {
                this.startGroup(saxNode, gf);
                break;
            }
            case segment_description_1.SegmentType.Group: {
                if (gf.name === saxNode.name) {
                    const ptr = this.locations.nextTagPos;
                    peek.addDelimiterPosition(ptr);
                    stack[stack.length] = this.parseAttributes(saxNode.name, gf.definition, saxNode, segment_description_1.SegmentType.Component);
                }
                else {
                    throw new Error(`expected another group instance of ${gf.name} but got ${saxNode.name}`);
                }
                break;
            }
            default:
                throw new Error(`dispatchGroup has field ${gf.name} peek type ${peek.type}`);
        }
    }
    element(saxNode) {
        const field = this.getNextField(saxNode);
        if (!field) {
            const stack = this.segmentStack;
            let peek = stack[stack.length - 1];
            throw new Error(`field ${saxNode.name} not known in set ${peek.set.name}`);
        }
        this.dispatch(saxNode, field);
    }
    msg(saxNode, inBatch = false) {
        this.logger.debug(`${saxNode.name}: begin parse msg`);
        const type = saxNode.name;
        const def = this.definitions.message.get(type);
        if (!def) {
            throw new Error(`unknown message type ${type}`);
        }
        if (inBatch) {
            const batch = this.segmentStack[0];
            batch.set = def;
        }
        const segment = this.parseAttributes(type, def, saxNode, segment_description_1.SegmentType.Msg);
        this.segmentStack.push(segment);
    }
    parseAttributes(name, set, saxNode, type) {
        const locations = this.locations;
        const attributes = saxNode.attributes;
        const values = this.values;
        let ptr;
        if (attributes) {
            const keys = Object.keys(attributes);
            ptr = keys.length > 0 ? locations.nextTagPos : locations.nextTagPos - 1;
            for (let j = 0; j < keys.length; ++j) {
                const k = keys[j];
                const v = attributes[k];
                const field = set.localNameToField.get(k);
                if (!field) {
                    this.logger.warning(`no field ${k} in set ${set.name}`);
                    locations.store(j, 1, -1);
                }
                else {
                    locations.store(j, 1, field.definition.tag);
                }
                values[values.length] = v;
            }
            return new segment_description_1.SegmentDescription(name, locations.tagPos[ptr].tag, set, ptr, this.segmentStack.length, type);
        }
    }
}
exports.FiXmlParser = FiXmlParser;
//# sourceMappingURL=fixml-parser.js.map