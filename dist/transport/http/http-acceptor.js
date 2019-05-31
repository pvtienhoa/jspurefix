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
const msg_transport_1 = require("../msg-transport");
const fix_acceptor_1 = require("../fix-acceptor");
const duplex_1 = require("../duplex");
const collections_1 = require("../../collections");
const express = require("express");
const bodyParser = require("body-parser");
class HttpAcceptor extends fix_acceptor_1.FixAcceptor {
    constructor(config) {
        super(config.description.application);
        this.config = config;
        this.app = express();
        this.nextId = 0;
        this.keys = new collections_1.Dictionary();
        this.logger = config.logFactory.logger(`${config.description.application.name}:HttpAcceptor`);
        this.logger.info('creating http server');
        this.router = express.Router();
        this.router.use(bodyParser.json());
        this.subscribe();
        this.app.use('/', this.router);
    }
    listen() {
        const app = this.config.description.application;
        const port = app.http.port;
        const logger = this.logger;
        logger.info(`start to listen ${port}`);
        this.server = this.app.listen(port, () => {
            logger.info(`app listening at http://localhost:${port}${app.http.uri}`);
        });
        this.server.on('error', ((err) => {
            logger.error(err);
            this.emit('error', err);
        }));
    }
    close(cb) {
        const app = this.config.description.application;
        const port = app.http.port;
        this.logger.info(`close listener on port ${port}`);
        this.server.close(cb);
    }
    saveTransport(tid, transport) {
        const uuidv3 = require('uuid/v3');
        this.transports[tid] = transport;
        const app = this.config.description.application;
        const keys = Object.keys(this.transports);
        const a = uuidv3(app.http.uri, uuidv3.URL);
        this.keys.addUpdate(a, transport);
        this.logger.info(`new transport id = ${tid} token = ${a} created total transports = ${keys.length}`);
        this.emit('transport', transport);
        return a;
    }
    harvestTransport(token, tid) {
        delete this.transports[tid];
        this.keys.remove(token);
        const keys = Object.keys(this.transports);
        this.logger.info(`transport ${tid} ends total transports = ${keys.length}`);
    }
    respond(duplex, res, token = null) {
        return new Promise((accept, reject) => {
            res.setHeader('Content-Type', 'application/json');
            const timer = setTimeout(() => {
                const businessReject = `<FIXML><BizMsgRej BizRejRsn="4" Txt="no response from application"/></FIXML>`;
                const b = Buffer.from(businessReject, 'utf-8');
                duplex.writable.removeListener('data', transmit);
                res.send(b);
                reject(new Error('no response'));
            }, 5000);
            const transmit = (d) => {
                this.logger.info('responding to request');
                clearTimeout(timer);
                if (token) {
                    res.setHeader('authorization', token);
                }
                duplex.writable.removeListener('data', transmit);
                res.send(d);
                accept();
            };
            duplex.writable.on('data', transmit);
        });
    }
    logon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const id = this.nextId++;
            this.logger.info(JSON.stringify(body, null, 4));
            const d = new duplex_1.StringDuplex();
            const transport = new msg_transport_1.MsgTransport(id, this.config, d);
            const token = this.saveTransport(id, transport);
            this.respond(d, res, token).then(() => {
                this.logger.info('responded to logon');
            }).catch((e) => {
                this.logger.error(e);
            });
            d.readable.push(body.fixml);
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = req.headers;
            const body = req.body;
            const t = this.keys.get(headers.authorization);
            if (t) {
                const token = req.headers.authorization;
                this.harvestTransport(token, t.id);
                const d = t.duplex;
                this.respond(d, res, token).then(() => {
                    this.logger.info('responded to logout');
                    t.end();
                }).catch((e) => {
                    this.logger.error(e);
                });
                d.readable.push(body.fixml);
            }
        });
    }
    subscribe() {
        const router = this.router;
        const app = this.config.description.application;
        const root = app.http.uri;
        const authorise = `${root}authorise`;
        const query = `${root}query`;
        this.logger.info(`uri: authorise ${authorise}, query ${query}`);
        router.post(authorise, (req, res) => {
            if (!req.headers.authorization) {
                this.logger.info('logon');
                this.logon(req, res);
            }
            else {
                this.logger.info('logout');
                this.logout(req, res);
            }
        });
        router.get(query, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const headers = req.headers;
            const body = req.body;
            const t = this.keys.get(headers.authorization);
            if (!t) {
                this.logger.info(`received request with no token`);
                res.send({
                    error: 'no key with query'
                });
            }
            else {
                const d = t.duplex;
                this.respond(d, res).then(() => {
                    this.logger.info(`responded to ${req.url}`);
                });
                d.readable.push(body.fixml);
            }
        }));
    }
}
exports.HttpAcceptor = HttpAcceptor;
//# sourceMappingURL=http-acceptor.js.map