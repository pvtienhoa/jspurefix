import { IBidResponseNoBidComponents } from './set/bid_response_no_bid_components';
export interface IBidResponse {
    BidID?: string;
    ClientBidID?: string;
    NoBidComponents: IBidResponseNoBidComponents[];
}
