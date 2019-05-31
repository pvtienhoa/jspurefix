import { FixDefinitions } from '../dictionary';
import { ILooseObject } from '../collections/collection';
export declare class EncodeProxy {
    readonly definitions: FixDefinitions;
    constructor(definitions: FixDefinitions);
    private static SimpleFieldCheck;
    private static checkProperties;
    private static ComponentFieldCheck;
    private static GroupFieldCheck;
    private static handler;
    private static examine;
    wrap(msgName: string): ILooseObject;
}
