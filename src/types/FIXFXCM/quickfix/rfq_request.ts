import { IRFQRequestNoRelatedSym } from './set/rfq_request_no_related_sym'

export interface IRFQRequest {
  RFQReqID: string// 644
  NoRelatedSym: IRFQRequestNoRelatedSym[]
  SubscriptionRequestType?: string// 263
}
