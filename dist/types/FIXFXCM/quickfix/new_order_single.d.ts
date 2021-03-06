/// <reference types="node" />
import { IParties } from './set/parties';
import { INewOrderSingleNoAllocs } from './set/new_order_single_no_allocs';
import { INewOrderSingleNoTradingSessions } from './set/new_order_single_no_trading_sessions';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { INewOrderSingleNoUnderlyings } from './set/new_order_single_no_underlyings';
import { IStipulations } from './set/stipulations';
import { IOrderQtyData } from './set/order_qty_data';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { ICommissionData } from './set/commission_data';
import { IPegInstructions } from './set/peg_instructions';
import { IDiscretionInstructions } from './set/discretion_instructions';
export interface INewOrderSingle {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    Parties?: IParties;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    AllocID?: string;
    NoAllocs?: INewOrderSingleNoAllocs[];
    SettlType?: string;
    SettlDate?: Date;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    ExDestination?: string;
    NoTradingSessions?: INewOrderSingleNoTradingSessions[];
    ProcessCode?: string;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: INewOrderSingleNoUnderlyings[];
    PrevClosePx?: number;
    Side: string;
    LocateReqd?: boolean;
    TransactTime: Date;
    Stipulations?: IStipulations;
    QtyType?: number;
    OrderQtyData?: IOrderQtyData;
    OrdType: string;
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
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    ForexReq?: boolean;
    SettlCurrency?: number;
    BookingType?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    SettlDate2?: Date;
    OrderQty2?: number;
    Price2?: number;
    PositionEffect?: string;
    CoveredOrUncovered?: number;
    MaxShow?: number;
    PegInstructions?: IPegInstructions;
    DiscretionInstructions?: IDiscretionInstructions;
    TargetStrategy?: number;
    TargetStrategyParameters?: string;
    ParticipationRate?: number;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    Designation?: string;
    FXCMPosID?: string;
    FXCMPegFluctuatePts?: number;
}
