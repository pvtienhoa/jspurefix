import { ILooseObject } from '../collections/collection';
import { SegmentDescription } from './segment-description';
import { SegmentSummary } from './segment-summary';
import { Tags } from './tags';
export declare class Structure {
    readonly tags: Tags;
    readonly segments: SegmentDescription[];
    readonly layout: ILooseObject;
    constructor(tags: Tags, segments: SegmentDescription[]);
    msg(): SegmentDescription;
    summary(): SegmentSummary[];
    firstContainedWithin(name: string, segment: SegmentDescription): SegmentDescription;
    boundLayout(segment?: SegmentDescription): ILooseObject;
}
