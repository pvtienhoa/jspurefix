"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("../../../transport");
const enum_1 = require("../../../types/enum");
const collections_1 = require("../../../collections");
const trade_factory_1 = require("./trade-factory");
class TradeCaptureClient extends transport_1.AsciiSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.logReceivedMsgs = true;
        this.reports = new collections_1.Dictionary();
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}:TradeCaptureClient`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(`${view.toJson()}`);
        switch (msgType) {
            case enum_1.MsgType.TradeCaptureReport: {
                const tc = view.toObject();
                this.reports.addUpdate(tc.TradeReportID, tc);
                this.logger.info(`[reports: ${this.reports.count()}] received tc ExecID = ${tc.ExecID} TradeReportID  = ${tc.TradeReportID} Symbol = ${tc.Instrument.Symbol} ${tc.LastQty} @ ${tc.LastPx}`);
                break;
            }
            case enum_1.MsgType.TradeCaptureReportRequestAck: {
                const tc = view.toObject();
                this.logger.info(`received tcr ack ${tc.TradeRequestID} ${tc.TradeRequestStatus}`);
                break;
            }
        }
    }
    onStopped() {
        this.logger.info('stopped');
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(transport_1.AsciiSession.asPiped(txt));
    }
    onReady(view) {
        this.logger.info('ready');
        const tcr = trade_factory_1.TradeFactory.tradeCaptureReportRequest('all-trades', new Date());
        this.send(enum_1.MsgType.TradeCaptureReportRequest, tcr);
        const logoutSeconds = 32;
        this.logger.info(`will logout after ${logoutSeconds}`);
        setTimeout(() => {
            this.done();
        }, logoutSeconds * 1000);
    }
    onLogon(view, user, password) {
        return true;
    }
}
exports.TradeCaptureClient = TradeCaptureClient;
//# sourceMappingURL=trade-capture-client.js.map