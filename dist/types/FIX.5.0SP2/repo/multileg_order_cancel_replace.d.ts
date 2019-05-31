/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IPreAllocMlegGrp } from './set/pre_alloc_mleg_grp';
import { IDisplayInstruction } from './set/display_instruction';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ILegOrdGrp } from './set/leg_ord_grp';
import { IOrderQtyData } from './set/order_qty_data';
import { ITriggeringInstruction } from './set/triggering_instruction';
import { ICommissionData } from './set/commission_data';
import { IPegInstructions } from './set/peg_instructions';
import { IDiscretionInstructions } from './set/discretion_instructions';
import { IStrategyParametersGrp } from './set/strategy_parameters_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMultilegOrderCancelReplace {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    OrigClOrdID?: string;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    OrigOrdModTime?: Date;
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
    PreAllocMlegGrp?: IPreAllocMlegGrp[];
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
    Side: string;
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    PrevClosePx?: number;
    SwapPoints?: number;
    LegOrdGrp?: ILegOrdGrp[];
    LocateReqd?: boolean;
    TransactTime: Date;
    QtyType?: number;
    OrderQtyData: IOrderQtyData;
    OrdType: string;
    MultilegModel?: number;
    MultilegPriceMethod?: number;
    PriceType?: number;
    Price?: number;
    PriceProtectionScope?: string;
    StopPx?: number;
    TriggeringInstruction?: ITriggeringInstruction;
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
    PositionEffect?: string;
    CoveredOrUncovered?: number;
    MaxShow?: number;
    PegInstructions?: IPegInstructions;
    DiscretionInstructions?: IDiscretionInstructions;
    TargetStrategy?: number;
    StrategyParametersGrp?: IStrategyParametersGrp[];
    TargetStrategyParameters?: string;
    RiskFreeRate?: number;
    ParticipationRate?: number;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    Designation?: string;
    MultiLegRptTypeReq?: number;
    StandardTrailer: IStandardTrailer;
}
