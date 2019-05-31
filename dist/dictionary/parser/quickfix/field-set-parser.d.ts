import { ISaxNode } from '../../dict-primitive';
import { NodeParser } from './node-parser';
import { QuickFixXmlFileParser } from './quick-fix-xml-file-parser';
export declare class FieldSetParser extends NodeParser {
    readonly parser: QuickFixXmlFileParser;
    constructor(parser: QuickFixXmlFileParser);
    open(line: number, node: ISaxNode): void;
    close(line: number, name: string): void;
}
