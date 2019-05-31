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
const path = require("path");
const buffer_1 = require("../buffer");
const transport_1 = require("../transport");
const config_1 = require("../config");
const util_1 = require("../util");
const root = path.join(__dirname, '../../data');
let definitions;
let session;
let encoder;
let nos;
let er;
const localDate = new Date(2018, 6, 25);
const utcTimeStamp = new Date(Date.UTC(2018, 5, 10, 16, 35, 0, 246));
const utcDate = new Date(Date.UTC(2018, 5, 10, 0, 0, 0, 0));
const utcTime = new Date(Date.UTC(2018, 0, 1, 16, 35, 0, 246));
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/qf-fix44.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    const config = new config_1.JsFixConfig(null, definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
    session = new transport_1.AsciiMsgTransmitter(config);
    encoder = new buffer_1.AsciiEncoder(session.buffer, definitions, new buffer_1.TimeFormatter(session.buffer), buffer_1.AsciiChars.Pipe);
    nos = definitions.message.get('NewOrderSingle');
    er = definitions.message.get('ExecutionReport');
}), 45000);
test('expect a definition ', () => {
    expect(nos).toBeTruthy();
});
function toFix(o, set) {
    session.buffer.reset();
    if (set) {
        encoder.encode(o, set.name);
    }
    else {
        encoder.encode(o, nos.name);
    }
    return session.buffer.toString();
}
test('encode string ClOrdID ', () => {
    const no = {};
    no.ClOrdID = 'Order-a';
    const fix = toFix(no);
    expect(fix).toEqual('11=Order-a|');
});
test('encode empty string', () => {
    const no = {};
    no.ClOrdID = '';
    const fix = toFix(no);
    expect(fix).toEqual('11=|');
});
test('encode null string', () => {
    const no = {};
    no.ClOrdID = null;
    const fix = toFix(no);
    expect(fix).toEqual('');
});
test('encode +ve numeric (int) Price ', () => {
    const no = {};
    no.Price = 100;
    const fix = toFix(no);
    expect(fix).toEqual('44=100|');
});
test('encode -ve numeric (int) Price ', () => {
    const no = {};
    no.Price = -100;
    const fix = toFix(no);
    expect(fix).toEqual('44=-100|');
});
test('encode +ve numeric (double 8dp) Price ', () => {
    const no = {};
    no.Price = 123.12345678;
    const fix = toFix(no);
    expect(fix).toEqual('44=123.12345678|');
});
test('encode +ve numeric (double 14dp) Price ', () => {
    const no = {};
    no.Price = 123.12345678901234;
    const fix = toFix(no);
    expect(fix).toEqual('44=123.12345678901234|');
});
test('encode -ve numeric (double 14dp) Price ', () => {
    const no = {};
    no.Price = -123.12345678901234;
    const fix = toFix(no);
    expect(fix).toEqual('44=-123.12345678901234|');
});
test('encode +ve string Price ', () => {
    const no = {};
    no.Price = '123.12345678901234';
    const fix = toFix(no);
    expect(fix).toEqual('44=123.12345678901234|');
});
test('encode LocalDate TradeDate ', () => {
    const no = {};
    no.TradeDate = localDate;
    const fix = toFix(no);
    expect(fix).toEqual('75=20180725|');
});
test('encode UTCTIMESTAMP ExpireTime ', () => {
    const no = {};
    no.ExpireTime = utcTimeStamp;
    const fix = toFix(no);
    expect(fix).toEqual('126=20180610-16:35:00.246|');
});
test('encode UTCTIMESTAMP ExpireTime - check padding', () => {
    const no = {};
    no.ExpireTime = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 1));
    const fix = toFix(no);
    expect(fix).toEqual('126=20180101-00:00:00.001|');
});
test('encode UTCDATEONLY MDEntryDate', () => {
    const mdGrp = definitions.component.get('MDFullGrp');
    expect(mdGrp).toBeTruthy();
    const grp = {
        NoMDEntries: [
            {
                MDEntryType: '0',
                MDEntryDate: utcDate
            }
        ]
    };
    const fix = toFix(grp, mdGrp);
    expect(fix).toEqual('268=1|269=0|272=20180610|');
});
test('encode UTCTIMEONLY MDEntryTime', () => {
    const mdGrp = definitions.component.get('MDFullGrp');
    expect(mdGrp).toBeTruthy();
    const grp = {
        NoMDEntries: [
            {
                MDEntryType: '0',
                MDEntryTime: utcTime
            }
        ]
    };
    const fix = toFix(grp, mdGrp);
    expect(fix).toEqual('268=1|269=0|273=16:35:00.246|');
});
test('encode BOOLEAN (true) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = true;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=Y|');
});
test('encode BOOLEAN (truthy) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = 1;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=Y|');
});
test('encode BOOLEAN (string) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = 'TRUE';
    const fix = toFix(e, er);
    expect(fix).toEqual('113=Y|');
});
test('encode BOOLEAN (false) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = false;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=N|');
});
test('encode BOOLEAN (falsy) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = 0;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=N|');
});
test('encode RawData EncodedText', () => {
    expect(er).toBeTruthy();
    const toEncode = 'this is fix';
    const e = {
        EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
    };
    const fix = toFix(e, er);
    expect(fix).toEqual('354=11|355=this is fix|');
});
test('encode empty RawData EncodedText', () => {
    expect(er).toBeTruthy();
    const toEncode = '';
    const e = {
        EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
    };
    const fix = toFix(e, er);
    expect(fix).toEqual('354=0|355=|');
});
function getParties() {
    return {
        'Parties': {
            'NoPartyIDs': [
                {
                    'PartyID': 'magna.',
                    'PartyIDSource': '9',
                    'PartyRole': 28
                },
                {
                    'PartyID': 'iaculis',
                    'PartyIDSource': 'F',
                    'PartyRole': 2
                }
            ]
        }
    };
}
function getPartiesNoDelimiter() {
    return {
        'Parties': {
            'NoPartyIDs': [
                {
                    'PartyIDSource': '9',
                    'PartyRole': 28
                }
            ]
        }
    };
}
test('encode repeated group of simple repository Parties', () => {
    expect(er).toBeTruthy();
    const e = getParties();
    const fix = toFix(e, er);
    expect(fix).toEqual('453=2|448=magna.|447=9|452=28|448=iaculis|447=F|452=2|');
});
test('encode repeated group with no delimiter - should throw', () => {
    expect(er).toBeTruthy();
    const e = getPartiesNoDelimiter();
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/no delimiter/);
});
test('encode repeated group with no array - should throw', () => {
    expect(er).toBeTruthy();
    const e = {
        'Parties': {
            'NoPartyIDs': 'should be an array'
        }
    };
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/expected array/);
});
test('encode repeated group with empty array', () => {
    expect(er).toBeTruthy();
    const e = {
        'Parties': {
            'NoPartyIDs': []
        }
    };
    expect(toFix(e, er)).toEqual('453=0|');
});
function getInstrument() {
    return {
        'Instrument': {
            'Symbol': 'ac,',
            'SymbolSfx': 'non',
            'SecurityID': 'Pellentesque',
            'SecurityIDSource': 'B',
            'Product': 2
        }
    };
}
function getInstrumentNestedGroup() {
    return {
        'Instrument': {
            'Symbol': 'ac,',
            'SymbolSfx': 'non',
            'SecurityID': 'Pellentesque',
            'SecurityIDSource': 'B',
            'SecAltIDGrp': {
                'NoSecurityAltID': [
                    {
                        'SecurityAltID': 'lorem',
                        'SecurityAltIDSource': 'consequat'
                    },
                    {
                        'SecurityAltID': 'sapien',
                        'SecurityAltIDSource': 'tempor'
                    }
                ]
            },
            'Product': 2
        }
    };
}
test('encode component', () => {
    expect(er).toBeTruthy();
    const e = getInstrument();
    expect(toFix(e, er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|460=2|');
});
test('encode component nested group', () => {
    expect(er).toBeTruthy();
    const e = getInstrumentNestedGroup();
    expect(toFix(e, er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|454=2|455=lorem|456=consequat|455=sapien|456=tempor|460=2|');
});
test('encode group missing delimiter', () => {
    expect(er).toBeTruthy();
    const e = getInstrumentNestedGroup();
    delete e.Instrument.SecAltIDGrp.NoSecurityAltID[0]['SecurityAltID'];
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/group instance with no delimiter field SecurityAltID/);
});
test('encode group not an array of', () => {
    expect(er).toBeTruthy();
    const e = {
        'Instrument': {
            'Symbol': 'ac,',
            'SymbolSfx': 'non',
            'SecurityID': 'Pellentesque',
            'SecurityIDSource': 'B',
            'SecAltIDGrp': {
                'NoSecurityAltID': {
                    elements: []
                }
            },
            'Product': 2
        }
    };
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/expected array instance for group NoSecurityAltID/);
});
//# sourceMappingURL=ascii-encode.test.js.map