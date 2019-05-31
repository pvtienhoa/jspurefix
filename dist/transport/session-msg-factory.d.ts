import { ISessionMsgFactory } from './fix-msg-factory';
import { ISessionDescription } from './session-description';
import { ILooseObject } from '../collections/collection';
export interface ObjectMutator {
    (description: ISessionDescription, type: string, o: ILooseObject): ILooseObject;
}
export declare class SessionMsgFactory implements ISessionMsgFactory {
    readonly description: ISessionDescription;
    mutator: ObjectMutator;
    isAscii: boolean;
    constructor(description: ISessionDescription, mutator?: ObjectMutator);
    reject(msgType: string, seqNo: number, msg: string, reason: number): ILooseObject;
    logon(userRequestId?: string, isResponse?: boolean): ILooseObject;
    logout(msgType: string, text: string): ILooseObject;
    testRequest(reqId?: string): ILooseObject;
    heartbeat(testReqId: string): ILooseObject;
    resendRequest(from: number, to: number): ILooseObject;
    sequenceReset(newSeqNo: number): ILooseObject;
    header(msgType: string, seqNum?: number, time?: Date): ILooseObject;
    trailer(checksum: number): ILooseObject;
    private asciiLogon;
    private asciiLogout;
    private fixmlLogon;
    private fixmlLogout;
    private asciiHeader;
    private fixmlHeader;
}
