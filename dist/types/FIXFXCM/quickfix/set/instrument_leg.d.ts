/// <reference types="node" />
import { IInstrumentLegNoLegSecurityAltID } from './instrument_leg_no_leg_security_alt_id';
export interface IInstrumentLeg {
    LegSymbol?: string;
    LegSymbolSfx?: string;
    LegSecurityID?: string;
    LegSecurityIDSource?: string;
    NoLegSecurityAltID?: IInstrumentLegNoLegSecurityAltID[];
    LegProduct?: number;
    LegCFICode?: string;
    LegSecurityType?: string;
    LegSecuritySubType?: string;
    LegMaturityMonthYear?: string;
    LegMaturityDate?: Date;
    LegCouponPaymentDate?: Date;
    LegIssueDate?: Date;
    LegRepoCollateralSecurityType?: number;
    LegRepurchaseTerm?: number;
    LegRepurchaseRate?: number;
    LegFactor?: number;
    LegCreditRating?: string;
    LegInstrRegistry?: string;
    LegCountryOfIssue?: string;
    LegStateOrProvinceOfIssue?: string;
    LegLocaleOfIssue?: string;
    LegRedemptionDate?: Date;
    LegStrikePrice?: number;
    LegStrikeCurrency?: number;
    LegOptAttribute?: string;
    LegContractMultiplier?: number;
    LegCouponRate?: number;
    LegSecurityExchange?: string;
    LegIssuer?: string;
    EncodedLegIssuerLen?: number;
    EncodedLegIssuer?: Buffer;
    LegSecurityDesc?: string;
    EncodedLegSecurityDescLen?: number;
    EncodedLegSecurityDesc?: Buffer;
    LegRatioQty?: number;
    LegSide?: string;
    LegCurrency?: number;
    LegPool?: string;
    LegDatedDate?: Date;
    LegContractSettlMonth?: string;
    LegInterestAccrualDate?: Date;
}