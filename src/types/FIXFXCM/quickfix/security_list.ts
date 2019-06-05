import { ISecurityListNoRelatedSym } from './set/security_list_no_related_sym'

export interface ISecurityList {
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  NoRelatedSym?: ISecurityListNoRelatedSym[]
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
