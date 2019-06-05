/// <reference types="node" />
import { IParties } from './set/parties';
import { IAllocationInstructionAckNoAllocs } from './set/allocation_instruction_ack_no_allocs';
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
    NoAllocs?: IAllocationInstructionAckNoAllocs[];
}
