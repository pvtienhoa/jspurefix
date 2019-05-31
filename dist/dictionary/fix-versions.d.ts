export declare enum FixVersion {
    Unknown = 1,
    FIX40 = 1,
    FIX41 = 2,
    FIX42 = 3,
    FIX43 = 4,
    FIX44 = 5,
    FIX50 = 6,
    FIX50SP1 = 7,
    FIX50SP2 = 8,
    FIXML50SP2 = 9
}
export declare enum FixDefinitionSource {
    Unknown = 0,
    QuickFix = 1,
    FixmlRepo = 2,
    FixRepo = 3
}
export declare abstract class VersionUtil {
    static resolve(description: string): FixVersion;
}
