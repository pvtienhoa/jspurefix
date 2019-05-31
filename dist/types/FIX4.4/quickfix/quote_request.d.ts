/// <reference types="node" />
import { IQuotReqGrp } from './set/quot_req_grp';
export interface IQuoteRequest {
    QuoteReqID: string;
    RFQReqID?: string;
    ClOrdID?: string;
    OrderCapacity?: string;
    QuotReqGrp?: IQuotReqGrp;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
