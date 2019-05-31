import { INumericKeyed } from '../collections/collection';
import { ContainedField, ContainedFieldSet } from '../dictionary';
export declare enum SegmentType {
    Component = 0,
    Group = 1,
    Msg = 2,
    Gap = 3,
    Batch = 4,
    Unknown = 5
}
export declare class SegmentDescription {
    name: string;
    startTag: number;
    set: ContainedFieldSet;
    startPosition: number;
    readonly depth: number;
    readonly type: SegmentType;
    index: number;
    endTag: number;
    endPosition: number;
    delimiterTag: number;
    delimiterPositions: number[];
    currentField: ContainedField;
    containedDelimiterPositions: INumericKeyed<boolean>;
    constructor(name: string, startTag: number, set: ContainedFieldSet, startPosition: number, depth: number, type: SegmentType);
    contains(segment: SegmentDescription): boolean;
    getInstance(instance: number): SegmentDescription;
    startGroup(tag: number): void;
    addDelimiterPosition(position: number): boolean;
    setCurrentField(tag: number): void;
    groupAddDelimiter(tag: number, position: number): boolean;
    end(i: number, pos: number, endTag: number): void;
}
