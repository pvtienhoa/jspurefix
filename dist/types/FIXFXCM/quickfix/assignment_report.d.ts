/// <reference types="node" />
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrumentLeg } from './set/instrument_leg';
import { IAssignmentReportNoUnderlyings } from './set/assignment_report_no_underlyings';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
export interface IAssignmentReport {
    AsgnRptID: string;
    TotNumAssignmentReports?: number;
    LastRptRequested?: boolean;
    Parties?: IParties;
    Account?: string;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: number;
    NoLegs?: number;
    InstrumentLeg?: IInstrumentLeg;
    NoUnderlyings?: IAssignmentReportNoUnderlyings[];
    PositionQty?: IPositionQty;
    PositionAmountData?: IPositionAmountData;
    ThresholdAmount?: number;
    SettlPrice: number;
    SettlPriceType: number;
    UnderlyingSettlPrice: number;
    ExpireDate?: Date;
    AssignmentMethod: string;
    AssignmentUnit?: number;
    OpenInterest: number;
    ExerciseMethod: string;
    SettlSessID: string;
    SettlSessSubID: string;
    ClearingBusinessDate: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
