"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixml_1 = require("../../../transport/fixml");
const oms_factory_1 = require("./oms-factory");
const FIXML50SP2_1 = require("../../../types/FIXML50SP2");
class HttpClient extends fixml_1.FixmlSession {
    constructor(config, logoutSeconds = 45) {
        super(config);
        this.config = config;
        this.logoutSeconds = logoutSeconds;
        this.factory = new oms_factory_1.OmsFactory('TradersRUs');
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(view.toJson());
        switch (msgType) {
            case 'BizMsgRej': {
                this.logger.warning('received rejection');
                break;
            }
            case 'ExecRpt': {
                const fill = view.toObject();
                this.logger.warning(`received execution report ${fill.OrderQtyData.OrderQty}@${fill.Price}`);
                break;
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
        const logoutSeconds = this.logoutSeconds;
        const req = this.factory.createOrder('IBM', FIXML50SP2_1.Side.Buy, 10000, 100.12);
        this.send('NewOrderSingle', req);
        this.logger.info(`will logout after ${logoutSeconds}`);
        setTimeout(() => {
            this.done();
        }, 11 * 1000);
    }
    onStopped() {
        this.logger.info('stopped');
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=http-client.js.map