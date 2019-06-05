/// <reference types="node" />
import { IParties } from './parties';
import { INewOrderListNoOrdersNoAllocs } from './new_order_list_no_orders_no_allocs';
import { INewOrderListNoOrdersNoTradingSessions } from './new_order_list_no_orders_no_trading_sessions';
import { IInstrument } from './instrument';
import { INewOrderListNoOrdersNoUnderlyings } from './new_order_list_no_orders_no_underlyings';
import { IStipulations } from './stipulations';
import { IOrderQtyData } from './order_qty_data';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
import { ICommissionData } from './commission_data';
import { IPegInstructions } from './peg_instructions';
import { IDiscretionInstructions } from './discretion_instructions';
export interface INewOrderListNoOrders {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ListSeqNo: number;
    ClOrdLinkID?: string;
    SettlInstMode?: string;
    Parties: IParties;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    AllocID?: string;
    PreallocMethod?: string;
    NoAllocs?: INewOrderListNoOrdersNoAllocs[];
    SettlType?: string;
    SettlDate?: Date;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    ExDestination?: string;
    NoTradingSessions?: INewOrderListNoOrdersNoTradingSessions[];
    ProcessCode?: string;
    Instrument: IInstrument;
    NoUnderlyings?: INewOrderListNoOrdersNoUnderlyings[];
    PrevClosePx?: number;
    Side: string;
    SideValueInd?: number;
    LocateReqd?: boolean;
    TransactTime?: Date;
    Stipulations: IStipulations;
    QtyType?: number;
    OrderQtyData: IOrderQtyData;
    OrdType?: string;
    PriceType?: number;
    Price?: number;
    StopPx?: number;
    SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData;
    YieldData: IYieldData;
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
    CommissionData: ICommissionData;
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
    PegInstructions: IPegInstructions;
    DiscretionInstructions: IDiscretionInstructions;
    TargetStrategy?: number;
    TargetStrategyParameters?: string;
    ParticipationRate?: number;
    Designation?: string;
    FXCMPosID?: string;
    FXCMPegFluctuatePts?: number;
}