/// <reference types="node" />
import { SAXOptions, SAXParser } from 'sax';
import * as stream from 'stream';
import { ILooseObject } from '../collections/collection';
import { FixDefinitions } from './definition';
export declare enum ContainedSetType {
    Msg = 0,
    Group = 1,
    Component = 2
}
export interface ISaxNode {
    readonly name: string;
    readonly attributes: ILooseObject;
    readonly isSelfClosing: boolean;
}
export declare type IDictDoneCb = (err: Error, done: FixDefinitions) => void;
export declare class SAXStream extends stream.Duplex {
    _parser: SAXParser;
    constructor(strict: boolean, opt: SAXOptions);
}
