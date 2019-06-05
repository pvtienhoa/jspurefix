import { IParties } from './set/parties';
export interface ISettlementInstructionRequest {
    SettlInstReqID: string;
    TransactTime: Date;
    Parties?: IParties;
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    Side?: string;
    Product?: number;
    SecurityType?: string;
    CFICode?: string;
    EffectiveTime?: Date;
    ExpireTime?: Date;
    LastUpdateTime?: Date;
    StandInstDbType?: number;
    StandInstDbName?: string;
    StandInstDbID?: string;
}
