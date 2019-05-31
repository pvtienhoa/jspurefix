import { IParties } from './set/parties';
export interface IRegistrationInstructionsResponse {
    RegistID: string;
    RegistTransType: string;
    RegistRefID: string;
    ClOrdID?: string;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    RegistStatus: string;
    RegistRejReasonCode?: number;
    RegistRejReasonText?: string;
}
