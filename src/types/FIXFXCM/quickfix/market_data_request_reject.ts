import { IMarketDataRequestRejectNoAltMDSource } from './set/market_data_request_reject_no_alt_md_source'
import { IInstrument } from './set/instrument'

export interface IMarketDataRequestReject {
  MDReqID: string// 262
  MDReqRejReason?: string// 281
  NoAltMDSource?: IMarketDataRequestRejectNoAltMDSource[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Instrument?: IInstrument
  FXCMRequestRejectReason?: number// 9025
  FXCMErrorDetails?: string// 9029
  FXCMTimingInterval?: number// 9011
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
