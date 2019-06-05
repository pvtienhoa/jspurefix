export interface IBusinessMessageReject {
  RefSeqNum?: number// 45
  RefMsgType: string// 372
  BusinessRejectRefID?: string// 379
  BusinessRejectReason: number// 380
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  FXCMRequestRejectReason?: number// 9025
  FXCMErrorDetails?: string// 9029
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
