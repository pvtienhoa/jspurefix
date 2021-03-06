/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IExecCollGrp } from './set/exec_coll_grp';
import { ITrdCollGrp } from './set/trd_coll_grp';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { IMiscFeesGrp } from './set/misc_fees_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IStipulations } from './set/stipulations';
import { ISettlInstructionsData } from './set/settl_instructions_data';
export interface ICollateralAssignment {
    CollAsgnID: string;
    CollReqID?: string;
    CollAsgnReason: number;
    CollAsgnTransType: number;
    CollAsgnRefID?: string;
    TransactTime: Date;
    ExpireTime?: Date;
    Account?: string;
    AccountType?: number;
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    SettlDate?: Date;
    Quantity?: number;
    QtyType?: number;
    Currency?: string;
    MarginExcess?: number;
    TotalNetValue?: number;
    CashOutstanding?: number;
    Side?: string;
    Price?: number;
    PriceType?: number;
    AccruedInterestAmt?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    WireReference?: string;
    TradeDate?: Date;
    TransactionID?: string;
    FirmTransactionID?: string;
    ClearingBusinessDate?: Date;
    CollateralRequestLinkID?: string;
    TotNumCollateralRequests?: number;
    CollateralRequestNumber?: number;
    CollateralRequestInstruction?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    ExecCollGrp?: IExecCollGrp[];
    TrdCollGrp?: ITrdCollGrp[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtCollGrp?: IUndInstrmtCollGrp[];
    TrdRegTimestamps?: ITrdRegTimestamps[];
    MiscFeesGrp?: IMiscFeesGrp[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Stipulations?: IStipulations[];
    SettlInstructionsData?: ISettlInstructionsData;
}
