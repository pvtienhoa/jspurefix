/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IRequestForPositionsAckNoLegs } from './set/request_for_positions_ack_no_legs';
import { IRequestForPositionsAckNoUnderlyings } from './set/request_for_positions_ack_no_underlyings';
export interface IRequestForPositionsAck {
    PosMaintRptID: string;
    PosReqID?: string;
    TotalNumPosReports?: number;
    UnsolicitedIndicator?: boolean;
    PosReqResult: number;
    PosReqStatus: number;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    NoLegs?: IRequestForPositionsAckNoLegs[];
    NoUnderlyings?: IRequestForPositionsAckNoUnderlyings[];
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    FXCMRequestRejectReason?: number;
    FXCMErrorDetails?: string;
}
