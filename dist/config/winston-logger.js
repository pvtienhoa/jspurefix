"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, printf, colorize } = format;
class WinstonLogger {
    constructor(options = WinstonLogger.consoleOptions()) {
        this.options = options;
        this.appLogger = createLogger(options);
    }
    static consoleOptions(level = 'debug') {
        return {
            format: combine(colorize(), timestamp(), WinstonLogger.appFormat),
            level: level,
            transports: [
                new transports.Console()
            ]
        };
    }
    static fileOptions(fileName, level = 'debug', maxSize = 50 * 1024 * 1024, format = combine(timestamp(), WinstonLogger.appFormat)) {
        return {
            format: format,
            level: level,
            transports: [
                new transports.File({
                    filename: fileName,
                    maxsize: maxSize
                })
            ]
        };
    }
    plain(fileName, maxSize = 100 * 1024 * 1024, haveTimeStamp = false, isZipped = true, maxFile = 7) {
        var trans = new (transports.DailyRotateFile)({
            filename: `${fileName}.%DATE%.log`,
            datePattern: 'YYYYMMDD',
            zippedArchive: isZipped,
            maxSize: maxSize,
            maxFiles: maxFile
        });
        var txtLogger;
        if (haveTimeStamp) {
            txtLogger = createLogger({
                format: combine(timestamp(), WinstonLogger.plainTimeStampFormat),
                level: 'info',
                transports: [
                    trans
                ]
            });
        }
        else {
            txtLogger = createLogger({
                format: WinstonLogger.plainFormat,
                level: 'info',
                transports: [
                    trans
                ]
            });
        }
        ;
        return {
            log: function (txt) {
                txtLogger.info({
                    type: 'info',
                    message: txt
                });
            },
            info: function (msg) {
                this.log(msg);
            },
            debug: function (msg) {
                this.log(msg);
            },
            warning: function (msg) {
                this.log(msg);
            },
            error: function () {
            }
        };
    }
    make(type) {
        const logger = this.appLogger;
        return {
            info: function (msg) {
                logger.info({
                    type: type,
                    message: msg
                });
            },
            debug: function (msg) {
                logger.debug({
                    type: type,
                    message: msg
                });
            },
            warning: function (msg) {
                logger.warn({
                    type: type,
                    message: msg
                });
            },
            error: function (e) {
                logger.error({
                    type: type,
                    message: `${e.message} : ${e.stack}`
                });
            }
        };
    }
}
WinstonLogger.appFormat = printf((info) => {
    return `${info.timestamp} [${info.type}] ${info.level}: ${info.message}`;
});
WinstonLogger.plainTimeStampFormat = printf((info) => {
    return `${info.timestamp} - ${info.message}`;
});
WinstonLogger.plainFormat = printf((info) => {
    return `${info.message}`;
});
exports.WinstonLogger = WinstonLogger;
//# sourceMappingURL=winston-logger.js.map