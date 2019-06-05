import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
export interface ICrossRequest {
    CrossRequestID: string;
    MarketID?: string;
    MarketSegmentID?: string;
    OrderQty?: number;
    ComplianceID?: string;
    ComplianceText?: string;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
}