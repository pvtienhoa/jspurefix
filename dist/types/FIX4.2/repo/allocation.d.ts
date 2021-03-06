/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocation {
    StandardHeader: IStandardHeader;
    AllocID: string;
    AllocTransType: string;
    RefAllocID?: string;
    AllocLinkID?: string;
    AllocLinkType?: number;
    NoOrders?: number;
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    ListID?: string;
    WaveNo?: string;
    NoExecs?: number;
    LastShares?: number;
    ExecID?: string;
    LastPx?: number;
    LastCapacity?: string;
    Side: string;
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
    Shares: number;
    LastMkt?: string;
    TradingSessionID?: string;
    AvgPx: number;
    Currency?: number;
    AvgPrxPrecision?: number;
    TradeDate: Date;
    TransactTime?: Date;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    GrossTradeAmt?: number;
    NetMoney?: number;
    OpenClose?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NumDaysInterest?: number;
    AccruedInterestRate?: number;
    NoAllocs?: number;
    AllocAccount?: string;
    AllocPrice?: number;
    AllocShares: number;
    ProcessCode?: string;
    BrokerOfCredit?: string;
    NotifyBrokerOfCredit?: boolean;
    AllocHandlInst?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    ExecBroker?: string;
    ClientID?: string;
    Commission?: number;
    CommType?: string;
    AllocAvgPx?: number;
    AllocNetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: number;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    AccruedInterestAmt?: number;
    SettlInstMode?: string;
    NoMiscFees?: number;
    MiscFeeAmt?: number;
    MiscFeeCurr?: number;
    MiscFeeType?: string;
    StandardTrailer: IStandardTrailer;
}
