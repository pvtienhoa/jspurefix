import { INestedParties } from './nested_parties';
export interface ICrossOrderCancelReplaceRequestNoSidesNoAllocs {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: number;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
