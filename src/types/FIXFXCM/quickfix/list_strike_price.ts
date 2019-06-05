import { IListStrikePriceNoStrikes } from './set/list_strike_price_no_strikes'
import { IListStrikePriceNoUnderlyings } from './set/list_strike_price_no_underlyings'

export interface IListStrikePrice {
  ListID: string// 66
  TotNoStrikes: number// 422
  LastFragment?: boolean// 893
  NoStrikes: IListStrikePriceNoStrikes[]
  NoUnderlyings?: IListStrikePriceNoUnderlyings[]
}
