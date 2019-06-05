import { IParties } from './set/parties'
import { IMassQuoteNoQuoteSets } from './set/mass_quote_no_quote_sets'

export interface IMassQuote {
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteType?: number// 537
  QuoteResponseLevel?: number// 301
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DefBidSize?: number// 293
  DefOfferSize?: number// 294
  NoQuoteSets: IMassQuoteNoQuoteSets[]
}
