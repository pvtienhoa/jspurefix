/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatus {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID?: string;
    Instrument: IInstrument;
    Currency?: number;
    TradingSessionID?: string;
    UnsolicitedIndicator?: boolean;
    SecurityTradingStatus?: number;
    FinancialStatus?: string;
    CorporateAction?: string;
    HaltReason?: string;
    InViewOfCommon?: boolean;
    DueToRelated?: boolean;
    BuyVolume?: number;
    SellVolume?: number;
    HighPx?: number;
    LowPx?: number;
    LastPx?: number;
    TransactTime?: Date;
    Adjustment?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
