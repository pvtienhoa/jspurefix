/// <reference types="node" />
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IDerivativeSecurityListRequest {
    SecurityReqID: string;
    SecurityListRequestType: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    SecuritySubType?: string;
    Currency?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
}
