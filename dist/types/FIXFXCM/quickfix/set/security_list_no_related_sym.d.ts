/// <reference types="node" />
import { IInstrument } from './instrument';
import { IInstrumentExtension } from './instrument_extension';
import { IFinancingDetails } from './financing_details';
import { ISecurityListNoRelatedSymNoUnderlyings } from './security_list_no_related_sym_no_underlyings';
import { IStipulations } from './stipulations';
import { ISecurityListNoRelatedSymNoLegs } from './security_list_no_related_sym_no_legs';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
export interface ISecurityListNoRelatedSym {
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    NoUnderlyings?: ISecurityListNoRelatedSymNoUnderlyings[];
    Currency?: number;
    Stipulations?: IStipulations;
    NoLegs?: ISecurityListNoRelatedSymNoLegs[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    RoundLot?: number;
    MinTradeVol?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    ExpirationCycle?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
