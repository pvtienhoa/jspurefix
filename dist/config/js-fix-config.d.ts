import { FixDefinitions } from '../dictionary';
import { ISessionDescription, ISessionMsgFactory } from '../transport';
import { JsFixLoggerFactory } from './js-fix-logger-factory';
export interface IJsFixConfig {
    factory: ISessionMsgFactory;
    definitions: FixDefinitions;
    description: ISessionDescription;
    delimiter?: number;
    logFactory: JsFixLoggerFactory;
}
export declare class JsFixConfig implements IJsFixConfig {
    readonly factory: ISessionMsgFactory;
    readonly definitions: FixDefinitions;
    readonly description: ISessionDescription;
    readonly delimiter: number;
    readonly logFactory: JsFixLoggerFactory;
    constructor(factory: ISessionMsgFactory, definitions: FixDefinitions, description: ISessionDescription, delimiter?: number, logFactory?: JsFixLoggerFactory);
}
