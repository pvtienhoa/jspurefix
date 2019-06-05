import { IQuoteRequestNoRelatedSym } from './set/quote_request_no_related_sym'

export interface IQuoteRequest {
  QuoteReqID: string// 131
  RFQReqID?: string// 644
  ClOrdID?: string// 11
  OrderCapacity?: string// 528
  NoRelatedSym: IQuoteRequestNoRelatedSym[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
