import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeSecurityListNoRelatedSym } from './set/derivative_security_list_no_related_sym';
export interface IDerivativeSecurityList {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    NoRelatedSym?: IDerivativeSecurityListNoRelatedSym[];
}
