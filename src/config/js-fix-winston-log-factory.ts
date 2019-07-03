import { IJsFixLogger } from './js-fix-logger'
import { WinstonLogger } from './winston-logger'
import { JsFixLoggerFactory } from './js-fix-logger-factory'

export class JsFixWinstonLogFactory extends JsFixLoggerFactory {
  private wl: WinstonLogger

  constructor(public readonly options: any = WinstonLogger.consoleOptions()) {
    super()
    this.wl = new WinstonLogger(options)
  }

  public logger(type: string): IJsFixLogger {
    return this.wl.make(type)
  }
  public plain(fileName: string, maxSize?: number, haveTimeStamp?: boolean, isZipped?: boolean, maxFile?: string, dirName?: string): IJsFixLogger {
    return this.wl.plain(fileName, maxSize, haveTimeStamp, isZipped, maxFile, dirName)
  }
}
