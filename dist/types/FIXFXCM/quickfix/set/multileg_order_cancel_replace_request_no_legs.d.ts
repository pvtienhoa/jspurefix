import { IInstrumentLeg } from './instrument_leg';
import { ILegStipulations } from './leg_stipulations';
import { IMultilegOrderCancelReplaceRequestNoLegsNoLegAllocs } from './multileg_order_cancel_replace_request_no_legs_no_leg_allocs';
import { INestedParties } from './nested_parties';
export interface IMultilegOrderCancelReplaceRequestNoLegs {
    InstrumentLeg: IInstrumentLeg;
    LegQty?: number;
    LegSwapType?: number;
    LegStipulations: ILegStipulations;
    NoLegAllocs?: IMultilegOrderCancelReplaceRequestNoLegsNoLegAllocs[];
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    NestedParties: INestedParties;
    LegRefID?: string;
    LegPrice?: number;
    LegSettlType?: string;
    LegSettlDate?: Date;
}
