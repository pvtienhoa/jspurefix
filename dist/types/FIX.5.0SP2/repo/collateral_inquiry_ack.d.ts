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
import { IStandardTrailer } from './set/standard_trailer';
export interface ICollateralInquiryAck {
    StandardHeader: IStandardHeader;
    CollInquiryID: string;
    CollInquiryStatus: number;
    CollInquiryResult?: number;
    CollInqQualGrp?: ICollInqQualGrp[];
    TotNumReports?: number;
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
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    ClearingBusinessDate?: Date;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
