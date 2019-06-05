/// <reference types="node" />
import { INestedParties } from './nested_parties';
import { ICommissionData } from './commission_data';
import { IAllocationInstructionNoAllocsNoMiscFees } from './allocation_instruction_no_allocs_no_misc_fees';
import { ISettlInstructionsData } from './settl_instructions_data';
export interface IAllocationInstructionNoAllocs {
    AllocAccount: string;
    AllocAcctIDSource?: number;
    MatchStatus?: string;
    AllocPrice?: number;
    AllocQty: number;
    IndividualAllocID?: string;
    ProcessCode?: string;
    NestedParties: INestedParties;
    NotifyBrokerOfCredit?: boolean;
    AllocHandlInst?: number;
    AllocText?: string;
    EncodedAllocTextLen?: number;
    EncodedAllocText?: Buffer;
    CommissionData: ICommissionData;
    AllocAvgPx?: number;
    AllocNetMoney?: number;
    SettlCurrAmt?: number;
    AllocSettlCurrAmt?: number;
    SettlCurrency?: number;
    AllocSettlCurrency?: number;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    AccruedInterestAmt?: number;
    AllocAccruedInterestAmt?: number;
    AllocInterestAtMaturity?: number;
    SettlInstMode?: string;
    NoMiscFees?: IAllocationInstructionNoAllocsNoMiscFees[];
    NoClearingInstructions?: number;
    ClearingInstruction?: number;
    ClearingFeeIndicator?: string;
    AllocSettlInstType?: number;
    SettlInstructionsData: ISettlInstructionsData;
}
