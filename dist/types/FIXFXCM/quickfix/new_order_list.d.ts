/// <reference types="node" />
import { INewOrderListNoOrders } from './set/new_order_list_no_orders';
export interface INewOrderList {
    ListID: string;
    BidID?: string;
    ClientBidID?: string;
    ProgRptReqs?: number;
    BidType?: number;
    ProgPeriodInterval?: number;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    ListExecInstType?: string;
    ListExecInst?: string;
    EncodedListExecInstLen?: number;
    EncodedListExecInst?: Buffer;
    AllowableOneSidednessPct?: number;
    AllowableOneSidednessValue?: number;
    AllowableOneSidednessCurr?: number;
    TotNoOrders: number;
    LastFragment?: boolean;
    NoOrders: INewOrderListNoOrders[];
    FXCMContingencyID?: string;
    ContingencyType?: number;
}
