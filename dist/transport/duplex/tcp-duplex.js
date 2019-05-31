"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fix_duplex_1 = require("./fix-duplex");
class TcpDuplex extends fix_duplex_1.FixDuplex {
    constructor(socket) {
        super();
        this.socket = socket;
        this.readable = socket;
        this.writable = socket;
    }
    end() {
        this.socket.end();
    }
}
exports.TcpDuplex = TcpDuplex;
//# sourceMappingURL=tcp-duplex.js.map