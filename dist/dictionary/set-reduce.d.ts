import { ContainedFieldSet, ContainedGroupField, ContainedSimpleField, ContainedComponentField } from './contained';
export interface ITypeDispatcher<T> {
    group?: {
        (a: T, field: ContainedGroupField): void;
    };
    simple?: {
        (a: T, field: ContainedSimpleField): void;
    };
    component?: {
        (a: T, field: ContainedComponentField): void;
    };
}
export declare function reduceSet<T>(def: ContainedFieldSet, dispatcher: ITypeDispatcher<T>, init: T): T;
