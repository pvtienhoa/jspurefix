"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../../buffer");
const enum_1 = require("../../types/enum");
const fix_session_state_1 = require("../fix-session-state");
const fix_session_1 = require("../fix-session");
class AsciiSession extends fix_session_1.FixSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.heartbeat = true;
        this.requestLogoutType = this.respondLogoutType = enum_1.MsgType.Logout;
        this.requestLogonType = enum_1.MsgType.Logon;
    }
    static asPiped(txt) {
        return txt.replace(/\x01/g, '|');
    }
    checkSeqNo(msgType, view) {
        switch (msgType) {
            case enum_1.MsgType.TestRequest:
            case enum_1.MsgType.SequenceReset:
            case enum_1.MsgType.ResendRequest: {
                return true;
            }
            default: {
                const state = this.sessionState;
                const lastSeq = state.lastPeerMsgSeqNum;
                const seqNo = view.getTyped(enum_1.MsgTag.MsgSeqNum);
                let ret = false;
                const seqDelta = seqNo - lastSeq;
                if (seqDelta <= 0) {
                    this.sessionLogger.warning(`terminate as seqDelta (${seqDelta}) < 0 lastSeq = ${lastSeq} seqNo = ${seqNo}`);
                    this.stop();
                }
                else if (seqDelta > 1) {
                    const resend = this.config.factory.resendRequest(lastSeq, seqNo);
                    this.sessionLogger.warning(`sending resend last received ${lastSeq} seqNo ${seqNo}`);
                    this.send(enum_1.MsgType.ResendRequest, resend);
                }
                else {
                    ret = true;
                    state.lastPeerMsgSeqNum = seqNo;
                }
                return ret;
            }
        }
    }
    sendReject(msgType, seqNo, msg, reason) {
        const factory = this.config.factory;
        const reject = factory.reject(msgType, seqNo, msg, reason);
        this.sessionLogger.warning(`rejecting with ${JSON.stringify(reject)}`);
        this.send(enum_1.MsgType.Reject, reject);
    }
    checkIntegrity(msgType, view) {
        const state = this.sessionState;
        const seqNum = view.getTyped(enum_1.MsgTag.MsgSeqNum);
        const received = parseInt(view.getString(enum_1.MsgTag.CheckSum), 10);
        const computed = view.checksum();
        if (received !== computed) {
            const msg = `msgType ${msgType} checksum failed. received = ${received} computed = ${computed}`;
            this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.ValueIsIncorrect);
            return false;
        }
        if (view.segment.type === buffer_1.SegmentType.Unknown) {
            const msg = `msgType ${msgType} unknown`;
            this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.InvalidMsgType);
            return false;
        }
        const invalid = view.invalid();
        if (invalid.length > 0) {
            const msg = `msgType ${msgType} invalid tag${invalid.length > 1 ? 's' : ''} ${invalid.join(', ')}`;
            this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.InvalidTagNumber);
            return false;
        }
        const undefinedMsg = view.undefinedForMsg();
        if (undefinedMsg) {
            const msg = `msgType ${msgType} ${undefinedMsg}`;
            this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.TagNotDefinedForThisMessageType);
            return false;
        }
        const missingRequired = view.missing();
        if (missingRequired.length > 0) {
            const msg = `msgType ${msgType} missing required tag${missingRequired.length > 1 ? 's' : ''} ${missingRequired.join(', ')}`;
            this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.RequiredTagMissing);
            return false;
        }
        switch (state.state) {
            case fix_session_state_1.SessionState.PeerLoggedOn:
                {
                    const targetCompId = view.getString(enum_1.MsgTag.TargetCompID);
                    if (targetCompId !== state.compId) {
                        const msg = `msgType ${msgType} unexpected TargetCompID ${targetCompId}`;
                        this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.CompIDProblem);
                        return false;
                    }
                    const peerCompId = view.getString(enum_1.MsgTag.SenderCompID);
                    if (peerCompId !== state.peerCompId) {
                        const msg = `msgType ${msgType} unexpected SenderCompID ${peerCompId}`;
                        this.sendReject(msgType, seqNum, msg, enum_1.SessionRejectReason.CompIDProblem);
                        return false;
                    }
                }
                break;
            default: {
                break;
            }
        }
        return true;
    }
    onSessionMsg(msgType, view) {
        const factory = this.config.factory;
        const logger = this.sessionLogger;
        switch (msgType) {
            case enum_1.MsgType.Logon: {
                this.peerLogon(view);
                break;
            }
            case enum_1.MsgType.Logout: {
                this.peerLogout(view);
                break;
            }
            case enum_1.MsgType.TestRequest: {
                const req = view.getString(enum_1.MsgTag.TestReqID);
                this.send(enum_1.MsgType.Heartbeat, factory.heartbeat(req));
                break;
            }
            case enum_1.MsgType.Heartbeat: {
                this.sessionState.lastTestRequestAt = null;
                break;
            }
            case enum_1.MsgType.ResendRequest: {
                logger.info(`peer sends '${msgType}' resend reset.`);
                const endSeqNo = view.getTyped(enum_1.MsgTag.EndSeqNo);
                const resend = factory.sequenceReset(endSeqNo);
                this.send(enum_1.MsgType.SequenceReset, resend);
                break;
            }
            case enum_1.MsgType.SequenceReset: {
                const newSeqNo = view.getTyped(enum_1.MsgTag.NewSeqNo);
                logger.info(`peer sends '${msgType}' sequence reset. newSeqNo = ${newSeqNo}`);
                this.sessionState.lastPeerMsgSeqNum = newSeqNo;
                break;
            }
            case enum_1.MsgType.Reject: {
                logger.info(`peer rejects type '${msgType}' with text '${view.getTyped(enum_1.MsgTag.Text)}'`);
                break;
            }
        }
    }
    onMsg(msgType, view) {
        if (!this.checkSeqNo(msgType, view)) {
            this.sessionLogger.debug(`message '${msgType}' failed checkSeqNo.`);
            return;
        }
        if (this.checkMsgIntegrity && !this.checkIntegrity(msgType, view)) {
            this.sessionLogger.debug(`message '${msgType}' failed checkIntegrity.`);
            switch (msgType) {
                case enum_1.MsgType.Logon: {
                    this.sessionState.state = fix_session_state_1.SessionState.PeerLogonRejected;
                    this.timer = setInterval(() => {
                        this.tick();
                    }, 200);
                    break;
                }
            }
            return;
        }
        switch (msgType) {
            case enum_1.MsgType.Logon:
            case enum_1.MsgType.Logout:
            case enum_1.MsgType.TestRequest:
            case enum_1.MsgType.Reject:
            case enum_1.MsgType.SequenceReset:
            case enum_1.MsgType.Heartbeat:
            case enum_1.MsgType.ResendRequest: {
                this.onSessionMsg(msgType, view);
                break;
            }
            default: {
                this.checkForwardMsg(msgType, view);
                break;
            }
        }
    }
    peerLogon(view) {
        const logger = this.sessionLogger;
        const heartBtInt = view.getTyped(enum_1.MsgTag.HeartBtInt);
        const peerCompId = view.getTyped(enum_1.MsgTag.SenderCompID);
        const userName = view.getString(enum_1.MsgTag.Username);
        logger.info(`peerLogon Username = ${userName}, heartBtInt = ${heartBtInt}, peerCompId = ${peerCompId}, userName = ${userName}`);
        const state = this.sessionState;
        state.state = fix_session_state_1.SessionState.PeerLoggedOn;
        state.peerHeartBeatSecs = view.getTyped(enum_1.MsgTag.HeartBtInt);
        state.peerCompId = view.getTyped(enum_1.MsgTag.SenderCompID);
        if (this.acceptor) {
            this.send(enum_1.MsgType.Logon, this.config.factory.logon());
        }
        if (this.heartbeat) {
            logger.debug(`start heartbeat timer.`);
            this.timer = setInterval(() => {
                this.tick();
            }, 200);
        }
        logger.info(`system ready, inform app`);
        this.onReady(view);
    }
    tick() {
        const sessionState = this.sessionState;
        const action = sessionState.calcAction(new Date());
        const application = this.transport.config.description.application;
        const factory = this.config.factory;
        const logger = this.sessionLogger;
        switch (action) {
            case fix_session_state_1.TickAction.Nothing: {
                break;
            }
            case fix_session_state_1.TickAction.TestRequest: {
                logger.debug(`send test req. state = ${sessionState.toString()}`);
                this.send(enum_1.MsgType.TestRequest, factory.testRequest());
                break;
            }
            case fix_session_state_1.TickAction.Heartbeat: {
                logger.debug(`send heartbeat. state = ${sessionState.toString()}`);
                this.send(enum_1.MsgType.Heartbeat, factory.heartbeat(sessionState.now.toUTCString()));
                break;
            }
            case fix_session_state_1.TickAction.TerminateOnError: {
                logger.info(sessionState.toString());
                this.terminate(new Error(`${application.name}: peer not responding`));
                break;
            }
            case fix_session_state_1.TickAction.Stop: {
                logger.info(sessionState.toString());
                logger.info('stopping');
                this.stop();
                break;
            }
            default:
                throw new Error(`unexpected action`);
        }
    }
}
exports.AsciiSession = AsciiSession;
//# sourceMappingURL=ascii-session.js.map