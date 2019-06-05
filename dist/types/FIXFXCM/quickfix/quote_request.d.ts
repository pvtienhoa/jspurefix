/// <reference types="node" />
import { IQuoteRequestNoRelatedSym } from './set/quote_request_no_related_sym';
export interface IQuoteRequest {
    QuoteReqID: string;
    RFQReqID?: string;
    ClOrdID?: string;
    OrderCapacity?: string;
    NoRelatedSym: IQuoteRequestNoRelatedSym[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
