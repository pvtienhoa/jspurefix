/// <reference types="node" />
import { IParties } from './set/parties';
import { IAllocAckGrp } from './set/alloc_ack_grp';
export interface IAllocationInstructionAck {
    AllocID: string;
    Parties?: IParties;
    SecondaryAllocID?: string;
    TradeDate?: Date;
    TransactTime: Date;
    AllocStatus: number;
    AllocRejCode?: number;
    AllocType?: number;
    AllocIntermedReqType?: number;
    MatchStatus?: string;
    Product?: number;
    SecurityType?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    AllocAckGrp?: IAllocAckGrp;
}
