/// <reference types="node" />
import { IOrderMassCancelReportNoAffectedOrders } from './set/order_mass_cancel_report_no_affected_orders';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IOrderMassCancelReport {
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    OrderID: string;
    SecondaryOrderID?: string;
    MassCancelRequestType: string;
    MassCancelResponse: string;
    MassCancelRejectReason?: string;
    TotalAffectedOrders?: number;
    NoAffectedOrders?: IOrderMassCancelReportNoAffectedOrders[];
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Side?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
