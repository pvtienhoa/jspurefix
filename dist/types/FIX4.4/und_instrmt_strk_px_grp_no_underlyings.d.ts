/// <reference types="node" />
import { IUnderlyingInstrument } from './underlying_instrument';
export interface IUndInstrmtStrkPxGrpNoUnderlyings {
    UnderlyingInstrument?: IUnderlyingInstrument;
    PrevClosePx?: number;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    Side?: string;
    Price: number;
    Currency?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
