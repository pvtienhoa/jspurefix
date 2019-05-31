"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contained_1 = require("../contained");
const dict_primitive_1 = require("../dict-primitive");
class ComponentFieldDefinition extends contained_1.ContainedFieldSet {
    constructor(name, abbreviation, category, description) {
        super(dict_primitive_1.ContainedSetType.Component, name, abbreviation, category, description);
        this.name = name;
        this.abbreviation = abbreviation;
        this.category = category;
        this.description = description;
    }
    getPrefix() {
        return `C`;
    }
}
exports.ComponentFieldDefinition = ComponentFieldDefinition;
//# sourceMappingURL=component-field-definition.js.map