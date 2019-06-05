/// <reference types="node" />
import { IParties } from './set/parties';
import { IAllocationReportAckNoAllocs } from './set/allocation_report_ack_no_allocs';
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
    NoAllocs?: IAllocationReportAckNoAllocs[];
}
