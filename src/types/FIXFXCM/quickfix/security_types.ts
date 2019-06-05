import { ISecurityTypesNoSecurityTypes } from './set/security_types_no_security_types'

export interface ISecurityTypes {
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType: number// 323
  TotNoSecurityTypes?: number// 557
  LastFragment?: boolean// 893
  NoSecurityTypes?: ISecurityTypesNoSecurityTypes[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
}
