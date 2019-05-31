import { Tags } from '../tags';
import { MessageDefinition } from '../../dictionary';
import { ElasticBuffer } from '../elastic-buffer';
export declare enum ParseState {
    BeginField = 1,
    ParsingTag = 2,
    ParsingValue = 3,
    ParsingRawDataLength = 4,
    ParsingRawData = 5,
    MsgComplete = 6
}
export declare class AsciiParserState {
    readonly elasticBuffer: ElasticBuffer;
    message: MessageDefinition;
    locations: Tags;
    parseState: ParseState;
    bodyLen: number;
    checksumExpectedPos: number;
    tagStartPos: number;
    equalPos: number;
    valueEndPos: number;
    count: number;
    currentTag: number;
    rawDataLen: number;
    rawDataRead: number;
    msgType: string;
    constructor(elasticBuffer: ElasticBuffer);
    beginTag(pos: number): void;
    endTag(pos: number): void;
    incRaw(): boolean;
    checkRawTag(): void;
    store(): void;
    beginMessage(): void;
}
