/// <reference types="node" />
import { IParties } from './set/parties';
import { IQuotSetAckGrp } from './set/quot_set_ack_grp';
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
    QuotSetAckGrp?: IQuotSetAckGrp;
}
