import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { ISecurityDefinitionRequestNoUnderlyings } from './set/security_definition_request_no_underlyings'
import { ISecurityDefinitionRequestNoLegs } from './set/security_definition_request_no_legs'

export interface ISecurityDefinitionRequest {
  SecurityReqID: string// 320
  SecurityRequestType: number// 321
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  NoUnderlyings?: ISecurityDefinitionRequestNoUnderlyings[]
  Currency?: number// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  NoLegs?: ISecurityDefinitionRequestNoLegs[]
  ExpirationCycle?: number// 827
  SubscriptionRequestType?: string// 263
}
