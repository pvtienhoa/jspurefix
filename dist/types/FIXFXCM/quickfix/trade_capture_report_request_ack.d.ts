/// <reference types="node" />
import { IInstrument } from './set/instrument';
import { ITradeCaptureReportRequestAckNoUnderlyings } from './set/trade_capture_report_request_ack_no_underlyings';
import { ITradeCaptureReportRequestAckNoLegs } from './set/trade_capture_report_request_ack_no_legs';
export interface ITradeCaptureReportRequestAck {
    TradeRequestID: string;
    TradeRequestType: number;
    SubscriptionRequestType?: string;
    TotNumTradeReports?: number;
    TradeRequestResult: number;
    TradeRequestStatus: number;
    Instrument?: IInstrument;
    NoUnderlyings?: ITradeCaptureReportRequestAckNoUnderlyings[];
    NoLegs?: ITradeCaptureReportRequestAckNoLegs[];
    MultiLegReportingType?: string;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
