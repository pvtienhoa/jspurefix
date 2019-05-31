/// <reference types="node" />
import * as events from 'events';
import { MsgTransport } from './msg-transport';
import { IMsgApplication } from './session-description';
import { INumericKeyed } from '../collections/collection';
export declare abstract class FixAcceptor extends events.EventEmitter {
    readonly application: IMsgApplication;
    transports: INumericKeyed<MsgTransport>;
    protected constructor(application: IMsgApplication);
    abstract listen(): void;
    abstract close(cb: Function): void;
}
