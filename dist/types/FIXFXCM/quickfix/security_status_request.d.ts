import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { ISecurityStatusRequestNoUnderlyings } from './set/security_status_request_no_underlyings';
import { ISecurityStatusRequestNoLegs } from './set/security_status_request_no_legs';
export interface ISecurityStatusRequest {
    SecurityStatusReqID: string;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    NoUnderlyings?: ISecurityStatusRequestNoUnderlyings[];
    NoLegs?: ISecurityStatusRequestNoLegs[];
    Currency?: number;
    SubscriptionRequestType: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
