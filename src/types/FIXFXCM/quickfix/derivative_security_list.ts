import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeSecurityListNoRelatedSym } from './set/derivative_security_list_no_related_sym'

export interface IDerivativeSecurityList {
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  UnderlyingInstrument?: IUnderlyingInstrument
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  NoRelatedSym?: IDerivativeSecurityListNoRelatedSym[]
}
