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
const buffer_1 = require("../buffer");
const transport_1 = require("../transport");
const enum_1 = require("../types/enum");
const config_1 = require("../config");
const skeleton_session_1 = require("../sample/tcp/skeleton/skeleton-session");
const path = require("path");
const util_1 = require("../util");
const root = path.join(__dirname, '../../data');
const logonMsg = '8=FIX4.4|9=0000136|35=A|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:28.980|98=0|108=30|141=Y|553=js-client|554=pwd-client|10=177|';
const heartbeat = '8=FIX4.4|9=0000123|35=0|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:59.161|112=Sun, 02 Sep 2018 12:25:59 GMT|10=95|';
class FixEntity {
    constructor(config, duplex = new transport_1.StringDuplex(), transport = new transport_1.MsgTransport(0, config, duplex)) {
        this.config = config;
        this.duplex = duplex;
        this.transport = transport;
        this.views = [];
    }
}
let definitions;
let clientDescription;
let serverDescription;
let client;
let clientFactory;
let serverFactory;
let server;
function loopBack(lhs, rhs) {
    lhs.writable.on('data', (data) => {
        rhs.readable.push(data);
    });
}
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    clientDescription = require(path.join(root, 'session/test-initiator.json'));
    serverDescription = require(path.join(root, 'session/test-acceptor.json'));
    definitions = yield util_1.getDefinitions(clientDescription.application.dictionary);
}), 45000);
beforeEach(() => __awaiter(this, void 0, void 0, function* () {
    clientFactory = new transport_1.SessionMsgFactory(clientDescription);
    serverFactory = new transport_1.SessionMsgFactory(serverDescription);
    const clientConfig = new config_1.JsFixConfig(clientFactory, definitions, clientDescription, buffer_1.AsciiChars.Pipe);
    const serverConfig = new config_1.JsFixConfig(serverFactory, definitions, serverDescription, buffer_1.AsciiChars.Pipe);
    client = new FixEntity(clientConfig);
    server = new FixEntity(serverConfig);
    loopBack(client.duplex, server.duplex);
    loopBack(server.duplex, client.duplex);
}));
class ParsingResult {
    constructor(event, msgType, view) {
        this.event = event;
        this.msgType = msgType;
        this.view = view;
    }
}
function clientToServerWaitFirstMessage(type, obj) {
    return new Promise((resolve, reject) => {
        const clt = client.transport;
        const svt = server.transport;
        clt.transmitter.on('error', (e) => {
            reject(e);
        });
        svt.receiver.on('msg', (msgType, view) => {
            resolve(new ParsingResult('msg', msgType, view.clone()));
        });
        clt.receiver.on('error', (e) => {
            reject(e);
        });
        clt.transmitter.send(type, obj);
        client.transport.end();
    });
}
test('end to end logon', () => __awaiter(this, void 0, void 0, function* () {
    const lo = client.config.factory.logon();
    const res = yield clientToServerWaitFirstMessage(enum_1.MsgType.Logon, lo);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    const received = res.view.toObject();
    expect(received).toBeTruthy();
    delete received['StandardHeader'];
    delete received['StandardTrailer'];
    expect(received).toEqual(lo);
}));
function runSkeletons(logoutSeconds = 1, followOn = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const s1 = new skeleton_session_1.SkeletonSession(client.config, logoutSeconds);
        const s2 = new skeleton_session_1.SkeletonSession(server.config, logoutSeconds);
        s1.checkMsgIntegrity = true;
        s2.checkMsgIntegrity = true;
        function watchdog() {
            if (client.views.length > 20 || server.views.length > 20) {
                s1.done();
                s2.done();
            }
        }
        client.transport.receiver.on('msg', (type, view) => {
            client.views.push(view.clone());
            watchdog();
        });
        server.transport.receiver.on('msg', (type, view) => {
            server.views.push(view.clone());
            watchdog();
        });
        if (followOn) {
            let sent = false;
            client.transport.transmitter.on('encoded', () => {
                const b1 = new buffer_1.ElasticBuffer();
                b1.writeString(followOn);
                if (!sent) {
                    client.transport.duplex.writable.write(b1.slice());
                    const at = client.transport.transmitter;
                    at.msgSeqNum++;
                    sent = true;
                }
            });
        }
        yield Promise.all([s1.run(client.transport), s2.run(server.transport), new Promise((accept) => {
                setTimeout(() => {
                    s1.done();
                    s2.done();
                    accept();
                }, (logoutSeconds + 2) * 1000);
            })]);
    });
}
test('session logon / logout', () => __awaiter(this, void 0, void 0, function* () {
    yield runSkeletons();
    const cViews = client.views;
    const sViews = server.views;
    expect(cViews.length).toEqual(2);
    expect(sViews.length).toEqual(2);
    expect(cViews[0].segment.name).toEqual('Logon');
    expect(cViews[1].segment.name).toEqual('Logout');
    expect(sViews[0].segment.name).toEqual('Logon');
    expect(sViews[1].segment.name).toEqual('Logout');
}));
function checkSeqNos(views) {
    const seqNo = views.map((v) => v.getView('StandardHeader').toObject().MsgSeqNum);
    expect(seqNo).toBeTruthy();
    const delta = seqNo.reduce((c, latest) => {
        return latest - c === 1 ? c + 1 : c - 1;
    }, 0);
    expect(delta).toEqual(seqNo.length);
}
test('seq No OK', () => __awaiter(this, void 0, void 0, function* () {
    yield runSkeletons();
    expect(client.views.length >= 2).toEqual(true);
    expect(server.views.length >= 2).toEqual(true);
    checkSeqNos(client.views);
    checkSeqNos(server.views);
}));
function mutateSeqNo(description, type, o) {
    switch (type) {
        case 'StandardHeader': {
            const hdr = o;
            if (hdr.MsgSeqNum === 2) {
                hdr.MsgSeqNum = 0;
            }
            break;
        }
    }
    return o;
}
test('out of seq logout', () => __awaiter(this, void 0, void 0, function* () {
    clientFactory.mutator = mutateSeqNo;
    yield runSkeletons();
    expect(client.views.length).toEqual(1);
    expect(client.views[0].segment.name).toEqual('Logon');
    expect(server.views.length).toEqual(2);
    expect(server.views[0].segment.name).toEqual('Logon');
    expect(server.views[1].segment.name).toEqual('Logout');
}));
function countOfType(type, views) {
    return views.reduce((c, v) => {
        return v.segment.name === type ? c + 1 : c;
    }, 0);
}
function mutateRemoveRequiredHeartBtInt(description, type, o) {
    switch (type) {
        case 'A': {
            const logon = o;
            delete logon['HeartBtInt'];
            break;
        }
    }
    return o;
}
test('client logon reject missing 108', () => __awaiter(this, void 0, void 0, function* () {
    clientFactory.mutator = mutateRemoveRequiredHeartBtInt;
    yield runSkeletons(2);
    expect(client.views.length === 1).toEqual(true);
    expect(server.views.length === 1).toEqual(true);
    expect(client.views[0].segment.name).toEqual('Reject');
    expect(server.views[0].segment.name).toEqual('Logon');
    const reject = client.views[0].toObject();
    expect(reject.SessionRejectReason === enum_1.SessionRejectReason.RequiredTagMissing);
    expect(reject.Text).toEqual('msgType A missing required tag 108');
}), 10000);
test('client unknown msg type', () => __awaiter(this, void 0, void 0, function* () {
    const at = client.transport.transmitter;
    const changed = logonMsg.replace('35=A', '35=ZZ').replace('34=1', `34=${at.msgSeqNum + 1}`);
    yield runSkeletons(2, changed);
    expect(client.views.length === 3).toEqual(true);
    expect(server.views.length === 3).toEqual(true);
    expect(client.views[0].segment.name).toEqual('Logon');
    expect(client.views[1].segment.name).toEqual('Reject');
    expect(server.views[0].segment.name).toEqual('Logon');
    expect(server.views[1].segment.name).toEqual('unknown');
    const reject = client.views[1].toObject();
    expect(reject.SessionRejectReason === enum_1.SessionRejectReason.InvalidMsgType);
    expect(reject.Text).toEqual('msgType ZZ unknown');
}), 10000);
test('heartbeat invalid tag', () => __awaiter(this, void 0, void 0, function* () {
    const at = client.transport.transmitter;
    const changed = heartbeat.replace('112=', '999=').replace('34=1', `34=${at.msgSeqNum + 1}`);
    yield runSkeletons(2, changed);
    expect(client.views.length === 3).toEqual(true);
    expect(server.views.length === 3).toEqual(true);
    expect(client.views[0].segment.name).toEqual('Logon');
    expect(client.views[1].segment.name).toEqual('Reject');
    expect(server.views[0].segment.name).toEqual('Logon');
    expect(server.views[1].segment.name).toEqual('Heartbeat');
    const reject = client.views[1].toObject();
    expect(reject.SessionRejectReason === enum_1.SessionRejectReason.InvalidTagNumber);
    checkSeqNos(client.views);
    checkSeqNos(server.views);
}), 10000);
test('heartbeat invalid sender comp', () => __awaiter(this, void 0, void 0, function* () {
    const at = client.transport.transmitter;
    const changed = heartbeat.replace('49=init-comp', '49=init-not!').replace('34=1', `34=${at.msgSeqNum + 1}`);
    yield runSkeletons(2, changed);
    expect(client.views.length === 3).toEqual(true);
    expect(server.views.length === 3).toEqual(true);
    expect(client.views[0].segment.name).toEqual('Logon');
    expect(client.views[1].segment.name).toEqual('Reject');
    expect(server.views[0].segment.name).toEqual('Logon');
    expect(server.views[1].segment.name).toEqual('Heartbeat');
    const reject = client.views[1].toObject();
    expect(reject.SessionRejectReason === enum_1.SessionRejectReason.CompIDProblem);
    checkSeqNos(client.views);
    checkSeqNos(server.views);
}), 10000);
test('client heartbeats to server', () => __awaiter(this, void 0, void 0, function* () {
    const preset = client.config.description.HeartBtInt;
    client.config.description.HeartBtInt = 2;
    yield runSkeletons(6);
    expect(client.views.length === 2).toEqual(true);
    expect(server.views.length > 2).toEqual(true);
    const serverReceivesHeartbeats = countOfType('Heartbeat', server.views);
    expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true);
    checkSeqNos(client.views);
    checkSeqNos(server.views);
    client.config.description.HeartBtInt = preset;
}), 10000);
test('server heartbeats to client', () => __awaiter(this, void 0, void 0, function* () {
    const preset = server.config.description.HeartBtInt;
    server.config.description.HeartBtInt = 2;
    yield runSkeletons(6);
    expect(server.views.length === 2).toEqual(true);
    expect(client.views.length > 2).toEqual(true);
    const clientReceivesHeartbeats = countOfType('Heartbeat', client.views);
    expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true);
    checkSeqNos(client.views);
    checkSeqNos(server.views);
    server.config.description.HeartBtInt = preset;
}), 10000);
test('client server heartbeat', () => __awaiter(this, void 0, void 0, function* () {
    const preset = server.config.description.HeartBtInt;
    server.config.description.HeartBtInt = 2;
    client.config.description.HeartBtInt = 2;
    yield runSkeletons(6);
    expect(server.views.length > 2).toEqual(true);
    expect(client.views.length > 2).toEqual(true);
    const clientReceivesHeartbeats = countOfType('Heartbeat', client.views);
    const serverReceivesHeartbeats = countOfType('Heartbeat', server.views);
    expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true);
    expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true);
    checkSeqNos(client.views);
    checkSeqNos(server.views);
    server.config.description.HeartBtInt = preset;
    client.config.description.HeartBtInt = preset;
}), 10000);
//# sourceMappingURL=session.test.js.map