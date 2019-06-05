import { INestedParties2 } from './nested_parties_2';
export interface IMultilegOrderCancelReplaceRequestNoLegsNoLegAllocs {
    LegAllocAccount?: string;
    LegIndividualAllocID?: string;
    NestedParties2?: INestedParties2;
    LegAllocQty?: number;
    LegAllocAcctIDSource?: string;
    LegSettlCurrency?: number;
}
