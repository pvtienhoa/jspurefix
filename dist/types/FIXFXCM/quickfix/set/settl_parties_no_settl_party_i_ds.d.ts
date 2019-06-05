import { ISettlPartiesNoSettlPartyIDsNoSettlPartySubIDs } from './settl_parties_no_settl_party_i_ds_no_settl_party_sub_i_ds';
export interface ISettlPartiesNoSettlPartyIDs {
    SettlPartyID?: string;
    SettlPartyIDSource?: string;
    SettlPartyRole?: number;
    NoSettlPartySubIDs?: ISettlPartiesNoSettlPartyIDsNoSettlPartySubIDs[];
}
