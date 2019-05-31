"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ascii_chars_1 = require("./ascii-chars");
class ElasticBuffer {
    constructor(size = 6 * 1024, returnTo = 6 * 1024) {
        this.size = size;
        this.returnTo = returnTo;
        this.ptr = 0;
        this.size = Math.max(1, this.size);
        this.buffer = Buffer.allocUnsafe(this.size);
        this.returnTo = Math.max(this.size, this.returnTo);
        this.stretched = this.size;
    }
    static precisionRound(n, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(n * factor) / factor;
    }
    static HowManyDigits(v) {
        v = Math.abs(v);
        let digits = 0;
        let w = v;
        while (w > 0) {
            ++digits;
            w = Math.floor(w / 10);
        }
        return Math.max(digits, 1);
    }
    currentSize() {
        return this.stretched;
    }
    getPos() {
        return this.ptr;
    }
    get(pos) {
        return this.buffer[pos];
    }
    writeBoolean(v) {
        this.writeChar(v ? ascii_chars_1.AsciiChars.Y : ascii_chars_1.AsciiChars.N);
        return this.ptr;
    }
    switchChar(c) {
        this.buffer[this.ptr - 1] = c;
        return this.ptr;
    }
    saveChar(c) {
        this.buffer[this.ptr++] = c;
        return this.ptr;
    }
    writeChar(c) {
        if (c > 255)
            throw new Error(`can't write ${c} to a byte`);
        this.checkGrowBuffer(1);
        this.buffer[this.ptr++] = c;
        return this.ptr;
    }
    writeString(s) {
        const begin = this.ptr;
        this.checkGrowBuffer(s.length);
        const buffer = this.buffer;
        this.ptr += buffer.write(s, begin, s.length, 'ascii');
        return this.ptr;
    }
    writeBuffer(v) {
        const begin = this.ptr;
        this.checkGrowBuffer(v.length);
        const buffer = this.buffer;
        const srcLen = v.length;
        this.ptr += v.copy(buffer, begin, 0, srcLen);
        return this.ptr;
    }
    writeWholeNumber(n) {
        const digits = ElasticBuffer.HowManyDigits(n);
        let reserve = digits;
        const sign = Math.sign(n);
        let p = Math.pow(10, digits - 1);
        let v = Math.abs(n);
        if (sign < 0) {
            reserve++;
        }
        this.checkGrowBuffer(reserve);
        const buffer = this.buffer;
        if (sign < 0) {
            buffer[this.ptr++] = ascii_chars_1.AsciiChars.Minus;
        }
        while (p >= 1) {
            const d = Math.floor(v / p);
            v -= d * p;
            p /= 10;
            buffer[this.ptr++] = ascii_chars_1.AsciiChars.Zero + d;
        }
        return this.ptr;
    }
    writeNumber(v, places = 13) {
        const rounded = Math.floor(v);
        const fraction = ElasticBuffer.precisionRound(v - rounded, places);
        if (fraction === 0) {
            return this.writeWholeNumber(v);
        }
        else {
            const math = require('mathjs');
            const s = math.format(v, { notation: 'fixed' });
            return this.writeString(s);
        }
    }
    reset() {
        this.ptr = 0;
        const shrink = this.stretched > this.returnTo;
        if (shrink) {
            this.buffer = Buffer.allocUnsafe(this.returnTo);
            this.stretched = this.size;
        }
        return shrink;
    }
    slice() {
        return this.buffer.slice(0, this.ptr);
    }
    clone() {
        const cloned = new ElasticBuffer(this.ptr);
        this.buffer.copy(cloned.buffer, 0, 0, this.ptr);
        return cloned;
    }
    writePaddedHundreds(v) {
        if (v > 999)
            throw new Error(`can't write ${v} as hundreds padding`);
        this.checkGrowBuffer(3);
        const buffer = this.buffer;
        const zero = ascii_chars_1.AsciiChars.Zero;
        const units = v % 10 + zero;
        v = v / 10;
        const tens = v % 10 + zero;
        v = v / 10;
        buffer[this.ptr++] = v % 10 + zero;
        buffer[this.ptr++] = tens;
        buffer[this.ptr++] = units;
        return this.ptr;
    }
    writePaddedTensUnits(v) {
        if (v > 99)
            throw new Error(`can't write ${v} as hundreds padding`);
        this.checkGrowBuffer(2);
        const buffer = this.buffer;
        const zero = ascii_chars_1.AsciiChars.Zero;
        const units = v % 10 + zero;
        v = v / 10;
        buffer[this.ptr++] = v % 10 + zero;
        buffer[this.ptr++] = units;
        return this.ptr;
    }
    patchPaddedNumberAtPos(ptr, numToWrite, padding) {
        let digits = ElasticBuffer.HowManyDigits(numToWrite);
        const saved = this.ptr;
        this.ptr = ptr;
        const buffer = this.buffer;
        while (digits++ < padding) {
            buffer[this.ptr++] = ascii_chars_1.AsciiChars.Zero;
        }
        this.writeWholeNumber(numToWrite);
        this.ptr = saved;
    }
    toString(ptr = this.ptr) {
        return this.buffer.toString('ascii', 0, ptr);
    }
    checksum(ptr = this.ptr) {
        const cks = this.sum(ptr);
        return cks % 256;
    }
    sum(ptr = this.ptr) {
        let total = 0;
        ptr = Math.min(ptr, this.ptr);
        const buffer = this.buffer;
        for (let idx = 0; idx < ptr; idx++) {
            total += buffer[idx];
        }
        return total;
    }
    getWholeNumber(start, vend) {
        const buffer = this.buffer;
        let sign = 1;
        let raised = vend - start;
        switch (buffer[start]) {
            case ascii_chars_1.AsciiChars.Minus: {
                --raised;
                sign = -1;
                ++start;
                break;
            }
            case ascii_chars_1.AsciiChars.Plus: {
                --raised;
                ++start;
                break;
            }
        }
        let i = Math.pow(10, raised);
        let num = 0;
        let scan = start;
        while (scan <= vend) {
            const p = buffer[scan++];
            const d = p - ascii_chars_1.AsciiChars.Zero;
            num += d * i;
            i /= 10;
        }
        return num * sign;
    }
    getString(start, end) {
        return this.buffer.toString('ascii', start, end);
    }
    getBuffer(start, end) {
        return this.buffer.slice(start, end);
    }
    getBoolean(start) {
        const b = this.buffer[start];
        return b === ascii_chars_1.AsciiChars.Y;
    }
    getFloat(start, vend) {
        let n = 0;
        let digits = 0;
        let dotPosition = 0;
        const buffer = this.buffer;
        let sign = 1;
        switch (buffer[start]) {
            case ascii_chars_1.AsciiChars.Minus: {
                sign = -1;
                start++;
                break;
            }
            case ascii_chars_1.AsciiChars.Plus: {
                start++;
                break;
            }
        }
        const len = vend - start;
        let i = Math.pow(10, len - 1);
        for (let j = start; j <= vend; ++j) {
            const p = buffer[j];
            if (p >= ascii_chars_1.AsciiChars.Zero && p <= ascii_chars_1.AsciiChars.Nine) {
                const d = p - ascii_chars_1.AsciiChars.Zero;
                ++digits;
                n += d * i;
                i /= 10;
            }
            else if (p === ascii_chars_1.AsciiChars.Dot) {
                if (dotPosition > 0) {
                    return null;
                }
                dotPosition = j - start;
            }
            else if (digits > 0) {
                return null;
            }
        }
        const power = dotPosition === 0 ? 0 : len - dotPosition;
        const raised = dotPosition === 0 ? 10 : Math.pow(10, -1 * power);
        const round = dotPosition === 0 ? 1 : Math.pow(10, power);
        const val = n * raised * sign;
        return Math.round(val * round) / round;
    }
    checkGrowBuffer(required) {
        let buffer = this.buffer;
        let size = buffer.length;
        const ptr = this.ptr;
        if (size - ptr >= required) {
            return;
        }
        while (size - ptr < required) {
            size *= 2;
        }
        const old = buffer;
        buffer = Buffer.allocUnsafe(size);
        old.copy(buffer, 0, 0, this.ptr);
        this.buffer = buffer;
        this.stretched = size;
    }
}
exports.ElasticBuffer = ElasticBuffer;
//# sourceMappingURL=elastic-buffer.js.map