"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ascii_chars_1 = require("../ascii-chars");
const ascii_view_1 = require("./ascii-view");
const ascii_segment_parser_1 = require("./ascii-segment-parser");
const ascii_parser_state_1 = require("./ascii-parser-state");
const structure_1 = require("../structure");
const tags_1 = require("../tags");
const msg_parser_1 = require("../msg-parser");
const elastic_buffer_1 = require("../elastic-buffer");
const segment_description_1 = require("../segment-description");
class AsciiParser extends msg_parser_1.MsgParser {
    constructor(definitions, readStream, delimiter, writeDelimiter = delimiter, maxMessageLen = 160 * 1024) {
        super();
        this.definitions = definitions;
        this.readStream = readStream;
        this.delimiter = delimiter;
        this.writeDelimiter = writeDelimiter;
        this.maxMessageLen = maxMessageLen;
        this.id = AsciiParser.nextId++;
        this.segmentParser = new ascii_segment_parser_1.AsciiSegmentParser(definitions);
        this.receivingBuffer = new elastic_buffer_1.ElasticBuffer(maxMessageLen);
        this.state = new ascii_parser_state_1.AsciiParserState(this.receivingBuffer);
        this.state.locations = new tags_1.Tags(definitions, maxMessageLen / 10);
        this.state.beginMessage();
        this.subscribe();
    }
    subscribe() {
        const inst = this;
        const Writable = require('stream').Writable;
        const stream = this.readStream;
        const receiver = new Writable({
            write: (data, _, done) => {
                try {
                    inst.parse(data, data.length);
                    done();
                }
                catch (e) {
                    done(e);
                }
            }
        });
        receiver.on('error', (e) => {
            this.emit('error', e);
        });
        stream.pipe(receiver).on('finish', () => {
            this.emit('done');
        });
        stream.on('error', (e) => {
            this.emit('error', e);
        });
        stream.on('end', () => {
            this.emit('end');
        });
    }
    msg(ptr) {
        const receivingBuffer = this.receivingBuffer;
        const state = this.state;
        if (this.listeners('decoded')) {
            this.emit('decoded', state.msgType, receivingBuffer, ptr);
        }
        this.emit('msg', state.msgType, this.getView(ptr));
        state.beginMessage();
    }
    parse(readBuffer, end) {
        const state = this.state;
        const eq = ascii_chars_1.AsciiChars.Eq;
        const zero = ascii_chars_1.AsciiChars.Zero;
        const nine = ascii_chars_1.AsciiChars.Nine;
        const delimiter = this.delimiter;
        const writeDelimiter = this.writeDelimiter;
        const receivingBuffer = this.receivingBuffer;
        const switchDelimiter = writeDelimiter !== delimiter;
        let readPtr = 0;
        while (readPtr < end) {
            let charAtPos = readBuffer[readPtr];
            const writePtr = receivingBuffer.saveChar(charAtPos) - 1;
            switch (state.parseState) {
                case ascii_parser_state_1.ParseState.MsgComplete: {
                    this.msg(writePtr);
                    continue;
                }
                case ascii_parser_state_1.ParseState.BeginField: {
                    const atDigit = charAtPos >= zero && charAtPos <= nine;
                    if (atDigit) {
                        state.beginTag(writePtr);
                    }
                    break;
                }
                case ascii_parser_state_1.ParseState.ParsingTag: {
                    const isEquals = charAtPos === eq;
                    if (isEquals) {
                        state.endTag(writePtr);
                    }
                    break;
                }
                case ascii_parser_state_1.ParseState.ParsingRawData: {
                    if (state.incRaw()) {
                        if (charAtPos === delimiter) {
                            if (switchDelimiter) {
                                receivingBuffer.switchChar(writeDelimiter);
                            }
                            state.store();
                        }
                        else {
                            throw new Error(`delimiter (${delimiter}) expected at position ${readPtr} when value is ${charAtPos}`);
                        }
                    }
                    break;
                }
                case ascii_parser_state_1.ParseState.ParsingRawDataLength:
                case ascii_parser_state_1.ParseState.ParsingValue: {
                    if (charAtPos === delimiter) {
                        if (switchDelimiter) {
                            receivingBuffer.switchChar(writeDelimiter);
                        }
                        state.store();
                    }
                    break;
                }
                default: {
                    throw new Error(`fix parser in unknown state ${state}`);
                }
            }
            readPtr++;
        }
        switch (state.parseState) {
            case ascii_parser_state_1.ParseState.MsgComplete: {
                this.msg(receivingBuffer.getPos());
                break;
            }
        }
    }
    getView(ptr) {
        const state = this.state;
        const locations = state.locations;
        const source = this.receivingBuffer;
        const delimiter = this.delimiter;
        const replace = this.writeDelimiter;
        if (state.message) {
            const structure = this.segmentParser.parse(state.msgType, locations, locations.nextTagPos - 1);
            return new ascii_view_1.AsciiView(structure.msg(), source, structure, ptr, delimiter, replace);
        }
        const structure = new structure_1.Structure(locations, []);
        const segment = new segment_description_1.SegmentDescription('unknown', locations.tagPos[0].tag, null, 0, 1, segment_description_1.SegmentType.Unknown);
        segment.endPosition = locations.nextTagPos - 1;
        return new ascii_view_1.AsciiView(segment, source, structure, ptr, delimiter, replace);
    }
}
AsciiParser.nextId = 0;
exports.AsciiParser = AsciiParser;
//# sourceMappingURL=ascii-parser.js.map