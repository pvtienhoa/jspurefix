/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IDontKnowTradeNoUnderlyings } from './set/dont_know_trade_no_underlyings';
import { IDontKnowTradeNoLegs } from './set/dont_know_trade_no_legs';
import { IOrderQtyData } from './set/order_qty_data';
export interface IDontKnowTrade {
    OrderID: string;
    SecondaryOrderID?: string;
    ExecID: string;
    DKReason: string;
    Instrument?: IInstrument;
    NoUnderlyings?: IDontKnowTradeNoUnderlyings[];
    NoLegs?: IDontKnowTradeNoLegs[];
    Side: string;
    OrderQtyData?: IOrderQtyData;
    LastQty?: number;
    LastPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
