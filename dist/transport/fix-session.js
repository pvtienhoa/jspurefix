"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../buffer");
const fix_session_state_1 = require("./fix-session-state");
const enum_1 = require("../types/enum");
const events = require("events");
class FixSession {
    constructor(config) {
        this.config = config;
        this.logReceivedMsgs = false;
        this.timer = null;
        this.transport = null;
        this.manageSession = true;
        this.checkMsgIntegrity = false;
        const description = config.description;
        this.emitter = new events.EventEmitter();
        this.me = description.application.name;
        this.sessionState = new fix_session_state_1.FixSessionState(description.HeartBtInt);
        this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`);
        this.initiator = description.application.type === 'initiator';
        this.acceptor = !this.initiator;
        this.checkMsgIntegrity = this.acceptor;
        this.sessionState.compId = description.SenderCompId;
    }
    run(transport) {
        const logger = this.sessionLogger;
        if (this.transport) {
            logger.info('reset from previous transport.');
            this.reset();
        }
        this.transport = transport;
        this.subscribe();
        return new Promise((accept, reject) => {
            if (this.initiator) {
                logger.debug('sending logon');
                this.send(this.requestLogonType, this.config.factory.logon());
            }
            this.emitter.on('error', (e) => {
                logger.error(e);
                reject(e);
            });
            this.emitter.on('done', () => {
                accept();
            });
        });
    }
    subscribe() {
        const transport = this.transport;
        const logger = this.sessionLogger;
        const rx = transport.receiver;
        const tx = transport.transmitter;
        rx.on('msg', (msgType, view) => {
            if (this.logReceivedMsgs) {
                const name = view.segment.type !== buffer_1.SegmentType.Unknown ? view.segment.set.name : 'unknown';
                logger.info(`${msgType}: ${name}`);
                logger.info(`${view.toString()}`);
            }
            this.sessionState.lastReceivedAt = new Date();
            if (this.manageSession) {
                this.onMsg(msgType, view);
            }
            else {
                this.checkForwardMsg(msgType, view);
            }
        });
        rx.on('error', (e) => {
            logger.warning(`rx error event: ${e.message} ${e.stack || ''}`);
            this.terminate(e);
        });
        rx.on('done', () => this.done());
        rx.on('end', () => this.done());
        rx.on('decoded', (msgType, data, ptr) => {
            logger.debug(`rx: [${msgType}] ${ptr} bytes`);
            this.onDecoded(msgType, data.toString(ptr));
        });
        tx.on('error', (e) => {
            logger.warning(`tx error event: ${e.message} ${e.stack || ''}`);
            this.terminate(e);
        });
        tx.on('encoded', (msgType, data) => {
            logger.debug(`tx: [${msgType}] ${data.length} bytes`);
            this.onEncoded(msgType, data.toString());
        });
    }
    checkForwardMsg(msgType, view) {
        this.sessionLogger.info(`forwarding msgType = '${msgType}' to application`);
        this.onApplicationMsg(msgType, view);
    }
    terminate(error) {
        this.sessionLogger.error(error);
        clearInterval(this.timer);
        this.emitter.emit('error', error);
    }
    peerLogout(view) {
        const msg = view.getString(enum_1.MsgTag.Text);
        switch (this.sessionState.state) {
            case fix_session_state_1.SessionState.WaitingLogoutConfirm: {
                this.sessionLogger.info(`peer confirms logout Text = '${msg}'`);
                this.stop();
                break;
            }
            case fix_session_state_1.SessionState.PeerLoggedOn: {
                this.sessionState.state = fix_session_state_1.SessionState.ConfirmingLogout;
                this.sessionLogger.info(`peer initiates logout Text = '${msg}'`);
                this.sessionLogout();
            }
        }
    }
    send(msgType, obj) {
        switch (this.sessionState.state) {
            case fix_session_state_1.SessionState.Stopped: {
                this.sessionLogger.warning(`can't send in stopped state`);
                break;
            }
            default: {
                this.sessionState.LastSentAt = new Date();
                this.transport.transmitter.send(msgType, obj);
                break;
            }
        }
    }
    sessionLogout() {
        const sessionState = this.sessionState;
        if (sessionState.logoutSentAt) {
            return;
        }
        const factory = this.config.factory;
        switch (sessionState.state) {
            case fix_session_state_1.SessionState.PeerLoggedOn: {
                sessionState.state = fix_session_state_1.SessionState.WaitingLogoutConfirm;
                sessionState.logoutSentAt = new Date();
                const msg = `${this.me} initiate logout`;
                this.sessionLogger.info(msg);
                this.send(this.requestLogoutType, factory.logout(this.requestLogoutType, msg));
                break;
            }
            case fix_session_state_1.SessionState.ConfirmingLogout: {
                sessionState.logoutSentAt = new Date();
                const msg = `${this.me} confirming logout`;
                this.sessionLogger.info(msg);
                this.send(this.respondLogoutType, factory.logout(this.respondLogoutType, msg));
                break;
            }
            default: {
                this.sessionLogger.info(`sessionLogout ignored as in state ${sessionState.state}`);
            }
        }
    }
    done() {
        switch (this.sessionState.state) {
            case fix_session_state_1.SessionState.PeerLoggedOn: {
                this.sessionLogout();
                break;
            }
            case fix_session_state_1.SessionState.Stopped:
                this.sessionLogger.info(`done. session is now stopped`);
                break;
            default: {
                this.stop();
                break;
            }
        }
        this.sessionLogger.info(`done. check logout sequence`);
    }
    reset() {
        this.transport = null;
        this.sessionState.state = fix_session_state_1.SessionState.Connected;
        this.sessionState.lastPeerMsgSeqNum = 0;
    }
    stop() {
        if (this.sessionState.state === fix_session_state_1.SessionState.Stopped) {
            return;
        }
        clearInterval(this.timer);
        this.sessionLogger.info(`stop: kill transport`);
        this.transport.end();
        this.emitter.emit('done');
        this.sessionState.state = fix_session_state_1.SessionState.Stopped;
        this.onStopped();
        this.transport = null;
    }
}
exports.FixSession = FixSession;
//# sourceMappingURL=fix-session.js.map