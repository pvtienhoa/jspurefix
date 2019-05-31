import { ILooseObject } from '../../collections/collection';
import { ContainedFieldSet, FixDefinitions } from '../../dictionary';
import { MsgEncoder } from '../msg-encoder';
import { ElasticBuffer } from '../elastic-buffer';
import { ITimeFormatter } from './itime-formatter';
export declare class AsciiEncoder extends MsgEncoder {
    readonly buffer: ElasticBuffer;
    readonly definitions: FixDefinitions;
    readonly timeFormatter: ITimeFormatter;
    readonly delimiter: number;
    bodyLengthPos: number;
    constructor(buffer: ElasticBuffer, definitions: FixDefinitions, timeFormatter?: ITimeFormatter, delimiter?: number);
    private static checkGroupInstanceHasDelimiter;
    encodeSet(objectToEncode: ILooseObject, set: ContainedFieldSet): void;
    private getFields;
    private encodeInstances;
    private WriteTagEquals;
    private encodeSimple;
}
