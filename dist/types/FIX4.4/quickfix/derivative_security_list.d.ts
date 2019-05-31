import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp';
export interface IDerivativeSecurityList {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    RelSymDerivSecGrp?: IRelSymDerivSecGrp;
}
