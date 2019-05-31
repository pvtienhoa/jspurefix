/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
export interface IAdvertisement {
    AdvId: string;
    AdvTransType: string;
    AdvRefID?: string;
    Instrument?: IInstrument;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    AdvSide: string;
    Quantity: number;
    QtyType?: number;
    Price?: number;
    Currency?: number;
    TradeDate?: Date;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    URLLink?: string;
    LastMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
