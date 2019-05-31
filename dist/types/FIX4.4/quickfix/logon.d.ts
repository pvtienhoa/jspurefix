/// <reference types="node" />
import { ILogonNoMsgTypes } from './set/logon_no_msg_types';
export interface ILogon {
    EncryptMethod: number;
    HeartBtInt: number;
    RawDataLength?: number;
    RawData?: Buffer;
    ResetSeqNumFlag?: boolean;
    NextExpectedMsgSeqNum?: number;
    MaxMessageSize?: number;
    NoMsgTypes?: ILogonNoMsgTypes[];
    TestMessageIndicator?: boolean;
    Username?: string;
    Password?: string;
}
