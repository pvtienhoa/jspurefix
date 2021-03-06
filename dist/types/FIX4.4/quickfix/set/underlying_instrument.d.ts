/// <reference types="node" />
import { IUndSecAltIDGrp } from './und_sec_alt_id_grp';
import { IUnderlyingStipulations } from './underlying_stipulations';
export interface IUnderlyingInstrument {
    UnderlyingSymbol?: string;
    UnderlyingSymbolSfx?: string;
    UnderlyingSecurityID?: string;
    UnderlyingSecurityIDSource?: string;
    UndSecAltIDGrp?: IUndSecAltIDGrp;
    UnderlyingProduct?: number;
    UnderlyingCFICode?: string;
    UnderlyingSecurityType?: string;
    UnderlyingSecuritySubType?: string;
    UnderlyingMaturityMonthYear?: string;
    UnderlyingMaturityDate?: Date;
    UnderlyingPutOrCall?: number;
    UnderlyingCouponPaymentDate?: Date;
    UnderlyingIssueDate?: Date;
    UnderlyingRepoCollateralSecurityType?: string;
    UnderlyingRepurchaseTerm?: number;
    UnderlyingRepurchaseRate?: number;
    UnderlyingFactor?: number;
    UnderlyingCreditRating?: string;
    UnderlyingInstrRegistry?: string;
    UnderlyingCountryOfIssue?: string;
    UnderlyingStateOrProvinceOfIssue?: string;
    UnderlyingLocaleOfIssue?: string;
    UnderlyingRedemptionDate?: Date;
    UnderlyingStrikePrice?: number;
    UnderlyingStrikeCurrency?: number;
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
    UnderlyingCPProgram?: string;
    UnderlyingCPRegType?: string;
    UnderlyingCurrency?: number;
    UnderlyingQty?: number;
    UnderlyingPx?: number;
    UnderlyingDirtyPrice?: number;
    UnderlyingEndPrice?: number;
    UnderlyingStartValue?: number;
    UnderlyingCurrentValue?: number;
    UnderlyingEndValue?: number;
    UnderlyingStipulations?: IUnderlyingStipulations;
}
