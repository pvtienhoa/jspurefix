import { IInstrument } from './set/instrument';
import { IMarketDataSnapshotFullRefreshNoUnderlyings } from './set/market_data_snapshot_full_refresh_no_underlyings';
import { IMarketDataSnapshotFullRefreshNoLegs } from './set/market_data_snapshot_full_refresh_no_legs';
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries';
export interface IMarketDataSnapshotFullRefresh {
    MDReqID?: string;
    Instrument?: IInstrument;
    NoUnderlyings?: IMarketDataSnapshotFullRefreshNoUnderlyings[];
    NoLegs?: IMarketDataSnapshotFullRefreshNoLegs[];
    FinancialStatus?: string;
    CorporateAction?: string;
    NetChgPrevDay?: number;
    NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[];
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
    FXCMTimingInterval?: number;
    FXCMContinuousFlag?: number;
}
