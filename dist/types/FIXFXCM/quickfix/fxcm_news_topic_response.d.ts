import { IFXCMNewsTopicResponseFXCMPageIDNo } from './set/fxcm_news_topic_response_fxcm_page_id_no';
export interface IFXCMNewsTopicResponse {
    TestReqID: string;
    TradingSessionID: string;
    TradingSessionSubID: string;
    FXCMPageIDNo: IFXCMNewsTopicResponseFXCMPageIDNo[];
}
