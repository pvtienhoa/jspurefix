import { ICrossOrderCancelRequestNoSides } from './set/cross_order_cancel_request_no_sides'
import { IInstrument } from './set/instrument'
import { ICrossOrderCancelRequestNoUnderlyings } from './set/cross_order_cancel_request_no_underlyings'
import { ICrossOrderCancelRequestNoLegs } from './set/cross_order_cancel_request_no_legs'

export interface ICrossOrderCancelRequest {
  OrderID?: string// 37
  CrossID: string// 548
  OrigCrossID: string// 551
  CrossType: number// 549
  CrossPrioritization: number// 550
  NoSides: ICrossOrderCancelRequestNoSides[]
  Instrument?: IInstrument
  NoUnderlyings?: ICrossOrderCancelRequestNoUnderlyings[]
  NoLegs?: ICrossOrderCancelRequestNoLegs[]
  TransactTime: Date// 60
}
