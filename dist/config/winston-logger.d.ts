import { IJsFixLogger } from './js-fix-logger';
export declare class WinstonLogger {
    readonly options: any;
    static readonly appFormat: any;
    static readonly plainTimeStampFormat: any;
    static readonly plainFormat: any;
    private readonly appLogger;
    constructor(options?: any);
    static consoleOptions(level?: string): any;
    static fileOptions(fileName: string, level?: string, maxSize?: number, format?: any): any;
    plain(fileName: string, maxSize?: number, haveTimeStamp?: boolean): IJsFixLogger;
    make(type: string): IJsFixLogger;
}
