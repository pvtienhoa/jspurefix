/// <reference types="node" />
import { ITradingSessionStatusNoRelatedSym } from './set/trading_session_status_no_related_sym';
import { ITradingSessionStatusFXCMNoParam } from './set/trading_session_status_fxcm_no_param';
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
    NoRelatedSym?: ITradingSessionStatusNoRelatedSym[];
    FXCMNoParam?: ITradingSessionStatusFXCMNoParam[];
    FXCMServerTimeZone?: string;
    FXCMServerTimeZoneName?: string;
    TransactTime?: Date;
}
