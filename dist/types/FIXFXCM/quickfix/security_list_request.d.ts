/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { ISecurityListRequestNoUnderlyings } from './set/security_list_request_no_underlyings';
import { ISecurityListRequestNoLegs } from './set/security_list_request_no_legs';
export interface ISecurityListRequest {
    SecurityReqID: string;
    SecurityListRequestType: number;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: ISecurityListRequestNoUnderlyings[];
    NoLegs?: ISecurityListRequestNoLegs[];
    Currency?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
}
