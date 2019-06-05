import { IDeliveryStreamCommoditySourceGrp } from './delivery_stream_commodity_source_grp';
import { IDeliveryStreamCycleGrp } from './delivery_stream_cycle_grp';
export interface IDeliveryStream {
    DeliveryStreamType?: number;
    DeliveryStreamPipeline?: string;
    DeliveryStreamEntryPoint?: string;
    DeliveryStreamWithdrawalPoint?: string;
    DeliveryStreamDeliveryPoint?: string;
    DeliveryStreamDeliveryPointSource?: number;
    DeliveryStreamDeliveryPointDesc?: string;
    DeliveryStreamDeliveryRestriction?: number;
    DeliveryStreamDeliveryContingency?: string;
    DeliveryStreamDeliveryContingentPartySide?: number;
    DeliveryStreamDeliverAtSourceIndicator?: boolean;
    DeliveryStreamRiskApportionment?: string;
    DeliveryStreamRiskApportionmentSource?: string;
    DeliveryStreamTitleTransferLocation?: string;
    DeliveryStreamTitleTransferCondition?: number;
    DeliveryStreamImporterOfRecord?: string;
    DeliveryStreamNegativeTolerance?: number;
    DeliveryStreamPositiveTolerance?: number;
    DeliveryStreamToleranceUnitOfMeasure?: string;
    DeliveryStreamToleranceType?: number;
    DeliveryStreamToleranceOptionSide?: number;
    DeliveryStreamTotalPositiveTolerance?: number;
    DeliveryStreamTotalNegativeTolerance?: number;
    DeliveryStreamNotionalConversionFactor?: number;
    DeliveryStreamTransportEquipment?: string;
    DeliveryStreamElectingPartySide?: number;
    DeliveryStreamCommoditySourceGrp?: IDeliveryStreamCommoditySourceGrp[];
    DeliveryStreamCycleGrp?: IDeliveryStreamCycleGrp[];
}