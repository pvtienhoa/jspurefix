import { ISettlementInstructionsNoSettlInst } from './set/settlement_instructions_no_settl_inst'

export interface ISettlementInstructions {
  SettlInstMsgID: string// 777
  SettlInstReqID?: string// 791
  SettlInstMode: string// 160
  SettlInstReqRejCode?: number// 792
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SettlInstSource?: string// 165
  ClOrdID?: string// 11
  TransactTime: Date// 60
  NoSettlInst?: ISettlementInstructionsNoSettlInst[]
}
