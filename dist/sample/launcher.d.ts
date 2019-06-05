import { IJsFixConfig } from '../config';
export declare abstract class Launcher {
    readonly initiatorConfig: string;
    readonly acceptorConfig: string;
    private readonly logger;
    protected constructor(initiatorConfig: string, acceptorConfig: string);
    protected abstract getInitiator(config: IJsFixConfig): Promise<any>;
    protected abstract getAcceptor(config: IJsFixConfig): Promise<any>;
    run(): Promise<any>;
    private setup;
}
