import { IListStrikePriceNoStrikes } from './set/list_strike_price_no_strikes';
import { IListStrikePriceNoUnderlyings } from './set/list_strike_price_no_underlyings';
export interface IListStrikePrice {
    ListID: string;
    TotNoStrikes: number;
    LastFragment?: boolean;
    NoStrikes: IListStrikePriceNoStrikes[];
    NoUnderlyings?: IListStrikePriceNoUnderlyings[];
}
