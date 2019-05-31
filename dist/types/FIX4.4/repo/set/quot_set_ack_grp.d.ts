import { IUnderlyingInstrument } from './underlying_instrument';
import { IQuotEntryAckGrp } from './quot_entry_ack_grp';
export interface IQuotSetAckGrp {
    QuoteSetID?: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotNoQuoteEntries?: number;
    LastFragment?: boolean;
    QuotEntryAckGrp?: IQuotEntryAckGrp[];
}
