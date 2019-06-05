import { INewsNoRoutingIDs } from './set/news_no_routing_i_ds'
import { INewsNoRelatedSym } from './set/news_no_related_sym'
import { INewsNoLegs } from './set/news_no_legs'
import { INewsNoUnderlyings } from './set/news_no_underlyings'
import { INewsLinesOfText } from './set/news_lines_of_text'

export interface INews {
  OrigTime?: Date// 42
  Urgency?: string// 61
  Headline: string// 148
  EncodedHeadlineLen?: number// 358
  EncodedHeadline?: Buffer// 359
  NoRoutingIDs?: INewsNoRoutingIDs[]
  NoRelatedSym?: INewsNoRelatedSym[]
  NoLegs?: INewsNoLegs[]
  NoUnderlyings?: INewsNoUnderlyings[]
  LinesOfText: INewsLinesOfText[]
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  TestReqID?: string// 112
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  FXCMPageID?: string// 9022
  FXCMPageviewID?: number// 9023
  TransactTime?: Date// 60
  FXCMContinuousFlag?: number// 9020
  MDUpdateAction?: string// 279
}
