import { MsgView } from '../../buffer';
import { IJsFixConfig } from '../../config';
import { FixSession } from '../fix-session';
export declare abstract class AsciiSession extends FixSession {
    readonly config: IJsFixConfig;
    heartbeat: boolean;
    protected constructor(config: IJsFixConfig);
    static asPiped(txt: string): string;
    private checkSeqNo;
    private sendReject;
    private checkIntegrity;
    private onSessionMsg;
    protected onMsg(msgType: string, view: MsgView): void;
    private peerLogon;
    private tick;
}
