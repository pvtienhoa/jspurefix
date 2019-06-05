/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IPositionMaintenanceRequestNoLegs } from './set/position_maintenance_request_no_legs';
import { IPositionMaintenanceRequestNoUnderlyings } from './set/position_maintenance_request_no_underlyings';
import { IPositionMaintenanceRequestNoTradingSessions } from './set/position_maintenance_request_no_trading_sessions';
import { IPositionQty } from './set/position_qty';
export interface IPositionMaintenanceRequest {
    PosReqID: string;
    PosTransType: number;
    PosMaintAction: number;
    OrigPosReqRefID?: string;
    PosMaintRptRefID?: string;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    NoLegs?: IPositionMaintenanceRequestNoLegs[];
    NoUnderlyings?: IPositionMaintenanceRequestNoUnderlyings[];
    NoTradingSessions?: IPositionMaintenanceRequestNoTradingSessions[];
    TransactTime: Date;
    PositionQty?: IPositionQty;
    AdjustmentType?: number;
    ContraryInstructionIndicator?: boolean;
    PriorSpreadIndicator?: boolean;
    ThresholdAmount?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
