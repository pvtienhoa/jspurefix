"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContainedFieldType;
(function (ContainedFieldType) {
    ContainedFieldType[ContainedFieldType["Component"] = 0] = "Component";
    ContainedFieldType[ContainedFieldType["Group"] = 1] = "Group";
    ContainedFieldType[ContainedFieldType["Simple"] = 2] = "Simple";
})(ContainedFieldType = exports.ContainedFieldType || (exports.ContainedFieldType = {}));
class ContainedField {
    constructor(name, position, type, required) {
        this.name = name;
        this.position = position;
        this.type = type;
        this.required = required;
    }
}
exports.ContainedField = ContainedField;
//# sourceMappingURL=contained-field.js.map