import { ILooseObject } from '../collections/collection';
import { ContainedFieldSet, FixDefinitions } from '../dictionary';
export declare class JsonHelper {
    readonly definitions: FixDefinitions;
    constructor(definitions: FixDefinitions);
    private static patchSimple;
    fromJson(fileName: string, msgType: string): ILooseObject;
    patchJsonFields(set: ContainedFieldSet, object: ILooseObject): void;
    private patchComponent;
    private patchGroup;
}
