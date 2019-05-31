/// <reference types="node" />
export interface IBusinessMessageReject {
    RefSeqNum?: number;
    RefMsgType: string;
    BusinessRejectRefID?: string;
    BusinessRejectReason: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
