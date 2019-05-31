import { IRFQReqGrp } from './set/rfq_req_grp';
export interface IRFQRequest {
    RFQReqID: string;
    RFQReqGrp?: IRFQReqGrp;
    SubscriptionRequestType?: string;
}
