import { ISettlParties } from './settl_parties';
export interface ISettlInstructionsDataNoDlvyInst {
    SettlInstSource?: string;
    DlvyInstType?: string;
    SettlParties?: ISettlParties;
}
