import { IBidResponseNoBidComponents } from './set/bid_response_no_bid_components'

export interface IBidResponse {
  BidID?: string// 390
  ClientBidID?: string// 391
  NoBidComponents: IBidResponseNoBidComponents[]
}
