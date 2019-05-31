import { ISaxNode } from '../../dict-primitive';
import { NodeParser } from './node-parser';
import { QuickFixXmlFileParser } from './quick-fix-xml-file-parser';
export declare class FieldDefinitionParser extends NodeParser {
    readonly parser: QuickFixXmlFileParser;
    private currentField;
    constructor(parser: QuickFixXmlFileParser);
    open(line: number, node: ISaxNode): void;
    close(line: number, name: string): void;
}
