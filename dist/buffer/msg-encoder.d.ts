/// <reference types="node" />
import { ILooseObject } from '../collections/collection';
import { ContainedFieldSet, FixDefinitions } from '../dictionary';
import * as events from 'events';
export declare abstract class MsgEncoder extends events.EventEmitter {
    readonly definitions: FixDefinitions;
    protected constructor(definitions: FixDefinitions);
    encode(o: ILooseObject, name: string): void;
    abstract encodeSet(o: ILooseObject, set: ContainedFieldSet): void;
}
