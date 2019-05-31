/// <reference types="node" />
export interface IUserRequest {
    UserRequestID: string;
    UserRequestType: number;
    Username: string;
    Password?: string;
    NewPassword?: string;
    RawDataLength?: number;
    RawData?: Buffer;
}
