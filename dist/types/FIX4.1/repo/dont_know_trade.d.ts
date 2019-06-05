import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDontKnowTrade {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    ExecID?: string;
    DKReason: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: string;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    SecurityExchange?: string;
    Issuer?: string;
    SecurityDesc?: string;
    Side: string;
    OrderQty?: number;
    CashOrderQty?: number;
    LastShares?: number;
    LastPx?: number;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}