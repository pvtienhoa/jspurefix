/// <reference types="node" />
import { IBidRequestNoBidDescriptors } from './set/bid_request_no_bid_descriptors';
import { IBidRequestNoBidComponents } from './set/bid_request_no_bid_components';
export interface IBidRequest {
    BidID?: string;
    ClientBidID: string;
    BidRequestTransType: string;
    ListName?: string;
    TotNoRelatedSym: number;
    BidType: number;
    NumTickets?: number;
    Currency?: number;
    SideValue1?: number;
    SideValue2?: number;
    NoBidDescriptors?: IBidRequestNoBidDescriptors[];
    NoBidComponents?: IBidRequestNoBidComponents[];
    LiquidityIndType?: number;
    WtAverageLiquidity?: number;
    ExchangeForPhysical?: boolean;
    OutMainCntryUIndex?: number;
    CrossPercent?: number;
    ProgRptReqs?: number;
    ProgPeriodInterval?: number;
    IncTaxInd?: number;
    ForexReq?: boolean;
    NumBidders?: number;
    TradeDate?: Date;
    BidTradeType: string;
    BasisPxType: string;
    StrikeTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
