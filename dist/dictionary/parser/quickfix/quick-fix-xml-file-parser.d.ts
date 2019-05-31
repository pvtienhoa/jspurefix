import { FixDefinitions } from '../../definition';
import { FixParser } from '../../fix-parser';
import { GetJsFixLogger } from '../../../config';
declare enum ParseState {
    Begin = 1,
    FieldDefinitions = 2,
    ComponentsFirstPass = 3,
    ComponentsSecondPass = 4,
    ComponentsThirdPass = 5,
    Messages = 6
}
export declare class QuickFixXmlFileParser extends FixParser {
    readonly xmlPath: string;
    getLogger: GetJsFixLogger;
    parseState: ParseState;
    numberPasses: number;
    definitions: FixDefinitions;
    private readonly singlePass;
    constructor(xmlPath: string, getLogger: GetJsFixLogger);
    private static subscribe;
    parse(): Promise<FixDefinitions>;
    private onePass;
}
export {};
