import { IFXCMNewsRequestFXCMPageIDNo } from './set/fxcm_news_request_fxcm_page_id_no';
export interface IFXCMNewsRequest {
    TestReqID: string;
    SubscriptionRequestType: string;
    TradingSessionID: string;
    TradingSessionSubID: string;
    FXCMPageIDNo: IFXCMNewsRequestFXCMPageIDNo[];
}
