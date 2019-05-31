"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_transport_1 = require("../msg-transport");
const duplex_1 = require("../duplex");
function httpInitiator(config, sessionFactory) {
    const initiatorSession = sessionFactory(config);
    return once(config, initiatorSession);
}
exports.httpInitiator = httpInitiator;
function once(config, initiatorSession) {
    return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
        const logger = config.logFactory.logger('initiator');
        const adapter = config.description.application.http.adapter;
        if (!adapter) {
            reject('http initiator needs config.description.application.http.adapter');
        }
        logger.info('connecting ...');
        const initiatorTransport = new msg_transport_1.MsgTransport(0, config, new duplex_1.HttpDuplex(adapter));
        logger.info('... connected, run session');
        initiatorSession.run(initiatorTransport).then(() => {
            logger.info('ends');
            accept();
        }).catch((e) => {
            logger.error(e);
            reject(e);
        });
    }));
}
//# sourceMappingURL=http-initiator.js.map