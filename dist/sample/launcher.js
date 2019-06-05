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
const path = require("path");
const config_1 = require("../config");
const transport_1 = require("../transport");
const root = '../../';
const logFactory = new config_1.JsFixWinstonLogFactory(config_1.WinstonLogger.consoleOptions('info'));
class Launcher {
    constructor(initiatorConfig, acceptorConfig) {
        this.initiatorConfig = initiatorConfig;
        this.acceptorConfig = acceptorConfig;
        this.logger = logFactory.logger('launcher');
    }
    run() {
        return new Promise((accept, reject) => {
            const logger = this.logger;
            logger.info('launching ..');
            this.setup().then(() => {
                logger.info('.. done');
                accept();
            }).catch((e) => {
                logger.error(e);
                reject(e);
            });
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientDescription = require(path.join(root, this.initiatorConfig));
            const serverDescription = require(path.join(root, this.acceptorConfig));
            this.logger.info('launching ..');
            const clientConfig = yield transport_1.makeConfig(clientDescription, logFactory, new transport_1.SessionMsgFactory(clientDescription));
            const serverConfig = yield transport_1.makeConfig(serverDescription, logFactory, new transport_1.SessionMsgFactory(serverDescription));
            this.logger.info('create acceptor');
            const server = this.getAcceptor(serverConfig);
            this.logger.info('create initiator');
            const client = this.getInitiator(clientConfig);
            this.logger.info('launching ....');
            return Promise.all([server, client]);
        });
    }
}
exports.Launcher = Launcher;
//# sourceMappingURL=launcher.js.map