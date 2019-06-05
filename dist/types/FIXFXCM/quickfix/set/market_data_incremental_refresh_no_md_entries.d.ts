/// <reference types="node" />
import { IInstrument } from './instrument';
import { IMarketDataIncrementalRefreshNoMDEntriesNoUnderlyings } from './market_data_incremental_refresh_no_md_entries_no_underlyings';
import { IMarketDataIncrementalRefreshNoMDEntriesNoLegs } from './market_data_incremental_refresh_no_md_entries_no_legs';
export interface IMarketDataIncrementalRefreshNoMDEntries {
    MDUpdateAction: string;
    DeleteReason?: string;
    MDEntryType?: string;
    MDEntryID?: string;
    MDEntryRefID?: string;
    Instrument: IInstrument;
    NoUnderlyings?: IMarketDataIncrementalRefreshNoMDEntriesNoUnderlyings[];
    NoLegs?: IMarketDataIncrementalRefreshNoMDEntriesNoLegs[];
    FinancialStatus?: string;
    CorporateAction?: string;
    MDEntryPx?: number;
    Currency?: number;
    MDEntrySize?: number;
    MDEntryDate?: Date;
    MDEntryTime?: Date;
    TickDirection?: string;
    MDMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    QuoteCondition?: string;
    TradeCondition?: string;
    MDEntryOriginator?: string;
    LocationID?: string;
    DeskID?: string;
    OpenCloseSettlFlag?: string;
    TimeInForce?: string;
    ExpireDate?: Date;
    ExpireTime?: Date;
    MinQty?: number;
    ExecInst?: string;
    SellerDays?: number;
    OrderID?: string;
    QuoteEntryID?: string;
    MDEntryBuyer?: string;
    MDEntrySeller?: string;
    NumberOfOrders?: number;
    MDEntryPositionNo?: number;
    Scope?: string;
    PriceDelta?: number;
    NetChgPrevDay?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    QuoteType?: number;
}
