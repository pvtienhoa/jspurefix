import { ContainedField, ContainedGroupField, ContainedSimpleField, ContainedComponentField } from './contained';
export interface IFieldDispatcher {
    group?: {
        (field: ContainedGroupField): void;
    };
    simple?: {
        (field: ContainedSimpleField): void;
    };
    component?: {
        (field: ContainedComponentField): void;
    };
}
export declare function dispatchFields(fields: ContainedField[], dispatcher: IFieldDispatcher): void;
