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
let proxyFactory;
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/qf-fix44.json'));
    definitions = yield util_1.getDefinitions(sessionDescription.application.dictionary);
    const config = new config_1.JsFixConfig(null, definitions, sessionDescription, buffer_1.AsciiChars.Pipe);
    session = new transport_1.AsciiMsgTransmitter(config);
    proxyFactory = new buffer_1.EncodeProxy(definitions);
}), 45000);
test('check wrapper will reject unknown field', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.Unknown = 999;
    }
    expect(run).toThrow(/no field named Unknown/);
});
test('check wrapper will accept known field', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.OrderID = 'ipsum';
    }
    run();
    expect(proxy.OrderID).toEqual('ipsum');
});
test('check wrapper rejects unknown enum value', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.SettlType = '23';
    }
    expect(run).toThrow(/enum field SettlType does not support "23"/);
});
test('check wrapper will accept known enum field', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.SettlType = '1';
    }
    run();
    expect(proxy.SettlType).toEqual('1');
});
test('check wrapper rejects Date field when not given Date', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.SettlDate = "I'm not a good date";
    }
    expect(run).toThrow(/expects Date but receives/);
});
test('check wrapper will accept Date field when given Date', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.SettlDate = new Date();
    }
    run();
    expect(proxy.SettlDate).toBeTruthy();
});
test('check wrapper rejects boolean field when not given boolean', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.LastRptRequested = "I'm not a good boolean";
    }
    expect(run).toThrow(/expects boolean but receives/);
});
test('check wrapper will accept boolean field when given boolean', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.LastRptRequested = true;
    }
    run();
    expect(proxy.LastRptRequested).toEqual(true);
});
test('check wrapper rejects Buffer field when not given Buffer', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.EncodedText = "I'm not a Buffer, don't accept me!";
    }
    expect(run).toThrow(/expects Buffer but receives/);
});
test('check wrapper will accept Buffer field when given Buffer', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.EncodedText = new Buffer('I am a buffer.', 'utf8');
    }
    run();
    expect(proxy.EncodedText).toBeTruthy();
});
test('check wrapper rejects string field when not given string', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.ClOrdID = 123;
    }
    expect(run).toThrow(/expects string but receives/);
});
test('check wrapper will accept string field when given string', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.ClOrdID = "I'm a great string";
    }
    run();
    expect(proxy.ClOrdID).toEqual("I'm a great string");
});
test('check wrapper rejects number field when not given number', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.GrossTradeAmt = "I'm no number";
    }
    expect(run).toThrow(/expects number but receives/);
});
test('check wrapper will accept number field when given number', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.GrossTradeAmt = 12234;
    }
    run();
    expect(proxy.GrossTradeAmt).toEqual(12234);
});
test('check wrapper rejects non object field when assigning component', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.Parties = 'I should be an object, but I am sadly not';
    }
    expect(run).toThrow(/is a component but/);
});
test('check wrapper accepts object field when assigning component', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.Parties = {};
    }
    run();
    expect(proxy.Parties).toBeTruthy();
});
test('check wrapper when assigned component wraps so it can be checked.', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.YieldData = {};
    }
    run();
    function run2() {
        proxy.YieldData.GrossTradeAmt = 999;
    }
    expect(run2).toThrow(/no field named GrossTradeAmt/);
    proxy.YieldData.YieldCalcDate = new Date();
    expect(proxy.YieldData).toBeTruthy();
});
test('check wrapper when given populated component.', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.YieldData = {
            ClOrdID: "I don't belong here."
        };
    }
    expect(run).toThrow(/no field named ClOrdID/);
});
test('check wrapper accepts number for group field and wraps n elements', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.Parties = {
            NoPartyIDs: 2
        };
    }
    run();
    expect(proxy.Parties).toBeTruthy();
    expect(Array.isArray(proxy.Parties.NoPartyIDs)).toEqual(true);
    expect(proxy.Parties.NoPartyIDs.length).toEqual(2);
    proxy.Parties.NoPartyIDs[0].PartyID = 'hello';
    expect(proxy.Parties.NoPartyIDs[0].PartyID).toBeTruthy();
    function run2() {
        proxy.Parties.NoPartyIDs[0].GrossTradeAmt = 999;
    }
    expect(run2).toThrow(/no field named GrossTradeAmt/);
});
test('check wrapper accepts array of objects in group component', () => {
    const proxy = proxyFactory.wrap('ExecutionReport');
    expect(proxy).toBeTruthy();
    function run() {
        proxy.Parties = {
            NoPartyIDs: getParties()
        };
    }
    run();
    function run2() {
        proxy.Parties.NoPartyIDs[0].GrossTradeAmt = 999;
    }
    expect(run2).toThrow(/no field named GrossTradeAmt/);
});
function getParties() {
    return [
        {
            'PartyID': 'magna.',
            'PartyIDSource': '9',
            'PartyRole': 28,
            'PtysSubGrp': {
                'NoPartySubIDs': [
                    {
                        'PartySubID': 'et',
                        'PartySubIDType': 22
                    },
                    {
                        'PartySubID': 'leo,',
                        'PartySubIDType': 10
                    }
                ]
            }
        },
        {
            'PartyID': 'iaculis',
            'PartyIDSource': 'F',
            'PartyRole': 2,
            'PtysSubGrp': {
                'NoPartySubIDs': [
                    {
                        'PartySubID': 'Nullam',
                        'PartySubIDType': 12
                    },
                    {
                        'PartySubID': 'lectus,',
                        'PartySubIDType': 13
                    },
                    {
                        'PartySubID': 'eget',
                        'PartySubIDType': 18
                    }
                ]
            }
        },
        {
            'PartyID': 'vitae,',
            'PartyIDSource': '9',
            'PartyRole': 5,
            'PtysSubGrp': {
                'NoPartySubIDs': [
                    {
                        'PartySubID': 'ac',
                        'PartySubIDType': 6
                    }
                ]
            }
        }
    ];
}
//# sourceMappingURL=encode-proxy.test.js.map