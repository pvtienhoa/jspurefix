/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinitionRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityRequestType: number;
    Symbol?: string;
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
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    NoRelatedSym?: number;
    UnderlyingSymbol?: string;
    UnderlyingSymbolSfx?: string;
    UnderlyingSecurityID?: string;
    UnderlyingIDSource?: string;
    UnderlyingSecurityType?: string;
    UnderlyingMaturityMonthYear?: string;
    UnderlyingMaturityDay?: string;
    UnderlyingPutOrCall?: number;
    UnderlyingStrikePrice?: number;
    UnderlyingOptAttribute?: string;
    UnderlyingContractMultiplier?: number;
    UnderlyingCouponRate?: number;
    UnderlyingSecurityExchange?: string;
    UnderlyingIssuer?: string;
    EncodedUnderlyingIssuerLen?: number;
    EncodedUnderlyingIssuer?: Buffer;
    UnderlyingSecurityDesc?: string;
    EncodedUnderlyingSecurityDescLen?: number;
    EncodedUnderlyingSecurityDesc?: Buffer;
    RatioQty?: number;
    Side?: string;
    UnderlyingCurrency?: number;
    StandardTrailer: IStandardTrailer;
}
