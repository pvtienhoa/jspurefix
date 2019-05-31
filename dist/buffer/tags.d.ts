import { FixDefinitions, ContainedSimpleField } from '../dictionary';
import { TagPos } from './tag-pos';
export declare enum TagType {
    String = 1,
    Int = 2,
    Float = 3,
    Boolean = 4,
    UtcTimestamp = 5,
    UtcDateOnly = 6,
    UtcTimeOnly = 7,
    LocalDate = 8,
    RawData = 9,
    Length = 10,
    Unknown = 11
}
export declare class Tags {
    readonly definitions: FixDefinitions;
    readonly startingLength: number;
    static readonly BeginString: number;
    static readonly BodyLengthTag: number;
    static readonly CheckSumTag: number;
    static readonly MsgTag: number;
    tagPos: TagPos[];
    nextTagPos: number;
    constructor(definitions: FixDefinitions, startingLength?: number);
    static toJSType(simple: ContainedSimpleField): string;
    static toType(type: string): TagType;
    clone(): Tags;
    reset(): void;
    store(start: number, len: number, tag: number): void;
    private expand;
}
