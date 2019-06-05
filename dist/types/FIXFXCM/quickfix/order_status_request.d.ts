import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IOrderStatusRequestNoUnderlyings } from './set/order_status_request_no_underlyings';
export interface IOrderStatusRequest {
    OrderID?: string;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    Parties?: IParties;
    OrdStatusReqID?: string;
    Account?: string;
    AcctIDSource?: number;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: IOrderStatusRequestNoUnderlyings[];
    Side?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
