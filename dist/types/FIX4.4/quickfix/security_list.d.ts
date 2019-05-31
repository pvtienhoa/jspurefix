import { ISecListGrp } from './set/sec_list_grp';
export interface ISecurityList {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    SecListGrp?: ISecListGrp;
}
