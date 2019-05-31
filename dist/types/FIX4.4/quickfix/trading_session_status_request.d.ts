export interface ITradingSessionStatusRequest {
    TradSesReqID: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    SubscriptionRequestType: string;
}
