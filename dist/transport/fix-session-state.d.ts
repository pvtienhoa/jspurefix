export declare enum SessionState {
    Connected = 1,
    PeerLoggedOn = 2,
    PeerLogonRejected = 3,
    WaitingLogoutConfirm = 4,
    ConfirmingLogout = 5,
    Stopped = 6
}
export declare enum TickAction {
    Nothing = 1,
    Heartbeat = 2,
    TestRequest = 3,
    TerminateOnError = 4,
    WaitLogoutConfirmExpired = 5,
    Stop = 6
}
export declare class FixSessionState {
    readonly heartBeat: number;
    state: SessionState;
    readonly waitLogoutConfirmSeconds: number;
    readonly stopSeconds: number;
    nextTickAction: TickAction;
    lastReceivedAt: Date;
    LastSentAt: Date;
    lastTestRequestAt: Date;
    logoutSentAt: Date;
    now: Date;
    compId: string;
    peerCompId: string;
    peerHeartBeatSecs: number;
    lastPeerMsgSeqNum: number;
    private secondsSinceLogoutSent;
    private secondsSinceSent;
    private secondsSinceReceive;
    constructor(heartBeat: number, state?: SessionState, waitLogoutConfirmSeconds?: number, stopSeconds?: number);
    private static dateAsString;
    toString(): string;
    calcAction(now: Date): TickAction;
    timeToDie(): boolean;
    timeToHeartbeat(): boolean;
    timeToTerminate(): boolean;
    timeToTestRequest(): boolean;
    private calcState;
}
