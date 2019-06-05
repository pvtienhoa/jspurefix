"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixml_1 = require("../../../transport/fixml");
const oms_factory_1 = require("./oms-factory");
class HttpServer extends fixml_1.FixmlSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.factory = new oms_factory_1.OmsFactory('server');
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(view.toJson());
        switch (msgType) {
            case 'Order': {
                const order = view.toObject();
                this.logger.info(`received order id ${order.ClOrdID}`);
                const fill = this.factory.fillOrder(order);
                this.send('ExecutionReport', fill);
            }
        }
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onLogon(view, user, password) {
        return true;
    }
    onReady(view) {
        this.logger.info('onReady');
    }
    onStopped() {
        this.logger.info('stopped');
    }
}
exports.HttpServer = HttpServer;
//# sourceMappingURL=http-server.js.map