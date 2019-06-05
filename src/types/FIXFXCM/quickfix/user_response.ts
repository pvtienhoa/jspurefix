import { IUserResponseNoTradingSessions } from './set/user_response_no_trading_sessions'
import { IUserResponseFXCMNoParam } from './set/user_response_fxcm_no_param'

export interface IUserResponse {
  UserRequestID: string// 923
  Username: string// 553
  UserStatus?: number// 926
  UserStatusText?: string// 927
  NoTradingSessions?: IUserResponseNoTradingSessions[]
  FXCMNoParam?: IUserResponseFXCMNoParam[]
}
