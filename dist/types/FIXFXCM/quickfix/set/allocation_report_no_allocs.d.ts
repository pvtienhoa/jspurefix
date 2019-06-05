/// <reference types="node" />
import { INestedParties } from './nested_parties';
import { ICommissionData } from './commission_data';
import { IAllocationReportNoAllocsNoMiscFees } from './allocation_report_no_allocs_no_misc_fees';
import { IAllocationReportNoAllocsNoClearingInstructions } from './allocation_report_no_allocs_no_clearing_instructions';
import { ISettlInstructionsData } from './settl_instructions_data';
export interface IAllocationReportNoAllocs {
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
    AllocAccruedInterestAmt?: number;
    AllocInterestAtMaturity?: number;
    NoMiscFees?: IAllocationReportNoAllocsNoMiscFees[];
    NoClearingInstructions?: IAllocationReportNoAllocsNoClearingInstructions[];
    ClearingFeeIndicator?: string;
    AllocSettlInstType?: number;
    SettlInstructionsData: ISettlInstructionsData;
}
