import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { ISecurityDefinitionNoUnderlyings } from './set/security_definition_no_underlyings'
import { ISecurityDefinitionNoLegs } from './set/security_definition_no_legs'

export interface ISecurityDefinition {
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType: number// 323
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  NoUnderlyings?: ISecurityDefinitionNoUnderlyings[]
  Currency?: number// 15
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NoLegs?: ISecurityDefinitionNoLegs[]
  ExpirationCycle?: number// 827
  RoundLot?: number// 561
  MinTradeVol?: number// 562
}
