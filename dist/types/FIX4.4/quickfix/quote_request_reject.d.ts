/// <reference types="node" />
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp';
export interface IQuoteRequestReject {
    QuoteReqID: string;
    RFQReqID?: string;
    QuoteRequestRejectReason: number;
    QuotReqRjctGrp?: IQuotReqRjctGrp;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
