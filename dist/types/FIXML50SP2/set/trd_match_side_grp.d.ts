/// <reference types="node" />
import { IParties } from './parties';
import { ITrdAllocGrp } from './trd_alloc_grp';
import { ITradeReportOrderDetail } from './trade_report_order_detail';
import { ITrdInstrmtLegExecGrp } from './trd_instrmt_leg_exec_grp';
export interface ITrdMatchSideGrp {
    Side?: string;
    SideExecID?: string;
    SideExecRefID?: string;
    SideTradeID?: string;
    SideTradeReportID?: string;
    OrderDelay?: number;
    OrderDelayUnit?: number;
    SideLastQty?: number;
    SideClearingTradePrice?: number;
    SidePriceDifferential?: number;
    SideClearingTradePriceType?: number;
    SideFillStationCd?: string;
    SideReasonCd?: string;
    SideTrdSubTyp?: number;
    NetGrossInd?: number;
    SideCurrency?: string;
    SideSettlCurrency?: string;
    TradeInputSource?: string;
    TradeInputDevice?: string;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    SolicitedFlag?: boolean;
    CustOrderCapacity?: number;
    TimeBracket?: string;
    PositionEffect?: string;
    ExchangeRule?: string;
    TradeAllocIndicator?: number;
    PreallocMethod?: string;
    AllocID?: string;
    SideGrossTradeAmt?: number;
    AggressorIndicator?: boolean;
    ExchangeSpecialInstructions?: string;
    SideShortSaleExemptionReason?: number;
    OrderCategory?: string;
    AvgPxIndicator?: number;
    AvgPxGroupID?: string;
    SideMarketSegmentID?: string;
    SideVenueType?: string;
    ClearingFeeIndicator?: string;
    CustOrderHandlingInst?: string;
    OrderHandlingInstSource?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Parties?: IParties[];
    TrdAllocGrp?: ITrdAllocGrp[];
    TradeReportOrderDetail?: ITradeReportOrderDetail;
    TrdInstrmtLegExecGrp?: ITrdInstrmtLegExecGrp[];
}