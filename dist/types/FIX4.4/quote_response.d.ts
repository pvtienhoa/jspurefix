/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IQuotQualGrp } from './set/quot_qual_grp';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IOrderQtyData } from './set/order_qty_data';
import { IStipulations } from './set/stipulations';
import { ILegQuotGrp } from './set/leg_quot_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteResponse {
    StandardHeader: IStandardHeader;
    QuoteRespID: string;
    QuoteID?: string;
    QuoteRespType: number;
    ClOrdID?: string;
    OrderCapacity?: string;
    IOIID?: string;
    QuoteType?: number;
    QuotQualGrp?: IQuotQualGrp[];
    Parties?: IParties[];
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    Side?: string;
    OrderQtyData?: IOrderQtyData;
    SettlType?: string;
    SettlDate?: Date;
    SettlDate2?: Date;
    OrderQty2?: number;
    Currency?: number;
    Stipulations?: IStipulations[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    LegQuotGrp?: ILegQuotGrp[];
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
    StandardTrailer: IStandardTrailer;
}
