/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IQuoteStatusReportNoUnderlyings } from './set/quote_status_report_no_underlyings';
import { IOrderQtyData } from './set/order_qty_data';
import { IStipulations } from './set/stipulations';
import { IQuoteStatusReportNoLegs } from './set/quote_status_report_no_legs';
import { IQuoteStatusReportNoQuoteQualifiers } from './set/quote_status_report_no_quote_qualifiers';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
export interface IQuoteStatusReport {
    QuoteStatusReqID?: string;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteRespID?: string;
    QuoteType?: number;
    Parties?: IParties;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: IQuoteStatusReportNoUnderlyings[];
    Side?: string;
    OrderQtyData?: IOrderQtyData;
    SettlType?: string;
    SettlDate?: Date;
    SettlDate2?: Date;
    OrderQty2?: number;
    Currency?: number;
    Stipulations?: IStipulations;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    NoLegs?: IQuoteStatusReportNoLegs[];
    NoQuoteQualifiers?: IQuoteStatusReportNoQuoteQualifiers[];
    ExpireTime?: Date;
    Price?: number;
    PriceType?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    BidPx?: number;
    OfferPx?: number;
    MktBidPx?: number;
    MktOfferPx?: number;
    MinBidSize?: number;
    BidSize?: number;
    MinOfferSize?: number;
    OfferSize?: number;
    ValidUntilTime?: Date;
    BidSpotRate?: number;
    OfferSpotRate?: number;
    BidForwardPoints?: number;
    OfferForwardPoints?: number;
    MidPx?: number;
    BidYield?: number;
    MidYield?: number;
    OfferYield?: number;
    TransactTime?: Date;
    OrdType?: string;
    BidForwardPoints2?: number;
    OfferForwardPoints2?: number;
    SettlCurrBidFxRate?: number;
    SettlCurrOfferFxRate?: number;
    SettlCurrFxRateCalc?: string;
    CommType?: string;
    Commission?: number;
    CustOrderCapacity?: number;
    ExDestination?: string;
    QuoteStatus?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
