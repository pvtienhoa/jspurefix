"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contained_1 = require("../contained");
const fix_versions_1 = require("../fix-versions");
const dict_primitive_1 = require("../dict-primitive");
const _ = require("lodash");
class CompilerType {
    constructor(definitions, set, qualifiedName) {
        this.definitions = definitions;
        this.set = set;
        this.qualifiedName = qualifiedName;
        const snake = _.snakeCase(this.qualifiedName);
        if (set.type === dict_primitive_1.ContainedSetType.Msg) {
            this.snaked = `./${snake}`;
        }
        else {
            this.snaked = `./set/${snake}`;
        }
    }
    getExtended(field) {
        switch (field.type) {
            case contained_1.ContainedFieldType.Group: {
                const gf = field;
                switch (this.definitions.source) {
                    case fix_versions_1.FixDefinitionSource.QuickFix: {
                        return this.qualifiedName + field.name;
                    }
                    case fix_versions_1.FixDefinitionSource.FixmlRepo: {
                        return gf.definition.name;
                    }
                    default: {
                        return field.name;
                    }
                }
            }
            case contained_1.ContainedFieldType.Component: {
                const cf = field;
                switch (this.definitions.source) {
                    case fix_versions_1.FixDefinitionSource.FixmlRepo: {
                        return cf.definition.name;
                    }
                    default: {
                        return field.name;
                    }
                }
            }
            default:
                return field.name;
        }
    }
    getFieldGroupName(field) {
        switch (field.type) {
            case contained_1.ContainedFieldType.Group: {
                const gf = field;
                switch (this.definitions.source) {
                    case fix_versions_1.FixDefinitionSource.FixmlRepo: {
                        return gf.definition.name;
                    }
                    default: {
                        return field.name;
                    }
                }
            }
            default:
                return field.name;
        }
    }
}
exports.CompilerType = CompilerType;
//# sourceMappingURL=compiler-type.js.map