import { IParties } from './set/parties';
import { IRgstDtlsGrp } from './set/rgst_dtls_grp';
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp';
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
    RgstDtlsGrp?: IRgstDtlsGrp;
    RgstDistInstGrp?: IRgstDistInstGrp;
}
