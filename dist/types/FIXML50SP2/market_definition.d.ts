/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrumentScopeGrp } from './set/instrument_scope_grp';
import { IRelatedMarketSegmentGrp } from './set/related_market_segment_grp';
import { IBaseTradingRules } from './set/base_trading_rules';
import { IOrdTypeRules } from './set/ord_type_rules';
import { ITimeInForceRules } from './set/time_in_force_rules';
import { IExecInstRules } from './set/exec_inst_rules';
import { IAuctionTypeRuleGrp } from './set/auction_type_rule_grp';
import { IMarketDataFeedTypes } from './set/market_data_feed_types';
import { IMatchRules } from './set/match_rules';
import { IFlexProductEligibilityGrp } from './set/flex_product_eligibility_grp';
import { IParties } from './set/parties';
export interface IMarketDefinition {
    MarketReportID: string;
    MarketReqID?: string;
    MarketID: string;
    MarketSegmentID?: string;
    MarketSegmentDesc?: string;
    EncodedMktSegmDescLen?: number;
    EncodedMktSegmDesc?: Buffer;
    ParentMktSegmID?: string;
    MarketSegmentStatus?: number;
    MarketSegmentType?: number;
    MarketSegmentSubType?: number;
    Currency?: string;
    EffectiveBusinessDate?: Date;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    InstrumentScopeGrp?: IInstrumentScopeGrp[];
    RelatedMarketSegmentGrp?: IRelatedMarketSegmentGrp[];
    BaseTradingRules?: IBaseTradingRules;
    OrdTypeRules?: IOrdTypeRules[];
    TimeInForceRules?: ITimeInForceRules[];
    ExecInstRules?: IExecInstRules[];
    AuctionTypeRuleGrp?: IAuctionTypeRuleGrp[];
    MarketDataFeedTypes?: IMarketDataFeedTypes[];
    MatchRules?: IMatchRules[];
    FlexProductEligibilityGrp?: IFlexProductEligibilityGrp[];
    Parties?: IParties[];
}
