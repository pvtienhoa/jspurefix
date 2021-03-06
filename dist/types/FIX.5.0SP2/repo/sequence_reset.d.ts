import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISequenceReset {
    StandardHeader: IStandardHeader;
    GapFillFlag?: boolean;
    NewSeqNo: number;
    StandardTrailer: IStandardTrailer;
}
