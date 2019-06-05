import { IInstrument } from './instrument';
import { IMassQuoteNoQuoteSetsNoQuoteEntriesNoLegs } from './mass_quote_no_quote_sets_no_quote_entries_no_legs';
export interface IMassQuoteNoQuoteSetsNoQuoteEntries {
    QuoteEntryID: string;
    Instrument: IInstrument;
    NoLegs?: IMassQuoteNoQuoteSetsNoQuoteEntriesNoLegs[];
    BidPx?: number;
    OfferPx?: number;
    BidSize?: number;
    OfferSize?: number;
    ValidUntilTime?: Date;
    BidSpotRate?: number;
    OfferSpotRate?: number;
    BidForwardPoints?: number;
    OfferForwardPoints?: number;
    MidPx?: number;
    BidYield?: number;
    MidYield?: number;
    OfferYield?: number;
    TransactTime?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SettlDate?: Date;
    OrdType?: string;
    SettlDate2?: Date;
    OrderQty2?: number;
    BidForwardPoints2?: number;
    OfferForwardPoints2?: number;
    Currency?: number;
}