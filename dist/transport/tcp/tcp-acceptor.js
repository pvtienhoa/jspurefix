"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const duplex_1 = require("../duplex");
const msg_transport_1 = require("../msg-transport");
const fix_acceptor_1 = require("../fix-acceptor");
class TcpAcceptor extends fix_acceptor_1.FixAcceptor {
    constructor(config) {
        super(config.description.application);
        this.config = config;
        this.logger = config.logFactory.logger(`${config.description.application.name}:TcpAcceptor`);
        let nextId = 0;
        this.logger.info('creating server');
        this.server = net.createServer((socket) => {
            socket.setNoDelay(true);
            const id = nextId++;
            const transport = new msg_transport_1.MsgTransport(id, config, new duplex_1.TcpDuplex(socket));
            this.saveTransport(id, transport);
            transport.receiver.on('end', () => {
                this.harvestTransport(id);
            });
            transport.receiver.on('error', (e) => {
                this.logger.error(e);
                this.harvestTransport(id);
            });
        });
        this.server.on('error', ((err) => {
            throw err;
        }));
    }
    listen() {
        const port = this.config.description.application.tcp.port;
        this.logger.info(`start to listen ${port}`);
        this.server.listen(port);
    }
    close(cb) {
        const port = this.config.description.application.tcp.port;
        this.logger.info(`close listener on port ${port}`);
        this.server.close(cb);
    }
    saveTransport(tid, transport) {
        this.transports[tid] = transport;
        const keys = Object.keys(this.transports);
        this.logger.info(`new transport id = ${tid} created total transports = ${keys.length}`);
        this.emit('transport', transport);
    }
    harvestTransport(tid) {
        delete this.transports[tid];
        const keys = Object.keys(this.transports);
        this.logger.info(`transport ${tid} ends total transports = ${keys.length}`);
    }
}
exports.TcpAcceptor = TcpAcceptor;
//# sourceMappingURL=tcp-acceptor.js.map