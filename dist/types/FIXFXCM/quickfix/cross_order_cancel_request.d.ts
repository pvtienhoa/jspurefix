import { ICrossOrderCancelRequestNoSides } from './set/cross_order_cancel_request_no_sides';
import { IInstrument } from './set/instrument';
import { ICrossOrderCancelRequestNoUnderlyings } from './set/cross_order_cancel_request_no_underlyings';
import { ICrossOrderCancelRequestNoLegs } from './set/cross_order_cancel_request_no_legs';
export interface ICrossOrderCancelRequest {
    OrderID?: string;
    CrossID: string;
    OrigCrossID: string;
    CrossType: number;
    CrossPrioritization: number;
    NoSides: ICrossOrderCancelRequestNoSides[];
    Instrument?: IInstrument;
    NoUnderlyings?: ICrossOrderCancelRequestNoUnderlyings[];
    NoLegs?: ICrossOrderCancelRequestNoLegs[];
    TransactTime: Date;
}
