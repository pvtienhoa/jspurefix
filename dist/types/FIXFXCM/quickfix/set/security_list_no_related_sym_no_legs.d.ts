import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data';
export interface ISecurityListNoRelatedSymNoLegs {
    InstrumentLeg?: IInstrumentLeg;
    LegSwapType?: number;
    LegSettlType?: string;
    LegStipulations?: ILegStipulations;
    LegBenchmarkCurveData?: ILegBenchmarkCurveData;
}
