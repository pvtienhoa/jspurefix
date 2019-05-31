import { ContainedGroupField } from './contained-group-field';
import { ContainedSimpleField } from './contained-simple-field';
import { ContainedComponentField } from './contained-component-field';
import { ContainedField } from './contained-field';
export interface IContainedFieldDispatcher {
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
export declare function dispatchContainedField(field: ContainedField, dispatcher: IContainedFieldDispatcher): void;
