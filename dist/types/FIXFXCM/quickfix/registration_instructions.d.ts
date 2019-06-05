import { IParties } from './set/parties';
import { IRegistrationInstructionsNoRegistDtls } from './set/registration_instructions_no_regist_dtls';
import { IRegistrationInstructionsNoDistribInsts } from './set/registration_instructions_no_distrib_insts';
export interface IRegistrationInstructions {
    RegistID: string;
    RegistTransType: string;
    RegistRefID: string;
    ClOrdID?: string;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    RegistAcctType?: string;
    TaxAdvantageType?: number;
    OwnershipType?: string;
    NoRegistDtls?: IRegistrationInstructionsNoRegistDtls[];
    NoDistribInsts?: IRegistrationInstructionsNoDistribInsts[];
}
