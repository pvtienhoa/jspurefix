"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trade_capture_client_1 = require("./trade-capture-client");
const trade_capture_server_1 = require("./trade-capture-server");
const launcher_1 = require("../../launcher");
const tcp_1 = require("../../../transport/tcp");
class AppLauncher extends launcher_1.Launcher {
    constructor() {
        super('data/session/test-initiator.json', 'data/session/test-acceptor.json');
    }
    getAcceptor(config) {
        return tcp_1.acceptor(config, c => new trade_capture_server_1.TradeCaptureServer(c));
    }
    getInitiator(config) {
        return tcp_1.initiator(config, c => new trade_capture_client_1.TradeCaptureClient(c));
    }
}
const l = new AppLauncher();
l.run().then(() => {
    console.log('finished.');
});
//# sourceMappingURL=app.js.map