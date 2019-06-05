/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { ISecurityStatusNoUnderlyings } from './set/security_status_no_underlyings';
import { ISecurityStatusNoLegs } from './set/security_status_no_legs';
export interface ISecurityStatus {
    SecurityStatusReqID?: string;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    NoUnderlyings?: ISecurityStatusNoUnderlyings[];
    NoLegs?: ISecurityStatusNoLegs[];
    Currency?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
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
}
