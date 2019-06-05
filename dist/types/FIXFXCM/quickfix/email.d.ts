/// <reference types="node" />
import { IEmailNoRoutingIDs } from './set/email_no_routing_i_ds';
import { IEmailNoRelatedSym } from './set/email_no_related_sym';
import { IEmailNoUnderlyings } from './set/email_no_underlyings';
import { IEmailNoLegs } from './set/email_no_legs';
import { IEmailLinesOfText } from './set/email_lines_of_text';
export interface IEmail {
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: Date;
    Subject: string;
    EncodedSubjectLen?: number;
    EncodedSubject?: Buffer;
    NoRoutingIDs?: IEmailNoRoutingIDs[];
    NoRelatedSym?: IEmailNoRelatedSym[];
    NoUnderlyings?: IEmailNoUnderlyings[];
    NoLegs?: IEmailNoLegs[];
    OrderID?: string;
    ClOrdID?: string;
    LinesOfText: IEmailLinesOfText[];
    RawDataLength?: number;
    RawData?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
