import { IRFQRequestNoRelatedSym } from './set/rfq_request_no_related_sym';
export interface IRFQRequest {
    RFQReqID: string;
    NoRelatedSym: IRFQRequestNoRelatedSym[];
    SubscriptionRequestType?: string;
}
