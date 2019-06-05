import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IPositionReportNoLegs } from './set/position_report_no_legs'
import { IPositionReportNoUnderlyings } from './set/position_report_no_underlyings'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

export interface IPositionReport {
  PosMaintRptID: string// 721
  PosReqID?: string// 710
  PosReqType?: number// 724
  SubscriptionRequestType?: string// 263
  TotalNumPosReports?: number// 727
  UnsolicitedIndicator?: boolean// 325
  PosReqResult: number// 728
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  Parties?: IParties
  Account: string// 1
  AcctIDSource?: number// 660
  AccountType: number// 581
  Instrument?: IInstrument
  Currency?: number// 15
  SettlPrice: number// 730
  SettlPriceType: number// 731
  PriorSettlPrice: number// 734
  NoLegs?: IPositionReportNoLegs[]
  NoUnderlyings?: IPositionReportNoUnderlyings[]
  PositionQty?: IPositionQty
  PositionAmountData?: IPositionAmountData
  RegistStatus?: string// 506
  DeliveryDate?: Date// 743
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  ListID?: string// 66
  LastRptRequested?: boolean// 912
  OrderID?: string// 37
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  TransactTime?: Date// 60
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  FXCMPosID?: string// 9041
  FXCMPosOpenTime?: Date// 9042
  FXCMUsedMargin?: number// 9038
  FXCMPosInterest?: number// 9040
  FXCMPosCommission?: number// 9053
  FXCMPosClosePNL?: string// 9052
  FXCMCloseSecondaryClOrdID?: string// 9049
  FXCMCloseClOrdID?: string// 9048
  FXCMCloseOrderID?: string// 9054
  FXCMCloseSettlPrice?: number// 9043
  FXCMPosCloseTime?: Date// 9044
  FXCMPosIDRef?: string// 9078
}
