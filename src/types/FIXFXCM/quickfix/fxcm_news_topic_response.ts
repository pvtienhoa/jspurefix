import { IFXCMNewsTopicResponseFXCMPageIDNo } from './set/fxcm_news_topic_response_fxcm_page_id_no'

export interface IFXCMNewsTopicResponse {
  TestReqID: string// 112
  TradingSessionID: string// 336
  TradingSessionSubID: string// 625
  FXCMPageIDNo: IFXCMNewsTopicResponseFXCMPageIDNo[]
}
