/// <reference types="node" />
import { IMDRjctGrp } from './set/md_rjct_grp';
export interface IMarketDataRequestReject {
    MDReqID: string;
    MDReqRejReason?: string;
    MDRjctGrp?: IMDRjctGrp;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
