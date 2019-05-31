import { IMDReqGrp } from './set/md_req_grp';
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
export interface IMarketDataRequest {
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    OpenCloseSettlFlag?: string;
    Scope?: string;
    MDImplicitDelete?: boolean;
    MDReqGrp?: IMDReqGrp;
    InstrmtMDReqGrp?: IInstrmtMDReqGrp;
    TrdgSesGrp?: ITrdgSesGrp;
    ApplQueueAction?: number;
    ApplQueueMax?: number;
}
