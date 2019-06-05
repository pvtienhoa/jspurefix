import { INestedParties } from './nested_parties';
export interface IPreAllocGrpNoAllocs {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: number;
    IndividualAllocID?: string;
    NestedParties?: INestedParties;
    AllocQty?: number;
}
