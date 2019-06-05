/// <reference types="node" />
import { IConfirmationRequestNoOrders } from './set/confirmation_request_no_orders';
export interface IConfirmationRequest {
    ConfirmReqID: string;
    ConfirmType: number;
    NoOrders?: IConfirmationRequestNoOrders[];
    AllocID?: string;
    SecondaryAllocID?: string;
    IndividualAllocID?: string;
    TransactTime: Date;
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocAccountType?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
