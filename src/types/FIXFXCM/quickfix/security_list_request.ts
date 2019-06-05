import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { ISecurityListRequestNoUnderlyings } from './set/security_list_request_no_underlyings'
import { ISecurityListRequestNoLegs } from './set/security_list_request_no_legs'

export interface ISecurityListRequest {
  SecurityReqID: string// 320
  SecurityListRequestType: number// 559
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  NoUnderlyings?: ISecurityListRequestNoUnderlyings[]
  NoLegs?: ISecurityListRequestNoLegs[]
  Currency?: number// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
}
