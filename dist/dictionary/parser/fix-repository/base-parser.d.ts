import { ILooseObject } from '../../../collections/collection';
import { ISaxNode } from '../../dict-primitive';
import { RepositoryXmlParser } from './repository-xml-parser';
export declare abstract class BaseParser {
    readonly parser: RepositoryXmlParser;
    readonly name: string;
    data: ILooseObject[];
    current: ILooseObject;
    protected constructor(parser: RepositoryXmlParser, name: string);
    value(line: number, n: string, v: string): void;
    close(line: number, node: string): void;
    open(line: number, node: ISaxNode): void;
}
