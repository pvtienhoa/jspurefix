/// <reference types="node" />
import { IParties } from './parties';
import { IPreAllocGrp } from './pre_alloc_grp';
import { IOrderQtyData } from './order_qty_data';
import { ICommissionData } from './commission_data';
export interface ISideCrossOrdModGrpNoSides {
    Side: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    Parties: IParties;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    AllocID?: string;
    PreAllocGrp: IPreAllocGrp;
    QtyType?: number;
    OrderQtyData: IOrderQtyData;
    CommissionData: ICommissionData;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    ForexReq?: boolean;
    SettlCurrency?: number;
    BookingType?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    PositionEffect?: string;
    CoveredOrUncovered?: number;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    SolicitedFlag?: boolean;
    SideComplianceID?: string;
}