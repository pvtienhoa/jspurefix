/// <reference types="node" />
import { IYieldData } from './yield_data';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { ISecSizesGrp } from './sec_sizes_grp';
import { IParties } from './parties';
import { IRateSource } from './rate_source';
export interface IMDFullGrp {
    MDEntryType: string;
    MDEntryID?: string;
    MDEntryPx?: number;
    PriceType?: number;
    YieldData?: IYieldData;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    OrdType?: string;
    Currency?: number;
    MDEntrySize?: number;
    SecSizesGrp?: ISecSizesGrp[];
    LotType?: string;
    MDEntryDate?: Date;
    MDEntryTime?: Date;
    TickDirection?: string;
    MDMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SecurityTradingStatus?: number;
    HaltReason?: number;
    QuoteCondition?: string;
    TradeCondition?: string;
    MDEntryOriginator?: string;
    LocationID?: string;
    DeskID?: string;
    OpenCloseSettlFlag?: string;
    TimeInForce?: string;
    ExpireDate?: Date;
    ExpireTime?: Date;
    MinQty?: number;
    ExecInst?: string;
    SellerDays?: number;
    OrderID?: string;
    SecondaryOrderID?: string;
    QuoteEntryID?: string;
    MDEntryBuyer?: string;
    MDEntrySeller?: string;
    NumberOfOrders?: number;
    MDEntryPositionNo?: number;
    Scope?: string;
    PriceDelta?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    MDPriceLevel?: number;
    OrderCapacity?: string;
    MDOriginType?: number;
    HighPx?: number;
    LowPx?: number;
    TradeVolume?: number;
    SettlType?: string;
    SettlDate?: Date;
    MDQuoteType?: number;
    RptSeq?: number;
    DealingCapacity?: string;
    MDEntrySpotRate?: number;
    MDEntryForwardPoints?: number;
    Parties?: IParties[];
    SettlCurrency?: number;
    RateSource?: IRateSource[];
    TrdType?: number;
    FirstPx?: number;
    LastPx?: number;
}
