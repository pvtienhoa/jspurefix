/// <reference types="node" />
export interface ITradingSessionStatus {
    TradSesReqID?: string;
    TradingSessionID: string;
    TradingSessionSubID?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    UnsolicitedIndicator?: boolean;
    TradSesStatus: number;
    TradSesStatusRejReason?: number;
    TradSesStartTime?: Date;
    TradSesOpenTime?: Date;
    TradSesPreCloseTime?: Date;
    TradSesCloseTime?: Date;
    TradSesEndTime?: Date;
    TotalVolumeTraded?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
