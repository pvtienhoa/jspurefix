"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_server_1 = require("./http-server");
const http_client_1 = require("./http-client");
const launcher_1 = require("../../launcher");
const http_1 = require("../../../transport/http");
const fixml_1 = require("../../../transport/fixml");
class AppLauncher extends launcher_1.Launcher {
    constructor() {
        super('data/session/test-http-initiator.json', 'data/session/test-http-acceptor.json');
    }
    getAcceptor(config) {
        return fixml_1.acceptor(config, (c) => new http_server_1.HttpServer(c));
    }
    getInitiator(config) {
        config.description.application.http.adapter = new http_1.HttpJsonSampleAdapter(config);
        return http_1.httpInitiator(config, (c) => new http_client_1.HttpClient(c));
    }
}
const l = new AppLauncher();
l.run().then(() => {
    console.log('finished.');
});
//# sourceMappingURL=app.js.map