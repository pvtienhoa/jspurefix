/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrdAllocGrp } from './set/ord_alloc_grp';
import { IExecAllocGrp } from './set/exec_alloc_grp';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IParties } from './set/parties';
import { IStipulations } from './set/stipulations';
import { IYieldData } from './set/yield_data';
import { IAllocGrp } from './set/alloc_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocationInstruction {
    StandardHeader: IStandardHeader;
    AllocID: string;
    AllocTransType: string;
    AllocType: number;
    SecondaryAllocID?: string;
    RefAllocID?: string;
    AllocCancReplaceReason?: number;
    AllocIntermedReqType?: number;
    AllocLinkID?: string;
    AllocLinkType?: number;
    BookingRefID?: string;
    AllocNoOrdersType: number;
    OrdAllocGrp?: IOrdAllocGrp[];
    ExecAllocGrp?: IExecAllocGrp[];
    PreviouslyReported?: boolean;
    ReversalIndicator?: boolean;
    MatchType?: string;
    Side: string;
    Instrument: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
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
    Parties?: IParties[];
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
    Stipulations?: IStipulations[];
    YieldData?: IYieldData;
    TotNoAllocs?: number;
    LastFragment?: boolean;
    AllocGrp?: IAllocGrp[];
    StandardTrailer: IStandardTrailer;
}
