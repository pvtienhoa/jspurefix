"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fix_initiator_1 = require("../fix-initiator");
const msg_transport_1 = require("../msg-transport");
const duplex_1 = require("../duplex");
const util = require("util");
const net = require("net");
var InitiatorState;
(function (InitiatorState) {
    InitiatorState[InitiatorState["Idle"] = 1] = "Idle";
    InitiatorState[InitiatorState["Connecting"] = 2] = "Connecting";
    InitiatorState[InitiatorState["Connected"] = 3] = "Connected";
    InitiatorState[InitiatorState["Stopped"] = 4] = "Stopped";
})(InitiatorState = exports.InitiatorState || (exports.InitiatorState = {}));
class TcpInitiator extends fix_initiator_1.FixInitiator {
    constructor(jsFixConfig) {
        super(jsFixConfig.description.application);
        this.jsFixConfig = jsFixConfig;
        this.state = InitiatorState.Idle;
        this.logger = jsFixConfig.logFactory.logger(`${this.application.name}:TcpInitiator`);
        if (!this.application) {
            const e = new Error(`no application in session description.`);
            this.logger.error(e);
            throw e;
        }
        this.tcp = this.application.tcp;
        if (!this.tcp) {
            const e = new Error(`no tcp in session description need tcp { host: hostname, port: port }`);
            this.logger.error(e);
            throw e;
        }
    }
    end() {
        switch (this.state) {
            case InitiatorState.Connected: {
                this.logger.info('end');
                this.duplex.end();
                this.state = InitiatorState.Stopped;
                break;
            }
            default: {
                this.logger.info(`end :state ${this.state}`);
            }
        }
    }
    connect(timeoutSeconds) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            switch (this.state) {
                case InitiatorState.Idle: {
                    this.state = InitiatorState.Connecting;
                    this.logger.info(`connecting with timeout ${timeoutSeconds}`);
                    this.tryConnect().then((t) => resolve(t)).catch((e) => {
                        this.logger.error(e);
                        this.repeatConnect(timeoutSeconds).then((t) => resolve(t)).catch((e) => reject(e));
                    });
                    break;
                }
                default:
                    const e = new Error(`connect not valid from non idle state`);
                    this.logger.warning(`rejecting from state ${this.state}`);
                    reject(e);
            }
        }));
    }
    tryConnect() {
        return new Promise((resolve, reject) => {
            const tcp = this.tcp;
            this.logger.info(`tryConnect ${tcp.host}:${tcp.port}`);
            const socket = net.createConnection(tcp, () => {
                this.logger.info(`net.createConnection cb, resolving`);
                this.duplex = new duplex_1.TcpDuplex(socket);
                resolve(new msg_transport_1.MsgTransport(0, this.jsFixConfig, this.duplex));
            });
            socket.on('error', (e) => {
                reject(e);
            });
        });
    }
    repeatConnect(timeoutSeconds) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const application = this.application;
            const promisify = util.promisify;
            const timeoutPromise = promisify(setTimeout);
            let retries = 0;
            let timer = setInterval(() => {
                ++retries;
                this.tryConnect().then((t) => {
                    this.state = InitiatorState.Connected;
                    clearInterval(timer);
                    resolve(t);
                }).catch((e) => {
                    this.logger.info(`${application.name}: retries ${retries} ${e.message}`);
                });
            }, application.reconnectSeconds * 1000);
            timeoutPromise(timeoutSeconds * 1000).then(() => {
                clearInterval(timer);
                this.state = InitiatorState.Stopped;
                const e = new Error(`${application.name}: timeout of ${timeoutSeconds} whilst connecting`);
                this.logger.warning(`repeatConnect reject with message ${e.message}`);
                reject(e);
            });
        }));
    }
}
exports.TcpInitiator = TcpInitiator;
//# sourceMappingURL=tcp-initiator.js.map