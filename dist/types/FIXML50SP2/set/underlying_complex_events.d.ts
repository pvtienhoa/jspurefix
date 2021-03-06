import { IUnderlyingComplexEventDates } from './underlying_complex_event_dates';
import { IUnderlyingComplexEventRateSourceGrp } from './underlying_complex_event_rate_source_grp';
import { IUnderlyingComplexEventRelativeDate } from './underlying_complex_event_relative_date';
import { IUnderlyingComplexEventPeriodGrp } from './underlying_complex_event_period_grp';
import { IUnderlyingComplexEventCreditEventSourceGrp } from './underlying_complex_event_credit_event_source_grp';
import { IUnderlyingComplexEventCreditEventGrp } from './underlying_complex_event_credit_event_grp';
export interface IUnderlyingComplexEvents {
    UnderlyingComplexEventType?: number;
    UnderlyingComplexOptPayoutPaySide?: number;
    UnderlyingComplexOptPayoutReceiveSide?: number;
    UnderlyingComplexOptPayoutUnderlier?: string;
    UnderlyingComplexOptPayoutAmount?: number;
    UnderlyingComplexOptPayoutPercentage?: number;
    UnderlyingComplexOptPayoutTime?: number;
    UnderlyingComplexOptPayoutCurrency?: string;
    UnderlyingComplexEventPrice?: number;
    UnderlyingComplexEventPricePercentage?: number;
    UnderlyingComplexEventPriceBoundaryMethod?: number;
    UnderlyingComplexEventPriceBoundaryPrecision?: number;
    UnderlyingComplexEventPriceTimeType?: number;
    UnderlyingComplexEventCondition?: number;
    UnderlyingComplexEventCurrencyOne?: string;
    UnderlyingComplexEventCurrencyTwo?: string;
    UnderlyingComplexEventQuoteBasis?: number;
    UnderlyingComplexEventFixedFXRate?: number;
    UnderlyingComplexEventSpotRate?: number;
    UnderlyingComplexEventForwardPoints?: number;
    UnderlyingComplexEventDeterminationMethod?: string;
    UnderlyingComplexEventCalculationAgent?: number;
    UnderlyingComplexEventStrikePrice?: number;
    UnderlyingComplexEventStrikeFactor?: number;
    UnderlyingComplexEventStrikeNumberOfOptions?: number;
    UnderlyingComplexEventCreditEventsXIDRef?: string;
    UnderlyingComplexEventCreditEventNotifyingParty?: number;
    UnderlyingComplexEventCreditEventBusinessCenter?: string;
    UnderlyingComplexEventCreditEventStandardSources?: boolean;
    UnderlyingComplexEventCreditEventMinimumSources?: number;
    UnderlyingComplexEventFuturesPriceValuation?: boolean;
    UnderlyingComplexEventOptionsPriceValuation?: boolean;
    UnderlyingComplexEventPVFinalPriceElectionFallback?: number;
    UnderlyingComplexEventXID?: string;
    UnderlyingComplexEventXIDRef?: string;
    UnderlyingComplexEventDates?: IUnderlyingComplexEventDates[];
    UnderlyingComplexEventRateSourceGrp?: IUnderlyingComplexEventRateSourceGrp[];
    UnderlyingComplexEventRelativeDate?: IUnderlyingComplexEventRelativeDate;
    UnderlyingComplexEventPeriodGrp?: IUnderlyingComplexEventPeriodGrp[];
    UnderlyingComplexEventCreditEventSourceGrp?: IUnderlyingComplexEventCreditEventSourceGrp[];
    UnderlyingComplexEventCreditEventGrp?: IUnderlyingComplexEventCreditEventGrp[];
}
