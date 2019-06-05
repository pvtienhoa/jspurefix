import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IOrderStatusRequestNoUnderlyings } from './set/order_status_request_no_underlyings'

export interface IOrderStatusRequest {
  OrderID?: string// 37
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  Parties?: IParties
  OrdStatusReqID?: string// 790
  Account?: string// 1
  AcctIDSource?: number// 660
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  NoUnderlyings?: IOrderStatusRequestNoUnderlyings[]
  Side?: string// 54
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
