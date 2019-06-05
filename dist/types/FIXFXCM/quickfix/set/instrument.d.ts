/// <reference types="node" />
import { IInstrumentNoSecurityAltID } from './instrument_no_security_alt_id';
import { IInstrumentNoEvents } from './instrument_no_events';
export interface IInstrument {
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    SecurityIDSource?: string;
    NoSecurityAltID?: IInstrumentNoSecurityAltID[];
    Product?: number;
    CFICode?: string;
    SecurityType?: string;
    SecuritySubType?: string;
    MaturityMonthYear?: string;
    MaturityDate?: Date;
    CouponPaymentDate?: Date;
    IssueDate?: Date;
    RepoCollateralSecurityType?: number;
    RepurchaseTerm?: number;
    RepurchaseRate?: number;
    Factor?: number;
    CreditRating?: string;
    InstrRegistry?: string;
    CountryOfIssue?: string;
    StateOrProvinceOfIssue?: string;
    LocaleOfIssue?: string;
    RedemptionDate?: Date;
    StrikePrice?: number;
    StrikeCurrency?: number;
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
    Pool?: string;
    ContractSettlMonth?: string;
    CPProgram?: number;
    CPRegType?: string;
    NoEvents?: IInstrumentNoEvents[];
    DatedDate?: Date;
    InterestAccrualDate?: Date;
    FXCMSymID?: string;
    FXCMSymPrecision?: number;
    FXCMSymPointSize?: number;
    FXCMSymSortOrder?: number;
    FXCMProductID?: number;
    FXCMSymMarginRatio?: number;
    Currency?: number;
    RoundLot?: number;
    FXCMSymInterestBuy?: number;
    FXCMSymInterestSell?: number;
    FXCMSubscriptionStatus?: string;
    FXCMCondDistStop?: number;
    FXCMCondDistLimit?: number;
    FXCMCondDistEntryStop?: number;
    FXCMCondDistEntryLimit?: number;
    FXCMMaxQuantity?: number;
    FXCMMinQuantity?: number;
    FXCMTradingStatus?: string;
}