import { IInstrument } from './set/instrument'
import { IAdvertisementNoLegs } from './set/advertisement_no_legs'
import { IAdvertisementNoUnderlyings } from './set/advertisement_no_underlyings'

export interface IAdvertisement {
  AdvId: string// 2
  AdvTransType: string// 5
  AdvRefID?: string// 3
  Instrument?: IInstrument
  NoLegs?: IAdvertisementNoLegs[]
  NoUnderlyings?: IAdvertisementNoUnderlyings[]
  AdvSide: string// 4
  Quantity: number// 53
  QtyType?: number// 854
  Price?: number// 44
  Currency?: number// 15
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  URLLink?: string// 149
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
