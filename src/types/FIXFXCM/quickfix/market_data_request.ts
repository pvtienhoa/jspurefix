import { IMarketDataRequestNoMDEntryTypes } from './set/market_data_request_no_md_entry_types'
import { IMarketDataRequestNoRelatedSym } from './set/market_data_request_no_related_sym'
import { IMarketDataRequestNoTradingSessions } from './set/market_data_request_no_trading_sessions'

export interface IMarketDataRequest {
  MDReqID: string// 262
  SubscriptionRequestType: string// 263
  MarketDepth?: number// 264
  MDUpdateType?: number// 265
  AggregatedBook?: boolean// 266
  OpenCloseSettlFlag?: string// 286
  Scope?: string// 546
  MDImplicitDelete?: boolean// 547
  NoMDEntryTypes: IMarketDataRequestNoMDEntryTypes[]
  NoRelatedSym: IMarketDataRequestNoRelatedSym[]
  NoTradingSessions?: IMarketDataRequestNoTradingSessions[]
  ApplQueueAction?: number// 815
  ApplQueueMax?: number// 812
  FXCMTimingInterval?: number// 9011
  FXCMStartDate?: Date// 9012
  FXCMStartTime?: Date// 9013
  FXCMEndDate?: Date// 9014
  FXCMEndTime?: Date// 9015
  FXCMNoSnapshot?: number// 9021
}
