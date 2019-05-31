import { ISessionDescription } from './session-description';
import { ISessionMsgFactory } from './fix-msg-factory';
import { IJsFixConfig, JsFixLoggerFactory } from '../config';
export declare function makeConfig(description: ISessionDescription, logFactory: JsFixLoggerFactory, msgFactory: ISessionMsgFactory): Promise<IJsFixConfig>;
