export interface IFXCMRequestReject {
    TestReqID: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    FXCMRequestRejectReason: number;
    Text?: string;
    FXCMErrorDetails?: string;
}
