/// <reference types="node" />
export interface ITcpTransportDescription {
    readonly port: number;
    readonly host: string;
}
export interface IHttpAdapter {
    getOptions(data: Buffer): IHtmlOptions;
    beginMessage(msgType: string): void;
    endMessage(m: any): Buffer;
}
export interface IHtmlOptions {
    method: string;
    uri: string;
    json: boolean;
    body: any;
    headers: any;
    resolveWithFullResponse: boolean;
}
export interface IHtmlRoute {
    name: string;
    value: IHtmlOptions;
}
export interface IHttpTransportDescription {
    readonly port: number;
    readonly uri: string;
    readonly options: IHtmlRoute[];
    adapter: IHttpAdapter;
}
export interface IMsgApplication {
    readonly name: string;
    readonly type: string;
    readonly reconnectSeconds: number;
    readonly tcp?: ITcpTransportDescription;
    readonly http?: IHttpTransportDescription;
    readonly protocol: string;
    readonly dictionary: string;
}
export interface ISessionDescription {
    readonly application?: IMsgApplication;
    readonly Name: string;
    readonly Username: string;
    readonly Password: string;
    HeartBtInt: number;
    readonly SenderCompId: string;
    readonly TargetCompID: string;
    readonly ResetSeqNumFlag: boolean;
    readonly SenderSubID: string;
    readonly TargetSubID: string;
    readonly BeginString: string;
}
