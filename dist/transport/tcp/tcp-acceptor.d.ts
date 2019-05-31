import { FixAcceptor } from '../fix-acceptor';
import { IJsFixConfig } from '../../config';
export declare class TcpAcceptor extends FixAcceptor {
    readonly config: IJsFixConfig;
    private server;
    private logger;
    constructor(config: IJsFixConfig);
    listen(): void;
    close(cb: Function): void;
    private saveTransport;
    private harvestTransport;
}
