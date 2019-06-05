/// <reference types="node" />
import { IParties } from './set/parties';
import { IMassQuoteAcknowledgementNoQuoteSets } from './set/mass_quote_acknowledgement_no_quote_sets';
export interface IMassQuoteAcknowledgement {
    QuoteReqID?: string;
    QuoteID?: string;
    QuoteStatus: number;
    QuoteRejectReason?: number;
    QuoteResponseLevel?: number;
    QuoteType?: number;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NoQuoteSets?: IMassQuoteAcknowledgementNoQuoteSets[];
}
