/// <reference types="node" />
export interface IListStatusRequest {
    ListID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
