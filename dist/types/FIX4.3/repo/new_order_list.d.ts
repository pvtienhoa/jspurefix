/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { INestedParties } from './set/nested_parties';
import { IInstrument } from './set/instrument';
import { IStipulations } from './set/stipulations';
import { IOrderQtyData } from './set/order_qty_data';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { ICommissionData } from './set/commission_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface INewOrderList {
    StandardHeader: IStandardHeader;
    ListID: string;
    BidID?: string;
    ClientBidID?: string;
    ProgRptReqs?: number;
    BidType: number;
    ProgPeriodInterval?: number;
    ListExecInstType?: string;
    ListExecInst?: string;
    EncodedListExecInstLen?: number;
    EncodedListExecInst?: Buffer;
    TotNoOrders: number;
    NoOrders: number;
    ClOrdID: string;
    ListSeqNo: number;
    SettlInstMode?: string;
    Parties?: IParties[];
    Account?: string;
    NoAllocs?: number;
    AllocAccount?: string;
    NestedParties?: INestedParties[];
    AllocShares?: number;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    ExDestination?: string;
    NoTradingSessions?: number;
    TradingSessionID?: string;
    ProcessCode?: string;
    Instrument: IInstrument;
    PrevClosePx?: number;
    Side: string;
    SideValueInd?: number;
    LocateReqd?: boolean;
    TransactTime?: Date;
    Stipulations?: IStipulations[];
    OrderQtyData: IOrderQtyData;
    OrdType?: string;
    PriceType?: number;
    Price?: number;
    StopPx?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    Currency?: number;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    IOIid?: string;
    QuoteID?: string;
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
    PegDifference?: number;
    DiscretionInst?: string;
    DiscretionOffset?: number;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    NetMoney?: number;
    StandardTrailer: IStandardTrailer;
}
