/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatus {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID?: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: string;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    ContractMultiplier?: number;
    CouponRate?: number;
    SecurityExchange?: string;
    Issuer?: string;
    EncodedIssuerLen?: number;
    EncodedIssuer?: Buffer;
    SecurityDesc?: string;
    EncodedSecurityDescLen?: number;
    EncodedSecurityDesc?: Buffer;
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
    StandardTrailer: IStandardTrailer;
}
