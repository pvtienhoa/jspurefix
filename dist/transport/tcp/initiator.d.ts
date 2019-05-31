import { IJsFixConfig } from '../../config';
import { MakeFixSession } from '../make-fixl-session';
export declare function initiator(config: IJsFixConfig, sessionFactory: MakeFixSession, reconnectTimeout?: number): Promise<any>;
