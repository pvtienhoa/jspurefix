/// <reference types="node" />
import { FixDefinitions } from '../../dictionary';
import { AsciiParserState } from './ascii-parser-state';
import { MsgParser } from '../msg-parser';
import { Readable } from 'stream';
export declare class AsciiParser extends MsgParser {
    readonly definitions: FixDefinitions;
    readonly readStream: Readable;
    readonly delimiter: number;
    readonly writeDelimiter: number;
    readonly maxMessageLen: number;
    private static nextId;
    readonly id: number;
    readonly state: AsciiParserState;
    private readonly receivingBuffer;
    private readonly segmentParser;
    constructor(definitions: FixDefinitions, readStream: Readable, delimiter: number, writeDelimiter?: number, maxMessageLen?: number);
    private subscribe;
    private msg;
    private parse;
    private getView;
}
