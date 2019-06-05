import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IRequestForPositionsAckNoLegs } from './set/request_for_positions_ack_no_legs'
import { IRequestForPositionsAckNoUnderlyings } from './set/request_for_positions_ack_no_underlyings'

export interface IRequestForPositionsAck {
  PosMaintRptID: string// 721
  PosReqID?: string// 710
  TotalNumPosReports?: number// 727
  UnsolicitedIndicator?: boolean// 325
  PosReqResult: number// 728
  PosReqStatus: number// 729
  Parties?: IParties
  Account: string// 1
  AcctIDSource?: number// 660
  AccountType: number// 581
  Instrument?: IInstrument
  Currency?: number// 15
  NoLegs?: IRequestForPositionsAckNoLegs[]
  NoUnderlyings?: IRequestForPositionsAckNoUnderlyings[]
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  FXCMRequestRejectReason?: number// 9025
  FXCMErrorDetails?: string// 9029
}
