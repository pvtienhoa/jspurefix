"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FixVersion;
(function (FixVersion) {
    FixVersion[FixVersion["Unknown"] = 1] = "Unknown";
    FixVersion[FixVersion["FIX40"] = 1] = "FIX40";
    FixVersion[FixVersion["FIX41"] = 2] = "FIX41";
    FixVersion[FixVersion["FIX42"] = 3] = "FIX42";
    FixVersion[FixVersion["FIX43"] = 4] = "FIX43";
    FixVersion[FixVersion["FIX44"] = 5] = "FIX44";
    FixVersion[FixVersion["FIX50"] = 6] = "FIX50";
    FixVersion[FixVersion["FIX50SP1"] = 7] = "FIX50SP1";
    FixVersion[FixVersion["FIX50SP2"] = 8] = "FIX50SP2";
    FixVersion[FixVersion["FIXML50SP2"] = 9] = "FIXML50SP2";
})(FixVersion = exports.FixVersion || (exports.FixVersion = {}));
var FixDefinitionSource;
(function (FixDefinitionSource) {
    FixDefinitionSource[FixDefinitionSource["Unknown"] = 0] = "Unknown";
    FixDefinitionSource[FixDefinitionSource["QuickFix"] = 1] = "QuickFix";
    FixDefinitionSource[FixDefinitionSource["FixmlRepo"] = 2] = "FixmlRepo";
    FixDefinitionSource[FixDefinitionSource["FixRepo"] = 3] = "FixRepo";
})(FixDefinitionSource = exports.FixDefinitionSource || (exports.FixDefinitionSource = {}));
class VersionUtil {
    static resolve(description) {
        let version = FixVersion.Unknown;
        if (description.indexOf('FIX.4.0') >= 0) {
            version = FixVersion.FIX40;
        }
        else if (description.indexOf('FIX.4.1') >= 0) {
            version = FixVersion.FIX41;
        }
        else if (description.indexOf('FIX.4.2') >= 0) {
            version = FixVersion.FIX42;
        }
        else if (description.indexOf('FIX.4.3') >= 0) {
            version = FixVersion.FIX43;
        }
        else if (description.indexOf('FIX.4.4') >= 0) {
            version = FixVersion.FIX44;
        }
        else if (description.indexOf('FIX.5.0') >= 0) {
            version = FixVersion.FIX50;
        }
        else if (description.indexOf('FIX.5.0SP1') >= 0) {
            version = FixVersion.FIX50SP1;
        }
        else if (description.indexOf('FIX.5.0SP1') >= 0) {
            version = FixVersion.FIX50SP2;
        }
        return version;
    }
}
exports.VersionUtil = VersionUtil;
//# sourceMappingURL=fix-versions.js.map