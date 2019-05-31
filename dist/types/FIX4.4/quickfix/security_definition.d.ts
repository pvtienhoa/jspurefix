/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
export interface ISecurityDefinition {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    UndInstrmtGrp?: IUndInstrmtGrp;
    Currency?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    InstrmtLegGrp?: IInstrmtLegGrp;
    ExpirationCycle?: number;
    RoundLot?: number;
    MinTradeVol?: number;
}
