import { IInstrument } from './instrument'
import { IMassQuoteNoQuoteSetsNoQuoteEntriesNoLegs } from './mass_quote_no_quote_sets_no_quote_entries_no_legs'

export interface IMassQuoteNoQuoteSetsNoQuoteEntries {
  QuoteEntryID: string// 299
  Instrument: IInstrument
  NoLegs?: IMassQuoteNoQuoteSetsNoQuoteEntriesNoLegs[]
  BidPx?: number// 132
  OfferPx?: number// 133
  BidSize?: number// 134
  OfferSize?: number// 135
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: number// 189
  OfferForwardPoints?: number// 191
  MidPx?: number// 631
  BidYield?: number// 632
  MidYield?: number// 633
  OfferYield?: number// 634
  TransactTime?: Date// 60
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SettlDate?: Date// 64
  OrdType?: string// 40
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  BidForwardPoints2?: number// 642
  OfferForwardPoints2?: number// 643
  Currency?: number// 15
}