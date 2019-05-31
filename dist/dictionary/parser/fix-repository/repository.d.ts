import { ILooseObject } from '../../../collections/collection';
import { FixDefinitions } from '../../definition';
import { FixVersion } from '../../fix-versions';
import { GetJsFixLogger } from '../../../config';
export interface IRepositoryField extends ILooseObject {
    Tag: string;
    Name: string;
    Type: string;
    Description: string;
    AbbrName: string;
    NotReqXML: string;
    BaseCategory: string;
    BaseCategoryAbbrName: string;
}
export interface IRepositoryEnum extends ILooseObject {
    Tag: string;
    Value: string;
    SymbolicName: string;
    Description: string;
}
export interface IRepositoryComponent extends ILooseObject {
    ComponentID: string;
    ComponentType: string;
    CategoryID: string;
    Name: string;
    AbbrName: string;
    NotReqXML: string;
    Description: string;
}
export interface IRepositoryMessage extends ILooseObject {
    ComponentID: string;
    MsgType: string;
    Name: string;
    CategoryID: string;
    SectionID: string;
    AbbrName: string;
    NotReqXML: string;
    Description: string;
}
export interface IRepositoryMsgContent extends ILooseObject {
    ComponentID: string;
    TagText: string;
    Indent: string;
    Position: string;
    Reqd: string;
    Description: string;
}
export interface IRepositoryAbbreviation extends ILooseObject {
    Term: string;
    AbbrTerm: string;
}
export declare class Repository {
    readonly version: FixVersion;
    readonly getLogger: GetJsFixLogger;
    Enums: IRepositoryEnum[];
    Fields: IRepositoryField[];
    Components: IRepositoryComponent[];
    Messages: IRepositoryMessage[];
    MsgContents: IRepositoryMsgContent[];
    Abbreviations: IRepositoryAbbreviation[];
    includesAbbreviations: boolean;
    readonly definitions: FixDefinitions;
    private readonly groupLookup;
    private contentLookup;
    private componentLookup;
    private readonly logger;
    constructor(version: FixVersion, getLogger: GetJsFixLogger);
    assign(name: string, data: ILooseObject[]): void;
    private summarise;
    private toDefinitions;
    private complex;
    private header;
    private trailer;
    private fields;
    private contents;
    private resolveToFieldSet;
    private resolve;
    private message;
    private components;
}
