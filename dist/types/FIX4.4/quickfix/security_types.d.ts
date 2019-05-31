/// <reference types="node" />
import { ISecTypesGrp } from './set/sec_types_grp';
export interface ISecurityTypes {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    TotNoSecurityTypes?: number;
    LastFragment?: boolean;
    SecTypesGrp?: ISecTypesGrp;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
}
