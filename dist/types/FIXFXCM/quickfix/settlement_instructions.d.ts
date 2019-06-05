/// <reference types="node" />
import { ISettlementInstructionsNoSettlInst } from './set/settlement_instructions_no_settl_inst';
export interface ISettlementInstructions {
    SettlInstMsgID: string;
    SettlInstReqID?: string;
    SettlInstMode: string;
    SettlInstReqRejCode?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    SettlInstSource?: string;
    ClOrdID?: string;
    TransactTime: Date;
    NoSettlInst?: ISettlementInstructionsNoSettlInst[];
}
