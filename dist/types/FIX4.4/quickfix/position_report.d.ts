/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
export interface IPositionReport {
    PosMaintRptID: string;
    PosReqID?: string;
    PosReqType?: number;
    SubscriptionRequestType?: string;
    TotalNumPosReports?: number;
    UnsolicitedIndicator?: boolean;
    PosReqResult: number;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    SettlPrice: number;
    SettlPriceType: number;
    PriorSettlPrice: number;
    InstrmtLegGrp?: IInstrmtLegGrp;
    PosUndInstrmtGrp?: IPosUndInstrmtGrp;
    PositionQty?: IPositionQty;
    PositionAmountData?: IPositionAmountData;
    RegistStatus?: string;
    DeliveryDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}