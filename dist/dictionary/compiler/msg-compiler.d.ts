import { ElasticBuffer } from '../../buffer';
import { ICompilerSettings } from './compiler-settings';
import { FixDefinitions } from '../definition';
import { StandardSnippet } from './standard-snippet';
import { CompilerType } from './compiler-type';
import { Dictionary } from '../../collections';
export declare class MsgCompiler {
    readonly definitions: FixDefinitions;
    readonly settings: ICompilerSettings;
    readonly queue: CompilerType[];
    readonly snippets: StandardSnippet;
    readonly buffer: ElasticBuffer;
    readonly completed: Dictionary<CompilerType>;
    constructor(definitions: FixDefinitions, settings: ICompilerSettings);
    generate(): Promise<void>;
    private getFileName;
    private createTypes;
    private work;
    private index;
    private generateMessages;
    private enqueue;
    private fieldSimple;
    private fieldGroup;
    private fieldComponent;
    private fields;
    private attributes;
    private imports;
}
