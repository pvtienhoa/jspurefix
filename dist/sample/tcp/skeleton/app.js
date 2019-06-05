"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launcher_1 = require("../../launcher");
const skeleton_session_1 = require("./skeleton-session");
const tcp_1 = require("../../../transport/tcp");
class AppLauncher extends launcher_1.Launcher {
    constructor() {
        super('data/session/test-initiator.json', 'data/session/test-acceptor.json');
    }
    getAcceptor(config) {
        return tcp_1.acceptor(config, c => new skeleton_session_1.SkeletonSession(c));
    }
    getInitiator(config) {
        return tcp_1.initiator(config, c => new skeleton_session_1.SkeletonSession(c));
    }
}
const l = new AppLauncher();
l.run().then(() => {
    console.log('finished.');
});
//# sourceMappingURL=app.js.map