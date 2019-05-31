"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contained_1 = require("./contained");
function dispatchField(field, dispatcher) {
    switch (field.type) {
        case contained_1.ContainedFieldType.Group: {
            if (dispatcher.group) {
                dispatcher.group(field);
            }
            break;
        }
        case contained_1.ContainedFieldType.Simple: {
            if (dispatcher.simple) {
                dispatcher.simple(field);
            }
            break;
        }
        case contained_1.ContainedFieldType.Component: {
            if (dispatcher.component) {
                dispatcher.component(field);
            }
            break;
        }
        default:
            throw new Error(`unknown type ${field.type}`);
    }
}
function dispatchFields(fields, dispatcher) {
    fields.forEach((field) => {
        dispatchField(field, dispatcher);
    });
}
exports.dispatchFields = dispatchFields;
//# sourceMappingURL=fields-dispatch.js.map