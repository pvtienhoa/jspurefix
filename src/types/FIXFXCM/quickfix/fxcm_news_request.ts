import { IFXCMNewsRequestFXCMPageIDNo } from './set/fxcm_news_request_fxcm_page_id_no'

export interface IFXCMNewsRequest {
  TestReqID: string// 112
  SubscriptionRequestType: string// 263
  TradingSessionID: string// 336
  TradingSessionSubID: string// 625
  FXCMPageIDNo: IFXCMNewsRequestFXCMPageIDNo[]
}
