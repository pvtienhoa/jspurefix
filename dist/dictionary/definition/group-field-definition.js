"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contained_1 = require("../contained");
const dict_primitive_1 = require("../dict-primitive");
class GroupFieldDefinition extends contained_1.ContainedFieldSet {
    constructor(name, abbreviation, category, noOfField, description) {
        super(dict_primitive_1.ContainedSetType.Group, name, abbreviation, category, description);
        this.name = name;
        this.abbreviation = abbreviation;
        this.category = category;
        this.noOfField = noOfField;
        this.description = description;
        if (this.noOfField) {
            this.containedTag[this.noOfField.tag] = true;
        }
    }
    getPrefix() {
        return `G`;
    }
}
exports.GroupFieldDefinition = GroupFieldDefinition;
//# sourceMappingURL=group-field-definition.js.map