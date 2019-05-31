import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatusRequest {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID: string;
    Instrument: IInstrument;
    Currency?: number;
    SubscriptionRequestType: string;
    TradingSessionID?: string;
    StandardTrailer: IStandardTrailer;
}
