import { ITcpTransportDescription } from '../session-description';
import { FixInitiator } from '../fix-initiator';
import { MsgTransport } from '../msg-transport';
import { IJsFixConfig } from '../../config';
export declare enum InitiatorState {
    Idle = 1,
    Connecting = 2,
    Connected = 3,
    Stopped = 4
}
export declare class TcpInitiator extends FixInitiator {
    readonly jsFixConfig: IJsFixConfig;
    tcp: ITcpTransportDescription;
    state: InitiatorState;
    private readonly logger;
    private duplex;
    constructor(jsFixConfig: IJsFixConfig);
    end(): void;
    connect(timeoutSeconds: number): Promise<MsgTransport>;
    private tryConnect;
    private repeatConnect;
}
