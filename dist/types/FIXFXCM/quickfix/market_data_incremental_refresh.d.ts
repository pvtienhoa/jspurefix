import { IMarketDataIncrementalRefreshNoMDEntries } from './set/market_data_incremental_refresh_no_md_entries';
export interface IMarketDataIncrementalRefresh {
    MDReqID?: string;
    NoMDEntries: IMarketDataIncrementalRefreshNoMDEntries[];
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
}
