/// <reference types="node" />
import { IUserRequestFXCMNoParam } from './set/user_request_fxcm_no_param';
export interface IUserRequest {
    UserRequestID: string;
    UserRequestType: number;
    Username: string;
    Password?: string;
    NewPassword?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    FXCMNoParam?: IUserRequestFXCMNoParam[];
}
