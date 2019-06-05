import { INetworkStatusRequestNoCompIDs } from './set/network_status_request_no_comp_i_ds';
export interface INetworkStatusRequest {
    NetworkRequestType: number;
    NetworkRequestID: string;
    NoCompIDs?: INetworkStatusRequestNoCompIDs[];
}
