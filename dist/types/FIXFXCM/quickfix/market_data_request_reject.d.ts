/// <reference types="node" />
import { IMarketDataRequestRejectNoAltMDSource } from './set/market_data_request_reject_no_alt_md_source';
import { IInstrument } from './set/instrument';
export interface IMarketDataRequestReject {
    MDReqID: string;
    MDReqRejReason?: string;
    NoAltMDSource?: IMarketDataRequestRejectNoAltMDSource[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
    FXCMRequestRejectReason?: number;
    FXCMErrorDetails?: string;
    FXCMTimingInterval?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
