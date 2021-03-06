/// <reference types="node" />
import { IStreamCommodity } from './stream_commodity';
import { IStreamEffectiveDate } from './stream_effective_date';
import { IStreamTerminationDate } from './stream_termination_date';
import { IStreamCalculationPeriodDates } from './stream_calculation_period_dates';
import { IPaymentStream } from './payment_stream';
import { IPaymentScheduleGrp } from './payment_schedule_grp';
import { IPaymentStubGrp } from './payment_stub_grp';
import { IDeliveryStream } from './delivery_stream';
import { IDeliveryScheduleGrp } from './delivery_schedule_grp';
export interface IStreamGrp {
    StreamType?: number;
    StreamXID?: string;
    StreamDesc?: string;
    StreamVersion?: string;
    StreamVersionEffectiveDate?: Date;
    StreamPaySide?: number;
    StreamReceiveSide?: number;
    StreamNotionalXIDRef?: string;
    StreamNotional?: number;
    StreamCurrency?: string;
    StreamNotionalDeterminationMethod?: string;
    StreamNotionalAdjustments?: number;
    StreamNotionalFrequencyPeriod?: number;
    StreamNotionalFrequencyUnit?: string;
    StreamNotionalCommodityFrequency?: number;
    StreamNotionalUnitOfMeasure?: string;
    StreamTotalNotional?: number;
    StreamTotalNotionalUnitOfMeasure?: string;
    StreamText?: string;
    EncodedStreamTextLen?: number;
    EncodedStreamText?: Buffer;
    StreamCommodity?: IStreamCommodity;
    StreamEffectiveDate?: IStreamEffectiveDate;
    StreamTerminationDate?: IStreamTerminationDate;
    StreamCalculationPeriodDates?: IStreamCalculationPeriodDates;
    PaymentStream?: IPaymentStream;
    PaymentScheduleGrp?: IPaymentScheduleGrp[];
    PaymentStubGrp?: IPaymentStubGrp[];
    DeliveryStream?: IDeliveryStream;
    DeliveryScheduleGrp?: IDeliveryScheduleGrp[];
}
