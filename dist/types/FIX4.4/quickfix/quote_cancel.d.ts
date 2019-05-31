import { IParties } from './set/parties';
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp';
export interface IQuoteCancel {
    QuoteReqID?: string;
    QuoteID: string;
    QuoteCancelType: number;
    QuoteResponseLevel?: number;
    Parties?: IParties;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    QuotCxlEntriesGrp?: IQuotCxlEntriesGrp;
}
