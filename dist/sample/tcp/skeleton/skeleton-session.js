"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("../../../transport");
class SkeletonSession extends transport_1.AsciiSession {
    constructor(config, logoutSeconds = 45) {
        super(config);
        this.config = config;
        this.logoutSeconds = logoutSeconds;
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}`);
    }
    onApplicationMsg(msgType, view) {
        switch (msgType) {
            default: {
                this.logger.info(`received message type ${msgType}`);
                break;
            }
        }
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(transport_1.AsciiSession.asPiped(txt));
    }
    onLogon(view, user, password) {
        this.logger.info(`peer logs in user ${user}`);
        return true;
    }
    onReady(view) {
        this.logger.info('onReady');
        const logoutSeconds = this.logoutSeconds;
        const t = this.config.description.application.type;
        switch (t) {
            case 'initiator': {
                this.logger.info(`will logout after ${logoutSeconds}`);
                setTimeout(() => {
                    this.done();
                }, logoutSeconds * 1000);
                break;
            }
            case 'acceptor': {
                this.logger.info(`acceptor is ready for requests`);
                break;
            }
            default: {
                this.logger.warning(`unknown type ${t}`);
                break;
            }
        }
    }
    onStopped() {
        this.logger.info('stopped');
    }
}
exports.SkeletonSession = SkeletonSession;
//# sourceMappingURL=skeleton-session.js.map