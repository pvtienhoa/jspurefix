/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IPreAllocGrp } from './set/pre_alloc_grp';
import { IDisplayInstruction } from './set/display_instruction';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IStipulations } from './set/stipulations';
import { IOrderQtyData } from './set/order_qty_data';
import { ITriggeringInstruction } from './set/triggering_instruction';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { ICommissionData } from './set/commission_data';
import { IPegInstructions } from './set/peg_instructions';
import { IDiscretionInstructions } from './set/discretion_instructions';
import { IStrategyParametersGrp } from './set/strategy_parameters_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { IStandardTrailer } from './set/standard_trailer';
export interface INewOrderSingle {
    StandardHeader: IStandardHeader;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    Parties?: IParties[];
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    AllocID?: string;
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
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp;
    PrevClosePx?: number;
    Side: string;
    LocateReqd?: boolean;
    TransactTime: Date;
    Stipulations?: IStipulations[];
    QtyType?: number;
    OrderQtyData: IOrderQtyData;
    OrdType: string;
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
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    Designation?: string;
    ManualOrderIndicator?: boolean;
    CustDirectedOrder?: boolean;
    ReceivedDeptID?: string;
    CustOrderHandlingInst?: string;
    OrderHandlingInstSource?: number;
    TrdRegTimestamps?: ITrdRegTimestamps[];
    RefOrderID?: string;
    RefOrderIDSource?: string;
    StandardTrailer: IStandardTrailer;
}
