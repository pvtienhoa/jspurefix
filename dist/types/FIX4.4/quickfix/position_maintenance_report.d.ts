/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
export interface IPositionMaintenanceReport {
    PosMaintRptID: string;
    PosTransType: number;
    PosReqID?: string;
    PosMaintAction: number;
    OrigPosReqRefID: string;
    PosMaintStatus: number;
    PosMaintResult?: number;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    TrdgSesGrp?: ITrdgSesGrp;
    TransactTime: Date;
    PositionQty?: IPositionQty;
    PositionAmountData?: IPositionAmountData;
    AdjustmentType?: number;
    ThresholdAmount?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
