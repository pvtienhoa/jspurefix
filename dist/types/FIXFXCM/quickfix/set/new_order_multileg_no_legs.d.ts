import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { INewOrderMultilegNoLegsNoLegAllocs } from './new_order_multileg_no_legs_no_leg_allocs';
import { INestedParties } from './nested_parties';
export interface INewOrderMultilegNoLegs {
    InstrumentLeg: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegStipulations: ILegStipulations;
    NoLegAllocs?: INewOrderMultilegNoLegsNoLegAllocs[];
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties: INestedParties;
    LegRefID?: string;
    LegPrice?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
}
