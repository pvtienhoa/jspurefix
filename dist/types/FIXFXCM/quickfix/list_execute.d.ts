/// <reference types="node" />
export interface IListExecute {
    ListID: string;
    ClientBidID?: string;
    BidID?: string;
    TransactTime: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
