import { INetworkStatusResponseNoCompIDs } from './set/network_status_response_no_comp_i_ds';
export interface INetworkStatusResponse {
    NetworkStatusResponseType: number;
    NetworkRequestID?: string;
    NetworkResponseID?: string;
    LastNetworkResponseID?: string;
    NoCompIDs: INetworkStatusResponseNoCompIDs[];
}
