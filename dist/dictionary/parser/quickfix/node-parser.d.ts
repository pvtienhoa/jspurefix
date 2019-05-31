import { ISaxNode } from '../../dict-primitive';
import { FixDefinitions } from '../../definition';
import { ParseContext } from './parse-context';
import { QuickFixXmlFileParser } from './quick-fix-xml-file-parser';
export declare abstract class NodeParser {
    readonly parser: QuickFixXmlFileParser;
    protected readonly parseContexts: ParseContext[];
    protected readonly definitions: FixDefinitions;
    protected constructor(parser: QuickFixXmlFileParser);
    abstract open(line: number, node: ISaxNode): void;
    abstract close(line: number, node: string): void;
    protected addSimple(node: ISaxNode): void;
    protected addComponentField(componentName: string, node: ISaxNode): void;
    protected addGroupField(name: string): void;
    protected beginGroupDefinition(node: ISaxNode): void;
    private peek;
}
