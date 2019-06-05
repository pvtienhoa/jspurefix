import { ISecurityListNoRelatedSym } from './set/security_list_no_related_sym';
export interface ISecurityList {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    NoRelatedSym?: ISecurityListNoRelatedSym[];
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
