/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IPositionReport {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    PosMaintRptID: string;
    PosReqID?: string;
    PosReqType?: number;
    SubscriptionRequestType?: string;
    TotalNumPosReports?: number;
    PosReqResult?: number;
    UnsolicitedIndicator?: boolean;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    PriceType?: number;
    SettlCurrency?: number;
    MessageEventSource?: string;
    Parties: IParties[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Instrument?: IInstrument;
    Currency?: number;
    SettlPrice?: number;
    SettlPriceType?: number;
    PriorSettlPrice?: number;
    MatchStatus?: string;
    InstrmtLegGrp?: IInstrmtLegGrp;
    PosUndInstrmtGrp?: IPosUndInstrmtGrp[];
    PositionQty?: IPositionQty[];
    PositionAmountData?: IPositionAmountData[];
    RegistStatus?: string;
    DeliveryDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    ModelType?: number;
    PriceDelta?: number;
}