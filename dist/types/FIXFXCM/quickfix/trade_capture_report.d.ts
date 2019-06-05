import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IOrderQtyData } from './set/order_qty_data';
import { IYieldData } from './set/yield_data';
import { ITradeCaptureReportNoUnderlyings } from './set/trade_capture_report_no_underlyings';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IPositionAmountData } from './set/position_amount_data';
import { ITradeCaptureReportNoLegs } from './set/trade_capture_report_no_legs';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { ITradeCaptureReportNoSides } from './set/trade_capture_report_no_sides';
export interface ITradeCaptureReport {
    TradeReportID: string;
    TradeReportTransType?: number;
    TradeReportType?: number;
    TradeRequestID?: string;
    TrdType?: number;
    TrdSubType?: number;
    SecondaryTrdType?: number;
    TransferReason?: string;
    ExecType?: string;
    TotNumTradeReports?: number;
    LastRptRequested?: boolean;
    UnsolicitedIndicator?: boolean;
    SubscriptionRequestType?: string;
    TradeReportRefID?: string;
    SecondaryTradeReportRefID?: string;
    SecondaryTradeReportID?: string;
    TradeLinkID?: string;
    TrdMatchID?: string;
    ExecID?: string;
    OrdStatus?: string;
    SecondaryExecID?: string;
    ExecRestatementReason?: number;
    PreviouslyReported: boolean;
    PriceType?: number;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    OrderQtyData?: IOrderQtyData;
    QtyType?: number;
    YieldData?: IYieldData;
    NoUnderlyings?: ITradeCaptureReportNoUnderlyings[];
    UnderlyingTradingSessionID?: string;
    UnderlyingTradingSessionSubID?: string;
    LastQty: number;
    LastPx: number;
    LastParPx?: number;
    LastSpotRate?: number;
    LastForwardPoints?: number;
    LastMkt?: string;
    TradeDate: Date;
    ClearingBusinessDate?: Date;
    AvgPx?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    AvgPxIndicator?: number;
    PositionAmountData?: IPositionAmountData;
    MultiLegReportingType?: string;
    TradeLegRefID?: string;
    NoLegs?: ITradeCaptureReportNoLegs[];
    TransactTime: Date;
    TrdRegTimestamps?: ITrdRegTimestamps;
    SettlType?: string;
    SettlDate?: Date;
    MatchStatus?: string;
    MatchType?: string;
    NoSides: ITradeCaptureReportNoSides[];
    CopyMsgIndicator?: boolean;
    PublishTrdIndicator?: boolean;
    ShortSaleReason?: number;
}