import { IMarketDataIncrementalRefreshNoMDEntries } from './set/market_data_incremental_refresh_no_md_entries'

export interface IMarketDataIncrementalRefresh {
  MDReqID?: string// 262
  NoMDEntries: IMarketDataIncrementalRefreshNoMDEntries[]
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
}
