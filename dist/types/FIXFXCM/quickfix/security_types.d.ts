/// <reference types="node" />
import { ISecurityTypesNoSecurityTypes } from './set/security_types_no_security_types';
export interface ISecurityTypes {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    TotNoSecurityTypes?: number;
    LastFragment?: boolean;
    NoSecurityTypes?: ISecurityTypesNoSecurityTypes[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
}
