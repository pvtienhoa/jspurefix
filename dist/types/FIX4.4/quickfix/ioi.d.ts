/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IOrderQtyData } from './set/order_qty_data';
import { IStipulations } from './set/stipulations';
import { IInstrmtLegIOIGrp } from './set/instrmt_leg_ioi_grp';
import { IIOIQualGrp } from './set/ioi_qual_grp';
import { IRoutingGrp } from './set/routing_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
export interface IIOI {
    IOIID: string;
    IOITransType: string;
    IOIRefID?: string;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp;
    Side: string;
    QtyType?: number;
    OrderQtyData?: IOrderQtyData;
    IOIQty: string;
    Currency?: number;
    Stipulations?: IStipulations;
    InstrmtLegIOIGrp?: IInstrmtLegIOIGrp;
    PriceType?: number;
    Price?: number;
    ValidUntilTime?: Date;
    IOIQltyInd?: string;
    IOINaturalFlag?: boolean;
    IOIQualGrp?: IIOIQualGrp;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TransactTime?: Date;
    URLLink?: string;
    RoutingGrp?: IRoutingGrp;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
}
