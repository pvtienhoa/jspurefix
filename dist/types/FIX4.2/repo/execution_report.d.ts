/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IExecutionReport {
    StandardHeader: IStandardHeader;
    OrderID: string;
    SecondaryOrderID?: string;
    ClOrdID?: string;
    OrigClOrdID?: string;
    ClientID?: string;
    ExecBroker?: string;
    NoContraBrokers?: number;
    ContraBroker?: string;
    ContraTrader?: string;
    ContraTradeQty?: number;
    ContraTradeTime?: Date;
    ListID?: string;
    ExecID: string;
    ExecTransType: string;
    ExecRefID?: string;
    ExecType: string;
    OrdStatus: string;
    OrdRejReason?: number;
    ExecRestatementReason?: number;
    Account?: string;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: string;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    ContractMultiplier?: number;
    CouponRate?: number;
    SecurityExchange?: string;
    Issuer?: string;
    EncodedIssuerLen?: number;
    EncodedIssuer?: Buffer;
    SecurityDesc?: string;
    EncodedSecurityDescLen?: number;
    EncodedSecurityDesc?: Buffer;
    Side: string;
    OrderQty?: number;
    CashOrderQty?: number;
    OrdType?: string;
    Price?: number;
    StopPx?: number;
    PegDifference?: number;
    DiscretionInst?: string;
    DiscretionOffset?: number;
    Currency?: number;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    ExecInst?: string;
    Rule80A?: string;
    LastShares?: number;
    LastPx?: number;
    LastSpotRate?: number;
    LastForwardPoints?: number;
    LastMkt?: string;
    TradingSessionID?: string;
    LastCapacity?: string;
    LeavesQty: number;
    CumQty: number;
    AvgPx: number;
    DayOrderQty?: number;
    DayCumQty?: number;
    DayAvgPx?: number;
    GTBookingInst?: number;
    TradeDate?: Date;
    TransactTime?: Date;
    ReportToExch?: boolean;
    Commission?: number;
    CommType?: string;
    GrossTradeAmt?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: number;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    HandlInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    OpenClose?: string;
    MaxShow?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    FutSettDate2?: Date;
    OrderQty2?: number;
    ClearingFirm?: string;
    ClearingAccount?: string;
    MultiLegReportingType?: string;
    StandardTrailer: IStandardTrailer;
}
