import { INestedParties3 } from './nested_parties_3';
export interface INewOrderMultilegNoAllocs {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: number;
    IndividualAllocID?: string;
    NestedParties3?: INestedParties3;
    AllocQty?: number;
}
