/// <reference types="node" />
import { IListOrdGrp } from './set/list_ord_grp';
export interface INewOrderList {
    ListID: string;
    BidID?: string;
    ClientBidID?: string;
    ProgRptReqs?: number;
    BidType: number;
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
    ListOrdGrp?: IListOrdGrp;
}
