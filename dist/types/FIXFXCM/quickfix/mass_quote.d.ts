import { IParties } from './set/parties';
import { IMassQuoteNoQuoteSets } from './set/mass_quote_no_quote_sets';
export interface IMassQuote {
    QuoteReqID?: string;
    QuoteID: string;
    QuoteType?: number;
    QuoteResponseLevel?: number;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DefBidSize?: number;
    DefOfferSize?: number;
    NoQuoteSets: IMassQuoteNoQuoteSets[];
}
