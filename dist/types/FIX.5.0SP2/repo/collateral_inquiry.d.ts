/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ICollInqQualGrp } from './set/coll_inq_qual_grp';
import { IParties } from './set/parties';
import { IExecCollGrp } from './set/exec_coll_grp';
import { ITrdCollGrp } from './set/trd_coll_grp';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IStipulations } from './set/stipulations';
import { ISettlInstructionsData } from './set/settl_instructions_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface ICollateralInquiry {
    StandardHeader: IStandardHeader;
    CollInquiryID: string;
    CollInqQualGrp?: ICollInqQualGrp[];
    SubscriptionRequestType?: string;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Parties?: IParties[];
    Account?: string;
    AccountType?: number;
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    ExecCollGrp?: IExecCollGrp[];
    TrdCollGrp?: ITrdCollGrp[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    SettlDate?: Date;
    Quantity?: number;
    QtyType?: number;
    Currency?: number;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    MarginExcess?: number;
    TotalNetValue?: number;
    CashOutstanding?: number;
    TrdRegTimestamps?: ITrdRegTimestamps[];
    Side?: string;
    Price?: number;
    PriceType?: number;
    AccruedInterestAmt?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Stipulations?: IStipulations[];
    SettlInstructionsData?: ISettlInstructionsData;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    ClearingBusinessDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}