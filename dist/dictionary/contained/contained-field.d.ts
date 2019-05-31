export declare enum ContainedFieldType {
    Component = 0,
    Group = 1,
    Simple = 2
}
export declare class ContainedField {
    readonly name: string;
    readonly position: number;
    readonly type: ContainedFieldType;
    readonly required: boolean;
    constructor(name: string, position: number, type: ContainedFieldType, required: boolean);
}
