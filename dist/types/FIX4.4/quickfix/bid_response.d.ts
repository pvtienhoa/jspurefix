import { IBidCompRspGrp } from './set/bid_comp_rsp_grp';
export interface IBidResponse {
    BidID?: string;
    ClientBidID?: string;
    BidCompRspGrp?: IBidCompRspGrp;
}
