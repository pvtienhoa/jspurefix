/// <reference types="node" />
export interface IListCancelRequest {
    ListID: string;
    TransactTime: Date;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
