import { BaseParser } from './base-parser';
import { RepositoryXmlParser } from './repository-xml-parser';
export declare class MsgContentsParser extends BaseParser {
    readonly parser: RepositoryXmlParser;
    constructor(parser: RepositoryXmlParser);
}
