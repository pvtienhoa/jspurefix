import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
export interface IOrderMassStatusRequest {
    MassStatusReqID: string;
    MassStatusReqType: number;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Side?: string;
}
