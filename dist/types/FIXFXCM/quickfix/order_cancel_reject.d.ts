/// <reference types="node" />
export interface IOrderCancelReject {
    OrderID: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    ClOrdID: string;
    ClOrdLinkID?: string;
    OrigClOrdID: string;
    OrdStatus: string;
    WorkingIndicator?: boolean;
    OrigOrdModTime?: Date;
    ListID?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    TransactTime?: Date;
    CxlRejResponseTo: string;
    CxlRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    FXCMRequestRejectReason?: number;
    FXCMErrorDetails?: string;
}
