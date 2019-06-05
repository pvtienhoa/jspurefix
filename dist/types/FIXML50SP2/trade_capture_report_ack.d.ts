/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdRepIndicatorsGrp } from './set/trd_rep_indicators_grp';
import { ITrdInstrmtLegGrp } from './set/trd_instrmt_leg_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { IPositionAmountData } from './set/position_amount_data';
import { ITradeQtyGrp } from './set/trade_qty_grp';
import { ITrdCapRptAckSideGrp } from './set/trd_cap_rpt_ack_side_grp';
export interface ITradeCaptureReportAck {
    TradeReportID?: string;
    TradeID?: string;
    SecondaryTradeID?: string;
    FirmTradeID?: string;
    SecondaryFirmTradeID?: string;
    TradeReportTransType?: number;
    TradeReportType?: number;
    TrdType?: number;
    TrdSubType?: number;
    SecondaryTrdType?: number;
    OffsetInstruction?: number;
    TradeHandlingInstr?: string;
    OrigTradeHandlingInstr?: string;
    OrigTradeDate?: Date;
    OrigTradeID?: string;
    OrigSecondaryTradeID?: string;
    TransferReason?: string;
    ExecType?: string;
    TradeReportRefID?: string;
    SecondaryTradeReportRefID?: string;
    TrdRptStatus?: number;
    TrdAckStatus?: number;
    OrdRejReason?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    SecondaryTradeReportID?: string;
    SubscriptionRequestType?: string;
    TradeLinkID?: string;
    TrdMatchID?: string;
    ExecID?: string;
    SecondaryExecID?: string;
    ExecRestatementReason?: number;
    PreviouslyReported?: boolean;
    PriceType?: number;
    CrossType?: number;
    UnderlyingTradingSessionID?: string;
    UnderlyingTradingSessionSubID?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    QtyType?: number;
    LastQty?: number;
    LastPx?: number;
    VenueType?: string;
    MarketSegmentID?: string;
    MarketID?: string;
    LastParPx?: number;
    CalculatedCcyLastQty?: number;
    LastSwapPoints?: number;
    Currency?: string;
    SettlCurrency?: string;
    LastSpotRate?: number;
    LastForwardPoints?: number;
    LastMkt?: string;
    TradeDate?: Date;
    ClearingBusinessDate?: Date;
    AvgPx?: number;
    AvgPxGroupID?: string;
    AvgPxIndicator?: number;
    MultiLegReportingType?: string;
    TradeLegRefID?: string;
    TransactTime?: Date;
    SettlType?: string;
    MatchStatus?: string;
    MatchType?: string;
    CopyMsgIndicator?: boolean;
    PublishTrdIndicator?: boolean;
    TradePublishIndicator?: number;
    ShortSaleReason?: number;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    AsOfIndicator?: string;
    ClearingFeeIndicator?: string;
    TierCode?: string;
    MessageEventSource?: string;
    LastUpdateTime?: Date;
    RndPx?: number;
    RptSys?: string;
    GrossTradeAmt?: number;
    SettlDate?: Date;
    FeeMultiplier?: number;
    RiskLimitCheckStatus?: number;
    StandardHeader?: IStandardHeader;
    RootParties?: IRootParties[];
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    TrdRepIndicatorsGrp?: ITrdRepIndicatorsGrp[];
    TrdInstrmtLegGrp?: ITrdInstrmtLegGrp[];
    TrdRegTimestamps?: ITrdRegTimestamps[];
    PositionAmountData?: IPositionAmountData[];
    TradeQtyGrp?: ITradeQtyGrp[];
    TrdCapRptAckSideGrp?: ITrdCapRptAckSideGrp[];
}