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
const tcp_initiator_1 = require("./tcp-initiator");
function initiator(config, sessionFactory, reconnectTimeout = 0) {
    return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
        const logger = config.logFactory.logger('initiator');
        logger.info('create session');
        const initiatorSession = sessionFactory(config);
        let connecting = true;
        while (connecting) {
            try {
                yield once(config, initiatorSession);
                logger.info('session has ended');
                connecting = false;
                accept();
            }
            catch (e) {
                if (!reconnectTimeout) {
                    reject(e);
                }
                else {
                    logger.info(`waiting ${reconnectTimeout} to reconnect following error`);
                    yield delay(reconnectTimeout);
                }
            }
        }
    }));
}
exports.initiator = initiator;
function delay(p) {
    return new Promise((accept) => {
        if (!p) {
            accept();
        }
        setTimeout(() => {
            accept();
        }, p);
    });
}
function once(config, initiatorSession) {
    return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
        const logger = config.logFactory.logger('initiator');
        const initiator = new tcp_initiator_1.TcpInitiator(config);
        logger.info('connecting ...');
        const initiatorTransport = yield initiator.connect(22);
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
//# sourceMappingURL=initiator.js.map