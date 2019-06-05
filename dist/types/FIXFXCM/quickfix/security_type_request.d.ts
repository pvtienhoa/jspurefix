/// <reference types="node" />
export interface ISecurityTypeRequest {
    SecurityReqID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Product?: number;
    SecurityType?: string;
    SecuritySubType?: string;
}
