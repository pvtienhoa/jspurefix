import { FixDefinitions } from '../dictionary';
import { GetJsFixLogger } from '../config';
export interface IDictionaryPath {
    output: string;
    dict: string;
}
export declare function getDictPath(p: string): IDictionaryPath;
export declare function getDefinitions(path: string, getLogger?: GetJsFixLogger): Promise<FixDefinitions>;
