(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ka = {};

    function ma(a, b) {
        var c = ka[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function na(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ka[d] && (a = 1E9 * Math.random() >>> 0, ka[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ka[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var pa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        qa;
    if (da && "function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var ua = {
                    a: !0
                },
                va = {};
            try {
                va.__proto__ = ua;
                ra = va.a;
                break a
            } catch (a) {}
            ra = !1
        }
        qa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var xa = qa;

    function ya(a, b) {
        a.prototype = pa(b.prototype);
        a.prototype.constructor = a;
        if (xa) xa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Xf = b.prototype
    }
    na("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ya(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    na("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var t = this || self;

    function Aa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ba(a) {
        var b = Aa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Da(a) {
        return Object.prototype.hasOwnProperty.call(a, Ea) && a[Ea] || (a[Ea] = ++Fa)
    }
    var Ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Fa = 0;

    function Ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ja(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function La(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? La = Ia : La = Ja;
        return La.apply(null, arguments)
    }

    function Ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Na() {
        return Date.now()
    }

    function Oa(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ra(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Xf = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Uj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Sa(a) {
        return a
    };
    var Ta = {
        aj: 0,
        Zi: 1,
        Yi: 2
    };

    function Ua(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ra(Ua, Error);
    Ua.prototype.name = "CustomError";
    var Va;

    function Wa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ua.call(this, c + a[d])
    }
    Ra(Wa, Ua);
    Wa.prototype.name = "AssertionError";

    function Xa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ya(a) {
        if (!Za.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ab, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(bb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(cb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(db, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(eb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;"));
        return a
    }
    var ab = /&/g,
        bb = /</g,
        cb = />/g,
        db = /"/g,
        eb = /'/g,
        fb = /\x00/g,
        Za = /[\x00&<>"']/;

    function gb(a, b) {
        return -1 != a.indexOf(b)
    }

    function hb(a, b) {
        let c = 0;
        a = Xa(String(a)).split(".");
        b = Xa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = jb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || jb(0 == e[2].length, 0 == f[2].length) || jb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function jb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function kb() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function u(a) {
        return gb(kb(), a)
    };

    function lb() {
        return u("Opera")
    }

    function mb() {
        return u("Trident") || u("MSIE")
    }

    function nb() {
        return u("Firefox") || u("FxiOS")
    }

    function ob() {
        return u("Safari") && !(pb() || u("Coast") || lb() || u("Edge") || u("Edg/") || u("OPR") || nb() || u("Silk") || u("Android"))
    }

    function pb() {
        return (u("Chrome") || u("CriOS")) && !u("Edge") || u("Silk")
    }

    function qb() {
        return u("Android") && !(pb() || nb() || lb() || u("Silk"))
    }

    function rb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function sb() {
        var a = kb();
        if (mb()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = rb(b);
        return lb() ? a(["Version", "Opera"]) :
            u("Edge") ? a(["Edge"]) : u("Edg/") ? a(["Edg"]) : u("Silk") ? a(["Silk"]) : pb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function tb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function ub(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function vb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function xb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function yb(a, b, c) {
        let d = c;
        ub(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function zb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ab(a, b) {
        return 0 <= tb(a, b)
    }

    function Bb(a, b) {
        b = tb(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Cb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Db(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Eb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Fb(a, b) {
        if (!Ba(a) || !Ba(b) || a.length != b.length) return !1;
        const c = a.length,
            d = Gb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function Gb(a, b) {
        return a === b
    }

    function Hb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Hb.apply(null, Eb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Ib(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Jb(a) {
        Jb[" "](a);
        return a
    }
    Jb[" "] = function() {};

    function Kb(a, b) {
        try {
            return Jb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Lb(a, b) {
        var c = Mb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Nb = lb(),
        Ob = mb(),
        Pb = u("Edge"),
        Qb = Pb || Ob,
        Rb = u("Gecko") && !(gb(kb().toLowerCase(), "webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Sb = gb(kb().toLowerCase(), "webkit") && !u("Edge");

    function Tb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Ub;
    a: {
        var Vb = "",
            Wb = function() {
                var a = kb();
                if (Rb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Pb) return /Edge\/([\d\.]+)/.exec(a);
                if (Ob) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Sb) return /WebKit\/(\S+)/.exec(a);
                if (Nb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Wb && (Vb = Wb ? Wb[1] : "");
        if (Ob) {
            var Xb = Tb();
            if (null != Xb && Xb > parseFloat(Vb)) {
                Ub = String(Xb);
                break a
            }
        }
        Ub = Vb
    }
    var Yb = Ub,
        Mb = {};

    function $b(a) {
        return Lb(a, function() {
            return 0 <= hb(Yb, a)
        })
    }
    var ac;
    if (t.document && Ob) {
        var bc = Tb();
        ac = bc ? bc : parseInt(Yb, 10) || void 0
    } else ac = void 0;
    var cc = ac;
    qb();
    pb();
    ob();
    var dc = {},
        ec = null;

    function fc(a, b) {
        void 0 === b && (b = 0);
        gc();
        b = dc[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function hc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return fc(b, 3)
    }

    function ic(a) {
        var b = [];
        jc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function kc(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : gb("=.", a[b - 1]) && (c = gb("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        jc(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function jc(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = ec[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        gc();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function gc() {
        if (!ec) {
            ec = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                dc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === ec[f] && (ec[f] = e)
                }
            }
        }
    };
    var lc = "undefined" !== typeof Uint8Array;

    function nc(a) {
        return lc && null != a && a instanceof Uint8Array
    }
    let qc;
    var rc = {};
    let sc;

    function tc(a) {
        if (a !== rc) throw Error("illegal external caller");
    }

    function uc() {
        return sc || (sc = new vc(null, rc))
    }
    var vc = class {
        constructor(a, b) {
            tc(b);
            this.P = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.P
        }
    };
    const wc = Symbol(void 0);

    function xc(a, b) {
        Object.isFrozen(a) || (wc ? a[wc] |= b : void 0 !== a.ya ? a.ya |= b : Object.defineProperties(a, {
            ya: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function yc(a, b) {
        Object.isExtensible(a) && (wc ? a[wc] && (a[wc] &= ~b) : void 0 !== a.ya && (a.ya &= ~b))
    }

    function zc(a) {
        let b;
        wc ? b = a[wc] : b = a.ya;
        return null == b ? 0 : b
    }

    function Ac(a, b) {
        wc ? a[wc] = b : void 0 !== a.ya ? a.ya = b : Object.defineProperties(a, {
            ya: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Bc(a) {
        xc(a, 1);
        return a
    }

    function Cc(a) {
        xc(a, 17);
        return a
    }

    function Dc(a) {
        return a ? !!(zc(a) & 2) : !1
    }

    function Ec(a) {
        xc(a, 16);
        return a
    }

    function Fc(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        yc(a, 16)
    }

    function Gc(a, b) {
        Ac(b, (zc(a) | 0) & -51)
    };
    var Hc = {};

    function Ic(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Jc;

    function Kc(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new vc(a, rc) : uc();
            else if (a.constructor !== vc)
            if (nc(a)) a = a.length ? new vc(new Uint8Array(a), rc) : uc();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Lc = Object,
        Mc = Lc.freeze,
        Nc = [];
    xc(Nc, 3);
    var Oc = Mc.call(Lc, Nc);

    function Pc(a) {
        if (Dc(a.N)) throw Error("Cannot mutate an immutable Message");
    };

    function Qc(a, b, c = !1) {
        if (Array.isArray(a)) return new b(c ? Ec(a) : a)
    };

    function Rc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (nc(a)) return fc(a);
                    if (a instanceof vc) {
                        const b = a.P;
                        return null == b ? "" : "string" === typeof b ? b : a.P = fc(b)
                    }
                }
        }
        return a
    };

    function Sc(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Tc(a, b, c, void 0 !== d);
            else if (Ic(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Sc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Tc(a, b, c, d) {
        d = d ? !!(zc(a) & 16) : void 0;
        const e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = Sc(e[a], b, c, d);
        return e
    }

    function Uc(a) {
        return a.Pc === Hc ? a.toJSON() : Rc(a)
    }

    function Vc(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (nc(a)) return new Uint8Array(a);
            if (a.Pc === Hc) return Wc(a)
        }
        return a
    }

    function Xc() {};

    function v(a, b, c = !1) {
        return -1 === b ? null : b >= a.Ja ? a.da ? a.da[b] : void 0 : c && a.da && (c = a.da[b], null != c) ? c : a.N[b + a.Ea]
    }

    function w(a, b, c, d = !1, e = !1) {
        e || Pc(a);
        a.Pd && (a.Pd = void 0);
        if (b >= a.Ja || d) return (a.da || (a.da = a.N[a.Ja + a.Ea] = {}))[b] = c, a;
        void 0 !== a.da && a.Ja >= a.N.length ? (d = a.N.length - 1, e = b + a.Ea, e >= d ? (a.N[d] = void 0, a.N[e] = c, a.N.push(a.da)) : a.N[e] = c) : a.N[b + a.Ea] = c;
        void 0 !== a.da && b in a.da && delete a.da[b];
        return a
    }

    function Yc(a, b) {
        return null != v(a, b, !1)
    }

    function Zc(a, b, c) {
        return void 0 !== $c(a, b, c, !1)
    }

    function ad(a, b, c, d) {
        let e = v(a, b, d);
        Array.isArray(e) || (e = Oc);
        const f = zc(e);
        f & 1 || Bc(e);
        Dc(a.N) ? (f & 2 || xc(e, 2), c & 1 || Object.freeze(e)) : e === Oc || !(c & 1 && c & 2) && f & 2 ? (e = Bc(Array.prototype.slice.call(e)), w(a, b, e, d)) : !(c & 2) && f & 16 && Fc(e);
        return e
    }

    function bd(a, b) {
        a = v(a, b);
        return null == a ? a : +a
    }

    function cd(a, b) {
        a = v(a, b);
        return null == a ? a : !!a
    }

    function dd(a, b) {
        let c = ad(a, b, 1, !1);
        if (c.length && !(zc(c) & 4)) {
            Object.isFrozen(c) && (c = Bc(c.slice()), w(a, b, c, !1, !0));
            let d = b = 0;
            for (; b < c.length; b++) {
                const e = c[b];
                null != e && (c[d++] = e)
            }
            d < b && (c.length = d);
            xc(c, 5)
        }
        Dc(a.N) && !Object.isFrozen(c) && (xc(c, 2), Object.freeze(c));
        return c
    }

    function ed(a, b) {
        a = v(a, b);
        return null == a ? 0 : a
    }

    function fd(a, b, c) {
        null == c ? c = Oc : Bc(c);
        return w(a, b, c)
    }

    function gd(a, b, c) {
        if (null == c) c = Oc;
        else {
            for (let d = 0; d < c.length; d++);
            xc(c, 5)
        }
        return w(a, b, c)
    }

    function x(a, b, c, d) {
        Pc(a);
        c !== d ? w(a, b, c) : w(a, b, void 0, !1);
        return a
    }

    function hd(a, b, c, d) {
        Pc(a);
        (c = id(a, c)) && c !== b && null != d && w(a, c, void 0, !1);
        return w(a, b, d)
    }

    function id(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != v(a, e) && (0 !== c && w(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function $c(a, b, c, d) {
        const e = v(a, c, d); {
            let g = !1;
            var f = null == e || "object" !== typeof e || (g = Array.isArray(e)) || e.Pc !== Hc ? g ? new b(e) : void 0 : e
        }
        f !== e && null != f && (w(a, c, f, d, !0), xc(f.N, zc(a.N) & -33));
        return f
    }

    function y(a, b, c) {
        b = $c(a, b, c, !1);
        if (null == b) return b;
        Dc(b.N) && !Dc(a.N) && (b = jd(b), w(a, c, b, !1));
        return b
    }

    function kd(a, b, c, d, e = !0) {
        a.l || (a.l = {});
        let f = a.l[c];
        var g = ad(a, c, 3, d),
            h = Dc(a.N);
        const k = !!(zc(a.N) & 16);
        var l = Dc(g);
        const m = h || l;
        !e && l && (g = Bc(Array.prototype.slice.call(g)), w(a, c, g, d));
        if (!f) {
            f = [];
            d = m;
            for (l = 0; l < g.length; l++) {
                var n = g[l];
                d = d || Dc(n);
                n = Qc(n, b, k);
                void 0 !== n && (f.push(n), m && xc(n.N, 2))
            }
            a.l[c] = f;
            b = g;
            Object.isFrozen(b) || (g = zc(b) | 33, Ac(b, d ? g & -9 : g | 8))
        }
        e = h || e;
        h = Dc(f);
        e && !h && (Object.isFrozen(f) && (a.l[c] = f = f.slice()), xc(f, 2), Object.freeze(f));
        !e && h && (a.l[c] = f = f.slice());
        return f
    }

    function A(a, b, c, d = !1) {
        var e = Dc(a.N);
        b = kd(a, b, c, d, e);
        a = ad(a, c, 3, d);
        if (e = !e && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            e = !(zc(a) & 8)
        }
        if (e) {
            for (e = 0; e < b.length; e++)(c = b[e]) && Dc(c.N) && (c = e, d = jd(b[e]), b[c] = d, a[e] = b[e].N);
            xc(a, 8)
        }
        return b
    }

    function ld(a, b, c) {
        Pc(a);
        null == c && (c = void 0);
        return w(a, b, c)
    }

    function md(a, b, c, d) {
        Pc(a);
        null == d && (d = void 0);
        return hd(a, b, c, d)
    }

    function nd(a, b, c) {
        Pc(a);
        let d;
        if (null != c) {
            d = Bc([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].N, e = e || Dc(d[f]);
            a.l || (a.l = {});
            a.l[b] = c;
            c = d;
            e ? yc(c, 8) : xc(c, 8)
        } else a.l && (a.l[b] = void 0), d = Oc;
        return w(a, b, d)
    }

    function od(a, b, c, d) {
        Pc(a);
        const e = kd(a, c, b, void 0, !1);
        c = null != d ? d : new c;
        b = ad(a, b, 2);
        e.push(c);
        b.push(c.N);
        Dc(c.N) && yc(b, 8);
        return a
    }

    function pd(a, b) {
        return null == a ? b : a
    }

    function C(a, b) {
        return pd(v(a, b), "")
    }

    function E(a, b, c = !1) {
        return pd(cd(a, b), c)
    }

    function rd(a, b) {
        return pd(v(a, b), 0)
    }

    function sd(a, b) {
        return pd(v(a, b), 0)
    }

    function td(a, b, c, d) {
        c = id(a, d) === c ? c : -1;
        return y(a, b, c)
    }

    function ud(a, b, c) {
        return x(a, b, c, !1)
    }

    function vd(a, b, c) {
        return x(a, b, c, 0)
    };

    function wd(a, b, c, d, e, f) {
        (a = a.l && a.l[c]) ? (e = f.ob ? Bc(a.slice()) : a, nd(b, c, e)) : (null != d ? lc && d instanceof Uint8Array ? e = d.length ? new vc(new Uint8Array(d), rc) : uc() : (Array.isArray(d) && (e ? xc(d, 2) : d && zc(d) & 1 && f.ob ? (e = Array.prototype.slice.call(d), Ac(e, (zc(d) | 0) & -51), d = e) : Fc(d)), e = d) : e = void 0, w(b, c, e))
    };

    function jd(a) {
        if (!Dc(a.N)) return a;
        var {
            ob: b
        } = {
            ob: !0
        };
        b = {
            ob: b
        };
        const c = Dc(a.N);
        if (c && !b.ob) throw Error("copyRepeatedFields must be true for frozen messages");
        c || Fc(a.N);
        const d = new a.constructor;
        a.zb && (d.zb = a.zb.slice());
        const e = a.N;
        for (let f = 0; f < e.length; f++) {
            const g = e[f];
            if (f === e.length - 1 && Ic(g))
                for (const h in g) {
                    if (!Object.prototype.hasOwnProperty.call(g, h)) continue;
                    const k = +h;
                    Number.isNaN(k) ? (d.da || (d.da = d.N[d.Ja + d.Ea] = {}))[h] = g[h] : wd(a, d, k, g[h], c, b)
                } else wd(a, d, f - a.Ea, g, c, b)
        }
        d.Pd = a;
        return d
    };

    function xd(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        yd = b = Ec(b);
        a = new a(b);
        yd = null;
        return a
    }

    function Wc(a) {
        var b = Tc(a.N, Vc, Gc);
        Ec(b);
        yd = b;
        b = new a.constructor(b);
        yd = null;
        zd(b, a);
        return b
    }

    function Ad(a) {
        Jc = !0;
        try {
            return JSON.stringify(a.toJSON(), Bd)
        } finally {
            Jc = !1
        }
    }
    var J = class {
        constructor(a, b, c) {
            null == a && (a = yd);
            yd = null;
            var d = this.constructor.j || 0,
                e = 0 < d,
                f = this.constructor.messageId,
                g = !1;
            if (null == a) {
                var h = f ? [f] : [];
                xc(h, 48);
                a = h;
                h = !0
            } else if (h = !!(zc(a) & 16)) g = zc(a), Ac(a, g | 32), g = !!(g & 32);
            e && 0 < a.length && Ic(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.Ea = (f ? 0 : -1) - d;
            this.l = void 0;
            this.N = a;
            a: {
                f = this.N.length;d = f - 1;
                if (f && (f = this.N[d], Ic(f))) {
                    this.da = f;
                    f = Object.keys(f);
                    if (b = 0 < f.length) b: {
                        b = f;f = isNaN;a = b.length;
                        const k = "string" === typeof b ? b.split("") : b;
                        for (let l = 0; l <
                            a; l++)
                            if (l in k && !f.call(void 0, k[l], l, b)) {
                                b = !1;
                                break b
                            }
                        b = !0
                    }
                    b ? this.Ja = Number.MAX_VALUE : this.Ja = d - this.Ea;
                    break a
                }
                void 0 !== b && -1 < b ? (this.Ja = Math.max(b, d + 1 - this.Ea), this.da = void 0) : this.Ja = Number.MAX_VALUE
            }
            if (!e && this.da && "g" in this.da) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c)
                for (e = h && !g ? Cc : Bc, h = 0; h < c.length; h++) g = c[h], (d = v(this, g)) ? Array.isArray(d) && e(d) : w(this, g, Oc, !1, !0)
        }
        toJSON() {
            const a = this.N;
            return Jc ? a : Tc(a, Uc, Xc)
        }
    };
    J.prototype.Pc = Hc;

    function Bd(a, b) {
        return Rc(b)
    }

    function zd(a, b) {
        b.zb && (a.zb = b.zb.slice());
        const c = b.l;
        if (c) {
            b = b.da;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = A(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) zd(d[e], g[e])
                    } else throw Error("unexpected object: type: " + Aa(g) + ": " + g);
                }
            }
        }
    }
    let yd;
    const Cd = a => null !== a && void 0 !== a;
    let Dd = void 0;

    function Ed(a, b) {
        const c = Dd;
        Dd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Fd(a, b) {
        this.j = a === Gd && b || "";
        this.l = Hd
    }
    Fd.prototype.ta = !0;
    Fd.prototype.na = function() {
        return this.j
    };

    function Id(a) {
        return a instanceof Fd && a.constructor === Fd && a.l === Hd ? a.j : "type_error:Const"
    }

    function Jd(a) {
        return new Fd(Gd, a)
    }
    var Hd = {},
        Gd = {};
    var Kd = Jd("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Ld(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function Md(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Nd(a) {
        var b = Od;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Pd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Qd(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Rd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Sd(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Rd.length; f++) c = Rd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Td = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Ud;

    function Vd() {
        if (void 0 === Ud) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Sa,
                        createScript: Sa,
                        createScriptURL: Sa
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                Ud = a
            } else Ud = a
        }
        return Ud
    };
    const Wd = {};

    function Xd(a) {
        return a instanceof Yd && a.constructor === Yd ? a.j : "type_error:SafeScript"
    }
    class Yd {
        constructor(a, b) {
            this.j = b === Wd ? a : "";
            this.ta = !0
        }
        toString() {
            return this.j.toString()
        }
        na() {
            return this.j.toString()
        }
    };
    var $d = class {
        constructor(a, b) {
            this.j = b === Zd ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    $d.prototype.ta = !0;
    $d.prototype.na = function() {
        return this.j.toString()
    };

    function ge(a, b) {
        a = he.exec(ie(a).toString());
        var c = a[3] || "";
        return je(a[1] + ke("?", a[2] || "", b) + ke("#", c))
    }

    function ie(a) {
        return a instanceof $d && a.constructor === $d ? a.j : "type_error:TrustedResourceUrl"
    }

    function le(a, b) {
        var c = Id(a);
        if (!me.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(ne, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Fd ? Id(d) : encodeURIComponent(String(d))
        });
        return je(a)
    }
    var ne = /%{(\w+)}/g,
        me = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        he = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Zd = {};

    function je(a) {
        const b = Vd();
        a = b ? b.createScriptURL(a) : a;
        return new $d(a, Zd)
    }

    function ke(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var pe = class {
        constructor(a, b) {
            this.j = b === oe ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    pe.prototype.ta = !0;
    pe.prototype.na = function() {
        return this.j.toString()
    };

    function qe(a) {
        return a instanceof pe && a.constructor === pe ? a.j : "type_error:SafeUrl"
    }
    var re = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        se = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function te(a) {
        if (a instanceof pe) return a;
        a = "object" == typeof a && a.ta ? a.na() : String(a);
        se.test(a) ? a = new pe(a, oe) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(re) ? new pe(a, oe) : null);
        return a
    }
    var oe = {},
        ue = new pe("about:invalid#zClosurez", oe);
    const ve = {};

    function we(a) {
        return a instanceof xe && a.constructor === xe ? a.j : "type_error:SafeStyle"
    }

    function ye(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(ze).join(" ") : ze(d), b += `${c}:${d};`)
            }
        return b ? new xe(b, ve) : Ae
    }
    class xe {
        constructor(a, b) {
            this.j = b === ve ? a : "";
            this.ta = !0
        }
        na() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var Ae = new xe("", ve);

    function ze(a) {
        if (a instanceof pe) return 'url("' + qe(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Fd) a = Id(a);
        else {
            a = String(a);
            var b = a.replace(Be, "$1").replace(Be, "$1").replace(Ce, "url");
            if (De.test(b)) {
                if (b = !Ee.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Fe(a)
                }
                a = b ? Ge(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Wa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Fe(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const De = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Ce = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Be = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Ee = /\/\*/;

    function Ge(a) {
        return a.replace(Ce, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (te(d) || ue).na();
            return c + f + b + f + e
        })
    };
    const He = {};

    function Ie(a) {
        return a instanceof Je && a.constructor === Je ? a.j : "type_error:SafeStyleSheet"
    }
    class Je {
        constructor(a, b) {
            this.j = b === He ? a : "";
            this.ta = !0
        }
        toString() {
            return this.j.toString()
        }
        na() {
            return this.j
        }
    };
    const Ke = {};

    function Le(a) {
        return a instanceof Me && a.constructor === Me ? a.j : "type_error:SafeHtml"
    }

    function Ne(a) {
        return a instanceof Me ? a : Oe(Ya("object" == typeof a && a.ta ? a.na() : String(a)))
    }

    function Oe(a) {
        const b = Vd();
        a = b ? b.createHTML(a) : a;
        return new Me(a, Ke)
    }

    function Pe(a, b, c) {
        var d = String(a);
        if (!Qe.test(d)) throw Error("");
        if (d.toUpperCase() in Re) throw Error("");
        return Se(String(a), b, c)
    }

    function Se(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!Qe.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof Fd) e = Id(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!Ca(e)) throw Error("");
                            e instanceof xe || (e = ye(e));
                            e = we(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in Te)
                                if (e instanceof $d) e = ie(e).toString();
                                else if (e instanceof pe) e = qe(e);
                            else if ("string" === typeof e) e = (te(e) || ue).na();
                            else throw Error("");
                        }
                        e.ta && (e = e.na());
                        f = `${f}="` +
                            Ya(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Td[a.toLowerCase()] ? b += ">" : (c = Ue(c), b += ">" + Le(c).toString() + "</" + a + ">");
        return Oe(b)
    }

    function Ve(a) {
        const b = Ne(We),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = Ne(e), c.push(Le(e).toString()))
            };
        a.forEach(d);
        return Oe(c.join(Le(b).toString()))
    }

    function Ue(a) {
        return Ve(Array.prototype.slice.call(arguments))
    }
    class Me {
        constructor(a, b) {
            this.j = b === Ke ? a : "";
            this.ta = !0
        }
        na() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const Qe = /^[a-zA-Z0-9-]+$/,
        Te = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Re = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Xe = Oe("<!DOCTYPE html>"),
        We = new Me(t.trustedTypes && t.trustedTypes.emptyHTML || "", Ke),
        Ye = Oe("<br>");

    function Ze(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function $e(a) {
        var b = af(bf) || ue;
        b = b instanceof pe ? qe(b) : Ze(b);
        void 0 !== b && (a.href = b)
    };

    function cf(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const df = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function ef(a, b, c) {
        if (b instanceof $d) a.href = ie(b).toString();
        else {
            if (-1 === df.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof pe ? qe(b) : Ze(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function ff(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function gf(a, b) {
        a.src = ie(b);
        ff(a)
    };

    function hf() {
        return !1
    }

    function jf() {
        return !0
    }

    function kf(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function lf(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function mf(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function nf(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function of (a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function pf(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Bf = {
            passive: !0
        },
        Cf = mf(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Df(a) {
        return a ? a.passive && Cf() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Df(d)), !0) : !1
    }

    function Ef(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Df(d)), !0) : !1
    };

    function Ff(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            gf(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Gf(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.jb}`;
        let c = void 0;
        try {
            c = await Hf(b)
        } catch (g) {}
        if (c) {
            b = a.Ab || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                Pe: c.bg_hash_basename,
                Oe: c.bg_binary,
                uf: a.j + "_" + a.l,
                Ab: b,
                jb: a.jb,
                Zb: d,
                rc: e,
                Xb: f
            }
        }
    }
    let Hf = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function If(a) {
        var b = await Gf(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Pe,
                _bgp_: b.Oe,
                _li_: b.uf,
                _jk_: b.Ab,
                _st_: b.jb,
                _rc_: b.Zb,
                _dl_: b.rc,
                _g2_: b.Xb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = le(Kd, {
                basename: "sodar2"
            });
            Ff(a)
        }
    };

    function Jf(a, b) {
        return ld(a, 5, b)
    }

    function Kf(a, b) {
        return x(a, 3, b, "")
    }
    var Lf = class extends J {
        constructor() {
            super()
        }
    };

    function Mf(a, b) {
        return x(a, 1, b, "")
    }
    var Nf = class extends J {
        constructor(a) {
            super(a)
        }
        j() {
            return C(this, 1)
        }
    };

    function Of(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Pf = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.Ab = a.Ab;
                this.win = a.U();
                this.jb = a.jb;
                this.Zb = a.Zb;
                this.rc = a.rc;
                this.Xb = a.Xb;
                this.A = a.j
            }
        },
        Qf = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.jb = "env";
                this.Zb = "n";
                this.rc = "0";
                this.Xb = "1";
                this.j = !0
            }
            U() {
                return this.win
            }
            build() {
                return new Pf(this)
            }
        };
    var Sf = class extends J {
            constructor(a) {
                super(a, -1, Rf)
            }
        },
        Rf = [2, 3];

    function Tf(a, b) {
        return w(a, 1, b)
    }

    function Uf(a, b) {
        return w(a, 2, b)
    }

    function Vf(a, b) {
        return w(a, 3, b)
    }

    function Wf(a, b) {
        return w(a, 4, b)
    }
    var Xf = class extends J {
        constructor() {
            super()
        }
        getVersion() {
            return v(this, 5)
        }
    };
    var Yf = window;
    var Zf = {
        ig: "google_adtest",
        mg: "google_ad_client",
        ng: "google_ad_format",
        pg: "google_ad_height",
        Cg: "google_ad_width",
        tg: "google_ad_layout",
        ug: "google_ad_layout_key",
        vg: "google_ad_output",
        wg: "google_ad_region",
        zg: "google_ad_slot",
        Ag: "google_ad_type",
        Bg: "google_ad_url",
        Dg: "google_allow_expandable_ads",
        Vg: "google_analytics_domain_name",
        Wg: "google_analytics_uacct",
        mh: "google_container_id",
        zh: "google_gl",
        Th: "google_enable_ose",
        di: "google_full_width_responsive",
        dj: "google_rl_filtering",
        cj: "google_rl_mode",
        ej: "google_rt",
        bj: "google_rl_dest_url",
        Ji: "google_max_radlink_len",
        Oi: "google_num_radlinks",
        Pi: "google_num_radlinks_per_unit",
        lg: "google_ad_channel",
        Ii: "google_max_num_ads",
        Ki: "google_max_responsive_height",
        hh: "google_color_border",
        Sh: "google_enable_content_recommendations",
        wh: "google_content_recommendation_ui_type",
        uh: "google_source_type",
        th: "google_content_recommendation_rows_num",
        sh: "google_content_recommendation_columns_num",
        rh: "google_content_recommendation_ad_positions",
        xh: "google_content_recommendation_use_square_imgs",
        jh: "google_color_link",
        ih: "google_color_line",
        lh: "google_color_url",
        jg: "google_ad_block",
        yg: "google_ad_section",
        kg: "google_ad_callback",
        eh: "google_captcha_token",
        kh: "google_color_text",
        Pg: "google_alternate_ad_url",
        sg: "google_ad_host_tier_id",
        fh: "google_city",
        qg: "google_ad_host",
        rg: "google_ad_host_channel",
        Qg: "google_alternate_color",
        gh: "google_color_bg",
        Uh: "google_encoding",
        bi: "google_font_face",
        Ch: "google_cust_ch",
        Fh: "google_cust_job",
        Eh: "google_cust_interests",
        Dh: "google_cust_id",
        Gh: "google_cust_u_url",
        fi: "google_hints",
        wi: "google_image_size",
        Li: "google_mtl",
        Fj: "google_cpm",
        qh: "google_contents",
        Ni: "google_native_settings_key",
        yh: "google_country",
        xj: "google_targeting",
        ci: "google_font_size",
        Jh: "google_disable_video_autoplay",
        Sj: "google_video_product_type",
        Rj: "google_video_doc_id",
        Qj: "google_cust_gender",
        tj: "google_cust_lh",
        sj: "google_cust_l",
        Ej: "google_tfs",
        Mi: "google_native_ad_template",
        Bi: "google_kw",
        uj: "google_tag_for_child_directed_treatment",
        vj: "google_tag_for_under_age_of_consent",
        gj: "google_region",
        Bh: "google_cust_criteria",
        xg: "google_safe",
        Ah: "google_ctr_threshold",
        hj: "google_resizing_allowed",
        jj: "google_resizing_width",
        ij: "google_resizing_height",
        Pj: "google_cust_age",
        LANGUAGE: "google_language",
        Ci: "google_kw_type",
        Ui: "google_pucrd",
        Ti: "google_page_url",
        wj: "google_tag_partner",
        nj: "google_restrict_data_processing",
        eg: "google_adbreak_test",
        og: "google_ad_frequency_hint",
        gg: "google_admob_interstitial_slot",
        hg: "google_admob_rewarded_slot",
        fg: "google_admob_ads_only",
        Hi: "google_max_ad_content_rating",
        Xi: "google_ad_public_floor",
        Vi: "google_ad_private_floor",
        Oj: "google_traffic_source",
        rj: "google_shadow_mode"
    };
    var $f = mf(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Le(We);
        return !b.parentElement
    });

    function ag(a, b) {
        if ($f())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Le(b)
    }
    var bg = /^[\w+/_-]+[=]{0,2}$/;

    function cg(a, b) {
        b = (b || t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && bg.test(a) ? a : "" : ""
    };

    function dg(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function eg(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function fg(a) {
        return eg.apply(null, arguments) / arguments.length
    };

    function gg(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    gg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    gg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    gg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function hg(a, b) {
        this.width = a;
        this.height = b
    }

    function ig(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    p = hg.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function jg(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(kg, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Oe(e + " "), ag(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var kg = /&([^;\s<&]+);?/g;

    function lg(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function mg(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function ng(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function og(a) {
        return a ? new pg(qg(a)) : Va || (Va = new pg)
    }

    function rg(a, b) {
        Ld(b, function(c, d) {
            c && "object" == typeof c && c.ta && (c = c.na());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : sg.hasOwnProperty(d) ? a.setAttribute(sg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var sg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function tg(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new hg(a.clientWidth, a.clientHeight)
    }

    function ug(a) {
        var b = a.scrollingElement ? a.scrollingElement : Sb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Ob && $b("10") && a.pageYOffset != b.scrollTop ? new gg(b.scrollLeft, b.scrollTop) : new gg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function vg(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function wg(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Ba(f) || Ca(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Ca(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                ub(g ? Db(f) : f, e)
            }
        }
    }

    function xg(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function yg(a, b) {
        var c = xg(a, "DIV");
        Ob ? (b = Ue(Ye, b), ag(c, b), c.removeChild(c.firstChild)) : ag(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function zg(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function qg(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Ag = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Bg = {
            IMG: " ",
            BR: "\n"
        };

    function Cg(a) {
        var b = [];
        Dg(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Dg(a, b, c) {
        if (!(a.nodeName in Ag))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Bg) b.push(Bg[a.nodeName]);
        else
            for (a = a.firstChild; a;) Dg(a, b, c), a = a.nextSibling
    }

    function Eg(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Fg(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Ab(e.className.split(/\s+/), c))
        })
    }

    function Fg(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function pg(a) {
        this.j = a || t.document || document
    }
    p = pg.prototype;
    p.jf = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.dg = pg.prototype.jf;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.ka = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = xg(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : rg(g, f));
        2 < e.length && wg(d, g, e, 2);
        return g
    };
    p.createElement = function(a) {
        return xg(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Gg(a, b) {
        return yg(a.j, b)
    }
    p.U = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        wg(qg(a), a, arguments, 1)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.ff = zg;

    function Hg() {
        return !Ig() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function Ig() {
        return u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var Jg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Kg(a) {
        try {
            return !!a && null != a.location.href && Kb(a, "foo")
        } catch {
            return !1
        }
    }

    function Lg(a, b = !1, c = !1, d = t) {
        c = c ? Mg(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Kg(c) || !a(c));) c = Mg(c)
    }

    function Mg(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Ng(a) {
        return Kg(a.top) ? a.top : null
    }

    function Og(a, b) {
        const c = Pg("SCRIPT", a);
        gf(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Qg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Rg() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Sg(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Tg(a) {
        const b = [];
        Sg(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ug(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Wg = mf(() => zb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Vg) || 1E-4 > Math.random());
    const Vg = a => gb(kb(), a);
    var Xg = /^([0-9.]+)px$/,
        Yg = /^(-?[0-9.]{1,30})$/;

    function Zg(a) {
        if (!Yg.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function $g(a) {
        return /^true$/.test(a)
    }

    function ah(a) {
        return (a = Xg.exec(a)) ? +a[1] : null
    }

    function bh() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var ch = {
        Eg: "allow-forms",
        Fg: "allow-modals",
        Gg: "allow-orientation-lock",
        Hg: "allow-pointer-lock",
        Ig: "allow-popups",
        Jg: "allow-popups-to-escape-sandbox",
        Kg: "allow-presentation",
        Lg: "allow-same-origin",
        Mg: "allow-scripts",
        Ng: "allow-top-navigation",
        Og: "allow-top-navigation-by-user-activation"
    };
    const dh = mf(() => Tg(ch));

    function eh() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = dh();
        return a.length ? vb(b, c => !Ab(a, c)) : b
    }

    function fh() {
        const a = Pg("IFRAME"),
            b = {};
        ub(dh(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var gh = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        hh = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (gh(a, b)) return a;
                if (!(a = Mg(a))) break
            }
            return null
        },
        ih = mf(() => Hg() ? 2 : Ig() ? 1 : 0),
        M = (a, b) => {
            Sg(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const jh = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    };
    var kh = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/;
    const lh = /.*domain\.test$/,
        mh = /\.prod\.google\.com(:\d+)?$/;
    var nh = a => jh[a] || kh.test(a) || lh.test(a) || mh.test(a);
    let oh = [];
    const ph = () => {
        const a = oh;
        oh = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var qh = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.pa(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.pa(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function rh(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || zg(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Lg(f => {
            if (!f.parent || !Kg(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? vg(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    rh(f.parent, g[l], c, d);
                    break
                }
            }
            catch {}
            return !1
        }, !1, !1, a)
    }
    var sh = (a, b) => {
            rh(vg(qg(a)), a, b)
        },
        th = (a, b) => {
            "complete" === a.document.readyState ? (oh.push(b), 1 == oh.length && (window.Promise ? Promise.resolve().then(ph) : window.setImmediate ? setImmediate(ph) : setTimeout(ph, 0))) : a.addEventListener("load", b)
        },
        uh = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Pg(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var vh = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Kg(a) && (b = a);
        return b
    };

    function wh(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = wh.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function xh(a) {
        return new wh(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof wh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function yh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function zh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ah(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new zh(c, e, d - c, a - e)
        }
        return null
    }

    function Bh(a, b) {
        var c = Ah(a, b);
        if (!c || !c.height || !c.width) return [new zh(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new zh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new zh(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new zh(a.left, d, b.left - a.left, e));
        h < f && c.push(new zh(h, d, f - h, e));
        return c
    }
    zh.prototype.contains = function(a) {
        return a instanceof gg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    zh.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    zh.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    zh.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Ch = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Dh(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Eh(a = Dh()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Fh(a = Dh()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Ch[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Gh() {
        var a = Dh();
        return a && a.initialIntersection
    }

    function Xh() {
        const a = Gh();
        return a && Ca(a.rootBounds) ? new hg(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Yh(a = Dh()) {
        return a ? Kg(a.master) ? a.master : null : null
    }

    function Zh(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Bb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Og(a.document, g ? le(Jd("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : je(Id(Jd("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Ef(a, "message", f)
        });
        return e
    };

    function N(a, ...b) {
        if (0 === b.length) return je(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return je(c.join(""))
    }

    function $h(a, b) {
        let c = ie(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return je(c)
    };

    function ai(a) {
        a = a[0];
        const b = Vd();
        a = b ? b.createScript(a) : a;
        return new Yd(a, Wd)
    };

    function bi(a) {
        return new Je(a[0], He)
    };
    class ci {
        constructor(a) {
            this.tf = a
        }
    }

    function di(a) {
        return new ci(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const bf = [di("data"), di("http"), di("https"), di("mailto"), di("ftp"), new ci(a => /^[^:]*([/?#]|$)/.test(a))];

    function af(a = bf) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof ci && c.tf("#")) return new pe("#", oe)
        }
    };

    function ei(a) {
        return je(ie(a).toString())
    };

    function fi(a, b, c) {
        if ("string" === typeof b)(b = gi(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = gi(c, d);
                f && (c.style[f] = e)
            }
    }
    var hi = {};

    function gi(a, b) {
        var c = hi[b];
        if (!c) {
            var d = mg(b);
            c = d;
            void 0 === a.style[d] && (d = (Sb ? "Webkit" : Rb ? "Moz" : Ob ? "ms" : null) + ng(d), void 0 !== a.style[d] && (c = d));
            hi[b] = c
        }
        return c
    }

    function ii(a, b) {
        var c = qg(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function ji(a, b) {
        return ii(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function ki(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function li(a) {
        var b = qg(a),
            c = new gg(0, 0);
        var d = b ? qg(b) : document;
        d = !Ob || 9 <= Number(cc) || "CSS1Compat" == og(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = ki(a);
        b = ug(og(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function mi(a) {
        var b = ni;
        if ("none" != ji(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ni(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Sb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = ki(a), new hg(a.right - a.left, a.bottom - a.top)) : new hg(b, c)
    }

    function oi(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function pi(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? oi(a, b) : 0
    }
    var qi = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function ri(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in qi ? qi[b] : oi(a, b)
    };
    var si = a => "number" === typeof a && 0 < a,
        ui = (a, b) => {
            a = ti(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        ti = a => Object.entries(vi(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        vi = a => {
            const b = {};
            Sg(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        wi = () => {
            try {
                return Yf.history.length
            } catch (a) {
                return 0
            }
        },
        xi = a => {
            a = Yh(Dh(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        yi = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        zi = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = wi();
            a.u_h = Yf.screen ? .height;
            a.u_w = Yf.screen ? .width;
            a.u_ah = Yf.screen ? .availHeight;
            a.u_aw = Yf.screen ? .availWidth;
            a.u_cd = Yf.screen ? .colorDepth
        },
        Ai = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName &&
                a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Bi = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Ci = () => {
            if (!Yf) return !1;
            try {
                return !(!Yf.navigator.standalone && !Yf.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Di = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Ei = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2],
                                        10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class Fi {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Gi = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Hi = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Ii = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Qd = !!c;
                this.depth = null
            }
        };

    function Ji(a, b, c = null, d = !1) {
        Ki(a, b, c, d)
    }

    function Ki(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Pg("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                d && Bb(a.google_image_requests, e);
                Ef(e, "load", f);
                Ef(e, "error", f)
            };
            L(e, "load", f);
            L(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Mi = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Sg(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            Li(c)
        },
        Li = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ji(b, a, void 0, !1)
        };

    function Ni(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Oi(a, b, c, d, e) {
        const f = [];
        Sg(a, function(g, h) {
            (g = Pi(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Pi(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Pi(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Oi(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Qi(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Ri(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Qi(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = Oi(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Si {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function Ti() {
        var a = Ui,
            b = t.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Vi(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Si ? f = c : (f = new Si, Sg(c, (h, k) => {
                var l = f;
                const m = l.B++;
                h = Ni(k, h);
                l.j.push(m);
                l.l[m] = h
            }));
            const g = Ri(f, "/pagead/gen_204?id=" + b + "&");
            g && Ji(t, g)
        } catch (f) {}
    }
    class Wi {
        constructor() {
            this.j = Math.random()
        }
    };
    let Xi = null;

    function Yi() {
        if (null === Xi) {
            Xi = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Xi = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Xi
    };

    function Zi() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Na()
    }

    function $i() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    class aj {
        constructor(a, b) {
            var c = $i() || Zi();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const bj = t.performance,
        cj = !!(bj && bj.mark && bj.measure && bj.clearMarks),
        dj = mf(() => {
            var a;
            if (a = cj) a = Yi(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ej(a) {
        a && bj && dj() && (bj.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), bj.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function fj() {
        var a = gj;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (dj() && ub(a.j, ej), a.j.length = 0)
    }

    function hj(a, b) {
        if (!a.l) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw ej(c), e;
        }
        a.end(c);
        return d
    }
    class ij {
        constructor(a) {
            this.j = [];
            this.A = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = dj() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new aj(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            bj && dj() && bj.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = ($i() || Zi()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                bj && dj() && bj.mark(b);
                !this.l || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function jj(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = kj(a.stack, b));
        return b
    }

    function kj(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class lj {
        constructor(a = null) {
            this.B = Ui;
            this.j = null;
            this.D = this.pa;
            this.l = a;
            this.A = !1
        }
        ja() {
            return this.B
        }
        ke(a) {
            this.j = a
        }
        C(a) {
            this.A = a
        }
        Db(a, b, c) {
            let d, e;
            try {
                this.l && this.l.l ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    ej(e), b = this.D(a, new Fi(f, {
                        message: jj(f)
                    }), void 0, c)
                } catch (g) {
                    this.pa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ga(a, b, c, d) {
            return (...e) => this.Db(a, () => b.apply(c, e), d)
        }
        pa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const G = new Si;
                var g = G;
                g.j.push(1);
                g.l[1] = Ni("context", a);
                b.error && b.meta && b.id || (b = new Fi(b, {
                    message: jj(b)
                }));
                if (b.msg) {
                    g = G;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Ni("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (wa) {}
                if (d) try {
                    d(b)
                } catch (wa) {}
                d = G;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = t;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Kg(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Ii(m || "", l));
                    try {
                        d = l.parent
                    } catch (wa) {
                        d = null
                    }
                } while (d && l != d);
                for (let wa = 0, ia = k.length - 1; wa <= ia; ++wa) k[wa].depth = ia -
                    wa;
                l = t;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Qd = !0)
                    }
                var q = k;
                let la = new Ii(t.location.href, t, !1);
                l = null;
                const Ha = q.length - 1;
                for (n = Ha; 0 <= n; --n) {
                    var r = q[n];
                    !l && Gi.test(r.url) && (l = r);
                    if (r.url && !r.Qd) {
                        la = r;
                        break
                    }
                }
                r = null;
                const ta = q.length && q[Ha].url;
                0 != la.depth && ta && (r = q[Ha]);
                f = new Hi(la, r);
                if (f.l) {
                    q = G;
                    var z = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = Ni("top", z)
                }
                var F = {
                    url: f.j.url ||
                        ""
                };
                if (f.j.url) {
                    var D = f.j.url.match(Jg),
                        B = D[1],
                        H = D[3],
                        K = D[4];
                    z = "";
                    B && (z += B + ":");
                    H && (z += "//", z += H, K && (z += ":" + K));
                    var I = z
                } else I = "";
                B = G;
                F = [F, {
                    url: I
                }];
                B.j.push(5);
                B.l[5] = F;
                Vi(this.B, e, G, this.A, c)
            } catch (G) {
                try {
                    Vi(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: jj(G),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (la) {}
            }
            return !0
        }
        Ca(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.pa(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var mj = a => "string" === typeof a,
        nj = a => void 0 === a;

    function oj() {
        var a = pj;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var qj;
    qj = {
        Wi: 0,
        ue: 3,
        ve: 4,
        xe: 5
    };
    var rj = qj.ue,
        sj = qj.ve,
        tj = qj.xe;
    var uj = class extends J {
        constructor() {
            super()
        }
    };

    function vj(a) {
        var b = new wj;
        return w(b, 1, a)
    }
    var wj = class extends J {
        constructor(a) {
            super(a)
        }
    };
    var xj = class extends J {
        constructor() {
            super()
        }
    };

    function yj(a, b) {
        return w(a, 1, b)
    }

    function zj(a, b) {
        return w(a, 2, b)
    }

    function Aj(a, b) {
        return w(a, 3, b)
    }

    function Bj(a, b) {
        return w(a, 4, b)
    }

    function Cj(a, b) {
        return w(a, 5, b)
    }

    function Dj(a, b) {
        return w(a, 6, b)
    }

    function Ej(a, b) {
        return w(a, 7, b)
    }
    var Fj = class extends J {
        constructor() {
            super()
        }
    };
    var Gj = class extends J {
        constructor() {
            super()
        }
    };

    function Hj(a, b) {
        return gd(a, 1, b)
    }

    function Ij(a, b) {
        return fd(a, 12, b)
    }

    function Jj() {
        var a = new Kj;
        Pc(a);
        ad(a, 2, 2, !1).push("irr");
        return a
    }

    function Lj(a, b) {
        return w(a, 3, b)
    }

    function Mj(a, b) {
        return w(a, 4, b)
    }

    function Nj(a, b) {
        return w(a, 5, b)
    }

    function Oj(a, b) {
        return w(a, 7, b)
    }

    function Pj(a, b) {
        return w(a, 8, b)
    }

    function Qj(a, b) {
        return w(a, 9, b)
    }

    function Rj(a, b) {
        return nd(a, 10, b)
    }

    function Sj(a, b) {
        return fd(a, 11, b)
    }
    var Kj = class extends J {
            constructor() {
                super(void 0, -1, Tj)
            }
        },
        Tj = [1, 12, 2, 10, 11];

    function Uj(a) {
        var b = Vj();
        ld(a, 1, b)
    }

    function Wj(a, b) {
        return w(a, 2, b)
    }

    function Xj(a, b) {
        return nd(a, 3, b)
    }

    function Yj(a, b) {
        return nd(a, 4, b)
    }

    function Zj(a, b) {
        return od(a, 4, wj, b)
    }

    function ak(a, b) {
        return nd(a, 5, b)
    }

    function bk(a, b) {
        return gd(a, 6, b)
    }

    function ck(a, b) {
        return w(a, 7, b)
    }

    function dk(a, b) {
        ld(a, 9, b)
    }

    function ek(a, b) {
        return w(a, 10, b)
    }

    function fk(a, b) {
        return w(a, 11, b)
    }

    function gk(a, b) {
        return w(a, 12, b)
    }
    var ik = class extends J {
            constructor() {
                super(void 0, -1, hk)
            }
            G(a) {
                return w(this, 8, a)
            }
        },
        hk = [3, 4, 5, 6];

    function jk(a, b) {
        return w(a, 1, b)
    }

    function kk(a, b) {
        return fd(a, 2, b)
    }
    var mk = class extends J {
            constructor() {
                super(void 0, -1, lk)
            }
        },
        lk = [2];
    var nk = class extends J {
        constructor() {
            super()
        }
    };
    var ok = class extends J {
        constructor() {
            super()
        }
    };
    var pk = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return C(this, 1)
        }
    };
    var rk = class extends J {
            constructor() {
                super(void 0, -1, qk)
            }
        },
        qk = [1];
    var sk = class extends J {
        constructor() {
            super()
        }
    };
    var tk = class extends J {
        constructor() {
            super()
        }
    };
    var uk = class extends J {
            constructor(a) {
                super(a)
            }
        },
        vk = [1, 2, 3, 5, 6, 7, 8];
    var xk = class extends J {
            constructor() {
                super(void 0, -1, wk)
            }
        },
        wk = [1];
    var yk = class extends J {
        constructor() {
            super()
        }
    };

    function zk(a) {
        var b = new Ak;
        return vd(b, 1, a)
    }

    function Bk(a, b) {
        return x(a, 2, b, "")
    }

    function Ck(a, b) {
        return x(a, 3, b, "")
    }

    function Dk(a, b) {
        return x(a, 4, b, "")
    }

    function Ek(a, b) {
        return x(a, 5, b, 0)
    }
    var Ak = class extends J {
            constructor() {
                super(void 0, -1, Fk)
            }
        },
        Gk = class extends J {
            constructor() {
                super()
            }
        },
        Ik = class extends J {
            constructor() {
                super(void 0, -1, Hk)
            }
        },
        Fk = [9],
        Hk = [2];
    var Kk = class extends J {
            constructor() {
                super(void 0, -1, Jk)
            }
        },
        Jk = [2];
    var Lk = class extends J {
            constructor() {
                super()
            }
        },
        Mk = [4, 5];
    var Nk = class extends J {
        constructor() {
            super()
        }
    };
    var Ok = class extends J {
        constructor() {
            super()
        }
    };
    var Pk = class extends J {
        constructor() {
            super()
        }
    };
    var Qk = class extends J {
        constructor() {
            super()
        }
    };
    var Rk = class extends J {
            constructor() {
                super()
            }
        },
        Sk = class extends J {
            constructor() {
                super()
            }
        },
        Tk = class extends J {
            constructor() {
                super()
            }
        },
        Uk = [2, 3];
    var Vk = class extends J {
            constructor() {
                super()
            }
        },
        Wk = [3, 4, 5, 6, 7, 8, 9];

    function Xk(a, b) {
        return md(a, 9, Yk, b)
    }
    var Zk = class extends J {
            constructor() {
                super()
            }
            Oa(a) {
                return w(this, 2, a)
            }
        },
        Yk = [4, 8, 5, 6, 9];

    function $k(a, ...b) {
        al(a, ...b.map(c => ({
            Zf: 7,
            message: c
        })))
    };

    function bl(a) {
        return JSON.stringify([a.map(b => [{
            [b.Zf]: b.message.toJSON()
        }])])
    };
    var cl = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function al(a, ...b) {
        a.l.push(...b);
        100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), dl(a)) : null === a.j && (a.j = setTimeout(() => {
            dl(a)
        }, 100))
    }

    function dl(a) {
        if (a.l.length) {
            var b = bl(a.l);
            a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.l = [];
            a.j = null
        }
    }
    var el = class {
            constructor() {
                this.A = cl;
                this.l = [];
                this.j = null
            }
        },
        fl = class extends el {};
    var O = a => {
        var b = "Kc";
        if (a.Kc && a.hasOwnProperty(b)) return a.Kc;
        b = new a;
        return a.Kc = b
    };
    class gl {
        constructor(a) {
            this.methodName = a
        }
    }
    var hl = new gl(15),
        il = new gl(2),
        jl = new gl(3),
        kl = new gl(5),
        ll = new gl(6),
        ml = new gl(7),
        nl = new gl(8),
        ol = new gl(14),
        pl = (a, b, c) => b[a.methodName] || c || (() => {});

    function ql(a, b) {
        a.l = c => pl(il, b, () => [])(c, 1);
        a.j = () => pl(jl, b, () => [])(1)
    }
    class rl {
        constructor() {
            this.l = () => [];
            this.j = () => []
        }
    };
    let Ui, sl;
    const gj = new ij(t);
    (a => {
        Ui = a || new Wi;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Ti();
        sl = new lj(gj);
        sl.C(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || fj() : gj.l && L(t, "load", () => {
            t.google_measure_js_timing || fj()
        })
    })();
    var tl = (a, b, c) => sl.Db(a, b, c),
        ul = (a, b) => sl.ga(a, b),
        vl = (a, b, c) => {
            const d = O(rl).j();
            !b.eid && d.length && (b.eid = d.toString());
            Vi(Ui, a, b, !0, c)
        },
        wl = (a, b) => sl.pa(a, b, void 0, void 0);
    var xl = (a, b) => {
        const c = bh();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
    };
    je(Id(Jd("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var yl = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Ef(a, "message", e));
                return g
            }
        },
        zl = (a, b, c, d = null) => {
            const e = yl(a, b, kf(c, () => e()), d);
            return e
        },
        Al = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Al(a[f], b, c, d, --e)
        };

    function Bl(a, b, c, d) {
        nh(d.origin) && "expandable-xpc-ready" == c.notify && Cl(a, b)
    }

    function Cl(a, b) {
        var c = a.Jc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Ua,
            f: a.Jf,
            g: a.Fe,
            h: a.sf,
            i: void 0
        });
        t.setTimeout(ul(220, Bi(() => {
            Og(c.document, ei(b))
        })), 0)
    };
    var Ml = class extends J {
            constructor() {
                super(void 0, -1, Dl)
            }
        },
        Dl = [15];
    var Nl = class extends J {
        constructor() {
            super()
        }
        getCorrelator() {
            return sd(this, 1)
        }
        setCorrelator(a) {
            return x(this, 1, a, 0)
        }
    };
    var Ol = class extends J {
        constructor() {
            super()
        }
    };
    let Pl = null,
        Ql = null;
    var Rl = () => {
            if (null != Pl) return Pl;
            Pl = !1;
            try {
                const a = Ng(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (Pl = !0);
                t.localStorage.getItem("google_logging") && (Pl = !0)
            } catch (a) {}
            return Pl
        },
        Sl = () => {
            if (null != Ql) return Ql;
            Ql = !1;
            try {
                const a = Ng(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) Ql = !0
            } catch (a) {}
            return Ql
        },
        Tl = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && Rl() && Og(t.document,
                je(Id(Jd("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let Ul = (new Date).getTime();
    var Vl = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var Wl = {
        si: 0,
        ri: 1,
        mi: 2,
        hi: 3,
        ni: 4,
        ii: 5,
        oi: 6,
        ki: 7,
        li: 8,
        gi: 9,
        ji: 10
    };
    var Xl = {
        ui: 0,
        vi: 1,
        ti: 2
    };

    function Yl(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Zl(a) {
        a = xb(a, b => new wh(b.top, b.right, b.bottom, b.left));
        a = $l(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function $l(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return yb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, xh(a[0]))
    };
    var Od = {
        fj: 0,
        Vh: 1,
        Yh: 2,
        Wh: 3,
        Xh: 4,
        ei: 8,
        qj: 9,
        Fi: 10,
        Gi: 11,
        mj: 16,
        Ih: 17,
        Hh: 24,
        Di: 25,
        Yg: 26,
        Xg: 27,
        we: 30,
        yi: 32,
        Ai: 40
    };
    var am = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        bm = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function cm(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new dm;
        return a.google_reactive_ads_global_state
    }
    class dm {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new em;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var em = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var fm = 728 * 1.38,
        gm = (a, b = 420) => (a = P(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        hm = a => {
            var b = P(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        jm = a => Math.max(0, im(a, !0) - P(a).clientHeight),
        P = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        im = (a, b) => {
            const c = P(a);
            return b ? c.scrollHeight == P(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        lm = (a, b) => km(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        mm = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        nm = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        om = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        pm = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        qm = (a, b, c, d, e) => {
            Vi(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        km = a => 26 === a || 27 === a || 40 === a;

    function rm(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var um = class {
        constructor() {
            this.l = new sm(this);
            this.j = 0
        }
        resolve(a) {
            rm(this);
            this.j = 1;
            this.B = a;
            tm(this.l)
        }
    };

    function tm(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var sm = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            tm(this)
        }
    };

    function vm(a, b) {
        wm(a).forEach(b, void 0)
    }

    function wm(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function xm(a, b) {
        return void 0 !== a.j[ym(b)]
    }

    function zm(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Am(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Bm = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = ym(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = ym(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = ym(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        xb() {
            return zm(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function ym(a) {
        return a instanceof Object ? String(Da(a)) : a + ""
    };
    const Cm = class {
        constructor(a) {
            this.j = new Bm;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return xm(this.j, a)
        }
    };
    const Dm = new Cm("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Em(a) {
        a && "function" == typeof a.Fa && a.Fa()
    };

    function Fm() {
        this.C = this.C;
        this.I = this.I
    }
    Fm.prototype.C = !1;
    Fm.prototype.Fa = function() {
        this.C || (this.C = !0, this.l())
    };

    function Gm(a, b) {
        a.C ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    Fm.prototype.l = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Hm(a) {
        a.j.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Im(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.j.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.j.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Jm = class extends Fm {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.j = b
        }
        l() {
            Hm(this);
            super.l()
        }
    };

    function Km(a, b) {
        const c = new Lm({
            first: a.P,
            second: b.P
        });
        a.Z(() => R(c, {
            first: a.P,
            second: b.P
        }));
        b.Z(() => R(c, {
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Mm(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new Lm(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.Z(e));
        return Nm(d)
    }

    function Om(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.P),
            d = new Lm(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.Z(e));
        return Nm(d)
    }

    function R(a, b) {
        a.P = b;
        a.j.forEach(c => {
            c(a.P)
        })
    }

    function Nm(a, b = Pm) {
        var c = a.P;
        const d = new Lm(a.P);
        a.Z(e => {
            b(e, c) || (c = e, R(d, e))
        });
        return d
    }

    function Qm(a, b) {
        return a.Z(b, !0)
    }

    function Rm(a, b, c) {
        return Qm(a, d => {
            d === b && c()
        })
    }

    function Sm(a, b) {
        if (!1 === a.P) b();
        else {
            var c = {
                Nb: null
            };
            c.Nb = Rm(a, !1, () => {
                c.Nb && (c.Nb(), c.Nb = null);
                b()
            })
        }
    }

    function Tm(a, b, c) {
        Nm(a).Z(d => {
            d === b && c()
        })
    }

    function Um(a, b) {
        a.l && a.l();
        a.l = b.Z(c => R(a, c), !0)
    }
    class Lm {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.A = 1;
            this.l = null
        }
        Z(a, b = !1) {
            const c = this.A++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new Lm(a(this.P));
            this.Z(c => R(b, a(c)));
            return b
        }
    }

    function Pm(a, b) {
        return a == b
    };

    function Vm(a, b) {
        ub(a.j, c => {
            c(b)
        })
    }
    var Wm = class {
        constructor() {
            this.j = []
        }
    };
    class Xm {
        constructor(a) {
            this.j = a
        }
        Z(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new Wm;
            this.Z(c => Vm(b, a(c)));
            return new Xm(b)
        }
    }

    function Ym(...a) {
        const b = new Wm;
        a.forEach(c => {
            c.Z(d => {
                Vm(b, d)
            })
        });
        return new Xm(b)
    };

    function Zm(a) {
        return Nm(Km(a.j, a.A).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : $m(c, b)
        }))
    }
    var bn = class {
        constructor(a) {
            this.l = a;
            this.j = new Lm(null);
            this.A = new Lm(null);
            this.B = new Wm;
            this.F = b => {
                null == this.j.P && 1 == b.touches.length && R(this.j, b.touches[0])
            };
            this.C = b => {
                const c = this.j.P;
                null != c && (b = an(c, b.changedTouches), null != b && (R(this.j, null), R(this.A, null), Vm(this.B, $m(c, b))))
            };
            this.D = b => {
                var c = this.j.P;
                null != c && (c = an(c, b.changedTouches), null != c && (R(this.A, c), b.preventDefault()))
            }
        }
    };

    function $m(a, b) {
        return {
            se: b.pageX - a.pageX,
            te: b.pageY - a.pageY
        }
    }

    function an(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function cn(a) {
        return Nm(Km(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : dn(c, b)
        }))
    }
    var en = class {
        constructor(a, b) {
            this.B = a;
            this.C = b;
            this.j = new Lm(null);
            this.l = new Lm(null);
            this.A = new Wm;
            this.G = c => {
                R(this.j, c)
            };
            this.D = c => {
                const d = this.j.P;
                null != d && (R(this.j, null), R(this.l, null), Vm(this.A, dn(d, c)))
            };
            this.F = c => {
                null != this.j.P && (R(this.l, c), c.preventDefault())
            }
        }
    };

    function dn(a, b) {
        return {
            se: b.screenX - a.screenX,
            te: b.screenY - a.screenY
        }
    };
    var hn = (a, b) => {
        const c = new fn(a, b);
        return () => gn(c)
    };

    function gn(a) {
        if (a.j) return !1;
        if (null == a.l) return jn(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return jn(a), !0;
        kn(a, b);
        return !0
    }

    function jn(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function kn(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            jn(a)
        }, b)
    }
    class fn {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function ln(a) {
        return mn(cn(a.j), Zm(a.l))
    }

    function nn(a) {
        return Ym(new Xm(a.j.A), new Xm(a.l.B))
    }
    var on = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function mn(a, b) {
        return Km(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function pn(a, b) {
        return new qn(a, b)
    }

    function rn(a) {
        a.win.requestAnimationFrame(() => {
            a.C || R(a.A, new hg(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function sn(a) {
        a.j || (a.j = !0, a.B.observe(a.element));
        return Nm(a.A, ig)
    }
    var qn = class extends Fm {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.A = new Lm(new hg(this.element.offsetWidth, this.element.offsetHeight));
            this.B = new ResizeObserver(() => {
                rn(this)
            })
        }
        l() {
            this.B.disconnect();
            super.l()
        }
    };

    function tn(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class un {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function vn(a, b) {
        a = a.getBoundingClientRect();
        return new wn(a.top + nm(b), a.bottom - a.top)
    }

    function xn(a) {
        return new wn(Math.round(a.j), Math.round(a.l))
    }
    class wn {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function yn(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class zn {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = hn(a, () => {
                if (null != this.C) {
                    var b = im(this.j, !0) - this.C;
                    1E3 < b && yn(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = im(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        Fa() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
        addListener(a) {
            this.D ? a(this.A) : this.l.push(a)
        }
    };

    function An(a) {
        return new Bn(a, new Jm(a, a.document.body), new Jm(a, a.document.documentElement))
    }

    function Cn(a) {
        const b = Dn(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        Im(a.j, "position", "fixed");
        Im(a.j, "top", `${-b.previousWindowScroll}px`);
        Im(a.j, "width", "100%");
        Im(a.j, "overflow-x", "hidden");
        Im(a.j, "overflow-y", "hidden");
        Im(a.l, "overflow-x", "hidden");
        Im(a.l, "overflow-y", "hidden")
    }

    function En(a) {
        const b = Dn(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null)
    }
    var Bn = class {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.l = c
        }
    };

    function Dn(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    };
    var Fn = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Gn {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Hn(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new In(d)
    }

    function Jn(a, b = 1) {
        a = a.j.slice(0);
        const c = new Gn(b);
        Ib(a, () => c.next());
        return new In(a)
    }
    const In = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new In(vb(this.j, a))
        }
        apply(a) {
            return new In(a(this.j.slice(0)))
        }
        sort(a) {
            return new In(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new In(b)
        }
    };
    class Kn {
        constructor(a) {
            this.j = new Cm(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Ln(a) {
        return new Mn({
            value: a
        }, null)
    }

    function Nn(a) {
        return new Mn(null, Error(a))
    }

    function On(a) {
        try {
            return Ln(a())
        } catch (b) {
            return new Mn(null, b)
        }
    }

    function Pn(a) {
        return null != a.j ? a.j.value : null
    }

    function Qn(a, b) {
        null != a.j && b(a.j.value)
    }

    function Rn(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Mn {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Mn ? a : Ln(a)) : this
        }
    };
    class Sn {
        constructor() {
            this.j = new Bm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Cm, this.j.set(a, c));
            c.add(b)
        }
    };

    function Tn(a) {
        return !a
    };
    var Vn = class extends J {
            constructor(a) {
                super(a, -1, Un)
            }
            getId() {
                return v(this, 3)
            }
        },
        Un = [4];
    class Wn {
        constructor(a, {
            od: b,
            Be: c,
            qf: d,
            ge: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new In(b || []);
            this.l = e;
            this.j = d
        }
    };
    var Xn = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Bm;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Zn = a => {
            var b = Yn(a);
            a = [];
            for (let c of b) b = String(c.mb), a.push(c.Pa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Yn = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                Pa: "a",
                mb: $n(c)
            });
            null != a.A && b.push({
                Pa: "as",
                mb: a.A
            });
            null != a.j && b.push({
                Pa: "i",
                mb: String(a.j)
            });
            null != a.l && b.push({
                Pa: "rp",
                mb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Pa.localeCompare(e.Pa)
            });
            b.unshift({
                Pa: "t",
                mb: ao(a.C)
            });
            return b
        },
        ao = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        $n = a => {
            a = a.j.slice(0).map(bo);
            a = JSON.stringify(a);
            return Ug(a)
        },
        bo = a => {
            const b = {};
            null != v(a, 7) && (b.q = v(a, 7));
            Yc(a,
                2) && (b.o = v(a, 2));
            Yc(a, 5) && (b.p = v(a, 5));
            return b
        };

    function co() {
        var a = new eo;
        return w(a, 2, 1)
    }
    var eo = class extends J {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return w(this, 1, a)
        }
    };

    function fo(a) {
        const b = [].slice.call(arguments).filter(lf(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.ud || []);
            d = Object.assign(d, e.yb())
        });
        return new go(c, d)
    }

    function ho(a) {
        switch (a) {
            case 1:
                return new go(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new go(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new go(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new go(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function io(a) {
        return null == a ? null : new go(null, {
            google_ml_rank: a
        })
    }

    function jo(a) {
        return null == a ? null : new go(null, {
            google_placement_id: Zn(a)
        })
    }

    function ko({
        Ve: a,
        bf: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new go(null, a)
    }
    class go {
        constructor(a, b) {
            this.ud = a;
            this.j = b
        }
        yb() {
            return this.j
        }
    };

    function lo() {
        var a = new mo;
        a = w(a, 1, 1);
        var b = new no;
        b = w(b, 2, !0);
        a = ld(a, 2, b);
        b = new oo;
        var c = new po;
        c = w(c, 1, 1);
        b = od(b, 1, po, c);
        return ld(a, 3, b)
    }
    var mo = class extends J {
            constructor(a) {
                super(a)
            }
        },
        no = class extends J {
            constructor(a) {
                super(a)
            }
        },
        oo = class extends J {
            constructor(a) {
                super(a, -1, qo)
            }
            j() {
                return y(this, ro, 2)
            }
        },
        po = class extends J {
            constructor(a) {
                super(a)
            }
        },
        ro = class extends J {
            constructor(a) {
                super(a)
            }
        },
        so = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return C(this, 2)
            }
        },
        qo = [1];
    var to = class extends J {
        constructor(a) {
            super(a)
        }
        j() {
            return sd(this, 1)
        }
    };
    var uo = class extends J {
        constructor(a) {
            super(a)
        }
        j() {
            return C(this, 1)
        }
        A() {
            return C(this, 2)
        }
    };
    var xo = class extends J {
            constructor(a) {
                super(a, -1, vo)
            }
            A() {
                return y(this, wo, 3)
            }
            j() {
                y(this, to, 5)
            }
        },
        wo = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return ed(this, 1)
            }
        },
        vo = [6];
    var yo = class extends J {
        constructor(a) {
            super(a)
        }
        j() {
            return sd(this, 3)
        }
        C() {
            return E(this, 4)
        }
        D() {
            return E(this, 7)
        }
        B() {
            return y(this, uo, 5)
        }
        A() {
            return y(this, to, 6)
        }
    };
    var Co = class extends J {
            constructor(a) {
                super(a, -1, zo)
            }
            D() {
                return v(this, 2)
            }
            C() {
                return v(this, 5)
            }
            j() {
                return A(this, Ao, 3)
            }
            A() {
                return v(this, 4)
            }
            B() {
                return bd(this, 6)
            }
            F() {
                return Zc(this, Bo, 7)
            }
        },
        Ao = class extends J {
            constructor(a) {
                super(a)
            }
        },
        Bo = class extends J {
            constructor(a) {
                super(a)
            }
        },
        zo = [3];
    var Eo = class extends J {
            constructor(a) {
                super(a, -1, Do)
            }
        },
        Do = [2];
    var Fo = class extends J {
        constructor(a) {
            super(a)
        }
    };
    var Ho = class extends J {
            constructor(a) {
                super(a, -1, Go)
            }
        },
        Go = [1];
    var Io = class extends J {
        constructor(a) {
            super(a)
        }
        Y() {
            return y(this, Vn, 1)
        }
        j() {
            return v(this, 2)
        }
    };
    var Jo = class extends J {
            constructor(a) {
                super(a)
            }
            getName() {
                return v(this, 4)
            }
        },
        Ko = class extends J {
            constructor(a) {
                super(a)
            }
        },
        Lo = class extends J {
            constructor(a) {
                super(a)
            }
        },
        Mo = class extends J {
            constructor(a) {
                super(a)
            }
        },
        No = [1, 2, 3];
    var Oo = class extends J {
        constructor(a) {
            super(a)
        }
        j() {
            return v(this, 1)
        }
    };
    var Ro = class extends J {
            constructor(a) {
                super(a, -1, Po)
            }
            j() {
                return A(this, Qo, 1)
            }
        },
        Qo = class extends J {
            constructor(a) {
                super(a)
            }
        },
        Po = [1];
    var So = class extends J {
        constructor(a) {
            super(a)
        }
    };
    var Uo = class extends J {
            constructor(a) {
                super(a, -1, To)
            }
        },
        To = [3, 4];
    var Vo = class extends J {
        constructor(a) {
            super(a)
        }
    };
    var Xo = class extends J {
            constructor(a) {
                super(a, -1, Wo)
            }
            Y() {
                return y(this, Vn, 1)
            }
            j() {
                return v(this, 2)
            }
        },
        Wo = [6, 7, 9, 10, 11];
    var Zo = class extends J {
            constructor(a) {
                super(a, -1, Yo)
            }
        },
        Yo = [4];
    var ap = class extends J {
            constructor(a) {
                super(a, -1, $o)
            }
        },
        bp = class extends J {
            constructor() {
                super()
            }
        },
        $o = [6];
    var ep = class extends J {
            constructor(a) {
                super(a, -1, cp)
            }
            j() {
                return dd(this, 1)
            }
            A() {
                return y(this, dp, 3)
            }
        },
        hp = class extends J {
            constructor(a) {
                super(a, -1, fp)
            }
            j() {
                return A(this, gp, 1)
            }
        },
        gp = class extends J {
            constructor(a) {
                super(a)
            }
        },
        dp = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return y(this, ip, 3)
            }
        },
        ip = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return td(this, jp, 2, kp)
            }
        },
        jp = class extends J {
            constructor(a) {
                super(a)
            }
        },
        lp = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return sd(this, 1)
            }
        },
        cp = [1, 4],
        fp = [1],
        kp = [1, 2];
    var mp = class extends J {
        constructor(a) {
            super(a)
        }
    };

    function np(a) {
        return y(a, op, 13)
    }
    var rp = class extends J {
            constructor(a) {
                super(a, -1, pp)
            }
            j() {
                return y(this, qp, 15)
            }
        },
        sp = class extends J {
            constructor() {
                super()
            }
        },
        tp = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return v(this, 1)
            }
        },
        vp = class extends J {
            constructor(a) {
                super(a, -1, up)
            }
        },
        wp = class extends J {
            constructor(a) {
                super(a)
            }
        },
        xp = class extends J {
            constructor(a) {
                super(a)
            }
        },
        op = class extends J {
            constructor(a) {
                super(a)
            }
        },
        yp = class extends J {
            constructor(a) {
                super(a)
            }
        },
        qp = class extends J {
            constructor(a) {
                super(a)
            }
            j() {
                return E(this, 18, !1)
            }
            B() {
                w(this, 18, !1)
            }
            A() {
                return E(this, 21, !1)
            }
        },
        zp = class extends J {
            constructor(a) {
                super(a)
            }
        },
        Ap = class extends J {
            constructor(a) {
                super(a)
            }
        },
        pp = [1, 2, 5, 7],
        up = [2, 5, 6, 11];
    var Bp = class extends J {
        constructor(a) {
            super(a)
        }
    };

    function Cp(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? xd(Bp, b) : null
        } catch (b) {
            return null
        }
    }

    function Dp(a, b) {
        if (void 0 !== a.Fc) {
            let c = Cp(b);
            c || (c = new Bp);
            void 0 !== a.Fc && w(c, 2, a.Fc);
            w(c, 1, Na() + 864E5);
            a = Ad(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Cp(b)) && v(a, 1) < Na()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function Ep(a) {
        var b = [];
        vm(a.getElementsByTagName("p"), function(c) {
            100 <= Fp(c) && b.push(c)
        });
        return b
    }

    function Fp(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        vm(a.childNodes, function(c) {
            b += Fp(c)
        });
        return b
    }

    function Gp(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Hp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const Ip = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.B)
            } catch (f) {}
            if (!b.length) return [];
            a = Db(b);
            a = Hp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.A) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Ep(a[c]),
                        e = this.A;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function Jp(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Kp(a) {
        return wm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Lp = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var Mp = new S(1082, !0),
        Np = new S(1209),
        Op = new T(1130, 100),
        Pp = new S(1150),
        Qp = new T(1126, 1E4),
        Rp = new T(1032, 200),
        Sp = new Lp(14),
        Tp = new T(1159, 500),
        Up = new S(1122, !0),
        Vp = new S(1196),
        Wp = new S(1160),
        Xp = new S(316),
        Yp = new S(334),
        Zp = new T(54),
        $p = new S(313),
        aq = new T(66, -1),
        bq = new T(65, -1),
        cq = new S(369),
        dq = new S(1205),
        eq = new S(368),
        fq = new T(1169, 61440),
        gq = new S(1171),
        hq = new S(1151),
        iq = new S(1212),
        jq = new T(1072, .75),
        kq = new T(1168, 61440),
        lq = new S(290),
        mq = new S(1147),
        nq = new S(380254521),
        oq = new Lp(1166),
        pq = new S(1E4),
        qq = new T(472785970, 500),
        rq = new S(447540098, !0),
        sq = new S(447540095, !0),
        tq = new S(447540099),
        uq = new S(447540096, !0),
        vq = new S(83),
        wq = new class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        }(472572701),
        xq = new S(439828594),
        yq = new S(77),
        zq = new S(78),
        Aq = new S(309),
        Bq = new S(80),
        Cq = new S(76),
        Dq = new S(1957),
        Eq = new S(380025941),
        Fq = new S(84),
        Gq = new S(1973),
        Hq = new S(188),
        Iq = new S(1971),
        Jq = new S(1162),
        Kq = new S(1175),
        Lq = new S(1120),
        Mq = new T(1142, 8),
        Nq = new T(1165, 1E3),
        Oq = new T(1158),
        Pq = new T(1157),
        Qq = new T(1195,
            1),
        Rq = new T(1119, 300),
        Sq = new T(1193, 100),
        Tq = new S(1191),
        Uq = new T(1103),
        Vq = new S(1192),
        Wq = new S(1176),
        Xq = new S(473840707),
        Yq = new T(1114, 1),
        Zq = new T(1116, 300),
        $q = new T(1110, 5),
        ar = new T(1111, 5),
        br = new T(1112, 5),
        cr = new T(1113, 5),
        dr = new T(1104),
        er = new T(1108),
        fr = new T(1106),
        gr = new T(1107),
        hr = new T(1105),
        ir = new S(1203),
        jr = new S(471002731),
        kr = new T(1115, -1),
        lr = new S(1121),
        mr = new T(1194, 1),
        nr = new S(473283545),
        or = new S(471262996),
        pr = new S(469675169),
        qr = new S(478725123),
        rr = new S(472491850),
        sr = new T(469675170,
            3E4),
        tr = new S(479047366),
        ur = new S(471682731),
        vr = new S(477209535),
        wr = new S(1928),
        xr = new S(1941),
        yr = new S(370946349),
        zr = new S(392736476),
        Ar = new T(406149835),
        Br = new S(432946749),
        Cr = new S(432938498),
        Dr = new T(1935);
    var Er = class {
            constructor() {
                const a = {};
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {}
            }
        },
        U = a => O(Er).A(a.j, a.defaultValue),
        V = a => O(Er).B(a.j, a.defaultValue);

    function Fr(a, b) {
        a = (new pg(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Gr(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Jp(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Hr(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Jp(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Jr = (a, b, c, d = 0) => {
            var e = Ir(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Rb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.jc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Gr(a, e.anchor, e.position)
        },
        Kr = (a, b, c, d = 0) => {
            U($p) ? Jr(a, b, c, d) : Gr(a, b, c)
        };

    function Ir(a, b, c) {
        const d = f => {
                f = Lr(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = Lr(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: Mr(a.previousSibling, d),
                    Rb: f => Mr(f.previousSibling, d),
                    jc: 0
                };
            case 2:
                return {
                    init: Mr(a.lastChild, d),
                    Rb: f => Mr(f.previousSibling, d),
                    jc: 0
                };
            case 3:
                return {
                    init: Mr(a.nextSibling, e),
                    Rb: f => Mr(f.nextSibling, e),
                    jc: 3
                };
            case 1:
                return {
                    init: Mr(a.firstChild, e),
                    Rb: f => Mr(f.nextSibling, e),
                    jc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Lr(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Mr(a, b) {
        return a && b(a) ? a : null
    };
    var Nr = (a, b = !1) => {
        try {
            return b ? (new hg(a.innerWidth, a.innerHeight)).round() : tg(a || window).round()
        } catch (c) {
            return new hg(-12245933, -12245933)
        }
    };

    function Or(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Pr(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new gg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Qr(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Rr(a) {
        -1 === a.l && (a.l = yb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class Sr {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var Tr = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function Ur(a, b) {
        Sg(a, (c, d) => {
            b[d] = c
        })
    }
    var Vr = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                Mc: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                Mc: c
            }
        },
        Wr = a => {
            if (a == a.top) return 0;
            for (; a && a != a.top && Kg(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var Xr = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Yr = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Zr = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const $r = (a, b, c) => {
        a = Xr(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var as = (a, b) => {
            b = b.parentElement;
            return b ? (a = Qg(b, a)) ? a.direction : "" : ""
        },
        bs = (a, b, c) => {
            if (0 === $r(a, b, c)) return !1;
            Zr(b, c, "0px");
            const d = $r(a, b, c);
            Zr(b, c, -1 * d + "px");
            a = $r(a, b, c);
            0 !== a && a !== d && Zr(b, c, d / (a - d) * d + "px");
            return !0
        };
    const cs = RegExp("(^| )adsbygoogle($| )");

    function ds(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = mg(d.Sc);
            a[e] = d.value
        }
    }

    function es(a, b, c, d, e, f) {
        a = fs(a, e);
        a.wa.setAttribute("data-ad-format", d ? d : "auto");
        gs(a, b, c, f);
        return a
    }

    function hs(a, b, c = null) {
        a = fs(a, {});
        gs(a, b, null, c);
        return a
    }

    function gs(a, b, c, d) {
        var e = [];
        if (d = d && d.ud) a.Wa.className = d.join(" ");
        a = a.wa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function fs(a, b) {
        const c = Fr(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.ic && ds(d, b.ic);
        a = (new pg(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Zc && (d.marginTop = b.Zc);
        b.zc && (d.marginBottom = b.zc);
        b.kb && ds(d, b.kb);
        c.appendChild(a);
        return {
            Wa: c,
            wa: a
        }
    }

    function is(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.yb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function js(a) {
        const b = Kp(a.document);
        ub(b, function(c) {
            const d = ks(a, c);
            var e;
            if (e = d) e = Xr(c, a), e = !((e ? e.y : 0) < P(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), is(a, c))
        })
    }

    function ks(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in Zf) a[Zf[c]] && (b[Zf[c]] = a[Zf[c]]);
        return b
    };
    class ls {
        constructor() {
            var a = N `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.B = Math.random();
            this.A = this.pa;
            this.D = a
        }
        ke(a) {
            this.j = a
        }
        C(a) {
            this.l = a
        }
        pa(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.B : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Fi(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (Og(t.document, ei(this.D)), t.error_rep_loaded = !0);
            return !1
        }
        Db(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.A(a, d, .01, c, "jserror")) throw d;
            }
        }
        ga(a, b, c, d) {
            return (...e) => this.Db(a, () => b.apply(c, e), d)
        }
        Ca(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.pa(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const ms = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var ns = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = $i();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && ms({
                        label: a.toString(),
                        value: g,
                        duration: ($i() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        os = (a, b) => ns(754,
            a, (c, d) => {
                (new ls).pa(c, d)
            }, b);

    function ps(a, b, c) {
        return ns(a, b, void 0, c).apply()
    }

    function qs(a, b) {
        return os(a, b).apply()
    }

    function rs(a) {
        if (!a) return null;
        var b = v(a, 7);
        if (v(a, 1) || a.getId() || 0 < dd(a, 4).length) {
            b = dd(a, 4);
            var c = v(a, 3),
                d = v(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Gp(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Gp(b[c]);
            a = (b = e) ? new Ip(b, v(a, 2), v(a, 5), ss(v(a, 6))) : null
        } else a = b ? new Ip(b, v(a, 2), v(a, 5), ss(v(a, 6))) : null;
        return a
    }
    var ts = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function ss(a) {
        return null == a ? a : ts[a]
    }

    function us(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = v(a[c], 1),
                e = v(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Sc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function vs(a, b) {
        var c = {};
        a && (c.Zc = v(a, 1), c.zc = v(a, 2), c.clearBoth = !!cd(a, 3));
        b && (c.ic = us(A(b, So, 3)), c.kb = us(A(b, So, 4)));
        return c
    }
    var ws = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        xs = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var ys = {
            Aa: "ama_success",
            ua: .1,
            xa: !0
        },
        zs = {
            Aa: "ama_failure",
            ua: .1,
            xa: !0
        },
        As = {
            Aa: "ama_inf_scr",
            ua: .1,
            xa: !0
        },
        Bs = {
            Aa: "ama_inf_scr",
            ua: .1,
            xa: !0
        },
        Cs = {
            Aa: "ama_coverage",
            ua: .1,
            xa: !0
        },
        Ds = {
            Aa: "ama_inf_scr",
            ua: 1,
            xa: !0
        },
        Es = {
            Aa: "ama_opt",
            ua: .1,
            xa: !0
        },
        Fs = {
            Aa: "ama_aud_sen",
            ua: 1,
            xa: !0
        },
        Gs = {
            Aa: "ama_improv",
            ua: .1,
            xa: !0
        };

    function Hs(a, b) {
        for (var c = 0; c < b.length; c++) a.ra(b[c]);
        return a
    }

    function Is(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class Js {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.I = 0
        }
        Oa(a) {
            this.F.wpc = a;
            return this
        }
        ra(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = Qd(this.F);
            0 < this.I && (b.t = this.I);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && kj(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Ks(a, b, c) {
        !b.xa || "pvc" in c || (c.pvc = qh(a.j));
        vl(b.Aa, c, b.ua)
    }

    function Ls(a, b, c) {
        c = c.B(a.j);
        b.xa && (c.pvc = qh(a.j));
        0 < b.ua && (c.r = b.ua, Ks(a, b, c))
    }
    var Ms = class {
        constructor(a) {
            this.j = a
        }
    };

    function Ns(a, b, c) {
        var d = a.A,
            e = P(a.j).clientHeight,
            f = y(a.l, so, 4) ? .j();
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        Ks(d, Fs, { ...c,
            evt: b,
            vh: e,
            eid: f,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        })
    }
    var Os = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c
        }
    };
    const Ps = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return es(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const Qs = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < A(this.j, Uo, 9).length ? A(this.j, Uo, 9)[0] : null,
                f = vs(y(this.j, Vo, 3), e);
            if (!e) return null;
            if (e = v(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new pg(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ic && ds(c.style, f.ic);
                d = (new pg(d)).createElement("INS");
                f.kb && ds(d.style, f.kb);
                c.appendChild(d);
                f = {
                    Wa: c,
                    wa: d
                };
                f.wa.setAttribute("data-ad-type", "text");
                f.wa.setAttribute("data-native-settings-key",
                    e);
                gs(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < A(this.j, Uo, 9).length ? A(this.j, Uo, 9)[0] : null;
            if (!a) return null;
            a = A(a, So, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == v(c, 1) && 0 < parseInt(v(c, 2), 10)) return parseInt(v(c, 2), 10)
            }
            return null
        }
    };
    const Rs = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        Sc: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    kb: g
                }
            } else c = {};
            a = es(d.document, a, f, e, c, b);
            a.wa.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        yb() {
            return this.j
        }
    };
    class Ss {
        constructor(a) {
            this.l = a
        }
        j() {
            return new go([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Ts = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.A
        }
        l(a) {
            a = this.B.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Us(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.Y();
            if (k) {
                var l = rs(k);
                if (l) {
                    var m = ws[v(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = y(e, Vo, 3)) ? cd(m, 3) : null;
                        l = new Ts(l, n);
                        n = ad(e, 10, 0, !1).slice(0);
                        Yc(k, 5) && n.push(1);
                        var q = h ? h : {};
                        h = v(e, 12);
                        k = Zc(e, eo, 4) ? y(e, eo, 4) : null;
                        1 == v(e, 8) ? (q = q.Ne || null, e = new Vs(l, new Ps(vs(y(e, Vo, 3), null)), q, m, 0, n, k, g, f, h, e)) : e = 2 == v(e, 8) ? new Vs(l, new Qs(e), q.rf || new Ss("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !==
                e && d.push(e)
        }
        return d
    }

    function Ws(a) {
        return a.C
    }

    function Xs(a) {
        return a.va
    }

    function Ys(a) {
        return U(Vp) ? (a.M || (a.M = a.I.l(a.A)), a.M) : a.I.l(a.A)
    }

    function Zs(a) {
        var b = a.J;
        a = a.A.document.createElement("div");
        U(Vp) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function $s(a) {
        return a.F instanceof Rs ? a.F.yb() : null
    }

    function at(a, b, c) {
        xm(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function bt(a, b) {
        a.C = !0;
        U(Vp) && (a.l && Hr(a.l), a.l = null);
        null != b && a.T.push(b)
    }

    function ct(a) {
        return Fr(a.A.document, a.J || !1)
    }

    function dt(a) {
        return a.F.A(a.A)
    }

    function et(a, b = null, c = null) {
        return new Vs(a.I, b || a.F, c || a.O, a.J, a.Za, a.Nc, a.qc, a.A, a.ba, a.G, a.B, a.D, a.V)
    }
    class Vs {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
            this.I = a;
            this.F = b;
            this.O = c;
            this.J = d;
            this.Za = e;
            this.Nc = f;
            this.qc = g ? g : new eo;
            this.A = h;
            this.ba = k;
            this.G = l;
            this.B = m;
            (a = !m) || (a = !(m.Y() && null != v(m.Y(), 5)));
            this.va = !a;
            this.D = n;
            this.V = q;
            this.T = [];
            this.C = !1;
            this.L = new Bm;
            this.M = this.l = null
        }
        U() {
            return this.A
        }
        j() {
            return this.I.j()
        }
    };
    var ft = a => a ? .google_ad_slot ? Ln(new Wn(1, {
            Be: a.google_ad_slot
        })) : Nn("Missing dimension when creating placement id"),
        ht = a => {
            switch (a.Za) {
                case 0:
                case 1:
                    var b = a.B;
                    null == b ? a = null : (a = b.Y(), null == a ? a = null : (b = b.j(), a = null == b ? null : new Wn(0, {
                        od: [a],
                        ge: b
                    })));
                    return null != a ? Ln(a) : Nn("Missing dimension when creating placement id");
                case 2:
                    return a = gt(a), null != a ? Ln(a) : Nn("Missing dimension when creating placement id");
                default:
                    return Nn("Invalid type: " + a.Za)
            }
        };
    const gt = a => {
        if (null == a || null == a.D) return null;
        const b = y(a.D, Vn, 1),
            c = y(a.D, Vn, 2);
        if (null == b || null == c) return null;
        const d = a.V;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new Wn(0, {
            od: [b, c],
            qf: d,
            ge: xs[a]
        })
    };

    function it(a) {
        const b = $s(a.W);
        return (b ? ft(b) : ht(a.W)).map(c => Zn(c))
    }

    function jt(a) {
        a.j = a.j || it(a);
        return a.j
    }

    function kt(a, b) {
        if (a.W.C) throw Error("AMA:AP:AP");
        Kr(b, a.Y(), a.W.j());
        bt(a.W, b)
    }
    const lt = class {
        constructor(a, b, c) {
            this.W = a;
            this.l = b;
            this.aa = c;
            this.j = null
        }
        Y() {
            return this.l
        }
        fill(a, b) {
            var c = this.W;
            (a = c.F.l(a, b, this.l, c.A)) && kt(this, a.Wa);
            return a
        }
    };
    const mt = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = gb(b, "&") ? jg(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Dm.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (mt(a, b[c])) return !0
        }
        return !1
    };
    var nt = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const ot = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return es(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return nt(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class pt {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = nt(a);
            return new go(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const qt = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.B
        }
        j() {
            return this.A
        }
    };
    const rt = {
        TABLE: {
            rb: new Kn([1, 2])
        },
        THEAD: {
            rb: new Kn([0, 3, 1, 2])
        },
        TBODY: {
            rb: new Kn([0, 3, 1, 2])
        },
        TR: {
            rb: new Kn([0, 3, 1, 2])
        },
        TD: {
            rb: new Kn([0, 3])
        }
    };

    function st(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = tb(e, f), 0 > c || b.push(new tt(a, [f], c, f, 3, Cg(f).trim(), d));
        return b
    }

    function ut(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && k && e.push(new tt(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Cg(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new tt(a, d, h, b, 2, k, c));
        return e
    }

    function vt(a, b) {
        return a.j - b.j
    }

    function wt(a) {
        const b = co();
        return new Vs(new qt(a.tc, a.uc), new Ps({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class tt {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.nb = b.slice(0);
            this.j = c;
            this.tc = d;
            this.uc = e;
            this.B = f;
            this.l = g
        }
        U() {
            return this.l
        }
    };

    function xt(a) {
        return Cb(a.C ? ut(a.l, a.j, a.A) : [], a.B ? st(a.l, a.B, a.j, a.A) : []).filter(b => {
            var c = b.tc.tagName;
            c ? (c = rt[c.toUpperCase()], b = null != c && c.rb.contains(b.uc)) : b = !1;
            return !b
        })
    }
    class yt {
        constructor(a, b, c) {
            this.j = a;
            this.B = b.Ob;
            this.C = b.Ed;
            this.l = b.articleStructure;
            this.A = c
        }
    };

    function zt(a, b) {
        return qs(() => {
            if (U(Vp)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Ys(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.C) {
                            var k = h;
                            var l = h,
                                m = null;
                            try {
                                var n = Ys(l);
                                if (n) {
                                    m = Zs(l);
                                    Kr(m, n, l.j());
                                    var q = m
                                } else q = null
                            } catch (F) {
                                throw Hr(m), F;
                            }
                            k.l = q
                        }(h = h.l) && d.push({
                            Hf: f,
                            anchorElement: g,
                            df: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = nm(b), n = om(b), e = 0; e < d.length; e++) {
                        const {
                            Hf: F,
                            anchorElement: D,
                            df: B
                        } = d[e];
                        f = At(B, n, q);
                        c.push(new lt(F, D, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const F = [];
                    for (let D = 0; D < a.length; D++) {
                        var r = a[D],
                            z = Ys(r);
                        z && F.push({
                            ce: r,
                            anchorElement: z
                        })
                    }
                    for (z = 0; z < F.length; z++) {
                        r = n;
                        g = r.push; {
                            k = F[z];
                            l = k.anchorElement;
                            m = k.ce;
                            const D = Zs(m);
                            try {
                                Kr(D, l, m.j()), h = D
                            } catch (B) {
                                throw Hr(D), B;
                            }
                        }
                        g.call(r, h)
                    }
                    c = nm(b);
                    d = om(b);
                    for (g = 0; g < n.length; g++) e = At(n[g], d, c), f = F[g], q.push(new lt(f.ce, f.anchorElement, e))
                } finally {
                    for (c = 0; c < n.length; c++) Hr(n[c])
                }
            }
            return q
        }, b)
    }

    function At(a, b, c) {
        a = a.getBoundingClientRect();
        return new un(a.left + b, a.top + c, a.right - a.left)
    };

    function Bt(a, b) {
        const c = xt(b);
        c.sort(vt);
        return new Ct(a, b, c)
    }

    function Dt(a, b, c) {
        return new Vs(new qt(b, c), new Ps({}), null, !0, 2, [], null, a.j, null, null, null, a.C.l, null)
    }
    var Ct = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].nb[0];
                        Ca(b) && 1 == b.nodeType ? a = Dt(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = Dt(this, a, 3))
                    }
                    a = zt([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var Et = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const Ft = {
            1: "0.5vp",
            2: "300px"
        },
        Gt = {
            1: 700,
            2: 1200
        },
        Ht = {
            [1]: {
                pe: "3vp",
                Xc: "1vp",
                ne: "0.3vp"
            },
            [2]: {
                pe: "900px",
                Xc: "300px",
                ne: "90px"
            }
        };

    function It(a, b, c) {
        var d = Jt(a),
            e = P(a).clientHeight || Gt[d],
            f = void 0;
        c && (f = (c = (c = Kt(A(c, Co, 2), d)) ? y(c, Bo, 7) : void 0) ? Lt(c, e) : void 0);
        c = f;
        f = Jt(a);
        a = P(a).clientHeight || Gt[f];
        const g = Mt(Ht[f].Xc, a);
        a = null === g ? Nt(f, a) : new Ot(g, g, Pt(g, g, 8), 8, .3, c);
        c = Mt(Ht[d].pe, e);
        f = Mt(Ht[d].Xc, e);
        e = Mt(Ht[d].ne, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new Ot(d, b, Pt(d, b, a.l), a.l, a.B, a.j)
    }

    function Qt(a, b) {
        const c = Jt(a);
        a = P(a).clientHeight || Gt[c];
        if (b = Kt(A(b, Co, 2), c))
            if (b = Rt(b, a)) return b;
        return Nt(c, a)
    }

    function St(a) {
        const b = Jt(a);
        return Nt(b, P(a).clientHeight || Gt[b])
    }

    function Tt(a, b) {
        let c = {
            cc: a.A,
            gb: a.C
        };
        for (let d of a.D) d.adCount <= b && (c = d.Wc);
        return c
    }

    function Ut(a, b, c) {
        var d = cd(b, 2);
        b = y(b, Co, 1);
        const e = P(c).clientHeight || Gt[Jt(c)];
        c = Mt(b ? .D(), e) ? ? a.A;
        const f = Mt(b ? .C(), e) ? ? a.C;
        d = d ? [] : Vt(b ? .j(), e) ? ? a.D;
        const g = b ? .A() ? ? a.l,
            h = b ? .B() ? ? a.B;
        a = (b ? .F() ? Lt(y(b, Bo, 7), e) : null) ? ? a.j;
        return new Ot(c, f, d, g, h, a)
    }
    class Ot {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function Kt(a, b) {
        for (let c of a)
            if (v(c, 1) == b) return c;
        return null
    }

    function Vt(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = v(d, 1);
            const e = Mt(v(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Wc: {
                    cc: e,
                    gb: Mt(v(d, 3), b)
                }
            })
        }
        return c
    }

    function Rt(a, b) {
        const c = Mt(v(a, 2), b),
            d = Mt(v(a, 5), b);
        if (null === c) return null;
        const e = v(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = Vt(f, b);
        if (null === f) return null;
        const g = y(a, Bo, 7);
        return new Ot(c, d, f, e, bd(a, 6), g ? Lt(g, b) : void 0)
    }

    function Nt(a, b) {
        a = Mt(Ft[a], b);
        return new Ot(null === a ? Infinity : a, null, [], 3, null)
    }

    function Mt(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Jt(a) {
        a = 900 <= P(a).clientWidth;
        return Hg() && !a ? 1 : 2
    }

    function Pt(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Wc: {
                cc: 2 * a,
                gb: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Wc: {
                cc: 3 * a,
                gb: 3 * b
            }
        }]
    }

    function Lt(a, b) {
        return {
            Ud: Mt(v(a, 2), b) || 0,
            Td: v(a, 3) || 1,
            lb: Mt(v(a, 1), b) || 0
        }
    };

    function Yt(a, b, c) {
        return Yl({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Zt(a) {
        if (!a.length) return null;
        const b = Zl(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new $t(b, a)
    }
    class $t {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function au(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var gu = (a, b) => {
        const c = Db(b.document.querySelectorAll(".google-auto-placed")),
            d = bu(b),
            e = cu(b),
            f = du(b),
            g = eu(b),
            h = Db(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Db(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = Db(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Db(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Db(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, q] of [
                [a.Sb, c],
                [a.Ya, d],
                [a.nf, e],
                [a.Tb, f],
                [a.Ub, g],
                [a.lf, h],
                [a.mf, k],
                [a.pf, l]
            ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = fu(m);
        b = fu(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const hu = a => {
            const b = au(a);
            return b ? vb(xb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        bu = a => Db(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        cu = a => Db(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        du = a => (hu(a) || Db(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Db(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        eu = a => Db(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var fu = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var iu = sl.ga(453, gu),
        ju;
    ju = sl.ga(454, (a, b) => {
        const c = Db(b.document.querySelectorAll(".google-auto-placed")),
            d = bu(b),
            e = cu(b),
            f = du(b),
            g = eu(b),
            h = Db(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Db(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = Db(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return fu([].concat(!0 === a.Sb ? c : [], !0 === a.Ya ? d : [], !0 === a.nf ? e : [], !0 === a.Tb ? f : [], !0 === a.Ub ? g : [], !0 === a.lf ? h : [], !0 === a.mf ? k : [], !0 === a.pf ? b : []))
    });

    function ku(a, b, c) {
        const d = lu(a);
        b = mu(d, b, c);
        return new nu(a, d, b)
    }

    function ou(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function pu(a) {
        return a.j.map(b => b.box)
    }

    function qu(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class nu {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function lu(a) {
        const b = iu({
                Ya: !1
            }, a),
            c = om(a),
            d = nm(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && gb(e.className, "google-auto-placed")) || ou(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Tj: e ? 1 : 0
            } : null
        }).filter(lf(e => null === e))
    }

    function mu(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? ru(a, b) : xb(a, d => new $t(d.box, 1))
    }

    function ru(a, b) {
        a = xb(a, d => new $t(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Yt(d, a[f], b)) {
                        d = Zt([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function su(a, b, c) {
        const d = tn(c, b);
        return !zb(a, e => Yl(e, d))
    }

    function tu(a, b, c, d, e) {
        e = e.aa;
        const f = tn(e, b),
            g = tn(e, c),
            h = tn(e, d);
        return !zb(a, k => Yl(k, g) || Yl(k, f) && !Yl(k, h))
    }

    function uu(a, b, c, d) {
        const e = pu(a);
        if (su(e, b, d.aa)) return !0;
        if (!tu(e, b, c.Ud, c.lb, d)) return !1;
        const f = new $t(tn(d.aa, 0), 1);
        a = vb(a.B, g => Yt(g, f, c.lb));
        b = yb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Td ? !1 : !0
    };
    var vu = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function wu(a, b) {
        const c = new Sn,
            d = new Cm;
        b.forEach(e => {
            if (td(e, Ko, 1, No)) {
                e = td(e, Ko, 1, No);
                if (y(e, Io, 1) && y(e, Io, 1).Y() && y(e, Io, 2) && y(e, Io, 2).Y()) {
                    const g = xu(a, y(e, Io, 1).Y()),
                        h = xu(a, y(e, Io, 2).Y());
                    if (g && h)
                        for (var f of vu({
                                anchor: g,
                                position: y(e, Io, 1).j()
                            }, {
                                anchor: h,
                                position: y(e, Io, 2).j()
                            })) c.set(Da(f.anchor), f.position)
                }
                y(e, Io, 3) && y(e, Io, 3).Y() && (f = xu(a, y(e, Io, 3).Y())) && c.set(Da(f), y(e, Io, 3).j())
            } else td(e, Lo, 2, No) ? yu(a, td(e, Lo, 2, No), c) : td(e, Mo, 3, No) && zu(a, td(e, Mo, 3, No), d)
        });
        return new Au(c, d)
    }
    class Au {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const yu = (a, b, c) => {
            y(b, Io, 2) ? (b = y(b, Io, 2), (a = xu(a, b.Y())) && c.set(Da(a), b.j())) : y(b, Vn, 1) && (a = Bu(a, y(b, Vn, 1))) && a.forEach(d => {
                d = Da(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        zu = (a, b, c) => {
            y(b, Vn, 1) && (a = Bu(a, y(b, Vn, 1))) && a.forEach(d => {
                c.add(Da(d))
            })
        },
        xu = (a, b) => (a = Bu(a, b)) && 0 < a.length ? a[0] : null,
        Bu = (a, b) => (b = rs(b)) ? b.query(a) : null;

    function Cu(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Du(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Eu(a) {
        a = Fu(a);
        return a.has("all") || a.has("after")
    }

    function Gu(a) {
        a = Fu(a);
        return a.has("all") || a.has("before")
    }

    function Fu(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Du(a) {
        const b = Fu(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var Hu = class {
        constructor() {
            this.j = new Set
        }
    };

    function Iu(a) {
        return function(b) {
            return zt(b, a)
        }
    }

    function Ju(a) {
        const b = P(a).clientHeight;
        return b ? Ma(Ku, b + nm(a)) : hf
    }

    function Lu(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return hf;
        const d = pu(c || ku(b));
        return e => su(d, a, e.aa)
    }

    function Mu(a, b, c, d) {
        if (0 > a || 0 > b.Ud || 0 > b.Td || 0 > b.lb) throw Error("ama::ead:nd");
        return Infinity === a ? hf : e => uu(d || ku(c, b.lb), a, b, e)
    }

    function Nu(a) {
        if (!a.length) return hf;
        const b = new Kn(a);
        return c => b.contains(c.Za)
    }

    function Ou(a) {
        return function(b) {
            for (let c of b.Nc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Pu(a) {
        return a.length ? function(b) {
            const c = b.Nc;
            return a.some(d => -1 < c.indexOf(d))
        } : jf
    }

    function Qu(a, b) {
        if (0 >= a) return jf;
        const c = P(b).scrollHeight - a;
        return function(d) {
            return d.aa.j <= c
        }
    }

    function Ru(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[v(c.qc, 2) || 0]
        }
    }

    function Su(a) {
        return a.length ? b => a.includes(v(b.qc, 1) || 0) : jf
    }

    function Tu(a, b) {
        const c = wu(a, b);
        return function(d) {
            var e = d.Y();
            d = xs[d.W.j()];
            var f = Da(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(Da(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(Da(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Uu() {
        const a = new Hu;
        return function(b) {
            var c = b.Y();
            b = xs[b.W.j()];
            a: switch (b) {
                case 1:
                    var d = Eu(c.previousElementSibling) || Gu(c);
                    break a;
                case 4:
                    d = Eu(c) || Gu(c.nextElementSibling);
                    break a;
                case 2:
                    d = Gu(c.firstElementChild);
                    break a;
                case 3:
                    d = Eu(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Cu(a, c, b))
        }
    }
    const Ku = (a, b) => b.aa.j >= a,
        Vu = (a, b, c) => {
            c = c.aa.l;
            return a <= c && c <= b
        };
    var Wu = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = Ju(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Xu = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new Xo;
            var b = y(this.A.l, Vn, 1);
            a = ld(a, 1, b);
            a = w(w(a, 2, 2), 8, 1);
            a = Us([a], this.l);
            return zt(a, this.l)[0] || null
        }
    };
    var Yu = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Zu = a => {
            const b = P(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function $u(a, b) {
        if (!b) return !1;
        const c = Da(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = $u(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function av(a, b) {
        return zb(b.nb, c => $u(a, c))
    }
    class bv {
        constructor(a) {
            this.j = new Bm;
            this.l = a
        }
    };
    class cv {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var ev = (a, {
            Xj: b = !1,
            Yj: c = 3,
            Vf: d = null
        } = {}) => {
            a = xt(a);
            return dv(a, b, c, d)
        },
        dv = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(vt);
            a = [];
            b = new cv(b, d);
            for (const l of e) {
                d = b;
                e = {
                    kc: l,
                    Vb: 51 > l.B.length ? !1 : null != d.A ? !av(d.A, l) : !0
                };
                if (d.B || e.Vb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].kc;
                        b: {
                            var g = f.U();
                            var h = f.nb[f.nb.length - 1];f = e.kc.nb[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (mt(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Vb && d.l.push(e.kc)) : (d.j = [e], d.l = e.Vb ? [e.kc] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Vb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var gv = (a, b) => {
            a = fv(a, b);
            const c = new bv(b);
            return Fn(a, d => ev(d, {
                Vf: c
            }))
        },
        fv = (a, b) => {
            const c = new Bm;
            a.forEach(d => {
                var e = rs(y(d, Vn, 1));
                if (e) {
                    const f = e.toString();
                    xm(c, f) || c.set(f, {
                        articleStructure: d,
                        Ee: e,
                        Ob: null,
                        Ed: !1
                    });
                    e = c.get(f);
                    (d = (d = y(d, Vn, 2)) ? v(d, 7) : null) ? e.Ob = e.Ob ? e.Ob + "," + d : d: e.Ed = !0
                }
            });
            return Am(c).map(d => {
                const e = d.Ee.query(b.document);
                return e.length ? new yt(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var hv = (a, b) => {
        b = fv(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => Yu(c)(d.j)).filter(d => Zu(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };
    var jv = (a, b, c) => {
        if (E(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new Xo;
                var e = new Vn;
                e = w(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = ld(d, 1, e);
                d = w(w(d, 2, 2), 8, 1);
                d = Us([d], a);
                d = zt(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = iv(c);b = hv(a, b);
            for (const f of b) {
                b: switch (b = a, d = f, e = c, e) {
                    case 1:
                        b = new Xu(b, d);
                        break b;
                    case 2:
                        b = new Et(Bt(b, d));
                        break b;
                    case 3:
                        b = new Wu(b, Bt(b, d));
                        break b;
                    default:
                        throw Error(`Unknown position: ${e}`);
                }
                if (b = b.j()) {
                    a =
                        b;
                    break a
                }
            }
            a = null
        }
        return a
    };

    function iv(a) {
        if (E(a, 2)) return 3;
        switch (ed(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${ed(a,1)}`);
        }
    };
    var kv = class {
            constructor(a) {
                this.j = a
            }
        },
        nv = (a, b, c, d, e) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return Nn("Player already created");
            var f = a.document;
            const g = f.createElement("div");
            g.id = "google-auto-placed-read-aloud-player";
            M(g, {
                padding: "5px"
            });
            const h = f.createElement("script");
            var k = ai `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            h.textContent = Xd(k);
            ff(h);
            g.appendChild(h);
            lv(f, g, Jd("https://www.google-analytics.com/analytics.js"));
            lv(f, g, Jd("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            f = f.createElement("google-read-aloud-player");
            f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            f.setAttribute("data-url", c.url);
            f.setAttribute("data-locale", d);
            f.setAttribute("data-voice", "en-us-m-6");
            e && (Yc(e, 1) && 0 != ed(e, 1) && f.setAttribute("data-docking-begin-trigger", mv[ed(e, 1)]), null != v(e, 2) && f.setAttribute("data-experiment",
                e.j()));
            g.appendChild(f);
            kt(b, g);
            return Ln(new kv(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const lv = (a, b, c) => {
            a = a.createElement("script");
            gf(a, je(Id(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        mv = {
            [1]: "out-of-view"
        };
    class ov {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function pv() {
        const {
            promise: a,
            resolve: b
        } = new ov;
        return {
            promise: a,
            resolve: b
        }
    };

    function qv(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = pv();
        b[a] = d;
        c();
        return d
    }

    function rv(a, b, c) {
        return qv(a, b, () => {
            Og(b.document, c)
        }).promise
    };

    function sv(a, b, c, d) {
        a = rv(7, a, c).then(e => {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: Yc(d, 1) && E(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        sl.Ca(915, a);
        return new tv(a)
    }

    function uv(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        sl.Ca(956, a)
    }
    var tv = class {
        constructor(a) {
            this.j = a
        }
    };

    function vv(a) {
        const b = a.A.j;
        b.addEventListener("firstplay", () => {
            if (!a.l) {
                a.l = !0;
                b.pause();
                const c = performance.now();
                uv(a.B, () => {
                    b.play();
                    Ns(a.j, "preroll", {
                        Vj: performance.now() - c
                    })
                });
                Ns(a.j, "play", {})
            }
        })
    }
    var wv = class {
        constructor(a, b, c) {
            this.A = a;
            this.B = b;
            this.j = c;
            this.l = !1
        }
    };

    function xv(a, b, c, d, e, f, g) {
        return 0 == d.length ? Nn("No ArticleStructure found") : y(c, no, 2) ? Ln(new yv(a, b, d, c, e, f, g ? g : "en")) : Nn("No AudioSenseConfig.PlacementConfig found")
    }

    function zv(a) {
        const b = jv(a.B, a.G, y(a.l, no, 2));
        if (b) {
            var c = !!a.C.Fb && Av(a);
            c && (a.D = sv(a.B, a.F, a.C.Fb, y(a.l, oo, 3) ? .j() || new ro));
            var d = nv(a.B, b, a.C, a.I, y(a.l, so, 4) || void 0);
            null != d.j ? (a.A = d.j.value, a.A.j.addEventListener("firstview", () => {
                Ns(a.j, "view", {})
            }), c && vv(new wv(a.A, a.D, a.j)), Ns(a.j, "place", {
                sts: "ok",
                pp: b.aa.j
            })) : Ns(a.j, "place", {
                sts: "wf"
            })
        } else Ns(a.j, "place", {
            sts: "pf"
        })
    }

    function Av(a) {
        return (a = y(a.l, oo, 3)) ? A(a, po, 1).some(b => 1 === ed(b, 1)) : !1
    }
    var yv = class {
        constructor(a, b, c, d, e, f, g) {
            this.B = a;
            this.j = new Os(a, b, d);
            this.G = c;
            this.l = d;
            this.C = e;
            this.F = f;
            this.I = g;
            this.A = this.D = null
        }
    };
    var Bv = {},
        Cv = {},
        Dv = {},
        Ev = {},
        Fv = {};

    function Gv() {
        throw Error("Do not instantiate directly");
    }
    Gv.prototype.wd = null;
    Gv.prototype.Ba = function() {
        return this.content
    };
    Gv.prototype.toString = function() {
        return this.content
    };

    function Hv(a) {
        if (a.xd !== Bv) throw Error("Sanitized content was not of kind HTML.");
        return Oe(a.toString())
    }

    function Iv() {
        Gv.call(this)
    }
    Ra(Iv, Gv);
    Iv.prototype.xd = Bv;

    function Jv(a, b) {
        return null != a && a.xd === b
    };

    function Kv(a) {
        if (null != a) switch (a.wd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Lv(a) {
        return Jv(a, Bv) ? a : a instanceof Me ? Mv(Le(a).toString()) : a instanceof Me ? Mv(Le(a).toString()) : Mv(String(String(a)).replace(Nv, Ov), Kv(a))
    }
    var Mv = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.wd = d);
            return c
        }
    }(Iv);

    function Pv(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Qv(a) {
        return Jv(a, Bv) ? String(String(a.Ba()).replace(Rv, "").replace(Sv, "&lt;")).replace(Tv, Ov) : String(a).replace(Nv, Ov)
    }

    function Uv(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Vv(a) {
        if (null == a) return " null ";
        if (Jv(a, Cv)) return a.Ba();
        if (a instanceof Yd || a instanceof Yd) return Xd(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Wv, Xv) + "'"
        }
    }

    function W(a) {
        Jv(a, Fv) ? a = Pv(a.Ba()) : null == a ? a = "" : a instanceof xe ? a = Pv(we(a)) : a instanceof xe ? a = Pv(we(a)) : a instanceof Je ? a = Pv(Ie(a)) : a instanceof Je ? a = Pv(Ie(a)) : (a = String(a), a = Yv.test(a) ? a : "zSoyz");
        return a
    }
    const Zv = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Ov(a) {
        return Zv[a]
    }
    const $v = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Xv(a) {
        return $v[a]
    }
    const aw = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function bw(a) {
        return aw[a]
    }
    const Nv = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Tv = /[\x00\x22\x27\x3c\x3e]/g,
        Wv = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        cw = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Yv = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        dw =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function ew(a) {
        return String(a).replace(cw, bw)
    }
    const Rv = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Sv = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var fw = void 0;

    function gw() {
        void 0 === fw && (fw = 18);
        return fw
    }
    var hw = void 0;

    function iw() {
        void 0 === hw && (hw = 18);
        return hw
    }

    function jw() {
        return Mv('<svg width="' + Qv(iw()) + '" height="' + Qv(gw()) + '" viewBox="0 0 ' + Qv(gw()) + " " + Qv(iw()) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="white"/></svg>')
    };
    var kw = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        init() {
            if (2 === this.j ? .A() ? .j()) {
                var a = {
                    host: "iDropnews.com"
                };
                var b = a.host;
                var c = a.Bf;
                a = a.Af;
                c = void 0 === c ? 24 : c;
                b = "<style>.autoprose-searchbox {background: #000; border: 1px solid #dcdcdc; border-radius: 8px; bottom: " + W(void 0 === a ? 24 : a) + "px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); height: " + W(56) + "px; position: fixed; right: " + W(c) + "px; width: 292px;}.autoprose-searchbox-text-bg {background: #fff; border: 1px solid #e0e0e0; border-radius: " + W(16) + "px; box-sizing: border-box; height: " +
                    W(32) + "px; left: 56px; position: absolute; top: calc(50% - " + W(32) + "px / 2); width: 224px;}.autoprose-searchbox-text {color: #3c4043; font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 14px; left: 24px; letter-spacing: 0.2px; line-height: " + W(20) + "px; position: relative; top: calc(50% - " + W(20) + "px / 2);}.autoprose-search-icon {left: 19px; position: relative; top: calc(50% - " + W(gw()) + 'px / 2);}</style><div class="autoprose-searchbox"><div class="autoprose-search-icon">' + jw() +
                    '</div><div class="autoprose-searchbox-text-bg"><div class="autoprose-searchbox-text">Search ' + Lv(b) + "</div></div></div>";
                b = Mv(b);
                b = Hv(b)
            } else c = c || {}, b = c.Bf, c = c.Af, b = void 0 === b ? 16 : b, c = void 0 === c ? 16 : c, b = "<style>.autoprose-search-button {background: #000; border-radius: " + W(24) + "px; bottom: " + W(c) + "px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); height: " + W(48) + "px; position: fixed; right: " + W(b) + "px; width: 48px;}.autoprose-search-icon {left: " + W((48 - iw()) / 2) + "px; position: relative; top: " + W((48 - gw()) /
                2) + 'px;}</style><div class="autoprose-search-button"><div class="autoprose-search-icon">' + jw() + "</div></div>", b = Mv(b), b = Hv(b);
            this.l.appendChild(yg(document, b))
        }
    };

    function lw(a) {
        y(a.j, xo, 31) ? .j();
        const b = a.l.document,
            c = b.createElement("div");
        c.classList.add("auto-prose-wrapper");
        b.body.appendChild(c);
        (new kw(c, y(a.j, xo, 31))).init()
    }
    var mw = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };
    const nw = ["-webkit-text-fill-color"];

    function ow(a) {
        if (Qb) {
            {
                const c = Qg(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = pw(a)
                } else a = qw()
            }
        } else a = qw();
        return a
    }
    var qw = () => {
        const a = {
            all: "initial"
        };
        ub(nw, b => {
            a[b] = "unset"
        });
        return a
    };

    function pw(a) {
        ub(nw, b => {
            delete a[b]
        });
        return a
    };
    var rw = class {
        constructor(a) {
            this.j = a
        }
        Ba(a) {
            const b = a.document.createElement("div");
            M(b, ow(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, ow(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var sw = (a, b) => (b = y(b, Ro, 6)) ? gv(b.j(), a).map(c => wt(c)) : [];

    function tw(a, b, c) {
        a.Ga.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    var uw = class {
        constructor(a, b, c, d, e, f) {
            this.Ga = a;
            this.l = "9d449ff4a772956c6";
            this.j = b;
            this.host = c;
            this.language = d;
            this.B = e;
            this.A = f
        }
        init() {
            this.Ga.setAttribute("id", "prose-iframe");
            this.Ga.setAttribute("width", "100%");
            this.Ga.setAttribute("height", "100%");
            var a = this.Ga,
                b = ye({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = we(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = te(a) || ue;
            a = this.j;
            b = this.host;
            var d = this.language,
                e = this.B.replace("${website}",
                    this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                f = Mv;
            Jv(c, Dv) || Jv(c, Ev) ? c = ew(c) : c instanceof pe ? c = ew(qe(c)) : c instanceof pe ? c = ew(qe(c)) : c instanceof $d ? c = ew(ie(c).toString()) : c instanceof $d ? c = ew(ie(c).toString()) : (c = String(c), c = dw.test(c) ? c.replace(cw, bw) : "about:invalid#zSoyz");
            a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
                Qv(c) + '" alt="' + Qv(b) + ' icon"><p class="cse-header"><strong>' + Lv(e) + '</strong></p><div class="gcse-search" data-gname="' + Qv("auto-rs-prose") + '" data-adclient="' + Qv(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + Qv(b) + '" data-gl="' + Qv(d) + '" data-personalizedAds="false"></div>');
            a = Hv(a);
            b = {
                style: ye({
                    margin: 0
                })
            };
            d = {
                src: le(Jd("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] =
                d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = Se("script", f);
            g = Pe("body", b, [a, g]);
            this.Ga.srcdoc = Le(g)
        }
    };

    function vw(a, b) {
        return new ww(a, b)
    }

    function xw(a) {
        const b = yw(a);
        ub(a.j.maxZIndexListeners, c => c(b))
    }

    function yw(a) {
        a = Tg(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class zw {
        constructor(a) {
            this.j = cm(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(yw(this))
        }
    }

    function Aw(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            xw(b);
            a.j = d
        }
    }

    function Bw(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            xw(b);
            a.j = null
        }
    }
    class ww {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function Cw(a) {
        L(a.l, "click", () => Dw(a));
        L(a.G, "click", () => void Dw(a));
        const b = a.width / a.win.innerWidth;
        L(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.C && (a.B.style.transform = `translateX(${a.width}px)`)
        })
    }

    function Dw(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        Jb(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.F) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var Ew = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.F = [];
            this.C = !0;
            b = new pg(a.document);
            this.l = b.ka("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.G = b.ka("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ka("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.B = b.ka("DIV", {
                "class": "adpub-drawer"
            }, this.G, this.j);
            this.A = b.ka("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.B);
            this.D = b.ka("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.D.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            var f = this.width,
                g = a.innerWidth;
            e = Mv("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                W(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + W(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + W(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + W(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                W(e) + "px; overflow-y: auto; padding-top: " + W(5) + "px; width: " + W(f) + "px;}</style>");
            d.call(c, Gg(b, Hv(e)));
            c.appendChild(this.A);
            M(this.D, ow(a))
        }
        init() {
            this.win.document.body.appendChild(this.D);
            Cw(this)
        }
        V(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.C = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.A.style.transitionDelay = "0s";
            this.A.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.B.style.transform = "translateX(0)"
        }
        ba(a) {
            this.F.push(a)
        }
    };

    function Fw(a) {
        L(a.J, "click", () => Gw(a));
        L(a.B, "mousedown", () => {
            const d = f => {
                    Hw(a, f.movementY)
                },
                e = () => {
                    Iw(a);
                    Ef(a.B, "mousemove", d);
                    Ef(a.B, "mouseup", e);
                    Ef(a.B, "mouseleave", e)
                };
            L(a.B, "mousemove", d);
            L(a.B, "mouseup", e);
            L(a.B, "mouseleave", e)
        });
        L(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const k = h.touches[0];
                    0 === Jw(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var l = 0 === Jw(a) && a.l.scrollTop;
                        const m = k.target === a.B || k.target.parentElement === a.B;
                        if (!l || m) l = k.screenY - e.screenY,
                            Hw(a, l), l = 0 < l && 0 === a.l.scrollTop, l = a.I && !l, h.cancelable && !l && h.preventDefault()
                    }
                    e = k
                },
                g = () => {
                    Iw(a);
                    Ef(a.j, "touchmove", f);
                    Ef(a.j, "touchend", g);
                    Ef(a.j, "touchcancel", g)
                };
            L(a.j, "touchmove", f, {
                passive: !1
            });
            L(a.j, "touchend", g);
            L(a.j, "touchcancel", g)
        });
        L(a.C, "touchstart", () => {});
        const b = a.A / a.win.innerHeight,
            c = a.F / a.A;
        L(a.win, "resize", () => {
            a.A = Math.floor(b * a.win.innerHeight);
            a.F = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            const d = a.I ? 0 : a.A - a.F;
            a.l.style.height = `${a.A}px`;
            a.j.style.transform = a.L ? `translateY(${a.A+ 
a.D}px)` : `translateY(${d+a.D}px)`
        })
    }

    function Kw(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (k, l, m) => {
                try {
                    const n = m.map(q => new Touch(q));
                    k.dispatchEvent(new TouchEvent(l, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: n
                    }))
                } catch {
                    l = new UIEvent(l, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const n of m) k.dispatchEvent(Object.assign(l, {
                        touches: [n]
                    }))
                }
            },
            f = k => {
                k = k.contentDocument;
                for (const l of d) L(k, l, m => {
                    m = [...m.touches].map(n => ({
                        clientX: n.clientX,
                        clientY: n.clientY,
                        force: n.force,
                        identifier: n.identifier,
                        pageX: n.pageX,
                        pageY: n.pageY,
                        radiusX: n.radiusX,
                        radiusY: n.radiusY,
                        rotationAngle: n.rotationAngle,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        target: a.l
                    }));
                    e(a.j, l, m)
                })
            },
            g = k => {
                if ((void 0 === c || c.includes(k.origin)) && d.includes(k.data ? .type) && Array.isArray(k.data ? .touches)) {
                    var l = k.data.type;
                    k = k.data.touches.map(m => ({ ...m,
                        target: a.l
                    }));
                    e(a.j, l, k)
                }
            },
            h = k => {
                k.contentWindow ? L(k.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        "complete" === b.contentDocument ? .readyState && (h(b), f(b));
        L(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function Lw(a, b, c) {
        a.T.set(b, a.win.document.documentElement.style.getPropertyValue(b) ? ? "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Mw(a, b) {
        const c = a.T.get(b) ? ? "";
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Gw(a) {
        a.L = !0;
        a.I = !1;
        Mw(a, "position");
        Mw(a, "width");
        Mw(a, "transform");
        Mw(a, "overflow");
        Mw(a, "touch-action");
        null != a.G && (a.win.document.documentElement.scrollTop = a.G, a.win.document.body.scrollTop = a.G);
        Mw(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.A+a.D}px)`;
        a.J.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        Jb(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        for (const b of a.O) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function Hw(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(Jw(a) + b, 0) + a.D;
        a.j.style.transform = `translateY(${b}px)`;
        Jb(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function Iw(a) {
        const b = Jw(a);
        if (a.I) 50 < b ? Gw(a) : 0 !== b && Nw(a, 0);
        else {
            const c = a.A - a.F;
            b < c - 50 ? Nw(a, 0) : b > c + 50 ? Gw(a) : b !== c && Nw(a, a.A - a.F)
        }
    }

    function Jw(a) {
        return Number(((new DOMMatrix(a.j.style.transform ? ? null)).f - a.D).toFixed(1))
    }

    function Nw(a, b) {
        a.L = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.J.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.D}px)`
    }
    var Ow = class {
        constructor(a, b, c) {
            this.win = a;
            this.F = b;
            this.A = c;
            this.O = [];
            this.T = new Map;
            this.I = !1;
            this.L = !0;
            this.G = null;
            b = new pg(a.document);
            this.J = b.ka("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ka("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.B = b.ka("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ka("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ka("DIV", {
                "class": "cse-drawer"
            }, this.B, this.l);
            this.C = b.ka("DIV", {
                "class": "cse-drawer-container"
            }, this.J, this.j);
            this.M = b.ka("DIV", {
                "class": "adpub-drawer-root"
            });
            this.D = a.innerHeight - (c + 30 - 20);
            c = this.M.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.A;
            var f = this.D;
            e = Mv("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + W(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                W(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + W(20) + "px " + W(20) + "px 0 0; background: white; display: flex; height: " + W(30) + "px; justify-content: center; margin-top: " + W(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + W(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, Gg(b, Hv(e)));
            c.appendChild(this.C);
            M(this.M, ow(a))
        }
        init() {
            this.win.document.body.appendChild(this.M);
            Fw(this)
        }
        V(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.G = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            Lw(this, "transform", `translateY(${-this.G}px)`);
            Lw(this, "position", "fixed");
            Lw(this, "width", "100%");
            Lw(this, "overflow", "hidden");
            Lw(this, "touch-action", "none");
            Lw(this, "scroll-behavior", "auto");
            this.C.style.transform =
                `translateY(${this.G}px)`;
            Nw(this, this.A - this.F)
        }
        ba(a) {
            this.O.push(a)
        }
    };

    function Pw(a, b) {
        const c = a.document.createElement("div");
        M(c, ow(a));
        a.document.body.appendChild(c);
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            me: c,
            shadowRoot: a
        }
    }

    function Qw(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function Rw(a, b) {
        const c = new Lm(b.P);
        Tm(b, !0, () => void R(c, !0));
        Tm(b, !1, () => {
            a.setTimeout(() => {
                b.P || R(c, !1)
            }, 700)
        });
        return Nm(c)
    };
    var Sw = void 0;

    function Tw(a) {
        a = a.top;
        if (!a) return null;
        a = new Uw(a);
        a.init();
        return a
    }

    function Vw(a) {
        a.K.history.state === a.A || a.K.history.pushState(a.A, "");
        a.j = !0
    }

    function Ww(a) {
        a.j && (a.j = !1, a.K.history.state === a.A && a.K.history.back())
    }
    var Uw = class extends Fm {
        constructor(a) {
            super();
            this.K = a;
            this.B = new Wm;
            this.j = !1;
            this.A = Xw(a);
            this.D = b => {
                this.j && b.state !== this.A && (this.j = !1, Vm(this.B))
            }
        }
        init() {
            this.K.addEventListener("popstate", this.D)
        }
        l() {
            this.K.removeEventListener("popstate", this.D);
            super.l()
        }
    };

    function Xw(a) {
        a.googConNextHistoryStateId = a.googConNextHistoryStateId || 0;
        return `goog_con_state_id_${a.googConNextHistoryStateId++}`
    };

    function Yw(a, b, c) {
        var d = vw(new zw(a), c.zIndex - 1);
        const e = Pw(a, c.Ec),
            f = e.shadowRoot;
        var g = f.appendChild,
            h = new pg(a.document);
        var k = c.Gd;
        var l = c.Dd || !1,
            m = c.vd,
            n = c.zIndex;
        if (c.bk ? ? !0) {
            void 0 === Sw && (Sw = 20);
            var q = Sw
        } else q = 0;
        k = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(n) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            W(k) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + W(q) + "px; transition: transform " + W(.5) + "s ease-in-out;" + (l ? "left: 0; border-top-right-radius: " + W(q) + "px; border-bottom-right-radius: " + W(q) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + W(q) + "px; border-bottom-left-radius: " + W(q) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (l ? "text-align: left;" :
                "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + Qv(m) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        k = Mv(k);
        g.call(f, Gg(h, Hv(k)));
        g = Qw("hd-content-container", f);
        g.appendChild(b);
        Jb(a.document.body.offsetHeight);
        b = {
            sb: Qw("hd-drawer-container", f),
            Qc: Qw("hd-modal-background", f),
            Bc: g,
            Re: Qw("hd-close-button", f),
            Uc: e
        };
        d = new Zw(a, b, An(a), d);
        d.init();
        c.Gc && (a = Tw(a)) && $w(d, a);
        return d
    }

    function $w(a, b) {
        Tm(a.j, !0, () => {
            Vw(b)
        });
        Tm(a.j, !1, () => {
            Ww(b)
        });
        (new Xm(b.B)).Z(() => void a.collapse());
        Gm(a, Ma(Em, b))
    }

    function ax(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function bx(a) {
        const {
            Qc: b,
            Re: c
        } = ax(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var Zw = class extends Fm {
        constructor(a, b, c, d) {
            super();
            this.B = b;
            this.A = new Lm(!1);
            this.j = Rw(a, this.A);
            Tm(this.j, !0, () => {
                Cn(c);
                Aw(d)
            });
            Tm(this.j, !1, () => {
                Hm(c.j);
                Hm(c.l);
                En(c);
                Bw(d)
            })
        }
        show({
            Ad: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            ax(this).sb.classList.add("hd-revealed");
            R(this.A, !0);
            a && Tm(this.j, !1, () => {
                this.Fa()
            })
        }
        collapse() {
            ax(this).sb.classList.remove("hd-revealed");
            R(this.A, !1)
        }
        isVisible() {
            return this.j
        }
        init() {
            bx(this)
        }
        l() {
            const a = this.B.Uc.me,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };
    var cx = void 0;

    function dx() {
        void 0 === cx && (cx = 20);
        return cx
    }
    var ex = void 0;

    function fx() {
        void 0 === ex && (ex = 30);
        return ex
    }

    function gx(a) {
        return Mv('<div class="ved-handle" id="' + Qv(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function hx(a) {
        return ln(a.j).map(b => b ? ix(a, b) : 0)
    }

    function ix(a, b) {
        switch (a.direction) {
            case 0:
                return jx(-b.te);
            case 1:
                return jx(-b.se);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function kx(a) {
        return nn(a.j).map(b => ix(a, b))
    }
    var lx = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function jx(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.D
    }

    function mx(a) {
        const {
            ha: b,
            Ia: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || nx(a);
        Y(a).sb.classList.add("ved-revealed");
        R(a.A, !0)
    }

    function ox(a) {
        return Rw(a.win, a.A)
    }

    function px(a, b) {
        const c = new Lm(b());
        (new Xm(a.G)).Z(() => void R(c, b()));
        return Nm(c)
    }

    function qx(a) {
        const {
            ha: b,
            hc: c
        } = Y(a);
        return px(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function rx(a) {
        const {
            ha: b,
            hc: c
        } = Y(a);
        return px(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function sx(a) {
        const {
            ha: b
        } = Y(a);
        return px(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function tx(a) {
        return Om(qx(a), sx(a))
    }

    function ux(a) {
        const {
            ha: b,
            Ia: c
        } = Y(a);
        return px(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function nx(a) {
        Y(a).Ia.classList.add("ved-snap-point-top");
        var b = vx(a, Y(a).Ia);
        Y(a).ha.scrollTop = b;
        wx(a)
    }

    function xx(a) {
        Rm(qx(a), !0, () => {
            const {
                Fd: b,
                Eb: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Rm(qx(a), !1, () => {
            const {
                Fd: b,
                Eb: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function yx(a) {
        const b = pn(a.win, Y(a).Bc);
        Qm(sn(b), () => void zx(a));
        Gm(a, Ma(Em, b))
    }

    function Ax(a) {
        Rm(Bx(a), !0, () => {
            Y(a).Zd.classList.remove("ved-hidden")
        });
        Rm(Bx(a), !1, () => {
            Y(a).Zd.classList.add("ved-hidden")
        })
    }

    function Cx(a) {
        const b = () => void Vm(a.F),
            {
                Qc: c,
                Ia: d,
                hf: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Tm(Dx(a), !0, b)
    }

    function Ex(a) {
        Tm(ox(a), !1, () => {
            nx(a)
        })
    }

    function wx(a) {
        Sm(a.j, () => void Vm(a.G))
    }

    function zx(a) {
        if (!a.j.P) {
            var {
                yd: b,
                Bc: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(Fx(a), d);
            R(a.j, !0);
            var e = Gx(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    R(a.j, !1)
                })
            })
        }
    }

    function Bx(a) {
        const {
            ha: b,
            Ia: c
        } = Y(a);
        return px(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Dx(a) {
        return Mm(a.B.map(Tn), Hx(a))
    }

    function Hx(a) {
        return px(a, () => 0 === Y(a).ha.scrollTop)
    }

    function vx(a, b) {
        ({
            Eb: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Ix(a, b) {
        R(a.B, !0);
        const {
            Eb: c,
            ha: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void Jx(a, b)
    }

    function Jx(a, b) {
        const {
            Eb: c,
            ha: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).ha.scrollTop = b;
        wx(a);
        R(a.B, !1)
    }

    function Gx(a) {
        const b = Y(a).ha.scrollTop;
        Ix(a, b);
        return () => void Jx(a, b)
    }

    function Fx(a) {
        const {
            ha: b,
            hc: c,
            yd: d,
            Ia: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var Kx = class extends Fm {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.D = b;
            this.J = c;
            this.F = new Wm;
            this.G = new Wm;
            this.A = new Lm(!1);
            this.B = new Lm(!1);
            this.j = new Lm(!1)
        }
        init() {
            nx(this);
            xx(this);
            yx(this);
            Ax(this);
            Cx(this);
            Ex(this);
            Y(this).ha.addEventListener("scroll", () => void wx(this))
        }
        l() {
            const a = this.D.Uc.me,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };

    function Lx(a, b, c) {
        var d = vw(new zw(a), c.zIndex - 1),
            e = Pw(a, c.Ec),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new pg(a.document);
        var k = 100 * c.ae;
        var l = 100 * c.Hd;
        k = Mv("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(c.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            W(l) + "%; transition: transform " + W(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + W(dx()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            W(k / l * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + W((l - k) / l * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            W(k / l * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + W(k / l * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + W(fx() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            W(dx()) + "px " + W(dx()) + "px 0 0; background: white; display: flex; height: " + W(fx()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            gx("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + gx("ved-fixed-handle") + "</div></div></div>");
        g.call(f, Gg(h, Hv(k)));
        g = Qw("ved-content-container", f);
        g.appendChild(b);
        Jb(a.document.body.offsetHeight);
        b = {
            sb: Qw("ved-drawer-container", f),
            Qc: Qw("ved-modal-background", f),
            qe: Qw("ved-ui-revealer", f),
            ha: Qw("ved-scroller",
                f),
            Eb: Qw("ved-scrolled-stack", f),
            hf: Qw("ved-fully-closed-anchor", f),
            Ia: Qw("ved-partially-extended-anchor", f),
            yd: Qw("ved-content-sizer", f),
            Bc: g,
            Zj: Qw("ved-moving-handle", f),
            hc: Qw("ved-moving-handle-holder", f),
            gf: Qw("ved-fixed-handle", f),
            Fd: Qw("ved-fixed-handle-holder", f),
            Zd: Qw("ved-over-scroll-block", f),
            Uc: e
        };
        e = b.gf;
        e = new on(new en(a, e), new bn(e));
        f = e.j;
        f.C.addEventListener("mousedown", f.G);
        f.B.addEventListener("mouseup", f.D);
        f.B.addEventListener("mousemove", f.F, {
            passive: !1
        });
        f = e.l;
        f.l.addEventListener("touchstart",
            f.F);
        f.l.addEventListener("touchend", f.C);
        f.l.addEventListener("touchmove", f.D, {
            passive: !1
        });
        b = new Kx(a, b, new lx(e));
        b.init();
        d = new Mx(a, b, An(a), d);
        Gm(d, Ma(Em, b));
        d.init();
        c.Gc && (a = Tw(a)) && Nx(d, a);
        return d
    }

    function Nx(a, b) {
        Tm(ox(a.j), !0, () => {
            Vw(b)
        });
        Tm(ox(a.j), !1, () => {
            Ww(b)
        });
        (new Xm(b.B)).Z(() => void a.collapse());
        Gm(a, Ma(Em, b))
    }

    function Ox(a) {
        Tm(Mm(tx(a.j), ux(a.j)), !0, () => {
            Y(a.j).Ia.classList.remove("ved-snap-point-top")
        });
        Rm(rx(a.j), !0, () => {
            Y(a.j).ha.classList.add("ved-no-snap")
        });
        Rm(rx(a.j), !1, () => {
            Y(a.j).ha.classList.remove("ved-no-snap")
        });
        Tm(rx(a.j), !1, () => {
            var b = a.j;
            var c = Y(b).hc;
            c = Ix(b, vx(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function Px(a) {
        const b = a.j.J;
        hx(b).Z(c => {
            c = -c;
            if (0 < c) {
                const {
                    qe: d
                } = Y(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                qe: c
            } = Y(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        kx(b).Z(c => {
            30 < -c && a.collapse()
        })
    }
    var Mx = class extends Fm {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            Tm(ox(b), !0, () => {
                Cn(c);
                Aw(d)
            });
            Tm(ox(b), !1, () => {
                Hm(c.j);
                Hm(c.l);
                En(c);
                Bw(d)
            })
        }
        show({
            Ad: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            mx(this.j);
            a && Tm(ox(this.j), !1, () => {
                this.Fa()
            })
        }
        collapse() {
            var a = this.j;
            Y(a).sb.classList.remove("ved-revealed");
            R(a.A, !1)
        }
        isVisible() {
            return ox(this.j)
        }
        init() {
            (new Xm(this.j.F)).Z(() => {
                this.collapse()
            });
            Ox(this);
            Px(this);
            Jb(this.win.document.body.offsetHeight)
        }
    };

    function Qx(a) {
        if (a.A instanceof Ow || a.A instanceof Ew) a.A.init(), a.A.V(a.B), a.A instanceof Ow && Kw(a.A, a.B), a.A.ba(() => void Bw(a.L)), a.F.init()
    }

    function Rx(a) {
        let b;
        a.l.id = "cse-overlay-div";
        M(a.l, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.C.createElement("DIV");
        b.id = "cse-overlay-close-button";
        M(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.D.classList.add("gsc-modal-background-image");
        a.D.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.l);
        a.j.document.body.appendChild(a.D);
        const c = () => {
            "flex" === a.l.style.display && (a.l.style.display = "none");
            a.D.classList.remove("gsc-modal-background-image-visible");
            Bw(a.L)
        };
        b.onclick = c;
        a.D.onclick =
            c;
        a.l.appendChild(b);
        a.l.appendChild(a.B);
        a.F.init()
    }

    function Sx(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        const b = a.T.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.j._googCsa("relatedsearch", {
            pubId: a.O,
            styleId: "5134551505",
            hl: a.J,
            fexp: a.M,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.ba.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }
    var Tx = class {
        constructor(a, b, c, d, e, f, g) {
            this.j = a;
            this.T = b;
            this.J = d ? .j() || "en";
            this.V = d ? .A() || "Search results from ${website}";
            this.I = e;
            this.G = f;
            this.M = g;
            this.O = c.replace("ca", "partner");
            this.L = vw(new zw(a), 1E5);
            this.C = new pg(a.document);
            this.l = this.C.createElement("DIV");
            this.D = this.C.createElement("DIV");
            this.B = this.C.createElement("IFRAME");
            this.F = new uw(this.B, this.O, a.location.host, this.J, this.V, this.M);
            f ? (a = this.B, a = this.G ? 2 === ih() ? Lx(this.j, a, {
                ae: .95,
                Hd: .95,
                zIndex: 100001
            }) : Yw(this.j, a, {
                Gd: `${Math.round(.8* 
this.j.innerWidth)}px`,
                vd: "",
                Dd: !1,
                zIndex: 100001
            }) : null) : this.I ? 2 === ih() ? (a = Math.round(.95 * this.j.innerHeight) - 30, a = new Ow(this.j, a, a)) : a = new Ew(this.j, Math.round(.8 * this.j.innerWidth)) : a = null;
            this.A = a
        }
        init() {
            if (0 !== this.T.length && (this.I || !this.j.document.querySelector('script[src*="cse.google.com/cse"]'))) {
                if (this.G) this.F.init();
                else if (this.I) Qx(this);
                else {
                    Rx(this);
                    var a = this.C.createElement("SCRIPT"),
                        b = N `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                    b = $h(b, new Map([
                        ["language", this.J]
                    ]));
                    gf(a, b);
                    this.j.document.head.appendChild(a)
                }
                a = this.C.createElement("SCRIPT");
                gf(a, N `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                Sx(this)
            }
        }
        ba(a, b) {
            this.G || Aw(this.L);
            this.I || this.G ? (tw(this.F, a, b), (() => {
                const c = new ResizeObserver(async e => {
                        this.B.height = 0;
                        await new Promise(f => this.j.requestAnimationFrame(f));
                        this.B.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        const e = this.B.contentDocument ? .documentElement;
                        e ? c.observe(e) : (console.warn("iframe body missing"),
                            setTimeout(d, 1E3))
                    };
                d();
                this.A.show()
            })()) : (this.D.classList.add("gsc-modal-background-image-visible"), this.l.style.display = "flex", tw(this.F, a, b))
        }
    };

    function Ux(a) {
        const b = ct(a.A.W),
            c = a.C.Ba(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Ze: b,
            Ue: c
        }
    }
    class Vx {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new Lm(null)
        }
        init() {
            const a = Ux(this);
            this.j = a.Ze;
            kt(this.A, this.j);
            R(this.l, a.Ue)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            R(this.l, null)
        }
        F() {
            return this.l
        }
    };

    function Wx(a) {
        var b = sw(a.l, a.j);
        b = zt(b, a.l).sort(Xx);
        var c = 0 == b.length ? [] : [b[Math.floor(b.length / 2)]];
        var d = a.l;
        b = [];
        for (var e = 0; e < c.length; e++) {
            const f = c[e],
                g = "autors-container-" + e,
                h = d.document.createElement("div");
            h.setAttribute("id", g);
            (new Vx(d, f, new rw(h))).init();
            b.push(g)
        }
        c = y(a.j, yo, 28) ? .A() ? .j() || y(a.j, yo, 28) ? .j() || 0;
        d = y(a.j, yo, 28) ? .C() || !1;
        e = y(a.j, yo, 28) ? .D() || !1;
        (new Tx(a.l, b, a.A, y(a.j, yo, 28) ? .B(), d, e, c)).init()
    }
    var Yx = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.A = c
        }
    };

    function Xx(a, b) {
        return a.aa.j - b.aa.j
    };
    var Zx = {
            Zg: "google_ads_preview",
            Kh: "google_mc_lab",
            ai: "google_anchor_debug",
            Zh: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            xi: "google_scr_debug",
            zi: "google_ia_debug_allow_onclick",
            Si: "googleads",
            we: "google_pedestal_debug",
            lj: "google_responsive_slot_preview",
            kj: "google_responsive_dummy_ad",
            Rg: "google_audio_sense",
            Sg: "google_auto_gallery",
            Ug: "google_auto_storify_swipeable",
            Tg: "google_auto_storify_scrollable"
        },
        $x = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var ay = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        pj: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function by(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = cy(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function cy(a) {
        let b = "";
        Sg(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function dy() {
        var a = t.location;
        let b = !1;
        Sg(Zx, c => {
            by(a, c) && (b = !0)
        });
        return b
    }

    function ey(a, b) {
        switch (a) {
            case 1:
                return by(b, "google_ia_debug");
            case 2:
                return by(b, "google_bottom_anchor_debug");
            case 3:
                return by(b, "google_anchor_debug") || by(b, "googleads");
            case 4:
                return by(b, "google_scr_debug")
        }
    };
    var fy = (a, b, c) => {
        const d = [];
        y(a, Zo, 18) && d.push(2);
        b.ea && d.push(0);
        y(a, yo, 28) && 1 == ed(y(a, yo, 28), 1) && d.push(1);
        y(a, xo, 31) && 1 == ed(y(a, xo, 31), 1) && d.push(5);
        (y(a, mo, 27) && 1 == ed(y(a, mo, 27), 1) || by(c, "google_audio_sense")) && d.push(3);
        y(a, ap, 29) && d.push(4);
        y(a, mp, 30) && d.push(6);
        return d
    };

    function gy(a, b) {
        const c = og(a).createElement("IMG");
        hy(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function iy(a, b) {
        const c = b.document.createElement("button");
        hy(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function jy(a, b, c) {
        const d = og(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.B);
        hy(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function ky(a) {
        const b = a.document.createElement("ins");
        hy(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class ly {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Lm(!1)
        }
        Ba(a, b, c, d) {
            const e = gy(a, d),
                f = gy(a),
                g = iy(this, a),
                h = jy(this, a, c);
            a = ky(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.Z(k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Kd() {
            return 40
        }
        Xd() {
            R(this.j, !1);
            return 0
        }
        Yd() {
            R(this.j, !0)
        }
    }

    function hy(a, b) {
        M(b, ow(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function my(a, b) {
        const c = b.document.createElement("button");
        ny(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function oy(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, ow(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, ow(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function ny(a, b, c) {
        M(c, ow(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class py {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.G = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        Ba(a) {
            const b = a.document.createElement("div");
            ny(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = og(a).createElement("IMG");
                c.src = this.B;
                ny(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            ny(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = my(this, a);
            c.appendChild(b);
            return this.A ? oy(this, a, c, this.A) : c
        }
    };
    var qy = (a, b) => {
        b = b.filter(c => 5 == v(y(c, eo, 4), 1) && 1 == v(c, 8));
        b = Us(b, a);
        a = zt(b, a);
        a.sort((c, d) => d.aa.j - c.aa.j);
        return a[0] || null
    };
    var vy = a => {
            let b = 0;
            try {
                var c = a.K;
                b |= c != c.top ? 512 : 0;
                var d = a.K;
                var e = Math.min(d.screen.width || 0, d.screen.height || 0);
                b |= e ? 320 > e ? 8192 : 0 : 2048;
                var f = a.K;
                b |= f.navigator && ry(f.navigator.userAgent) ? 1048576 : 0;
                if (a.dc) var g = b | (a.K.innerHeight >= a.dc ? 0 : 1024);
                else {
                    var h = a.K;
                    g = b | (h.innerHeight >= h.innerWidth ? 0 : 8)
                }
                b = g;
                b |= gm(a.K, a.Oc);
                b |= hm(a.K)
            } catch (k) {
                b |= 32
            }
            switch (a.rd) {
                case 2:
                    sy(a.K, a.ja) && (b |= 16777216);
                    break;
                case 1:
                    ty(a.K, a.ja) && (b |= 16777216)
            }
            a.Qe && uy(a.K, a.ja) && (b |= 16777216);
            return b
        },
        ry = a => /Android 2/.test(a) ||
        /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        sy = (a, b = null) => {
            const c = wy(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), xy) + 15, 3);
            return yy(a, c, b)
        },
        ty = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), xy) + 15,
                f = wy(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return yy(a, f, b)
        },
        uy = (a, b = null) => null != zy(a, b),
        zy = (a, b = null) => {
            var c = a.innerWidth;
            const d = a.innerHeight,
                e = V(Oq);
            c =
                wy(c, 10, d - e, d, 10);
            return Ay(a, c, b)
        },
        By = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = wy(c, 3, e - b, e, 3);
                f = Ay(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        yy = (a, b, c = null) => null != Ay(a, b, c);

    function Ay(a, b, c = null) {
        for (const d of b)
            if (b = Cy(a, d, c)) return b;
        return null
    }

    function Cy(a, b, c = null) {
        const d = Dy(a.document, b.x, b.y);
        return d ? Ey(d, a, b, c) || Fy(d, a, b, c) || null : null
    }
    var Dy = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function Fy(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = Ey(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var wy = (a, b, c, d, e) => {
        const f = [];
        for (let l = 0; l < e; l++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    k = e - 1;
                g.push.call(g, {
                    x: (0 == h ? 0 : m / h) * a,
                    y: c + (0 == k ? 0 : l / k) * (d - c)
                })
            }
        return f
    };

    function Ey(a, b, c, d = null) {
        if ("fixed" !== ji(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= mi(a).width && 1 >= mi(a).height ? !0 : !1;
        d && Vi(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id") ? ? "",
            cls: a.getAttribute("class") ? ? "",
            ign: String(e),
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const xy = 90 * 1.38;

    function Gy(a) {
        if (a.G) {
            const b = nm(a.j);
            if (b > a.l + 100 || b < a.l - 100) Hy(a), a.l = jm(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => Iy(a), 200)
    }

    function Iy(a) {
        var b = jm(a.j);
        a.l && a.l > b && (a.l = b);
        b = nm(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Jy(a))
    }

    function Ky(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function Hy(a) {
        a.G = !1;
        const b = a.C.Xd();
        switch (b) {
            case 0:
                R(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), R(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Jy(a) {
        a.A || (a.A = Ly(a));
        M(a.A, {
            display: "block"
        });
        a.G = !0;
        a.C.Yd();
        R(a.B, a.D)
    }

    function Ly(a) {
        var b = By(a.j, a.C.Kd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, ow(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.Ba(a.j, () => a.remove(), () => {
            Ky(a);
            Hy(a)
        }, () => {
            Ky(a);
            Jy(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class My {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new Lm(null);
            this.J = c || null;
            this.A = null;
            this.G = !1;
            this.l = 0;
            this.I = null;
            this.L = () => Gy(this)
        }
        init() {
            this.j.addEventListener("scroll", this.L);
            this.l = jm(this.j);
            Iy(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            Ky(this);
            R(this.B, null)
        }
        F() {
            return this.B
        }
    };

    function Ny(a) {
        R(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function Oy(a) {
        a.l = new My(a.C, a.J, a.G);
        a.l.init();
        Um(a.B, a.l.F());
        R(a.D, 2)
    }
    class Py {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.L = c;
            this.J = d;
            this.G = e;
            this.D = new Lm(0);
            this.B = new Lm(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new Vx(this.C, this.I, this.L, this.G), this.A.init(), Um(this.B, this.A.F()), R(this.D, 1), null == this.j && (this.j = new zn(this.C), this.j.init(2E3)), this.j.addListener(() => {
                Ny(this);
                Oy(this)
            })) : Oy(this)
        }
        remove() {
            Ny(this);
            this.j && (this.j.Fa(), this.j = null)
        }
        F() {
            return this.B
        }
    };
    var Qy = (a, b, c, d, e) => {
        a = new Py(a, qy(a, e), new py(b, d, "#FFF", "#4A4A4A", "normal"), new ly(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var Ry = a => a.googlefc = a.googlefc || {},
        Sy = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Ty(a) {
        var b = Sy(a.j);
        if (Uy(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Qy(a.j, c, b, () => Vy(a), a.B))
        }
    }

    function Wy(a) {
        const b = Ry(a.j);
        Sy(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Ty(a)
        })
    }

    function Vy(a) {
        Aw(a.A);
        Sy(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Bw(a.A)
        })
    }
    class Xy {
        constructor(a, b, c) {
            this.j = a;
            this.A = vw(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function Uy(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Yy(a) {
        const b = a.document.createElement("ins");
        Zy(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function $y(a, b, c, d) {
        const e = og(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        Zy(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function az(a, b) {
        const c = b.document.createElement("span");
        Zy(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function bz(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, ow(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function cz(a) {
        const b = a.document.createElement("div");
        M(b, ow(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class dz {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Lm(!1)
        }
        Ba(a, b, c, d) {
            c = Yy(a);
            const e = $y(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = $y(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = az(this, a),
                h = $y(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = bz(this, a);
            a = cz(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.Z(l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Kd() {
            return 71
        }
        Xd() {
            R(this.j, !1);
            return 0
        }
        Yd() {
            R(this.j, !0)
        }
    }

    function Zy(a, b) {
        M(b, ow(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function ez(a) {
        fz(a.l, b => {
            var c = a.B,
                d = b.Sf,
                e = b.Se,
                f = b.Ge;
            b = b.showRevocationMessage;
            (new Py(c, qy(c, a.A), new py(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new dz(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Bw(a.j)
        })
    }
    class gz {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = vw(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var hz = a => {
        if (!a || !Yc(a, 1)) return !1;
        a = v(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function iz(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            hz(a.j) && (b = new gz(a.l, a.C, a.B || A(a.j, Xo, 4), a.A), Aw(b.j), ez(b), b = !0);
            var c;
            a: if ((c = a.j) && Yc(c, 3)) switch (c = v(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (Wy(new Xy(a.l, a.C, a.B || A(a.j, Xo, 4))), b = !0);
            if (c = (c = a.j) ? !0 === cd(c, 5) : !1) c = ((c = a.j) ? !0 === cd(c, 6) : !1) || U(hq);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class jz {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.C = d;
            this.B = e || null
        }
    };
    var kz = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Pg("SCRIPT", g);
                h.async = !0;
                gf(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? kz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        lz = (a, b, c = () => {}, d = () => {}) => {
            kz(og(a), b, 0, !1, c, d)
        };
    var mz = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Pd(Wl).map(a => Number(a));
    Pd(Xl).map(a => Number(a));
    var nz = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Pg("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const oz = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function pz(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = oz(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function qz(a) {
        return pz(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? rz(a, "1") : !0 : !1
    }

    function rz(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function sz(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => rz(a, c))
    }

    function tz(a) {
        if (a.A) return a.A;
        a.A = hh(a.j, "__tcfapiLocator");
        return a.A
    }

    function uz(a) {
        return "function" === typeof a.j.__tcfapi || null != tz(a)
    }

    function vz(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (tz(a)) {
            wz(a);
            const e = ++a.J;
            a.D[e] = c;
            a.A && a.A.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function xz(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.F
        };
        const d = nf(() => b(c));
        let e = 0; - 1 !== a.G && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        vz(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = oz(c), c.internalBlockOnErrors = a.F, pz(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), vz(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function wz(a) {
        a.B || (a.B = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.B))
    }
    class yz extends Fm {
        constructor(a, b = 500, c = !1) {
            super();
            this.j = a;
            this.A = null;
            this.D = {};
            this.J = 0;
            this.G = b;
            this.F = c;
            this.B = null
        }
        l() {
            this.D = {};
            this.B && (Ef(this.j, "message", this.B), delete this.B);
            delete this.D;
            delete this.j;
            delete this.A;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.F
            };
            const c = nf(() => a(b));
            let d = 0; - 1 !== this.G && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = oz(b), b.internalBlockOnErrors =
                    this.F, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                vz(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && vz(this, "removeEventListener", null, a.listenerId)
        }
    };

    function fz(a, b, c) {
        const d = mz(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = mz(a.j),
                    f = new yz(a.j);
                uz(f) && xz(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Sf: e.getDefaultConsentRevocationText(),
                        Se: e.getDefaultConsentRevocationCloseText(),
                        Ge: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function zz(a) {
        const b = le(Jd("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        lz(a.j, b, () => {}, () => {})
    }
    class Az {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                nz(this.j, "googlefcPresent"), zz(this)
            } catch (a) {}
        }
    };
    var Bz = (a, b, c) => {
        const d = y(a, Ro, 6);
        if (!d) return [];
        c = gv(d.j(), c);
        return (a = a.j()) && cd(a, 11) ? c.map(e => wt(e)) : c.map(e => {
            const f = co();
            return new Vs(new qt(e.tc, e.uc), new ot, new pt(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Dz = class extends J {
        constructor() {
            super(void 0, -1, Cz)
        }
    };

    function Ez(a, b) {
        return w(a, 1, b)
    }

    function Fz(a, b) {
        return nd(a, 2, b)
    }
    var Hz = class extends J {
            constructor(a) {
                super(a, -1, Gz)
            }
        },
        Iz = class extends J {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return rd(this, 2)
            }
        },
        Cz = [5],
        Gz = [2];
    var Jz = class extends J {
            constructor() {
                super()
            }
        },
        Kz = [1, 2];

    function Lz(a) {
        return new go(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Mz {
        j(a) {
            return Lz(Math.floor(a.l))
        }
    };

    function Nz(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = cm(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var Oz = class extends J {
        constructor() {
            super()
        }
    };

    function Pz(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.vc = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                Ca(c) && (a.H = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                si(a.B) && si(a.l) || vl("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.G(b)
    }
    class Qz {
        constructor() {
            this.D = this.H = this.A = this.vc = null;
            this.l = this.B = 0
        }
        G() {
            return !0
        }
    };

    function Rz(a, b = []) {
        const c = Date.now();
        return vb(b, d => c - d < 1E3 * a)
    }

    function Sz(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || zb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Rz(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Tz(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Sz(a, b)
    };
    var Uz = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= hm(a);
            d |= gm(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Tz(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            U(Eq) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Vz extends Qz {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        G(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = xd(rp, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    const Wz = {};

    function Xz(a, b, c) {
        let d = Yz(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Cb && d.Cb.length;) {
            const h = d.Cb.shift();
            var g = dt(h.W);
            const k = h.aa.j,
                l = !!c.A.Vc || !!c.A.bd || c.Ha() || !!c.A.zd || k > e;
            g = !g || g <= d.Kb;
            if (l && g && Zz(c, h, {
                    ac: d.Kb
                })) {
                e = k;
                if (d.Jb.j.length + 1 >= f) return !0;
                d = Yz(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    const Yz = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = ku(b.U(), f.j ? f.j.lb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = P(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - qu(f)) : e = void 0;
        a = null == e || 50 <= e ? $z(b, f, {
            types: a
        }, c) : null;
        return {
            Jb: f,
            Kb: e,
            Cb: a
        }
    };
    Wz[2] = Ma(function(a, b) {
        a = $z(b, ku(b.U()), {
            types: a,
            Sa: St(b.U())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Zz(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Wz[5] = Ma(Xz, [0], 5);
    Wz[10] = Ma(function(a, b) {
        a = [];
        const c = b.ba;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !U(Wp) && a.push(1);
        return Xz(a, 10, b)
    }, 10);
    Wz[3] = function(a) {
        if (!a.B) return !1;
        var b = $z(a, ku(a.U()), {
            types: [0],
            Sa: St(a.U())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Zz(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    const aA = a => {
            var b;
            a.A.re ? b = new Ot(0, null, [], 3, null) : b = St(a.U());
            return {
                types: [0],
                Sa: b
            }
        },
        cA = a => {
            const b = a.U().document.body.getBoundingClientRect().width;
            bA(a, Lz(b))
        },
        eA = (a, b) => {
            var c = aA(a);
            c.Qf = [5];
            c = $z(a, ku(a.U()), c, 8);
            dA(a, c.reverse(), b)
        },
        dA = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.aa), Zz(a, d, {
                        wc: b
                    })) return !0;
            return !1
        };
    Wz[8] = function(a) {
        var b = a.U().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Wz[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Yb()) return !0;
        b = aA(a);
        b.Tc = [2, 4, 5];
        b = $z(a, ku(a.U()), b, 8);
        const c = new Mz;
        if (dA(a, b, c)) return !0;
        if (a.A.Cd) switch (a.A.be || 0) {
            case 1:
                eA(a, c);
                break;
            default:
                cA(a)
        }
        return !0
    };
    Wz[6] = Ma(Xz, [2], 6);
    Wz[7] = Ma(Xz, [1], 7);
    Wz[9] = function(a) {
        const b = Yz([0, 2], a, 9);
        if (!b || !b.Cb) return a.C.push(17), Nz(a.U()), a.B;
        for (const e of b.Cb) {
            var c = e;
            var d = a.A.Hc || null;
            null == d ? c = null : (d = et(c.W, new fA, new gA(d, a.U())), c = new lt(d, c.Y(), c.aa));
            if (c && !(dt(c.W) > b.Kb) && Zz(a, c, {
                    ac: b.Kb,
                    Ac: !0
                })) return a = c.W.T, bt(e.W, 0 < a.length ? a[0] : null), !0
        }
        a.C.push(17);
        Nz(a.U());
        return a.B
    };
    class fA {
        l(a, b, c, d) {
            return hs(d.document, a, b)
        }
        A(a) {
            return P(a).clientHeight || 0
        }
    };
    var hA = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Jb = c
        }
        la(a) {
            return this.j ? Mu(this.l, this.j, a, this.Jb) : Lu(this.l, a, this.Jb)
        }
        ma() {
            return this.j ? 16 : 9
        }
    };
    var iA = class {
        constructor(a) {
            this.xc = a
        }
        la(a) {
            return Tu(a.document, this.xc)
        }
        ma() {
            return 11
        }
    };
    var jA = class {
        constructor(a) {
            this.gb = a
        }
        la(a) {
            return Qu(this.gb, a)
        }
        ma() {
            return 13
        }
    };
    var kA = class {
        la(a) {
            return Ju(a)
        }
        ma() {
            return 12
        }
    };
    var lA = class {
        constructor(a) {
            this.ub = a
        }
        la() {
            return Ou(this.ub)
        }
        ma() {
            return 2
        }
    };
    var mA = class {
        constructor(a) {
            this.j = a
        }
        la() {
            return Ru(this.j)
        }
        ma() {
            return 3
        }
    };
    var nA = class {
        la() {
            return Uu()
        }
        ma() {
            return 17
        }
    };
    var oA = class {
        constructor(a) {
            this.j = a
        }
        la() {
            return Nu(this.j)
        }
        ma() {
            return 1
        }
    };
    var pA = class {
        la() {
            return lf(Ws)
        }
        ma() {
            return 7
        }
    };
    var qA = class {
        constructor(a) {
            this.Tc = a
        }
        la() {
            return Pu(this.Tc)
        }
        ma() {
            return 6
        }
    };
    var rA = class {
        constructor(a) {
            this.j = a
        }
        la() {
            return Su(this.j)
        }
        ma() {
            return 5
        }
    };
    var sA = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        la() {
            return Ma(Vu, this.minWidth, this.maxWidth)
        }
        ma() {
            return 10
        }
    };
    var tA = class {
        constructor(a) {
            this.B = a.l.slice(0);
            this.l = a.j.slice(0);
            this.A = a.A;
            this.C = a.B;
            this.j = a.C
        }
    };

    function uA(a) {
        var b = new vA;
        b.C = a;
        b.l.push(new oA(a));
        return b
    }

    function wA(a, b) {
        a.l.push(new qA(b));
        return a
    }

    function xA(a, b) {
        a.l.push(new lA(b));
        return a
    }

    function yA(a, b) {
        a.l.push(new rA(b));
        return a
    }

    function zA(a, b) {
        a.l.push(new mA(b));
        return a
    }

    function AA(a) {
        a.l.push(new pA);
        return a
    }

    function BA(a) {
        a.j.push(new kA);
        return a
    }

    function CA(a, b = 0, c, d) {
        a.j.push(new hA(b, c, d));
        return a
    }

    function DA(a, b = 0, c = Infinity) {
        a.j.push(new sA(b, c));
        return a
    }

    function EA(a) {
        a.j.push(new nA);
        return a
    }

    function FA(a, b = 0) {
        a.j.push(new jA(b));
        return a
    }

    function GA(a, b) {
        a.A = b;
        return a
    }
    var vA = class {
        constructor() {
            this.A = 0;
            this.B = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new tA(this)
        }
    };
    class gA {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.H || {};
            c.google_ad_client = a.vc;
            c.google_ad_height = P(b).clientHeight || 0;
            c.google_ad_width = P(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Oz;
            w(b, 1, a.C);
            a.j && ld(b, 2, a.j);
            a.F && w(b, 3, !0);
            c.google_rasc = Ad(b);
            a.A && (c.google_adtest = "on");
            return new go(["fsi_container"], c)
        }
    };
    var HA = Zn(new Wn(0, {})),
        IA = Zn(new Wn(1, {})),
        JA = a => a === HA || a === IA;

    function KA(a, b, c) {
        xm(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class LA {
        constructor() {
            this.j = new Bm
        }
    };

    function MA(a, b) {
        b && (a.j.apv = v(b, 4), Zc(b, tp, 23) && (a.j.sat = "" + y(b, tp, 23).j()));
        return a
    }

    function NA(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class OA extends Js {
        constructor(a) {
            super(a);
            this.j = {}
        }
        G(a) {
            null != a && (this.j.allp = a);
            return this
        }
        B(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.B(a);
            Sd(a, this.j);
            return a
        }
    }

    function PA(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function QA(a, b) {
        a.l.op = RA(b)
    }

    function SA(a, b, c) {
        30 >= c.length ? a.l[b] = TA(c) : (a.l[b] = TA(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function UA(a, b, c) {
        SA(a, "fap", b);
        a.l.fad = RA(c)
    }

    function VA(a, b, c) {
        SA(a, "fmp", b);
        a.l.fmd = RA(c)
    }

    function WA(a, b, c) {
        SA(a, "vap", b);
        a.l.vad = RA(c)
    }

    function XA(a, b, c) {
        SA(a, "vmp", b);
        a.l.vmd = RA(c)
    }

    function YA(a, b, c) {
        SA(a, "pap", b);
        a.l.pad = RA(c)
    }

    function ZA(a, b, c) {
        SA(a, "pmp", b);
        a.l.pmd = RA(c)
    }

    function $A(a, b) {
        SA(a, "psq", b)
    }
    var aB = class extends OA {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function TA(a) {
        return a.map(b => b ? .toString() ? ? "null").join("~")
    }

    function RA(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function bB(a, b, c) {
        const d = b.W;
        xm(a.j, d) || a.j.set(d, new cB(Pn(jt(b)) ? ? ""));
        c(a.j.get(d))
    }

    function dB(a, b) {
        bB(a, b, c => {
            c.j = !0
        })
    }

    function eB(a, b) {
        bB(a, b, c => {
            c.l = !0
        })
    }

    function fB(a, b) {
        bB(a, b, c => {
            c.A = !0
        });
        a.L.push(b.W)
    }

    function gB(a, b, c) {
        bB(a, b, d => {
            d.cb = c
        })
    }

    function hB(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) JA(f.cb ? ? "") ? ++e : (b = a.l.get(f.cb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            eb: e
        }
    }

    function iB(a, b) {
        QA(b, a.l.xb());
        var c = Am(a.j).filter(f => 0 === (f.Na.startsWith(HA) ? 0 : 1)),
            d = Am(a.j).filter(f => 1 === (f.Na.startsWith(HA) ? 0 : 1)),
            e = hB(a, f => f.j, c);
        UA(b, e.list, e.eb);
        e = hB(a, f => f.j, d);
        VA(b, e.list, e.eb);
        e = hB(a, f => f.l, c);
        WA(b, e.list, e.eb);
        e = hB(a, f => f.l, d);
        XA(b, e.list, e.eb);
        c = hB(a, f => f.A, c);
        YA(b, c.list, c.eb);
        d = hB(a, f => f.A, d);
        ZA(b, d.list, d.eb);
        $A(b, a.L.map(f => a.j.get(f) ? .cb).map(f => a.l.get(f) ? ? null))
    }

    function Vj() {
        var a = O(jB);
        if (!a.C) return Jj();
        const b = Sj(Rj(Qj(Pj(Oj(Nj(Mj(Lj(Ij(Hj(new Kj, a.C ? ? []), a.J ? ? []), a.D), a.G), a.I), a.M), a.O), a.F ? ? 0), Am(a.j).map(c => {
            var d = new Gj;
            d = w(d, 1, c.Na);
            var e = a.l.get(c.cb ? ? "", -1);
            d = w(d, 2, e);
            d = w(d, 3, c.j);
            return w(d, 4, c.l)
        })), a.L.map(c => a.j.get(c) ? .cb).map(c => a.l.get(c) ? ? null));
        null != a.A && w(b, 6, a.A);
        null != a.B && w(b, 13, a.B);
        return b
    }
    var jB = class {
        constructor() {
            this.B = this.J = this.C = null;
            this.I = this.G = !1;
            this.A = null;
            this.O = this.D = this.M = !1;
            this.F = null;
            this.l = new Bm;
            this.j = new Bm;
            this.L = []
        }
    };
    class cB {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.cb = null;
            this.Na = a
        }
    };
    class kB {
        constructor(a = 0) {
            this.j = a
        }
    };
    class lB {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function mB(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function nB(a, b) {
        const c = a.J.filter(d => zm(d.Pb).every(e => d.Pb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Pb.xb() > e.Pb.xb() ? d : e, c[0])
    }

    function oB(a, b) {
        b = jt(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (xm(a.A, b)) return a.A.get(b);
        var c = Xn(b);
        c = nB(a, c);
        a.A.set(b, c);
        return c
    }
    var pB = class {
        constructor(a) {
            this.j = a;
            this.A = new Bm;
            this.J = (y(a, hp, 2) ? .j() || []).map(b => ({
                Pb: Xn(C(b, 1)),
                de: sd(b, 2),
                Na: C(b, 1)
            }));
            this.l = []
        }
        I() {
            const a = O(jB);
            var b = this.D();
            a.C = b;
            b = this.C();
            a.J = b;
            b = this.B();
            null != b && (a.B = b);
            b = !!this.j.A() ? .j() ? .j();
            a.I = b;
            b = new Bm;
            for (const c of y(this.j, hp, 2) ? .j() ? ? []) b.set(C(c, 1), sd(c, 2));
            a.l = b
        }
        F() {
            return [...this.l]
        }
        D() {
            return [...this.j.j()]
        }
        C() {
            return [...ad(this.j, 4, 0, !1)]
        }
        B() {
            return y(this.j, lp, 5) ? .j() ? ? null
        }
        G(a) {
            const b = oB(this, a);
            null != b ? .Na && gB(O(jB), a, b.Na)
        }
        L(a) {
            const b =
                V(jq) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new In(a)).filter(d => {
                d = oB(this, d) ? .Na || "";
                return "" != d && !(d === HA || d === IA)
            });
            return b <= c.j.length / a.length
        }
    };

    function qB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (oB(a.j, c) ? .de || Number.MAX_VALUE) - (oB(a.j, d) ? .de || Number.MAX_VALUE))
    }

    function rB(a, b) {
        var c = b.aa.j,
            d = Math,
            e = d.min;
        const f = b.Y(),
            g = b.W.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? mB(f.parentElement) : mB(f));
        d = a.A;
        0 > d.j && (d.j = P(d.l).scrollHeight || 0);
        d = d.j - b.aa.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.Y();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function sB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => rB(a, c) - rB(a, d))
    }

    function tB(a, b) {
        return b.sort((c, d) => {
            const e = c.W.G,
                f = d.W.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? rB(a, c) - rB(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class uB {
        constructor(a, b = 0, c = null) {
            this.A = new lB(a);
            this.l = new kB(b);
            this.j = c && new pB(c)
        }
    };

    function vB(a, b, c = 0) {
        var d = a.l;
        for (var e of b.B) d = Hn(d, e.la(a.A), wB(e.ma(), c));
        e = d = d.apply(Iu(a.A));
        for (const f of b.l) e = Hn(e, f.la(a.A), xB(f.ma(), c));
        switch (b.A) {
            case 1:
                e = sB(a.j, e);
                break;
            case 2:
                e = tB(a.j, e);
                break;
            case 3:
                const f = O(jB);
                e = qB(a.j, e);
                d.forEach(g => {
                    dB(f, g);
                    a.j.j ? .G(g)
                });
                e.forEach(g => eB(f, g))
        }
        b.C && (e = Jn(e, lg(a.A.location.href + a.A.localStorage.google_experiment_mod)));
        1 === b.j ? .length && KA(a.B, b.j[0], {
            Ie: d.j.length,
            ag: e.j.length
        });
        return e.j.slice(0)
    }
    class yB {
        constructor(a, b, c = 0, d = null) {
            this.l = new In(a);
            this.j = new uB(b, c, d);
            this.A = b;
            this.B = new LA
        }
        C() {
            this.l.forEach(a => {
                a.l && Hr(a.l);
                a.l = null
            })
        }
    }
    const wB = (a, b) => c => at(c, b, a),
        xB = (a, b) => c => at(c.W, b, a);

    function zB(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = AB(BB(c), a);
                    break a;
                case 3:
                    a = AB(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = AB(e ? 1 == e.nodeType ? e : BB(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !CB(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Jp(b) && 0 >= b.offsetWidth);
        return d
    }

    function AB(a, b) {
        if (!a) return !1;
        a = Qg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function BB(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function CB(a) {
        return !!a.nextSibling || !!a.parentNode && CB(a.parentNode)
    };
    var DB = !Ob && !ob();

    function EB(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (DB && a.dataset) {
            if (qb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var FB = (a, b, c) => {
            if (!b) return null;
            const d = xg(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = P(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        GB = a => {
            const b = a.document.body;
            var c = FB(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (let l = 0; l < k.children.length; l++) {
                            const m = k.children[l];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? FB(a, c.parentNode || b, c) : null
        },
        IB = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Hg() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), HB(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        HB = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == EB(a[b])) return !0;
            return !1
        };

    function JB(a) {
        const b = im(a, !0),
            c = P(a).scrollWidth,
            d = P(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = nm(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            z = 0,
            F = Infinity,
            D = Infinity,
            B = null;
        var H = gu({
            Ya: !1
        }, a);
        for (var K of H) {
            H = K.getBoundingClientRect();
            const la = b - (H.bottom + f);
            var I = void 0,
                G = void 0;
            if (K.className && gb(K.className, "adsbygoogle-ablated-ad-slot")) {
                I = K.getAttribute("google_element_uid");
                G = a.google_sv_map;
                if (!I || !G || !G[I]) continue;
                I = (G = Ei(G[I])) ? G.height : 0;
                G = G ? G.width : 0
            } else if (I = H.bottom - H.top, G = H.right - H.left, 1 >= I || 1 >= G) continue;
            g.push(I);
            k.push(G);
            l.push(I * G);
            K.className && gb(K.className, "google-auto-placed") ? (z += 1, K.className && gb(K.className, "pedestal_container") && (B = I)) : (F = Math.min(F, la), n.push(H), r += 1, h.push(I), m.push(I * G));
            D = Math.min(D, la);
            q.push(H)
        }
        F = Infinity === F ? null : F;
        D = Infinity === D ? null : D;
        f = KB(n);
        q = KB(q);
        h = LB(b, h);
        n = LB(b, g);
        m = LB(b * c, m);
        K = LB(b * c, l);
        return new MB(a, {
            Ye: e,
            Rc: b,
            Ef: c,
            Df: d,
            vf: r,
            He: z,
            Ke: NB(g),
            Le: NB(k),
            Je: NB(l),
            zf: f,
            yf: q,
            xf: F,
            wf: D,
            Dc: h,
            Cc: n,
            De: m,
            Ce: K,
            Ff: B
        })
    }

    function OB(a, b, c, d) {
        const e = Hg() && !(900 <= P(a.l).clientWidth);
        d = vb(d, f => Ab(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Ye,
            pg_h: PB(a.j.Rc),
            pg_w: PB(a.j.Ef),
            pg_hs: PB(a.j.Df),
            c: PB(a.j.vf),
            aa_c: PB(a.j.He),
            av_h: PB(a.j.Ke),
            av_w: PB(a.j.Le),
            av_a: PB(a.j.Je),
            s: PB(a.j.zf),
            all_s: PB(a.j.yf),
            b: PB(a.j.xf),
            all_b: PB(a.j.wf),
            d: PB(a.j.Dc),
            all_d: PB(a.j.Cc),
            ard: PB(a.j.De),
            all_ard: PB(a.j.Ce),
            pd_h: PB(a.j.Ff),
            dt: e ? "m" : "d"
        }
    }
    class MB {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function NB(a) {
        return fg.apply(null, vb(a, b => 0 < b)) || null
    }

    function LB(a, b) {
        return 0 >= a ? null : eg.apply(null, b) / a
    }

    function KB(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function PB(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function QB(a, b) {
        b = (P(b).clientHeight || 0) - nm(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            ou(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function RB(a) {
        const b = {};
        var c = iu({
            Ya: !1,
            Sb: !1,
            Tb: !1,
            Ub: !1
        }, a).map(d => d.getBoundingClientRect()).filter(ou);
        b.ed = c.length;
        c = ju({
            Tb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ou);
        b.Bd = c.length;
        c = ju({
            Ub: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ou);
        b.Vd = c.length;
        c = ju({
            Sb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ou);
        b.nd = c.length;
        c = (P(a).clientHeight || 0) - nm(a);
        c = iu({
            Ya: !1
        }, a).map(d => d.getBoundingClientRect()).filter(ou).filter(La(SB, null, c));
        b.gd = c.length;
        a = JB(a);
        c = null != a.j.Dc ? a.j.Dc :
            null;
        null != c && (b.Rd = c);
        a = null != a.j.Cc ? a.j.Cc : null;
        null != a && (b.hd = a);
        return b
    }

    function Zz(a, b, {
        ac: c,
        wc: d,
        Ac: e
    } = {}) {
        return ps(997, () => TB(a, b, {
            ac: c,
            wc: d,
            Ac: e
        }), a.j)
    }

    function $z(a, b, c, d) {
        var e = c.Sa ? c.Sa : a.D;
        const f = Tt(e, b.j.length);
        e = a.A.jd ? e.j : void 0;
        const g = EA(FA(BA(DA(CA(AA(yA(zA(wA(xA(uA(c.types), a.T), c.Tc || []), a.O), c.Qf || [])), f.cc || void 0, e, b), c.minWidth, c.maxWidth)), f.gb || void 0));
        a.M && g.j.push(new iA(a.M));
        b = 1;
        a.A.bd ? b = 2 : a.Ha() && (b = 3);
        GA(g, b);
        a.A.Vc && (g.B = !0);
        return ps(995, () => vB(a.l, g.build(), d), a.j)
    }

    function bA(a, b) {
        const c = GB(a.j);
        if (c) {
            const d = fo(a.J, b),
                e = es(a.j.document, a.F, null, null, {}, d);
            e && (Kr(e.Wa, c, 2, 256), ps(996, () => UB(a, e, d), a.j))
        }
    }

    function VB(a) {
        return a.G ? a.G : a.G = a.j.google_ama_state
    }

    function TB(a, b, {
        ac: c,
        wc: d,
        Ac: e
    } = {}) {
        const f = b.W;
        if (f.C) return !1;
        var g = b.Y();
        if (!zB(a.j, f.j(), g, a.B)) return !1;
        c = null == c ? null : new go(null, {
            google_max_responsive_height: c
        });
        g = ho(v(f.qc, 2) || 0);
        const h = io(f.G),
            k = WB(a, f),
            l = XB(a),
            m = fo(a.J, f.O ? f.O.j(b.aa) : null, c, d || null, g, h, k, l),
            n = b.fill(a.F, m);
        if (e && !YB(a, n, m) || !ps(996, () => UB(a, n, m), a.j)) return !1;
        Tl(9, [f.G, f.Za]);
        a.Ha() && fB(O(jB), b);
        return !0
    }

    function WB(a, b) {
        return Pn(Rn(ht(b).map(jo), () => {
            a.C.push(18)
        }))
    }

    function XB(a) {
        if (!a.Ha()) return null;
        var b = a.l.j.j ? .C();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .B() ? ? null;
        return ko({
            Ve: b,
            bf: a
        })
    }

    function YB(a, b, c) {
        if (!b) return !1;
        var d = b.wa,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.wa;
        c = c && c.yb() || {};
        if (d !== d.top) var g = Ng(d) ? 3 : 16;
        else if (488 > P(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = P(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = P(d).clientWidth; h; h = h.parentElement) {
                            const k = Qg(h, d);
                            if (!k) continue;
                            const l = ah(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Qg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = P(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.wa;
            if (f = as(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Zr(b, f, "0px"), b.style.width = P(a).clientWidth + "px", bs(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Hr(b.Wa);
        return !1
    }

    function UB(a, b, c) {
        if (!b) return !1;
        try {
            is(a.j, b.wa, c)
        } catch (d) {
            return Hr(b.Wa), a.C.push(6), !1
        }
        return !0
    }
    class ZB {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.F = b;
            this.j = c;
            this.D = d.Sa;
            this.T = d.ub || [];
            this.J = d.cf || null;
            this.O = d.Xe || [];
            this.M = d.xc || [];
            this.A = e;
            this.B = !1;
            this.L = [];
            this.C = [];
            this.I = this.G = void 0;
            this.ba = f
        }
        V() {
            return this.l
        }
        U() {
            return this.j
        }
        ra(a) {
            this.L.push(a)
        }
        Ha() {
            if (0 == (this.l.j.j ? .D().length ? ? 0)) return !1;
            if (0 == (V(jq) || 0)) return !0;
            if (void 0 === this.I) {
                const a = GA(BA(AA(uA([0, 1, 2]))), 1).build(),
                    b = ps(995, () => vB(this.l, a), this.j);
                this.I = this.l.j.j ? .L(b) || !1
            }
            return this.I
        }
        Lc() {
            return !!this.A.he
        }
        Yb() {
            return !HB(this.j)
        }
    }
    const SB = (a, b) => b.top <= a;

    function $B(a, b, c, d, e, f = 0, g = 0) {
        this.za = a;
        this.mc = f;
        this.lc = g;
        this.errors = b;
        this.Qa = c;
        this.j = d;
        this.l = e
    };
    var aC = (a, {
        Yb: b = !1,
        Lc: c = !1,
        Tf: d = !1,
        Ha: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !U(Wp);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !U(Wp) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function bC(a, b, c) {
        a = aC(a, {
            Yb: b.Yb(),
            Lc: b.Lc(),
            Tf: !!b.A.Hc,
            Ha: b.Ha()
        });
        return new cC(a, b, c)
    }

    function dC(a, b) {
        const c = Wz[b];
        return c ? ps(998, () => c(a.j), a.C) : (a.j.ra(12), !0)
    }

    function eC(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(dC(a, b))
            })
        })
    }

    function fC(a) {
        a.j.B = !0;
        return Promise.all(a.l.map(b => eC(a, b))).then(b => {
            b.includes(!1) && a.j.ra(5);
            a.l.splice(0, a.l.length)
        })
    }

    function gC(a) {
        var b = a.j.l.l.filter(Ws).j.length,
            c = a.j.L.slice(0);
        var d = a.j;
        d = [...d.C, ...(d.l.j.j ? .F() || [])];
        return new $B(b, c, d, a.j.l.l.j.length, a.j.l.B.j, a.j.l.l.filter(Ws).filter(Xs).j.length, a.j.l.l.filter(Xs).j.length)
    }
    class cC {
        constructor(a, b, c) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = Bb(this.l, 1);
            this.j = b;
            this.C = c
        }
    };
    const hC = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function iC(a) {
        return fC(a).then(() => new hC(gC(a)))
    };
    class jC {
        j() {
            return new go([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class kC {
        j() {
            return new go(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function lC(a) {
        return Kp(a.j.document).map(b => {
            const c = new qt(b, 3);
            b = new Rs(ks(a.j, b));
            return new Vs(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class mC {
        constructor(a) {
            var b = new kC;
            this.j = a;
            this.l = b || null
        }
    };
    const nC = {
        Zc: "10px",
        zc: "10px"
    };

    function oC(a) {
        return wm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Vs(new qt(b, 1), new Ps(nC), a.l, !1, 0, [], null, a.j, null))
    }
    class pC {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function qC(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function rC(a, b, c) {
        const d = qC(c.Qb, "gapsMeasurementWindow") || qC(c.wb, "gapsPerMeasurementWindow") || qC(c.Bb, "maxGapsToReport");
        return null != d ? Nn(d) : c.md || -1 != c.wb || -1 != c.Bb ? Ln(new sC(a, b, c)) : Nn("ShouldHaveLimits")
    }

    function tC(a) {
        return VB(a.A) && VB(a.A).placed || []
    }

    function uC(a) {
        return tC(a).map(b => xn(vn(b.element, a.j)))
    }

    function vC(a) {
        return tC(a).map(b => b.index)
    }

    function wC(a, b) {
        const c = b.W;
        return !a.D && c.B && Yc(c.B, 8) && 1 == v(c.B, 8) ? [] : c.C ? (c.T || []).map(d => xn(vn(d, a.j))) : [xn(new wn(b.aa.j, 0))]
    }

    function xC(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new wn(c, f - c)), c = d)
        }
        return b
    }

    function yC(a, b) {
        b = b.map(c => {
            var d = new Iz;
            d = w(d, 1, c.j);
            c = c.getHeight();
            return w(d, 2, c)
        });
        return Fz(Ez(new Hz, a), b)
    }

    function zC(a) {
        const b = A(a, Iz, 2).map(c => `G${rd(c,1)}~${c.getHeight()}`);
        return `W${rd(a,1)}${b.join("")}`
    }

    function AC(a, b) {
        const c = [];
        let d = 0;
        for (const e of zm(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(yC(e, f));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }

    function BC(a) {
        const b = A(a, Hz, 5).map(c => zC(c));
        return `M${rd(a,1)}H${rd(a,2)}C${rd(a,3)}B${Number(!!E(a,4))}${b.join("")}`
    }

    function CC(a) {
        var b = zt(a.A.l.l.j.slice(0), a.j),
            c = uC(a),
            d = new Cm(vC(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = wC(a, b[e]);
                c.push(...f)
            }
        c.push(new wn(0, 0));
        c.push(xn(new wn(P(a.j).scrollHeight, 0)));
        b = xC(c);
        c = new Bm;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.B), xm(c, f) || c.set(f, []), c.get(f).push(e);
        b = AC(a, c);
        c = new Dz;
        c = w(c, 1, a.l);
        c = w(c, 2, a.B);
        c = w(c, 3, a.C);
        a = w(c, 4, a.D);
        return nd(a, 5, b)
    }

    function DC(a) {
        a = CC(a);
        return BC(a)
    }
    var sC = class {
        constructor(a, b, c) {
            this.G = -1 == c.Qb;
            this.B = c.Qb;
            this.I = -1 == c.wb;
            this.C = c.wb;
            this.F = -1 == c.Bb;
            this.l = c.Bb;
            this.D = c.Od;
            this.A = b;
            this.j = a
        }
    };
    const EC = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        FC = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var GC = (a, b) => {
        a = ad(a, 2, 0, !1);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const IC = (a, b) => {
            a = FC(EC(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Ug(a),
                d = HC(a);
            return b.find(e => {
                const f = Zc(e, wp, 7) ? v(y(e, wp, 7), 1) : v(e, 1);
                e = Zc(e, wp, 7) ? v(y(e, wp, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        HC = a => {
            const b = {};
            for (;;) {
                b[Ug(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const JC = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var KC = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            vl("ama", b, .01)
        },
        LC = a => {
            const b = {};
            Sg(JC, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var MC = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                KC(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            KC(a, {
                lserr: 1
            })
        }
    };

    function NC(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function OC(a, b) {
        a = NC(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function PC() {
        if (QC) return QC;
        const a = Yh() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? QC = b : a.google_persistent_state_async = QC = new RC
    }

    function SC(a, b, c) {
        b = TC[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function UC(a, b, c) {
        return SC(a, b, () => c)
    }

    function VC(a, b, c) {
        return a.S[TC[b] || "google_ps_" + b] = c
    }

    function WC(a, b) {
        return VC(a, b, UC(a, b, 0) + 1)
    }

    function XC() {
        var a = PC();
        return UC(a, 20, {})
    }

    function YC() {
        var a = PC();
        const b = UC(a, 31, !1);
        b || VC(a, 31, !0);
        return !b
    }

    function ZC() {
        var a = PC();
        return UC(a, 26)
    }

    function $C() {
        var a = PC();
        return UC(a, 28, [])
    }
    class RC {
        constructor() {
            this.S = {}
        }
    }
    var QC = null;
    const TC = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var aD = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            easpa: "easai",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt"
        },
        bD = a => (a = a.innerText || a.innerHTML) &&
        (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        cD = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        dD = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b =
                            a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function eD(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = NC(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Ci() ? bD : cD;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = dD(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    async function fD(a, b, c) {
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function gD(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = qh(a.win)
    }

    function hD(a) {
        const b = a.state.wpc;
        return null !== b && "" !== b ? b : a.state.wpc = eD(a.win)
    }

    function iD(a, b) {
        var c = new Zk,
            d = U(Np) ? gD(a) : a.state.pc;
        c = w(c, 1, d).Oa(U(Np) ? hD(a) : a.state.wpc);
        c = w(c, 3, a.state.sd);
        return w(c, 7, b || a.win.performance.now())
    }
    async function jD(a, b, c) {
        if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await fD(a.win, () => !(!gD(a) || !hD(a)), 10);
            $k(a.ja, Xk(iD(a, d), kk(jk(new mk, b), c)))
        }
    }

    function kD(a, b) {
        var c = iD(a);
        b = md(c, 5, Yk, b);
        a.j && !a.state.le.includes(2) && (a.state.le.push(2), $k(a.ja, b))
    }
    var lD = class {
        constructor(a) {
            this.win = Yh() || window;
            this.ja = a ? ? new fl;
            this.state = SC(PC(), 33, () => {
                const b = V(Op),
                    c = 0 < b && Rg() < 1 / b;
                return {
                    sd: b,
                    ssp: c,
                    pc: U(Np) ? null : c ? qh(this.win) : 0,
                    wpc: U(Np) ? null : c ? eD(this.win) : "",
                    le: [],
                    lgdp: []
                }
            })
        }
        get j() {
            return this.state.ssp
        }
    };
    var nD = (a, b, c, d, e, f, g = null, h = null, k) => {
            mD(a, new Ms(a), b, c, d, e, f, g, new zn(a), h, k)
        },
        mD = (a, b, c, d, e, f, g, h = null, k = null, l = null, m) => {
            if (c)
                if (d) {
                    var n = fy(d, e, a.location);
                    try {
                        const q = new oD(a, b, c, d, e, n, f, g, h, k, l, m);
                        ps(990, () => pD(q), a)
                    } catch (q) {
                        Sl() && Tl(15, [q]), Ls(b, zs, Is(NA(MA((new OA(0)).Oa(c), d), n).ra(1), q)), kD(O(lD), Zj(new ik, vj(1)))
                    }
                } else Ls(b, zs, (new OA(0)).Oa(c).ra(8)), kD(O(lD), Zj(new ik, vj(8)));
            else Ls(b, zs, (new OA(0)).ra(9)), kD(O(lD), Zj(new ik, vj(9)))
        };

    function pD(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    ps(991, () => qD(a), a.l);
                    break;
                case 1:
                    Wx(new Yx(a.l, a.j, a.C));
                    break;
                case 5:
                    lw(new mw(a.l, a.j));
                    break;
                case 2:
                    rD(a);
                    break;
                case 3:
                    sD(a);
                    break;
                case 4:
                    tD(a);
                    break;
                case 6:
                    a.runStorify()
            }
        })
    }

    function qD(a) {
        (a.j ? .j() ? .j() ? ? !1) && uD(a, "p", vD(a));
        if (np(a.j) && 1 === v(np(a.j), 1)) {
            var b = y(np(a.j), yp, 6);
            b && 2 === v(b, 1) && (js(a.l), a.I = "b")
        }
        var c = a.B.If;
        b = Qt(a.l, c);
        if (a.B.ea && Zc(a.B.ea, xp, 10)) {
            var d = bd(y(a.B.ea, xp, 10), 1);
            null !== d && void 0 !== d && (b = It(a.l, d, c))
        }
        Zc(a.j, Ap, 26) && (b = Ut(b, y(a.j, Ap, 26), a.l));
        c = a.B.ea ? ad(a.B.ea, 6, 0, !1) : [];
        d = a.B.ea ? A(a.B.ea, Jo, 5) : [];
        const e = a.B.ea ? ad(a.B.ea, 2, 0, !1) : [],
            f = ps(993, () => {
                var g = a.j,
                    h = A(g, Xo, 1);
                const k = a.B.ea && GC(a.B.ea, 1) ? "text_image" : "text";
                var l = new jC;
                let m = Us(h,
                    a.l, {
                        Ne: l,
                        rf: new Ss(k)
                    });
                h.length != m.length && a.J.push(13);
                m = m.concat(oC(new pC(a.l, l)));
                h = 0;
                l = U(cq);
                var n = !1;
                if (np(g) && 1 === v(np(g), 1)) {
                    var q = y(np(g), yp, 6);
                    q && (h = v(q, 2) || 0, 1 === v(q, 1) && (n = !0))
                }
                q = y(g, ep, 24) ? .A() ? .j() ? .j() || !1;
                if (l || n || q) l = lC(new mC(a.l)), n = O(jB), m = m.concat(l), n.M = !0, n.F = l.length, "n" === a.I && (a.I = y(g, ep, 24) ? .j() ? .length ? "o" : "p");
                m = m.concat(Bz(g, k, a.l));
                g = y(g, ep, 24);
                return new yB(m, a.l, h, g)
            }, a.l);
        a.A = new ZB(f, a.C, a.l, {
            Sa: b,
            cf: a.ba,
            ub: a.B.ub,
            Xe: c,
            xc: d
        }, wD(a), e);
        VB(a.A) ? .optimization ? .ablatingThisPageview &&
            !a.A.Ha() && (js(a.l), O(jB).D = !0, a.I = "f");
        a.G = bC(e, a.A, a.l);
        U(dq) ? ps(992, () => iC(a.G), a.l).then(ps(994, () => a.V.bind(a), a.l), a.T.bind(a)) : ps(992, () => {
            var g = a.G;
            const h = new um;
            for (g.j.B = !0; 0 < g.l.length;) dC(g, g.l[0]) || g.j.ra(5), g.l.shift();
            try {
                h.resolve(new hC(gC(g)))
            } catch (k) {
                g = k, rm(h), h.j = 2, h.A = g, tm(h.l)
            }
            return h.l
        }, a.l).then(ps(994, () => a.V.bind(a), a.l), a.T.bind(a))
    }

    function rD(a) {
        const b = y(a.j, Zo, 18);
        b && iz(new jz(a.l, new Az(a.l, a.C), b, new zw(a.l), A(a.j, Xo, 1)))
    }

    function sD(a) {
        const b = by(a.l.location, "google_audio_sense") ? lo() : y(a.j, mo, 27);
        if (b) {
            const c = y(a.j, Ro, 6) ? .j() || [];
            Qn(xv(a.l, a.D, b, c, a.va, {
                google_ad_client: a.C
            }, y(a.j, Oo, 22) ? .j() || null), d => zv(d))
        }
    }

    function tD(a) {
        const b = y(a.j, ap, 29);
        b && xD(a.Da, {
            win: a.l,
            webPropertyCode: a.C,
            Id: b,
            pd: y(a.j, Ro, 6) ? .j() ? ? []
        })
    }

    function wD(a) {
        const b = U(eq);
        if (!a.j.j()) return {
            Vc: b,
            bd: !1,
            zd: !1,
            re: !1,
            Cd: !1,
            he: !1,
            Gf: 0,
            be: 0,
            jd: yD(a),
            Hc: a.O
        };
        const c = a.j.j();
        return {
            Vc: b || E(c, 14, !1),
            bd: E(c, 2, !1),
            zd: E(c, 3, !1),
            re: E(c, 4, !1),
            Cd: E(c, 5, !1),
            he: E(c, 6, !1),
            Gf: pd(bd(c, 8), 0),
            be: v(c, 10),
            jd: yD(a),
            Hc: a.O
        }
    }

    function yD(a) {
        return a.B.ea && Zc(a.B.ea, xp, 10) ? .5 <= (bd(y(a.B.ea, xp, 10), 1) || 0) : !0
    }

    function zD(a, b) {
        for (var c = Hs(Hs(new OA(b.za), b.errors), a.J), d = b.Qa, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.lc;
        c.j.ppp = b.mc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.pb;
        c.j.eatfAbg = b.qb;
        c.j.reatf = b.Xa;
        c.j.a = a.G.B.slice(0).join(",");
        c = NA(MA(c, a.j), a.F).Oa(a.C);
        if (d = b.sa) c.j.as_count = d.ed, c.j.d_count = d.Bd, c.j.ng_count = d.Vd, c.j.am_count = d.nd, c.j.atf_count = d.gd, c.j.mdns = PA(d.Rd), c.j.alldns = PA(d.hd);
        c = c.G(b.hb);
        if (d = b.ef) {
            e = [];
            for (var h of zm(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.Ie, f.ag].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Rc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.Ld;
        c.j.rr = a.I;
        void 0 !== b.exception && Is(c, b.exception).ra(1);
        return c
    }

    function AD(a, b) {
        var c = zD(a, b);
        Ls(a.D, 0 < b.errors.length || 0 < a.J.length || void 0 !== b.exception ? 0 < a.M ? Bs : zs : 0 < a.M ? As : ys, c);
        if (y(a.j, ep, 24)) {
            a.A.l.j.j ? .I();
            b = VB(a.A);
            var d = O(jB);
            d.A = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.O = !!b ? .optimization ? .availableAbg;
            b = O(jB);
            c = new aB(c);
            b.C ? (c.l.sl = (b.C ? ? []).join("~"), c.l.daaos = (b.J ? ? []).join("~"), c.l.ab = RA(b.G), c.l.rr = RA(b.M), c.l.oab = RA(b.I), null != b.A && (c.l.sab = RA(b.A)), b.D && (c.l.fb = RA(b.D)), c.l.ls = RA(b.O), QA(c, b.l.xb()),
                null != b.F && (c.l.rp = RA(b.F)), null != b.B && (c.l.expl = RA(b.B)), iB(b, c)) : (b = c, d = "irr".replace(RegExp("~", "g"), ""), b.l.e = b.l.e ? b.l.e + ("~" + d) : d);
            Ls(a.D, Es, c)
        }
    }

    function BD(a, b) {
        const c = O(lD);
        if (c.j) {
            var d = new ik,
                e = b.Qa.filter(g => null !== g),
                f = a.J.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            dk(bk(gk(fk(ek(ck(Wj(Yj(ak(Xj(d, a.G.B.slice(0).map(g => {
                var h = new uj;
                return w(h, 1, g)
            })), e.map(g => {
                var h = new xj;
                return w(h, 1, g)
            })), f.map(g => vj(g))), y(a.j, tp, 23) ? .j()), b.za).G(b.hb), b.Xa), b.pb), b.qb), a.F.map(g => g.toString())), Ej(Dj(Cj(Bj(Aj(zj(yj(new Fj, b.sa ? .ed), b.sa ? .Bd), b.sa ? .Vd), b.sa ? .nd), b.sa ? .gd), b.sa ? .Rd), b.sa ? .hd));
            y(a.j, ep, 24) && Uj(d);
            kD(c, d)
        }
    }

    function CD(a) {
        return np(a.j) && 1 === v(np(a.j), 1) ? !(y(np(a.j), yp, 6) && 1 <= (v(y(np(a.j), yp, 6), 3) || 0)) : !1
    }

    function DD(a) {
        if (CD(a)) {
            a = a.A;
            var b = ju({
                Tb: !0,
                Ub: !0
            }, a.j);
            a = 0 < QB(b, a.j)
        } else a = a.A.j, b = iu({
            Ya: !1,
            Sb: !1
        }, a), a = 0 < QB(b, a);
        return a
    }

    function ED(a, b) {
        try {
            U(Vp) && a.A ? .V() ? .C()
        } catch (c) {
            Ls(a.D, Gs, Is(NA(MA((new OA(b)).Oa(a.C), a.j), a.F).ra(14), c))
        }
    }

    function FD(a) {
        if (a.j ? .j() ? .j() ? ? !1) {
            var b = vD(a);
            a.L.init(null == b ? void 0 : b, () => {
                uD(a, "s", b)
            });
            a.L.addListener(c => {
                uD(a, "d", vD(a), c);
                a.L.Fa();
                if (a.j ? .j() ? .A()) {
                    a.j ? .j() ? .B();
                    try {
                        a.F ? .includes(0) && (a.M++, qD(a), uD(a, "r", vD(a), c))
                    } catch (d) {
                        uD(a, "f", vD(a), c), Ls(a.D, Bs, Is(NA(MA((new OA(0)).Oa(a.C), a.j), a.F).ra(1), d))
                    }
                }
            })
        }
    }

    function GD(a, b, c) {
        {
            var d = VB(a.A),
                e = b.j;
            const f = e.j,
                g = e.lc;
            let h = e.za,
                k = e.mc,
                l = e.errors.slice(),
                m = e.Qa.slice(),
                n = b.exception;
            const q = NC(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.G.A && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                za: h,
                lc: g,
                mc: k,
                hb: f,
                errors: e.errors.slice(),
                Qa: m,
                exception: n,
                Xa: c,
                pb: !!d.eatf,
                qb: !!d.eatfAbg,
                Ld: q
            }) : (m.push(12), a.G.A && m.push(13), c = {
                za: h,
                lc: g,
                mc: k,
                hb: f,
                errors: l,
                Qa: m,
                exception: n,
                Xa: c,
                pb: !1,
                qb: !1,
                Ld: q
            })
        }
        c.sa = RB(a.A.j);
        if (b = b.j.l) c.ef = b;
        c.Rc = P(a.l).scrollHeight;
        if (Sl()) {
            d = a.A.l.l.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of zm(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Ys(f),
                    position: f.j(),
                    clearBoth: f.J,
                    locationType: f.Za,
                    placed: f.C,
                    placementProto: f.B ? f.B.toJSON() : null,
                    articleStructure: f.D ? f.D.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Tl(14, [{
                placementIdentifiers: b
            }, a.A.F, c.sa])
        }
        return c
    }

    function HD(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.hb;
        c.numAutoAdsPlaced = b.za;
        c.hasAtfAd = b.Xa;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = rC(a.l, a.A, {
            Qb: -1,
            wb: -1,
            Bb: -1,
            Od: !0,
            md: !0
        }), null != a.j ? (c.placementPositionDiffs = DC(a.j.value), b = CC(a.j.value), a = new Jz, a = md(a, 2, Kz, b), c.placementPositionDiffsReport = Ad(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new Jz, a = hd(a, 1, Kz, b), c.placementPositionDiffsReport = Ad(a)))
    }

    function ID(a, b) {
        AD(a, {
            za: 0,
            hb: void 0,
            errors: [],
            Qa: [],
            exception: b,
            Xa: void 0,
            pb: void 0,
            qb: void 0,
            sa: void 0
        });
        BD(a, {
            za: 0,
            hb: void 0,
            errors: [],
            Qa: [],
            exception: b,
            Xa: void 0,
            pb: void 0,
            qb: void 0,
            sa: void 0
        })
    }

    function uD(a, b, c, d) {
        b = {
            r: b,
            pg_h: P(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Ks(a.D, Ds, b)
    }

    function vD(a) {
        let b = null;
        a.j.j() && Yc(a.j.j(), 19) && (b = v(a.j.j(), 19));
        return b
    }
    class oD {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.F = f;
            this.ba = k || null;
            this.J = [];
            this.L = l;
            this.O = m;
            this.Da = g;
            this.Ra = h;
            this.M = 0;
            this.va = n ? n : {
                url: a.location.href,
                Fb: void 0
            };
            this.I = "n"
        }
        runStorify() {
            const a = y(this.j, mp, 30);
            if (a) {
                var b = y(this.j, Ro, 6) ? .j() ? ? [];
                this.Ra.runStorify(this.l, Ad(a), this.C, b.map(c => Ad(c)))
            }
        }
        V(a) {
            try {
                ED(this, a.j.za);
                const b = DD(this) || CD(this) ? DD(this) : void 0;
                Dp({
                    Fc: b
                }, this.l);
                FD(this);
                const c = GD(this, a, DD(this));
                Zc(this.j, zp, 25) && cd(y(this.j,
                    zp, 25), 1) && HD(this, c);
                AD(this, c);
                BD(this, c);
                ul(753, () => {
                    if (U(Yp) && null != this.A) {
                        var d = rC(this.l, this.A, {
                                Qb: V(bq),
                                wb: V(aq),
                                Bb: V(Zp),
                                Od: !0,
                                md: !1
                            }),
                            e = Qd(c);
                        null != d.j ? (d = DC(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = zD(this, e);
                        Ls(this.D, Cs, e)
                    }
                })()
            } catch (b) {
                ID(this, b)
            }
        }
        T(a) {
            ED(this, 0);
            ID(this, a)
        }
    };
    var JD = class extends J {
        constructor(a) {
            super(a)
        }
    };

    function KD(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? On(() => xd(JD, c)) : Ln(null)
    };

    function LD(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = LD.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.ck, g = c.Uf || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Sd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Xa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Sd: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.xb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Xa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function MD(a, b = window) {
        if (cd(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function ND(a) {
        return "null" !== a.origin
    }

    function OD(a, b, c) {
        b = cd(b, 5) && ND(c) ? c.document.cookie : null;
        return null === b ? null : (new LD({
            cookie: b
        })).get(a) || ""
    };

    function PD(a, b) {
        return w(a, 5, b)
    }
    var QD = class extends J {
        constructor() {
            super()
        }
        j() {
            return cd(this, 6)
        }
    };
    var TD = ({
        win: a,
        Wb: b,
        Md: c = !1,
        Nd: d = !1
    }) => {
        if (!RD({
                win: a,
                Wb: b,
                Md: c,
                Nd: d
            })) return SD(a, PD(new QD, !0));
        (b = UC(PC(), 24)) ? (b = PD(new QD, qz(b)), a = SD(a, b)) : a = new Mn(null, Error("tcunav"));
        return a
    };

    function RD({
        win: a,
        Wb: b,
        Md: c,
        Nd: d
    }) {
        if (!(d = !d && uz(new yz(a)))) {
            if (c = !c) {
                if (b) {
                    a = KD(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Yc(a, 1)) b: switch (a = v(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else wl(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function SD(a, b) {
        return (a = MD(b, a)) ? Ln(a) : new Mn(null, Error("unav"))
    };
    var UD = class extends J {
        constructor(a) {
            super(a)
        }
    };
    class VD {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };

    function xD(a, {
        win: b,
        webPropertyCode: c,
        Id: d,
        pd: e
    }) {
        a = rv(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: Ad(d),
            serializedArticleStructures: e.map(g => Ad(g))
        }));
        sl.Ca(927, a)
    }
    var WD = class {
        constructor(a) {
            this.j = a
        }
    };

    function XD({
        win: a,
        webPropertyCode: b,
        vb: c
    }) {
        if (by(a.location, "google_auto_gallery")) {
            var d = new ap;
            var e = new bp;
            e = w(e, 1, !0);
            d = ld(d, 3, e);
            xD(new WD(c), {
                win: a,
                webPropertyCode: b,
                Id: d,
                pd: []
            })
        }
    };
    var YD = "a".charCodeAt(),
        ZD = Pd(Wl),
        $D = Pd(Xl);

    function aE(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function bE(a) {
        return String.fromCharCode(YD + aE(a, 6)) + String.fromCharCode(YD + aE(a, 6))
    }

    function cE(a) {
        let b = aE(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!aE(a, 1),
                e = aE(a, 16);
            if (d)
                for (d = aE(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function dE(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (aE(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function eE(a) {
        const b = aE(a, 16);
        return !0 === !!aE(a, 1) ? (a = cE(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : dE(a, b)
    }
    class fE {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var hE = (a, b) => {
        try {
            var c = ic(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new fE(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = aE(d, 12);
            c.cmpVersion = aE(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = aE(d, 6);
            c.isServiceSpecific = !!aE(d, 1);
            c.useNonStandardStacks = !!aE(d, 1);
            c.specialFeatureOptins = gE(dE(d, 12, $D), $D);
            c.purpose = {
                consents: gE(dE(d, 24, ZD), ZD),
                legitimateInterests: gE(dE(d, 24, ZD), ZD)
            };
            c.purposeOneTreatment = !!aE(d, 1);
            c.publisherCC = bE(d);
            c.vendor = {
                consents: gE(eE(d), b),
                legitimateInterests: gE(eE(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const gE = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var iE = class {
        constructor(a) {
            this.key = a;
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };

    function jE(a) {
        kE || (kE = new lE);
        const b = kE.j[a.key];
        if ("proto" === a.valueType) {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var mE = class {
        constructor() {
            this.j = {}
        }
    };
    var nE = class extends J {
            constructor() {
                super()
            }
        },
        oE = class extends J {
            constructor() {
                super()
            }
        };
    var pE = class extends J {
            constructor() {
                super()
            }
        },
        qE = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25, 26];
    var rE = class {};
    var tE = class extends J {
            constructor(a) {
                super(a, -1, sE)
            }
        },
        uE = class extends J {
            constructor(a) {
                super(a)
            }
        },
        vE = class extends J {
            constructor(a) {
                super(a)
            }
        },
        sE = [7];
    var wE = new iE("45368529"),
        xE = new iE("45369554");
    var lE = class extends mE {
            constructor() {
                super();
                var a = t.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        kE;

    function yE(a) {
        return (a = zE(a)) ? y(a, uE, 4) : null
    }

    function zE(a) {
        if (a = (new LD(a)).get("FCCDCF", ""))
            if (jE(wE))
                if (a.startsWith("%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    AE(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? xd(tE, b) : null
        } catch (c) {
            return AE(2), null
        }
    }

    function AE(a) {
        new rE;
        var b = new oE;
        a = w(b, 7, a);
        b = new nE;
        a = ld(b, 1, a);
        b = new pE;
        md(b, 22, qE, a);
        jE(xE)
    };

    function BE(a) {
        a.__tcfapiPostMessageReady || CE(new DE(a))
    }

    function CE(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var DE = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function EE(a) {
        var b = U(gq);
        a.__uspapi || a.frames.__uspapiLocator || (a = new FE(a), GE(a), b && HE(a))
    }

    function GE(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", nz(a.j, "__uspapiLocator"), Oa("__uspapi", (...b) => IE(a, ...b)))
    }

    function HE(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", nz(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Oa("__tcfapi", (...b) => JE(a, ...b)), BE(a.j))
    }

    function IE(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.C
        }, !0)
    }

    function JE(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(KE(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(KE(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function KE(a, b, c) {
        if (!a.A) return null;
        b = hE(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class FE {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.C = (a = (a = zE(this.l)) ? y(a, vE, 5) || null : null) ? v(a, 2) : null;
            this.A = (a = yE(this.l)) && null != v(a, 1) ? v(a, 1) : null;
            this.B = (a = yE(this.l)) && null != v(a, 2) ? v(a, 2) : null
        }
    };

    function LE(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function ME(a, b) {
        a = LE(a);
        b = LE(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var NE = Promise;
    class OE {
        constructor(a) {
            this.A = a
        }
        l(a, b, c) {
            this.A.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.A.then(c => c.j(a, b))
        }
    };
    class PE {
        constructor(a) {
            this.data = a
        }
    };

    function QE(a, b) {
        RE(a, b);
        return new SE(a)
    }
    class SE {
        constructor(a) {
            this.A = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            RE(d.port1, b);
            this.A.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new NE(c => {
                this.l(a, c, b)
            })
        }
    }

    function RE(a, b) {
        b && (a.onmessage = c => {
            b(new PE(c.data, QE(c.ports[0])))
        })
    };
    var VE = ({
        destination: a,
        Ga: b,
        origin: c,
        Ua: d = "ZNWN1d",
        onMessage: e,
        Wd: f
    }) => TE({
        destination: a,
        kf: () => b.contentWindow,
        Cf: UE(c),
        Ua: d,
        onMessage: e,
        Wd: f
    });
    const TE = ({
            destination: a,
            kf: b,
            Cf: c,
            fk: d,
            Ua: e,
            onMessage: f,
            Wd: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new OE(new NE((k, l) => {
                const m = n => {
                    if (n.source && n.source === b())
                        if (!0 !== h[n.origin]) {
                            a.removeEventListener("message", m, !1);
                            const q = c.join(", ");
                            l(Error(`Origin mismatch while establishing channel "${e}". Expected ${1===c.length?q:`one of [${q}]`}, but received ${n.origin}.`))
                        } else(n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) :
                            (k(QE(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        UE = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var WE = class {
        constructor(a) {
            this.sc = a
        }
        runStorify(a, b, c, d) {
            const e = rv(11, a, this.sc).then(f => {
                f.runStorify(a, b, c, d)
            });
            sl.Ca(1021, e)
        }
    };
    var XE = (a, b, c, d, e, f, g, h = null, k) => {
        try {
            var l = a.localStorage
        } catch (z) {
            l = null
        }
        if (l) {
            if (U(Xp)) var m = null;
            else try {
                m = l.getItem("google_ama_config")
            } catch (z) {
                m = null
            }
            try {
                var n = m ? xd(rp, m) : null
            } catch (z) {
                n = null
            }
            m = n
        } else m = null;
        a: {
            if (d) try {
                var q = xd(rp, d);
                break a
            } catch (z) {
                KC(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            q = null
        }
        if (d = q) {
            if (e) {
                q = new sp;
                ld(d, 3, q);
                m = d.j() && v(d.j(), 13) ? v(d.j(), 13) : 1;
                w(q, 1, Date.now() + 864E5 * m);
                q = Wc(d);
                d.j() && (m = new qp, n = d.j(), n = cd(n, 23), m = w(m, 23, null == n ? void 0 : n), n = E(d.j(), 12, !1), m = w(m, 12, n), n = E(d.j(), 15, !1), m =
                    w(m, 15, n), ld(q, 15, m));
                m = A(q, Xo, 1);
                for (n = 0; n < m.length; n++) w(m[n], 11, Oc);
                w(q, 22, void 0, !1);
                if (U(Xp)) MC(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Ad(q))
                } catch (z) {
                    KC(a, {
                        lserr: 1
                    })
                }
            }
            e = IC(a, A(d, vp, 7));
            a: {
                if (e && (q = v(e, 3), m = y(d, Ho, 9), q && m)) {
                    b: {
                        m = A(m, Fo, 1);
                        for (r of m)
                            if (v(r, 1) == q) {
                                var r = y(r, Eo, 2) || null;
                                break b
                            }
                        r = null
                    }
                    if (r) break a
                }
                r = y(d, Eo, 8) || new Eo
            }
            r = {
                If: r
            };
            e && (r.ea = e);
            e && GC(e, 3) && (r.ub = [1]);
            if (7 == c.google_pgb_reactive && (e = r.ea, !e || !cd(e, 8))) return !1;
            OC(a, 2) && (Tl(5, [d.toJSON()]), c = LC(c),
                f = new WD(f), g = new WE(g), e = r.ea, c.google_package = e && v(e, 4) || "", nD(a, b, d, r, f, g, new go(["google-auto-placed"], c), h, {
                    url: a.location.href,
                    Fb: k
                }));
            return !0
        }
        m && (KC(a, {
            cfg: 1,
            cl: 1
        }), MC(a));
        return !1
    };
    var ZE = a => {
        const b = a.H;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Yf.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = YE(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = YE(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = YE(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = YE(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = YE(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = YE(a, b.google_color_line, c))
    };

    function YE(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function $E(a, b) {
        var c = sl,
            d;
        var e;
        d = (e = (e = Dh()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new zh(d.left, d.top, d.width, d.height) : null) ? new gg(e.left, e.top) : (d = Gh()) && Ca(d.rootBounds) ? new gg(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new gg(0, 0),
                g = vg(qg(b));
            if (Kb(g, "parent")) {
                do {
                    if (g == a) var h = li(b);
                    else {
                        var k = ki(b);
                        h = new gg(k.left, k.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return c.pa(888, l), new gg(-12245933, -12245933)
        }
    };
    var aF = class extends J {
        constructor(a) {
            super(a)
        }
        A() {
            return E(this, 5)
        }
        B() {
            return E(this, 6)
        }
        C() {
            return E(this, 7)
        }
        j() {
            return E(this, 8)
        }
    };
    var cF = class extends J {
            constructor(a) {
                super(a, -1, bF)
            }
            j() {
                return dd(this, 1)
            }
        },
        bF = [1];
    var eF = class extends J {
            constructor(a) {
                super(a, -1, dF)
            }
        },
        fF = class extends J {
            constructor(a) {
                super(a)
            }
        },
        hF = class extends J {
            constructor(a) {
                super(a, -1, gF)
            }
        },
        dF = [2],
        gF = [2];
    var jF = class extends J {
            constructor(a) {
                super(a, -1, iF)
            }
        },
        iF = [19],
        kF = [13, 14];

    function lF(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var mF = class {
            constructor() {
                this.j = null;
                this.l = {
                    [rj]: {},
                    [sj]: {},
                    [tj]: {}
                };
                const a = b => this.j ? Ug(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[sj] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        nF;
    let oF = void 0;

    function pF() {
        Ed(oF, Cd);
        return oF
    };

    function qF(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Md(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };
    var rF = (a = t) => a.ggeac || (a.ggeac = {});

    function sF(a = document) {
        return !!a.featurePolicy ? .allowedFeatures().includes("browsing-topics")
    };
    class tF {
        constructor() {
            this.j = () => {}
        }
    };
    var vF = (a = rF()) => {
            ql(O(rl), a);
            uF(a);
            O(tF).j = pl(ol, a);
            O(Er).l()
        },
        uF = a => {
            const b = O(Er);
            b.A = (c, d) => pl(kl, a, () => !1)(c, d, 1);
            b.B = (c, d) => pl(ll, a, () => 0)(c, d, 1);
            b.j = (c, d) => pl(ml, a, () => "")(c, d, 1);
            b.C = (c, d) => pl(nl, a, () => [])(c, d, 1);
            b.l = () => {
                pl(hl, a)(1)
            }
        };

    function wF(a) {
        var b = O(rl).l(a);
        U(iq) && jD(O(lD), a, b)
    }
    var xF = a => {
        const b = O(rl).j();
        a = NC(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function yF(a, b, c) {
        return c ? OD(b, c, a.j) : null
    }

    function zF(a, b, c, d) {
        if (d) {
            var e = {
                Sd: v(c, 2) - Date.now() / 1E3,
                path: v(c, 3),
                domain: v(c, 4),
                Uf: !1
            };
            a = a.j;
            cd(d, 5) && ND(a) && (new LD(a.document)).set(b, v(c, 1), e)
        }
    }

    function AF(a, b, c) {
        if (c && OD(b, c, a.j))
            for (const e of BF(a.j.location.hostname)) {
                var d = a.j;
                cd(c, 5) && ND(d) && (new LD(d.document)).remove(b, "/", e)
            }
    }
    var CF = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function BF(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function DF(a, b, c) {
        return ul(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Wf(Vf(Uf(Tf(new Xf, g), h), k), e);
                switch (d) {
                    case 1:
                        zF(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        U(nq) && zF(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function EF(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (yF(a, "__gads", b)) var e = !0;
            else if (e = a.j, cd(b, 5) && ND(e) && (new LD(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === OD("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                cd(b, 5) && ND(f) && (new LD(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = DF(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function FF(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = yF(b, "__gads", a);
        e && (d.cookie = e);
        U(nq) && ((e = yF(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e), d.gpid_exp = "1");
        const f = ge(je(Id(Jd("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = EF(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Og(c.document, f)
        }) : Promise.resolve()
    }
    var GF = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new CF(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : FF(a, d, b, c)
        } else Promise.resolve();
        a = yF(d, "__gads", a) || "";
        nF || (nF = new mF);
        b = nF;
        lF(b, a);
        a = b.l;
        O(tF).j(a);
        wF(20);
        wF(17)
    };
    var pj = {
        Nj: 0,
        Jj: 1,
        Hj: 2,
        Ij: 3,
        Lj: 5,
        Mj: 6,
        Kj: 7
    };
    var HF = class {
        constructor(a) {
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.H = a.H;
            this.ia = a.ia;
            this.ca = a.ca;
            this.bb = a.bb;
            this.innerInsElement = a.innerInsElement;
            this.outerInsElement = a.outerInsElement;
            this.C = -1;
            this.j = 0;
            this.l = this.J = null;
            this.I = this.F = 0;
            this.A = [];
            this.tb = this.D = "";
            this.B = this.G = null
        }
    };

    function IF(a) {
        U(Lq) && (a.easpi = U(Lq), U(Jq) && (a.easpa = !0), a.asntp = V(dr), a.asntpv = V(hr), a.asntpl = V(fr), a.asntpm = V(gr), a.asntpc = V(er), a.asna = V($q), a.asnd = V(ar), a.asnp = V(br), a.asns = V(cr), a.asmat = V(Yq), a.asptt = V(kr))
    };
    var JF = (a, b) => vy({
        K: a,
        Oc: 3E3,
        dc: a.innerWidth > fm ? 650 : 0,
        ja: Ui,
        rd: b
    });
    var KF = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= gm(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var LF = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= gm(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var MF = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        NF = (a, b, c) => {
            let d = 0;
            try {
                d |= gm(a, 2500);
                if (U(Aq)) {
                    const g = P(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= hm(a);
                var e;
                if (e = 0 < b) {
                    var f = Tz(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function OF(a, b = null) {
        if (!U(Dq)) return 32;
        let c = a != a.top ? 512 : 0;
        ry(a.navigator ? .userAgent) && (c |= 1048576);
        const d = a.innerWidth;
        1200 > d && (c |= 65536);
        const e = a.innerHeight;
        650 > e && (c |= 2097152);
        b && 0 === c && (PF({
            K: a,
            je: 1,
            position: 3 === b ? "left" : "right",
            R: d,
            X: e,
            La: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (c |= 16));
        return c
    }

    function QF(a) {
        if (0 !== OF(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = PF({
                K: a,
                je: 1,
                position: e,
                R: c,
                X: d,
                La: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function RF(a, b) {
        return null !== Fg(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function SF(a, b) {
        return Fg(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function TF(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function UF(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function VF(a) {
        return `${a.position}-${UF(a.R)}x${UF(a.X)}-${UF(a.scrollY+a.ib)}Y`
    }

    function WF(a) {
        return `f-${VF({position:a.position,ib:a.ib,scrollY:0,R:a.R,X:a.X})}`
    }

    function XF(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function YF(a, b, c) {
        const d = cm(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.X),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var k = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = WF({
                            position: "left",
                            ib: f,
                            R: c.R,
                            X: c.X
                        });
                        b.set(l, XF(b.get(l), h))
                    }
                    if (h < c.R && e > c.R - k) {
                        l = WF({
                            position: "right",
                            ib: f,
                            R: c.R,
                            X: c.X
                        });
                        const m = c.R - e;
                        b.set(l, XF(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function PF(a) {
        var b = cm(a.K).sideRailAvailableSpace,
            c = {
                K: a.K,
                R: a.R,
                X: a.X,
                La: a.La
            },
            d = `f-${UF(c.R)}x${UF(c.X)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            cm(c.K).sideRailProcessedFixedElements.clear();
            d = new Set([...Array.from(c.K.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.La]);
            for (var e of TF(c.K)) RF(e, d) || YF(e, b, c)
        }
        c = [];
        d = .9 * a.X;
        var f = nm(a.K),
            g = e = (a.X - d) / 2,
            h = d / 11;
        for (var k = 0; 12 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    z = {
                        K: a.K,
                        R: a.R,
                        X: a.X,
                        La: a.La
                    };
                const D = WF({
                        position: q,
                        ib: n,
                        R: z.R,
                        X: z.X
                    }),
                    B = VF({
                        position: q,
                        ib: n,
                        scrollY: f,
                        R: z.R,
                        X: z.X
                    });
                if (r.has(B)) {
                    n = XF(r.get(D), r.get(B));
                    break a
                }
                const H = "left" === q ? 20 : z.R - 20;
                let K = H;q = .3 * z.R / 7 * ("left" === q ? 1 : -1);
                for (let I = 0; 8 > I; I++) {
                    const G = Dy(z.K.document, Math.round(K), Math.round(n));
                    var F = RF(G, z.La);
                    const la = SF(G, z.K);
                    if (!F && null !== la) {
                        YF(la, r, z);
                        r.delete(B);
                        break
                    }
                    F || (F = G.offsetHeight >= .25 * z.X, F = G.offsetWidth >= .9 * z.R && F);
                    if (F) r.set(B, Math.round(Math.abs(K - H) + 20));
                    else if (K !== H) K -= q, q /= 2;
                    else {
                        r.set(B, 0);
                        break
                    }
                    K += q
                }
                n = XF(r.get(D), r.get(B))
            }
            m.call(l,
                n);
            g += h
        }
        b = a.je;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) *
                        d),
                    ek: e + h[k] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const ZF = {
        [27]: 512,
        [26]: 128
    };
    var $F = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === JF(a, c);
                case 3:
                case 4:
                    return 0 === OF(a, c);
                case 8:
                    return b = "on" === b.google_adtest || by(a.location, "google_ia_debug") ? -1 : 3600, 0 == (MF(a) | NF(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || by(a.location, "google_scr_debug")), !Uz(a, b, d);
                case 30:
                    return 0 == IB(a);
                case 26:
                    return 0 == LF(a);
                case 27:
                    return 0 === KF(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        aG = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return JF(a, c);
                case 3:
                case 4:
                    return OF(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || by(a.location, "google_ia_debug") ? -1 : 3600, MF(a) | NF(a, b, d);
                case 9:
                    return Uz(a, !("on" === b.google_adtest || by(a.location, "google_scr_debug")), d);
                case 16:
                    return Yr(b, a) ? 0 : 8388608;
                case 30:
                    return IB(a);
                case 26:
                    return LF(a);
                case 27:
                    return KF(a);
                default:
                    return 32
            }
        },
        bG = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Nd(d)) return !1;
            a = Ng(a);
            if (!a || !$F(a, b, d, c)) return !1;
            b = cm(a);
            if (lm(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        dG = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && cG(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        eG = a => {
            if (!a.hash) return null;
            let b = null;
            Sg(Zx, c => {
                !b && by(a, c) && (b = $x[c])
            });
            return b
        },
        gG = (a, b) => {
            const c = cm(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Sg(ay, d => {
                !c.debugCardRequested && "number" === typeof d && ey(d, a.location) && (c.debugCardRequested = !0, fG(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        iG = (a, b, c) => {
            if (!b) return null;
            const d = cm(b);
            let e = 0;
            Sg(Od, f => {
                const g = ZF[f];
                g && 0 ===
                    hG(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        jG = (a, b, c) => {
            const d = [];
            Sg(Od, e => {
                if (U(Dq) || 3 !== e && 4 !== e) {
                    var f = hG(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        kG = a => {
            const b = [],
                c = {};
            Sg(a, (d, e) => {
                if ((e = am[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        lG = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        hG = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = cm(b),
                g = lm(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Sg(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            h && eG(b.location) !== c && (e |= 128);
            return e | aG(b, a, c, d)
        },
        mG = (a, b) => {
            if (a) {
                var c = cm(a),
                    d = {};
                Sg(b, (e, f) => {
                    (f = am[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Sg(Od, e => {
                    d[bm[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        nG = (a, b, c) => {
            b = sl.ga(b, c);
            return rv(1, window, ge(ei(a), O(Er).j(Sp.j, Sp.defaultValue) ? {
                bust: O(Er).j(Sp.j, Sp.defaultValue)
            } : {})).then(b)
        },
        fG = (a, b, c) => {
            c = sl.ga(212, c);
            rv(3, a, ei(b)).then(c)
        };
    const oG = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Og(a.document, ei(N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var pG = (a, b) => {
            L(a, "load", () => {
                oG(a);
                a.adsbygoogle.push(b)
            })
        },
        qG = a => {
            a = a.google_reactive_ad_format;
            return Nd(a) ? "" + a : null
        },
        cG = a => !!qG(a) || null != a.google_pgb_reactive,
        rG = a => {
            a = qG(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var sG = a => "number" === typeof a.google_reactive_sra_index,
        xG = (a, b, c) => {
            const d = b.K || b.pubWin,
                e = b.H;
            e.google_reactive_plat = jG(d, e, c);
            var f = kG(a);
            f && (e.google_reactive_plaf = f);
            (f = lG(a)) && (e.google_reactive_fba = f);
            (f = QF(d)) && (e.google_plas = f);
            tG(a, e);
            f = eG(b.pubWin.location);
            uG(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            IF(e);
            U(mq) && (e.fsapi = !0);
            Xh() || Nr(b.pubWin.top);
            f = zl(b.pubWin, "rsrai", ul(429, (g, h) => vG(b, d, e.google_ad_client, a, g, h, c)), sl.ga(430, Ma(qm, b.pubWin, 431, Ui)));
            b.A.push(f);
            cm(d).wasReactiveTagRequestSent = !0;
            wG(b, a, c)
        };
    const wG = (a, b, c) => {
        const d = a.H,
            e = Ca(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = zl(a.pubWin, "apcnf", ul(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = ei(a.ca.vb),
                m = ei(a.ca.sc),
                n = ei(a.ca.Fb);
            return nh(g.origin) ? XE(h, k, e, f.config, c, l, m, null, n) : !1
        }), sl.ga(353, Ma(qm, a.pubWin, 353, Ui)));
        a.A.push(b)
    };
    var vG = (a, b, c, d, e, f, g) => {
            if (!nh(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!OC(b, 1)) return !0;
            f && Tl(6, [f]);
            e = e.amaConfig;
            const h = [],
                k = [],
                l = cm(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const q = f[n],
                    r = q.adFormat;
                l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
                if (!q.noCreative) {
                    q.google_reactive_sra_index = n;
                    if (9 === r && e) {
                        q.pubVars = Object.assign(q.pubVars || {}, yG(d, q));
                        const z = new Vz;
                        if (Pz(z, q)) {
                            m = z;
                            continue
                        }
                    }
                    h.push(q);
                    k.push(r)
                }
            }
            h.length && (vl("rasra::pm", {
                rt: k.join(","),
                c
            }, .1), nG(a.ca.ee, 522, n => {
                zG(h, b, c, n, d, g)
            }));
            e && XE(b, c, d, e, g, ei(a.ca.vb), ei(a.ca.sc), m);
            return !0
        },
        yG = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            Ca(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        zG = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const k = a[h],
                    l = k.adFormat,
                    m = k.adKey,
                    n = d.configProcessorForAdFormat(l);
                l && n && m ? (k.pubVars = yG(e, k), delete k.google_reactive_sra_index, g.push(l), tl(466, () => n.verifyAndProcessConfig(b, k, f))) : vl("rasra::ivc", {
                    af: l,
                    ak: m,
                    c
                }, .1)
            }
            vl("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        tG = (a, b) => {
            const c = [];
            let d = !1;
            Sg(am, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    Ca(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = am[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        uG = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    Jb("script");
    var AG = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function BG(a, b) {
        if (!Yr(b, a)) return () => {};
        a = CG(b, a);
        if (!a) return () => {};
        const c = $C();
        b = Qd(b);
        const d = {
            Ma: a,
            H: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Bb(c, d)
    }

    function CG(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !cs.test(a.className);) a = a.parentElement;
        return a
    }

    function DG(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = ah(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function EG(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function FG(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = $C();
            for (const d of a)
                if (d.Ma.offsetWidth != d.offsetWidth || d.H.google_full_width_responsive_allowed) d.offsetWidth = d.Ma.offsetWidth, tl(467, () => {
                    var e = d.Ma,
                        f = d.H;
                    const g = DG(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = DG(e, f);
                    !h && g && 1 == e.childNodes.length ? (EG(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", oG(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (EG(g, !1), EG(h, !0)) : vl("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var GG = class extends Fm {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = PC();
            if (!UC(b, 27, !1)) {
                VC(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => FG(this, a);
                L(a, "resize", c);
                Gm(this, () => {
                    Ef(a, "resize", c)
                })
            }
        }
    };
    var HG = class {
        constructor(a, b, c) {
            this.K = a;
            this.Ma = b;
            this.H = c;
            this.j = null;
            this.l = this.A = 0
        }
        B() {
            10 <= ++this.A && t.clearInterval(this.j);
            var a = as(this.K, this.Ma);
            a = bs(this.K, this.Ma, a);
            const b = Xr(this.Ma, this.K);
            null != b && 0 === b.x || t.clearInterval(this.j);
            a && (this.l++, vl("rspv:al", {
                aligns: this.l,
                attempt: this.A,
                client: this.H.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: xF(this.H),
                slot: this.H.google_ad_slot,
                url: this.H.google_page_url
            }, .01))
        }
    };

    function IG(a, b) {
        var c = PD(a, qz(b));
        c = w(c, 2, b.tcString);
        c = w(c, 4, b.addtlConsent || "");
        w(c, 7, b.internalErrorState);
        c = !sz(b);
        w(a, 9, c);
        null != b.gdprApplies && w(a, 3, b.gdprApplies)
    }

    function JG(a) {
        const b = new yz(a.pubWin, -1, U(Iq));
        if (!uz(b)) return Promise.resolve(null);
        const c = PC(),
            d = UC(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = UC(c, 25, []);
            g.push(f);
            VC(c, 25, g)
        });
        d || null === d || (VC(c, 24, null), b.addEventListener(f => {
            if (pz(f)) {
                VC(c, 24, f);
                IG(a.l, f);
                for (const g of UC(c, 25, [])) g.resolve(f);
                VC(c, 25, [])
            } else VC(c, 24, null)
        }));
        return e
    };

    function KG(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var MG = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => LG(d));
        return zl(a, "adpnt", (e, f) => {
            if (mm(f, c.contentWindow)) {
                e = pm(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e);
                    a.googletag ? ? (a.googletag = {
                        cmd: []
                    });
                    var g = a.googletag.queryIds ? ? [];
                    g.push(e);
                    500 < g.length && g.shift();
                    a.googletag.queryIds = g
                } catch {}
                d.dataset.adStatus && vl("adsense_late_fill", {
                    status: d.dataset.adStatus
                });
                d.dataset.adStatus = "filled";
                g = !0
            } else g = !1;
            return g
        })
    };

    function LG(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function NG(a, b, c) {
        try {
            if (!nh(c.origin) || a.j && !mm(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ra[d]) && a.T.Db(168, () => {
            e.call(a, b, c)
        })
    }
    class OG extends Fm {
        constructor(a, b) {
            var c = sl,
                d = Ui;
            super();
            this.A = a;
            this.j = b;
            this.T = c;
            this.ja = d;
            this.Ra = {};
            this.ze = this.T.ga(168, (e, f) => void NG(this, e, f));
            this.Me = this.T.ga(169, (e, f) => qm(this.A, "ras::xsf", this.ja, e, f));
            this.ba = [];
            this.va(this.Ra);
            this.ba.push(yl(this.A, "sth", this.ze, this.Me))
        }
        l() {
            for (const a of this.ba) a();
            this.ba.length = 0;
            super.l()
        }
    };
    class PG extends OG {
        constructor(a, b = null) {
            super(a, b);
            this.A = a
        }
    };
    var QG = class extends PG {
        constructor(a, b) {
            super(a, b);
            this.B = () => {};
            this.j && L(this.j, "load", this.B)
        }
        l() {
            this.j && Ef(this.j, "load", this.B);
            super.l();
            this.j = null
        }
        va(a) {
            a["adsense-labs"] = b => {
                if (b = pm(b).settings) try {
                    var c = new Sf(JSON.parse(b));
                    if (null != v(c, 1)) {
                        var d = this.A,
                            e = v(c, 1) || "";
                        if (U(Mp) ? null != TD({
                                win: d,
                                Wb: pF()
                            }).j : 1) {
                            if (U(Mp)) {
                                const g = TD({
                                    win: d,
                                    Wb: pF()
                                });
                                var f = null != g.j ? qF(g.j.value) : {}
                            } else f = qF(d.localStorage);
                            null !== c && (f[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (g) {}
                        }
                    }
                } catch (g) {}
            }
        }
    };

    function RG(a) {
        a.B = a.F;
        a.J.style.transition = "height 500ms";
        a.D.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        SG(a)
    }

    function TG(a, b) {
        (a.j.contentWindow || a.j.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function SG(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.B}px, 0px)`;
        a.j.style.clip = b;
        a.G.style.clip = b;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.G.setAttribute("height", a.B);
        a.G.style.height = a.B + "px";
        a.D.style.height = a.B + "px";
        a.J.style.height = a.B + "px"
    }

    function UG(a, b) {
        b = Zg(b.r_nh);
        a.F = null == b ? 0 : b;
        if (0 >= a.F) return "1";
        a.M = li(a.J).y;
        a.L = nm(a.A);
        if (a.M + a.B < a.L) return "2";
        if (a.M > im(a.A) - a.A.innerHeight) return "3";
        b = a.L;
        a.j.setAttribute("height", a.F);
        a.j.style.height = a.F + "px";
        a.G.style.overflow = "hidden";
        a.J.style.position = "relative";
        a.J.style.transition = "height 100ms";
        a.D.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.M, a.B);
        fi(a.D, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        fi(a.j, {
            clip: b
        });
        fi(a.G, {
            clip: b
        });
        return "0"
    }

    function VG(a, b = {}) {
        a.V && (b.eid = a.V);
        b.qid = a.Gb;
        vl("eoscrl", b, Vl(String(a.Hb)))
    }
    class WG extends PG {
        constructor(a, b) {
            super(a.K, b);
            this.G = a.outerInsElement.firstElementChild;
            this.D = a.outerInsElement;
            this.J = this.D.parentElement && this.D.parentElement.classList.contains("adsbygoogle") ? this.D.parentElement : this.D;
            this.B = parseInt(this.D.style.height, 10);
            this.V = null;
            this.Ib = this.dd = !1;
            this.Gb = "";
            this.Da = this.L = this.F = 0;
            this.Ae = this.B / 5;
            this.M = li(this.J).y;
            this.Hb = null;
            this.ye = pf(ul(651, () => {
                this.M = li(this.J).y;
                var c = this.L;
                this.L = nm(this.A);
                this.B < this.F ? (c = this.L - c, 0 < c && (this.Da +=
                    c, this.Da >= this.Ae ? (RG(this), TG(this, this.F)) : (this.B = Math.min(this.F, this.B + c), TG(this, c), SG(this)))) : Ef(this.A, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.ye;
                Yf.requestAnimationFrame ? Yf.requestAnimationFrame(c) : c()
            }
        }
        va(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = pm(b);
                this.V = b.i_expid;
                this.Gb = b.qid;
                this.Hb = b.gen204_fraction;
                this.dd || (this.dd = !0, b = UG(this, b), "0" === b && L(this.A, "scroll", this.O, Bf), c.source.postMessage(JSON.stringify({
                        msg_type: "expand-on-scroll-result",
                        eos_success: "0" === b,
                        googMsgType: "sth"
                    }),
                    "*"), VG(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ib || (this.Ib = !0, RG(this), Ef(this.A, "scroll", this.O))
            }
        }
        l() {
            this.O && Ef(this.A, "scroll", this.O, Bf);
            super.l()
        }
    };

    function XG(a) {
        const b = a.L.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.A.innerHeight) && !c
    }
    class YG extends Fm {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.D = b;
            this.L = c;
            this.F = 0;
            this.B = XG(this);
            this.J = of (this.G, this);
            this.j = ul(433, () => {
                var d = this.J;
                Yf.requestAnimationFrame ? Yf.requestAnimationFrame(d) : d()
            });
            L(this.A, "scroll", this.j, Bf)
        }
        G() {
            const a = XG(this);
            if (a && !this.B) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.D.contentWindow;
                c && (Al(c, "ig", b, "*", 2), 10 <= ++this.F && this.j && Ef(this.A, "scroll", this.j, Bf))
            }
            this.B = a
        }
    };

    function ZG(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function $G(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function aH(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function bH(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Sc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        fi(a, "transition", b.join(","))
    }
    var cH = mf(function() {
        if (Ob) return $b("10.0");
        var a = xg(document, "DIV"),
            b = Sb ? "-webkit" : Rb ? "-moz" : Ob ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = Pe("div", {
            style: c
        });
        ag(a, b);
        a = a.firstChild;
        b = a.style[mg("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[gi(a, "transition")] || "")
    });

    function dH(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function eH(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function fH(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function gH(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(hH, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function iH(a) {
        var b = gH(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var jH = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function kH(a) {
        let b = a.V;
        a.J = function() {};
        lH(a, a.G, b);
        let c = a.G.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Qg(c, b)
            } catch (g) {
                fH(a.j, "c")
            }
            const f = mH(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.T = !0);
            if (d && !f && nH(e)) {
                eH(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && oH(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Hb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Kg(b)) {
                        eH(a.j, "c");
                        break
                    }
                } catch (g) {
                    eH(a.j,
                        "c");
                    break
                }
            }
        }
        a.I && a.B && pH(a);
        return a.j
    }

    function qH(a) {
        function b() {
            rH(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) fi(h, m[n], "0px")
                };
                l(sH);
                l(tH)
            }
        }
        const c = a.G;
        c.style.overflow = a.Gb ? "visible" : "hidden";
        a.I && (a.L ? (bH(c, uH), bH(a.L, uH)) : bH(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.F && null != a.A && (a.va || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.va || a.l > a.D) ? a.l : null;
        if (a.M) {
            const l = a.M.length;
            for (let m = 0; m < l; m++) rH(a.M[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.L,
            k = a.T;
        a.I ? t.setTimeout(b, 1E3) : b()
    }

    function vH(a) {
        if (a.B && !a.Ra || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        kH(a);
        a.B = b;
        if (!b || null != a.ba && !gH(a.j, a.ba, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        qH(a);
        return kH(a)
    }

    function oH(a, b) {
        let c = !1;
        "none" == b.display && (eH(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || eH(a.j, "v");
        "hidden" == b.overflow && eH(a.j, "o");
        "absolute" == b.position ? (eH(a.j, "a"), c = !0) : "fixed" == b.position && (eH(a.j, "f"), c = !0);
        return c
    }

    function lH(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = wH(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && dH(a.j, 0, "o"), d & 4 && dH(a.j, 1, "o"));
        return !(d & 1)
    }

    function mH(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (F) {
            fH(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Zg(f),
            h = c.getAttribute("height"),
            k = Zg(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = lH(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var q = e && e.width,
            r = e && e.height,
            z = ah(m) == a.F && ah(n) == a.D;
        m = z ? m : q;
        r = z ? n : r;
        q = ah(m);
        z = ah(r);
        g = null !== a.F && (null !== q && a.F >= q || null !== g && a.F >= g);
        z = null !== a.D && (null !== z && a.D >= z || null !== k && a.D >= k);
        k = !b && nH(d);
        z = b || z || k || !(f || m || d && (!xH(String(d.minWidth)) || !yH(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!xH(String(d.minHeight)) || !yH(String(d.maxHeight))));
        zH(a, 0, z, c, "width", f, a.F, a.A);
        AH(a, 0, "d", z, e, d, "width", m, a.F, a.A);
        AH(a, 0, "m", z, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        AH(a, 0, "M", z, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        a.Ib ? (c = /^html|body$/i.test(c.nodeName), f = ah(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !xH(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !yH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (zH(a, 1, l, c, "height", h, a.D, a.l), AH(a, 1, "d", l, e, d, "height", r, a.D, a.l), AH(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.D, a.l), AH(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function pH(a) {
        function b() {
            if (0 < c) {
                var l = Qg(e, d) || {};
                const m = ah(l.width);
                l = ah(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.V,
            e = a.G,
            f = a.A,
            g = a.l,
            h = a.J;
        let k;
        t.setTimeout(function() {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function wH(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Qg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function zH(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Zg(f);
                null == f && (fH(a.j, "n"), dH(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else dH(a.j, b, "d")
        }
    }

    function AH(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? xH(f) : yH(f)) || (f = ah(f), null == f ? eH(a.j, "p") : null != k && eH(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? xH(h) : yH(h)) return;
                h = ah(h);
                null == h && (fH(a.j, "p"), dH(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.J;
                            a.J = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = l + "px"
                } else dH(a.j, b, c)
        }
    }
    var FH = class {
        constructor(a, b, c, d, e, f, g) {
            this.Hb = a;
            this.M = c;
            this.G = b;
            this.V = (a = this.G.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new BH(this.G);
            this.B = g;
            this.Ra = CH(this.C, d.Yc, d.height, d.ie);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = DH(d.width);
            this.l = DH(d.height);
            this.O = this.B ? DH(d.opacity) : null;
            this.ba =
                d.check;
            this.I = "animate" == d.Yc && !EH(this.C, this.l, this.Da) && cH();
            this.Gb = !!d.kd;
            this.j = new jH;
            EH(this.C, this.l, this.Da) && eH(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && eH(this.j, "b");
            this.L = this.J = null;
            this.T = !1;
            this.va = !!d.Pf;
            this.Ib = !!d.Rf;
            this.Da = !!d.ie
        }
    };

    function EH(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, DH(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var BH = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Ng(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && ZG(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function CH(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return EH(a, c, d)
        }
    }

    function nH(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function GH(a, b, c, d) {
        return vH(new FH(a, b, d, c, null, null, !0))
    }
    var HH = new jH("s", ""),
        hH = RegExp("[lonvafrbpEe]", "g");

    function yH(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function xH(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function rH(a, b, c) {
        null !== b && null !== Zg(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Zg(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var sH = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        tH = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let IH = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        JH = sH;
    for (let a = 0; a < JH.length; a++) IH += ", " + JH[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    JH = tH;
    for (let a = 0; a < JH.length; a++) IH += ", " + JH[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var uH = IH;

    function DH(a) {
        return "string" === typeof a ? Zg(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function KH(a, b, c) {
        const d = {
            scrl: nm(a.A || window),
            adk: a.F,
            adf: a.D,
            fmt: a.B
        };
        b && (d.str = EH(b, Zg(c.r_nh), $g(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        Sg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function LH(a, b, c) {
        const d = Vl(String(b.gen204_fraction));
        b = KH(a, c, b);
        b.url = a.A.document.URL;
        vl("resize", b, d)
    }
    var MH = class extends PG {
        constructor(a, b, c) {
            super(a, b);
            this.F = String(c.google_ad_unit_key || "");
            this.D = String(c.google_ad_dom_fingerprint || "");
            this.B = String(c.google_ad_format || "")
        }
        va(a) {
            a["resize-me"] = (b, c) => {
                b = pm(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = Zg(b.r_nw),
                        f = Zg(b.r_nh),
                        g = Zg(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = g,
                            l = $g(b.r_ao),
                            m = $g(b.r_ifr),
                            n = $g(b.r_cab);
                        const r = window;
                        if (this.j && r)
                            if ("no_rsz" === h) b.err = "7", LH(this, b, null), f = !0;
                            else if (g = new BH(this.j), g.j) {
                            var q =
                                g.getWidth();
                            null != q && (b.w = q);
                            q = g.getHeight();
                            null != q && (b.h = q);
                            if (CH(g, h, f, n)) {
                                const z = this.j.ownerDocument.getElementById(this.j.id + "_host");
                                q = z || this.j;
                                d = GH(r, q, {
                                    width: e,
                                    height: f,
                                    opacity: k,
                                    check: d,
                                    Yc: h,
                                    kd: l,
                                    Pf: m,
                                    ie: n
                                }, z ? [this.j] : null);
                                b.r_cui && $g(b.r_cui.toString()) && M(q, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = iH(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                LH(this, b, g);
                                f = !0
                            } else b.err = "1", LH(this, b, g), f = !1
                        } else b.err = "3", LH(this,
                            b, null), f = !1;
                        else b.err = "2", LH(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const NH = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const OH = /^blogger$/,
        PH = /^wordpress(.|\s|$)/i,
        QH = /^joomla!/i,
        RH = /^drupal/i,
        SH = /\/wp-content\//,
        TH = /\/wp-content\/plugins\/advanced-ads/,
        UH = /\/wp-content\/themes\/genesis/,
        VH = /\/wp-content\/plugins\/genesis/;

    function WH(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (TH.test(e)) return 5;
                if (VH.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", UH.test(e) || VH.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (OH.test(f)) return 1;
                if (PH.test(f)) return 2;
                if (QH.test(f)) return 3;
                if (RH.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", SH.test(d))) return 2;
        return 0
    };
    let XH = navigator;
    var YH = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        ZH = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return YH(a.toLowerCase())
        };
    const $H = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        aI = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        bI = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var cI = () => {
        const a = new Sr;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = fh();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return Rr(a)
    };
    var dI = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => N `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function eI(a, b, c) {
        const d = Pg("LINK", a);
        try {
            if (d.rel = "preload", gb("preload", "stylesheet")) {
                d.href = ie(b).toString();
                const h = cg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                h && d.setAttribute("nonce", h)
            } else {
                if (b instanceof $d) var e = ie(b).toString();
                else {
                    if (b instanceof pe) var f = qe(b);
                    else {
                        if (b instanceof pe) var g = b;
                        else b = "object" == typeof b && b.ta ? b.na() : String(b), se.test(b) || (b = "about:invalid#zClosurez"), g = new pe(b, oe);
                        f = qe(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch {
            return
        }
        d.as =
            "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch {}
    };
    let fI = t;
    const hI = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        gI[3] >= Na() && b.set("adsid", gI[1]);
        return $h(dI.get(a).js, b)
    };
    let gI, iI;
    const jI = () => {
        fI = t;
        gI = fI.googleToken = fI.googleToken || {};
        const a = Na();
        gI[1] && gI[3] > a && 0 < gI[2] || (gI[1] = "", gI[2] = -1, gI[3] = -1, gI[4] = "", gI[6] = "");
        iI = fI.googleIMState = fI.googleIMState || {};
        dI.has(iI[1]) || (iI[1] = ".google.com");
        Array.isArray(iI[5]) || (iI[5] = []);
        "boolean" !== typeof iI[6] && (iI[6] = !1);
        Array.isArray(iI[7]) || (iI[7] = []);
        "number" !== typeof iI[8] && (iI[8] = 0)
    };
    var kI = a => {
        jI();
        dI.has(a) && (iI[1] = a)
    };
    const lI = {
        Ic: () => 0 < iI[8],
        Mf: () => {
            iI[8]++
        },
        Nf: () => {
            0 < iI[8] && iI[8]--
        },
        Of: () => {
            iI[8] = 0
        },
        dk: () => !1,
        Jd: () => iI[5],
        qd: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        fe: () => {
            if (!lI.Ic()) {
                var a = t.document,
                    b = e => {
                        e = hI(e);
                        a: {
                            try {
                                var f = cg("script[nonce]");
                                break a
                            } catch {}
                            f = void 0
                        }
                        eI(a, e.toString(), f);
                        f = Pg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        gf(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), lI.Mf()
                        } catch (g) {}
                    },
                    c = iI[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function mI(a) {
        jI();
        const b = fI.googleToken[5] || 0;
        a && (0 != b || gI[3] >= Na() ? lI.qd(a) : (lI.Jd().push(a), lI.fe()));
        gI[3] >= Na() && gI[2] >= Na() || lI.fe()
    }
    var oI = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => nI(b, c));
        mI(a)
    };
    const nI = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        jI();
        1 == b ? lI.Of() : lI.Nf();
        var h = fI.googleToken = fI.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !lI.Ic() && (!(gI[3] >= Na()) || "NT" == gI[1]);
        var l = !(gI[3] >= Na()) && 0 != b;
        if (k || d || l) d = Na(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Ji(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, jI();
        if (k || !lI.Ic()) {
            b = lI.Jd();
            for (c = 0; c < b.length; c++) lI.qd(b[c]);
            b.length = 0
        }
    };
    const pI = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        qI = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function rI(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return pI.get(b.type) ? ? null
        } catch {}
        return qI.get(a.performance ? .navigation ? .type) ? ? null
    };
    var sI = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        tI = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function uI() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function vI(a = window) {
        return !a.PeriodicSyncManager
    }

    function wI(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = a ? .get(sI.issuerOrigin)) && e.push(d);
        c && (d = a ? .get(tI.issuerOrigin)) && e.push(d);
        return e
    }

    function xI(a) {
        return U(Br) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function yI(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function zI(a, b) {
        a = U(Br) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: U(Br) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !U(Br) && b && 0 < Object.keys(b).length && (a.additionalSigningData = hc(JSON.stringify(b)));
        return a
    }

    function AI(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function BI() {
        const a = `${sI.issuerOrigin}${sI.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: sI.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        AI(sI.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            AI(sI.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? AI(sI.issuerOrigin, 6, !0) : AI(sI.issuerOrigin, 5)
        })
    }

    function CI() {
        const a = `${sI.issuerOrigin}${sI.issuancePath}`;
        AI(sI.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            AI(sI.issuerOrigin, 10);
            return BI()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return AI(sI.issuerOrigin, 10), BI();
            AI(sI.issuerOrigin, 9)
        })
    }

    function DI() {
        AI(sI.issuerOrigin, 13);
        return document.hasTrustToken(sI.issuerOrigin).then(a => a ? BI() : CI())
    }

    function EI() {
        AI(tI.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(tI.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${tI.issuerOrigin}${tI.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            AI(tI.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                AI(tI.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) AI(tI.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    AI(tI.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(tI.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${tI.issuerOrigin}${tI.getStatePath}`;
                AI(tI.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [tI.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    AI(tI.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = qh(window);
            return a.then(e => {
                const f = `${tI.issuerOrigin}${tI.issuancePath}`;
                return e && e.srqt && e.cs ? (AI(tI.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    AI(tI.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return AI(tI.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    AI(tI.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                AI(tI.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        AI(tI.issuerOrigin, e.state);
                        const f = V(Ar);
                        Math.random() <= f && Mi({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function FI(a) {
        if (document.hasTrustToken && !U(yr) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === sI.issuerOrigin)) {
                    let d = b.get(sI.issuerOrigin);
                    d || (d = DI(), b.set(sI.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === tI.issuerOrigin) && (a = b.get(tI.issuerOrigin), a || (a = EI(), b.set(tI.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var GI = class extends Fm {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.j = [];
            b && uI() && this.j.push(sI);
            c && this.j.push(tI);
            if (document.hasTrustToken && !U(yr)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.A ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function HI(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const II = /[+, ]/;

    function JI(a, b) {
        const c = a.H;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = vh(d);
        var h = Tr(d, c.google_ad_width, c.google_ad_height);
        var k = Vr(g).Mc;
        var l = d.top == d ? 0 : Kg(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = Wr(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (q) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Kg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Dh()) && d.referrer || "";
        e.google_referrer_url = d;
        Ur(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in NH), 2 <= e.length && (d = d || e[e.length - 2] in NH), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = KI(a, b);
        d = a.H;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && LI.test(f) &&
            (g = "/pagead/lopri?");
        a = ui(b, `https://${e}${g}` + (E(a.ia, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function MI(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + ti({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function NI(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = vg(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && Kg(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function OI(a, b) {
        b.eid = xF(a.pubWin);
        const c = a.H.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function PI(a, b) {
        a = (a = Ng(a.pubWin)) && a.document ? Pr(a.document, a) : new gg(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function QI(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function RI(a) {
        const b = Yi();
        b && (a.debug_experiment_id = b);
        a.creatives = QI(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = QI(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function SI(a, b, c) {
        const d = a.H;
        var e = a.pubWin,
            f = a.K,
            g = vh(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Dh(e)) && Ca(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = Vr(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Mc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.tb && (b.etu = a.tb);
        0 <= a.C && (b.eae = a.C);
        (c = iG(d, f, f ? MD(c, f) : null)) && (b.fc = c);
        if (!Di(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new pg(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const X = h.contentWindow.document;
                    X.open();
                    X.write(Le(Xe));
                    X.close();
                    g += X.documentMode
                } catch (X) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, q, r, z, F, D;
        try {
            var B = e.screenX;
            k = e.screenY
        } catch (X) {}
        try {
            l = e.outerWidth,
                m = e.outerHeight
        } catch (X) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (X) {}
        try {
            r = e.screenLeft, z = e.screenTop
        } catch (X) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (X) {}
        try {
            F = e.screen.availWidth, D = e.screen.availTop
        } catch (X) {}
        b.brdim = [r, z, B, k, F, D, l, m, n, q].join();
        B = 0;
        void 0 === t.postMessage && (B |= 1);
        0 < B && (b.osd = B);
        b.vis = ZG(e.document);
        B = a.innerInsElement;
        e = cG(d) ? HH : vH(new FH(e, B, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = iH(e);
        if (!cG(d) && (e = Ei(d), null != e)) {
            B = 0;
            a: {
                try {
                    {
                        var H =
                            d.google_async_iframe_id;
                        const X = window.document;
                        if (H) var K = X.getElementById(H);
                        else {
                            var I = X.getElementsByTagName("script"),
                                G = I[I.length - 1];
                            K = G && G.parentNode || null
                        }
                    }
                    if (H = K) {
                        K = [];
                        I = 0;
                        for (var la = Date.now(); 100 >= ++I && 50 > Date.now() - la && (H = NI(H));) 1 === H.nodeType && K.push(H);
                        var Ha = K;
                        b: {
                            for (la = 0; la < Ha.length; la++) {
                                c: {
                                    var ta = Ha[la];
                                    try {
                                        if (ta.parentNode && 0 < ta.offsetWidth && 0 < ta.offsetHeight && ta.style && "none" !== ta.style.display && "hidden" !== ta.style.visibility && (!ta.style.opacity || 0 !== Number(ta.style.opacity))) {
                                            const X =
                                                ta.getBoundingClientRect();
                                            var wa = 0 < X.right && 0 < X.bottom;
                                            break c
                                        }
                                    } catch (X) {}
                                    wa = !1
                                }
                                if (!wa) {
                                    var ia = !1;
                                    break b
                                }
                            }
                            ia = !0
                        }
                        if (ia) {
                            b: {
                                const X = Date.now();ia = /^html|body$/i;wa = /^fixed/i;
                                for (ta = 0; ta < Ha.length && 50 > Date.now() - X; ta++) {
                                    const mc = Ha[ta];
                                    if (!ia.test(mc.tagName) && wa.test(mc.style.position || ji(mc, "position"))) {
                                        var ja = mc;
                                        break b
                                    }
                                }
                                ja = null
                            }
                            break a
                        }
                    }
                } catch {}
                ja = null
            }
            ja && ja.offsetWidth * ja.offsetHeight <= 4 * e.width * e.height && (B = 1);
            b.pfx = B
        }
        a: {
            if (.05 > Math.random() && f) try {
                const X = f.document.getElementsByTagName("head")[0];
                var Ka = X ? WH(X) : 0;
                break a
            } catch (X) {}
            Ka = 0
        }
        f = Ka;
        0 !== f && (b.cms = f);
        d.google_lrv !== C(a.ia, 2) && (b.alvm = d.google_lrv || "none")
    }

    function TI(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Lg(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function UI(a, b) {
        const c = UC(b, 8, {});
        b = UC(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function VI(a, b, c) {
        const d = a.H;
        var e = a.H;
        b.dt = Ul;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (G) {}
            g = null
        }(e = (e = g) ? KG(e, t.Date.now() - Ul, 1E6) : null) && (b.bdt = e);
        b.idt = KG(a.I, Ul);
        e = a.H;
        b.shv = C(a.ia, 2);
        a.bb && (b.mjsv = a.bb);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Dh(a.pubWin)) b.is_amp = 1, b.amp_v = Eh(e), (e = Fh(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = a.pubWin._gfp_a_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            e && (e = new CF(a.pubWin), (g = yF(e, "__gads", c)) && (b.cookie = g), U(nq) && (g = yF(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), "1" === yF(e, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1"))
        }
        e = PC();
        f = UC(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = UC(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        UI(d, e);
        g = UC(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Dh(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = vh(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = UC(e, 7, g);
        U(vq) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = UC(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(II);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f =
                UC(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(II);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var q = l[n];
                    "" !== q && (f[k][q] ? m += "+" + q : f[k][q] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = vh(window),
                z = r.google_prev_clients;
            z || (z = r.google_prev_clients = {});
            if (e in z) var F = 1;
            else z[e] = !0, F = 2
        } catch {
            F = 0
        }
        b.pv =
            F;
        z = a.pubWin.document;
        F = a.H;
        e = a.pubWin;
        r = z.domain;
        e = (cd(c, 5) && ND(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = z.referrer;
        m = wi();
        if (Dh()) var D = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = F.google_analytics_domain_name;
            c = "undefined" == typeof f ? ZH("auto", r) : ZH(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (r = (Yh() || window).gaGlobal) || (r = {}, (Yh() || window).gaGlobal = r);
            z = !1;
            if (n) {
                var B = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? r.sid = B[3] : r.sid ||
                    (r.sid = g + "");
                r.vid = B[0] + "." + B[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    z = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = XH.appName;
                    q = XH.version;
                    var H = XH.language ? XH.language : XH.browserLanguage,
                        K = XH.platform,
                        I = XH.userAgent;
                    try {
                        B = XH.javaEnabled()
                    } catch (G) {
                        B = !1
                    }
                    B = [n, q, H, K, I, B ? 1 : 0].join("");
                    h ? B += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), B += h.screen.width + "x" + h.screen.height);
                    B = B + e + (k || "");
                    for (h = B.length; 0 < m;) B += m-- ^ h++;
                    r.vid = (l ^ YH(B) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, B = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, B = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = $H.exec(e[f]) || aI.exec(e[f]) || bI.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == B) {
                            D = h[2];
                            break b
                        }
                        k < g && (g = k, D = h[2])
                    }z && D && -1 != D.search(/^\d+\.\d+$/) ? (r.vid = D, r.from_cookie = !0) : D != r.vid && (r.cid = D)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 * Math.random()));
            D = r
        }
        b.ga_vid = D.vid;
        b.ga_sid = D.sid;
        b.ga_hid = D.hid;
        b.ga_fc = D.from_cookie;
        b.ga_cid = D.cid;
        b.ga_wpids = F.google_analytics_uacct;
        TI(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= AG[a] && (b.rplot = AG[a])
    }

    function WI(a, b) {
        a = a.l;
        if (a ? .j() || ZC()) b.npa = 1;
        if (a) {
            Yc(a, 3) && (b.gdpr = cd(a, 3) ? "1" : "0");
            var c = v(a, 1);
            c && (b.us_privacy = c);
            (c = v(a, 2)) && (b.gdpr_consent = c);
            (c = v(a, 4)) && (b.addtl_consent = c);
            (a = v(a, 7)) && (b.tcfe = a)
        }
    }

    function XI(a, b) {
        const c = a.H;
        WI(a, b);
        Sg(aD, (d, e) => {
            b[d] = c[e]
        });
        cG(c) && (a = qG(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = ft(c), null != a.j && (a = Zn(a.j.value), b.pi = a))
    }

    function YI(a, b) {
        var c = Xh() || Nr(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Nr(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function ZI(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Nr(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Ug(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function $I(a, b) {
        (a = XC()[a.H.google_ad_client]) && (b.psts = a.join())
    }

    function aJ(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function bJ(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = hc(a))
    }

    function cJ(a, b) {
        const c = U(vI(window) ? xr : wr),
            d = U(zr);
        (a = wI(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = hc(JSON.stringify(a)))
    }

    function dJ(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function eJ(a, b) {
        0 <= a.H.google_ad_public_floor && (b.pubf = a.H.google_ad_public_floor);
        0 <= a.H.google_ad_private_floor && (b.pvtf = a.H.google_ad_private_floor)
    }

    function fJ(a, b) {
        const c = Number(a.H.google_traffic_source);
        c && Object.values(Ta).includes(c) && (b.trt = a.H.google_traffic_source)
    }

    function KI(a, b) {
        const c = {};
        XI(a, c);
        jI();
        c.adsid = gI[1];
        jI();
        c.pucrd = gI[6];
        bJ(a, c);
        cJ(a, c);
        VI(a, c, b);
        zi(c);
        c.u_sd = Or(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        tl(889, () => {
            if (null == a.K) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = $E(a.K, a.innerInsElement);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Qr(a.innerInsElement) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        YI(a, c);
        ZI(a, c);
        PI(a, c);
        OI(a, c);
        a.F && (c.oid = a.F);
        $I(a, c);
        c.pvsid = qh(a.pubWin,
            sl);
        aJ(a, c);
        dJ(a, c);
        c.uas = HI(a.pubWin);
        const d = rI(a.pubWin);
        d && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.B && (c.topics = a.B instanceof Uint8Array ? fc(a.B, 3) : a.B);
        SI(a, c, b);
        c.fu = a.j;
        c.bc = cI();
        jI();
        c.jar = gI[4];
        E(a.ia, 9) && RI(c);
        Rl() && (c.atl = !0);
        eJ(a, c);
        fJ(a, c);
        "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (c.td = 1);
        null == O(Er).j(oq.j, oq.defaultValue) || !1 !== a.H.google_video_play_muted && !0 !== U(pq) || 10 !== a.H.google_reactive_ad_format && 11 !== a.H.google_reactive_ad_format || (c.sdkv = O(Er).j(oq.j,
            oq.defaultValue));
        return c
    }
    const LI = /YtLoPri/;
    var gJ = class extends J {
        constructor(a) {
            super(a)
        }
    };
    var hJ = class {
        constructor(a) {
            this.j = a
        }
        qa() {
            return this.j.now()
        }
    };
    const iJ = [255, 255, 255];

    function jJ(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function kJ(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = jJ(b.backgroundColor);
        var c = lJ(b);
        if (c) return c;
        a = (a = a.parentElement) ? kJ(a) : iJ;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function lJ(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var nJ = class {
        constructor() {
            var a = V(mr),
                b = V(Qq);
            this.B = a;
            this.A = b;
            this.l = new mJ;
            this.j = 0
        }
    };
    class mJ {
        constructor() {
            this.j = new Map;
            this.l = 0
        }
        get A() {
            return this.l
        }
    };

    function oJ(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function pJ(a, b, c, d, e, f, g, h) {
        d = {
            wp: h.F,
            c: h.J,
            e: V(Uq),
            m: d,
            q: e,
            v: Math.round(f - g)
        };
        Vi(h.ja, "adfil-clk", d, !0, 1);
        d = new Nk;
        e = x(d, 4, e, "");
        a = w(e, 1, a);
        b = w(a, 2, b);
        c = w(b, 3, c);
        h = h.A;
        b = qJ(h, 4);
        c = md(b, 8, Wk, c);
        return rJ(h, c)
    };
    const sJ = [{
        nc: "5984482117",
        oc: "1907259590",
        ec: 480,
        Ta: 220
    }, {
        nc: "1530485620",
        oc: "2837189651",
        ec: 400,
        Ta: 180
    }, {
        nc: "4440010542",
        oc: "9211025045",
        ec: 360,
        Ta: 160
    }, {
        nc: "1138882718",
        oc: "6584860439",
        ec: -Infinity,
        Ta: 150
    }];

    function tJ(a) {
        return sJ.find(b => b.ec <= a)
    };
    const uJ = new class {
        constructor() {
            this.j = []
        }
    };
    let vJ = !1;

    function wJ(a) {
        return xJ(a.j, 1065, a.win, () => {
            if (!a.l) {
                var b = new Rk;
                b = x(b, 1, a.A, 0);
                var c = new Sk;
                b = md(b, 2, Uk, c);
                yJ(a.j.A, b)
            }
        }, 1E4)
    }
    class zJ {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.A = c;
            this.l = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function AJ(a, b, c, d) {
        const e = tJ(a.document.body.clientWidth),
            f = b.j ? BJ(a, b, d, e) : CJ(a, b, d, e);
        Tm(f.isVisible(), !1, () => {
            vJ = !1;
            for (const k of uJ.j) k();
            uJ.j.length = 0
        });
        f.show({
            Ad: !0
        });
        vJ = !0;
        const g = new zJ(a, b, c),
            h = wJ(g);
        uJ.j.push(() => {
            var k = b.A;
            var l = new Rk;
            l = x(l, 1, c, 0);
            var m = new Tk;
            l = md(l, 3, Uk, m);
            yJ(k, l);
            g.l = !0
        });
        DJ.push(() => {
            f.isVisible().P && f.collapse();
            g.cancel(h)
        })
    }

    function BJ(a, b, c, d) {
        b = EJ(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        return Lx(a, b, {
            ae: .75,
            Hd: .95,
            zIndex: 100001,
            Gc: !0,
            Ec: "adpub-drawer-root"
        })
    }

    function CJ(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                const g = d.Ta * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = EJ(a, b, c, d, f, "600px", "24px", "24px", "start");
        return Yw(a, c, {
            Gd: `${f}px`,
            Dd: FJ(b),
            vd: C(b.B, 14),
            zIndex: 100001,
            Gc: !0,
            Ec: "adpub-drawer-root"
        })
    }

    function EJ(a, b, c, d, e, f, g, h, k) {
        var l = b.B,
            m = !!b.l,
            n = C(l, 10),
            q = n.indexOf("TERM");
        var r = U(Vq) ? U(Vq) ? {
            cd: "pub-adfiliates-rockskipper",
            yc: "ads"
        } : void 0 : m ? {
            cd: "vert-pla-adfiliates-e4-srp",
            yc: "plas"
        } : {
            cd: "vert-pla-adfiliates-srp",
            yc: "plas"
        };
        var z = r;
        r = V(Mq);
        e = Math.max(Math.floor((e - Math.floor(e / d.Ta) * d.Ta) / 2), 5);
        var F = b.I ? "on" : "",
            D = C(l, 3),
            B = `${V(Uq)}`,
            H = C(l, 7),
            K = C(l, 6),
            I = b.F,
            G = n.substring(0, q);
        n = n.substring(q + 4);
        d = U(Vq) ? d.oc : d.nc;
        m = !m;
        q = z.cd;
        z = z.yc;
        var la = !!E(l, 13);
        c = Mv('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Qv(W(g)) + " " + Qv(W(h)) + "; text-align: " + Qv(W(k)) + ';">' + (m ? '<div style="max-width: ' + Qv(W(f)) + '">' + Lv(D) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Lv(K) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Qv(W(g)) + "; text-align: " + Qv(W(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            Lv(G) + "</span>" + Lv(c) + '<span style="color:#80868b">' + Lv(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Qv(W(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + Uv(Vv(q)) + ", 'styleId': " + Uv(Vv(d)) + ", 'disableCarousel': true, 'query': " + Uv(Vv(c)) + ", 'hl': " + Uv(Vv(H)) + ", 'personalizedAds': 'false', 'fexp': " + Uv(Vv(B)) + ", 'adfiliateWp': " + Uv(Vv(I)) + ", 'adtest': " +
            Uv(Vv(F)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + Uv(Vv(r)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + Uv(Vv(z)) + ", pageOptions, adBlock);\x3c/script>" + (la ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        l = Pe("body", {
            dir: FJ(b) ? "rtl" : "ltr",
            lang: C(l, 7),
            style: ye({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, Hv(c));
        c = a.document.createElement("IFRAME");
        M(c, {
            border: "0",
            width: "100%"
        });
        GJ(a, b, c);
        c.srcdoc = Le(l);
        return c
    }

    function GJ(a, b, c) {
        U(jr) ? HJ(a, b, c) : c.onload = () => {
            const d = c.contentDocument.body,
                e = new ResizeObserver(() => {
                    IJ(b, a, () => {
                        c.height = `${d.parentElement.offsetHeight}px`
                    })
                });
            e.observe(d);
            DJ.push(() => {
                e.disconnect()
            })
        }
    }

    function HJ(a, b, c) {
        function d(g) {
            const h = new ResizeObserver(() => {
                IJ(b, a, () => {
                    c.height = `${g.parentElement.offsetHeight}px`
                })
            });
            h.observe(g);
            DJ.push(() => {
                h.disconnect()
            })
        }

        function e() {
            if (!f) {
                const g = c.contentDocument ? .body || c.contentWindow ? .document ? .body;
                g && (f = !0, d(g))
            }
            return f
        }
        let f = !1;
        c.onload = () => void e();
        b.Ca(1066, fD(a, () => e(), 100))
    }
    const DJ = [];

    function JJ(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function KJ(a) {
        a = jJ(a);
        var b = new yk;
        b = x(b, 1, a[0], 0);
        b = x(b, 2, a[1], 0);
        b = x(b, 3, a[2], 0);
        return x(b, 4, a[3], 0)
    };
    class LJ {
        constructor(a, b) {
            this.A = a;
            this.j = !1;
            this.B = b;
            this.l = this.B.ga(264, c => {
                this.j && (MJ || (c = Date.now()), this.A(c), MJ ? NJ.call(t, this.l) : t.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, MJ ? NJ.call(t, this.l) : this.l(0))
        }
    }
    var NJ = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        MJ = !!NJ && !/'iPhone'/.test(t.navigator.userAgent);

    function OJ(a) {
        return a * a * a
    }

    function PJ(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class QJ {
        constructor(a, b, c) {
            this.l = a;
            this.F = b;
            this.J = 100;
            this.progress = 0;
            this.j = null;
            this.I = !1;
            this.A = [];
            this.B = null;
            this.C = new LJ(La(this.L, this), c)
        }
        L(a) {
            if (this.I) this.C.j = !1;
            else {
                null === this.j && (this.j = a);
                this.progress = (a - this.j) / this.J;
                1 <= this.progress && (this.progress = 1);
                a = this.B ? this.B(this.progress) : this.progress;
                this.A = [];
                for (let b = 0; b < this.l.length; b++) this.A.push((this.F[b] - this.l[b]) * a + this.l[b]);
                this.D();
                1 == this.progress && (this.C.j = !1, this.G())
            }
        }
        G() {}
        D() {}
        play() {
            this.I = !1;
            this.C.start()
        }
        reset(a,
            b, c) {
            this.j = null;
            this.l = a;
            this.F = b;
            this.J = c;
            this.progress = 0
        }
    };
    var RJ = class {
        constructor(a, b, c, d, e, f) {
            this.L = a;
            this.M = b;
            this.D = c;
            this.I = d;
            this.J = e;
            this.F = f
        }
        get j() {
            return this.L
        }
        get B() {
            return this.M
        }
        get A() {
            return this.D
        }
        get G() {
            return this.I
        }
        get l() {
            return this.J
        }
        get C() {
            return this.F
        }
    };

    function SJ(a, b) {
        const c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        oJ(c);
        M(c, b);
        c.className = "google-material-icons";
        return c
    };

    function TJ(a, b, c) {
        return vy({
            K: a,
            Oc: 3E3,
            dc: a.innerWidth > fm ? 650 : 0,
            ja: c,
            rd: b
        })
    }
    let UJ = "",
        VJ = null,
        WJ = "",
        XJ = null;

    function YJ(a, b, c, d, e) {
        if (UJ !== d || VJ !== c || WJ !== e) {
            if (null !== XJ) {
                var f = XJ,
                    g = b.A,
                    h = new nk;
                f = x(h, 1, f, 0);
                h = qJ(g, 8);
                f = md(h, 7, Wk, f);
                rJ(g, f)
            }
            UJ = d;
            VJ = c;
            WJ = e;
            (c = ZJ(a)) ? XJ = $J(c, b): uy(a) ? XJ = null : (c = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/), M(a.document.body, {
                "padding-bottom": (c && c.length ? Number(c[0]) + 45 : 45) + "px"
            }), aK(a), c = document.createElement("div"), c.id = "google-anno-sa", c.dir = FJ(b) ? "rtl" : "ltr", M(c, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": V(Nq).toString()
            }), c.appendChild(bK(a, b)), c.appendChild(cK(a, b)), c.appendChild(dK(a, b)), b = $J(c, b), a.document.body.appendChild(c), XJ = b)
        }
    }

    function $J(a, b) {
        var c = C(b.B, 11);
        a = a.getElementsByClassName("google-anno-sa-qtx")[0];
        a instanceof HTMLElement && (a.innerText = c.replace("TERM", UJ));
        b = b.A;
        c = new ok;
        c = w(c, 1, VJ);
        c = x(c, 4, UJ, "");
        a = qJ(b, 7);
        c = md(a, 6, Wk, c);
        return rJ(b, c)
    }

    function ZJ(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function cK(a, b) {
        const c = document.createElement("SPAN");
        oJ(c);
        M(c, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var d = FJ(b);
        b.j || M(c, {
            "justify-content": ""
        });
        c.appendChild(SJ(a, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": d ? "8px" : "",
            "margin-right": d ?
                "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        d = document.createElement("SPAN");
        d.className = "google-anno-sa-qtx";
        M(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        const e = b.qa(2);
        eK(b, 999, c, f => fK(a, b, f, e));
        c.appendChild(d);
        return c
    }

    function bK(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        const d = gK(a, b);
        c.appendChild(d);
        eK(b, 1064, c, e => {
            const f = FJ(b),
                g = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
            hK(b, ZJ(a), 0, g, OJ).play();
            const h = iK(b);
            h.appendChild(SJ(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            eK(b, 1064, h, k => {
                const l =
                    (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
                hK(b, ZJ(a), l, 0, PJ).play();
                a.document.body.removeChild(h);
                k.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function gK(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = FJ(b);
        b = b.j ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function dK(a, b) {
        const c = document.createElement("DIV");
        c.id = "google-anno-ea";
        b.j || M(c, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const d = jK(a, b);
        c.appendChild(d);
        const e = b.qa(2);
        eK(b, 999, c, f => fK(a, b, f, e));
        return c
    }

    function jK(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = FJ(b);
        d = b.j ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.j ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : FJ(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function iK(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = FJ(a);
        a = a.j ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": V(Nq).toString()
        });
        return b
    }

    function aK(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function fK(a, b, c, d) {
        d = pJ(VJ, null, XJ, WJ, UJ, b.qa(4), d, b);
        AJ(a, b, d, UJ);
        c.preventDefault();
        return !1
    }

    function kK(a) {
        try {
            return null !== a.location ? .href ? .match(/goog_fsa=1/)
        } catch (b) {
            return !1
        }
    };

    function lK(a) {
        if (a.j >= a.A.length) {
            if (!U(rr)) {
                a.l = !0;
                return
            }
            a.j = 0
        }
        if (vJ) uJ.j.push(() => void lK(a));
        else {
            var b = a.A[a.j++];
            a.l = !1;
            YJ(a.win, a.B, null, b.j, b.l);
            xJ(a.B, 898, a.win, () => void lK(a), a.C)
        }
    }

    function mK(a, b, c) {
        a.A.push(new nK(b, c));
        a.l && lK(a)
    }
    var oK = class {
        constructor(a, b, c) {
            this.C = a;
            this.win = b;
            this.B = c;
            this.A = [];
            this.l = !0;
            this.j = 0
        }
    };
    class nK {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    const pK = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function qK(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || pK.test(a)
        }
    }

    function rK(a, b, c, d) {
        return qK(a.charAt(b - 1), d) && qK(a.charAt(c + 1), d)
    };

    function sK(a, b, c, d) {
        if (!rK(a, b.l, b.A, c)) return null;
        c = a.substring(b.l, b.A + 1);
        a = JJ(a, b.l, b.A + 1);
        b = b.j;
        b = Ek(Dk(Ck(Bk(zk(1), c), a), b), null);
        tK(d, b);
        return c
    };
    var wK = class {
        constructor(a, b) {
            this.l = a;
            this.j = new uK(b);
            for (var c of this.l) {
                var d = C(c, 1);
                for (var e of A(c, fF, 2)) {
                    a = this.j;
                    b = C(e, 1);
                    var f = d,
                        g = a.B.has(f) ? a.B.get(f) : a.D++;
                    a.B.set(f, g);
                    a.l.set(g, f);
                    f = 0;
                    for (let h = 0; h < b.length; h++) {
                        const k = b.charCodeAt(h);
                        a.j[f].contains(k) || (a.j.push(new vK), a.j[a.size].D = f, a.j[a.size].G = k, a.j[f].A.set(k, a.size), a.size++);
                        f = a.j[f].A.get(k)
                    }
                    a.j[f].C = !0;
                    a.j[f].B = g;
                    a.j[f].F = a.A.length;
                    a.A.push(b.length)
                }
            }
            c = this.j;
            e = [];
            for (e.push(0); 0 < e.length;) {
                d = e.shift();
                a = c;
                b = d;
                g = a.j[b];
                if (0 === b) g.j = 0, g.l = 0;
                else if (0 === g.D) g.j = 0, g.l = g.C ? b : a.j[a.j[b].j].l;
                else {
                    g = a.j[a.j[b].D].j;
                    for (f = a.j[b].G;;) {
                        if (a.j[g].contains(f)) {
                            a.j[b].j = a.j[g].A.get(f);
                            break
                        }
                        if (0 === g) {
                            a.j[b].j = 0;
                            break
                        }
                        g = a.j[g].j
                    }
                    a.j[b].l = a.j[b].C ? b : a.j[a.j[b].j].l
                }
                for (const h of c.j[d].childNodes) e.push(h)
            }
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class uK {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.j = [new vK];
            this.A = [];
            this.B = new Map;
            this.l = new Map;
            this.D = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (;;) {
                    var d = a.charCodeAt(g),
                        e = this.j[b],
                        f = String.fromCharCode(d);
                    f = f.toLowerCase() === f ? f.toUpperCase().charCodeAt(0) : f.toLowerCase().charCodeAt(0);
                    if (e.contains(d)) {
                        b = e.A.get(d);
                        break
                    }
                    if (U(Tq) && e.contains(f)) {
                        b = e.A.get(f);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = g + 1 - this.A[this.j[d].F];
                    f = g;
                    U(tr) ? rK(a, e, f,
                        this.C) && c.push(new xK(e, f, this.l.get(this.j[d].B))) : c.push(new xK(e, f, this.l.get(this.j[d].B)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class vK {
        constructor() {
            this.A = new Map;
            this.L = !1;
            this.V = this.J = this.I = this.T = this.M = this.O = -1
        }
        contains(a) {
            return this.A.has(a)
        }
        set D(a) {
            this.O = a
        }
        get D() {
            return this.O
        }
        set G(a) {
            this.M = a
        }
        get G() {
            return this.M
        }
        set C(a) {
            this.L = a
        }
        get C() {
            return this.L
        }
        set B(a) {
            this.J = a
        }
        get B() {
            return this.J
        }
        set j(a) {
            this.T = a
        }
        get j() {
            return this.T
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set F(a) {
            this.V = a
        }
        get F() {
            return this.V
        }
        get childNodes() {
            return this.A.values()
        }
    }
    var xK = class {
            constructor(a, b, c) {
                this.C = a;
                this.B = b;
                this.D = c
            }
            get l() {
                return this.C
            }
            get A() {
                return this.B
            }
            get j() {
                return this.D
            }
            get length() {
                return this.B - this.C
            }
        },
        yK = class {
            constructor(a) {
                this.j = a;
                this.matches = []
            }
        };
    const zK = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function AK(a, b, c, d, e, f, g) {
        if (c.qa(5) >= c.G) return !1;
        for (let ae = 0; ae < b.childNodes.length; ae++) {
            const oc = b.childNodes[ae];
            if (oc.nodeType === Node.TEXT_NODE && "" !== oc.textContent) {
                a: {
                    var h = a,
                        k = c,
                        l = b,
                        m = oc.textContent,
                        n = d,
                        q = e,
                        r = f,
                        z = g;
                    const pc = [];b: {
                        var F = m;
                        switch (k.D) {
                            case 1:
                                var D = F;
                                const Pa = Array(D.length);
                                let sa = 0;
                                for (let za = 0; za < D.length; za++) pK.test(D[za]) || sa++, Pa[za] = sa;
                                var B = Pa;
                                break b;
                            default:
                                var H = F;
                                const Ga = Array(H.length);
                                let Qa = 0,
                                    ea = 0;
                                for (; ea < H.length;) {
                                    for (;
                                        /\s/.test(H[ea]);) Ga[ea] = Qa, ea++;
                                    let za = !1;
                                    for (; ea < H.length && !/\s/.test(H[ea]);) za = !0, Ga[ea] = Qa, ea++;
                                    za && (Qa++, Ga[ea - 1] = Qa)
                                }
                                B = Ga
                        }
                    }
                    const Zb = B;
                    if (m.includes("\u00bb")) var K = [];
                    else {
                        const Pa = q.match(m),
                            sa = new Map;
                        for (const Ga of Pa) {
                            const Qa = Ga.l;
                            if (sa.has(Qa)) {
                                const ea = sa.get(Qa);
                                Ga.length > ea.length && sa.set(Qa, Ga)
                            } else sa.set(Qa, Ga)
                        }
                        K = Array.from(sa.values())
                    }
                    const El = K,
                        qf = !!k.l;
                    let rf = -1;
                    for (const Pa of El) {
                        const sa = Pa.l,
                            Ga = Pa.A;
                        var I;
                        if (!(I = !rK(m, sa, Ga, k.D))) {
                            var G = r,
                                la = Pa.j,
                                Ha = G.l;
                            const Z = G.j + Zb[sa] - V(Sq);
                            for (const Q of Ha.j.keys()) {
                                const $a =
                                    Ha.j.get(Q);
                                let ib = 0;
                                for (; ib < $a.length && $a[ib] < Z;) ib++;
                                Ha.l -= ib;
                                0 < ib && Ha.j.set(Q, $a.slice(ib))
                            }
                            var ta = G,
                                wa = ta.l,
                                ia = la;
                            I = !((wa.j.has(ia) ? wa.j.get(ia).length : 0) < ta.B && G.l.A < G.A)
                        }
                        if (I) continue;
                        var ja;
                        if (ja = !qf) {
                            const Z = h.getComputedStyle(l),
                                Q = Z.fontSize.match(/\d+/);
                            ja = !(Q && 12 <= Number(Q[0]) && 22 >= Number(Q[0]) && Ab(zK, Z.display))
                        }
                        if (ja) {
                            r.j += Zb[Zb.length - 1];
                            var Ka = [];
                            break a
                        }
                        qf && U(ir) && !(0 < n.j) && YJ(h, k, null, Pa.j, m.substring(sa, Ga + 1));
                        const Qa = rf + 1;
                        Qa < sa && pc.push(h.document.createTextNode(m.substring(Qa,
                            sa)));
                        const ea = m.substring(sa, Ga + 1),
                            za = JJ(m, sa, Ga + 1);
                        if (qf) {
                            var X = ea,
                                mc = za,
                                sf = Pa.j,
                                Hh = Zb[sa];
                            var tf = Ek(Dk(Ck(Bk(zk(1), X), mc), sf), Hh)
                        } else {
                            var Ih = h,
                                be = l,
                                Jh = ea,
                                Kh = za,
                                ce = Pa.j,
                                Lh = Zb[sa];
                            const Z = be.getBoundingClientRect();
                            var de = Ek(Dk(Ck(Bk(zk(2), Jh), Kh), ce), Lh);
                            var wb = x(de, 6, Z.x, 0);
                            var Mh = x(wb, 7, Z.y, 0);
                            const Q = Ih.getComputedStyle(be);
                            var uf = new Gk;
                            var Nh = x(uf, 1, Q.fontFamily, "");
                            var Fl = KJ(Q.color);
                            var Gl = ld(Nh, 7, Fl);
                            var Oh = KJ(Q.backgroundColor);
                            var vf = ld(Gl, 8, Oh);
                            const $a = Q.fontSize.match(/^(\d+)px$/);
                            var ee = x(vf, 4, $a ? Number($a[1]) : 0, 0);
                            const ib = Number(Q.fontWeight);
                            isNaN(ib) || 400 === ib || x(ee, 5, ib, 0);
                            "none" !== Q.textDecorationLine && x(ee, 6, Q.textDecorationLine, "");
                            var Ph = ld(Mh, 8, ee);
                            const Wt = [];
                            let wf = be;
                            for (; wf;) {
                                var Qh = Wt,
                                    Hl = Qh.push,
                                    xf = wf,
                                    Il = new Ik;
                                const Xt = x(Il, 1, xf.tagName, "");
                                "" !== xf.className && gd(Xt, 2, xf.className.split(" "));
                                Hl.call(Qh, Xt);
                                if ("BODY" === wf.tagName) break;
                                wf = wf.parentElement
                            }
                            var Rh = Wt.reverse();
                            tf = nd(Ph, 9, Rh)
                        }
                        const oa = tK(n, tf);
                        var Sh = pc,
                            Jl = Sh.push,
                            Th = h,
                            yf = k,
                            Uh = oa,
                            Vh = Pa.j,
                            Wh = ea;
                        var Kl = yf.l ? BK(Th, yf, Uh, Vh, Wh, z) : CK(Th, yf, Uh, Vh, Wh);
                        Jl.call(Sh, Kl);
                        var fe = r.l,
                            zf = Pa.j,
                            Ll = r.j + Zb[sa];
                        let fa = [];
                        fe.j.has(zf) && (fa = fe.j.get(zf));
                        fa.push(Ll);
                        fe.l++;
                        fe.j.set(zf, fa);
                        rf = Ga
                    }
                    const Af = rf + 1;0 !== Af && Af < m.length && pc.push(h.document.createTextNode(m.substring(Af)));r.j += Zb[Zb.length - 1];Ka = pc
                }
                const qd = Ka;
                if (0 < qd.length && !U(lr)) {
                    for (const pc of qd) b.insertBefore(pc, oc), DK(pc);
                    b.removeChild(oc);
                    ae += qd.length - 1
                }
            }
            else if (EK(oc, c) && !AK(a, oc, c, d, e, f, g)) return !1
        }
        return !0
    }

    function DK(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = lJ(jJ(getComputedStyle(a.parentElement).color)),
                    c = lJ(jJ(getComputedStyle(a).color));
                var d = kJ(a);
                if (d = b && c && d ? ME(c, d) < Math.min(ME(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) DK(a.children[b])
        }
    }

    function EK(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE || a.classList ? .contains("google-anno-skip")) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.l;
            default:
                return !!b.l ||
                    !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }

    function BK(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        g.appendChild(a.document.createTextNode(e));
        FK(b, 898, h => {
            h.forEach(k => {
                k.isIntersecting && k.target.textContent && (U(pr) ? mK(f, d, e) : YJ(a, b, c, d, e))
            })
        }).observe(g);
        return g
    }
    class GK {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function CK(a, b, c, d, e) {
        const f = a.document.createElement("SPAN");
        HK(f);
        f.appendChild(a.document.createTextNode(e));
        const g = a.document.createElement("A");
        oJ(g);
        M(g, {
            "text-decoration": "none"
        });
        $e(g);
        g.className = "google-anno";
        g.appendChild(SJ(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        g.appendChild(a.document.createTextNode("\u00a0"));
        g.appendChild(f);
        const h = IK(b,
                c, g),
            k = b.qa(2);
        eK(b, 999, g, l => {
            try {
                const m = pJ(c, h.l, null, e, d, b.qa(4), k, b);
                AJ(a, b, m, d);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return g
    }

    function IK(a, b, c) {
        const d = new GK;
        FK(a, 1065, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.A;
                    var g = new Qk;
                    f = x(g, 1, f, 0);
                    g = qJ(e, 5);
                    f = md(g, 4, Wk, f);
                    e = rJ(e, f);
                    d.j = e
                } else if (e = d, e.j) {
                f = a.A;
                g = new Pk;
                g = x(g, 1, e.j, 0);
                var h = qJ(f, 6);
                g = md(h, 5, Wk, g);
                rJ(f, g);
                e.j = null
            }
        }).observe(c);
        return d
    }

    function HK(a) {
        oJ(a);
        M(a, {
            "text-decoration": "underline"
        });
        M(a, {
            "text-decoration-style": "dotted"
        });
        M(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };

    function tK(a, b) {
        a.j++;
        a.C.add(C(b, 4));
        a.entries.push(Wc(b));
        return a.entries.length - 1
    }

    function JK(a, b, c, d) {
        const e = new uk;
        switch (a) {
            case "se":
                return b = new tk, md(e, 1, vk, b);
            case "sw":
                return b = new tk, md(e, 2, vk, b);
            case "si":
                return b = new tk, md(e, 3, vk, b);
            case "sl":
                return b = new tk, md(e, 5, vk, b);
            case "l":
                return b = new tk, md(e, 6, vk, b)
        }
        if (c && b) {
            if (b.l) return a = new sk, b = x(a, 1, b.l, 0), md(e, 7, vk, b);
            if (c.l && b.A && (!d || !b.B)) return b = new tk, md(e, 8, vk, b)
        }
        return null
    }
    var KK = class {
        constructor() {
            this.j = 0;
            this.entries = [];
            this.C = new Set;
            this.l = 0;
            this.A = this.B = null
        }
        sendGen204(a, b, c, d, e, f, g, h, k) {
            var l = V(Uq);
            a = a.location ? .hostname || "";
            var m = Array.from(this.A ? ? []).sort().join(","),
                n = this.B || "";
            let q = 0;
            for (const r of A(d, hF, 2)) q += A(r, fF, 2).length;
            b = {
                wp: b,
                c,
                e: l,
                h: a,
                ld: m,
                lx: n,
                m: q,
                n: this.j,
                o: f,
                p: A(d, hF, 2).length,
                t: this.C.size,
                w: this.l,
                x: Math.round(e)
            };
            Vi(k, "adfil-imp", { ...b,
                ...(g ? {
                    sap: Number(g.j),
                    tap: Number(g.B),
                    bap: Number(g.A),
                    nsr: g.l,
                    im: Number(g.C),
                    mo: Number(g.G),
                    hesa: Number(h.j)
                } : {})
            }, !0, 1)
        }
    };
    var LK = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.A = c
        }
        get window() {
            return this.win
        }
        get j() {
            return this.l
        }
        get F() {
            return this.A
        }
    };
    var MK = class {
        constructor(a, b) {
            this.A = a;
            this.j = b
        }
        get l() {
            return this.A
        }
    };

    function yJ(a, b) {
        var c = qJ(a, 9);
        b = md(c, 9, Wk, b);
        rJ(a, b)
    }

    function rJ(a, b) {
        for (const c of a.j) c(b);
        return sd(b, 1)
    }

    function qJ(a, b) {
        var c = new Vk;
        var d = a.C++;
        c = x(c, 1, d, 0);
        b = x(c, 2, Math.round(a.l.qa(b) - a.A), 0);
        return ld(b, 10, a.B)
    }
    var NK = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.B = c;
            this.C = 1;
            this.j = [...d]
        }
    };

    function OK(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function PK(a) {
        return new Set(a.map(OK).filter(b => b.length))
    };
    var QK = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.B = c
        }
        get l() {
            return this.A
        }
        get C() {
            return this.B
        }
    };
    class RK extends QJ {
        constructor(a, b, c, d, e) {
            super([b], [c], d);
            this.M = a;
            this.B = e || null
        }
        D() {
            const a = {};
            a.left = this.A[0] + "px";
            fi(this.M, a)
        }
        G() {}
    };

    function xJ(a, b, c, d, e) {
        return c.setTimeout(a.C.ga(b, d, void 0, SK), e)
    }

    function FJ(a) {
        return 2 === ed(a.B, 12)
    }

    function IJ(a, b, c) {
        b.requestAnimationFrame(a.C.ga(1066, c, void 0, SK))
    }

    function eK(a, b, c, d) {
        c.addEventListener("click", a.C.ga(b, d, void 0, SK))
    }

    function hK(a, b, c, d, e) {
        return new RK(b, c, d, a.C, e)
    }

    function FK(a, b, c) {
        return new IntersectionObserver(a.C.ga(b, c, void 0, SK), {
            threshold: .98
        })
    }
    var UK = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m = !1) {
            this.F = a;
            this.j = b;
            this.B = c;
            this.J = d;
            this.G = e;
            this.l = f;
            this.C = g;
            this.A = h;
            this.ja = k;
            this.L = l;
            this.I = m;
            this.D = Ab(TK, C(c, 7)) ? 1 : 0
        }
        Ca(a, b) {
            this.C.Ca(a, b, SK)
        }
        qa(a) {
            return this.L.qa(a)
        }
    };
    const TK = ["ja", "zh_CN", "zh_TW"];

    function SK(a) {
        a.e = `${V(Uq)}`
    };

    function VK(a, b, c, d, e, f) {
        var g = sl,
            h = Ui;
        try {
            Jb(a.document)
        } catch (k) {
            return
        }
        f = U(Xq) ? (f = yF(new CF(a), "__gads", f)) ? (f = Ug(f + "t2Z7mVic")) ? f % 20 : null : null : null;
        f || (f = Wg() ? null : Math.floor(20 * Rg()));
        null != f && WK(a, b, c, new MK(!1, f), g, d, h, e)
    }

    function XK(a, b, c, d, e, f, g, h) {
        U(Jq) && b && !b.j && (a = zy(a)) && sh(a, () => {
            WK(c.window, c.j, c.F, new MK(!0, d.j), e, f, g, h)
        })
    }

    function WK(a, b, c, d, e, f, g, h) {
        const k = b.j;
        if (k) {
            var l = h.qa(1),
                m = l + V(Rq);
            !U(lr) && !U(Wq) && 0 < A(k, hF, 2).length && YK(a.document);
            var n = 488 > P(a).clientWidth;
            if (U(Jq) || kK(a)) {
                var q = A(b.j, hF, 2).length;
                var r = new QK(b.B, b.A, q)
            } else r = null;
            var z = new LK(a, b, c);
            if (U(Jq) || kK(a)) {
                var F = r;
                if (kK(a)) var D = new RJ(!0, !1, !1, d.l, 0, n);
                else {
                    var B = vy({
                        K: a,
                        Oc: 3E3,
                        dc: V(Pq),
                        ja: g,
                        Qe: !0
                    });
                    var H = TJ(a, 2, g),
                        K = TJ(a, 1, g);
                    D = new RJ(0 < B || !F.j || 0 === F.C ? !1 : !F.l || 0 < K || n && 0 === H, 0 === H, 0 === K, d.l, B, n)
                }
            } else D = null;
            var I = D,
                G = new Ok,
                la = V(Uq);
            var Ha =
                x(G, 1, la, 0);
            var ta = x(Ha, 2, d.j, 0);
            var wa = new NK(h, l, ta, f);
            XK(a, I, z, d, e, f, g, h);
            var ia = new KK; {
                var ja = new UK(c, n, k, d.j, m, I, e, wa, g, h, b.l);
                const ea = a.document.body;
                if (ea && ZK(ea)) {
                    var Ka = ea.textContent || "";
                    b: switch (ja.D) {
                        case 1:
                            let za = 0;
                            for (let fa = Ka.length - 1; 0 <= fa; fa--) pK.test(Ka[fa]) || za++;
                            var X = za;
                            break b;
                        default:
                            const oa = Ka.trim();
                            X = "" === oa ? 0 : oa.split(/\s+/).length
                    }
                    ia.l = X;
                    var mc = OK(C(ja.B, 7)); {
                        const za = a.document.documentElement,
                            oa = OK(za.lang) || OK(za.getAttribute("xml:lang"));
                        if ("" !== oa) var sf = new Set([oa]);
                        else {
                            var Hh = a.location;
                            const fa = Hh.host.match(/^[a-z]{2}\./i),
                                Z = fa ? [fa[0]] : [];
                            for (const Q of Hh.pathname.split("/")) 2 === Q.length && Z.push(Q);
                            var tf = PK(Z);
                            if (tf.size) var Ih = tf;
                            else {
                                const Q = a.navigator;
                                Ih = PK(Q.languages ? .length ? Q.languages : [Q.language])
                            }
                            sf = Ih
                        }
                    }
                    ia.B = mc;
                    ia.A = new Set(sf);
                    if (X < V(Zq)) var be = "sw";
                    else {
                        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var Jh = "si";
                        else {
                            if (sf.has(mc)) {
                                if (ja.qa(5) >= ja.G) var Kh = "l";
                                else {
                                    {
                                        const za = ja.B;
                                        if (0 === A(za, hF, 2).length ||
                                            ja.l && !ja.l.j) var ce = !0;
                                        else {
                                            if (!ja.l) {
                                                var Lh = a.document;
                                                const oa = Lh.createElement("style");
                                                oa.textContent = Ie(bi `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`);
                                                Lh.head.appendChild(oa)
                                            }
                                            var de = new wK(A(za, hF, 2), ja.D);
                                            c: {
                                                var wb = de.j;
                                                let oa = 0;
                                                for (let fa = 0; fa < Ka.length; fa++) {
                                                    for (;;) {
                                                        const Q = Ka.charCodeAt(fa);
                                                        if (wb.j[oa].contains(Q)) {
                                                            oa = wb.j[oa].A.get(Q);
                                                            break
                                                        }
                                                        if (0 === oa) break;
                                                        oa = wb.j[oa].j
                                                    }
                                                    let Z = oa;
                                                    for (;;) {
                                                        Z = wb.j[Z].l;
                                                        if (0 === Z) break;
                                                        const Q = fa + 1 - wb.A[wb.j[Z].F],
                                                            $a = fa;
                                                        if (U(tr) && !rK(Ka, Q, $a, wb.C)) Z = wb.j[Z].j;
                                                        else {
                                                            var Mh = new xK(Q, $a, wb.l.get(wb.j[Z].B));
                                                            break c
                                                        }
                                                    }
                                                }
                                                Mh = void 0
                                            }
                                            if (Mh) {
                                                var uf = U(pr) ? new oK(V(sr), a, ja) : null;
                                                if (ja.l && U(ir) && U(pr)) {
                                                    var Nh = ja.D;
                                                    if (U(qr)) {
                                                        const oa = de.match(Ka),
                                                            fa = new Map;
                                                        for (const Z of oa) {
                                                            const Q = Z.j;
                                                            if (fa.has(Q)) fa.get(Q).matches.push(Z);
                                                            else {
                                                                const $a = new yK(Q);
                                                                $a.matches.push(Z);
                                                                fa.set(Q, $a)
                                                            }
                                                        }
                                                        var Fl = Array.from(fa.values());
                                                        for (const Z of Fl) {
                                                            let Q = null;
                                                            for (const $a of Z.matches) {
                                                                const ib = sK(Ka, $a, Nh, ia);
                                                                null != ib && (Q = ib)
                                                            }
                                                            null != Q && mK(uf,
                                                                Z.j, Q)
                                                        }
                                                    } else {
                                                        const oa = de.match(Ka);
                                                        for (const fa of oa) {
                                                            const Z = sK(Ka, fa, Nh, ia);
                                                            null != Z && mK(uf, fa.j, Z)
                                                        }
                                                    }
                                                    ce = !0
                                                } else {
                                                    var Gl = new nJ;
                                                    ce = AK(a, a.document.body, ja, ia, de, Gl, uf)
                                                }
                                            } else ce = !0
                                        }
                                    }
                                    Kh = ce ? "a" : "p"
                                }
                                var Oh = Kh
                            } else Oh = "sl";
                            Jh = Oh
                        }
                        be = Jh
                    }
                    var vf = be
                } else vf = "se"
            }
            var ee = h.qa(3) - l;
            if (!U(lr) && 0 < ia.j) {
                if (!E(k, 13)) {
                    var Ph = a.document;
                    const ea = Ph.createElement("LINK");
                    ef(ea, N `https://www.google.com/adsense/search/ads.js`, "prefetch");
                    ea.as = "script";
                    ea.fetchPriority = "low";
                    Ph.head.appendChild(ea)
                }
                U(Wq) && YK(a.document)
            }
            ia.sendGen204(a,
                c, d.j, k, ee, vf, I, r, g);
            var Qh = b.C,
                Hl = a.location.hostname,
                xf = b.D,
                Il = r,
                Rh = vf,
                Sh = new Lk,
                Jl = new pk;
            var Th = x(Jl, 1, Qh, "");
            var yf = x(Th, 2, Hl, "");
            var Uh = ud(yf, 3, n);
            var Vh = w(Uh, 4, ia.l);
            var Wh = ld(Sh, 1, Vh);
            var Kl = new rk,
                fe = Array.from(ia.A ? ? []).sort();
            var zf = gd(Kl, 1, fe);
            var Ll = x(zf, 2, ia.B, "");
            var ae = x(Ll, 3, xf, "");
            var oc = ld(Wh, 2, ae);
            var qd = x(oc, 3, Math.round(ee), 0);
            const Qa = JK(Rh, I, Il, n);
            if (Qa) {
                var pc = new xk;
                var Zb = od(pc, 1, uk, Qa);
                md(qd, 5, Mk, Zb)
            } else {
                var El = new Kk;
                var qf = ud(El, 1, "p" === Rh);
                var rf = nd(qf, 2, ia.entries);
                var Af = A(k, hF, 2).length;
                var Pa = x(rf, 3, Af, 0);
                md(qd, 4, Mk, Pa)
            }
            var sa = qJ(wa, 3);
            var Ga = md(sa, 3, Wk, qd);
            rJ(wa, Ga)
        }
    }

    function ZK(a) {
        try {
            Jb(new ResizeObserver(() => {})), Jb(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    }

    function YK(a) {
        const b = a.createElement("LINK"),
            c = U(Kq) ? N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode` : N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
        ef(b, c, "stylesheet");
        a.head.appendChild(b)
    };

    function $K(a, b, c, d, e) {
        if (!UC(PC(), 29, !1)) {
            VC(PC(), 29, !0);
            var f = a.performance;
            if (f ? .now) {
                var g = [];
                U(nr) && g.push(h => {
                    var k = b.ja;
                    var l = iD(b);
                    l = w(l, 3, 1);
                    h = md(l, 6, Yk, h);
                    $k(k, h)
                });
                VK(a, c, d, g, new hJ(f), e)
            }
        }
    };
    var aL = class {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.A = d;
            this.D = e;
            this.l = f
        }
    };

    function bL(a) {
        sl.ke(b => {
            b.shv = String(a);
            b.mjsv = "m202210130101";
            b.eid = xF(t)
        })
    }

    function cL(a) {
        bL(C(a, 2));
        a = E(a, 6);
        Ed(oF, nj);
        oF = a
    };

    function dL({
        Te: a,
        Wf: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var eL = "undefined" === typeof sttc ? void 0 : sttc;

    function fL(a) {
        var b = sl;
        try {
            return Ed(a, mj), new jF(JSON.parse(a))
        } catch (c) {
            b.pa(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new jF
    };

    function gL(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = tg(a.j.U() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = hL(a, b, c, a.j.j.elementsFromPoint(dg(c.left + c.width / 2, c.left, c.right - 1), dg(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = hL(a, b, c, a.j.j.elementsFromPoint(dg(c.left + c.width / 2, c.left, c.right - 1), dg(c.top + 2, c.top, c.bottom - 1)), 2, e.Ka),
            g = hL(a, b, c, a.j.j.elementsFromPoint(dg(c.left + 2, c.left, c.right - 1), dg(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Ka, ...f.Ka]);
        const h = hL(a, b, c, a.j.j.elementsFromPoint(dg(c.right - 1 - 2, c.left, c.right - 1), dg(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ka, ...f.Ka, ...g.Ka]);
        var k = iL(a, b, c),
            l = n => Ab(a.A, n.overlapType) && Ab(a.B, n.overlapDepth) && Ab(a.l, n.overlapDetectionPoint);
        e = vb([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = vb(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = ug(a.j.j);
        const m = new zh(c.left, c.top, c.width, c.height);
        e = [...xb(e, n => new zh(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Hb(xb(l, n => Bh(m, n.elementRect))), ...vb(Bh(m, new zh(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? jL(m, e) : kL(c, e)
        }
    }

    function lL(a, b) {
        const c = a.j.U(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new ij,
                                        m = hj(l, () => gL(a, k));
                                    m && (l.j.length && (m.executionTime = Math.round(Number(l.j[0].duration))), h.disconnect(), e(m))
                                }, mL);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function hL(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ka: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (Ab(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(nL(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(nL(a, c, q, r, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = q;
                const D = k.j.ff(l, m);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: B,
                    Va: H
                } = oL(k, l, D, m) || {},
                {
                    suspectAncestor: K,
                    Va: I
                } = oL(k, m, D, l) || {};k = B && H && K && I ? H <= I ? {
                    suspectAncestor: B,
                    overlapType: pL[H]
                } : {
                    suspectAncestor: K,
                    overlapType: qL[I]
                } : B && H ? {
                    suspectAncestor: B,
                    overlapType: pL[H]
                } : K && I ? {
                    suspectAncestor: K,
                    overlapType: qL[I]
                } : null
            }
            const {
                suspectAncestor: z,
                overlapType: F
            } = k || {};
            z && F ? g.push(nL(a, c, q, r, F, e, z)) : g.push(nL(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            Ka: h
        }
    }

    function iL(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Qg(b, a.j.U());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(nL(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(nL(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(nL(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function jL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ah(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function kL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function nL(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Ab(a.A, e) && Ab(a.l, f)) {
            b = new wh(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = rL(a, c)) && yh(b, a)) c = 4;
            else {
                a = sL(c, d);
                if (Ob) {
                    e = pi(c, "paddingLeft");
                    f = pi(c, "paddingRight");
                    var k = pi(c, "paddingTop"),
                        l = pi(c, "paddingBottom");
                    e = new wh(k, f, l, e)
                } else e = ii(c, "paddingLeft"), f = ii(c, "paddingRight"), k = ii(c, "paddingTop"), l = ii(c, "paddingBottom"), e = new wh(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                yh(b, new wh(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = sL(c, d), c = yh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function oL(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.U();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Qg(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Va: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Va: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Va: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = tL(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Va: 4
                    }
                }
            }
        }
        return (a = tL(a, e, b)) ? {
                suspectAncestor: a,
                Va: 5
            } :
            null
    }

    function tL(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Qg(f, a.j.U());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function rL(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new wh(a.top, a.right, a.bottom, a.left)
    }

    function sL(a, b) {
        if (!Ob || 9 <= Number(cc)) {
            var c = ii(a, "borderLeftWidth");
            d = ii(a, "borderRightWidth");
            e = ii(a, "borderTopWidth");
            a = ii(a, "borderBottomWidth");
            c = new wh(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = ri(a, "borderLeft");
            var d = ri(a, "borderRight"),
                e = ri(a, "borderTop");
            a = ri(a, "borderBottom");
            c = new wh(e, d, a, c)
        }
        return new wh(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class uL {
        constructor(a) {
            var b = vL;
            this.j = og(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const pL = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        qL = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    vb(Tg({
        Qh: 1,
        Rh: 2,
        zj: 3,
        Aj: 4,
        Cj: 5,
        Mh: 6,
        Nh: 7,
        Ph: 8,
        Qi: 9,
        Bj: 10,
        Oh: 11,
        yj: 12,
        Lh: 13
    }), a => !Ab([1, 2], a));
    Tg({
        ah: 1,
        Ri: 2,
        oh: 3,
        Dj: 4
    });
    const vL = Tg({
            bh: 1,
            Gj: 2,
            Ei: 3,
            oj: 4
        }),
        mL = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function wL(a, b, c, d) {
        const e = new ov;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Ef(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return L(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * Rg())), L(a, "message", g), b(c, f), e.promise) : null
    }

    function xL(a) {
        return wL(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };

    function yL(a) {
        if (a.j) return a.j;
        a.j = hh(a.A, "__uspapiLocator");
        return a.j
    }

    function zL(a, b) {
        if ("function" === typeof a.A ? .__uspapi) a = a.A.__uspapi, a("getUSPData", 1, b);
        else if (yL(a)) {
            AL(a);
            const c = ++a.F;
            a.D[c] = b;
            a.j && a.j.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }

    function BL(a, b) {
        let c = {};
        if ("function" === typeof a.A ? .__uspapi || null != yL(a)) {
            var d = nf(() => b(c));
            zL(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function AL(a) {
        a.B || (a.B = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                a.D ? .[c.callId](c.returnValue, c.success)
            } catch {}
        }, L(a.A, "message", a.B))
    }
    var CL = class extends Fm {
        constructor(a) {
            super();
            this.A = a;
            this.j = null;
            this.D = {};
            this.F = 0;
            this.B = null
        }
        l() {
            this.B && Ef(this.A, "message", this.B);
            super.l()
        }
    };
    var DL = class extends J {
        constructor(a) {
            super(a)
        }
    };

    function EL(a) {
        a.F || (a.j || (a.j = hh(a.B, "googlefcPresent")), a.F = !0);
        return !!a.j
    }

    function FL(a) {
        a.A || (a.A = b => {
            try {
                const c = xd(DL, b.data.__fciReturn);
                (0, a.D[v(c, 1)])(c)
            } catch (c) {}
        }, L(a.B, "message", a.A))
    }

    function GL(a) {
        return new Promise(b => {
            if (EL(a))
                if (a.j === a.B) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", d => {
                        b(xd(DL, d))
                    })
                } else FL(a), c = a.G++, a.D[c] = b, a.j.postMessage({
                    __fciCall: {
                        command: "loaded",
                        callId: c
                    }
                }, "*")
        })
    }
    var HL = class extends Fm {
        constructor(a) {
            super();
            this.B = a;
            this.A = this.j = null;
            this.D = {};
            this.G = 0;
            this.F = !1
        }
    };
    const IL = (a, b) => {
        try {
            const g = void 0 === E(b, 6) ? !0 : E(b, 6);
            a: switch (ed(b, 4)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new Qf(Of(ed(b, 2)), C(b, 3), c),
                e = y(b, Nf, 5) ? .j() ? ? "";
            d.Ab = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            If(f)
        } catch {}
    };

    function JL(a, b, c = IL) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : L(a, "load", () => void c(a, b)))
    };

    function KL(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function LL(a) {
        if (a === a.top || Kg(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && KL(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new ov;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                tb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var ML = class extends J {
            constructor(a) {
                super(a)
            }
        },
        NL = [1, 3];
    const OL = N `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function PL(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = Pg("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = ie(OL).toString();
            const f = (new URL(OL.toString())).origin,
                g = VE({
                    destination: a,
                    Ga: e,
                    origin: f,
                    Ua: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function QL(a, b, c, d, e, f, g = !1) {
        const h = (q, r) => {
                g && Mi({
                    timeMs: String((b.performance.now() - q).toFixed(2)),
                    useCache: r ? "1" : "0"
                }, "topics_stats")
            },
            k = g ? b.performance.now() : 0,
            {
                Mb: l,
                Lb: m
            } = RL(f),
            n = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        n.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = qh(window)), a = a(c).then(q => {
            let r = m;
            if (q instanceof Uint8Array) r || (r = !(l instanceof Uint8Array && Fb(q, l)));
            else if (oj()(q)) r || (r = q !== l);
            else return e.pa(989, Error(JSON.stringify(q))),
                7;
            if (r && f) try {
                var z = new ML;
                var F = w(z, 2, Zi());
                q instanceof Uint8Array ? hd(F, 1, NL, Kc(q, !1)) : hd(F, 3, NL, q);
                f.setItem("goog:cached:topics", Ad(F))
            } catch {}
            return q
        }), n.getTopicsPromise = a);
        return l && !m ? (h(k, !0), Promise.resolve(l)) : n.getTopicsPromise.then(q => {
            h(k, !1);
            return q
        })
    }

    function RL(a) {
        if (!a) return {
            Mb: null,
            Lb: !0
        };
        try {
            const h = a.getItem("goog:cached:topics");
            if (!h) return {
                Mb: null,
                Lb: !0
            };
            const k = xd(ML, h);
            let l;
            const m = id(k, NL);
            switch (m) {
                case 0:
                    l = null;
                    break;
                case 1:
                    var b, c = 1 === id(k, NL) ? 1 : -1;
                    a = k;
                    const n = v(a, c),
                        q = Kc(n, !0);
                    null != q && q !== n && w(a, c, q, void 0, !0);
                    var d = q;
                    var e = null == d ? uc() : d;
                    tc(rc);
                    var f = e.P;
                    var g = null == f || nc(f) ? f : "string" === typeof f ? kc(f) : null;
                    l = (b = null == g ? g : e.P = g) ? new Uint8Array(b) : qc || (qc = new Uint8Array(0));
                    break;
                case 3:
                    l = ed(k, 3 === id(k, NL) ? 3 : -1);
                    break;
                default:
                    cf(m,
                        void 0)
            }
            return {
                Mb: l,
                Lb: sd(k, 2) + 6048E5 < Zi()
            }
        } catch {
            return {
                Mb: null,
                Lb: !0
            }
        }
    };

    function SL(a, b) {
        if (pb()) {
            var c = a.document.documentElement.lang;
            TL(a) ? UL(b, qh(a), !0, "", c) : (new MutationObserver((d, e) => {
                TL(a) && (UL(b, qh(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function TL(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    }

    function UL(a, b, c, d, e) {
        Mi({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function VL(a) {
        const b = a.innerInsElement;
        a = a.outerInsElement;
        if (!b || !a) throw Error("no_ins_in_loader_provided_slot");
        return {
            innerInsElement: b,
            outerInsElement: a
        }
    }
    async function WL({
        ia: a,
        ca: b,
        bb: c,
        slot: d
    }) {
        const e = d.vars,
            f = Ng(d.pubWin),
            {
                innerInsElement: g,
                outerInsElement: h
            } = VL(d),
            k = new HF({
                K: f,
                pubWin: d.pubWin,
                H: e,
                ia: a,
                ca: b,
                bb: c,
                innerInsElement: g,
                outerInsElement: h
            });
        k.I = Date.now();
        Tl(1, [k.H]);
        tl(1032, () => {
            if (f && U(Gq)) {
                var l = k.H;
                UC(PC(), 32, !1) || (VC(PC(), 32, !0), SL(f, "sa" === l.google_loader_used ? 5 : 9))
            }
        });
        try {
            await XL(k)
        } catch (l) {
            if (!wl(159, l)) throw l;
        }
        tl(639, () => {
            {
                var l = k.H;
                const n = k.K;
                if (n && 1 === l.google_responsive_auto_format && !0 === l.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(l.google_async_iframe_id)) ? Eg(m, "INS", "adsbygoogle") : null) ? (l = new HG(n, m, l), l.j = t.setInterval(La(l.B, l), 500), l.B(), l = !0) : l = !1
                } else l = !1
            }
            return l
        });
        yl(k.pubWin, "affa", l => {
            tl(1008, () => {
                e.google_ad_client && f && !mb() && YL(f, e, xd(gJ, l.config), ZL(k), C(a, 8))
            }, $L)
        });
        e.google_ad_client && f && !mb() && f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) && YL(f, e, aM(), ZL(k), C(a, 8));
        return k
    }

    function $L(a) {
        a.e = `${V(Uq)}`
    }

    function ZL(a) {
        return U(Xq) ? a.l : null
    }

    function YL(a, b, c, d, e) {
        if (y(c, eF, 1) || U(or)) {
            var f = O(lD);
            var g = b.google_page_url;
            g = "string" === typeof g ? g : "";
            var h = "on" === b.google_adtest;
            const m = y(c, aF, 2);
            try {
                const n = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (n) {
                    var k = decodeURIComponent(n[1]);
                    var l = xd(eF, k)
                } else l = null
            } catch (n) {
                l = null
            }
            l || (l = U(Lq) ? y(c, eF, 1) ? ? null : null);
            $K(a, f, new aL(l, g, !(!m ? .A() || !m ? .j()), !(!m ? .B() || !(488 > P(a).clientWidth) && m ? .C()), e, h), b.google_ad_client, d)
        }
    }

    function aM() {
        const a = new gJ;
        if (U(Jq)) {
            var b = new aF;
            b = ud(b, 5, !0);
            b = ud(b, 8, !0);
            ld(a, 2, b)
        }
        return a
    }

    function XL(a) {
        if (/_sdo/.test(a.H.google_ad_format)) return Promise.resolve();
        wF(13);
        wF(11);
        var b = O(Er).C(wq.j, wq.defaultValue);
        if (b.length) {
            var c = document;
            if (b.length && c.head)
                for (var d of b)
                    if ((b = d) && c.head) {
                        var e = Pg("META");
                        c.head.appendChild(e);
                        e.httpEquiv = "origin-trial";
                        e.content = b
                    }
        }
        c = PC();
        (d = UC(c, 23, !1)) || VC(c, 23, !0);
        if (!d) {
            c = a.H.google_ad_client;
            d = a.ia;
            c = void 0 !== $c(d, aF, 13 === id(d, kF) ? 13 : -1) ? y(td(d, aF, 13, kF), UD, 2) : Fb(td(d, cF, 14, kF) ? .j() ? ? [], [c]) ? y(y(td(d, cF, 14, kF), aF, 2), UD, 2) : new UD;
            c = new VD(a.pubWin,
                a.H.google_ad_client, c, E(a.ia, 6));
            c.l = !0;
            b = y(c.C, Zo, 1);
            if (c.l && (d = c.j, c.B && !hz(b) ? (e = new JD, e = w(e, 1, 1)) : e = null, e)) {
                e = Ad(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (f) {}
            }
            b && iz(new jz(c.j, new Az(c.j, c.A), b, new zw(c.j)))
        }
        c = !Dh() && !lb();
        return !c || c && !bM(a) ? cM(a) : Promise.resolve()
    }

    function dM(a, b, c = !1) {
        b = $E(a.K, b);
        const d = Xh() || Nr(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Pr(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function bM(a) {
        return eM(a) || fM(a)
    }

    function eM(a) {
        const b = a.H;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                vl("abg:cmppar", {
                    client: a.H.google_ad_client,
                    url: a.H.google_page_url
                })
            }, 1E4),
            d = ul(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                bM(a) || cM(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function fM(a) {
        const b = a.pubWin.document,
            c = gM();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.innerInsElement,
            e = $G(b);
        if (!e) return !1;
        if (!aH(b)) return hM(a, c.visible, d);
        const f = 3 === ZG(b);
        if (dM(a, d) <= c.hidden && !f) return !1;
        let g = ul(332, () => {
            !aH(b) && g && (Ef(b, e, g), hM(a, c.visible, d) || cM(a), g = null)
        });
        return L(b, e, g)
    }

    function gM() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        Hg() && (a.visible *= 2);
        return a
    }

    function hM(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.H;
        if (!km(d.google_reactive_ad_format) && (cG(d) || d.google_reactive_ads_config) || !Qr(c) || dM(a, c) <= b) return !1;
        var e = PC(),
            f = UC(e, 8, {});
        e = UC(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                ub(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.J = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ma(Promise, "any").call(Promise, [f, e]).then(() => {
            tl(294, () => {
                cM(a)
            })
        });
        return !0
    }

    function cM(a) {
        tl(326, () => {
            if (1 === yi(a.H)) {
                var c = U(Hq),
                    d = c || U(Fq),
                    e = a.pubWin;
                if (d && e === a.K) {
                    var f = new Nl;
                    d = new Ol;
                    f.setCorrelator(qh(a.pubWin));
                    var g = xF(a.pubWin);
                    x(f, 5, g, "");
                    vd(f, 2, 1);
                    g = ld(d, 1, f);
                    f = new Ml;
                    f = ud(f, 10, !0);
                    var h = U(yq);
                    f = ud(f, 8, h);
                    h = U(zq);
                    f = ud(f, 12, h);
                    h = U(Cq);
                    f = ud(f, 7, h);
                    h = U(Bq);
                    f = ud(f, 13, h);
                    ld(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    Og(e.document, ei(E(a.ia, 9) && c ? a.ca.Kf : a.ca.Lf))
                } else fj()
            }
        });
        a.H.google_ad_channel = iM(a, a.H.google_ad_channel);
        a.H.google_tag_partner = jM(a, a.H.google_tag_partner);
        kM(a);
        var b = a.H.google_start_time;
        "number" === typeof b && (Ul = b, a.H.google_start_time = null);
        ZE(a);
        lM(a);
        YC() && XD({
            win: a.pubWin,
            webPropertyCode: a.H.google_ad_client,
            vb: ei(a.ca.vb)
        });
        cG(a.H) && (dy() && (a.H.google_adtest = a.H.google_adtest || "on"), a.H.google_pgb_reactive = a.H.google_pgb_reactive || 3);
        mM(a.K);
        b = "function" === typeof a.pubWin.document.browsingTopics && sF(a.pubWin.document);
        if (U(sq) && b) try {
            a.G = PL(a.pubWin)
        } catch (c) {
            wl(984, c)
        }
        return nM(a)
    }

    function lM(a) {
        a.K && (gG(a.K, a.ca.We), eG(a.K.location) && pG(a.K, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.H.google_ad_client
        }))
    }

    function iM(a, b) {
        return (b ? [b] : []).concat(NC(a.H).ad_channels || []).join("+")
    }

    function jM(a, b) {
        return (b ? [b] : []).concat(NC(a.H).tag_partners || []).join("+")
    }

    function oM(a) {
        const b = Pg("IFRAME");
        Sg(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function pM(a, b, c) {
        return 9 === a.H.google_reactive_ad_format && Eg(a.outerInsElement, null, "fsi_container") ? (a.innerInsElement.appendChild(b), Promise.resolve(b)) : nG(a.ca.ee, 525, d => {
            a.innerInsElement.appendChild(b);
            d.createAdSlot(a.K, a.H, b, a.outerInsElement.parentElement, MD(c, a.pubWin));
            return b
        })
    }

    function qM(a, b, c) {
        JL(a.pubWin, ud(Kf(vd(vd(Jf(new Lf, Mf(new Nf, String(qh(a.pubWin)))), 4, 1), 2, 1), C(a.ia, 2)), 6, !0), U(ur) ? () => {} : void 0);
        const d = a.K;
        a.H.google_acr && a.H.google_acr(b);
        L(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? NC(d).enable_overlap_observer || !1 : !1;
            (a.H.ovlp || f) && d && d === a.pubWin && rM(d, a, a.outerInsElement, b)
        });
        var e = f => {
            f && a.A.push(() => {
                f.Fa()
            })
        };
        sM(a, b);
        tM(a, b);
        !d || cG(a.H) && !rG(a.H) || (e(new MH(d, b, a.H)), e(new WG(a, b)), e(d.IntersectionObserver ? null : new YG(d, b, a.innerInsElement)));
        d && (e(new QG(d, b)), a.A.push(BG(d, a.H)), O(GG).init(d), a.A.push(MG(d, a.outerInsElement, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.H.iaaso;
        if (null != c) {
            e = a.outerInsElement;
            const f = e.parentElement;
            (f && cs.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.outerInsElement;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        uM(a)
    }

    function sM(a, b) {
        const c = a.pubWin,
            d = a.H.google_ad_client,
            e = XC();
        let f = null;
        const g = yl(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.A.push(g)
    }

    function vM(a, b) {
        var c = yF(a, "__gpi_opt_out", b.l);
        c && (c = Wf(Vf(Uf(Tf(new Xf, c), 2147483647), "/"), b.pubWin.location.hostname), zF(a, "__gpi_opt_out", c, b.l))
    }

    function tM(a, b) {
        const c = yl(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = Wf(Vf(Uf(Tf(new Xf, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new CF(a.pubWin);
                zF(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) AF(f, "__gads", a.l), AF(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function uM(a) {
        const b = Dh(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                L(a.pubWin, "message", sl.ga(616, c));
                a.A.push(() => {
                    Ef(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function rM(a, b, c, d) {
        lL(new uL(a), c).then(e => {
            Tl(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && cs.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.H.armr || "",
                g = e.executionTime || "",
                h = null == b.H.iaaso ? "" : Number(b.H.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = xb(e.entries, D => `${D.overlapType}:${D.overlapDepth}:${D.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                q =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                z = Ai(e.target),
                F = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            vl("ovlp", {
                adf: b.H.google_ad_dom_fingerprint,
                armr: f,
                client: b.H.google_ad_client,
                eid: xF(b.H),
                et: g,
                fwrattr: b.H.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.H.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.H.google_responsive_auto_format,
                roa: q,
                slot: b.H.google_ad_slot,
                sp: r,
                tgt: z,
                tr: F,
                url: b.H.google_page_url,
                vp: e,
                pvc: qh(a)
            }, 1)
        }).catch(e => {
            Tl(8, ["Error:", e.message, c]);
            vl("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function wM(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function xM(a, b, c, d) {
        var e = a.H;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = sG(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = fh();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r =
                        ""
                } else r = m.substring(q + 1, n);
                m = [m.slice(0, q), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = eh().join(" ")
        }
        U(Up) && !1 === e.google_video_play_muted && wM("autoplay", l);
        n = b;
        b = yM(b);
        q = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = q;
            b = xl(b, m);
            xl(n, m)
        } else b = q;
        e.dash && (l.srcdoc = e.dash);
        n = U(vI(window) ? xr : wr);
        q = U(zr);
        n = wI(a.pubWin, n, q);
        q = e.google_trust_token_additional_signing_data;
        n && xI(n) && (n = zI(n, q)) && (l.trustToken = JSON.stringify(n));
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && wM("attribution-reporting", l);
        U(xq) && (n = a.pubWin, void 0 !== n.anonymouslyFramed && n.crossOriginIsolated && (l.anonymous = "true"));
        if (k) l.src = b, l = oM(l), l = pM(a, l, d);
        else {
            d = {};
            d.dtd = KG((new Date).getTime(),
                Ul);
            d = ui(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = oM(l);
            d && a.A.push(Zh(a.pubWin, l));
            d = a.innerInsElement;
            n = a.H.shadow_root;
            k = l;
            d.style.visibility = "visible";
            if (n) n.appendChild(k);
            else {
                for (; n = d.firstChild;) d.removeChild(n);
                d.appendChild(k)
            }
            l = Promise.resolve(l)
        }
        c && (c = a.ca.bg, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Ua: m,
            Jf: a.pubWin,
            Fe: f,
            Wj: "google_expandable_ad_slot" + yi(e),
            sf: c.toString(),
            Jc: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Ua || !e.Jc ? void 0 : yl(e.Jc, "ct", Ma(Bl, e, c)), e && a.A.push(e));
        return l
    }

    function yM(a) {
        var b = V(u("Edge") ? fq : kq);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            vl("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function zM(a) {
        var b = a.H,
            c = a.pubWin,
            d = a.l;
        U(nq) && cd(d, 5) && vM(new CF(a.pubWin), a);
        var e = MD(d, a.pubWin);
        if (!cd(d, 5)) return Promise.resolve();
        cd(d, 5) && GF(d, a.pubWin, a.H.google_ad_client);
        var f = a.H.google_reactive_ads_config;
        f && (mG(a.K, f), xG(f, a, MD(d)), f = f.page_level_pubvars, Ca(f) && Sd(a.H, f));
        cd(d, 5) && await AM();
        if (U(uq) && a.G)
            if (BM(a)) {
                a.B = 1;
                const g = MD(a.l, a.pubWin);
                f = a.G.then(async k => {
                    await QL(k, a.pubWin, U(rq), U(tq), sl, g, U(vr)).then(l => {
                        a.B = l
                    })
                });
                const h = V(qq);
                0 < h ? await Promise.race([f, uh(h)]) :
                    await f
            } else a.B = 5;
        if (!yI(a.pubWin, pF(), C(a.ia, 8))) {
            const g = V(Dr);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        sG(b) ? (f = a.ca.cg.toString() + "#" + MI(b), UI(b, PC()), CM(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !dG(b) || bG(c, b, e)) && CM(b) && (f = JI(a, d));
        Tl(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || xi(c);
        e = yi(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648* 
Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Na()).toString(36)}`;
        c = 0 < dM(a, a.innerInsElement, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = PC(), e.btvi = UC(c, 21, 1), WC(c, 21));
        f = ui(e, f);
        d = xM(a, f, 0 === a.C, d);
        f = yM(f);
        a.H.rpe && GH(a.pubWin, a.innerInsElement, {
            height: a.H.google_ad_height,
            Yc: "force",
            kd: !0,
            Rf: !0,
            vc: a.H.google_ad_client
        });
        d = await d;
        try {
            qM(a, d, b)
        } catch (g) {
            wl(223, g)
        }
    }

    function AM() {
        return (ob() ? 0 <= hb(sb(), 11) : nb() && 0 <= hb(sb(), 65)) ? new Promise(a => {
            oI(a.bind(null, !0))
        }) : (oI(null), Promise.resolve(!1))
    }

    function DM(a) {
        const b = new CL(a);
        return new Promise(c => {
            BL(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function EM(a) {
        var b = gh(t.top, "googlefcPresent");
        t.googlefc && !b && vl("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function FM(a) {
        return EL(a) ? GL(a) : Promise.resolve(null)
    }

    function GM(a, b) {
        const c = b.Yf;
        b = b.uspString;
        c ? IG(a, c) : PD(a, !0);
        b && w(a, 1, b)
    }

    function HM(a) {
        const b = V(Rp),
            c = U(Pp);
        if (0 >= b && !c) return null;
        const d = Zi(),
            e = xL(a.pubWin);
        if (!e) return null;
        a.D = "0";
        return (c ? e : Promise.race([e, uh(b, "0")])).then(f => {
            vl("adsense_paw", {
                time: Zi() - d
            });
            f ? .length > V(Qp) ? wl(809, Error(`ML:${f.length}`)) : a.D = f
        }).catch(f => {
            wl(809, f)
        })
    }

    function IM(a) {
        const b = Zi();
        return Promise.race([tl(832, () => LL(a)), uh(200)]).then(c => {
            vl("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Zi() - b,
                tms: 200
            });
            return c ? .tb
        })
    }

    function JM(a) {
        var b = V(Tp);
        return Promise.race([ul(779, () => {
            const c = U(vI(window) ? xr : wr),
                d = U(zr);
            return FI(new GI(a, c, d))
        })(), uh(b)])
    }
    async function KM(a) {
        const b = HM(a),
            c = tl(868, () => IM(a.pubWin));
        kI(C(a.ia, 8));
        EE(a.pubWin);
        EM(a.H.google_ad_client);
        var d = new HL(a.pubWin);
        await FM(d);
        a.l = new QD;
        d = [JG(a), DM(a.pubWin)];
        d = await Promise.all(d);
        GM(a.l, {
            Yf: d[0],
            uspString: d[1]
        });
        yI(a.pubWin, pF(), C(a.ia, 8)) && (d = JM(!!cd(a.l, 5)), U(Cr) ? sl.Ca(962, d) : await d);
        U(Pp) || await b;
        a.tb = await c || "";
        await zM(a)
    }

    function BM(a) {
        const b = a.l;
        a = a.H;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!cd(b, 5) && !b.j() && !ZC() && !cd(b, 9)
    }

    function nM(a) {
        var b = a.pubWin.document,
            c = a.H;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const l = c.userAgent,
                    m = c.platform,
                    n = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) var g = !1;
                else if (/Win/.test(m) && /Trident/.test(l) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                        k = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                    g = !h && "Gecko" === n && 27 <= k && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            Tr(a.pubWin, d, e) && (f |= 2)
        } catch (l) {
            f |= 8
        }
        a.C = f;
        0 === a.C || (a.H.google_allow_expandable_ads = !1);
        vh(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === ZG(a.pubWin.document) && (a.j |= 32);
        if (b = a.K) b = a.K, b = !(P(b).scrollWidth <= P(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.H.google_loader_features_used && (a.j |= a.H.google_loader_features_used);
        a.F = 2;
        return KM(a)
    }

    function CM(a) {
        const b = PC(),
            c = a.google_ad_section;
        cG(a) && WC(b, 15);
        if (Di(a)) {
            if (100 < WC(b, 5)) return !1
        } else if (100 < WC(b, 6) - UC(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function kM(a) {
        const b = a.K;
        if (b && !NC(b).ads_density_stats_processed && !Dh(b) && (NC(b).ads_density_stats_processed = !0, U(lq) || .01 > Rg())) {
            const c = () => {
                if (b) {
                    var d = OB(JB(b), a.H.google_ad_client, b.location.hostname, xF(a.H).split(","));
                    vl("ama_stats", d, 1)
                }
            };
            th(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    }

    function mM(a) {
        a && !NC(a).host_pinged_back && (NC(a).host_pinged_back = !0, vl("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        tl(843, () => {
            if (!t.google_sa_impl) {
                var d = fL(a);
                cL(d);
                Tl(16, [3, d.toJSON()]);
                var e = dL({
                        Te: b,
                        Wf: C(d, 2)
                    }),
                    f = c(e, d);
                t.google_sa_impl = async h => WL({
                    ia: d,
                    ca: f,
                    bb: e,
                    slot: h
                });
                vF(rF(t));
                t.google_process_slots ? .();
                var g = (t.Prototype || {}).Version;
                null != g && vl("prtpjs", {
                    version: g
                })
            }
        })
    })(eL, "m202210130101", function(a, b) {
        const c = 2012 < rd(b, 1) ? `_fy${rd(b,1)}` : "",
            d = C(b, 3);
        b = C(b, 2);
        return {
            Lf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Kf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            ee: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            We: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            bg: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            cg: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Fb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            vb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            sc: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/storify${c}.js`
        }
    });
}).call(this, "[2021,\"r20221017\",\"r20110914\",null,null,null,null,\".google.com.sa\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759875,44759926,44759837,44767668]]");