/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { IAdvertisementNoLegs } from './set/advertisement_no_legs';
import { IAdvertisementNoUnderlyings } from './set/advertisement_no_underlyings';
export interface IAdvertisement {
    AdvId: string;
    AdvTransType: string;
    AdvRefID?: string;
    Instrument?: IInstrument;
    NoLegs?: IAdvertisementNoLegs[];
    NoUnderlyings?: IAdvertisementNoUnderlyings[];
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
