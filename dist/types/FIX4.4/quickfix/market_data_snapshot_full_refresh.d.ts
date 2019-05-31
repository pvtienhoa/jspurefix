import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IMDFullGrp } from './set/md_full_grp';
export interface IMarketDataSnapshotFullRefresh {
    MDReqID?: string;
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    FinancialStatus?: string;
    CorporateAction?: string;
    NetChgPrevDay?: number;
    MDFullGrp?: IMDFullGrp;
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
}
