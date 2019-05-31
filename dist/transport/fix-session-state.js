"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("../buffer");
const moment = require("moment");
var SessionState;
(function (SessionState) {
    SessionState[SessionState["Connected"] = 1] = "Connected";
    SessionState[SessionState["PeerLoggedOn"] = 2] = "PeerLoggedOn";
    SessionState[SessionState["PeerLogonRejected"] = 3] = "PeerLogonRejected";
    SessionState[SessionState["WaitingLogoutConfirm"] = 4] = "WaitingLogoutConfirm";
    SessionState[SessionState["ConfirmingLogout"] = 5] = "ConfirmingLogout";
    SessionState[SessionState["Stopped"] = 6] = "Stopped";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
var TickAction;
(function (TickAction) {
    TickAction[TickAction["Nothing"] = 1] = "Nothing";
    TickAction[TickAction["Heartbeat"] = 2] = "Heartbeat";
    TickAction[TickAction["TestRequest"] = 3] = "TestRequest";
    TickAction[TickAction["TerminateOnError"] = 4] = "TerminateOnError";
    TickAction[TickAction["WaitLogoutConfirmExpired"] = 5] = "WaitLogoutConfirmExpired";
    TickAction[TickAction["Stop"] = 6] = "Stop";
})(TickAction = exports.TickAction || (exports.TickAction = {}));
class FixSessionState {
    constructor(heartBeat, state = SessionState.Connected, waitLogoutConfirmSeconds = 5, stopSeconds = 2) {
        this.heartBeat = heartBeat;
        this.state = state;
        this.waitLogoutConfirmSeconds = waitLogoutConfirmSeconds;
        this.stopSeconds = stopSeconds;
        this.nextTickAction = TickAction.Nothing;
        this.lastReceivedAt = null;
        this.LastSentAt = null;
        this.lastTestRequestAt = null;
        this.logoutSentAt = null;
        this.now = new Date();
        this.compId = '';
        this.peerCompId = '';
        this.peerHeartBeatSecs = 0;
        this.lastPeerMsgSeqNum = 0;
        this.secondsSinceLogoutSent = -1;
        this.secondsSinceSent = -1;
        this.secondsSinceReceive = -1;
    }
    static dateAsString(d) {
        if (!d) {
            return 'null';
        }
        return moment(d).format('HH:mm:ss.SSS');
    }
    toString() {
        const buffer = new buffer_1.ElasticBuffer(1024);
        buffer.writeString(`compId = ${this.compId}, `);
        buffer.writeString(`heartBeat = ${this.heartBeat}, `);
        buffer.writeString(`state = ${this.state}, `);
        buffer.writeString(`nextTickAction = ${this.nextTickAction}, `);
        buffer.writeString(`now = ${FixSessionState.dateAsString(this.now)}, `);
        buffer.writeString(`timeToDie = ${this.timeToDie()}, `);
        buffer.writeString(`timeToHeartbeat = ${this.timeToHeartbeat()}, `);
        buffer.writeString(`timeToTerminate = ${this.timeToTerminate()}, `);
        buffer.writeString(`timeToTestRequest = ${this.timeToTestRequest()}, `);
        buffer.writeString(`lastReceivedAt = ${FixSessionState.dateAsString(this.lastReceivedAt)}, `);
        buffer.writeString(`LastSentAt = ${FixSessionState.dateAsString(this.LastSentAt)}, `);
        buffer.writeString(`lastTestRequestAt = ${FixSessionState.dateAsString(this.lastTestRequestAt)}, `);
        buffer.writeString(`logoutSentAt = ${FixSessionState.dateAsString(this.logoutSentAt)}, `);
        buffer.writeString(`peerHeartBeatSecs = ${this.peerHeartBeatSecs}, `);
        buffer.writeString(`peerCompId = ${this.peerCompId}, `);
        buffer.writeString(`lastPeerMsgSeqNum = ${this.lastPeerMsgSeqNum}, `);
        buffer.writeString(`secondsSinceLogoutSent = ${this.secondsSinceLogoutSent}, `);
        buffer.writeString(`secondsSinceSent = ${this.secondsSinceSent}, `);
        buffer.writeString(`secondsSinceReceive = ${this.secondsSinceReceive}`);
        return buffer.toString();
    }
    calcAction(now) {
        this.now = now;
        this.calcState();
        switch (this.state) {
            case SessionState.PeerLogonRejected: {
                if (this.secondsSinceSent >= this.stopSeconds) {
                    this.nextTickAction = TickAction.Stop;
                }
                break;
            }
            case SessionState.WaitingLogoutConfirm:
            case SessionState.ConfirmingLogout: {
                if (this.timeToDie()) {
                    this.nextTickAction = TickAction.Stop;
                }
                break;
            }
            case SessionState.PeerLoggedOn: {
                if (this.timeToHeartbeat()) {
                    this.nextTickAction = TickAction.Heartbeat;
                }
                else {
                    if (this.timeToTerminate()) {
                        this.nextTickAction = TickAction.TerminateOnError;
                    }
                    else if (this.timeToTestRequest()) {
                        if (!this.lastTestRequestAt) {
                            this.nextTickAction = TickAction.TestRequest;
                            this.lastTestRequestAt = this.now;
                        }
                    }
                }
                break;
            }
        }
        return this.nextTickAction;
    }
    timeToDie() {
        return this.secondsSinceLogoutSent > this.waitLogoutConfirmSeconds ||
            this.secondsSinceLogoutSent > this.stopSeconds;
    }
    timeToHeartbeat() {
        return this.secondsSinceSent >= this.heartBeat;
    }
    timeToTerminate() {
        return this.secondsSinceReceive >= 2.5 * this.peerHeartBeatSecs;
    }
    timeToTestRequest() {
        return this.secondsSinceReceive >= 1.5 * this.peerHeartBeatSecs;
    }
    calcState() {
        const time = this.now.getTime();
        this.nextTickAction = TickAction.Nothing;
        this.secondsSinceLogoutSent = this.logoutSentAt ? (time - this.logoutSentAt.getTime()) / 1000 : -1;
        this.secondsSinceSent = (time - this.LastSentAt.getTime()) / 1000;
        this.secondsSinceReceive = (time - this.lastReceivedAt.getTime()) / 1000;
    }
}
exports.FixSessionState = FixSessionState;
//# sourceMappingURL=fix-session-state.js.map