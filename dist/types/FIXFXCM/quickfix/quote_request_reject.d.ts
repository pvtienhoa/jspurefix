/// <reference types="node" />
import { IQuoteRequestRejectNoRelatedSym } from './set/quote_request_reject_no_related_sym';
import { IQuoteRequestRejectNoQuoteQualifiers } from './set/quote_request_reject_no_quote_qualifiers';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IParties } from './set/parties';
export interface IQuoteRequestReject {
    QuoteReqID: string;
    RFQReqID?: string;
    QuoteRequestRejectReason: number;
    NoRelatedSym: IQuoteRequestRejectNoRelatedSym[];
    NoQuoteQualifiers?: IQuoteRequestRejectNoQuoteQualifiers[];
    QuotePriceType?: number;
    OrdType?: string;
    ExpireTime?: Date;
    TransactTime?: Date;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    PriceType?: number;
    Price?: number;
    Price2?: number;
    YieldData?: IYieldData;
    Parties?: IParties;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
