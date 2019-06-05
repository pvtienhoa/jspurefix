/// <reference types="node" />
import { IQuoteResponseNoQuoteQualifiers } from './set/quote_response_no_quote_qualifiers';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IQuoteResponseNoUnderlyings } from './set/quote_response_no_underlyings';
import { IOrderQtyData } from './set/order_qty_data';
import { IStipulations } from './set/stipulations';
import { IQuoteResponseNoLegs } from './set/quote_response_no_legs';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
export interface IQuoteResponse {
    QuoteRespID: string;
    QuoteID?: string;
    QuoteRespType: number;
    ClOrdID?: string;
    OrderCapacity?: string;
    IOIid?: string;
    QuoteType?: number;
    NoQuoteQualifiers?: IQuoteResponseNoQuoteQualifiers[];
    Parties?: IParties;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: IQuoteResponseNoUnderlyings[];
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
    NoLegs?: IQuoteResponseNoLegs[];
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
    Commission?: number;
    CommType?: string;
    CustOrderCapacity?: number;
    ExDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Price?: number;
    PriceType?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    SecondaryClOrdID?: string;
}