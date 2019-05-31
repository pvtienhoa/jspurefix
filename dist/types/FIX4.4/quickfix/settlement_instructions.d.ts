/// <reference types="node" />
import { ISettlInstGrp } from './set/settl_inst_grp';
export interface ISettlementInstructions {
    SettlInstMsgID: string;
    SettlInstReqID?: string;
    SettlInstMode: string;
    SettlInstReqRejCode?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    ClOrdID?: string;
    TransactTime: Date;
    SettlInstGrp?: ISettlInstGrp;
}
