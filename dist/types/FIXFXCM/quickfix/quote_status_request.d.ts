import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IQuoteStatusRequestNoUnderlyings } from './set/quote_status_request_no_underlyings';
import { IQuoteStatusRequestNoLegs } from './set/quote_status_request_no_legs';
import { IParties } from './set/parties';
export interface IQuoteStatusRequest {
    QuoteStatusReqID?: string;
    QuoteID?: string;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: IQuoteStatusRequestNoUnderlyings[];
    NoLegs?: IQuoteStatusRequestNoLegs[];
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
}
