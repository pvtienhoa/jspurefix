import { INestedPartiesNoNestedPartyIDsNoNestedPartySubIDs } from './nested_parties_no_nested_party_i_ds_no_nested_party_sub_i_ds';
export interface INestedPartiesNoNestedPartyIDs {
    NestedPartyID?: string;
    NestedPartyIDSource?: string;
    NestedPartyRole?: number;
    NoNestedPartySubIDs?: INestedPartiesNoNestedPartyIDsNoNestedPartySubIDs[];
}
