import { IParties } from './set/parties';
import { IQuoteCancelNoQuoteEntries } from './set/quote_cancel_no_quote_entries';
export interface IQuoteCancel {
    QuoteReqID?: string;
    QuoteID: string;
    QuoteCancelType: number;
    QuoteResponseLevel?: number;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    NoQuoteEntries?: IQuoteCancelNoQuoteEntries[];
}
