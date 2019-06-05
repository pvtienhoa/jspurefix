/// <reference types="node" />
export interface IReject {
    RefSeqNum: number;
    RefTagID?: number;
    RefMsgType?: string;
    SessionRejectReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
