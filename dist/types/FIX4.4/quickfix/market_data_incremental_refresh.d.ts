import { IMDIncGrp } from './set/md_inc_grp';
export interface IMarketDataIncrementalRefresh {
    MDReqID?: string;
    MDIncGrp?: IMDIncGrp;
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
}
