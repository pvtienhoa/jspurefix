import { IMsgApplication } from './session-description';
import { MsgTransport } from './msg-transport';
export declare abstract class FixInitiator {
    readonly application: IMsgApplication;
    protected constructor(application: IMsgApplication);
    abstract connect(timeout: number): Promise<MsgTransport>;
    abstract end(): void;
}
