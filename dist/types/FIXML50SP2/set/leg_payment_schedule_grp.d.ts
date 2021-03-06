import { ILegPaymentScheduleRateSourceGrp } from './leg_payment_schedule_rate_source_grp';
import { ILegPaymentScheduleFixingDateBusinessCenterGrp } from './leg_payment_schedule_fixing_date_business_center_grp';
import { ILegPaymentScheduleFixingDayGrp } from './leg_payment_schedule_fixing_day_grp';
import { ILegPaymentScheduleInterimExchangeDateBusinessCenterGrp } from './leg_payment_schedule_interim_exchange_date_business_center_grp';
export interface ILegPaymentScheduleGrp {
    LegPaymentScheduleType?: number;
    LegPaymentScheduleXID?: string;
    LegPaymentScheduleXIDRef?: string;
    LegPaymentScheduleStubType?: number;
    LegPaymentScheduleStartDateUnadjusted?: Date;
    LegPaymentScheduleEndDateUnadjusted?: Date;
    LegPaymentSchedulePaySide?: number;
    LegPaymentScheduleReceiveSide?: number;
    LegPaymentScheduleNotional?: number;
    LegPaymentScheduleCurrency?: string;
    LegPaymentScheduleRate?: number;
    LegPaymentScheduleRateMultiplier?: number;
    LegPaymentScheduleRateSpread?: number;
    LegPaymentScheduleRateCurrency?: string;
    LegPaymentScheduleRateUnitOfMeasure?: string;
    LegPaymentScheduleRateConversionFactor?: number;
    LegPaymentScheduleRateSpreadType?: number;
    LegPaymentScheduleRateSpreadPositionType?: number;
    LegPaymentScheduleRateTreatment?: number;
    LegPaymentScheduleFixedAmount?: number;
    LegPaymentScheduleFixedCurrency?: string;
    LegPaymentScheduleSettlPeriodPrice?: number;
    LegPaymentScheduleSettlPeriodPriceCurrency?: string;
    LegPaymentScheduleSettlPeriodPriceUnitOfMeasure?: string;
    LegPaymentScheduleStepUnitOfMeasure?: string;
    LegPaymentScheduleStepFrequencyPeriod?: number;
    LegPaymentScheduleStepFrequencyUnit?: string;
    LegPaymentScheduleStepOffsetValue?: number;
    LegPaymentScheduleStepRate?: number;
    LegPaymentScheduleStepOffsetRate?: number;
    LegPaymentScheduleStepRelativeTo?: number;
    LegPaymentScheduleFixingDateUnadjusted?: Date;
    LegPaymentScheduleWeight?: number;
    LegPaymentScheduleFixingDateRelativeTo?: number;
    LegPaymentScheduleFixingDateBusinessDayConvention?: number;
    LegPaymentScheduleFixingDateOffsetPeriod?: number;
    LegPaymentScheduleFixingDateOffsetUnit?: string;
    LegPaymentScheduleFixingDateOffsetDayType?: number;
    LegPaymentScheduleFixingDayDistribution?: number;
    LegPaymentScheduleFixingDayCount?: number;
    LegPaymentScheduleFixingDateAdjusted?: Date;
    LegPaymentScheduleFixingLagPeriod?: number;
    LegPaymentScheduleFixingLagUnit?: string;
    LegPaymentScheduleFixingFirstObservationDateOffsetPeriod?: number;
    LegPaymentScheduleFixingFirstObservationDateOffsetUnit?: string;
    LegPaymentScheduleFixingTime?: string;
    LegPaymentScheduleFixingTimeBusinessCenter?: string;
    LegPaymentScheduleInterimExchangePaymentDateRelativeTo?: number;
    LegPaymentScheduleInterimExchangeDatesBusinessDayConvention?: number;
    LegPaymentScheduleInterimExchangeDatesOffsetPeriod?: number;
    LegPaymentScheduleInterimExchangeDatesOffsetUnit?: string;
    LegPaymentScheduleInterimExchangeDatesOffsetDayType?: number;
    LegPaymentScheduleInterimExchangeDateAdjusted?: Date;
    LegPaymentScheduleRateSourceGrp?: ILegPaymentScheduleRateSourceGrp[];
    LegPaymentScheduleFixingDateBusinessCenterGrp?: ILegPaymentScheduleFixingDateBusinessCenterGrp[];
    LegPaymentScheduleFixingDayGrp?: ILegPaymentScheduleFixingDayGrp[];
    LegPaymentScheduleInterimExchangeDateBusinessCenterGrp?: ILegPaymentScheduleInterimExchangeDateBusinessCenterGrp[];
}
