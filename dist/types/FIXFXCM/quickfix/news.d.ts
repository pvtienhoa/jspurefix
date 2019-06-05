/// <reference types="node" />
import { INewsNoRoutingIDs } from './set/news_no_routing_i_ds';
import { INewsNoRelatedSym } from './set/news_no_related_sym';
import { INewsNoLegs } from './set/news_no_legs';
import { INewsNoUnderlyings } from './set/news_no_underlyings';
import { INewsLinesOfText } from './set/news_lines_of_text';
export interface INews {
    OrigTime?: Date;
    Urgency?: string;
    Headline: string;
    EncodedHeadlineLen?: number;
    EncodedHeadline?: Buffer;
    NoRoutingIDs?: INewsNoRoutingIDs[];
    NoRelatedSym?: INewsNoRelatedSym[];
    NoLegs?: INewsNoLegs[];
    NoUnderlyings?: INewsNoUnderlyings[];
    LinesOfText: INewsLinesOfText[];
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    TestReqID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    FXCMPageID?: string;
    FXCMPageviewID?: number;
    TransactTime?: Date;
    FXCMContinuousFlag?: number;
    MDUpdateAction?: string;
}
