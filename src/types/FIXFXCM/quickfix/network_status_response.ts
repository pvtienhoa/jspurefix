import { INetworkStatusResponseNoCompIDs } from './set/network_status_response_no_comp_i_ds'

export interface INetworkStatusResponse {
  NetworkStatusResponseType: number// 937
  NetworkRequestID?: string// 933
  NetworkResponseID?: string// 932
  LastNetworkResponseID?: string// 934
  NoCompIDs: INetworkStatusResponseNoCompIDs[]
}
