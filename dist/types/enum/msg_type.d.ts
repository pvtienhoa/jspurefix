export declare enum MsgType {
    Heartbeat = "0",
    TestRequest = "1",
    ResendRequest = "2",
    Reject = "3",
    SequenceReset = "4",
    Logout = "5",
    IOI = "6",
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
    XMLNonFIX = "n",
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
    RFQRequest = "AH",
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
