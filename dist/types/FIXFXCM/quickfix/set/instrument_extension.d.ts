import { IInstrumentExtensionNoInstrAttrib } from './instrument_extension_no_instr_attrib';
export interface IInstrumentExtension {
    DeliveryForm?: number;
    PctAtRisk?: number;
    NoInstrAttrib?: IInstrumentExtensionNoInstrAttrib[];
}
