/// <reference types="node" />
import { MsgEncoder, ElasticBuffer } from '../buffer';
import { FixDefinitions } from '../dictionary';
import { Transform } from 'stream';
import { ILooseObject } from '../collections/collection';
import { ISessionDescription } from './session-description';
import * as events from 'events';
export declare abstract class MsgTransmitter extends events.EventEmitter {
    readonly definitions: FixDefinitions;
    readonly session: ISessionDescription;
    readonly encodeStream: Transform;
    readonly buffer: ElasticBuffer;
    protected encoder: MsgEncoder;
    protected constructor(definitions: FixDefinitions, session: ISessionDescription);
    send(msgType: string, obj: ILooseObject): void;
    abstract encodeMessage(msgType: string, obj: ILooseObject): void;
    private encoderStream;
}
