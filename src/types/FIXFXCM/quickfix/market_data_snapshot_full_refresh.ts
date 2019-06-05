import { IInstrument } from './set/instrument'
import { IMarketDataSnapshotFullRefreshNoUnderlyings } from './set/market_data_snapshot_full_refresh_no_underlyings'
import { IMarketDataSnapshotFullRefreshNoLegs } from './set/market_data_snapshot_full_refresh_no_legs'
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries'

export interface IMarketDataSnapshotFullRefresh {
  MDReqID?: string// 262
  Instrument?: IInstrument
  NoUnderlyings?: IMarketDataSnapshotFullRefreshNoUnderlyings[]
  NoLegs?: IMarketDataSnapshotFullRefreshNoLegs[]
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  NetChgPrevDay?: number// 451
  NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[]
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  FXCMTimingInterval?: number// 9011
  FXCMContinuousFlag?: number// 9020
}
