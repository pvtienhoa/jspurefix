import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
export interface IIndicationOfInterestNoLegs {
    InstrumentLeg?: IInstrumentLeg;
    LegIOIQty?: string;
    LegStipulations?: ILegStipulations;
}
