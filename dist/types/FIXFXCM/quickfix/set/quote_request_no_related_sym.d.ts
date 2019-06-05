import { IInstrument } from './instrument';
import { IFinancingDetails } from './financing_details';
import { IQuoteRequestNoRelatedSymNoUnderlyings } from './quote_request_no_related_sym_no_underlyings';
import { IOrderQtyData } from './order_qty_data';
import { IStipulations } from './stipulations';
import { IQuoteRequestNoRelatedSymNoLegs } from './quote_request_no_related_sym_no_legs';
import { IQuoteRequestNoRelatedSymNoQuoteQualifiers } from './quote_request_no_related_sym_no_quote_qualifiers';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
import { IParties } from './parties';
export interface IQuoteRequestNoRelatedSym {
    Instrument: IInstrument;
    FinancingDetails: IFinancingDetails;
    NoUnderlyings?: IQuoteRequestNoRelatedSymNoUnderlyings[];
    PrevClosePx?: number;
    QuoteRequestType?: number;
    QuoteType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradeOriginationDate?: Date;
    Side?: string;
    QtyType?: number;
    OrderQtyData: IOrderQtyData;
    SettlType?: string;
    SettlDate?: Date;
    SettlDate2?: Date;
    OrderQty2?: number;
    Currency?: number;
    Stipulations: IStipulations;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    NoLegs?: IQuoteRequestNoRelatedSymNoLegs[];
    NoQuoteQualifiers?: IQuoteRequestNoRelatedSymNoQuoteQualifiers[];
    QuotePriceType?: number;
    OrdType?: string;
    ValidUntilTime?: Date;
    ExpireTime?: Date;
    TransactTime?: Date;
    SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData;
    PriceType?: number;
    Price?: number;
    Price2?: number;
    YieldData: IYieldData;
    Parties: IParties;
}
