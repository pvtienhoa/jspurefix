/// <reference types="node" />
import { IOrdListStatGrp } from './set/ord_list_stat_grp';
export interface IListStatus {
    ListID: string;
    ListStatusType: number;
    NoRpts: number;
    ListOrderStatus: number;
    RptSeq: number;
    ListStatusText?: string;
    EncodedListStatusTextLen?: number;
    EncodedListStatusText?: Buffer;
    TransactTime?: Date;
    TotNoOrders: number;
    LastFragment?: boolean;
    OrdListStatGrp?: IOrdListStatGrp;
}
