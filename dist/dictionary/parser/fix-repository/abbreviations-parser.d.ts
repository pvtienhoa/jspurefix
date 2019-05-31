import { BaseParser } from './base-parser';
import { RepositoryXmlParser } from './repository-xml-parser';
export declare class AbbreviationsParser extends BaseParser {
    readonly parser: RepositoryXmlParser;
    constructor(parser: RepositoryXmlParser);
}
