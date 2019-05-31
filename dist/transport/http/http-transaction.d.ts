import { IHtmlOptions } from '../session-description';
export declare class HttpTransaction {
    readonly msgType: string;
    readonly options: IHtmlOptions;
    constructor(msgType: string, options: IHtmlOptions);
}
