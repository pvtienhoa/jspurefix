import { ISettlInstructionsDataNoDlvyInst } from './settl_instructions_data_no_dlvy_inst';
export interface ISettlInstructionsData {
    SettlDeliveryType?: number;
    StandInstDbType?: number;
    StandInstDbName?: string;
    StandInstDbID?: string;
    NoDlvyInst?: ISettlInstructionsDataNoDlvyInst[];
}
