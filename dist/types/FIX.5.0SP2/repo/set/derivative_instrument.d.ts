/// <reference types="node" />
import { IDerivativeSecurityAltIDGrp } from './derivative_security_alt_id_grp';
import { IDerivativeSecurityXML } from './derivative_security_xml';
import { IDerivativeEventsGrp } from './derivative_events_grp';
import { IDerivativeInstrumentParties } from './derivative_instrument_parties';
export interface IDerivativeInstrument {
    DerivativeSymbol?: string;
    DerivativeSymbolSfx?: string;
    DerivativeSecurityID?: string;
    DerivativeSecurityIDSource?: string;
    DerivativeSecurityAltIDGrp?: IDerivativeSecurityAltIDGrp[];
    DerivativeProduct?: number;
    DerivativeProductComplex?: string;
    DerivFlexProductEligibilityIndicator?: boolean;
    DerivativeSecurityGroup?: string;
    DerivativeCFICode?: string;
    DerivativeSecurityType?: string;
    DerivativeSecuritySubType?: string;
    DerivativeMaturityMonthYear?: string;
    DerivativeMaturityDate?: Date;
    DerivativeMaturityTime?: string;
    DerivativeSettleOnOpenFlag?: string;
    DerivativeInstrmtAssignmentMethod?: string;
    DerivativeSecurityStatus?: string;
    DerivativeIssueDate?: Date;
    DerivativeInstrRegistry?: string;
    DerivativeCountryOfIssue?: string;
    DerivativeStateOrProvinceOfIssue?: string;
    DerivativeLocaleOfIssue?: string;
    DerivativeStrikePrice?: number;
    DerivativeStrikeCurrency?: number;
    DerivativeStrikeMultiplier?: number;
    DerivativeStrikeValue?: number;
    DerivativeOptAttribute?: string;
    DerivativeContractMultiplier?: number;
    DerivativeMinPriceIncrement?: number;
    DerivativeMinPriceIncrementAmount?: number;
    DerivativeUnitOfMeasure?: string;
    DerivativeUnitOfMeasureQty?: number;
    DerivativePriceUnitOfMeasure?: string;
    DerivativePriceUnitOfMeasureQty?: number;
    DerivativeSettlMethod?: string;
    DerivativePriceQuoteMethod?: string;
    DerivativeValuationMethod?: string;
    DerivativeListMethod?: number;
    DerivativeCapPrice?: number;
    DerivativeFloorPrice?: number;
    DerivativePutOrCall?: number;
    DerivativeExerciseStyle?: string;
    DerivativeOptPayAmount?: number;
    DerivativeTimeUnit?: string;
    DerivativeSecurityExchange?: string;
    DerivativePositionLimit?: number;
    DerivativeNTPositionLimit?: number;
    DerivativeIssuer?: string;
    DerivativeEncodedIssuerLen?: number;
    DerivativeEncodedIssuer?: Buffer;
    DerivativeSecurityDesc?: string;
    DerivativeEncodedSecurityDescLen?: number;
    DerivativeEncodedSecurityDesc?: Buffer;
    DerivativeSecurityXML?: IDerivativeSecurityXML;
    DerivativeContractSettlMonth?: string;
    DerivativeEventsGrp?: IDerivativeEventsGrp[];
    DerivativeInstrumentParties?: IDerivativeInstrumentParties[];
    DerivativeContractMultiplierUnit?: number;
    DerivativeFlowScheduleType?: number;
}
