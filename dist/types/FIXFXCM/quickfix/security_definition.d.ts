/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { ISecurityDefinitionNoUnderlyings } from './set/security_definition_no_underlyings';
import { ISecurityDefinitionNoLegs } from './set/security_definition_no_legs';
export interface ISecurityDefinition {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    NoUnderlyings?: ISecurityDefinitionNoUnderlyings[];
    Currency?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NoLegs?: ISecurityDefinitionNoLegs[];
    ExpirationCycle?: number;
    RoundLot?: number;
    MinTradeVol?: number;
}
