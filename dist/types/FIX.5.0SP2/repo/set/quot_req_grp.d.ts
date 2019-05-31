import { IInstrument } from './instrument';
import { IFinancingDetails } from './financing_details';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IOrderQtyData } from './order_qty_data';
import { IStipulations } from './stipulations';
import { IQuotReqLegsGrp } from './quot_req_legs_grp';
import { IQuotQualGrp } from './quot_qual_grp';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
import { IParties } from './parties';
import { IRateSource } from './rate_source';
export interface IQuotReqGrp {
    Instrument: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp;
    PrevClosePx?: number;
    QuoteRequestType?: number;
    QuoteType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradeOriginationDate?: Date;
    Side?: string;
    QtyType?: number;
    OrderQtyData?: IOrderQtyData;
    MinQty?: number;
    SettlType?: string;
    SettlDate?: Date;
    SettlDate2?: Date;
    OrderQty2?: number;
    Currency?: number;
    Stipulations?: IStipulations[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    QuotReqLegsGrp?: IQuotReqLegsGrp[];
    QuotQualGrp?: IQuotQualGrp[];
    QuotePriceType?: number;
    OrdType?: string;
    ValidUntilTime?: Date;
    ExpireTime?: Date;
    TransactTime?: Date;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    PriceType?: number;
    Price?: number;
    Price2?: number;
    YieldData?: IYieldData;
    Parties?: IParties[];
    SettlCurrency?: number;
    RateSource?: IRateSource[];
}
