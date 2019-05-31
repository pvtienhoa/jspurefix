/// <reference types="node" />
import { IRoutingGrp } from './set/routing_grp';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ILinesOfTextGrp } from './set/lines_of_text_grp';
export interface INews {
    OrigTime?: Date;
    Urgency?: string;
    Headline: string;
    EncodedHeadlineLen?: number;
    EncodedHeadline?: Buffer;
    RoutingGrp?: IRoutingGrp;
    InstrmtGrp?: IInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    LinesOfTextGrp?: ILinesOfTextGrp;
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
}
