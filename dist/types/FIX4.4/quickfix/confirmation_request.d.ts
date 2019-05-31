/// <reference types="node" />
import { IOrdAllocGrp } from './set/ord_alloc_grp';
export interface IConfirmationRequest {
    ConfirmReqID: string;
    ConfirmType: number;
    OrdAllocGrp?: IOrdAllocGrp;
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
