export declare class JsfixCmd {
    private readonly root;
    private definitions;
    private jsonHelper;
    private session;
    private sessionDescription;
    private delimiter;
    private stats;
    private filter;
    private messages;
    private print;
    private static getCommand;
    private static getPrintMode;
    private static writeFile;
    exec(): Promise<any>;
    private firstMessage;
    private generate;
    private single;
    private script;
    private unitTest;
    private encodeObject;
    private field;
    ensureExists(path: string): Promise<any>;
    private compileDefinitions;
    private compile;
    private init;
    private dispatch;
    private subscribe;
    private onMsg;
    private replay;
    private benchmark;
    private encode;
    private norm;
}
