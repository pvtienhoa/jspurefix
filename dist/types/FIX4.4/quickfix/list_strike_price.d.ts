import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp';
import { IUndInstrmtStrkPxGrp } from './set/und_instrmt_strk_px_grp';
export interface IListStrikePrice {
    ListID: string;
    TotNoStrikes: number;
    LastFragment?: boolean;
    InstrmtStrkPxGrp?: IInstrmtStrkPxGrp;
    UndInstrmtStrkPxGrp?: IUndInstrmtStrkPxGrp;
}
