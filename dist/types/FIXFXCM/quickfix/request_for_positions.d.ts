/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IRequestForPositionsNoLegs } from './set/request_for_positions_no_legs';
import { IRequestForPositionsNoUnderlyings } from './set/request_for_positions_no_underlyings';
import { IRequestForPositionsNoTradingSessions } from './set/request_for_positions_no_trading_sessions';
export interface IRequestForPositions {
    PosReqID: string;
    PosReqType: number;
    MatchStatus?: string;
    SubscriptionRequestType?: string;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    NoLegs?: IRequestForPositionsNoLegs[];
    NoUnderlyings?: IRequestForPositionsNoUnderlyings[];
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    NoTradingSessions?: IRequestForPositionsNoTradingSessions[];
    TransactTime: Date;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    OrderID?: string;
    SecondaryClOrdID?: string;
    ClOrdID?: string;
    FXCMStartDate?: Date;
    FXCMStartTime?: Date;
    FXCMEndDate?: Date;
    FXCMEndTime?: Date;
    FXCMPosID?: string;
    FXCMMaxNoResults?: number;
}
