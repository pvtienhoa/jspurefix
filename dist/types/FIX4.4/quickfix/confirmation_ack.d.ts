/// <reference types="node" />
export interface IConfirmationAck {
    ConfirmID: string;
    TradeDate: Date;
    TransactTime: Date;
    AffirmStatus: number;
    ConfirmRejReason?: number;
    MatchStatus?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
