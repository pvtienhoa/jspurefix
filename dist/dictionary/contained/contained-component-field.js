"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contained_field_1 = require("./contained-field");
class ContainedComponentField extends contained_field_1.ContainedField {
    constructor(definition, position, required, override) {
        super(override || definition.name, position, contained_field_1.ContainedFieldType.Component, required);
        this.definition = definition;
        this.position = position;
        this.required = required;
        this.override = override;
    }
    toString() {
        return `[${this.position}]=C.${this.definition.fields.length} (${this.name})`;
    }
}
exports.ContainedComponentField = ContainedComponentField;
//# sourceMappingURL=contained-component-field.js.map