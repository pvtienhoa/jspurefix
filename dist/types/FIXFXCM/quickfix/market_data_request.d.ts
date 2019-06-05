import { IMarketDataRequestNoMDEntryTypes } from './set/market_data_request_no_md_entry_types';
import { IMarketDataRequestNoRelatedSym } from './set/market_data_request_no_related_sym';
import { IMarketDataRequestNoTradingSessions } from './set/market_data_request_no_trading_sessions';
export interface IMarketDataRequest {
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth?: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    OpenCloseSettlFlag?: string;
    Scope?: string;
    MDImplicitDelete?: boolean;
    NoMDEntryTypes: IMarketDataRequestNoMDEntryTypes[];
    NoRelatedSym: IMarketDataRequestNoRelatedSym[];
    NoTradingSessions?: IMarketDataRequestNoTradingSessions[];
    ApplQueueAction?: number;
    ApplQueueMax?: number;
    FXCMTimingInterval?: number;
    FXCMStartDate?: Date;
    FXCMStartTime?: Date;
    FXCMEndDate?: Date;
    FXCMEndTime?: Date;
    FXCMNoSnapshot?: number;
}
