import { IParties } from './set/parties'
import { IQuoteCancelNoQuoteEntries } from './set/quote_cancel_no_quote_entries'

export interface IQuoteCancel {
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteCancelType: number// 298
  QuoteResponseLevel?: number// 301
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  NoQuoteEntries?: IQuoteCancelNoQuoteEntries[]
}
