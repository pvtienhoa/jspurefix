/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { ISecurityDefinitionRequestNoUnderlyings } from './set/security_definition_request_no_underlyings';
import { ISecurityDefinitionRequestNoLegs } from './set/security_definition_request_no_legs';
export interface ISecurityDefinitionRequest {
    SecurityReqID: string;
    SecurityRequestType: number;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    NoUnderlyings?: ISecurityDefinitionRequestNoUnderlyings[];
    Currency?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    NoLegs?: ISecurityDefinitionRequestNoLegs[];
    ExpirationCycle?: number;
    SubscriptionRequestType?: string;
}
