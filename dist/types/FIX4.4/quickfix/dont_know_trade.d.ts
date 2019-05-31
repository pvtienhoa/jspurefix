/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IOrderQtyData } from './set/order_qty_data';
export interface IDontKnowTrade {
    OrderID: string;
    SecondaryOrderID?: string;
    ExecID: string;
    DKReason: string;
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    Side: string;
    OrderQtyData?: IOrderQtyData;
    LastQty?: number;
    LastPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
