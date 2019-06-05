import { ITradingSessionStatusNoRelatedSym } from './set/trading_session_status_no_related_sym'
import { ITradingSessionStatusFXCMNoParam } from './set/trading_session_status_fxcm_no_param'

export interface ITradingSessionStatus {
  TradSesReqID?: string// 335
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  UnsolicitedIndicator?: boolean// 325
  TradSesStatus: number// 340
  TradSesStatusRejReason?: number// 567
  TradSesStartTime?: Date// 341
  TradSesOpenTime?: Date// 342
  TradSesPreCloseTime?: Date// 343
  TradSesCloseTime?: Date// 344
  TradSesEndTime?: Date// 345
  TotalVolumeTraded?: number// 387
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NoRelatedSym?: ITradingSessionStatusNoRelatedSym[]
  FXCMNoParam?: ITradingSessionStatusFXCMNoParam[]
  FXCMServerTimeZone?: string// 9019
  FXCMServerTimeZoneName?: string// 9030
  TransactTime?: Date// 60
}
