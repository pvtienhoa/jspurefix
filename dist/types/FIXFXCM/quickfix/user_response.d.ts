import { IUserResponseNoTradingSessions } from './set/user_response_no_trading_sessions';
import { IUserResponseFXCMNoParam } from './set/user_response_fxcm_no_param';
export interface IUserResponse {
    UserRequestID: string;
    Username: string;
    UserStatus?: number;
    UserStatusText?: string;
    NoTradingSessions?: IUserResponseNoTradingSessions[];
    FXCMNoParam?: IUserResponseFXCMNoParam[];
}
