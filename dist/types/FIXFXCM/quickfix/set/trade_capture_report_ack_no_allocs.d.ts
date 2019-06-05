import { INestedParties2 } from './nested_parties_2';
export interface ITradeCaptureReportAckNoAllocs {
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocSettlCurrency?: number;
    IndividualAllocID?: string;
    NestedParties2?: INestedParties2;
    AllocQty?: number;
}
