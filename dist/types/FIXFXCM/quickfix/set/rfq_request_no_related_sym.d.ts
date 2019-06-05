import { IInstrument } from './instrument';
import { IRFQRequestNoRelatedSymNoUnderlyings } from './rfq_request_no_related_sym_no_underlyings';
import { IRFQRequestNoRelatedSymNoLegs } from './rfq_request_no_related_sym_no_legs';
export interface IRFQRequestNoRelatedSym {
    Instrument: IInstrument;
    NoUnderlyings?: IRFQRequestNoRelatedSymNoUnderlyings[];
    NoLegs?: IRFQRequestNoRelatedSymNoLegs[];
    PrevClosePx?: number;
    QuoteRequestType?: number;
    QuoteType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
