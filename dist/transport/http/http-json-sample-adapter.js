"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_transaction_1 = require("./http-transaction");
const collections_1 = require("../../collections");
class HttpJsonSampleAdapter {
    constructor(config) {
        this.config = config;
        this.queue = [];
        this.token = null;
        this.routes = new collections_1.Dictionary();
        this.logger = config.logFactory.logger('http.adapter');
        const routes = this.routes;
        const options = config.description.application.http.options;
        if (!options) {
            return;
        }
        options.forEach((o) => {
            routes.addUpdate(o.name, o);
        });
        this.logger.info(`instance created routes ${routes.count()}`);
    }
    getOptions(data) {
        const q = this.queue;
        if (q.length === 0) {
            return null;
        }
        const next = q.shift();
        const options = next.options;
        options.body = {
            fixml: data.toString()
        };
        this.logger.info(`${next.msgType}: ${next.options.method} ${next.options.uri} ${data.length}`);
        return options;
    }
    endMessage(m) {
        if (!this.token) {
            const headers = m.headers;
            this.token = headers.authorization;
            this.logger.info(`receive token ${this.token}`);
        }
        return m.body;
    }
    beginMessage(msgType) {
        const routes = this.routes;
        const route = routes.get(msgType) || routes.get('default');
        const options = {
            method: route.value.method,
            uri: route.value.uri,
            json: route.value.json,
            resolveWithFullResponse: route.value.resolveWithFullResponse,
            headers: route.value.headers
        };
        const headers = options.headers;
        if (headers) {
            if (this.token) {
                headers.authorization = this.token;
            }
            else if (msgType === 'UserReq') {
                delete headers.authorization;
            }
        }
        this.queue.push(new http_transaction_1.HttpTransaction(msgType, options));
    }
}
exports.HttpJsonSampleAdapter = HttpJsonSampleAdapter;
//# sourceMappingURL=http-json-sample-adapter.js.map