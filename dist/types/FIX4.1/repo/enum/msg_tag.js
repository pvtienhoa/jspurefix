"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MsgTag;
(function (MsgTag) {
    MsgTag[MsgTag["Account"] = 1] = "Account";
    MsgTag[MsgTag["AdvId"] = 2] = "AdvId";
    MsgTag[MsgTag["AdvRefID"] = 3] = "AdvRefID";
    MsgTag[MsgTag["AdvSide"] = 4] = "AdvSide";
    MsgTag[MsgTag["AdvTransType"] = 5] = "AdvTransType";
    MsgTag[MsgTag["AvgPx"] = 6] = "AvgPx";
    MsgTag[MsgTag["BeginSeqNo"] = 7] = "BeginSeqNo";
    MsgTag[MsgTag["BeginString"] = 8] = "BeginString";
    MsgTag[MsgTag["BodyLength"] = 9] = "BodyLength";
    MsgTag[MsgTag["CheckSum"] = 10] = "CheckSum";
    MsgTag[MsgTag["ClOrdID"] = 11] = "ClOrdID";
    MsgTag[MsgTag["Commission"] = 12] = "Commission";
    MsgTag[MsgTag["CommType"] = 13] = "CommType";
    MsgTag[MsgTag["CumQty"] = 14] = "CumQty";
    MsgTag[MsgTag["Currency"] = 15] = "Currency";
    MsgTag[MsgTag["EndSeqNo"] = 16] = "EndSeqNo";
    MsgTag[MsgTag["ExecID"] = 17] = "ExecID";
    MsgTag[MsgTag["ExecInst"] = 18] = "ExecInst";
    MsgTag[MsgTag["ExecRefID"] = 19] = "ExecRefID";
    MsgTag[MsgTag["ExecTransType"] = 20] = "ExecTransType";
    MsgTag[MsgTag["HandlInst"] = 21] = "HandlInst";
    MsgTag[MsgTag["IDSource"] = 22] = "IDSource";
    MsgTag[MsgTag["IOIid"] = 23] = "IOIid";
    MsgTag[MsgTag["IOIOthSvc"] = 24] = "IOIOthSvc";
    MsgTag[MsgTag["IOIQltyInd"] = 25] = "IOIQltyInd";
    MsgTag[MsgTag["IOIRefID"] = 26] = "IOIRefID";
    MsgTag[MsgTag["IOIShares"] = 27] = "IOIShares";
    MsgTag[MsgTag["IOITransType"] = 28] = "IOITransType";
    MsgTag[MsgTag["LastCapacity"] = 29] = "LastCapacity";
    MsgTag[MsgTag["LastMkt"] = 30] = "LastMkt";
    MsgTag[MsgTag["LastPx"] = 31] = "LastPx";
    MsgTag[MsgTag["LastShares"] = 32] = "LastShares";
    MsgTag[MsgTag["LinesOfText"] = 33] = "LinesOfText";
    MsgTag[MsgTag["MsgSeqNum"] = 34] = "MsgSeqNum";
    MsgTag[MsgTag["MsgType"] = 35] = "MsgType";
    MsgTag[MsgTag["NewSeqNo"] = 36] = "NewSeqNo";
    MsgTag[MsgTag["OrderID"] = 37] = "OrderID";
    MsgTag[MsgTag["OrderQty"] = 38] = "OrderQty";
    MsgTag[MsgTag["OrdStatus"] = 39] = "OrdStatus";
    MsgTag[MsgTag["OrdType"] = 40] = "OrdType";
    MsgTag[MsgTag["OrigClOrdID"] = 41] = "OrigClOrdID";
    MsgTag[MsgTag["OrigTime"] = 42] = "OrigTime";
    MsgTag[MsgTag["PossDupFlag"] = 43] = "PossDupFlag";
    MsgTag[MsgTag["Price"] = 44] = "Price";
    MsgTag[MsgTag["RefSeqNum"] = 45] = "RefSeqNum";
    MsgTag[MsgTag["RelatdSym"] = 46] = "RelatdSym";
    MsgTag[MsgTag["Rule80A"] = 47] = "Rule80A";
    MsgTag[MsgTag["SecurityID"] = 48] = "SecurityID";
    MsgTag[MsgTag["SenderCompID"] = 49] = "SenderCompID";
    MsgTag[MsgTag["SenderSubID"] = 50] = "SenderSubID";
    MsgTag[MsgTag["SendingTime"] = 52] = "SendingTime";
    MsgTag[MsgTag["Shares"] = 53] = "Shares";
    MsgTag[MsgTag["Side"] = 54] = "Side";
    MsgTag[MsgTag["Symbol"] = 55] = "Symbol";
    MsgTag[MsgTag["TargetCompID"] = 56] = "TargetCompID";
    MsgTag[MsgTag["TargetSubID"] = 57] = "TargetSubID";
    MsgTag[MsgTag["Text"] = 58] = "Text";
    MsgTag[MsgTag["TimeInForce"] = 59] = "TimeInForce";
    MsgTag[MsgTag["TransactTime"] = 60] = "TransactTime";
    MsgTag[MsgTag["Urgency"] = 61] = "Urgency";
    MsgTag[MsgTag["ValidUntilTime"] = 62] = "ValidUntilTime";
    MsgTag[MsgTag["SettlmntTyp"] = 63] = "SettlmntTyp";
    MsgTag[MsgTag["FutSettDate"] = 64] = "FutSettDate";
    MsgTag[MsgTag["SymbolSfx"] = 65] = "SymbolSfx";
    MsgTag[MsgTag["ListID"] = 66] = "ListID";
    MsgTag[MsgTag["ListSeqNo"] = 67] = "ListSeqNo";
    MsgTag[MsgTag["ListNoOrds"] = 68] = "ListNoOrds";
    MsgTag[MsgTag["ListExecInst"] = 69] = "ListExecInst";
    MsgTag[MsgTag["AllocID"] = 70] = "AllocID";
    MsgTag[MsgTag["AllocTransType"] = 71] = "AllocTransType";
    MsgTag[MsgTag["RefAllocID"] = 72] = "RefAllocID";
    MsgTag[MsgTag["NoOrders"] = 73] = "NoOrders";
    MsgTag[MsgTag["AvgPrxPrecision"] = 74] = "AvgPrxPrecision";
    MsgTag[MsgTag["TradeDate"] = 75] = "TradeDate";
    MsgTag[MsgTag["ExecBroker"] = 76] = "ExecBroker";
    MsgTag[MsgTag["OpenClose"] = 77] = "OpenClose";
    MsgTag[MsgTag["NoAllocs"] = 78] = "NoAllocs";
    MsgTag[MsgTag["AllocAccount"] = 79] = "AllocAccount";
    MsgTag[MsgTag["AllocShares"] = 80] = "AllocShares";
    MsgTag[MsgTag["ProcessCode"] = 81] = "ProcessCode";
    MsgTag[MsgTag["NoRpts"] = 82] = "NoRpts";
    MsgTag[MsgTag["RptSeq"] = 83] = "RptSeq";
    MsgTag[MsgTag["CxlQty"] = 84] = "CxlQty";
    MsgTag[MsgTag["AllocStatus"] = 87] = "AllocStatus";
    MsgTag[MsgTag["AllocRejCode"] = 88] = "AllocRejCode";
    MsgTag[MsgTag["Signature"] = 89] = "Signature";
    MsgTag[MsgTag["SecureDataLen"] = 90] = "SecureDataLen";
    MsgTag[MsgTag["SecureData"] = 91] = "SecureData";
    MsgTag[MsgTag["BrokerOfCredit"] = 92] = "BrokerOfCredit";
    MsgTag[MsgTag["SignatureLength"] = 93] = "SignatureLength";
    MsgTag[MsgTag["EmailType"] = 94] = "EmailType";
    MsgTag[MsgTag["RawDataLength"] = 95] = "RawDataLength";
    MsgTag[MsgTag["RawData"] = 96] = "RawData";
    MsgTag[MsgTag["PossResend"] = 97] = "PossResend";
    MsgTag[MsgTag["EncryptMethod"] = 98] = "EncryptMethod";
    MsgTag[MsgTag["StopPx"] = 99] = "StopPx";
    MsgTag[MsgTag["ExDestination"] = 100] = "ExDestination";
    MsgTag[MsgTag["CxlRejReason"] = 102] = "CxlRejReason";
    MsgTag[MsgTag["OrdRejReason"] = 103] = "OrdRejReason";
    MsgTag[MsgTag["IOIQualifier"] = 104] = "IOIQualifier";
    MsgTag[MsgTag["WaveNo"] = 105] = "WaveNo";
    MsgTag[MsgTag["Issuer"] = 106] = "Issuer";
    MsgTag[MsgTag["SecurityDesc"] = 107] = "SecurityDesc";
    MsgTag[MsgTag["HeartBtInt"] = 108] = "HeartBtInt";
    MsgTag[MsgTag["ClientID"] = 109] = "ClientID";
    MsgTag[MsgTag["MinQty"] = 110] = "MinQty";
    MsgTag[MsgTag["MaxFloor"] = 111] = "MaxFloor";
    MsgTag[MsgTag["TestReqID"] = 112] = "TestReqID";
    MsgTag[MsgTag["ReportToExch"] = 113] = "ReportToExch";
    MsgTag[MsgTag["LocateReqd"] = 114] = "LocateReqd";
    MsgTag[MsgTag["OnBehalfOfCompID"] = 115] = "OnBehalfOfCompID";
    MsgTag[MsgTag["OnBehalfOfSubID"] = 116] = "OnBehalfOfSubID";
    MsgTag[MsgTag["QuoteID"] = 117] = "QuoteID";
    MsgTag[MsgTag["NetMoney"] = 118] = "NetMoney";
    MsgTag[MsgTag["SettlCurrAmt"] = 119] = "SettlCurrAmt";
    MsgTag[MsgTag["SettlCurrency"] = 120] = "SettlCurrency";
    MsgTag[MsgTag["ForexReq"] = 121] = "ForexReq";
    MsgTag[MsgTag["OrigSendingTime"] = 122] = "OrigSendingTime";
    MsgTag[MsgTag["GapFillFlag"] = 123] = "GapFillFlag";
    MsgTag[MsgTag["NoExecs"] = 124] = "NoExecs";
    MsgTag[MsgTag["ExpireTime"] = 126] = "ExpireTime";
    MsgTag[MsgTag["DKReason"] = 127] = "DKReason";
    MsgTag[MsgTag["DeliverToCompID"] = 128] = "DeliverToCompID";
    MsgTag[MsgTag["DeliverToSubID"] = 129] = "DeliverToSubID";
    MsgTag[MsgTag["IOINaturalFlag"] = 130] = "IOINaturalFlag";
    MsgTag[MsgTag["QuoteReqID"] = 131] = "QuoteReqID";
    MsgTag[MsgTag["BidPx"] = 132] = "BidPx";
    MsgTag[MsgTag["OfferPx"] = 133] = "OfferPx";
    MsgTag[MsgTag["BidSize"] = 134] = "BidSize";
    MsgTag[MsgTag["OfferSize"] = 135] = "OfferSize";
    MsgTag[MsgTag["NoMiscFees"] = 136] = "NoMiscFees";
    MsgTag[MsgTag["MiscFeeAmt"] = 137] = "MiscFeeAmt";
    MsgTag[MsgTag["MiscFeeCurr"] = 138] = "MiscFeeCurr";
    MsgTag[MsgTag["MiscFeeType"] = 139] = "MiscFeeType";
    MsgTag[MsgTag["PrevClosePx"] = 140] = "PrevClosePx";
    MsgTag[MsgTag["ResetSeqNumFlag"] = 141] = "ResetSeqNumFlag";
    MsgTag[MsgTag["SenderLocationID"] = 142] = "SenderLocationID";
    MsgTag[MsgTag["TargetLocationID"] = 143] = "TargetLocationID";
    MsgTag[MsgTag["OnBehalfOfLocationID"] = 144] = "OnBehalfOfLocationID";
    MsgTag[MsgTag["DeliverToLocationID"] = 145] = "DeliverToLocationID";
    MsgTag[MsgTag["NoRelatedSym"] = 146] = "NoRelatedSym";
    MsgTag[MsgTag["Subject"] = 147] = "Subject";
    MsgTag[MsgTag["Headline"] = 148] = "Headline";
    MsgTag[MsgTag["URLLink"] = 149] = "URLLink";
    MsgTag[MsgTag["ExecType"] = 150] = "ExecType";
    MsgTag[MsgTag["LeavesQty"] = 151] = "LeavesQty";
    MsgTag[MsgTag["CashOrderQty"] = 152] = "CashOrderQty";
    MsgTag[MsgTag["AllocAvgPx"] = 153] = "AllocAvgPx";
    MsgTag[MsgTag["AllocNetMoney"] = 154] = "AllocNetMoney";
    MsgTag[MsgTag["SettlCurrFxRate"] = 155] = "SettlCurrFxRate";
    MsgTag[MsgTag["SettlCurrFxRateCalc"] = 156] = "SettlCurrFxRateCalc";
    MsgTag[MsgTag["NumDaysInterest"] = 157] = "NumDaysInterest";
    MsgTag[MsgTag["AccruedInterestRate"] = 158] = "AccruedInterestRate";
    MsgTag[MsgTag["AccruedInterestAmt"] = 159] = "AccruedInterestAmt";
    MsgTag[MsgTag["SettlInstMode"] = 160] = "SettlInstMode";
    MsgTag[MsgTag["AllocText"] = 161] = "AllocText";
    MsgTag[MsgTag["SettlInstID"] = 162] = "SettlInstID";
    MsgTag[MsgTag["SettlInstTransType"] = 163] = "SettlInstTransType";
    MsgTag[MsgTag["EmailThreadID"] = 164] = "EmailThreadID";
    MsgTag[MsgTag["SettlInstSource"] = 165] = "SettlInstSource";
    MsgTag[MsgTag["SettlLocation"] = 166] = "SettlLocation";
    MsgTag[MsgTag["SecurityType"] = 167] = "SecurityType";
    MsgTag[MsgTag["EffectiveTime"] = 168] = "EffectiveTime";
    MsgTag[MsgTag["StandInstDbType"] = 169] = "StandInstDbType";
    MsgTag[MsgTag["StandInstDbName"] = 170] = "StandInstDbName";
    MsgTag[MsgTag["StandInstDbID"] = 171] = "StandInstDbID";
    MsgTag[MsgTag["SettlDeliveryType"] = 172] = "SettlDeliveryType";
    MsgTag[MsgTag["SettlDepositoryCode"] = 173] = "SettlDepositoryCode";
    MsgTag[MsgTag["SettlBrkrCode"] = 174] = "SettlBrkrCode";
    MsgTag[MsgTag["SettlInstCode"] = 175] = "SettlInstCode";
    MsgTag[MsgTag["SecuritySettlAgentName"] = 176] = "SecuritySettlAgentName";
    MsgTag[MsgTag["SecuritySettlAgentCode"] = 177] = "SecuritySettlAgentCode";
    MsgTag[MsgTag["SecuritySettlAgentAcctNum"] = 178] = "SecuritySettlAgentAcctNum";
    MsgTag[MsgTag["SecuritySettlAgentAcctName"] = 179] = "SecuritySettlAgentAcctName";
    MsgTag[MsgTag["SecuritySettlAgentContactName"] = 180] = "SecuritySettlAgentContactName";
    MsgTag[MsgTag["SecuritySettlAgentContactPhone"] = 181] = "SecuritySettlAgentContactPhone";
    MsgTag[MsgTag["CashSettlAgentName"] = 182] = "CashSettlAgentName";
    MsgTag[MsgTag["CashSettlAgentCode"] = 183] = "CashSettlAgentCode";
    MsgTag[MsgTag["CashSettlAgentAcctNum"] = 184] = "CashSettlAgentAcctNum";
    MsgTag[MsgTag["CashSettlAgentAcctName"] = 185] = "CashSettlAgentAcctName";
    MsgTag[MsgTag["CashSettlAgentContactName"] = 186] = "CashSettlAgentContactName";
    MsgTag[MsgTag["CashSettlAgentContactPhone"] = 187] = "CashSettlAgentContactPhone";
    MsgTag[MsgTag["BidSpotRate"] = 188] = "BidSpotRate";
    MsgTag[MsgTag["BidForwardPoints"] = 189] = "BidForwardPoints";
    MsgTag[MsgTag["OfferSpotRate"] = 190] = "OfferSpotRate";
    MsgTag[MsgTag["OfferForwardPoints"] = 191] = "OfferForwardPoints";
    MsgTag[MsgTag["OrderQty2"] = 192] = "OrderQty2";
    MsgTag[MsgTag["FutSettDate2"] = 193] = "FutSettDate2";
    MsgTag[MsgTag["LastSpotRate"] = 194] = "LastSpotRate";
    MsgTag[MsgTag["LastForwardPoints"] = 195] = "LastForwardPoints";
    MsgTag[MsgTag["AllocLinkID"] = 196] = "AllocLinkID";
    MsgTag[MsgTag["AllocLinkType"] = 197] = "AllocLinkType";
    MsgTag[MsgTag["SecondaryOrderID"] = 198] = "SecondaryOrderID";
    MsgTag[MsgTag["NoIOIQualifiers"] = 199] = "NoIOIQualifiers";
    MsgTag[MsgTag["MaturityMonthYear"] = 200] = "MaturityMonthYear";
    MsgTag[MsgTag["PutOrCall"] = 201] = "PutOrCall";
    MsgTag[MsgTag["StrikePrice"] = 202] = "StrikePrice";
    MsgTag[MsgTag["CoveredOrUncovered"] = 203] = "CoveredOrUncovered";
    MsgTag[MsgTag["CustomerOrFirm"] = 204] = "CustomerOrFirm";
    MsgTag[MsgTag["MaturityDay"] = 205] = "MaturityDay";
    MsgTag[MsgTag["OptAttribute"] = 206] = "OptAttribute";
    MsgTag[MsgTag["SecurityExchange"] = 207] = "SecurityExchange";
    MsgTag[MsgTag["NotifyBrokerOfCredit"] = 208] = "NotifyBrokerOfCredit";
    MsgTag[MsgTag["AllocHandlInst"] = 209] = "AllocHandlInst";
    MsgTag[MsgTag["MaxShow"] = 210] = "MaxShow";
    MsgTag[MsgTag["PegDifference"] = 211] = "PegDifference";
})(MsgTag = exports.MsgTag || (exports.MsgTag = {}));
//# sourceMappingURL=msg_tag.js.map