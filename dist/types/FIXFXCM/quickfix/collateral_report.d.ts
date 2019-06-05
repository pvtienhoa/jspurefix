/// <reference types="node" />
import { IParties } from './set/parties';
import { ICollateralReportNoExecs } from './set/collateral_report_no_execs';
import { ICollateralReportNoTrades } from './set/collateral_report_no_trades';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IInstrumentLeg } from './set/instrument_leg';
import { ICollateralReportNoUnderlyings } from './set/collateral_report_no_underlyings';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { ICollateralReportNoMiscFees } from './set/collateral_report_no_misc_fees';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IStipulations } from './set/stipulations';
import { ISettlInstructionsData } from './set/settl_instructions_data';
export interface ICollateralReport {
    CollRptID: string;
    CollInquiryID?: string;
    CollStatus: number;
    TotNumReports?: number;
    LastRptRequested?: boolean;
    Parties?: IParties;
    Account?: string;
    AccountType?: number;
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    NoExecs?: ICollateralReportNoExecs[];
    NoTrades?: ICollateralReportNoTrades[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    SettlDate?: Date;
    Quantity?: number;
    QtyType?: number;
    Currency?: number;
    NoLegs?: number;
    InstrumentLeg?: IInstrumentLeg;
    NoUnderlyings?: ICollateralReportNoUnderlyings[];
    MarginExcess?: number;
    TotalNetValue?: number;
    CashOutstanding?: number;
    TrdRegTimestamps?: ITrdRegTimestamps;
    Side?: string;
    NoMiscFees?: ICollateralReportNoMiscFees[];
    Price?: number;
    PriceType?: number;
    AccruedInterestAmt?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Stipulations?: IStipulations;
    SettlInstructionsData?: ISettlInstructionsData;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    ClearingBusinessDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    FXCMUsedMargin?: number;
    FXCMMarginCall?: string;
    FXCMUsedMargin3?: number;
    FXCMCashDaily?: number;
}