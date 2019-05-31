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
const http_1 = require("../http");
function acceptor(config, sessionFactory) {
    return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
        const logger = config.logFactory.logger('acceptor');
        logger.info('starting.');
        const acceptor = new http_1.HttpAcceptor(config);
        acceptor.on('transport', (t) => {
            logger.info('creates new transport.');
            const acceptorSession = sessionFactory(config);
            acceptorSession.run(t).then(() => {
                logger.info('ends');
                acceptor.close(() => {
                    logger.info('acceptor closed.');
                    accept();
                });
            }).catch((e) => {
                logger.error(e);
                logger.info(e.stack);
                reject(e);
            });
        });
        acceptor.listen();
    }));
}
exports.acceptor = acceptor;
//# sourceMappingURL=acceptor.js.map