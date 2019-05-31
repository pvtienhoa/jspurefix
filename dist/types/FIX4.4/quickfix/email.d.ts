/// <reference types="node" />
import { IRoutingGrp } from './set/routing_grp';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ILinesOfTextGrp } from './set/lines_of_text_grp';
export interface IEmail {
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: Date;
    Subject: string;
    EncodedSubjectLen?: number;
    EncodedSubject?: Buffer;
    RoutingGrp?: IRoutingGrp;
    InstrmtGrp?: IInstrmtGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    OrderID?: string;
    ClOrdID?: string;
    LinesOfTextGrp?: ILinesOfTextGrp;
    RawDataLength?: number;
    RawData?: Buffer;
}
