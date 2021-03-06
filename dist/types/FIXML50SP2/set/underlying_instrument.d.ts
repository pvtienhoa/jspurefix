/// <reference types="node" />
import { IUndSecAltIDGrp } from './und_sec_alt_id_grp';
import { IUnderlyingSecurityXML } from './underlying_security_xml';
import { IUnderlyingStipulations } from './underlying_stipulations';
import { IUndlyInstrumentParties } from './undly_instrument_parties';
import { IUnderlyingEvntGrp } from './underlying_evnt_grp';
import { IUnderlyingSecondaryAssetGrp } from './underlying_secondary_asset_grp';
import { IUnderlyingAssetAttributeGrp } from './underlying_asset_attribute_grp';
import { IUnderlyingComplexEvents } from './underlying_complex_events';
import { IUnderlyingDateAdjustment } from './underlying_date_adjustment';
import { IUnderlyingPricingDateTime } from './underlying_pricing_date_time';
import { IUnderlyingMarketDisruption } from './underlying_market_disruption';
import { IUnderlyingOptionExercise } from './underlying_option_exercise';
import { IUnderlyingStreamGrp } from './underlying_stream_grp';
import { IUnderlyingProvisionGrp } from './underlying_provision_grp';
import { IUnderlyingAdditionalTermGrp } from './underlying_additional_term_grp';
import { IUnderlyingProtectionTermGrp } from './underlying_protection_term_grp';
import { IUnderlyingCashSettlTermGrp } from './underlying_cash_settl_term_grp';
import { IUnderlyingPhysicalSettlTermGrp } from './underlying_physical_settl_term_grp';
import { IUnderlyingRateSpreadSchedule } from './underlying_rate_spread_schedule';
import { IUnderlyingDividendPayout } from './underlying_dividend_payout';
import { IUnderlyingExtraordinaryEventGrp } from './underlying_extraordinary_event_grp';
export interface IUnderlyingInstrument {
    UnderlyingSymbol?: string;
    UnderlyingSymbolSfx?: string;
    UnderlyingSecurityID?: string;
    UnderlyingSecurityIDSource?: string;
    UnderlyingProduct?: number;
    UnderlyingCFICode?: string;
    UnderlyingSecurityType?: string;
    UnderlyingSecuritySubType?: string;
    UnderlyingMaturityMonthYear?: string;
    UnderlyingMaturityDate?: Date;
    UnderlyingMaturityTime?: string;
    UnderlyingContractPriceRefMonth?: string;
    UnderlyingCouponPaymentDate?: Date;
    UnderlyingRestructuringType?: string;
    UnderlyingSeniority?: string;
    UnderlyingNotional?: number;
    UnderlyingNotionalCurrency?: string;
    UnderlyingNotionalDeterminationMethod?: string;
    UnderlyingNotionalAdjustments?: number;
    UnderlyingNotionalXIDRef?: string;
    UnderlyingNotionalPercentageOutstanding?: number;
    UnderlyingOriginalNotionalPercentageOutstanding?: number;
    UnderlyingAttachmentPoint?: number;
    UnderlyingDetachmentPoint?: number;
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
    UnderlyingStrikeCurrency?: string;
    UnderlyingOptAttribute?: string;
    UnderlyingContractMultiplier?: number;
    UnderlyingContractMultiplierUnit?: number;
    UnderlyingTradingUnitPeriodMultiplier?: number;
    FlowScheduleType?: number;
    UnderlyingUnitOfMeasure?: string;
    UnderlyingUnitOfMeasureQty?: number;
    UnderlyingUnitOfMeasureCurrency?: string;
    UnderlyingPriceUnitOfMeasure?: string;
    UnderlyingPriceUnitOfMeasureQty?: number;
    UnderlyingPriceUnitOfMeasureCurrency?: string;
    UnderlyingTimeUnit?: string;
    UnderlyingExerciseStyle?: number;
    UnderlyingPriceQuoteCurrency?: string;
    UnderlyingCouponRate?: number;
    UnderlyingSecurityExchange?: string;
    UnderlyingIssuer?: string;
    EncodedUnderlyingIssuerLen?: number;
    EncodedUnderlyingIssuer?: Buffer;
    UnderlyingSecurityDesc?: string;
    EncodedUnderlyingSecurityDescLen?: number;
    EncodedUnderlyingSecurityDesc?: Buffer;
    CPProgram?: number;
    UnderlyingCPRegType?: string;
    UnderlyingAllocationPercent?: number;
    UnderlyingCurrency?: string;
    UnderlyingQty?: number;
    UnderlyingSettlementType?: number;
    UnderlyingCashAmount?: number;
    UnderlyingCashType?: string;
    UnderlyingPx?: number;
    UnderlyingDirtyPrice?: number;
    UnderlyingEndPrice?: number;
    UnderlyingStartValue?: number;
    UnderlyingCurrentValue?: number;
    UnderlyingEndValue?: number;
    UnderlyingAdjustedQuantity?: number;
    UnderlyingFXRate?: number;
    UnderlyingFXRateCalc?: string;
    UnderlyingCapValue?: number;
    UnderlyingSettlMethod?: string;
    UnderlyingPutOrCall?: number;
    UnderlyingInTheMoneyCondition?: number;
    UnderlyingContraryInstructionEligibilityIndicator?: boolean;
    UnderlyingConstituentWeight?: number;
    UnderlyingCouponType?: number;
    UnderlyingTotalIssuedAmount?: number;
    UnderlyingCouponFrequencyPeriod?: number;
    UnderlyingCouponFrequencyUnit?: string;
    CouponDayCount?: number;
    UnderlyingObligationID?: string;
    UnderlyingObligationIDSource?: string;
    UnderlyingEquityID?: string;
    UnderlyingEquityIDSource?: string;
    UnderlyingFutureID?: string;
    UnderlyingFutureIDSource?: string;
    UnderlyingLienSeniority?: number;
    UnderlyingLoanFacility?: number;
    UnderlyingReferenceEntityType?: number;
    UnderlyingIndexSeries?: number;
    UnderlyingIndexAnnexVersion?: number;
    UnderlyingIndexAnnexDate?: Date;
    UnderlyingIndexAnnexSource?: string;
    UnderlyingSettlRateIndex?: string;
    UnderlyingSettlRateIndexLocation?: string;
    UnderlyingOptionExpirationDesc?: string;
    EncodedUnderlyingOptionExpirationDescLen?: number;
    EncodedUnderlyingOptionExpirationDesc?: Buffer;
    UnderlyingProductComplex?: string;
    UnderlyingSecurityGroup?: string;
    UnderlyingSettleOnOpenFlag?: string;
    UnderlyingAssignmentMethod?: string;
    UnderlyingSecurityStatus?: string;
    UnderlyingObligationType?: string;
    UnderlyingAssetGroup?: number;
    UnderlyingAssetClass?: number;
    AssetSubClass?: number;
    UnderlyingAssetType?: string;
    UnderlyingSwapClass?: string;
    UnderlyingSwapSubClass?: string;
    UnderlyingNthToDefault?: number;
    UnderlyingMthToDefault?: number;
    UnderlyingSettledEntityMatrixSource?: string;
    UnderlyingSettledEntityMatrixPublicationDate?: Date;
    UnderlyingStrikeMultiplier?: number;
    UnderlyingStrikeValue?: number;
    UnderlyingStrikeUnitOfMeasure?: string;
    UnderlyingStrikeIndexCurvePoint?: string;
    UnderlyingStrikeIndex?: string;
    UnderlyingStrikeIndexQuote?: number;
    UnderlyingStrikeIndexSpread?: number;
    UnderlyingStrikePriceDeterminationMethod?: number;
    UnderlyingStrikePriceBoundaryMethod?: number;
    UnderlyingStrikePriceBoundaryPrecision?: number;
    UnderlyingMinPriceIncrement?: number;
    UnderlyingMinPriceIncrementAmount?: number;
    UnderlyingOptPayoutType?: number;
    UnderlyingOptPayoutAmount?: number;
    UnderlyingPriceQuoteMethod?: string;
    UnderlyingValuationMethod?: string;
    UnderlyingValuationSource?: string;
    UnderlyingValuationReferenceModel?: string;
    UnderlyingListMethod?: number;
    UnderlyingCapPrice?: number;
    UnderlyingFloorPrice?: number;
    UnderlyingFlexibleIndicator?: boolean;
    UnderlyingFlexProductEligibilityIndicator?: boolean;
    UnderlyingPositionLimit?: number;
    UnderlyingNTPositionLimit?: number;
    UnderlyingPool?: string;
    UnderlyingContractSettlMonth?: string;
    UnderlyingDatedDate?: Date;
    UnderlyingInterestAccrualDate?: Date;
    UnderlyingShortSaleRestriction?: number;
    UnderlyingRefTickTableID?: number;
    UnderlyingProtectionTermXIDRef?: string;
    UnderlyingSettlTermXIDRef?: string;
    UnderlyingStrategyType?: string;
    UnderlyingCommonPricingIndicator?: boolean;
    UnderlyingSettlDisruptionProvision?: number;
    UnderlyingInstrumentRoundingDirection?: string;
    UnderlyingInstrumentRoundingPrecision?: number;
    UnderlyingExtraordinaryEventAdjustmentMethod?: number;
    UnderlyingExchangeLookAlike?: boolean;
    UnderlyingAverageVolumeLimitationPercentage?: number;
    UnderlyingAverageVolumeLimitationPeriodDays?: number;
    UnderlyingDepositoryReceiptIndicator?: boolean;
    UnderlyingOpenUnits?: number;
    UnderlyingBasketDivisor?: number;
    UnderlyingInstrumentXID?: string;
    UndSecAltIDGrp?: IUndSecAltIDGrp[];
    UnderlyingSecurityXML?: IUnderlyingSecurityXML;
    UnderlyingStipulations?: IUnderlyingStipulations[];
    UndlyInstrumentParties?: IUndlyInstrumentParties[];
    UnderlyingEvntGrp?: IUnderlyingEvntGrp[];
    UnderlyingSecondaryAssetGrp?: IUnderlyingSecondaryAssetGrp[];
    UnderlyingAssetAttributeGrp?: IUnderlyingAssetAttributeGrp[];
    UnderlyingComplexEvents?: IUnderlyingComplexEvents[];
    UnderlyingDateAdjustment?: IUnderlyingDateAdjustment;
    UnderlyingPricingDateTime?: IUnderlyingPricingDateTime;
    UnderlyingMarketDisruption?: IUnderlyingMarketDisruption;
    UnderlyingOptionExercise?: IUnderlyingOptionExercise;
    UnderlyingStreamGrp?: IUnderlyingStreamGrp[];
    UnderlyingProvisionGrp?: IUnderlyingProvisionGrp[];
    UnderlyingAdditionalTermGrp?: IUnderlyingAdditionalTermGrp[];
    UnderlyingProtectionTermGrp?: IUnderlyingProtectionTermGrp[];
    UnderlyingCashSettlTermGrp?: IUnderlyingCashSettlTermGrp[];
    UnderlyingPhysicalSettlTermGrp?: IUnderlyingPhysicalSettlTermGrp[];
    UnderlyingRateSpreadSchedule?: IUnderlyingRateSpreadSchedule;
    UnderlyingDividendPayout?: IUnderlyingDividendPayout;
    UnderlyingExtraordinaryEventGrp?: IUnderlyingExtraordinaryEventGrp[];
}
