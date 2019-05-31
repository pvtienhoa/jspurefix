/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IQuotSetAckGrp } from './set/quot_set_ack_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMassQuoteAcknowledgement {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID?: string;
    QuoteStatus: number;
    QuoteRejectReason?: number;
    QuoteResponseLevel?: number;
    QuoteType?: number;
    Parties?: IParties[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    QuotSetAckGrp?: IQuotSetAckGrp[];
    StandardTrailer: IStandardTrailer;
}
