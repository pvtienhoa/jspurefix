import { IUserRequestFXCMNoParam } from './set/user_request_fxcm_no_param'

export interface IUserRequest {
  UserRequestID: string// 923
  UserRequestType: number// 924
  Username: string// 553
  Password?: string// 554
  NewPassword?: string// 925
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  FXCMNoParam?: IUserRequestFXCMNoParam[]
}
