/// <reference types="node" />
export interface IAllocationInstructionAckNoAllocs {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocPrice?: number;
    IndividualAllocID?: string;
    IndividualAllocRejCode?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
}
