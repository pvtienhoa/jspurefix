export declare enum AdvSide {
    Buy = "B",
    Sell = "S",
    Cross = "X",
    Trade = "T"
}
export declare enum AdvTransType {
    New = "N",
    Cancel = "C",
    Replace = "R"
}
export declare enum CommType {
    PerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscount = "4",
    PercentageWaivedEnhancedUnits = "5",
    PointsPerBondOrContract = "6"
}
export declare enum ExecInst {
    StayOnOfferSide = "0",
    NotHeld = "1",
    Work = "2",
    GoAlong = "3",
    OverTheDay = "4",
    Held = "5",
    ParticipateDoNotInitiate = "6",
    StrictScale = "7",
    TryToScale = "8",
    StayOnBidSide = "9",
    NoCross = "A",
    OkToCross = "B",
    CallFirst = "C",
    PercentOfVolume = "D",
    DoNotIncrease = "E",
    DoNotReduce = "F",
    AllOrNone = "G",
    ReinstateOnSystemFailure = "H",
    InstitutionsOnly = "I",
    ReinstateOnTradingHalt = "J",
    CancelOnTradingHalt = "K",
    LastPeg = "L",
    MidPricePeg = "M",
    NonNegotiable = "N",
    OpeningPeg = "O",
    MarketPeg = "P",
    CancelOnSystemFailure = "Q",
    PrimaryPeg = "R",
    Suspend = "S",
    CustomerDisplayInstruction = "U",
    Netting = "V",
    PegToVwap = "W",
    TradeAlong = "X",
    TryToStop = "Y",
    CancelIfNotBest = "Z",
    TrailingStopPeg = "a",
    StrictLimit = "b",
    IgnorePriceValidityChecks = "c",
    PegToLimitPrice = "d",
    WorkToTargetStrategy = "e"
}
export declare enum HandlInst {
    AutomatedExecutionNoIntervention = "1",
    AutomatedExecutionInterventionOk = "2",
    ManualOrder = "3"
}
export declare enum SecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociation = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    Common = "G",
    ClearingHouse = "H",
    IsdaFpMlSpecification = "I",
    OptionPriceReportingAuthority = "J"
}
export declare enum IOIQltyInd {
    Low = "L",
    Medium = "M",
    High = "H"
}
export declare enum IOIQty {
    Small = "S",
    Medium = "M",
    Large = "L"
}
export declare enum IOITransType {
    New = "N",
    Cancel = "C",
    Replace = "R"
}
export declare enum LastCapacity {
    Agent = "1",
    CrossAsAgent = "2",
    CrossAsPrincipal = "3",
    Principal = "4"
}
export declare enum MsgType {
    Heartbeat = "0",
    TestRequest = "1",
    ResendRequest = "2",
    Reject = "3",
    SequenceReset = "4",
    Logout = "5",
    Ioi = "6",
    Advertisement = "7",
    ExecutionReport = "8",
    OrderCancelReject = "9",
    Logon = "A",
    News = "B",
    Email = "C",
    NewOrderSingle = "D",
    NewOrderList = "E",
    OrderCancelRequest = "F",
    OrderCancelReplaceRequest = "G",
    OrderStatusRequest = "H",
    AllocationInstruction = "J",
    ListCancelRequest = "K",
    ListExecute = "L",
    ListStatusRequest = "M",
    ListStatus = "N",
    AllocationInstructionAck = "P",
    DontKnowTrade = "Q",
    QuoteRequest = "R",
    Quote = "S",
    SettlementInstructions = "T",
    MarketDataRequest = "V",
    MarketDataSnapshotFullRefresh = "W",
    MarketDataIncrementalRefresh = "X",
    MarketDataRequestReject = "Y",
    QuoteCancel = "Z",
    QuoteStatusRequest = "a",
    MassQuoteAcknowledgement = "b",
    SecurityDefinitionRequest = "c",
    SecurityDefinition = "d",
    SecurityStatusRequest = "e",
    SecurityStatus = "f",
    TradingSessionStatusRequest = "g",
    TradingSessionStatus = "h",
    MassQuote = "i",
    BusinessMessageReject = "j",
    BidRequest = "k",
    BidResponse = "l",
    ListStrikePrice = "m",
    XmlNonFix = "n",
    RegistrationInstructions = "o",
    RegistrationInstructionsResponse = "p",
    OrderMassCancelRequest = "q",
    OrderMassCancelReport = "r",
    NewOrderCross = "s",
    CrossOrderCancelReplaceRequest = "t",
    CrossOrderCancelRequest = "u",
    SecurityTypeRequest = "v",
    SecurityTypes = "w",
    SecurityListRequest = "x",
    SecurityList = "y",
    DerivativeSecurityListRequest = "z",
    DerivativeSecurityList = "AA",
    NewOrderMultileg = "AB",
    MultilegOrderCancelReplace = "AC",
    TradeCaptureReportRequest = "AD",
    TradeCaptureReport = "AE",
    OrderMassStatusRequest = "AF",
    QuoteRequestReject = "AG",
    RfqRequest = "AH",
    QuoteStatusReport = "AI",
    QuoteResponse = "AJ",
    Confirmation = "AK",
    PositionMaintenanceRequest = "AL",
    PositionMaintenanceReport = "AM",
    RequestForPositions = "AN",
    RequestForPositionsAck = "AO",
    PositionReport = "AP",
    TradeCaptureReportRequestAck = "AQ",
    TradeCaptureReportAck = "AR",
    AllocationReport = "AS",
    AllocationReportAck = "AT",
    ConfirmationAck = "AU",
    SettlementInstructionRequest = "AV",
    AssignmentReport = "AW",
    CollateralRequest = "AX",
    CollateralAssignment = "AY",
    CollateralResponse = "AZ",
    CollateralReport = "BA",
    CollateralInquiry = "BB",
    NetworkCounterpartySystemStatusRequest = "BC",
    NetworkCounterpartySystemStatusResponse = "BD",
    UserRequest = "BE",
    UserResponse = "BF",
    CollateralInquiryAck = "BG",
    ConfirmationRequest = "BH"
}
export declare enum OrdStatus {
    New = "0",
    PartiallyFilled = "1",
    Filled = "2",
    DoneForDay = "3",
    Canceled = "4",
    PendingCancel = "6",
    Stopped = "7",
    Rejected = "8",
    Suspended = "9",
    PendingNew = "A",
    Calculated = "B",
    Expired = "C",
    AcceptedForBidding = "D",
    PendingReplace = "E"
}
export declare enum OrdType {
    Market = "1",
    Limit = "2",
    Stop = "3",
    StopLimit = "4",
    WithOrWithout = "6",
    LimitOrBetter = "7",
    LimitWithOrWithout = "8",
    OnBasis = "9",
    PreviouslyQuoted = "D",
    PreviouslyIndicated = "E",
    ForexSwap = "G",
    Funari = "I",
    MarketIfTouched = "J",
    MarketWithLeftOverAsLimit = "K",
    PreviousFundValuationPoint = "L",
    NextFundValuationPoint = "M",
    Pegged = "P"
}
export declare enum PossDupFlag {
    PossibleDuplicate = "Y",
    OriginalTransmission = "N"
}
export declare enum Side {
    Buy = "1",
    Sell = "2",
    BuyMinus = "3",
    SellPlus = "4",
    SellShort = "5",
    SellShortExempt = "6",
    Undisclosed = "7",
    Cross = "8",
    CrossShort = "9",
    CrossShortExempt = "A",
    AsDefined = "B",
    Opposite = "C",
    Subscribe = "D",
    Redeem = "E",
    Lend = "F",
    Borrow = "G"
}
export declare enum TimeInForce {
    Day = "0",
    GoodTillCancel = "1",
    AtTheOpening = "2",
    ImmediateOrCancel = "3",
    FillOrKill = "4",
    GoodTillCrossing = "5",
    GoodTillDate = "6",
    AtTheClose = "7"
}
export declare enum Urgency {
    Normal = "0",
    Flash = "1",
    Background = "2"
}
export declare enum SettlType {
    Regular = "0",
    Cash = "1",
    NextDay = "2",
    TPlus2 = "3",
    TPlus3 = "4",
    TPlus4 = "5",
    Future = "6",
    WhenAndIfIssued = "7",
    SellersOption = "8",
    TPlus5 = "9"
}
export declare enum AllocTransType {
    New = "0",
    Replace = "1",
    Cancel = "2"
}
export declare enum PositionEffect {
    Open = "O",
    Close = "C",
    Rolled = "R",
    Fifo = "F"
}
export declare enum ProcessCode {
    Regular = "0",
    SoftDollar = "1",
    StepIn = "2",
    StepOut = "3",
    SoftDollarStepIn = "4",
    SoftDollarStepOut = "5",
    PlanSponsor = "6"
}
export declare enum AllocStatus {
    Accepted = 0,
    BlockLevelReject = 1,
    AccountLevelReject = 2,
    Received = 3,
    Incomplete = 4,
    RejectedByIntermediary = 5
}
export declare enum AllocRejCode {
    UnknownAccount = 0,
    IncorrectQuantity = 1,
    IncorrectAveragegPrice = 2,
    UnknownExecutingBrokerMnemonic = 3,
    CommissionDifference = 4,
    UnknownOrderId = 5,
    UnknownListId = 6,
    OtherSeeText = 7,
    IncorrectAllocatedQuantity = 8,
    CalculationDifference = 9,
    UnknownOrStaleExecId = 10,
    MismatchedData = 11,
    UnknownClOrdId = 12,
    WarehouseRequestRejected = 13
}
export declare enum EmailType {
    New = "0",
    Reply = "1",
    AdminReply = "2"
}
export declare enum PossResend {
    PossibleResend = "Y",
    OriginalTransmission = "N"
}
export declare enum EncryptMethod {
    None = 0,
    Pkcs = 1,
    Des = 2,
    Pkcsdes = 3,
    Pgpdes = 4,
    Pgpdesmd5 = 5,
    Pem = 6
}
export declare enum CxlRejReason {
    TooLateToCancel = 0,
    UnknownOrder = 1,
    BrokerCredit = 2,
    OrderAlreadyInPendingStatus = 3,
    UnableToProcessOrderMassCancelRequest = 4,
    OrigOrdModTime = 5,
    DuplicateClOrdId = 6,
    Other = 99
}
export declare enum OrdRejReason {
    BrokerCredit = 0,
    UnknownSymbol = 1,
    ExchangeClosed = 2,
    OrderExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrder = 6,
    DuplicateOfAVerballyCommunicatedOrder = 7,
    StaleOrder = 8,
    TradeAlongRequired = 9,
    InvalidInvestorId = 10,
    UnsupportedOrderCharacteristic = 11,
    IncorrectQuantity = 13,
    IncorrectAllocatedQuantity = 14,
    UnknownAccount = 15,
    Other = 99
}
export declare enum IOIQualifier {
    AllOrNone = "A",
    MarketOnClose = "B",
    AtTheClose = "C",
    Vwap = "D",
    InTouchWith = "I",
    Limit = "L",
    MoreBehind = "M",
    AtTheOpen = "O",
    TakingAPosition = "P",
    AtTheMarket = "Q",
    ReadyToTrade = "R",
    PortfolioShown = "S",
    ThroughTheDay = "T",
    Versus = "V",
    Indication = "W",
    CrossingOpportunity = "X",
    AtTheMidpoint = "Y",
    PreOpen = "Z"
}
export declare enum ReportToExch {
    ReceiverReports = "Y",
    SenderReports = "N"
}
export declare enum LocateReqd {
    Yes = "Y",
    No = "N"
}
export declare enum ForexReq {
    ExecuteForexAfterSecurityTrade = "Y",
    DoNotExecuteForexAfterSecurityTrade = "N"
}
export declare enum GapFillFlag {
    GapFillMessage = "Y",
    SequenceReset = "N"
}
export declare enum DKReason {
    UnknownSymbol = "A",
    WrongSide = "B",
    QuantityExceedsOrder = "C",
    NoMatchingOrder = "D",
    PriceExceedsLimit = "E",
    CalculationDifference = "F",
    Other = "Z"
}
export declare enum IOINaturalFlag {
    Natural = "Y",
    NotNatural = "N"
}
export declare enum MiscFeeType {
    Regulatory = "1",
    Tax = "2",
    LocalCommission = "3",
    ExchangeFees = "4",
    Stamp = "5",
    Levy = "6",
    Other = "7",
    Markup = "8",
    ConsumptionTax = "9",
    PerTransaction = "10",
    Conversion = "11",
    Agent = "12"
}
export declare enum ResetSeqNumFlag {
    Yes = "Y",
    No = "N"
}
export declare enum ExecType {
    New = "0",
    DoneForDay = "3",
    Canceled = "4",
    Replaced = "5",
    PendingCancel = "6",
    Stopped = "7",
    Rejected = "8",
    Suspended = "9",
    PendingNew = "A",
    Calculated = "B",
    Expired = "C",
    Restated = "D",
    PendingReplace = "E",
    Trade = "F",
    TradeCorrect = "G",
    TradeCancel = "H",
    OrderStatus = "I"
}
export declare enum SettlCurrFxRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum SettlInstMode {
    StandingInstructionsProvided = "1",
    SpecificOrderForASingleAccount = "4",
    RequestReject = "5"
}
export declare enum SettlInstTransType {
    New = "N",
    Cancel = "C",
    Replace = "R",
    Restate = "T"
}
export declare enum SettlInstSource {
    BrokerCredit = "1",
    Institution = "2",
    Investor = "3"
}
export declare enum SecurityType {
    Future = "FUT",
    Option = "OPT",
    EuroSupranationalCoupons = "EUSUPRA",
    FederalAgencyCoupon = "FAC",
    FederalAgencyDiscountNote = "FADN",
    PrivateExportFunding = "PEF",
    UsdSupranationalCoupons = "SUPRA",
    CorporateBond = "CORP",
    CorporatePrivatePlacement = "CPP",
    ConvertibleBond = "CB",
    DualCurrency = "DUAL",
    EuroCorporateBond = "EUCORP",
    IndexedLinked = "XLINKD",
    StructuredNotes = "STRUCT",
    YankeeCorporateBond = "YANK",
    ForeignExchangeContract = "FOR",
    CommonStock = "CS",
    PreferredStock = "PS",
    BradyBond = "BRADY",
    EuroSovereigns = "EUSOV",
    UsTreasuryBond = "TBOND",
    InterestStripFromAnyBondOrNote = "TINT",
    TreasuryInflationProtectedSecurities = "TIPS",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    UsTreasuryNoteOld = "UST",
    UsTreasuryBillOld = "USTB",
    UsTreasuryNote = "TNOTE",
    UsTreasuryBill = "TBILL",
    Repurchase = "REPO",
    Forward = "FORWARD",
    BuySellback = "BUYSELL",
    SecuritiesLoan = "SECLOAN",
    SecuritiesPledge = "SECPLEDGE",
    TermLoan = "TERM",
    RevolverLoan = "RVLV",
    Revolver = "RVLVTRM",
    BridgeLoan = "BRIDGE",
    LetterOfCredit = "LOFC",
    SwingLineFacility = "SWING",
    DebtorInPossession = "DINP",
    Defaulted = "DEFLTED",
    Withdrawn = "WITHDRN",
    Replaced = "REPLACD",
    Matured = "MATURED",
    Amended = "AMENDED",
    Retired = "RETIRED",
    BankersAcceptance = "BA",
    BankNotes = "BN",
    BillOfExchanges = "BOX",
    CertificateOfDeposit = "CD",
    CallLoans = "CL",
    CommercialPaper = "CP",
    DepositNotes = "DN",
    EuroCertificateOfDeposit = "EUCD",
    EuroCommercialPaper = "EUCP",
    LiquidityNote = "LQN",
    MediumTermNotes = "MTN",
    Overnight = "ONITE",
    PromissoryNote = "PN",
    PlazosFijos = "PZFJ",
    ShortTermLoanNote = "STN",
    TimeDeposit = "TD",
    ExtendedCommNote = "XCN",
    YankeeCertificateOfDeposit = "YCD",
    AssetBackedSecurities = "ABS",
    Corp = "CMBS",
    CollateralizedMortgageObligation = "CMO",
    IoetteMortgage = "IET",
    MortgageBackedSecurities = "MBS",
    MortgageInterestOnly = "MIO",
    MortgagePrincipalOnly = "MPO",
    MortgagePrivatePlacement = "MPP",
    MiscellaneousPassThrough = "MPT",
    Pfandbriefe = "PFAND",
    ToBeAnnounced = "TBA",
    OtherAnticipationNotes = "AN",
    CertificateOfObligation = "COFO",
    CertificateOfParticipation = "COFP",
    GeneralObligationBonds = "GO",
    MandatoryTender = "MT",
    RevenueAnticipationNote = "RAN",
    RevenueBonds = "REV",
    SpecialAssessment = "SPCLA",
    SpecialObligation = "SPCLO",
    SpecialTax = "SPCLT",
    TaxAnticipationNote = "TAN",
    TaxAllocation = "TAXA",
    TaxExemptCommercialPaper = "TECP",
    TaxRevenueAnticipationNote = "TRAN",
    VariableRateDemandNote = "VRDN",
    Warrant = "WAR",
    MutualFund = "MF",
    MultilegInstrument = "MLEG",
    NoSecurityType = "NONE"
}
export declare enum StandInstDbType {
    Other = 0,
    Dtcsid = 1,
    ThomsonAlert = 2,
    AGlobalCustodian = 3,
    AccountNet = 4
}
export declare enum SettlDeliveryType {
    Versus = 0,
    Free = 1,
    TriParty = 2,
    HoldInCustody = 3
}
export declare enum AllocLinkType {
    FxNetting = 0,
    FxSwap = 1
}
export declare enum PutOrCall {
    Put = 0,
    Call = 1
}
export declare enum CoveredOrUncovered {
    Covered = 0,
    Uncovered = 1
}
export declare enum NotifyBrokerOfCredit {
    DetailsShouldBeCommunicated = "Y",
    DetailsShouldNotBeCommunicated = "N"
}
export declare enum AllocHandlInst {
    Match = 1,
    Forward = 2,
    ForwardAndMatch = 3
}
export declare enum RoutingType {
    TargetFirm = 1,
    TargetList = 2,
    BlockFirm = 3,
    BlockList = 4
}
export declare enum StipulationType {
    AlternativeMinimumTax = "AMT",
    AutoReinvestment = "AUTOREINV",
    BankQualified = "BANKQUAL",
    BargainConditions = "BGNCON",
    CouponRange = "COUPON",
    IsoCurrencyCode = "CURRENCY",
    CustomStart = "CUSTOMDATE",
    Geographics = "GEOG",
    ValuationDiscount = "HAIRCUT",
    Insured = "INSURED",
    IssueDate = "ISSUE",
    Issuer = "ISSUER",
    IssueSizeRange = "ISSUESIZE",
    LookbackDays = "LOOKBACK",
    ExplicitLotIdentifier = "LOT",
    LotVariance = "LOTVAR",
    MaturityYearAndMonth = "MAT",
    MaturityRange = "MATURITY",
    MaximumSubstitutions = "MAXSUBS",
    MinimumQuantity = "MINQTY",
    MinimumIncrement = "MININCR",
    MinimumDenomination = "MINDNOM",
    PaymentFrequency = "PAYFREQ",
    NumberOfPieces = "PIECES",
    PoolsMaximum = "PMAX",
    PoolsPerMillion = "PPM",
    PoolsPerLot = "PPL",
    PoolsPerTrade = "PPT",
    PriceRange = "PRICE",
    PricingFrequency = "PRICEFREQ",
    ProductionYear = "PROD",
    CallProtection = "PROTECT",
    Purpose = "PURPOSE",
    BenchmarkPriceSource = "PXSOURCE",
    RatingSourceAndRange = "RATING",
    TypeOfRedemption = "REDEMPTION",
    Restricted = "RESTRICTED",
    MarketSector = "SECTOR",
    SecurityTypeIncludedOrExcluded = "SECTYPE",
    Structure = "STRUCT",
    SubstitutionsFrequency = "SUBSFREQ",
    SubstitutionsLeft = "SUBSLEFT",
    FreeformText = "TEXT",
    TradeVariance = "TRDVAR",
    WeightedAverageCoupon = "WAC",
    WeightedAverageLifeCoupon = "WAL",
    WeightedAverageLoanAge = "WALA",
    WeightedAverageMaturity = "WAM",
    WholePool = "WHOLE",
    YieldRange = "YIELD"
}
export declare enum YieldType {
    AfterTaxYield = "AFTERTAX",
    AnnualYield = "ANNUAL",
    YieldAtIssue = "ATISSUE",
    YieldToAverageMaturity = "AVGMATURITY",
    BookYield = "BOOK",
    YieldToNextCall = "CALL",
    YieldChangeSinceClose = "CHANGE",
    ClosingYield = "CLOSE",
    CompoundYield = "COMPOUND",
    CurrentYield = "CURRENT",
    TrueGrossYield = "GROSS",
    GvntEquivalentYield = "GOVTEQUIV",
    YieldWithInflationAssumption = "INFLATION",
    InverseFloaterBondYield = "INVERSEFLOATER",
    MostRecentClosingYield = "LASTCLOSE",
    ClosingYieldMostRecentMonth = "LASTMONTH",
    ClosingYieldMostRecentQuarter = "LASTQUARTER",
    ClosingYieldMostRecentYear = "LASTYEAR",
    YieldToLongestAverageLife = "LONGAVGLIFE",
    MarkToMarketYield = "MARK",
    YieldToMaturity = "MATURITY",
    YieldToNextRefund = "NEXTREFUND",
    OpenAverageYield = "OPENAVG",
    YieldToNextPut = "PUT",
    PreviousCloseYield = "PREVCLOSE",
    ProceedsYield = "PROCEEDS",
    SemiAnnualYield = "SEMIANNUAL",
    YieldToShortestAverageLife = "SHORTAVGLIFE",
    SimpleYield = "SIMPLE",
    TaxEquivalentYield = "TAXEQUIV",
    YieldToTenderDate = "TENDER",
    TrueYield = "TRUE",
    YieldValueOf132 = "VALUE1/32",
    YieldToWorst = "WORST"
}
export declare enum TradedFlatSwitch {
    TradedFlat = "Y",
    NotTradedFlat = "N"
}
export declare enum SubscriptionRequestType {
    Snapshot = "0",
    SnapshotAndUpdates = "1",
    DisablePreviousSnapshot = "2"
}
export declare enum MDUpdateType {
    FullRefresh = 0,
    IncrementalRefresh = 1
}
export declare enum AggregatedBook {
    BookEntriesToBeAggregated = "Y",
    BookEntriesShouldNotBeAggregated = "N"
}
export declare enum MDEntryType {
    Bid = "0",
    Offer = "1",
    Trade = "2",
    IndexValue = "3",
    OpeningPrice = "4",
    ClosingPrice = "5",
    SettlementPrice = "6",
    TradingSessionHighPrice = "7",
    TradingSessionLowPrice = "8",
    TradingSessionVwapPrice = "9",
    Imbalance = "A",
    TradeVolume = "B",
    OpenInterest = "C"
}
export declare enum TickDirection {
    PlusTick = "0",
    ZeroPlusTick = "1",
    MinusTick = "2",
    ZeroMinusTick = "3"
}
export declare enum QuoteCondition {
    Open = "A",
    Closed = "B",
    ExchangeBest = "C",
    ConsolidatedBest = "D",
    Locked = "E",
    Crossed = "F",
    Depth = "G",
    FastTrading = "H",
    NonFirm = "I"
}
export declare enum TradeCondition {
    Cash = "A",
    AveragePriceTrade = "B",
    CashTrade = "C",
    NextDay = "D",
    Opening = "E",
    IntradayTradeDetail = "F",
    Rule127Trade = "G",
    Rule155Trade = "H",
    SoldLast = "I",
    NextDayTrade = "J",
    Opened = "K",
    Seller = "L",
    Sold = "M",
    StoppedStock = "N",
    ImbalanceMoreBuyers = "P",
    ImbalanceMoreSellers = "Q",
    OpeningPrice = "R"
}
export declare enum MDUpdateAction {
    New = "0",
    Change = "1",
    Delete = "2"
}
export declare enum MDReqRejReason {
    UnknownSymbol = "0",
    DuplicateMdReqId = "1",
    InsufficientBandwidth = "2",
    InsufficientPermissions = "3",
    UnsupportedSubscriptionRequestType = "4",
    UnsupportedMarketDepth = "5",
    UnsupportedMdUpdateType = "6",
    UnsupportedAggregatedBook = "7",
    UnsupportedMdEntryType = "8",
    UnsupportedTradingSessionId = "9",
    UnsupportedScope = "A",
    UnsupportedOpenCloseSettleFlag = "B",
    UnsupportedMdImplicitDelete = "C"
}
export declare enum DeleteReason {
    Cancellation = "0",
    Error = "1"
}
export declare enum OpenCloseSettlFlag {
    DailyOpen = "0",
    SessionOpen = "1",
    DeliverySettlementEntry = "2",
    ExpectedEntry = "3",
    EntryFromPreviousBusinessDay = "4",
    TheoreticalPriceValue = "5"
}
export declare enum FinancialStatus {
    Bankrupt = "1",
    PendingDelisting = "2"
}
export declare enum CorporateAction {
    ExDividend = "A",
    ExDistribution = "B",
    ExRights = "C",
    New = "D",
    ExInterest = "E"
}
export declare enum QuoteStatus {
    Accepted = 0,
    CancelForSymbol = 1,
    CanceledForSecurityType = 2,
    CanceledForUnderlying = 3,
    CanceledAll = 4,
    Rejected = 5,
    RemovedFromMarket = 6,
    Expired = 7,
    Query = 8,
    QuoteNotFound = 9,
    Pending = 10,
    Pass = 11,
    LockedMarketWarning = 12,
    CrossMarketWarning = 13,
    CanceledDueToLockMarket = 14,
    CanceledDueToCrossMarket = 15
}
export declare enum QuoteCancelType {
    CancelForOneOrMoreSecurities = 1,
    CancelForSecurityType = 2,
    CancelForUnderlyingSecurity = 3,
    CancelAllQuotes = 4
}
export declare enum QuoteRejectReason {
    UnknownSymbol = 1,
    Exchange = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownQuote = 5,
    DuplicateQuote = 6,
    InvalidBid = 7,
    InvalidPrice = 8,
    NotAuthorizedToQuoteSecurity = 9,
    Other = 99
}
export declare enum QuoteResponseLevel {
    NoAcknowledgement = 0,
    AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
    AcknowledgeEachQuoteMessage = 2
}
export declare enum QuoteRequestType {
    Manual = 1,
    Automatic = 2
}
export declare enum SecurityRequestType {
    RequestSecurityIdentityAndSpecifications = 0,
    RequestSecurityIdentityForSpecifications = 1,
    RequestListSecurityTypes = 2,
    RequestListSecurities = 3
}
export declare enum SecurityResponseType {
    AcceptAsIs = 1,
    AcceptWithRevisions = 2,
    RejectSecurityProposal = 5,
    CannotMatchSelectionCriteria = 6
}
export declare enum UnsolicitedIndicator {
    MessageIsBeingSentUnsolicited = "Y",
    MessageIsBeingSentAsAResultOfAPriorRequest = "N"
}
export declare enum SecurityTradingStatus {
    OpeningDelay = 1,
    TradingHalt = 2,
    Resume = 3,
    NoOpen = 4,
    PriceIndication = 5,
    TradingRangeIndication = 6,
    MarketImbalanceBuy = 7,
    MarketImbalanceSell = 8,
    MarketOnCloseImbalanceBuy = 9,
    MarketOnCloseImbalanceSell = 10,
    NoMarketImbalance = 12,
    NoMarketOnCloseImbalance = 13,
    ItsPreOpening = 14,
    NewPriceIndication = 15,
    TradeDisseminationTime = 16,
    ReadyToTrade = 17,
    NotAvailableForTrading = 18,
    NotTradedOnThisMarket = 19,
    UnknownOrInvalid = 20,
    PreOpen = 21,
    OpeningRotation = 22,
    FastMarket = 23
}
export declare enum HaltReason {
    OrderImbalance = "I",
    EquipmentChangeover = "X",
    NewsPending = "P",
    NewsDissemination = "D",
    OrderInflux = "E",
    AdditionalInformation = "M"
}
export declare enum InViewOfCommon {
    HaltWasDueToCommonStockBeingHalted = "Y",
    HaltWasNotRelatedToAHaltOfTheCommonStock = "N"
}
export declare enum DueToRelated {
    RelatedToSecurityHalt = "Y",
    NotRelatedToSecurityHalt = "N"
}
export declare enum Adjustment {
    Cancel = 1,
    Error = 2,
    Correction = 3
}
export declare enum TradSesMethod {
    Electronic = 1,
    OpenOutcry = 2,
    TwoParty = 3
}
export declare enum TradSesMode {
    Testing = 1,
    Simulated = 2,
    Production = 3
}
export declare enum TradSesStatus {
    Unknown = 0,
    Halted = 1,
    Open = 2,
    Closed = 3,
    PreOpen = 4,
    PreClose = 5,
    RequestRejected = 6
}
export declare enum MessageEncoding {
    Iso2022Jp = "ISO-2022-JP",
    Eucjp = "EUC-JP",
    ShiftJis = "Shift_JIS",
    Utf8 = "UTF-8"
}
export declare enum SessionRejectReason {
    InvalidTagNumber = 0,
    RequiredTagMissing = 1,
    TagNotDefinedForThisMessageType = 2,
    UndefinedTag = 3,
    TagSpecifiedWithoutAValue = 4,
    ValueIsIncorrect = 5,
    IncorrectDataFormatForValue = 6,
    DecryptionProblem = 7,
    SignatureProblem = 8,
    CompIdProblem = 9,
    SendingTimeAccuracyProblem = 10,
    InvalidMsgType = 11,
    XmlValidationError = 12,
    TagAppearsMoreThanOnce = 13,
    TagSpecifiedOutOfRequiredOrder = 14,
    RepeatingGroupFieldsOutOfOrder = 15,
    IncorrectNumInGroupCountForRepeatingGroup = 16,
    Non = 17,
    Other = 99
}
export declare enum BidRequestTransType {
    New = "N",
    Cancel = "C"
}
export declare enum SolicitedFlag {
    WasSolicited = "Y",
    WasNotSolicited = "N"
}
export declare enum ExecRestatementReason {
    GtCorporateAction = 0,
    GtRenewal = 1,
    VerbalChange = 2,
    RepricingOfOrder = 3,
    BrokerOption = 4,
    PartialDeclineOfOrderQty = 5,
    CancelOnTradingHalt = 6,
    CancelOnSystemFailure = 7,
    Market = 8,
    Canceled = 9,
    WarehouseRecap = 10,
    Other = 99
}
export declare enum BusinessRejectReason {
    Other = 0,
    UnknownId = 1,
    UnknownSecurity = 2,
    UnsupportedMessageType = 3,
    ApplicationNotAvailable = 4,
    ConditionallyRequiredFieldMissing = 5,
    NotAuthorized = 6,
    DeliverToFirmNotAvailableAtThisTime = 7
}
export declare enum MsgDirection {
    Send = "S",
    Receive = "R"
}
export declare enum DiscretionInst {
    RelatedToDisplayedPrice = "0",
    RelatedToMarketPrice = "1",
    RelatedToPrimaryPrice = "2",
    RelatedToLocalPrimaryPrice = "3",
    RelatedToMidpointPrice = "4",
    RelatedToLastTradePrice = "5",
    RelatedToVwap = "6"
}
export declare enum BidType {
    NonDisclosed = 1,
    Disclosed = 2,
    NoBiddingProcess = 3
}
export declare enum BidDescriptorType {
    Sector = 1,
    Country = 2,
    Index = 3
}
export declare enum SideValueInd {
    SideValue1 = 1,
    SideValue2 = 2
}
export declare enum LiquidityIndType {
    FiveDayMovingAverage = 1,
    TwentyDayMovingAverage = 2,
    NormalMarketSize = 3,
    Other = 4
}
export declare enum ExchangeForPhysical {
    True = "Y",
    False = "N"
}
export declare enum ProgRptReqs {
    BuySideRequests = 1,
    SellSideSends = 2,
    RealTimeExecutionReports = 3
}
export declare enum IncTaxInd {
    Net = 1,
    Gross = 2
}
export declare enum BidTradeType {
    RiskTrade = "R",
    VwapGuarantee = "G",
    Agency = "A",
    GuaranteedClose = "J"
}
export declare enum BasisPxType {
    ClosingPriceAtMorningSession = "2",
    ClosingPrice = "3",
    CurrentPrice = "4",
    Sq = "5",
    VwapThroughADay = "6",
    VwapThroughAMorningSession = "7",
    VwapThroughAnAfternoonSession = "8",
    VwapThroughADayExcept = "9",
    VwapThroughAMorningSessionExcept = "A",
    VwapThroughAnAfternoonSessionExcept = "B",
    Strike = "C",
    Open = "D",
    Others = "Z"
}
export declare enum PriceType {
    Percentage = 1,
    PerUnit = 2,
    FixedAmount = 3,
    Discount = 4,
    Premium = 5,
    Spread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePrice = 10,
    VariableCabinetTradePrice = 11
}
export declare enum GTBookingInst {
    BookOutAllTradesOnDayOfExecution = 0,
    AccumulateUntilFilledOrExpired = 1,
    AccumulateUntilVerballlyNotifiedOtherwise = 2
}
export declare enum ListStatusType {
    Ack = 1,
    Response = 2,
    Timed = 3,
    ExecStarted = 4,
    AllDone = 5,
    Alert = 6
}
export declare enum NetGrossInd {
    Net = 1,
    Gross = 2
}
export declare enum ListOrderStatus {
    InBiddingProcess = 1,
    ReceivedForExecution = 2,
    Executing = 3,
    Cancelling = 4,
    Alert = 5,
    AllDone = 6,
    Reject = 7
}
export declare enum ListExecInstType {
    Immediate = "1",
    WaitForInstruction = "2",
    SellDriven = "3",
    BuyDrivenCashTopUp = "4",
    BuyDrivenCashWithdraw = "5"
}
export declare enum CxlRejResponseTo {
    OrderCancelRequest = "1",
    OrderCancel = "2"
}
export declare enum MultiLegReportingType {
    SingleSecurity = "1",
    IndividualLegOfAMultiLegSecurity = "2",
    MultiLegSecurity = "3"
}
export declare enum PartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseForeignInvestorId = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepository = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    Bic = "B",
    GeneralIdentifier = "C",
    Proprietary = "D",
    IsoCountryCode = "E",
    SettlementEntityLocation = "F",
    Mic = "G",
    CsdParticipant = "H",
    AustralianTaxFileNumber = "A",
    IsitcAcronym = "I"
}
export declare enum PartyRole {
    ExecutingFirm = 1,
    BrokerOfCredit = 2,
    ClientId = 3,
    ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    Locate = 8,
    FundManagerClientId = 9,
    SettlementLocation = 10,
    OrderOriginationTrader = 11,
    ExecutingTrader = 12,
    OrderOriginationFirm = 13,
    GiveupClearingFirm = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    Buyer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38
}
export declare enum Product {
    Agency = 1,
    Commodity = 2,
    Corporate = 3,
    Currency = 4,
    Equity = 5,
    Government = 6,
    Index = 7,
    Loan = 8,
    Moneymarket = 9,
    Mortgage = 10,
    Municipal = 11,
    Other = 12,
    Financing = 13
}
export declare enum TestMessageIndicator {
    True = "Y",
    Fales = "N"
}
export declare enum RoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum DistribPaymentMethod {
    Crest = 1,
    Nscc = 2,
    Euroclear = 3,
    Clearstream = 4,
    Cheque = 5,
    TelegraphicTransfer = 6,
    FedWire = 7,
    DirectCredit = 8,
    AchCredit = 9,
    Bpay = 10,
    HighValueClearingSystemHvacs = 11,
    ReinvestInFund = 12
}
export declare enum CancellationRights {
    Yes = "Y",
    NoExecutionOnly = "N",
    NoWaiverAgreement = "M",
    NoInstitutional = "O"
}
export declare enum MoneyLaunderingStatus {
    ExemptBelowLimit = "1",
    ExemptMoneyType = "2",
    ExemptAuthorised = "3",
    Passed = "Y",
    NotChecked = "N"
}
export declare enum ExecPriceType {
    BidPrice = "B",
    CreationPrice = "C",
    CreationPricePlusAdjustmentPercent = "D",
    CreationPricePlusAdjustmentAmount = "E",
    OfferPrice = "O",
    OfferPriceMinusAdjustmentPercent = "P",
    OfferPriceMinusAdjustmentAmount = "Q",
    SinglePrice = "S"
}
export declare enum PaymentMethod {
    Crest = 1,
    Nscc = 2,
    Euroclear = 3,
    Clearstream = 4,
    Cheque = 5,
    TelegraphicTransfer = 6,
    FedWire = 7,
    DebitCard = 8,
    DirectDebit = 9,
    DirectCredit = 10,
    CreditCard = 11,
    AchDebit = 12,
    AchCredit = 13,
    Bpay = 14,
    HighValueClearingSystem = 15
}
export declare enum TaxAdvantageType {
    None = 0,
    MaxiIsa = 1,
    Tessa = 2,
    MiniCashIsa = 3,
    MiniStocksAndSharesIsa = 4,
    MiniInsuranceIsa = 5,
    CurrentYearPayment = 6,
    PriorYearPayment = 7,
    AssetTransfer = 8,
    EmployeePriorYear = 9,
    EmployeeCurrentYear = 10,
    EmployerPriorYear = 11,
    EmployerCurrentYear = 12,
    NonFundPrototypeIra = 13,
    NonFundQualifiedPlan = 14,
    DefinedContributionPlan = 15,
    Ira = 16,
    IraRollover = 17,
    Keogh = 18,
    ProfitSharingPlan = 19,
    Us401K = 20,
    SelfDirectedIra = 21,
    Us403B = 22,
    Us457 = 23,
    RothIraPrototype = 24,
    RothIraNonPrototype = 25,
    RothConversionIraPrototype = 26,
    RothConversionIraNonPrototype = 27,
    EducationIraPrototype = 28,
    EducationIraNonPrototype = 29
}
export declare enum FundRenewWaiv {
    Yes = "Y",
    No = "N"
}
export declare enum RegistStatus {
    Accepted = "A",
    Rejected = "R",
    Held = "H",
    Reminder = "N"
}
export declare enum RegistRejReasonCode {
    InvalidAccountType = 1,
    InvalidTaxExemptType = 2,
    InvalidOwnershipType = 3,
    NoRegDetails = 4,
    InvalidRegSeqNo = 5,
    InvalidRegDetails = 6,
    InvalidMailingDetails = 7,
    InvalidMailingInstructions = 8,
    InvalidInvestorId = 9,
    InvalidInvestorIdSource = 10,
    InvalidDateOfBirth = 11,
    InvalidCountry = 12,
    InvalidDistribInstns = 13,
    InvalidPercentage = 14,
    InvalidPaymentMethod = 15,
    InvalidAccountName = 16,
    InvalidAgentCode = 17,
    InvalidAccountNum = 18,
    Other = 99
}
export declare enum RegistTransType {
    New = "0",
    Replace = "1",
    Cancel = "2"
}
export declare enum OwnershipType {
    JointTrustees = "2",
    JointInvestors = "J",
    TenantsInCommon = "T"
}
export declare enum ContAmtType {
    CommissionAmount = 1,
    CommissionPercent = 2,
    InitialChargeAmount = 3,
    InitialChargePercent = 4,
    DiscountAmount = 5,
    DiscountPercent = 6,
    DilutionLevyAmount = 7,
    DilutionLevyPercent = 8,
    ExitChargeAmount = 9,
    ExitChargePercent = 10,
    FundBasedRenewalCommissionPercent = 11,
    ProjectedFundValue = 12,
    FundBasedRenewalCommissionOnOrder = 13,
    FundBasedRenewalCommissionOnFund = 14,
    NetSettlementAmount = 15
}
export declare enum OwnerType {
    IndividualInvestor = 1,
    PublicCompany = 2,
    PrivateCompany = 3,
    IndividualTrustee = 4,
    CompanyTrustee = 5,
    PensionPlan = 6,
    CustodianUnderGiftsToMinorsAct = 7,
    Trusts = 8,
    Fiduciaries = 9,
    NetworkingSubAccount = 10,
    NonProfitOrganization = 11,
    CorporateBody = 12,
    Nominee = 13
}
export declare enum OrderCapacity {
    Agency = "A",
    Proprietary = "G",
    Individual = "I",
    Principal = "P",
    RisklessPrincipal = "R",
    AgentForOtherMember = "W"
}
export declare enum OrderRestrictions {
    ProgramTrade = "1",
    IndexArbitrage = "2",
    NonIndexArbitrage = "3",
    CompetingMarketMaker = "4",
    ActingAsMarketMakerOrSpecialistInSecurity = "5",
    ActingAsMarketMakerOrSpecialistInUnderlying = "6",
    ForeignEntity = "7",
    ExternalMarketParticipant = "8",
    ExternalInterConnectedMarketLinkage = "9",
    RisklessArbitrage = "A"
}
export declare enum MassCancelRequestType {
    CancelOrdersForASecurity = "1",
    CancelOrdersForAnUnderlyingSecurity = "2",
    CancelOrdersForAProduct = "3",
    CancelOrdersForAcfiCode = "4",
    CancelOrdersForASecurityType = "5",
    CancelOrdersForATradingSession = "6",
    CancelAllOrders = "7"
}
export declare enum MassCancelResponse {
    CancelRequestRejected = "0",
    CancelOrdersForASecurity = "1",
    CancelOrdersForAnUnderlyingSecurity = "2",
    CancelOrdersForAProduct = "3",
    CancelOrdersForAcfiCode = "4",
    CancelOrdersForASecurityType = "5",
    CancelOrdersForATradingSession = "6",
    CancelAllOrders = "7"
}
export declare enum MassCancelRejectReason {
    MassCancelNotSupported = "0",
    InvalidOrUnknownSecurity = "1",
    InvalidOrUnkownUnderlyingSecurity = "2",
    InvalidOrUnknownProduct = "3",
    InvalidOrUnknownCfiCode = "4",
    InvalidOrUnknownSecurityType = "5",
    InvalidOrUnknownTradingSession = "6",
    Other = "99"
}
export declare enum QuoteType {
    Indicative = 0,
    Tradeable = 1,
    RestrictedTradeable = 2,
    Counter = 3
}
export declare enum CashMargin {
    Cash = "1",
    MarginOpen = "2",
    MarginClose = "3"
}
export declare enum Scope {
    LocalMarket = "1",
    National = "2",
    Global = "3"
}
export declare enum MDImplicitDelete {
    Yes = "Y",
    No = "N"
}
export declare enum CrossType {
    CrossAon = 1,
    CrossIoc = 2,
    CrossOneSide = 3,
    CrossSamePrice = 4
}
export declare enum CrossPrioritization {
    None = 0,
    BuySideIsPrioritized = 1,
    SellSideIsPrioritized = 2
}
export declare enum NoSides {
    OneSide = 1,
    BothSides = 2
}
export declare enum SecurityListRequestType {
    Symbol = 0,
    SecurityTypeAnd = 1,
    Product = 2,
    TradingSessionId = 3,
    AllSecurities = 4
}
export declare enum SecurityRequestResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoInstrumentsFound = 2,
    NotAuthorizedToRetrieveInstrumentData = 3,
    InstrumentDataTemporarilyUnavailable = 4,
    RequestForInstrumentDataNotSupported = 5
}
export declare enum MultiLegRptTypeReq {
    ReportByMulitlegSecurityOnly = 0,
    ReportByMultilegSecurityAndInstrumentLegs = 1,
    ReportByInstrumentLegsOnly = 2
}
export declare enum TradSesStatusRejReason {
    UnknownOrInvalidTradingSessionId = 1,
    Other = 99
}
export declare enum TradeRequestType {
    AllTrades = 0,
    MatchedTradesMatchingCriteria = 1,
    UnmatchedTradesThatMatchCriteria = 2,
    UnreportedTradesThatMatchCriteria = 3,
    AdvisoriesThatMatchCriteria = 4
}
export declare enum PreviouslyReported {
    PerviouslyReportedToCounterparty = "Y",
    NotReportedToCounterparty = "N"
}
export declare enum MatchStatus {
    Compared = "0",
    Uncompared = "1",
    AdvisoryOrAlert = "2"
}
export declare enum MatchType {
    ExactMatchPlus4BadgesExecTime = "A1",
    ExactMatchPlus4Badges = "A2",
    ExactMatchPlus2BadgesExecTime = "A3",
    ExactMatchPlus2Badges = "A4",
    ExactMatchPlusExecTime = "A5",
    StampedAdvisoriesOrSpecialistAccepts = "AQ",
    A1ExactMatchSummarizedQuantity = "S1",
    A2ExactMatchSummarizedQuantity = "S2",
    A3ExactMatchSummarizedQuantity = "S3",
    A4ExactMatchSummarizedQuantity = "S4",
    A5ExactMatchSummarizedQuantity = "S5",
    ExactMatchMinusBadgesTimes = "M1",
    SummarizedMatchMinusBadgesTimes = "M2",
    OcsLockedIn = "MT",
    ActAcceptedTrade = "M3",
    ActDefaultTrade = "M4",
    ActDefaultAfterM2 = "M5",
    Actm6Match = "M6"
}
export declare enum OddLot {
    TreatAsOddLot = "Y",
    TreatAsRoundLot = "N"
}
export declare enum ClearingInstruction {
    ProcessNormally = 0,
    ExcludeFromAllNetting = 1,
    BilateralNettingOnly = 2,
    ExClearing = 3,
    SpecialTrade = 4,
    MultilateralNetting = 5,
    ClearAgainstCentralCounterparty = 6,
    ExcludeFromCentralCounterparty = 7,
    ManualMode = 8,
    AutomaticPostingMode = 9,
    AutomaticGiveUpMode = 10,
    QualifiedServiceRepresentativeQsr = 11,
    CustomerTrade = 12,
    SelfClearing = 13
}
export declare enum AccountType {
    CarriedCustomerSide = 1,
    CarriedNonCustomerSide = 2,
    HouseTrader = 3,
    FloorTrader = 4,
    CarriedNonCustomerSideCrossMargined = 6,
    HouseTraderCrossMargined = 7,
    JointBackOfficeAccount = 8
}
export declare enum CustOrderCapacity {
    MemberTradingForTheirOwnAccount = 1,
    ClearingFirmTradingForItsProprietaryAccount = 2,
    MemberTradingForAnotherMember = 3,
    AllOther = 4
}
export declare enum MassStatusReqType {
    StatusForOrdersForASecurity = 1,
    StatusForOrdersForAnUnderlyingSecurity = 2,
    StatusForOrdersForAProduct = 3,
    StatusForOrdersForAcfiCode = 4,
    StatusForOrdersForASecurityType = 5,
    StatusForOrdersForATradingSession = 6,
    StatusForAllOrders = 7,
    StatusForOrdersForAPartyId = 8
}
export declare enum DayBookingInst {
    Auto = "0",
    SpeakWithOrderInitiatorBeforeBooking = "1",
    Accumulate = "2"
}
export declare enum BookingUnit {
    EachPartialExecutionIsABookableUnit = "0",
    AggregatePartialExecutionsOnThisOrder = "1",
    AggregateExecutionsForThisSymbol = "2"
}
export declare enum PreallocMethod {
    ProRata = "0",
    DoNotProRata = "1"
}
export declare enum AllocType {
    Calculated = 1,
    Preliminary = 2,
    ReadyToBook = 5,
    WarehouseInstruction = 7,
    RequestToIntermediary = 8
}
export declare enum ClearingFeeIndicator {
    FirstYearDelegate = "1",
    SecondYearDelegate = "2",
    ThirdYearDelegate = "3",
    FourthYearDelegate = "4",
    FifthYearDelegate = "5",
    SixthYearDelegate = "9",
    CboeMember = "B",
    NonMemberAndCustomer = "C",
    EquityMemberAndClearingMember = "E",
    FullAndAssociateMember = "F",
    Firms106HAnd106J = "H",
    Gim = "I",
    Lessee106FEmployees = "L",
    AllOtherOwnershipTypes = "M"
}
export declare enum WorkingIndicator {
    Working = "Y",
    NotWorking = "N"
}
export declare enum PriorityIndicator {
    PriorityUnchanged = 0,
    LostPriorityAsResultOfOrderChange = 1
}
export declare enum LegalConfirm {
    LegalConfirm = "Y",
    DoesNotConsituteALegalConfirm = "N"
}
export declare enum QuoteRequestRejectReason {
    UnknownSymbol = 1,
    Exchange = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    InvalidPrice = 5,
    NotAuthorizedToRequestQuote = 6,
    NoMatchForInquiry = 7,
    NoMarketForInstrument = 8,
    NoInventory = 9,
    Pass = 10,
    Other = 99
}
export declare enum AcctIDSource {
    Bic = 1,
    SidCode = 2,
    Tfm = 3,
    Omgeo = 4,
    DtccCode = 5,
    Other = 99
}
export declare enum ConfirmStatus {
    Received = 1,
    MismatchedAccount = 2,
    MissingSettlementInstructions = 3,
    Confirmed = 4,
    RequestRejected = 5
}
export declare enum ConfirmTransType {
    New = 0,
    Replace = 1,
    Cancel = 2
}
export declare enum DeliveryForm {
    BookEntry = 1,
    Bearer = 2
}
export declare enum LegSwapType {
    ParForPar = 1,
    ModifiedDuration = 2,
    Risk = 4,
    Proceeds = 5
}
export declare enum QuotePriceType {
    Percent = 1,
    PerShare = 2,
    FixedAmount = 3,
    Discount = 4,
    Premium = 5,
    Spread = 6,
    TedPrice = 7,
    TedYield = 8,
    YieldSpread = 9,
    Yield = 10
}
export declare enum QuoteRespType {
    Hit = 1,
    Counter = 2,
    Expired = 3,
    Cover = 4,
    DoneAway = 5,
    Pass = 6
}
export declare enum PosType {
    TransactionQuantity = "TQ",
    IntraSpreadQty = "IAS",
    InterSpreadQty = "IES",
    EndOfDayQty = "FIN",
    StartOfDayQty = "SOD",
    OptionExerciseQty = "EX",
    OptionAssignment = "AS",
    TransactionFromExercise = "TX",
    TransactionFromAssignment = "TA",
    PitTradeQty = "PIT",
    TransferTradeQty = "TRF",
    ElectronicTradeQty = "ETR",
    AllocationTradeQty = "ALC",
    AdjustmentQty = "PA",
    AsOfTradeQty = "ASF",
    DeliveryQty = "DLV",
    TotalTransactionQty = "TOT",
    CrossMarginQty = "XM",
    IntegralSplit = "SPL"
}
export declare enum PosQtyStatus {
    Submitted = 0,
    Accepted = 1,
    Rejected = 2
}
export declare enum PosAmtType {
    FinalMarkToMarketAmount = "FMTM",
    IncrementalMarkToMarketAmount = "IMTM",
    TradeVariationAmount = "TVAR",
    StartOfDayMarkToMarketAmount = "SMTM",
    PremiumAmount = "PREM",
    CashResidualAmount = "CRES",
    CashAmount = "CASH",
    ValueAdjustedAmount = "VADJ"
}
export declare enum PosTransType {
    Exercise = 1,
    DoNotExercise = 2,
    PositionAdjustment = 3,
    PositionChangeSubmission = 4,
    Pledge = 5
}
export declare enum PosMaintAction {
    New = 1,
    Replace = 2,
    Cancel = 3
}
export declare enum SettlSessID {
    Intraday = "ITD",
    RegularTradingHours = "RTH",
    ElectronicTradingHours = "ETH"
}
export declare enum AdjustmentType {
    ProcessRequestAsMarginDisposition = 0,
    DeltaPlus = 1,
    DeltaMinus = 2,
    Final = 3
}
export declare enum PosMaintStatus {
    Accepted = 0,
    AcceptedWithWarnings = 1,
    Rejected = 2,
    Completed = 3,
    CompletedWithWarnings = 4
}
export declare enum PosMaintResult {
    SuccessfulCompletion = 0,
    Rejected = 1,
    Other = 99
}
export declare enum PosReqType {
    Positions = 0,
    Trades = 1,
    Exercises = 2,
    Assignments = 3
}
export declare enum ResponseTransportType {
    Inband = 0,
    OutOfBand = 1
}
export declare enum PosReqResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoPositionsFoundThatMatchCriteria = 2,
    NotAuthorizedToRequestPositions = 3,
    RequestForPositionNotSupported = 4,
    Other = 99
}
export declare enum PosReqStatus {
    Completed = 0,
    CompletedWithWarnings = 1,
    Rejected = 2
}
export declare enum SettlPriceType {
    Final = 1,
    Theoretical = 2
}
export declare enum AssignmentMethod {
    Random = "R",
    ProRata = "P"
}
export declare enum ExerciseMethod {
    Automatic = "A",
    Manual = "M"
}
export declare enum TradeRequestResult {
    Successful = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidTypeOfTradeRequested = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    TradeRequestTypeNotSupported = 8,
    NotAuthorized = 9,
    Other = 99
}
export declare enum TradeRequestStatus {
    Accepted = 0,
    Completed = 1,
    Rejected = 2
}
export declare enum TradeReportRejectReason {
    Successful = 0,
    InvalidPartyOnformation = 1,
    UnknownInstrument = 2,
    UnauthorizedToReportTrades = 3,
    InvalidTradeType = 4,
    Other = 99
}
export declare enum SideMultiLegReportingType {
    SingleSecurity = 1,
    IndividualLegOfAMultilegSecurity = 2,
    MultilegSecurity = 3
}
export declare enum TrdRegTimestampType {
    ExecutionTime = 1,
    TimeIn = 2,
    TimeOut = 3,
    BrokerReceipt = 4,
    BrokerExecution = 5
}
export declare enum ConfirmType {
    Status = 1,
    Confirmation = 2,
    ConfirmationRequestRejected = 3
}
export declare enum ConfirmRejReason {
    MismatchedAccount = 1,
    MissingSettlementInstructions = 2,
    Other = 99
}
export declare enum BookingType {
    RegularBooking = 0,
    Cfd = 1,
    TotalReturnSwap = 2
}
export declare enum AllocSettlInstType {
    UseDefaultInstructions = 0,
    DeriveFromParametersProvided = 1,
    FullDetailsProvided = 2,
    SsidbiDsProvided = 3,
    PhoneForInstructions = 4
}
export declare enum DlvyInstType {
    Securities = "S",
    Cash = "C"
}
export declare enum TerminationType {
    Overnight = 1,
    Term = 2,
    Flexible = 3,
    Open = 4
}
export declare enum SettlInstReqRejCode {
    UnableToProcessRequest = 0,
    UnknownAccount = 1,
    NoMatchingSettlementInstructionsFound = 2,
    Other = 99
}
export declare enum AllocReportType {
    SellsideCalculatedUsingPreliminary = 3,
    SellsideCalculatedWithoutPreliminary = 4,
    WarehouseRecap = 5,
    RequestToIntermediary = 8
}
export declare enum AllocCancReplaceReason {
    OriginalDetailsIncomplete = 1,
    ChangeInUnderlyingOrderDetails = 2,
    Other = 99
}
export declare enum AllocAccountType {
    CarriedCustomerSide = 1,
    CarriedNonCustomerSide = 2,
    HouseTrader = 3,
    FloorTrader = 4,
    CarriedNonCustomerSideCrossMargined = 6,
    HouseTraderCrossMargined = 7,
    JointBackOfficeAccount = 8
}
export declare enum PartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumber = 10,
    RegistrationNumber = 11,
    RegisteredAddressForConfirmation = 12,
    RegulatoryStatus = 13,
    RegistrationName = 14,
    CashAccountNumber = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26
}
export declare enum AllocIntermedReqType {
    PendingAccept = 1,
    PendingRelease = 2,
    PendingReversal = 3,
    Accept = 4,
    BlockLevelReject = 5,
    AccountLevelReject = 6
}
export declare enum ApplQueueResolution {
    NoActionTaken = 0,
    QueueFlushed = 1,
    OverlayLast = 2,
    EndSession = 3
}
export declare enum ApplQueueAction {
    NoActionTaken = 0,
    QueueFlushed = 1,
    OverlayLast = 2,
    EndSession = 3
}
export declare enum AvgPxIndicator {
    NoAveragePricing = 0,
    Trade = 1,
    LastTrade = 2
}
export declare enum TradeAllocIndicator {
    AllocationNotRequired = 0,
    AllocationRequired = 1,
    UseAllocationProvidedWithTheTrade = 2
}
export declare enum ExpirationCycle {
    ExpireOnTradingSessionClose = 0,
    ExpireOnTradingSessionOpen = 1
}
export declare enum TrdType {
    RegularTrade = 0,
    BlockTrade = 1,
    Efp = 2,
    Transfer = 3,
    LateTrade = 4,
    TTrade = 5,
    WeightedAveragePriceTrade = 6,
    BunchedTrade = 7,
    LateBunchedTrade = 8,
    PriorReferencePriceTrade = 9,
    AfterHoursTrade = 10
}
export declare enum PegMoveType {
    Floating = 0,
    Fixed = 1
}
export declare enum PegOffsetType {
    Price = 0,
    BasisPoints = 1,
    Ticks = 2,
    PriceTier = 3
}
export declare enum PegLimitType {
    OrBetter = 0,
    Strict = 1,
    OrWorse = 2
}
export declare enum PegRoundDirection {
    MoreAggressive = 1,
    MorePassive = 2
}
export declare enum PegScope {
    Local = 1,
    National = 2,
    Global = 3,
    NationalExcludingLocal = 4
}
export declare enum DiscretionMoveType {
    Floating = 0,
    Fixed = 1
}
export declare enum DiscretionOffsetType {
    Price = 0,
    BasisPoints = 1,
    Ticks = 2,
    PriceTier = 3
}
export declare enum DiscretionLimitType {
    OrBetter = 0,
    Strict = 1,
    OrWorse = 2
}
export declare enum DiscretionRoundDirection {
    MoreAggressive = 1,
    MorePassive = 2
}
export declare enum DiscretionScope {
    Local = 1,
    National = 2,
    Global = 3,
    NationalExcludingLocal = 4
}
export declare enum TargetStrategy {
    Vwap = 1,
    Participate = 2,
    MininizeMarketImpact = 3
}
export declare enum LastLiquidityInd {
    AddedLiquidity = 1,
    RemovedLiquidity = 2,
    LiquidityRoutedOut = 3
}
export declare enum PublishTrdIndicator {
    ReportTrade = "Y",
    DoNotReportTrade = "N"
}
export declare enum ShortSaleReason {
    DealerSoldShort = 0,
    DealerSoldShortExempt = 1,
    SellingCustomerSoldShort = 2,
    SellingCustomerSoldShortExempt = 3,
    QualifiedServiceRepresentative = 4,
    QsrOrAguContraSideSoldShortExempt = 5
}
export declare enum QtyType {
    Units = 0,
    Contracts = 1
}
export declare enum TradeReportType {
    Submit = 0,
    Alleged = 1,
    Accept = 2,
    Decline = 3,
    Addendum = 4,
    No = 5,
    TradeReportCancel = 6,
    LockedIn = 7
}
export declare enum AllocNoOrdersType {
    NotSpecified = 0,
    ExplicitListProvided = 1
}
export declare enum EventType {
    Put = 1,
    Call = 2,
    Tender = 3,
    SinkingFundCall = 4,
    Other = 99
}
export declare enum InstrAttribType {
    Flat = 1,
    ZeroCoupon = 2,
    InterestBearing = 3,
    NoPeriodicPayments = 4,
    VariableRate = 5,
    LessFeeForPut = 6,
    SteppedCoupon = 7,
    CouponPeriod = 8,
    When = 9,
    OriginalIssueDiscount = 10,
    Callable = 11,
    EscrowedToMaturity = 12,
    EscrowedToRedemptionDate = 13,
    PreRefunded = 14,
    InDefault = 15,
    Unrated = 16,
    Taxable = 17,
    Indexed = 18,
    SubjectToAlternativeMinimumTax = 19,
    OriginalIssueDiscountPrice = 20,
    CallableBelowMaturityValue = 21,
    CallableWithoutNotice = 22,
    Text = 99
}
export declare enum CPProgram {
    Program3A3 = 1,
    Program42 = 2,
    Other = 99
}
export declare enum MiscFeeBasis {
    Absolute = 0,
    PerUnit = 1,
    Percentage = 2
}
export declare enum LastFragment {
    LastMessage = "Y",
    NotLastMessage = "N"
}
export declare enum CollAsgnReason {
    Initial = 0,
    Scheduled = 1,
    TimeWarning = 2,
    MarginDeficiency = 3,
    MarginExcess = 4,
    ForwardCollateralDemand = 5,
    EventOfDefault = 6,
    AdverseTaxEvent = 7
}
export declare enum CollInquiryQualifier {
    TradeDate = 0,
    GcInstrument = 1,
    CollateralInstrument = 2,
    SubstitutionEligible = 3,
    NotAssigned = 4,
    PartiallyAssigned = 5,
    FullyAssigned = 6,
    OutstandingTrades = 7
}
export declare enum CollAsgnTransType {
    New = 0,
    Replace = 1,
    Cancel = 2,
    Release = 3,
    Reverse = 4
}
export declare enum CollAsgnRespType {
    Received = 0,
    Accepted = 1,
    Declined = 2,
    Rejected = 3
}
export declare enum CollAsgnRejectReason {
    UnknownDeal = 0,
    UnknownOrInvalidInstrument = 1,
    UnauthorizedTransaction = 2,
    InsufficientCollateral = 3,
    InvalidTypeOfCollateral = 4,
    ExcessiveSubstitution = 5,
    Other = 99
}
export declare enum CollStatus {
    Unassigned = 0,
    PartiallyAssigned = 1,
    AssignmentProposed = 2,
    Assigned = 3,
    Challenged = 4
}
export declare enum DeliveryType {
    VersusPayment = 0,
    Free = 1,
    TriParty = 2,
    HoldInCustody = 3
}
export declare enum UserRequestType {
    LogOnUser = 1,
    LogOffUser = 2,
    ChangePasswordForUser = 3,
    RequestIndividualUserStatus = 4
}
export declare enum UserStatus {
    LoggedIn = 1,
    NotLoggedIn = 2,
    UserNotRecognised = 3,
    PasswordIncorrect = 4,
    PasswordChanged = 5,
    Other = 6
}
export declare enum StatusValue {
    Connected = 1,
    NotConnectedUnexpected = 2,
    NotConnectedExpected = 3,
    InProcess = 4
}
export declare enum NetworkRequestType {
    Snapshot = 1,
    Subscribe = 2,
    StopSubscribing = 4,
    LevelOfDetail = 8
}
export declare enum NetworkStatusResponseType {
    Full = 1,
    IncrementalUpdate = 2
}
export declare enum TrdRptStatus {
    Accepted = 0,
    Rejected = 1
}
export declare enum AffirmStatus {
    Received = 1,
    ConfirmRejected = 2,
    Affirmed = 3
}
export declare enum CollAction {
    Retain = 0,
    Add = 1,
    Remove = 2
}
export declare enum CollInquiryStatus {
    Accepted = 0,
    AcceptedWithWarnings = 1,
    Completed = 2,
    CompletedWithWarnings = 3,
    Rejected = 4
}
export declare enum CollInquiryResult {
    Successful = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidOrUnknownCollateralType = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    NoCollateralFoundForTheTradeSpecified = 6,
    NoCollateralFoundForTheOrderSpecified = 7,
    CollateralInquiryTypeNotSupported = 8,
    UnauthorizedForCollateralInquiry = 9,
    Other = 99
}
