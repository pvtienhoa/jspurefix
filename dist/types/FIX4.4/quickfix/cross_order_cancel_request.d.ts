import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
export interface ICrossOrderCancelRequest {
    OrderID?: string;
    CrossID: string;
    OrigCrossID: string;
    CrossType: number;
    CrossPrioritization: number;
    SideCrossOrdCxlGrp?: ISideCrossOrdCxlGrp;
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    TransactTime: Date;
}
