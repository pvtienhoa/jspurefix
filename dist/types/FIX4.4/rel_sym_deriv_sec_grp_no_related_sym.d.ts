/// <reference types="node" />
import { IInstrument } from './instrument';
import { IInstrumentExtension } from './instrument_extension';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
export interface IRelSymDerivSecGrpNoRelatedSym {
    Instrument?: IInstrument;
    Currency?: number;
    ExpirationCycle?: number;
    InstrumentExtension?: IInstrumentExtension;
    InstrmtLegGrp?: IInstrmtLegGrp;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
