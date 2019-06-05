/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IOrderCancelRequestNoUnderlyings } from './set/order_cancel_request_no_underlyings';
import { IOrderQtyData } from './set/order_qty_data';
export interface IOrderCancelRequest {
    OrigClOrdID: string;
    OrderID?: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    ListID?: string;
    OrigOrdModTime?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    Parties?: IParties;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: IOrderCancelRequestNoUnderlyings[];
    Side: string;
    TransactTime: Date;
    OrderQtyData?: IOrderQtyData;
    ComplianceID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
