import { ICompIDReqGrp } from './set/comp_id_req_grp';
export interface INetworkCounterpartySystemStatusRequest {
    NetworkRequestType: number;
    NetworkRequestID: string;
    CompIDReqGrp?: ICompIDReqGrp;
}
