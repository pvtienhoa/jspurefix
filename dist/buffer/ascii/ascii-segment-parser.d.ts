import { FixDefinitions } from '../../dictionary';
import { Structure } from '../structure';
import { Tags } from '../tags';
export declare class AsciiSegmentParser {
    readonly definitions: FixDefinitions;
    private readonly headerDefinition;
    private readonly trailerDefinition;
    constructor(definitions: FixDefinitions);
    parse(msgType: string, tags: Tags, last: number): Structure;
}
