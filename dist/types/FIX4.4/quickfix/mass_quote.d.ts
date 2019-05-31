import { IParties } from './set/parties';
import { IQuotSetGrp } from './set/quot_set_grp';
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
    QuotSetGrp?: IQuotSetGrp;
}
