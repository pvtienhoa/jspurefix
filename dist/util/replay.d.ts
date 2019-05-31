import { MsgView } from '../buffer';
import { FixDefinitions } from '../dictionary';
import { ISessionDescription } from '../transport';
export declare function replayFixFile(definitions: FixDefinitions, sessionDescription: ISessionDescription, replayFile: string, delimiter: number): Promise<MsgView[]>;
