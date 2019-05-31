/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { INestedParties } from './set/nested_parties';
import { IInstrument } from './set/instrument';
import { IOrderQtyData } from './set/order_qty_data';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { ICommissionData } from './set/commission_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelReplaceRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    Parties?: IParties[];
    OrigClOrdID: string;
    ClOrdID: string;
    ListID?: string;
    Account?: string;
    NoAllocs?: number;
    AllocAccount?: string;
    NestedParties?: INestedParties[];
    AllocShares?: number;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    HandlInst: string;
    ExecInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    ExDestination?: string;
    NoTradingSessions?: number;
    TradingSessionID?: string;
    Instrument: IInstrument;
    Side: string;
    TransactTime: Date;
    OrderQtyData: IOrderQtyData;
    OrdType: string;
    PriceType?: number;
    Price?: number;
    StopPx?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    PegDifference?: number;
    DiscretionInst?: string;
    DiscretionOffset?: number;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    Currency?: number;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    GTBookingInst?: number;
    CommissionData?: ICommissionData;
    Rule80A?: string;
    ForexReq?: boolean;
    SettlCurrency?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    FutSettDate2?: Date;
    OrderQty2?: number;
    OpenClose?: string;
    CoveredOrUncovered?: number;
    MaxShow?: number;
    LocateReqd?: boolean;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    NetMoney?: number;
    StandardTrailer: IStandardTrailer;
}
