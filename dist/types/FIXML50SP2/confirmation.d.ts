/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IOrdAllocGrp } from './set/ord_alloc_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IYieldData } from './set/yield_data';
import { ICpctyConfGrp } from './set/cpcty_conf_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { ISettlInstructionsData } from './set/settl_instructions_data';
import { ICommissionData } from './set/commission_data';
import { ICommissionDataGrp } from './set/commission_data_grp';
import { IStipulations } from './set/stipulations';
import { IMiscFeesGrp } from './set/misc_fees_grp';
export interface IConfirmation {
    ConfirmID: string;
    ConfirmRefID?: string;
    ConfirmReqID?: string;
    ConfirmTransType: number;
    ConfirmType: number;
    CopyMsgIndicator?: boolean;
    LegalConfirm?: boolean;
    ConfirmStatus: number;
    AffirmStatus?: number;
    TradeConfirmationReferenceID?: string;
    ClearedIndicator?: number;
    AllocID?: string;
    SecondaryAllocID?: string;
    IndividualAllocID?: string;
    TransactTime: Date;
    TradeDate: Date;
    AllocQty: number;
    QtyType?: number;
    Side: string;
    Currency?: string;
    LastMkt?: string;
    AllocAccount: string;
    AllocAcctIDSource?: number;
    AllocAccountType?: number;
    AvgPx: number;
    AvgPxPrecision?: number;
    PriceType?: number;
    AvgParPx?: number;
    ReportedPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    ProcessCode?: string;
    GrossTradeAmt: number;
    NumDaysInterest?: number;
    ExDate?: Date;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    InterestAtMaturity?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    Concession?: number;
    TotalTakedown?: number;
    NetMoney: number;
    MaturityNetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    SettlType?: string;
    SettlDate?: Date;
    SharedCommission?: number;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    OrdAllocGrp?: IOrdAllocGrp[];
    TrdRegTimestamps?: ITrdRegTimestamps[];
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    YieldData?: IYieldData;
    CpctyConfGrp?: ICpctyConfGrp[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    SettlInstructionsData?: ISettlInstructionsData;
    CommissionData?: ICommissionData;
    CommissionDataGrp?: ICommissionDataGrp[];
    Stipulations?: IStipulations[];
    MiscFeesGrp?: IMiscFeesGrp[];
}
