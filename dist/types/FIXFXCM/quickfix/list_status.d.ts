/// <reference types="node" />
import { IListStatusNoOrders } from './set/list_status_no_orders';
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
    NoOrders: IListStatusNoOrders[];
}
