/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IPositionMaintenanceReportNoLegs } from './set/position_maintenance_report_no_legs';
import { IPositionMaintenanceReportNoUnderlyings } from './set/position_maintenance_report_no_underlyings';
import { IPositionMaintenanceReportNoTradingSessions } from './set/position_maintenance_report_no_trading_sessions';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
export interface IPositionMaintenanceReport {
    PosMaintRptID: string;
    PosTransType: number;
    PosReqID?: string;
    PosMaintAction: number;
    OrigPosReqRefID: string;
    PosMaintStatus: number;
    PosMaintResult?: number;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    NoLegs?: IPositionMaintenanceReportNoLegs[];
    NoUnderlyings?: IPositionMaintenanceReportNoUnderlyings[];
    NoTradingSessions?: IPositionMaintenanceReportNoTradingSessions[];
    TransactTime: Date;
    PositionQty?: IPositionQty;
    PositionAmountData?: IPositionAmountData;
    AdjustmentType?: number;
    ThresholdAmount?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
