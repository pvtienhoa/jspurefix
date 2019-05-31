/// <reference types="node" />
import { IParties } from './set/parties';
import { IAllocAckGrp } from './set/alloc_ack_grp';
export interface IAllocationReportAck {
    AllocReportID: string;
    AllocID: string;
    Parties?: IParties;
    SecondaryAllocID?: string;
    TradeDate?: Date;
    TransactTime: Date;
    AllocStatus: number;
    AllocRejCode?: number;
    AllocReportType?: number;
    AllocIntermedReqType?: number;
    MatchStatus?: string;
    Product?: number;
    SecurityType?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    AllocAckGrp?: IAllocAckGrp;
}
