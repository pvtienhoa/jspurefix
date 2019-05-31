import { ISaxNode } from '../../dict-primitive';
import { FixDefinitions } from '../../definition';
import { XsdParser } from './xsd-parser';
export declare class FieldsParser extends XsdParser {
    readonly definitions: FixDefinitions;
    private alias;
    constructor(definitions: FixDefinitions);
    value(line: number, n: string, v: string): void;
    close(line: number, node: string): void;
    open(line: number, node: ISaxNode): void;
    private insertFields;
}
