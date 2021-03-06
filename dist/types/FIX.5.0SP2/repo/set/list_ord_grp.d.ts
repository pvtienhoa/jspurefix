/// <reference types="node" />
import { IParties } from './parties';
import { IPreAllocGrp } from './pre_alloc_grp';
import { IDisplayInstruction } from './display_instruction';
import { ITrdgSesGrp } from './trdg_ses_grp';
import { IInstrument } from './instrument';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IStipulations } from './stipulations';
import { IOrderQtyData } from './order_qty_data';
import { ITriggeringInstruction } from './triggering_instruction';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
import { ICommissionData } from './commission_data';
import { IPegInstructions } from './peg_instructions';
import { IDiscretionInstructions } from './discretion_instructions';
import { IStrategyParametersGrp } from './strategy_parameters_grp';
export interface IListOrdGrp {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ListSeqNo: number;
    ClOrdLinkID?: string;
    SettlInstMode?: string;
    Parties?: IParties[];
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    AllocID?: string;
    PreallocMethod?: string;
    PreAllocGrp?: IPreAllocGrp[];
    SettlType?: string;
    SettlDate?: Date;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MatchIncrement?: number;
    MaxPriceLevels?: number;
    DisplayInstruction?: IDisplayInstruction;
    MaxFloor?: number;
    ExDestination?: string;
    ExDestinationIDSource?: string;
    TrdgSesGrp?: ITrdgSesGrp[];
    ProcessCode?: string;
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    PrevClosePx?: number;
    Side: string;
    SideValueInd?: number;
    LocateReqd?: boolean;
    TransactTime?: Date;
    Stipulations?: IStipulations[];
    QtyType?: number;
    OrderQtyData: IOrderQtyData;
    OrdType?: string;
    PriceType?: number;
    Price?: number;
    PriceProtectionScope?: string;
    StopPx?: number;
    TriggeringInstruction?: ITriggeringInstruction;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    Currency?: number;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    IOIID?: string;
    QuoteID?: string;
    RefOrderID?: string;
    RefOrderIDSource?: string;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    GTBookingInst?: number;
    CommissionData?: ICommissionData;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    PreTradeAnonymity?: boolean;
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
    StrategyParametersGrp?: IStrategyParametersGrp[];
    TargetStrategyParameters?: string;
    ParticipationRate?: number;
    Designation?: string;
}
