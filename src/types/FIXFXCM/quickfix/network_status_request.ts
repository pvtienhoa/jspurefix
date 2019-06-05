import { INetworkStatusRequestNoCompIDs } from './set/network_status_request_no_comp_i_ds'

export interface INetworkStatusRequest {
  NetworkRequestType: number// 935
  NetworkRequestID: string// 933
  NoCompIDs?: INetworkStatusRequestNoCompIDs[]
}
