"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("../types/enum");
const repo_1 = require("../types/FIX4.4/repo");
const FIXML50SP2_1 = require("../types/FIXML50SP2");
class SessionMsgFactory {
    constructor(description, mutator = null) {
        this.description = description;
        this.mutator = mutator;
        this.isAscii = description.application.protocol === 'ascii';
    }
    reject(msgType, seqNo, msg, reason) {
        const o = {
            RefMsgType: msgType,
            SessionRejectReason: reason,
            RefSeqNum: seqNo,
            Text: msg
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.Reject, o) : o;
    }
    logon(userRequestId = '', isResponse = false) {
        if (this.isAscii) {
            return this.asciiLogon();
        }
        else {
            return this.fixmlLogon(userRequestId, isResponse);
        }
    }
    logout(msgType, text) {
        if (this.isAscii) {
            return this.asciiLogout(text);
        }
        else {
            return this.fixmlLogout(text, msgType !== 'UserReq');
        }
    }
    testRequest(reqId = `ping-${new Date().toUTCString()}`) {
        const o = {
            TestReqID: reqId
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.TestRequest, o) : o;
    }
    heartbeat(testReqId) {
        const o = {
            TestReqID: testReqId
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.Heartbeat, o) : o;
    }
    resendRequest(from, to) {
        const o = {
            BeginSeqNo: from,
            EndSeqNo: to
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.ResendRequest, o) : o;
    }
    sequenceReset(newSeqNo) {
        const o = {
            GapFillFlag: true,
            NewSeqNo: newSeqNo
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.SequenceReset, o) : o;
    }
    header(msgType, seqNum = 0, time = new Date()) {
        if (this.isAscii) {
            return this.asciiHeader(msgType, seqNum, time);
        }
        else {
            return this.fixmlHeader();
        }
    }
    trailer(checksum) {
        let width = 3 - checksum.toString().length;
        let ret = '';
        if (width > 0)
            ret = new Array(width + (/\./.test(checksum.toString()) ? 2 : 1)).join('0') + checksum;
        else
            ret = checksum.toString();
        return {
            CheckSum: ret
        };
    }
    asciiLogon() {
        const description = this.description;
        const o = {
            Username: description.Username,
            Password: description.Password,
            HeartBtInt: description.HeartBtInt,
            ResetSeqNumFlag: description.ResetSeqNumFlag,
            EncryptMethod: repo_1.EncryptMethod.None
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logon, o) : o;
    }
    asciiLogout(text) {
        const o = {
            Text: text
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logout, o) : o;
    }
    fixmlLogon(userRequestId, isResponse) {
        const description = this.description;
        if (!isResponse) {
            const o = {
                Username: description.Username,
                Password: description.Password,
                UserRequestID: userRequestId,
                UserRequestType: FIXML50SP2_1.UserRequestType.LogOnUser
            };
            return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logon, o) : o;
        }
        else {
            const o = {
                Username: description.Username,
                UserRequestID: userRequestId,
                UserStatus: FIXML50SP2_1.UserStatus.LoggedIn
            };
            return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logon, o) : o;
        }
    }
    fixmlLogout(userRequestId, isResponse) {
        if (!isResponse) {
            const o = {
                Username: this.description.Username,
                UserRequestID: userRequestId,
                UserRequestType: FIXML50SP2_1.UserRequestType.LogOffUser
            };
            return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logon, o) : o;
        }
        else {
            const o = {
                Username: this.description.Username,
                UserRequestID: userRequestId,
                UserStatus: FIXML50SP2_1.UserStatus.NotLoggedIn
            };
            return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logon, o) : o;
        }
    }
    asciiHeader(msgType, seqNum, time) {
        const description = this.description;
        const o = {
            BeginString: description.BeginString,
            BodyLength: 9999999,
            MsgType: msgType,
            SenderCompID: description.SenderCompId,
            MsgSeqNum: seqNum,
            SendingTime: time,
            TargetCompID: description.TargetCompID,
            TargetSubID: description.TargetSubID
        };
        return this.mutator ? this.mutator(description, 'StandardHeader', o) : o;
    }
    fixmlHeader() {
        const description = this.description;
        const o = {
            SenderCompID: description.SenderCompId,
            TargetCompID: description.TargetCompID,
            SenderSubID: description.SenderSubID,
            TargetSubID: description.TargetSubID
        };
        return this.mutator ? this.mutator(this.description, enum_1.MsgType.Logon, o) : o;
    }
}
exports.SessionMsgFactory = SessionMsgFactory;
//# sourceMappingURL=session-msg-factory.js.map