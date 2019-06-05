import { IUnderlyingInstrument } from './underlying_instrument';
export interface IPositionReportNoUnderlyings {
    UnderlyingInstrument?: IUnderlyingInstrument;
    UnderlyingSettlPrice: number;
    UnderlyingSettlPriceType: number;
}
