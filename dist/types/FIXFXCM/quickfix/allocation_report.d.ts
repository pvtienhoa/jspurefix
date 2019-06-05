/// <reference types="node" />
import { IAllocationReportNoOrders } from './set/allocation_report_no_orders';
import { IAllocationReportNoExecs } from './set/allocation_report_no_execs';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IAllocationReportNoUnderlyings } from './set/allocation_report_no_underlyings';
import { IAllocationReportNoLegs } from './set/allocation_report_no_legs';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IParties } from './set/parties';
import { IStipulations } from './set/stipulations';
import { IYieldData } from './set/yield_data';
import { IAllocationReportNoAllocs } from './set/allocation_report_no_allocs';
export interface IAllocationReport {
    AllocReportID: string;
    AllocID?: string;
    AllocTransType: string;
    AllocReportRefID?: string;
    AllocCancReplaceReason?: number;
    SecondaryAllocID?: string;
    AllocReportType: number;
    AllocStatus: number;
    AllocRejCode?: number;
    RefAllocID?: string;
    AllocIntermedReqType?: number;
    AllocLinkID?: string;
    AllocLinkType?: number;
    BookingRefID?: string;
    AllocNoOrdersType: number;
    NoOrders?: IAllocationReportNoOrders[];
    NoExecs?: IAllocationReportNoExecs[];
    PreviouslyReported?: boolean;
    ReversalIndicator?: boolean;
    MatchType?: string;
    Side: string;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: IAllocationReportNoUnderlyings[];
    NoLegs?: IAllocationReportNoLegs[];
    Quantity: number;
    QtyType?: number;
    LastMkt?: string;
    TradeOriginationDate?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    PriceType?: number;
    AvgPx: number;
    AvgParPx?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Currency?: number;
    AvgPxPrecision?: number;
    Parties?: IParties;
    TradeDate: Date;
    TransactTime?: Date;
    SettlType?: string;
    SettlDate?: Date;
    BookingType?: number;
    GrossTradeAmt?: number;
    Concession?: number;
    TotalTakedown?: number;
    NetMoney?: number;
    PositionEffect?: string;
    AutoAcceptIndicator?: boolean;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NumDaysInterest?: number;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    TotalAccruedInterestAmt?: number;
    InterestAtMaturity?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    LegalConfirm?: boolean;
    Stipulations?: IStipulations;
    YieldData?: IYieldData;
    TotNoAllocs?: number;
    LastFragment?: boolean;
    NoAllocs: IAllocationReportNoAllocs[];
}
