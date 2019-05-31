"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fix_session_state_1 = require("../fix-session-state");
const enum_1 = require("../../types/FIXML50SP2/enum");
const enum_2 = require("../../types/enum");
const fix_session_1 = require("../fix-session");
class FixmlSession extends fix_session_1.FixSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.requestLogoutType = 'UserReq';
        this.requestLogonType = 'UserReq';
        this.respondLogoutType = 'UserRsp';
    }
    onMsg(msgType, view) {
        switch (msgType) {
            case 'UserReq':
            case 'UserRsp': {
                this.onSessionMsg(msgType, view);
                break;
            }
            default: {
                this.checkForwardMsg(msgType, view);
                break;
            }
        }
    }
    onSessionMsg(msgType, view) {
        switch (msgType) {
            case 'UserReq': {
                const reqType = view.getTyped('UserReqTyp');
                switch (reqType) {
                    case enum_1.UserRequestType.LogOnUser: {
                        this.peerLogon(view);
                        break;
                    }
                    case enum_1.UserRequestType.LogOffUser: {
                        this.peerLogout(view);
                        break;
                    }
                }
                break;
            }
            case 'UserRsp': {
                const userStatus = view.getTyped('UserStatus');
                switch (userStatus) {
                    case enum_1.UserStatus.LoggedIn: {
                        this.peerLogon(view);
                        break;
                    }
                    case enum_1.UserStatus.NotLoggedIn: {
                        this.peerLogout(view);
                        break;
                    }
                }
                break;
            }
        }
    }
    peerLogon(view) {
        const logger = this.sessionLogger;
        const state = this.sessionState;
        state.state = fix_session_state_1.SessionState.PeerLoggedOn;
        state.peerCompId = view.getTyped(enum_2.MsgTag.SenderCompID);
        if (this.acceptor) {
            const reqId = view.getString('UserReqID');
            this.send('UserRsp', this.config.factory.logon(reqId, true));
        }
        logger.info(`system ready, inform app`);
        this.onReady(view);
    }
}
exports.FixmlSession = FixmlSession;
//# sourceMappingURL=fixml-session.js.map