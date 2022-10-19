(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function t(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function v(a) {
        var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ka(a) {
        if (!(a instanceof Array)) {
            a = v(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function la(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ma = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) la(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (fa && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function w(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.hc = b.prototype
    }

    function ta() {
        this.j = !1;
        this.h = null;
        this.v = void 0;
        this.g = 1;
        this.u = 0;
        this.i = null
    }

    function ua(a) {
        if (a.j) throw new TypeError("Generator is already running");
        a.j = !0
    }
    ta.prototype.l = function(a) {
        this.v = a
    };

    function va(a, b) {
        a.i = {
            exception: b,
            rb: !0
        };
        a.g = a.u
    }
    ta.prototype.return = function(a) {
        this.i = {
            return: a
        };
        this.g = this.u
    };

    function wa(a, b) {
        a.g = 2;
        return {
            value: b
        }
    }

    function xa(a) {
        this.g = new ta;
        this.h = a
    }

    function ya(a, b) {
        ua(a.g);
        var c = a.g.h;
        if (c) return za(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Aa(a)
    }

    function za(a, b, c, d) {
        try {
            var e = b.call(a.g.h, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.j = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.h = null, va(a.g, g), Aa(a)
        }
        a.g.h = null;
        d.call(a.g, f);
        return Aa(a)
    }

    function Aa(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.j = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.v = void 0, va(a.g, c)
        }
        a.g.j = !1;
        if (a.g.i) {
            b = a.g.i;
            a.g.i = null;
            if (b.rb) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ba(a) {
        this.next = function(b) {
            ua(a.g);
            a.g.h ? b = za(a, a.g.h.next, b, a.g.l) : (a.g.l(b), b = Aa(a));
            return b
        };
        this.throw = function(b) {
            ua(a.g);
            a.g.h ? b = za(a, a.g.h["throw"], b, a.g.l) : (va(a.g, b), b = Aa(a));
            return b
        };
        this.return = function(b) {
            return ya(a, b)
        };
        this[r(p.Symbol, "iterator")] = function() {
            return this
        }
    }

    function Ca(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new p.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : p.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function Da(a) {
        return Ca(new Ba(new xa(a)))
    }

    function Ea() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.v = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.l()
                })
            }
            this.g.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.j = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.j = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.R),
                reject: g(this.l)
            }
        };
        b.prototype.R = function(g) {
            if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Y(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.P(g) : this.u(g)
            }
        };
        b.prototype.P = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.l(k);
                return
            }
            "function" == typeof h ? this.ja(h, g) : this.u(g)
        };
        b.prototype.l = function(g) {
            this.B(2, g)
        };
        b.prototype.u = function(g) {
            this.B(1, g)
        };
        b.prototype.B = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.T();
            this.G()
        };
        b.prototype.T = function() {
            var g = this;
            e(function() {
                if (g.I()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.I =
            function() {
                if (this.v) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i;
                return k(g)
            };
        b.prototype.G = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.Y = function(g) {
            var h = this.j();
            g.la(h.resolve, h.reject)
        };
        b.prototype.ja = function(g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(u, y) {
                return "function" == typeof u ? function(G) {
                    try {
                        l(u(G))
                    } catch (B) {
                        m(B)
                    }
                } : y
            }
            var l, m, q = new b(function(u, y) {
                l = u;
                m = y
            });
            this.la(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.la = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.v = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = v(g), m = l.next(); !m.done; m = l.next()) d(m.value).la(h, k)
            })
        };
        b.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(G) {
                    return function(B) {
                        u[G] = B;
                        y--;
                        0 == y && l(u)
                    }
                }
                var u = [],
                    y = 0;
                do u.push(void 0), y++, d(k.value).la(q(u.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    t("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!la(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!la(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && la(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && la(g, e) && la(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && la(g, e) && la(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.N = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.g;
            return ia(function() {
                if (l) {
                    for (; l.head != h.g;) l = l.N;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.h[l];
            if (m && la(h.h, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        C: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                C: void 0
            }
        }

        function e(h) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.C ? l.C.value = k : (l.C = {
                next: this.g,
                N: this.g.N,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.C), this.g.N.next = l.C, this.g.N = l.C, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.C.N.next = h.C.next, h.C.next.N = h.C.N, h.C.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.h = {};
            this.g = this.g.N = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).C
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).C) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function Fa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Fa(this, function(b) {
                return b
            })
        }
    }, "es6");
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    t("Set", function(a) {
        function b(c) {
            this.g = new p.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return r(this.g, "values").call(this.g)
        };
        b.prototype.keys = r(b.prototype,
            "values");
        b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");

    function Ga(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    t("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ga(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    t("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Fa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ga(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    t("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? r(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    t("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function Ha(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Ia(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ja(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ka(a) {
        return Object.prototype.hasOwnProperty.call(a, La) && a[La] || (a[La] = ++Ma)
    }
    var La = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ma = 0;

    function Na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Oa(a, b, c) {
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

    function Pa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Pa = Na : Pa = Oa;
        return Pa.apply(null, arguments)
    }

    function Qa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ra(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Sa(a) {
        return a
    };
    var Ta = (new Date).getTime();

    function Ua(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Va(a, b) {
        var c = 0;
        a = Ua(String(a)).split(".");
        b = Ua(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Wa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Wa(0 == f[2].length, 0 == g[2].length) || Wa(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function Wa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Xa() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function z(a) {
        return -1 != Xa().indexOf(a)
    };

    function Ya() {
        return z("Trident") || z("MSIE")
    }

    function Za() {
        return (z("Chrome") || z("CriOS")) && !z("Edge") || z("Silk")
    }

    function $a(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[r(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function ab() {
        var a = Xa();
        if (Ya()) {
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
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = $a(b);
        return z("Opera") ? a(["Version", "Opera"]) :
            z("Edge") ? a(["Edge"]) : z("Edg/") ? a(["Edg"]) : z("Silk") ? a(["Silk"]) : Za() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function bb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function cb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function db(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function eb(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function fb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function gb(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function hb(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ib(a, b) {
        return 0 <= bb(a, b)
    }

    function jb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function kb(a) {
        kb[" "](a);
        return a
    }
    kb[" "] = function() {};
    var lb = Ya();
    !z("Android") || Za();
    Za();
    !z("Safari") || Za();
    var mb = {},
        nb = null;

    function ob(a) {
        var b;
        void 0 === b && (b = 0);
        pb();
        b = mb[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
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

    function qb(a) {
        var b = [];
        rb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function rb(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = nb[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        pb();
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

    function pb() {
        if (!nb) {
            nb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                mb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === nb[f] && (nb[f] = e)
                }
            }
        }
    };
    var sb = "undefined" !== typeof Uint8Array,
        tb = {};
    var ub;

    function vb(a) {
        if (tb !== tb) throw Error("illegal external caller");
        this.wa = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    vb.prototype.isEmpty = function() {
        return null == this.wa
    };
    var wb = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function xb(a, b) {
        Object.isFrozen(a) || (wb ? a[wb] |= b : void 0 !== a.J ? a.J |= b : Object.defineProperties(a, {
            J: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function yb(a, b) {
        Object.isExtensible(a) && (wb ? a[wb] && (a[wb] &= ~b) : void 0 !== a.J && (a.J &= ~b))
    }

    function zb(a) {
        var b;
        wb ? b = a[wb] : b = a.J;
        return null == b ? 0 : b
    }

    function Ab(a, b) {
        wb ? a[wb] = b : void 0 !== a.J ? a.J = b : Object.defineProperties(a, {
            J: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Bb(a) {
        xb(a, 1);
        return a
    }

    function Cb(a) {
        xb(a, 17);
        return a
    }

    function Db(a) {
        return a ? !!(zb(a) & 2) : !1
    }

    function Eb(a) {
        xb(a, 16);
        return a
    }

    function Fb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        yb(a, 16)
    };
    var Gb = {};

    function Hb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Ib, Jb = Object,
        Kb = Jb.freeze,
        Lb = [];
    xb(Lb, 3);
    var Mb = Kb.call(Jb, Lb);

    function Nb(a) {
        if (Db(a.m)) throw Error("Cannot mutate an immutable Message");
    };

    function Ob(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (sb && null != a && a instanceof Uint8Array) return ob(a);
                    if (a instanceof vb) {
                        var b = a.wa;
                        return null == b ? "" : "string" === typeof b ? b : a.wa = ob(b)
                    }
                }
        }
        return a
    };

    function Pb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Qb(a, b, c, void 0 !== d);
            else if (Hb(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Pb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Qb(a, b, c, d) {
        d = d ? !!(zb(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = Pb(e[a], b, c, d);
        return e
    }

    function Rb(a) {
        return a.Sa === Gb ? a.toJSON() : Ob(a)
    }

    function Sb() {};

    function A(a, b, c) {
        return -1 === b ? null : b >= a.X ? a.A ? a.A[b] : void 0 : (void 0 === c ? 0 : c) && a.A && (c = a.A[b], null != c) ? c : a.m[b + a.U]
    }

    function C(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || Nb(a);
        a.Na && (a.Na = void 0);
        if (b >= a.X || d) return (a.A || (a.A = a.m[a.X + a.U] = {}))[b] = c, a;
        void 0 !== a.A && a.X >= a.m.length ? (d = a.m.length - 1, e = b + a.U, e >= d ? (a.m[d] = void 0, a.m[e] = c, a.m.push(a.A)) : a.m[e] = c) : a.m[b + a.U] = c;
        void 0 !== a.A && b in a.A && delete a.A[b];
        return a
    }

    function Tb(a, b, c) {
        return void 0 !== Ub(a, b, Vb(a, Wb, c))
    }

    function Xb(a, b, c, d) {
        var e = A(a, b, d);
        Array.isArray(e) || (e = Mb);
        var f = zb(e);
        f & 1 || Bb(e);
        Db(a.m) ? (f & 2 || xb(e, 2), c & 1 || Object.freeze(e)) : e === Mb || !(c & 1 && c & 2) && f & 2 ? (e = Bb(Array.prototype.slice.call(e)), C(a, b, e, d)) : !(c & 2) && f & 16 && Fb(e);
        return e
    }

    function Yb(a, b) {
        a = A(a, b);
        return null == a ? a : !!a
    }

    function Zb(a, b) {
        var c = Xb(a, b, 1, !1);
        if (c.length && !(zb(c) & 4)) {
            Object.isFrozen(c) && (c = Bb(c.slice()), C(a, b, c, !1, !0));
            for (var d = b = 0; b < c.length; b++) {
                var e = c[b];
                null != e && (c[d++] = e)
            }
            d < b && (c.length = d);
            xb(c, 5)
        }
        Db(a.m) && !Object.isFrozen(c) && (xb(c, 2), Object.freeze(c));
        return c
    }

    function D(a, b) {
        a = A(a, b);
        return null == a ? 0 : a
    }

    function $b(a, b, c) {
        null == c ? c = Mb : Bb(c);
        return C(a, b, c)
    }

    function ac(a, b, c) {
        Nb(a);
        0 !== c ? C(a, b, c) : C(a, b, void 0, !1);
        return a
    }

    function bc(a, b, c, d) {
        Nb(a);
        (c = cc(a, c)) && c !== b && null != d && C(a, c, void 0, !1);
        return C(a, b, d)
    }

    function Vb(a, b, c) {
        return cc(a, b) === c ? c : -1
    }

    function cc(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && C(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function Ub(a, b, c, d) {
        var e = A(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.Sa !== Gb ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (C(a, c, g, d, !0), xb(g.m, zb(a.m) & -33));
        return g
    }

    function E(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Ub(a, b, c, d);
        if (null == b) return b;
        Db(b.m) && !Db(a.m) && (b = dc(b), C(a, c, b, d));
        return b
    }

    function ec(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.g || (a.g = {});
        var f = a.g[c],
            g = Xb(a, c, 3, d),
            h = Db(a.m),
            k = !!(zb(a.m) & 16),
            l = Db(g),
            m = h || l;
        !e && l && (g = Bb(Array.prototype.slice.call(g)), C(a, c, g, d));
        if (!f) {
            f = [];
            d = m;
            for (l = 0; l < g.length; l++) {
                var q = g[l];
                d = d || Db(q);
                var u = b,
                    y = k,
                    G = !1;
                G = void 0 === G ? !1 : G;
                y = void 0 === y ? !1 : y;
                q = Array.isArray(q) ? new u(y ? Eb(q) : q) : G ? new u : void 0;
                void 0 !== q && (f.push(q), m && xb(q.m, 2))
            }
            a.g[c] = f;
            b = g;
            Object.isFrozen(b) || (g = zb(b) | 33, Ab(b, d ? g & -9 : g | 8))
        }
        e = h || e;
        h = Db(f);
        e && !h && (Object.isFrozen(f) && (a.g[c] = f = f.slice()),
            xb(f, 2), Object.freeze(f));
        !e && h && (a.g[c] = f = f.slice());
        return f
    }

    function F(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = Db(a.m);
        b = ec(a, b, c, d, e);
        a = Xb(a, c, 3, d);
        if (e = !e && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            e = !(zb(a) & 8)
        }
        if (e) {
            for (e = 0; e < b.length; e++)(c = b[e]) && Db(c.m) && (c = e, d = dc(b[e]), b[c] = d, a[e] = b[e].m);
            xb(a, 8)
        }
        return b
    }

    function fc(a, b, c) {
        Nb(a);
        null == c && (c = void 0);
        return C(a, b, c)
    }

    function gc(a, b, c, d) {
        Nb(a);
        null == d && (d = void 0);
        return bc(a, b, c, d)
    }

    function hc(a, b, c) {
        Nb(a);
        if (null != c) {
            var d = Bb([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].m, e = e || Db(d[f]);
            a.g || (a.g = {});
            a.g[b] = c;
            c = d;
            e ? yb(c, 8) : xb(c, 8)
        } else a.g && (a.g[b] = void 0), d = Mb;
        return C(a, b, d)
    }

    function I(a, b) {
        return null == a ? b : a
    }

    function J(a, b) {
        return I(A(a, b), "")
    }

    function ic(a, b, c) {
        return I(Yb(a, b), void 0 === c ? !1 : c)
    }

    function jc(a, b) {
        a = A(a, b);
        return I(null == a ? a : +a, 0)
    }

    function kc(a, b, c, d) {
        return E(a, b, Vb(a, d, c))
    };

    function lc(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? (e = f.ta ? Bb(a.slice()) : a, hc(b, c, e)) : (null != d ? sb && d instanceof Uint8Array ? e = d.length ? new vb(new Uint8Array(d)) : ub || (ub = new vb(null)) : (Array.isArray(d) && (e ? xb(d, 2) : d && zb(d) & 1 && f.ta ? (e = Array.prototype.slice.call(d), Ab(e, (zb(d) | 0) & -51), d = e) : Fb(d)), e = d) : e = void 0, C(b, c, e))
    };

    function dc(a) {
        if (!Db(a.m)) return a;
        var b = {
                ta: !0
            },
            c = Db(a.m);
        if (c && !b.ta) throw Error("copyRepeatedFields must be true for frozen messages");
        c || Fb(a.m);
        var d = new a.constructor;
        a.Oa && (d.Oa = a.Oa.slice());
        for (var e = a.m, f = 0; f < e.length; f++) {
            var g = e[f];
            if (f === e.length - 1 && Hb(g))
                for (var h in g) {
                    if (Object.prototype.hasOwnProperty.call(g, h)) {
                        var k = +h;
                        r(Number, "isNaN").call(Number, k) ? (d.A || (d.A = d.m[d.X + d.U] = {}))[h] = g[h] : lc(a, d, k, g[h], c, b)
                    }
                } else lc(a, d, f - a.U, g, c, b)
        }
        d.Na = a;
        return d
    };

    function K(a, b, c) {
        null == a && (a = mc);
        mc = null;
        var d = this.constructor.g || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            var h = f ? [f] : [];
            xb(h, 48);
            a = h;
            h = !0
        } else if (h = !!(zb(a) & 16)) g = zb(a), Ab(a, g | 32), g = !!(g & 32);
        e && 0 < a.length && Hb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.U = (f ? 0 : -1) - d;
        this.g = void 0;
        this.m = a;
        a: {
            f = this.m.length;d = f - 1;
            if (f && (f = this.m[d], Hb(f))) {
                this.A = f;
                b = r(Object, "keys").call(Object, f);
                if (f = 0 < b.length) b: {
                    f = isNaN;a = b.length;
                    for (var k = "string" === typeof b ? b.split("") : b, l = 0; l < a; l++)
                        if (l in
                            k && !f.call(void 0, k[l], l, b)) {
                            f = !1;
                            break b
                        }
                    f = !0
                }
                f ? this.X = Number.MAX_VALUE : this.X = d - this.U;
                break a
            }
            void 0 !== b && -1 < b ? (this.X = Math.max(b, d + 1 - this.U), this.A = void 0) : this.X = Number.MAX_VALUE
        }
        if (!e && this.A && "g" in this.A) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = h && !g ? Cb : Bb, h = 0; h < c.length; h++) g = c[h], (d = A(this, g)) ? Array.isArray(d) && e(d) : C(this, g, Mb, !1, !0)
    }
    K.prototype.toJSON = function() {
        var a = this.m;
        return Ib ? a : Qb(a, Rb, Sb)
    };

    function nc(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        mc = b = Eb(b);
        a = new a(b);
        mc = null;
        return a
    }
    K.prototype.Sa = Gb;

    function oc(a, b) {
        return Ob(b)
    }
    var mc;

    function pc(a) {
        return null !== a && void 0 !== a
    }
    var qc = void 0;

    function rc(a, b) {
        var c = qc;
        qc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function sc(a) {
        K.call(this, a, -1, tc)
    }
    w(sc, K);

    function uc(a) {
        K.call(this, a)
    }
    w(uc, K);
    var tc = [2, 3];

    function vc(a, b) {
        this.h = a === wc && b || "";
        this.g = xc
    }
    var xc = {},
        wc = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function yc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function zc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ac(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Bc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Cc;

    function Dc() {
        if (void 0 === Cc) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Sa,
                        createScript: Sa,
                        createScriptURL: Sa
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                Cc = a
            } else Cc = a
        }
        return Cc
    };
    var Ec = {};

    function Fc(a, b) {
        this.g = b === Ec ? a : ""
    }
    Fc.prototype.toString = function() {
        return this.g.toString()
    };

    function Gc(a, b) {
        this.g = b === Hc ? a : ""
    }
    Gc.prototype.toString = function() {
        return this.g + ""
    };

    function Ic(a, b) {
        a = Jc.exec(Kc(a).toString());
        var c = a[3] || "";
        return Lc(a[1] + Mc("?", a[2] || "", b) + Mc("#", c))
    }

    function Kc(a) {
        return a instanceof Gc && a.constructor === Gc ? a.g : "type_error:TrustedResourceUrl"
    }
    var Jc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Hc = {};

    function Lc(a) {
        var b = Dc();
        a = b ? b.createScriptURL(a) : a;
        return new Gc(a, Hc)
    }

    function Mc(a, b, c) {
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

    function Nc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Oc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Pc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Qc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Rc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Sc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Tc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!Ia(f) || Ja(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Ja(f)) {
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
                cb(g ? jb(f) : f, d)
            }
        }
    }

    function Uc(a) {
        this.g = a || x.document || document
    }
    n = Uc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.g;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    n.append = function(a, b) {
        Tc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Vc() {
        return !Wc() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    }

    function Wc() {
        return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    };
    var Xc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Yc = /#|$/;

    function Zc(a, b) {
        var c = a.search(Yc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function $c(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    kb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function ad(a) {
        return $c(a.top) ? a.top : null
    }

    function bd(a, b) {
        var c = cd("SCRIPT", a);
        c.src = Kc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function fd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function gd(a, b) {
        if (!hd() && !id()) {
            var c = Math.random();
            if (c < b) return c = jd(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function jd() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function kd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function ld(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var id = Oc(function() {
            return fb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], md) || 1E-4 > Math.random()
        }),
        hd = Oc(function() {
            return md("MSIE")
        });

    function md(a) {
        return -1 != Xa().indexOf(a)
    }
    var nd = /^([0-9.]+)px$/,
        od = /^(-?[0-9.]{1,30})$/;

    function pd(a) {
        if (!od.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function L(a) {
        return (a = nd.exec(a)) ? +a[1] : null
    }

    function qd(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var rd = Oc(function() {
        return Vc() ? 2 : Wc() ? 1 : 0
    });

    function sd(a, b) {
        kd(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    var td = [];

    function ud() {
        var a = td;
        td = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function vd(a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = cd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }

    function wd(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function xd(a) {
        var b = yd;
        "complete" === b.readyState || "interactive" === b.readyState ? (td.push(a), 1 == td.length && (p.Promise ? p.Promise.resolve().then(ud) : window.setImmediate ? setImmediate(ud) : setTimeout(ud, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function cd(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var zd = null;
    var yd = document,
        M = window;
    var Ad = null;

    function Bd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Ad) {
                Ad = !1;
                try {
                    var d = ad(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Ad = !0);
                    x.localStorage.getItem("google_logging") && (Ad = !0)
                } catch (e) {}
            }
            a = Ad
        }
        a && (d = x.document, a = new vc(wc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Lc(a instanceof vc && a.constructor === vc && a.g === xc ? a.h : "type_error:Const"), bd(d, a))
    };

    function Cd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }

    function Dd(a) {
        return (a = void 0 === a ? Cd() : a) ? $c(a.master) ? a.master : null : null
    };

    function Ed(a) {
        var b = Ea.apply(1, arguments);
        if (0 === b.length) return Lc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Lc(c.join(""))
    };

    function Fd(a) {
        var b = void 0 === b ? 1 : b;
        a = Dd(Cd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function Gd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Hd() {
        var a = void 0 === a ? M : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Id(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Jd = {
        Qb: 0,
        Pb: 1,
        Mb: 2,
        Hb: 3,
        Nb: 4,
        Ib: 5,
        Ob: 6,
        Kb: 7,
        Lb: 8,
        Gb: 9,
        Jb: 10
    };
    var Kd = {
        Sb: 0,
        Tb: 1,
        Rb: 2
    };

    function Ld() {
        this.h = new Md(this);
        this.g = 0
    }
    Ld.prototype.resolve = function(a) {
        Nd(this);
        this.g = 1;
        this.j = a;
        Od(this.h)
    };
    Ld.prototype.reject = function(a) {
        Nd(this);
        this.g = 2;
        this.i = a;
        Od(this.h)
    };

    function Nd(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }

    function Md(a) {
        this.g = a
    }
    Md.prototype.then = function(a, b) {
        if (this.h) throw Error("Then functions already set.");
        this.h = a;
        this.i = b;
        Od(this)
    };

    function Od(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Pd(a) {
        this.g = a.slice(0)
    }
    n = Pd.prototype;
    n.forEach = function(a) {
        var b = this;
        this.g.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new Pd(db(this.g, a))
    };
    n.apply = function(a) {
        return new Pd(a(this.g.slice(0)))
    };
    n.sort = function(a) {
        return new Pd(this.g.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.g[a]
    };
    n.add = function(a) {
        var b = this.g.slice(0);
        b.push(a);
        return new Pd(b)
    };

    function Qd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Rd() {
        this.g = {};
        this.h = {}
    }
    Rd.prototype.set = function(a, b) {
        var c = Sd(a);
        this.g[c] = b;
        this.h[c] = a
    };
    Rd.prototype.get = function(a, b) {
        a = Sd(a);
        return void 0 !== this.g[a] ? this.g[a] : b
    };
    Rd.prototype.clear = function() {
        this.g = {};
        this.h = {}
    };

    function Sd(a) {
        return a instanceof Object ? String(Ka(a)) : a + ""
    };

    function Td(a, b) {
        this.g = a;
        this.h = b
    }

    function Ud(a) {
        return null != a.g ? a.g.value : null
    }

    function Vd(a, b) {
        null != a.g && b(a.g.value);
        return a
    }
    Td.prototype.map = function(a) {
        return null != this.g ? (a = a(this.g.value), a instanceof Td ? a : Wd(a)) : this
    };

    function Xd(a, b) {
        null != a.g || b(a.h);
        return a
    }

    function Wd(a) {
        return new Td({
            value: a
        }, null)
    }

    function Yd(a) {
        return new Td(null, a)
    }

    function Zd(a) {
        try {
            return Wd(a())
        } catch (b) {
            return Yd(b)
        }
    };

    function $d(a) {
        this.g = new Rd;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    $d.prototype.add = function(a) {
        this.g.set(a, !0)
    };
    $d.prototype.contains = function(a) {
        return void 0 !== this.g.g[Sd(a)]
    };

    function ae() {
        this.g = new Rd
    }
    ae.prototype.set = function(a, b) {
        var c = this.g.get(a);
        c || (c = new $d, this.g.set(a, c));
        c.add(b)
    };

    function N(a) {
        K.call(this, a, -1, be)
    }
    w(N, K);
    N.prototype.getId = function() {
        return A(this, 3)
    };
    var be = [4];

    function ce(a) {
        var b = void 0 === a.Ja ? void 0 : a.Ja,
            c = void 0 === a.pb ? void 0 : a.pb,
            d = void 0 === a.Wa ? void 0 : a.Wa;
        this.g = void 0 === a.ib ? void 0 : a.ib;
        this.j = new Pd(b || []);
        this.i = d;
        this.h = c
    };

    function de(a) {
        var b = [],
            c = a.j;
        c && c.g.length && b.push({
            aa: "a",
            fa: ee(c)
        });
        null != a.g && b.push({
            aa: "as",
            fa: a.g
        });
        null != a.h && b.push({
            aa: "i",
            fa: String(a.h)
        });
        null != a.i && b.push({
            aa: "rp",
            fa: String(a.i)
        });
        b.sort(function(d, e) {
            return d.aa.localeCompare(e.aa)
        });
        b.unshift({
            aa: "t",
            fa: "aa"
        });
        return b
    }

    function ee(a) {
        a = a.g.slice(0).map(fe);
        a = JSON.stringify(a);
        return ld(a)
    }

    function fe(a) {
        var b = {};
        null != A(a, 7) && (b.q = A(a, 7));
        null != A(a, 2, !1) && (b.o = A(a, 2));
        null != A(a, 5, !1) && (b.p = A(a, 5));
        return b
    };

    function ge(a) {
        K.call(this, a)
    }
    w(ge, K);
    ge.prototype.setLocation = function(a) {
        return C(this, 1, a)
    };

    function he(a, b) {
        this.La = a;
        this.Va = b
    }

    function ie(a) {
        var b = [].slice.call(arguments).filter(Nc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.La || []);
            d = r(Object, "assign").call(Object, d, e.Va)
        });
        return new he(c, d)
    }

    function je(a) {
        switch (a) {
            case 1:
                return new he(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new he(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new he(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new he(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ke(a) {
        if (null == a) a = null;
        else {
            var b = de(a);
            a = [];
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.fa);
                a.push(c.aa + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new he(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var le = {},
        me = new he(["google-auto-placed"], (le.google_reactive_ad_format = 40, le.google_tag_origin = "qs", le));

    function ne(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = cd("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = bb(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                Rc(d, "load", e);
                Rc(d, "error", e)
            };
            Qc(d, "load", e);
            Qc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function oe(a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        kd(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        pe(c, b)
    }

    function pe(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : ne(c, a, void 0 === b ? !1 : b)
    };

    function qe() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function re(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function se(a, b, c, d, e) {
        var f = [];
        kd(a, function(g, h) {
            (g = te(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function te(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(te(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(se(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ue(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = ve(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = se(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function ve(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function we() {
        this.g = Math.random()
    }

    function xe() {
        var a = ye,
            b = x.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function ze(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof qe) var f = c;
            else f = new qe, kd(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = re(k, h);
                l.g.push(m);
                l.h[m] = h
            });
            var g = ue(f, "/pagead/gen_204?id=" + b + "&");
            g && ne(x, g, !1)
        } catch (h) {}
    };
    var Ae = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Be() {
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
        this.floatingAdsStacking = new Ce;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function De(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new Be;
        return a.google_reactive_ads_global_state
    }

    function Ce() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Ee(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Fe(a) {
        return Ee(a).clientWidth
    };

    function Ge(a) {
        a = a.getBoundingClientRect();
        return 0 < a.width && 0 < a.height
    }

    function He(a) {
        var b = 0;
        a.forEach(function(c) {
            return b = Math.max(b, c.getBoundingClientRect().width)
        });
        return function(c) {
            return c.getBoundingClientRect().width > .5 * b
        }
    }

    function Ie(a) {
        var b = Ee(a).clientHeight || 0;
        return function(c) {
            return c.getBoundingClientRect().height >= .75 * b
        }
    }

    function Je(a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top
    };

    function Ke(a) {
        K.call(this, a)
    }
    w(Ke, K);

    function Le(a) {
        K.call(this, a)
    }
    w(Le, K);

    function Me(a) {
        K.call(this, a, -1, Ne)
    }
    w(Me, K);

    function Oe(a) {
        K.call(this, a)
    }
    w(Oe, K);
    var Ne = [1];

    function Pe(a) {
        K.call(this, a, -1, Qe)
    }
    w(Pe, K);

    function Re(a) {
        K.call(this, a)
    }
    w(Re, K);
    var Qe = [1];

    function Se(a) {
        K.call(this, a)
    }
    w(Se, K);

    function Ue(a) {
        K.call(this, a)
    }
    w(Ue, K);

    function Ve(a) {
        K.call(this, a, -1, We)
    }
    w(Ve, K);
    var We = [6, 7, 9, 10, 11];

    function Xe(a, b, c, d) {
        this.j = a;
        this.h = b;
        this.i = c;
        this.g = d
    }
    Xe.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.j)
        } catch (f) {}
        if (!b.length) return [];
        a = jb(b);
        a = Ye(this, a);
        "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.i) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Ze(a[c]),
                    e = this.i;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Xe.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.j,
            occurrenceIndex: this.h,
            paragraphIndex: this.i,
            ignoreMode: this.g
        })
    };

    function Ye(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Ze(a) {
        var b = [];
        Qd(a.getElementsByTagName("p"), function(c) {
            100 <= $e(c) && b.push(c)
        });
        return b
    }

    function $e(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Qd(a.childNodes, function(c) {
            b += $e(c)
        });
        return b
    }

    function af(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function bf(a) {
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
    };

    function O(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function cf(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function df(a, b) {
        b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var ef = new O(1082, !0),
        ff = new O(1209),
        gf = new cf(1130, 100),
        hf = new function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        jf = new O(316),
        kf = new O(1207),
        lf = new O(313),
        mf = new O(369),
        nf = new O(1213),
        of = new O(1129, !0),
        pf = new O(1128),
        qf = new O(1171),
        rf = new O(1201, !0),
        sf = new O(217),
        tf = new O(1212),
        uf = new O(1211),
        vf = new O(1198),
        wf = new O(1206, !0),
        xf = new O(1210),
        yf = new O(1086),
        zf = new cf(1079, 5),
        Af = new df(1934, ["A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A+zsdH3aNZT/bkjT8U/o5ACzyaeNYzTvtoVmwf/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ/BdfVnbM/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Bf = new O(203),
        Cf = new O(84),
        Df = new O(1162),
        Ef = new O(1120),
        Ff = new cf(1114, 1),
        Gf = new cf(1110, 5),
        Hf = new cf(1111, 5),
        If = new cf(1112, 5),
        Jf = new cf(1113, 5),
        Kf = new cf(1104),
        Lf = new cf(1108),
        Mf = new cf(1106),
        Nf = new cf(1107),
        Of = new cf(1105),
        Pf = new cf(1115, -1),
        Qf = new O(1928),
        Rf = new O(1941),
        Sf = new O(370946349),
        Tf = new O(392736476),
        Uf = new cf(406149835),
        Vf = new df(1932),
        Wf = new cf(1935);

    function P(a) {
        var b = "va";
        if (a.va && a.hasOwnProperty(b)) return a.va;
        b = new a;
        return a.va = b
    };

    function Xf() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function() {}
    }

    function Q(a) {
        return P(Xf).h(a.g, a.defaultValue)
    }

    function Yf(a) {
        return P(Xf).i(a.g, a.defaultValue)
    }

    function Zf() {
        return P(Xf).j(hf.g, hf.defaultValue)
    };

    function $f(a, b, c) {
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
        bf(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function ag(a, b, c) {
        function d(f) {
            f = bg(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = bg(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: cg(a.previousSibling, e),
                    ma: function(f) {
                        return cg(f.previousSibling, e)
                    },
                    pa: 0
                };
            case 2:
                return {
                    init: cg(a.lastChild, e),
                    ma: function(f) {
                        return cg(f.previousSibling, e)
                    },
                    pa: 0
                };
            case 3:
                return {
                    init: cg(a.nextSibling, d),
                    ma: function(f) {
                        return cg(f.nextSibling, d)
                    },
                    pa: 3
                };
            case 1:
                return {
                    init: cg(a.firstChild, d),
                    ma: function(f) {
                        return cg(f.nextSibling, d)
                    },
                    pa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function bg(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function cg(a, b) {
        return a && b(a) ? a : null
    };
    var dg = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function eg(a) {
        return "string" === typeof a
    }

    function fg(a) {
        return void 0 === a
    };

    function gg(a) {
        K.call(this, a, -1, hg)
    }
    w(gg, K);
    var hg = [2, 8],
        ig = [3, 4, 5],
        jg = [6, 7];
    var kg;
    kg = {
        Ub: 0,
        eb: 3,
        fb: 4,
        gb: 5
    };
    var lg = kg.eb,
        mg = kg.fb,
        ng = kg.gb;

    function og(a) {
        return null != a ? !a : a
    }

    function pg(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function qg(a, b) {
        var c = F(a, gg, 2);
        if (!c.length) return rg(a, b);
        a = D(a, 1);
        if (1 === a) return og(qg(c[0], b));
        c = eb(c, function(d) {
            return function() {
                return qg(d, b)
            }
        });
        switch (a) {
            case 2:
                return pg(c, !1);
            case 3:
                return pg(c, !0)
        }
    }

    function rg(a, b) {
        var c = cc(a, ig);
        a: {
            switch (c) {
                case lg:
                    var d = D(a, Vb(a, ig, 3));
                    break a;
                case mg:
                    d = D(a, Vb(a, ig, 4));
                    break a;
                case ng:
                    d = D(a, Vb(a, ig, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ka(Zb(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = J(a, Vb(a, jg, 7));
            else a: {
                switch (c) {
                    case mg:
                        a = jc(a, Vb(a, jg, 6));
                        break a;
                    case ng:
                        a = J(a, Vb(a, jg, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Va(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return eg(a) && eg(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Va(String(e), a);
                    case 11:
                        return null != e && 1 === Va(String(e), a)
                }
            }
        }
    }

    function sg(a, b) {
        return !a || !(!b || !qg(a, b))
    };

    function tg(a) {
        K.call(this, a, -1, ug)
    }
    w(tg, K);
    var ug = [4];

    function vg(a) {
        K.call(this, a)
    }
    w(vg, K);

    function wg(a) {
        K.call(this, a, -1, xg)
    }
    w(wg, K);
    var xg = [5],
        yg = [1, 2, 3, 6, 7];

    function zg(a) {
        K.call(this, a, -1, Ag)
    }
    w(zg, K);
    zg.prototype.V = function() {
        return D(this, 1)
    };

    function Bg(a, b) {
        return C(a, 1, b)
    }

    function Cg(a, b) {
        return $b(a, 2, b)
    }
    var Ag = [2];

    function Dg(a) {
        K.call(this, a)
    }
    w(Dg, K);

    function Eg(a) {
        var b = new Dg;
        return C(b, 1, a)
    };

    function Fg(a) {
        K.call(this, a)
    }
    w(Fg, K);
    Fg.prototype.getWidth = function() {
        return I(A(this, 1), 0)
    };

    function Gg(a, b) {
        return C(a, 1, b)
    }
    Fg.prototype.getHeight = function() {
        return I(A(this, 2), 0)
    };

    function Hg(a, b) {
        return C(a, 2, b)
    };

    function Ig(a) {
        K.call(this, a)
    }
    w(Ig, K);

    function Jg(a, b) {
        return fc(a, 1, b)
    }

    function Kg(a, b) {
        return fc(a, 2, b)
    }

    function Lg(a, b) {
        fc(a, 3, b)
    };

    function Mg(a) {
        K.call(this, a)
    }
    w(Mg, K);

    function Ng(a) {
        K.call(this, a)
    }
    w(Ng, K);

    function Og(a, b) {
        return gc(a, 4, Pg, b)
    }

    function Qg(a, b) {
        return gc(a, 9, Pg, b)
    }
    var Pg = [4, 8, 5, 6, 9];

    function Rg(a) {
        K.call(this, a, -1, Sg)
    }
    w(Rg, K);

    function Tg(a, b) {
        return fc(a, 1, b)
    }

    function Ug(a, b) {
        return hc(a, 2, b)
    }

    function Vg(a, b) {
        return $b(a, 4, b)
    }

    function Wg(a, b) {
        return hc(a, 5, b)
    }

    function Xg(a, b) {
        return ac(a, 6, b)
    }

    function Yg(a) {
        K.call(this, a)
    }
    w(Yg, K);
    Yg.prototype.V = function() {
        return D(this, 1)
    };

    function Zg(a, b) {
        return ac(a, 1, b)
    }

    function $g(a, b) {
        return ac(a, 2, b)
    }

    function ah(a) {
        K.call(this, a)
    }
    w(ah, K);
    var Sg = [2, 4, 5],
        bh = [1, 2];

    function ch(a) {
        K.call(this, a, -1, dh)
    }
    w(ch, K);

    function eh(a) {
        K.call(this, a, -1, fh)
    }
    w(eh, K);
    var dh = [2, 3],
        fh = [5],
        gh = [1, 2, 3, 4];

    function hh(a) {
        K.call(this, a)
    }
    w(hh, K);
    hh.prototype.getTagSessionCorrelator = function() {
        return I(A(this, 2), 0)
    };

    function ih(a) {
        var b = new hh;
        return gc(b, 4, jh, a)
    }
    var jh = [4, 5, 7];

    function kh(a) {
        a.Xa.apply(a, ka(Ea.apply(1, arguments).map(function(b) {
            return {
                cb: 4,
                message: b
            }
        })))
    }

    function lh(a) {
        a.Xa.apply(a, ka(Ea.apply(1, arguments).map(function(b) {
            return {
                cb: 7,
                message: b
            }
        })))
    };

    function mh(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.cb] = b.message.toJSON(), c)]
        })])
    };

    function nh(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function oh(a, b, c, d) {
        this.v = a;
        this.u = b;
        this.B = c;
        this.l = d;
        this.g = 1;
        this.j = [];
        this.h = [];
        this.i = null
    }

    function ph(a, b, c, d) {
        if (3 !== a.g) {
            if (1 === a.g) {
                a.g = 2;
                var e = function() {
                    a.g = 3;
                    for (var f = v(a.j), g = f.next(); !g.done; g = f.next()) g = g.value, g();
                    c()
                };
                b.document.visibilityState ? b.document.addEventListener("visibilitychange", function() {
                    "hidden" === b.document.visibilityState && e();
                    "visible" === b.document.visibilityState && (a.g = 2)
                }) : "onpagehide" in b ? (b.addEventListener("pagehide", e), b.addEventListener("pageshow", function() {
                    a.g = 2
                })) : b.addEventListener("unload", e)
            }
            d && a.j.push(d)
        }
    }

    function qh(a) {
        if (a.h.length) {
            var b = mh(a.h);
            a.u(a.v + "?e=1", b);
            a.h = [];
            a.i = null
        }
    }
    oh.prototype.Xa = function() {
        var a = this;
        this.h.push.apply(this.h, ka(Ea.apply(0, arguments)));
        this.h.length >= this.l ? (null !== this.i && clearTimeout(this.i), qh(this)) : null === this.i && (this.i = setTimeout(function() {
            qh(a)
        }, this.B))
    };

    function rh(a, b, c) {
        ph(a, b, function() {
            qh(a)
        }, c)
    }

    function sh(a, b) {
        oh.call(this, "https://pagead2.googlesyndication.com/pagead/ping", nh, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    }
    w(sh, oh);

    function th(a, b, c) {
        var d = void 0 === d ? new sh(b) : d;
        this.h = a;
        this.l = c;
        this.i = d;
        this.g = [];
        this.j = 0 < this.h && jd() < 1 / this.h
    }

    function uh(a, b, c, d, e, f) {
        var g = $g(Zg(new Yg, b), c);
        b = Xg(Ug(Tg(Wg(Vg(new Rg, d), e), g), a.g), f);
        b = ih(b);
        a.j && kh(a.i, vh(a, b));
        if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                return h.V() === g.V() && D(h, 2) === c
            })) a.g.push(g), 100 < a.g.length && a.g.shift()
    }

    function wh(a, b, c, d) {
        if (a.l) {
            var e = new ch;
            b = hc(e, 2, b);
            c = hc(b, 3, c);
            d && ac(c, 1, d);
            d = new hh;
            d = gc(d, 7, jh, c);
            a.j && kh(a.i, vh(a, d))
        }
    }

    function vh(a, b) {
        b = ac(b, 1, Date.now());
        var c = wd(window);
        b = ac(b, 2, c);
        return ac(b, 6, a.h)
    };

    function xh() {
        var a = {};
        this.g = (a[lg] = {}, a[mg] = {}, a[ng] = {}, a)
    };
    var yh = /^true$/.test("false");

    function zh(a, b) {
        switch (b) {
            case 1:
                return D(a, Vb(a, yg, 1));
            case 2:
                return D(a, Vb(a, yg, 2));
            case 3:
                return D(a, Vb(a, yg, 3));
            case 6:
                return D(a, Vb(a, yg, 6));
            default:
                return null
        }
    }

    function Ah(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return ic(a, 1);
            case 7:
                return J(a, 3);
            case 2:
                return jc(a, 2);
            case 3:
                return J(a, 3);
            case 6:
                return Zb(a, 4);
            default:
                return null
        }
    }
    var Bh = Oc(function() {
        if (!yh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Ch(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        P(Dh).i[e] = null != (g = null == (f = P(Dh).i[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = Bh();
        if (null != e[b]) return e[b];
        b = Eh(d)[b];
        if (!b) return c;
        b = new wg(b);
        b = Fh(b);
        a = Ah(b, a);
        return null != a ? a : c
    }

    function Fh(a) {
        var b = P(xh).g;
        if (b) {
            var c = hb(F(a, vg, 5), function(d) {
                return sg(E(d, gg, 1), b)
            });
            if (c) return E(c, tg, 2)
        }
        return E(a, tg, 4)
    }

    function Dh() {
        this.h = {};
        this.j = [];
        this.i = {};
        this.g = new p.Map
    }

    function Gh(a, b, c) {
        return !!Ch(1, a, void 0 === b ? !1 : b, c)
    }

    function Hh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Ch(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Ih(a, b, c) {
        return Ch(3, a, void 0 === b ? "" : b, c)
    }

    function Jh(a, b, c) {
        b = void 0 === b ? [] : b;
        return Ch(6, a, b, c)
    }

    function Eh(a) {
        return P(Dh).h[a] || (P(Dh).h[a] = {})
    }

    function Kh(a, b) {
        var c = Eh(b);
        kd(a, function(d, e) {
            return c[e] = d
        })
    }

    function Lh(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        cb(b, function(h) {
            var k = Eh(h);
            cb(a, function(l) {
                var m = cc(l, yg),
                    q = zh(l, m);
                if (q) {
                    var u, y, G;
                    var B = null != (G = null == (u = P(Dh).g.get(h)) ? void 0 : null == (y = u.get(q)) ? void 0 : y.slice(0)) ? G : [];
                    a: {
                        u = new eh;
                        switch (m) {
                            case 1:
                                bc(u, 1, gh, q);
                                break;
                            case 2:
                                bc(u, 2, gh, q);
                                break;
                            case 3:
                                bc(u, 3, gh, q);
                                break;
                            case 6:
                                bc(u, 4, gh, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        $b(u, 5, B);m = u
                    }
                    if (B = m) {
                        var H;
                        B = !(null == (H = P(Dh).i[h]) || !H.has(q))
                    }
                    B && f.push(m);
                    if (H = m) {
                        var T;
                        H = !(null == (T = P(Dh).g.get(h)) ||
                            !T.has(q))
                    }
                    H && g.push(m);
                    e || (T = P(Dh), T.g.has(h) || T.g.set(h, new p.Map), T.g.get(h).has(q) || T.g.get(h).set(q, []), d && T.g.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && wh(c, f, g, null != d ? d : void 0)
    }

    function Mh(a, b) {
        var c = Eh(b);
        cb(a, function(d) {
            var e = new wg(d),
                f = cc(e, yg);
            (e = zh(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Nh() {
        return eb(r(Object, "keys").call(Object, P(Dh).h), function(a) {
            return Number(a)
        })
    }

    function Oh(a) {
        ib(P(Dh).j, a) || Kh(Eh(4), a)
    };

    function Ph(a) {
        this.methodName = a
    }
    var Qh = new Ph(1),
        Rh = new Ph(16),
        Sh = new Ph(15),
        Th = new Ph(2),
        Uh = new Ph(3),
        Vh = new Ph(4),
        Wh = new Ph(5),
        Xh = new Ph(6),
        Yh = new Ph(7),
        ci = new Ph(8),
        di = new Ph(9),
        ei = new Ph(10),
        fi = new Ph(11),
        gi = new Ph(12),
        hi = new Ph(13),
        ii = new Ph(14);

    function ji(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function ki(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function li(a) {
        ji(Wh, Gh, a);
        ji(Xh, Hh, a);
        ji(Yh, Ih, a);
        ji(ci, Jh, a);
        ji(hi, Mh, a);
        ji(Sh, Oh, a)
    }

    function mi(a) {
        ji(Vh, function(b) {
            P(xh).g = b
        }, a);
        ji(di, function(b, c) {
            var d = P(xh);
            d.g[lg][b] || (d.g[lg][b] = c)
        }, a);
        ji(ei, function(b, c) {
            var d = P(xh);
            d.g[mg][b] || (d.g[mg][b] = c)
        }, a);
        ji(fi, function(b, c) {
            var d = P(xh);
            d.g[ng][b] || (d.g[ng][b] = c)
        }, a);
        ji(ii, function(b) {
            for (var c = P(xh), d = v([lg, mg, ng]), e = d.next(); !e.done; e = d.next()) e = e.value, r(Object, "assign").call(Object, c.g[e], b[e])
        }, a)
    }

    function ni(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function oi() {
        this.i = function() {};
        this.g = function() {};
        this.j = function() {
            return []
        };
        this.h = function() {
            return []
        }
    }

    function pi(a, b, c) {
        a.i = ki(Qh, b, function() {});
        a.j = function(d) {
            return ki(Th, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return ki(Uh, b, function() {
                return []
            })(c)
        };
        a.g = function(d) {
            ki(Rh, b, function() {})(d, c)
        }
    };

    function qi(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function ri(a) {
        return !!(a.error && a.meta && a.id)
    };
    var si = null;

    function ti() {
        if (null === si) {
            si = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    si = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return si
    };

    function ui() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function vi() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function wi(a, b) {
        var c = vi() || ui();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var xi = x.performance,
        yi = !!(xi && xi.mark && xi.measure && xi.clearMarks),
        zi = Oc(function() {
            var a;
            if (a = yi) a = ti(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Ai() {
        this.h = [];
        this.i = x || x;
        var a = null;
        x && (x.google_js_reporting_queue = x.google_js_reporting_queue || [], this.h = x.google_js_reporting_queue, a = x.google_measure_js_timing);
        this.g = zi() || (null != a ? a : 1 > Math.random())
    }

    function Bi(a) {
        a && xi && zi() && (xi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), xi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Ai.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new wi(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        xi && zi() && xi.mark(b);
        return a
    };
    Ai.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (vi() || ui()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            xi && zi() && xi.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    };

    function Ci(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && $c(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Di(a, b) {
        do {
            var c = fd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Ei(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = L(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Fi(a, b) {
        return !((od.test(b.google_ad_width) || nd.test(a.style.width)) && (od.test(b.google_ad_height) || nd.test(a.style.height)))
    }

    function Gi(a, b) {
        return (a = Hi(a, b)) ? a.y : 0
    }

    function Hi(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Ii(a) {
        var b = 0,
            c;
        for (c in dg) - 1 != a.indexOf(c) && (b |= dg[c]);
        return b
    }

    function Ji(a, b, c, d, e) {
        if (a !== a.top) return ad(a) ? 3 : 16;
        if (!(488 > Fe(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Fe(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Fe(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = fd(b, a)) && (e = L(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Ki(a, b, c, d) {
        var e = Ji(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || Di(c, b) ? (b = Fe(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Li(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Mi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = fd(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Ni(a, b, c) {
        a = Hi(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Oi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = fd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Li(b, c, "0px");
            b.style.width = Fe(a) + "px";
            if (0 !== Ni(a, b, c)) {
                Li(b, c, "0px");
                var d = Ni(a, b, c);
                Li(b, c, -1 * d + "px");
                a = Ni(a, b, c);
                0 !== a && a !== d && Li(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Pi(a, b) {
        this.K = a;
        this.i = b
    }
    Pi.prototype.height = function() {
        return this.i
    };
    Pi.prototype.g = function(a) {
        return 300 < a && 300 < this.i ? this.K : Math.min(1200, Math.round(a))
    };
    Pi.prototype.h = function() {};

    function Qi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = fd(a, b)) && e[c] && d(e[c]) || null
    }

    function Ri(a) {
        return function(b) {
            return b.K <= a
        }
    }

    function Si(a, b, c, d) {
        var e = a && Ti(c, b),
            f = Ui(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Vi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Ti(a, b) {
        return Gi(a, b) < Ee(b).clientHeight - 100
    }

    function Wi(a, b) {
        var c = Qi(b, a, "height", L);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Qi(b, a, "height", L);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && L(b.style.height)) && (c = Math.min(c, d)), (d = Qi(b, a, "maxHeight", L)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Ui(a, b) {
        var c = 0 == Gd(a);
        return b && c ? Math.max(250, 2 * Ee(a).clientHeight / 3) : 250
    };
    var R = {},
        Xi = (R.google_ad_channel = !0, R.google_ad_client = !0, R.google_ad_host = !0, R.google_ad_host_channel = !0, R.google_adtest = !0, R.google_tag_for_child_directed_treatment = !0, R.google_tag_for_under_age_of_consent = !0, R.google_tag_partner = !0, R.google_restrict_data_processing = !0, R.google_page_url = !0, R.google_debug_params = !0, R.google_shadow_mode = !0, R.google_adbreak_test = !0, R.google_ad_frequency_hint = !0, R.google_admob_interstitial_slot = !0, R.google_admob_rewarded_slot = !0, R.google_admob_ads_only = !0, R.google_max_ad_content_rating = !0, R.google_traffic_source = !0, R),
        Yi = RegExp("(^| )adsbygoogle($| )");

    function Zi(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Sc(d.bc);
            a[e] = d.value
        }
    };
    var $i = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function aj() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? Ed($i) : c;
        this.i = a;
        this.g = null;
        this.j = !1;
        this.u = Math.random();
        this.l = b;
        this.h = this.H;
        this.v = c
    }
    n = aj.prototype;
    n.Ya = function(a) {
        this.g = a
    };
    n.ab = function(a) {
        this.j = a
    };
    n.Za = function(a) {
        this.h = a
    };
    n.H = function(a, b, c, d, e) {
        c = void 0 === c ? this.l : c;
        e = void 0 === e ? this.i : e;
        if ((this.j ? this.u : Math.random()) > c) return !1;
        ri(b) || (b = new qi(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (bd(x.document, Lc(Kc(this.v).toString())), x.error_rep_loaded = !0);
        return !1
    };
    n.qa = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.h(a, d, this.l, c, this.i)) throw d;
        }
    };
    n.Ta = function(a, b) {
        var c = this;
        return function() {
            var d = Ea.apply(0, arguments);
            return c.qa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.Ua = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.H(a, d instanceof Error ? d : Error(d), void 0, c.g || void 0)
        })
    };

    function bj(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function cj(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = vi(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && bj(r(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (vi() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
                        1
                }), f)
            }
            return l
        }
    }

    function dj(a, b) {
        return cj(a, b, function(c, d) {
            (new aj).H(c, d)
        }, void 0, !1)
    };

    function ej(a, b, c) {
        return cj(a, b, void 0, c, !0).apply()
    }

    function fj(a) {
        if (!a) return null;
        var b = A(a, 7);
        if (A(a, 1) || a.getId() || 0 < Zb(a, 4).length) {
            b = Zb(a, 4);
            var c = A(a, 3),
                d = A(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + af(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + af(b[c]);
            a = (b = e) ? new Xe(b, A(a, 2), A(a, 5), gj(A(a, 6))) : null
        } else a = b ? new Xe(b, A(a, 2), A(a, 5), gj(A(a, 6))) : null;
        return a
    }
    var hj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function gj(a) {
        return null == a ? a : hj[a]
    }
    var ij = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function jj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function kj(a) {
        a = jj(a);
        return a.optimization = a.optimization || {}
    };

    function lj(a) {
        K.call(this, a)
    }
    w(lj, K);
    lj.prototype.getName = function() {
        return A(this, 4)
    };

    function mj(a) {
        K.call(this, a)
    }
    w(mj, K);

    function nj(a) {
        K.call(this, a)
    }
    w(nj, K);

    function oj(a) {
        K.call(this, a)
    }
    w(oj, K);
    var pj = [1, 2, 3];

    function qj(a) {
        K.call(this, a, -1, rj)
    }
    w(qj, K);

    function sj(a) {
        K.call(this, a)
    }
    w(sj, K);

    function tj(a) {
        K.call(this, a)
    }
    w(tj, K);
    var rj = [1, 4],
        uj = [1, 2];

    function vj(a) {
        K.call(this, a, -1, wj)
    }
    w(vj, K);

    function xj(a) {
        K.call(this, a)
    }
    w(xj, K);

    function yj(a) {
        K.call(this, a, -1, zj)
    }
    w(yj, K);

    function Aj(a) {
        K.call(this, a)
    }
    w(Aj, K);

    function Bj(a) {
        K.call(this, a)
    }
    w(Bj, K);

    function Cj(a) {
        K.call(this, a)
    }
    w(Cj, K);

    function Dj(a) {
        K.call(this, a)
    }
    w(Dj, K);
    var wj = [1, 2, 5, 7],
        zj = [2, 5, 6, 11];

    function Ej(a) {
        K.call(this, a)
    }
    w(Ej, K);

    function Fj(a) {
        switch (A(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = E(a, N, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new ce({
                    Ja: [b],
                    Wa: a
                }));
                return null != b ? Wd(b) : Yd(Error("Missing dimension when creating placement id"));
            case 3:
                return Yd(Error("Missing dimension when creating placement id"));
            default:
                return Yd(Error("Invalid type: " + A(a, 8)))
        }
    };

    function Gj(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function Hj(a, b) {
        this.h = a;
        this.g = b
    }

    function Ij(a, b) {
        var c = new ae,
            d = new $d;
        b.forEach(function(e) {
            if (kc(e, mj, 1, pj)) {
                e = kc(e, mj, 1, pj);
                if (E(e, Se, 1) && E(E(e, Se, 1), N, 1) && E(e, Se, 2) && E(E(e, Se, 2), N, 1)) {
                    var f = Jj(a, E(E(e, Se, 1), N, 1)),
                        g = Jj(a, E(E(e, Se, 2), N, 1));
                    if (f && g)
                        for (f = v(Gj({
                                anchor: f,
                                position: A(E(e, Se, 1), 2)
                            }, {
                                anchor: g,
                                position: A(E(e, Se, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ka(g.anchor), g.position)
                }
                E(e, Se, 3) && E(E(e, Se, 3), N, 1) && (f = Jj(a, E(E(e, Se, 3), N, 1))) && c.set(Ka(f), A(E(e, Se, 3), 2))
            } else kc(e, nj, 2, pj) ? Kj(a, kc(e, nj, 2, pj), c) : kc(e,
                oj, 3, pj) && Lj(a, kc(e, oj, 3, pj), d)
        });
        return new Hj(c, d)
    }

    function Kj(a, b, c) {
        E(b, Se, 2) ? (b = E(b, Se, 2), (a = Jj(a, E(b, N, 1))) && c.set(Ka(a), A(b, 2))) : E(b, N, 1) && (a = Mj(a, E(b, N, 1))) && a.forEach(function(d) {
            d = Ka(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Lj(a, b, c) {
        E(b, N, 1) && (a = Mj(a, E(b, N, 1))) && a.forEach(function(d) {
            c.add(Ka(d))
        })
    }

    function Jj(a, b) {
        return (a = Mj(a, b)) && 0 < a.length ? a[0] : null
    }

    function Mj(a, b) {
        return (b = fj(b)) ? b.query(a) : null
    };

    function Nj() {
        this.g = new p.Set
    }

    function Oj(a) {
        a = Pj(a);
        return a.has("all") || a.has("after")
    }

    function Qj(a) {
        a = Pj(a);
        return a.has("all") || a.has("before")
    }

    function Rj(a, b, c) {
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
            if (Sj(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.g.add(d)
        });
        return !1
    }

    function Sj(a) {
        var b = Pj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Pj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function Tj(a, b) {
        if (!a) return !1;
        a = fd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Uj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Vj(a) {
        return !!a.nextSibling || !!a.parentNode && Vj(a.parentNode)
    };

    function Wj(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Xj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Xj(a) {
        var b = "";
        kd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function Yj(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function Zj(a) {
        var b = Yj(a);
        return b ? db(eb(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function ak(a, b) {
        return jb(a.document.querySelectorAll(b))
    }

    function bk(a) {
        var b = [];
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function ck(a, b, c, d, e) {
        this.g = a;
        this.G = b;
        this.h = c;
        this.l = e || null;
        this.u = (this.B = d) ? Ij(a.document, F(d, lj, 5)) : Ij(a.document, []);
        this.v = new Nj;
        this.i = 0;
        this.j = !1
    }

    function dk(a, b) {
        if (a.j) return !0;
        a.j = !0;
        var c = F(a.h, Ve, 1);
        a.i = 0;
        var d = ek(a.B);
        if (Wj(a.g.location, "google_audio_sense")) {
            var e = new Ke;
            e = C(e, 1, 1);
            var f = new Le;
            f = C(f, 2, !0);
            e = fc(e, 2, f);
            f = new Me;
            var g = new Oe;
            var h = C(g, 1, 1);
            Nb(f);
            g = ec(f, Oe, 1, void 0, !1);
            h = null != h ? h : new Oe;
            var k = Xb(f, 1, 2);
            g.push(h);
            k.push(h.m);
            Db(h.m) && yb(k, 8);
            e = fc(e, 3, f)
        } else e = E(a.h, Ke, 27);
        if (f = e) {
            var l;
            e = (null == (l = E(a.h, Pe, 6)) ? void 0 : F(l, Re, 1)) || [];
            l = a.g;
            var m;
            if (1 == D(f, 1) && null != (m = E(f, Le, 2)) && ic(m, 2) && 0 != e.length) {
                m = [];
                e = v(e);
                for (f =
                    e.next(); !f.done; f = e.next())
                    if (f = fj(E(f.value, N, 1) || null)) f = f.query(l.document), 0 < f.length && m.push(f[0]);
                m = m.filter(Ge).filter(He(m)).filter(Ie(l));
                m.sort(Je);
                if (m = m[0] || null) e = l.document.createElement("div"), e.id = "google-auto-placed-read-aloud-player-reserved", sd(e, {
                    width: "100%",
                    height: "65px"
                }), m.insertBefore(e, m.firstChild), jj(l).audioSenseSpaceReserved = !0
            }
        }
        m = a.g;
        try {
            var q = m.localStorage.getItem("google_ama_settings");
            var u = q ? nc(Ej, q) : null
        } catch (dd) {
            u = null
        }
        l = null !== u && ic(u, 2, !1);
        u = jj(m);
        l && (u.eatf = !0, Bd(7, [!0, 0, !1]));
        e = Q(pf) || Q( of );
        q = Q( of );
        if (e) {
            b: {
                f = {
                    nb: !1,
                    ob: !1
                };g = ak(m, ".google-auto-placed");h = ak(m, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]");k = ak(m, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var y = (Zj(m) || ak(m, "div[id^=div-gpt-ad]")).concat(ak(m, "iframe[id^=google_ads_iframe]"));
                var G = ak(m, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    B = ak(m, "ins.adsbygoogle-ablated-ad-slot"),
                    H = ak(m, "div.googlepublisherpluginad"),
                    T = ak(m, "html > ins.adsbygoogle");e = [].concat(ak(m, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ak(m, "body ins.adsbygoogle"));l = [];f = v([
                    [f.Wb, g],
                    [f.nb, h],
                    [f.Zb, k],
                    [f.Xb, y],
                    [f.ac, G],
                    [f.Vb, B],
                    [f.Yb, H],
                    [f.ob, T]
                ]);
                for (g = f.next(); !g.done; g = f.next()) h = v(g.value),
                g = h.next().value,
                h = h.next().value,
                !1 === g ? l = l.concat(h) : e = e.concat(h);e = bk(e);f = bk(l);l = e.slice(0);e = v(f);
                for (f = e.next(); !f.done; f = e.next())
                    for (f = f.value, g = 0; g <
                        l.length; g++)(f.contains(l[g]) || l[g].contains(f)) && l.splice(g, 1);m = Ee(m).clientHeight;
                for (e = 0; e < l.length; e++)
                    if (f = l[e].getBoundingClientRect(), !(0 === f.height && !q || f.top > m)) {
                        m = !0;
                        break b
                    }
                m = !1
            }
            u = m ? u.eatfAbg = !0 : !1
        }
        else u = l;
        if (u) return !0;
        u = new $d([2]);
        for (m = 0; m < c.length; m++) {
            q = a;
            e = c[m];
            l = m;
            f = b;
            if (E(e, ge, 4) && u.contains(A(E(e, ge, 4), 1)) && 1 === A(e, 8) && fk(e, d)) {
                q.i++;
                if (f = gk(q, e, f, d)) g = jj(q.g), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), E(e, N, 1) && null != A(E(e, N, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ :
                    g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: l,
                    element: f.ka
                }), Bd(7, [!1, q.i, !0]);
                q = f
            } else q = null;
            if (q) return !0
        }
        Bd(7, [!1, a.i, !1]);
        return !1
    }

    function gk(a, b, c, d) {
        if (!fk(b, d) || 1 != A(b, 8)) return null;
        d = E(b, N, 1);
        if (!d) return null;
        d = fj(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = ij[A(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = Tj(Uj(d), f);
                        break a;
                    case 3:
                        f = Tj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Tj(g ? 1 == g.nodeType ? g : Uj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Vj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !bf(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.u;
            f = A(b, 2);
            g = Ka(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(Ka(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(Ka(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.v;
            f = A(b, 2);
            a: switch (f) {
                case 1:
                    g = Oj(d.previousElementSibling) || Qj(d);
                    break a;
                case 4:
                    g = Oj(d) || Qj(d.nextElementSibling);
                    break a;
                case 2:
                    g = Qj(d.firstElementChild);
                    break a;
                case 3:
                    g = Oj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || Rj(c, d, f)
        }
        if (c) return null;
        c = E(b, Ue, 3);
        f = {};
        c && (f.bb = A(c, 1), f.Ka = A(c, 2), f.kb = !!Yb(c, 3));
        c = E(b, ge, 4) && A(E(b, ge, 4), 2) ? A(E(b, ge, 4), 2) : null;
        c = je(c);
        g = null != A(b, 12, !1) ? A(b, 12) : null;
        g = null == g ? null : new he(null, {
            google_ml_rank: g
        });
        b = hk(a, b);
        b = ie(a.l, c, g, b);
        c = a.g;
        a = a.G;
        var h = c.document,
            k = f.kb || !1;
        g = (new Uc(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.vb && Zi(k, f.vb);
        h = (new Uc(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor =
            "transparent";
        f.bb && (k.marginTop = f.bb);
        f.Ka && (k.marginBottom = f.Ka);
        f.hb && Zi(k, f.hb);
        g.appendChild(h);
        f = {
            ua: g,
            ka: h
        };
        f.ka.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.La) f.ua.className = h.join(" ");
        h = f.ka;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.ua;
                var q = void 0 === q ? 0 : q;
                if (Q(lf)) {
                    q = void 0 === q ? 0 : q;
                    var u = ag(d, e, q);
                    if (u.init) {
                        var y = u.init;
                        for (d = y; d = u.ma(d);) y = d;
                        var G = {
                            anchor: y,
                            position: u.pa
                        }
                    } else G = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    $f(m, G.anchor, G.position)
                } else $f(m, d, e);
                b: {
                    var B = f.ka;B.dataset.adsbygoogleStatus = "reserved";B.className += " adsbygoogle-noablate";m = {
                        element: B
                    };
                    var H = b && b.Va;
                    if (B.hasAttribute("data-pub-vars")) {
                        try {
                            H = JSON.parse(B.getAttribute("data-pub-vars"))
                        } catch (T) {
                            break b
                        }
                        B.removeAttribute("data-pub-vars")
                    }
                    H && (m.params = H);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (T) {
                (B = f.ua) && B.parentNode && (H = B.parentNode, H.removeChild(B), bf(H) && (H.style.display = H.getAttribute("data-init-display") ||
                    "none"));
                B = !1;
                break a
            }
            B = !0
        }
        return B ? f : null
    }

    function hk(a, b) {
        return Ud(Xd(Fj(b).map(ke), function(c) {
            jj(a.g).exception = c
        }))
    }

    function ek(a) {
        var b = {};
        a && Xb(a, 6, 0, !1).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function fk(a, b) {
        return a && void 0 !== Ub(a, ge, 4, !1) && b[A(E(a, ge, 4), 2)] ? !1 : !0
    };

    function ik(a) {
        K.call(this, a)
    }
    w(ik, K);
    var jk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function kk(a, b) {
        this.g = a;
        this.h = b
    }

    function lk(a, b, c) {
        this.url = a;
        this.s = b;
        this.Pa = !!c;
        this.depth = null
    };

    function mk() {
        var a = nk;
        this.l = ye;
        this.g = null;
        this.j = this.H;
        this.h = void 0 === a ? null : a;
        this.i = !1
    }
    n = mk.prototype;
    n.Za = function(a) {
        this.j = a
    };
    n.Ya = function(a) {
        this.g = a
    };
    n.ab = function(a) {
        this.i = a
    };
    n.qa = function(a, b, c) {
        try {
            if (this.h && this.h.g) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Bi(d), b = this.j(a, new qi(h, {
                    message: ok(h)
                }), void 0, c)
            } catch (k) {
                this.H(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ta = function(a, b) {
        var c = this;
        return function() {
            var d = Ea.apply(0, arguments);
            return c.qa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.H = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new qe;
            f.g.push(1);
            f.h[1] = re("context", a);
            ri(b) || (b = new qi(b, {
                message: ok(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = re("msg", g)
            }
            var h = b.meta || {};
            if (this.g) try {
                this.g(h)
            } catch (ed) {}
            if (d) try {
                d(h)
            } catch (ed) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if ($c(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new lk(l || "", k));
                try {
                    d = k.parent
                } catch (ed) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Pa = !0)
                }
            var u = new lk(x.location.href, x, !1);
            k = null;
            var y = b.length - 1;
            for (q = y; 0 <= q; --q) {
                var G = b[q];
                !k && jk.test(G.url) && (k = G);
                if (G.url && !G.Pa) {
                    u = G;
                    break
                }
            }
            G = null;
            var B = b.length && b[y].url;
            0 != u.depth && B && (G = b[y]);
            var H = new kk(u, G);
            if (H.h) {
                var T = H.h.url || "";
                f.g.push(4);
                f.h[4] = re("top", T)
            }
            var dd = {
                url: H.g.url || ""
            };
            if (H.g.url) {
                var Te = H.g.url.match(Xc),
                    Zh = Te[1],
                    $h = Te[3],
                    ai = Te[4];
                u = "";
                Zh && (u += Zh + ":");
                $h && (u += "//", u += $h, ai && (u += ":" + ai));
                var bi = u
            } else bi = "";
            dd = [dd, {
                url: bi
            }];
            f.g.push(5);
            f.h[5] = dd;
            ze(this.l, e, f, this.i, c)
        } catch (ed) {
            try {
                ze(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ok(ed),
                    url: H && H.g.url
                }, this.i, c)
            } catch (Qq) {}
        }
        return !0
    };
    n.Ua = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.H(a, d instanceof Error ? d : Error(d), void 0, c.g || void 0)
        })
    };

    function ok(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };

    function S(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, S) : this.stack = Error().stack || ""
    }
    w(S, Error);
    var ye, pk, nk = new Ai;

    function qk(a) {
        null != a && (x.google_measure_js_timing = a);
        x.google_measure_js_timing || (a = nk, a.g = !1, a.h != a.i.google_js_reporting_queue && (zi() && cb(a.h, Bi), a.h.length = 0))
    }(function(a) {
        ye = a || new we;
        "number" !== typeof x.google_srt && (x.google_srt = Math.random());
        xe();
        pk = new mk;
        pk.ab(!0);
        "complete" == x.document.readyState ? qk() : nk.g && Qc(x, "load", function() {
            qk()
        })
    })();

    function rk(a, b, c) {
        return pk.qa(a, b, c)
    }

    function sk(a, b) {
        return pk.Ta(a, b)
    }

    function tk(a, b, c) {
        var d = P(oi).h();
        !b.eid && d.length && (b.eid = d.toString());
        ze(ye, a, b, !0, c)
    }

    function uk(a, b) {
        pk.Ua(a, b)
    }

    function vk(a, b, c, d) {
        var e;
        ri(b) ? e = b.msg || ok(b.error) : e = ok(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof qi ? b.error : b, c.pbr || (c.pbr = !0, pk.H(a, b, .1, d, "puberror")), !1) : pk.H(a, b, c, d)
    };

    function wk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Zd(function() {
            return nc(ik, c)
        }) : Wd(null)
    };

    function xk() {
        this.S = {}
    }

    function yk() {
        if (zk) return zk;
        var a = Dd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? zk = b : a.google_persistent_state_async = zk = new xk
    }

    function Ak(a) {
        return Bk[a] || "google_ps_" + a
    }

    function Ck(a, b, c) {
        b = Ak(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Dk(a, b, c) {
        return Ck(a, b, function() {
            return c
        })
    }
    var zk = null,
        Ek = {},
        Bk = (Ek[8] = "google_prev_ad_formats_by_region", Ek[9] = "google_prev_ad_slotnames_by_region", Ek);

    function Fk(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Fk.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.cc;
            d = c.dc || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.tb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Fk.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ua(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Fk.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Fk.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ua(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            tb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Gk(a) {
        K.call(this, a)
    }
    w(Gk, K);

    function Hk(a) {
        var b = new Gk;
        return C(b, 5, a)
    };

    function Ik() {
        this.u = this.u;
        this.v = this.v
    }
    Ik.prototype.u = !1;
    Ik.prototype.i = function() {
        if (this.v)
            for (; this.v.length;) this.v.shift()()
    };

    function Jk(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Kk(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        Ik.call(this);
        this.g = a;
        this.h = null;
        this.l = {};
        this.I = 0;
        this.G = b;
        this.B = c;
        this.j = null
    }
    w(Kk, Ik);
    Kk.prototype.i = function() {
        this.l = {};
        this.j && (Rc(this.g, "message", this.j), delete this.j);
        delete this.l;
        delete this.g;
        delete this.h;
        Ik.prototype.i.call(this)
    };

    function Lk(a) {
        return "function" === typeof a.g.__tcfapi || null != Mk(a)
    }
    Kk.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = Jk(d), d.internalBlockOnErrors = c.B, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.B
            },
            e = Pc(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.G && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.G));
        try {
            Nk(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    Kk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Nk(this, "removeEventListener", null, a.listenerId)
    };

    function Nk(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.g.__tcfapi) a = a.g.__tcfapi, a(b, 2, c, d);
        else if (Mk(a)) {
            Ok(a);
            var e = ++a.I;
            a.l[e] = c;
            a.h && (c = {}, a.h.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Mk(a) {
        if (a.h) return a.h;
        a.h = qd(a.g, "__tcfapiLocator");
        return a.h
    }

    function Ok(a) {
        a.j || (a.j = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.l[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Qc(a.g, "message", a.j))
    };

    function Pk(a) {
        var b = a.s,
            c = a.Db,
            d = a.jb;
        a = Qk({
            s: b,
            ga: a.ga,
            na: void 0 === a.na ? !1 : a.na,
            oa: void 0 === a.oa ? !1 : a.oa
        });
        null != a.g || "tcunav" != a.h.message ? d(a) : Rk(b, c).then(function(e) {
            return e.map(Sk)
        }).then(function(e) {
            return e.map(function(f) {
                return Tk(b, f)
            })
        }).then(d)
    }

    function Qk(a) {
        var b = a.s,
            c = a.ga,
            d = void 0 === a.na ? !1 : a.na;
        if (a = (void 0 === a.oa ? 0 : a.oa) || !Lk(new Kk(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = wk(b), null == c.g) pk.H(806, c.h, void 0, void 0), c = !1;
                    else if ((c = c.g.value) && null != A(c, 1, !1)) b: switch (c = A(c, 1), c) {
                    case 1:
                        c = !0;
                        break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                } else c = !1;
                d = c
            }
            a = d
        }
        if (a) return Tk(b, Hk(!0));
        c = yk();
        return (c = Dk(c, 24)) ? Tk(b, Sk(c)) : Yd(Error("tcunav"))
    }

    function Rk(a, b) {
        return p.Promise.race([Uk(), Vk(a, b)])
    }

    function Uk() {
        return (new p.Promise(function(a) {
            var b = yk();
            a = {
                resolve: a
            };
            var c = Dk(b, 25, []);
            c.push(a);
            b.S[Ak(25)] = c
        })).then(Wk)
    }

    function Vk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Yd(Error("tcto")))
        })
    }

    function Wk(a) {
        return a ? Wd(a) : Yd(Error("tcnull"))
    }

    function Sk(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Jk(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions &&
                        (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return Hk(a)
    }

    function Tk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Yb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Wd(b) : Yd(Error("unav"))
    };

    function Xk(a) {
        K.call(this, a)
    }
    w(Xk, K);

    function Yk(a) {
        K.call(this, a, -1, Zk)
    }
    w(Yk, K);
    var Zk = [1, 2, 3];

    function $k(a) {
        this.exception = a
    }

    function al(a, b, c) {
        this.i = a;
        this.g = b;
        this.h = c
    }
    al.prototype.start = function() {
        this.j()
    };
    al.prototype.j = function() {
        try {
            switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    dk(this.g, !0);
                    bl(this);
                    break;
                default:
                    dk(this.g, !1) ? bl(this) : this.i.setTimeout(Pa(this.j, this), 100)
            }
        } catch (a) {
            bl(this, a)
        }
    };

    function bl(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            jj(e.g);
            F(e.h, Ve, 1);
            d.call(c, new $k(b))
        } catch (f) {
            a.h.reject(f)
        }
    };
    var cl = "a".charCodeAt(),
        dl = Ac(Jd),
        el = Ac(Kd);

    function fl(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.h = a;
        this.g = 0
    }

    function gl(a) {
        var b = hl(a, 16);
        return !0 === !!hl(a, 1) ? (a = il(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : jl(a, b)
    }

    function il(a) {
        for (var b = hl(a, 12), c = []; b--;) {
            var d = !0 === !!hl(a, 1),
                e = hl(a, 16);
            if (d)
                for (d = hl(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function jl(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (hl(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function hl(a, b) {
        if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };

    function kl(a, b) {
        try {
            var c = qb(a.split(".")[0]).map(function(e) {
                    return (aa = e.toString(2), r(aa, "padStart")).call(aa, 8, "0")
                }).join(""),
                d = new fl(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = hl(d, 12);
            c.cmpVersion = hl(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = hl(d, 6);
            c.isServiceSpecific = !!hl(d, 1);
            c.useNonStandardStacks = !!hl(d, 1);
            c.specialFeatureOptins = ll(jl(d, 12, el), el);
            c.purpose = {
                consents: ll(jl(d, 24, dl), dl),
                legitimateInterests: ll(jl(d, 24, dl), dl)
            };
            c.purposeOneTreatment = !!hl(d, 1);
            c.publisherCC = String.fromCharCode(cl +
                hl(d, 6)) + String.fromCharCode(cl + hl(d, 6));
            c.vendor = {
                consents: ll(gl(d), b),
                legitimateInterests: ll(gl(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function ll(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = v(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function ml(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };

    function nl() {
        this.g = {}
    }

    function ol(a) {
        pl || (pl = new ql);
        var b = pl.g[a.key];
        if ("proto" === a.valueType) {
            try {
                var c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (d) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    };

    function rl(a) {
        K.call(this, a)
    }
    w(rl, K);

    function sl(a) {
        K.call(this, a)
    }
    w(sl, K);

    function tl(a) {
        K.call(this, a)
    }
    w(tl, K);
    var ul = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25, 26];

    function vl() {};

    function wl(a) {
        K.call(this, a, -1, xl)
    }
    w(wl, K);

    function yl(a) {
        K.call(this, a)
    }
    w(yl, K);

    function zl(a) {
        K.call(this, a)
    }
    w(zl, K);
    var xl = [7];
    var Al = new ml("45368529"),
        Bl = new ml("45369554");

    function ql() {
        this.g = {};
        var a = x.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.g = JSON.parse(a)
        } catch (d) {}
    }
    var pl;
    w(ql, nl);

    function Cl(a) {
        return (a = Dl(a)) ? E(a, yl, 4) : null
    }

    function Dl(a) {
        if (a = (new Fk(a)).get("FCCDCF", ""))
            if (ol(Al))
                if (r(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    El(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? nc(wl, b) : null
        } catch (c) {
            return El(2), null
        }
    }

    function El(a) {
        new vl;
        var b = new sl;
        a = C(b, 7, a);
        b = new rl;
        a = fc(b, 1, a);
        b = new tl;
        gc(b, 22, ul, a);
        ol(Bl)
    };
    Ac(Jd).map(function(a) {
        return Number(a)
    });
    Ac(Kd).map(function(a) {
        return Number(a)
    });

    function Fl(a) {
        this.g = a;
        this.h = null
    }

    function Gl(a) {
        a.__tcfapiPostMessageReady || Hl(new Fl(a))
    }

    function Hl(a) {
        a.h = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage &&
                    b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    };

    function Il(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = cd("IFRAME", d);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    d.body.appendChild(e)
                } else a.setTimeout(c, 5)
        }
        var d = a.document;
        c()
    };

    function Jl(a) {
        this.g = a;
        this.h = a.document;
        this.l = (a = (a = Dl(this.h)) ? E(a, zl, 5) || null : null) ? A(a, 2) : null;
        this.i = (a = Cl(this.h)) && null != A(a, 1) ? A(a, 1) : null;
        this.j = (a = Cl(this.h)) && null != A(a, 2) ? A(a, 2) : null
    }

    function Kl() {
        var a = window,
            b = Q(qf);
        a.__uspapi || a.frames.__uspapiLocator || (a = new Jl(a), Ll(a), b && Ml(a))
    }

    function Ll(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Il(a.g, "__uspapiLocator"), Ra("__uspapi", function() {
            return a.v.apply(a, ka(Ea.apply(0, arguments)))
        }))
    }
    Jl.prototype.v = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.l
        }, !0)
    };

    function Ml(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Il(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], Ra("__tcfapi", function() {
            return a.u.apply(a, ka(Ea.apply(0, arguments)))
        }), Gl(a.g))
    }
    Jl.prototype.u = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.g.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(Nl(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
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
                    a = b.push(c);
                    c(Nl(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ?
                        (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };

    function Nl(a, b, c) {
        if (!a.i) return null;
        b = kl(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function Ol(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function Pl(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Ql(a) {
        a = Xb(a, 2, 0, !1);
        if (!a) return !1;
        for (var b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function Rl(a, b) {
        a = Pl(Ol(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = ld(a),
            d = Sl(a);
        return r(b, "find").call(b, function(e) {
            var f = void 0 !== Ub(e, Aj, 7, !1) ? A(E(e, Aj, 7), 1) : A(e, 1);
            e = void 0 !== Ub(e, Aj, 7, !1) ? A(E(e, Aj, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function Sl(a) {
        for (var b = {};;) {
            b[ld(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Tl = {},
        Ul = (Tl.google_ad_channel = !0, Tl.google_ad_host = !0, Tl);

    function Vl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        tk("ama", b, .01)
    }

    function Wl(a) {
        var b = {};
        kd(Ul, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Xl(a) {
        a = E(a, xj, 3);
        return !a || A(a, 1) <= Date.now() ? !1 : !0
    }

    function Yl(a) {
        if (Q(jf)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? nc(vj, b) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Zl(a) {
        K.call(this, a)
    }
    w(Zl, K);

    function $l(a) {
        K.call(this, a, -1, am)
    }
    w($l, K);
    var am = [1];

    function bm(a) {
        K.call(this, a, -1, cm)
    }
    w(bm, K);
    bm.prototype.getId = function() {
        return I(A(this, 1), 0)
    };
    bm.prototype.V = function() {
        return D(this, 7)
    };
    var cm = [2];

    function dm(a) {
        K.call(this, a, -1, em)
    }
    w(dm, K);
    dm.prototype.V = function() {
        return D(this, 5)
    };
    var em = [2];

    function fm(a) {
        K.call(this, a, -1, gm)
    }
    w(fm, K);

    function hm(a) {
        K.call(this, a, -1, im)
    }
    w(hm, K);
    hm.prototype.V = function() {
        return D(this, 1)
    };

    function jm(a) {
        K.call(this, a)
    }
    w(jm, K);
    var gm = [1, 4, 2, 3],
        im = [2];

    function km(a) {
        K.call(this, a, -1, lm)
    }
    w(km, K);

    function mm(a) {
        return kc(a, $l, 14, Wb)
    }
    var lm = [19],
        Wb = [13, 14];
    var nm = void 0;

    function om() {
        rc(nm, pc);
        return nm
    }

    function pm(a) {
        rc(nm, fg);
        nm = a
    };

    function qm(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && rm(c, void 0 === d ? null : d) ? !0 : sm(a, c, function(e) {
            return fb(F(e, uc, 2), function(f) {
                return A(f, 1) === b
            })
        })
    }

    function rm(a, b) {
        return b ? Tb(b, Zl, 13) ? ic(kc(b, Zl, 13, Wb), 1) : Tb(b, $l, 14) && "" !== a && 1 === Zb(mm(b), 1).length && Zb(mm(b), 1)[0] === a ? ic(E(mm(b), Zl, 2), 1) : !1 : !1
    }

    function tm(a, b) {
        b = I(A(b, 18), 0); - 1 !== b && (a.tmod = b)
    }

    function um(a) {
        var b = void 0 === b ? "" : b;
        var c = ad(M) || M;
        return vm(c, a) ? !0 : sm(M, b, function(d) {
            return fb(Xb(d, 3, 0, !1), function(e) {
                return e === a
            })
        })
    }

    function wm(a) {
        return sm(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function vm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && ib(a.split(","), b.toString())
    }

    function sm(a, b, c) {
        a = ad(a) || a;
        var d = xm(a);
        b && (b = Id(String(b)));
        return zc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function xm(a) {
        a = ym(a);
        var b = {};
        kd(a, function(c, d) {
            try {
                var e = new sc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function ym(a) {
        return Q(ef) ? (a = Qk({
            s: a,
            ga: om()
        }), null != a.g ? zm(a.g.value) : {}) : zm(a.localStorage)
    }

    function zm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : yc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function Am(a) {
        Q(rf) && tk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }

    function Bm(a) {
        return !!a && (0 < F(a, Ve, 1).length || Q(kf) && 0 < F(a, Re, 3).length)
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Cm(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ia: !0,
            Cb: b,
            sa: a.ablation_viewport_offset
        } : null
    }

    function Dm(a, b) {
        a = U(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Em(a) {
        U(M).allow_second_reactive_tag = a
    }

    function Fm() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Gm(a) {
        var b, c;
        return null != (c = null == (b = a.document.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : b.getAttribute("content")) ? c : null
    };

    function Hm(a, b, c, d) {
        Im(new Jm(a, b, c, d))
    }

    function Jm(a, b, c, d) {
        this.s = a;
        this.h = b;
        this.i = c;
        this.g = d
    }

    function Im(a) {
        Xd(Vd(Qk({
            s: a.s,
            ga: ic(a.h, 6)
        }), function(b) {
            Km(a, b, !0)
        }), function() {
            Lm(a)
        })
    }

    function Km(a, b, c) {
        Xd(Vd(Mm(b), function(d) {
            Nm("ok");
            a.g(d, {
                fromLocalStorage: !0
            })
        }), function() {
            var d = a.s;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Vl(d, {
                    lserr: 1
                })
            }
            c ? Lm(a) : a.g(null, null)
        })
    }

    function Lm(a) {
        Xd(Vd(Om(a), function(b) {
            a.g(b, {
                fromPABGSettings: !0
            })
        }), function() {
            Pm(a)
        })
    }

    function Pm(a) {
        Pk({
            s: a.s,
            ga: ic(a.h, 6),
            Db: 50,
            jb: function(b) {
                Qm(a, b)
            }
        })
    }

    function Mm(a) {
        return (a = (a = Yl(a)) ? Xl(a) ? a : null : null) ? Wd(a) : Yd(Error("invlocst"))
    }

    function Om(a) {
        var b = a.s,
            c, d, e;
        if (null != (e = null == (c = U(b)) ? void 0 : null == (d = c.head_tag_slot_vars) ? void 0 : d.google_ad_host) ? e : Gm(b)) return Yd(Error("invtag"));
        a: if (b = a.s, c = a.i, a = a.h, null == a ? 0 : Tb(a, Zl, 13)) {
            var f, g;
            var h = null == a ? void 0 : null == (f = kc(a, Zl, 13, Wb)) ? void 0 : null == (g = E(f, Xk, 2)) ? void 0 : E(g, Yk, 2);
            Bm(h) ? Am(!1) : h = null
        } else {
            if (null == a ? 0 : Tb(a, $l, 14)) {
                var k;
                f = null == a ? void 0 : null == (k = mm(a)) ? void 0 : Zb(k, 1);
                var l, m;
                g = null == a ? void 0 : null == (h = mm(a)) ? void 0 : null == (l = E(h, Zl, 2)) ? void 0 : null == (m = E(l, Xk, 2)) ? void 0 :
                    E(m, Yk, 2);
                if (f && 1 === f.length && f[0] === c && Bm(g) && J(a, 17) === b.location.host) {
                    Am(!0);
                    h = g;
                    break a
                }
            }
            h = null
        }
        h ? (l = new vj, m = F(h, Ve, 1), l = hc(l, 1, m), m = F(h, yj, 2), l = hc(l, 7, m), Q(kf) && 0 < F(h, Re, 3).length && (m = new Pe, h = F(h, Re, 3), h = hc(m, 1, h), fc(l, 6, h)), h = Wd(l)) : h = Yd(Error("invtag"));
        return h
    }

    function Qm(a, b) {
        Xd(Vd(b, function(c) {
            Km(a, c, !1)
        }), function(c) {
            Nm(c.message);
            a.g(null, null)
        })
    }

    function Nm(a) {
        tk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function Rm(a, b, c, d) {
        try {
            var e = Rl(a, F(c, yj, 7));
            if (e && Ql(e)) {
                if (A(e, 4)) {
                    var f = {},
                        g = new he(null, (f.google_package = A(e, 4), f));
                    d = ie(d, g)
                }
                var h = new ck(a, b, c, e, d);
                ej(1E3, function() {
                    var k = new Ld;
                    (new al(a, h, k)).start();
                    return k.h
                }, a).then(Qa(Sm, a), Qa(Tm, a))
            }
        } catch (k) {
            Vl(a, {
                atf: -1
            })
        }
    }

    function Sm(a) {
        Vl(a, {
            atf: 1
        })
    }

    function Tm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Vl(a, {
            atf: 0
        })
    };
    lb || !z("Safari") || Za();

    function Um() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Vm() {
        var a = new Um;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Wm(a) {
        a = void 0 === a ? function() {} : a;
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp,
            c = b[7];
        if (c) return c;
        c = Vm();
        b[7] = c;
        a();
        return c
    }

    function Xm(a) {
        return Wm(function() {
            bd(x.document, a)
        }).promise
    };

    function Ym(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Zm(a) {
        if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
        x.google_apltlad = !0;
        var b = Ym(a.google_ad_client),
            c = b.enable_page_level_ads;
        kd(a, function(d, e) {
            Xi[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        Q(Ef) && (c.easpi = Q(Ef), Q(Df) && (c.easpa = !0), c.asntp = Yf(Kf), c.asntpv = Yf(Of), c.asntpl = Yf(Mf), c.asntpm = Yf(Nf), c.asntpc = Yf(Lf), c.asna = Yf(Gf), c.asnd = Yf(Hf), c.asnp = Yf(If), c.asns = Yf(Jf), c.asmat = Yf(Ff), c.asptt = Yf(Pf));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section =
            a.google_ad_section || a.google_ad_region;
        return b
    }

    function $m(a) {
        return Ja(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function an(a, b) {
        U(M).ama_ran_on_page || ej(1001, function() {
            return bn(new cn(a, b))
        }, x)
    }

    function cn(a, b) {
        this.g = x;
        this.h = a;
        this.i = b
    }

    function bn(a) {
        Hm(a.g, a.i, a.h.google_ad_client || "", function(b, c) {
            var d = a.g,
                e = a.h;
            U(M).ama_ran_on_page || b && dn(d, e, b, c)
        })
    }

    function dn(a, b, c, d) {
        d && (jj(a).configSourceInAbg = d);
        if (void 0 !== Ub(c, qj, 24, !1)) {
            d = kj(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = E(c, qj, 24)) ? 0 : null == (f = E(e, sj, 3)) ? 0 : kc(f, tj, 2, uj))
        }
        if ($m(b) && (e = Rl(a, F(c, yj, 7)), !e || !Yb(e, 8))) return;
        U(M).ama_ran_on_page = !0;
        var g;
        if (null == (g = E(c, Dj, 15)) ? 0 : Yb(g, 23)) U(a).enable_overlap_observer = !0;
        if ((g = E(c, Bj, 13)) && 1 === A(g, 1)) {
            var h = 0,
                k = E(g, Cj, 6);
            k && A(k, 3) && (h = A(k, 3) || 0);
            Dm(a, h)
        } else if (null == (h = E(c, qj, 24)) ? 0 : null == (k = E(h, sj, 3)) ? 0 : kc(k, tj, 2, uj)) kj(a).ablatingThisPageview = !0, Dm(a, 1);
        Bd(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = Wl(Ja(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = ie(me, new he(null, b));
        rk(782, function() {
            Rm(a, l, c, m)
        })
    };
    var en = {},
        fn = (en.google_ad_modifications = !0, en.google_analytics_domain_name = !0, en.google_analytics_uacct = !0, en.google_pause_ad_requests = !0, en.google_user_agent_client_hint = !0, en);

    function gn(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function hn(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function jn(a) {
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
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function kn(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = U(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Hd() ? gn : hn;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = jn(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function ln(a, b) {
        var c = 10;
        return Da(function(d) {
            return 0 >= c ? d.return(p.Promise.reject()) : b() ? d.return(p.Promise.resolve()) : d.return(new p.Promise(function(e, f) {
                var g = a.setInterval(function() {
                    --c ? b() && (a.clearInterval(g), e()) : (a.clearInterval(g), f())
                }, 200)
            }))
        })
    };

    function mn(a) {
        var b = this;
        this.s = Dd() || window;
        this.g = null != a ? a : new sh(100);
        this.state = Ck(yk(), 33, function() {
            var c = Yf(gf),
                d = 0 < c && jd() < 1 / c;
            return {
                sd: c,
                ssp: d,
                pc: Q(ff) ? null : d ? wd(b.s) : 0,
                wpc: Q(ff) ? null : d ? kn(b.s) : "",
                le: [],
                lgdp: []
            }
        })
    }

    function nn(a, b) {
        var c = new Ng;
        var d = Q(ff) ? on(a) : a.state.pc;
        c = C(c, 1, d);
        d = Q(ff) ? pn(a) : a.state.wpc;
        c = C(c, 2, d);
        c = C(c, 3, a.state.sd);
        return C(c, 7, b || a.s.performance.now())
    }

    function on(a) {
        var b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = wd(a.s)
    }

    function pn(a) {
        var b = a.state.wpc;
        return null !== b && "" !== b ? b : a.state.wpc = kn(a.s)
    }

    function qn() {
        var a = P(mn),
            b;
        Da(function(c) {
            if (1 == c.g) {
                if (!a.h || r(a.state.le, "includes").call(a.state.le, 1)) return c.return();
                a.state.le.push(1);
                b = a.s.performance.now();
                return wa(c, ln(a.s, function() {
                    return !(!on(a) || !pn(a))
                }))
            }
            rn(a, b);
            c.g = 0
        })
    }

    function sn() {
        var a = P(mn);
        a.h && !r(a.state.le, "includes").call(a.state.le, 1) && (a.state.le.push(1), rn(a, a.s.performance.now()))
    }

    function rn(a, b) {
        var c = Jg(Kg(new Ig, Hg(Gg(new Fg, Ee(a.s).scrollWidth), Ee(a.s).scrollHeight)), Hg(Gg(new Fg, Fe(a.s)), Ee(a.s).clientHeight));
        if (Q(uf)) {
            var d = Ci(a.s);
            0 !== d && Lg(c, Eg(d))
        }
        lh(a.g, Og(nn(a, b), c));
        rh(a.g, a.s, function() {
            var e = a.g;
            var f = nn(a);
            var g = new Mg;
            f = gc(f, 8, Pg, g);
            lh(e, f)
        })
    }

    function tn(a, b, c) {
        var d;
        Da(function(e) {
            if (1 == e.g) {
                if (!a.h || !c.length || r(a.state.lgdp, "includes").call(a.state.lgdp, Number(b))) return e.return();
                a.state.lgdp.push(Number(b));
                d = a.s.performance.now();
                return wa(e, ln(a.s, function() {
                    return !(!on(a) || !pn(a))
                }))
            }
            lh(a.g, Qg(nn(a, d), Cg(Bg(new zg, b), c)));
            e.g = 0
        })
    }
    ea.Object.defineProperties(mn.prototype, {
        h: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state.ssp
            }
        }
    });

    function un(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function vn(a) {
        var b = M.document;
        if (b.currentScript) return un(b.currentScript, a);
        b = v(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === un(c.value, a)) return 0;
        return 1
    };

    function wn(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[lg] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return qm(M, Number(g))
        }, c[24] = function(g) {
            return um(Number(g))
        }, c[61] = function() {
            return ic(b, 6)
        }, c[63] = function() {
            return ic(b, 6) || ".google.ch" === J(b, 8)
        }, c), f[mg] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (q) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            a: {
                var k = -1;
                try {
                    h && (k = parseInt(h.getItem(g), 10))
                } catch (q) {
                    k = null;
                    break a
                }
                k = 0 <= k && 1E3 >
                k ? k : null
            }
            if (null === k) {
                k = id() ? null : Math.floor(1E3 * jd());
                var l;
                if (l = null != k && h) a: {
                    var m = String(k);
                    try {
                        if (h) {
                            h.setItem(g, m);
                            l = m;
                            break a
                        }
                    } catch (q) {}
                    l = null
                }
                h = l ? k : null
            } else h = k;
            return null != h ? h : void 0
        }, d), f[ng] = (e[6] = function() {
            return J(b, 15)
        }, e), f
    };

    function xn(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function yn() {
        var a = P(Xf).g(Af.g, Af.defaultValue),
            b = M.document;
        b = void 0 === b ? window.document : b;
        vd(a, b)
    };

    function zn(a, b) {
        try {
            var c = a.split(".");
            a = x;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function An() {
        var a = {};
        this[lg] = (a[8] = function(b) {
            try {
                return null != Ha(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = Ha(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return ib(P(oi).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = zn(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!x.document.querySelector(b)
            } catch (c) {}
        }, a[69] = function(b) {
            var c =
                x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.features(), r(aa, "includes")).call(aa, b))
        }, a[70] = function(b) {
            var c = x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), r(aa, "includes")).call(aa, b))
        }, a);
        a = {};
        this[mg] = (a[3] = function() {
            return rd()
        }, a[6] = function(b) {
            b = zn(b, "number");
            return void 0 !== b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Xc)[3] ||
                null) ? decodeURI(c) : c) ? ld(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[ng] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = zn(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b = x.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a[11] = function() {
            try {
                var b, c, d, e, f;
                return null != (f = null == (d = null == (b = Ha("google_tag_data")) ? void 0 : null == (c =
                    b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = r(d, "find").call(d, function(g) {
                    return "Google Chrome" === g.brand
                })) ? void 0 : e.version) ? f : ""
            } catch (g) {
                return ""
            }
        }, a)
    };
    var Bn = [12, 13, 20];

    function Cn() {}
    Cn.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Ma ? !1 : d.Ma,
            g = void 0 === d.ub ? {} : d.ub;
        d = void 0 === d.wb ? [] : d.wb;
        this.j = a;
        this.u = {};
        this.v = f;
        this.l = g;
        a = {};
        this.h = (a[b] = [], a[4] = [], a);
        this.i = {};
        (b = ti()) && cb(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.i[h] = !0)
        });
        cb(d, function(h) {
            e.i[h] = !0
        });
        this.g = c;
        return this
    };

    function Dn(a, b, c) {
        var d = [],
            e = En(a.j, b),
            f;
        if (f = 9 !== b) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return uh(a.g, b, c, d, [], 4), d;
        if (!e.length) return uh(a.g, b, c, d, [], 3), d;
        var g = ib(Bn, b),
            h = [];
        cb(e, function(k) {
            var l = new ah;
            if (k = Fn(a, k, c, l)) 0 !== cc(l, bh) && h.push(l), l = k.getId(), d.push(l), Gn(a, l, g ? 4 : c), (k = F(k, wg, 2)) && (g ? Lh(k, Nh(), a.g, l) : Lh(k, [c], a.g, l))
        });
        uh(a.g, b, c, d, h, 1);
        return d
    }

    function Gn(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        ib(a, b) || a.push(b)
    }

    function Hn(a, b) {
        a.j.push.apply(a.j, ka(db(eb(b, function(c) {
            return new hm(c)
        }), function(c) {
            return !ib(Bn, c.V())
        })))
    }

    function Fn(a, b, c, d) {
        var e = P(xh).g;
        if (!sg(E(b, gg, 3), e)) return null;
        var f = F(b, bm, 2),
            g = D(b, 6);
        if (g) {
            bc(d, 1, bh, g);
            f = e[mg];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), ac(d, 3, c)
            } catch (k) {}
            return (b = In(b, c)) ? Jn(a, [b], 1) : null
        }
        if (g = D(b, 10)) {
            bc(d, 2, bh, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[mg][9];
                    break;
                case 2:
                    h = e[mg][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === D(b, 11)) return null;
            void 0 !== c && ac(d, 3, c);
            return (b = In(b, c)) ? Jn(a, [b], 1) : null
        }
        d = e ? db(f, function(k) {
            return sg(E(k,
                gg, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * I(A(b, 1), 0);
        return (b = D(b, 4)) ? Kn(a, b, c, d) : Jn(a, d, c / 1E3)
    }

    function Kn(a, b, c, d) {
        var e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = Jn(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function Jn(a, b, c) {
        var d = a.i,
            e = gb(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.v ? null : gd(b, c)
    }

    function Ln(a, b) {
        ji(Qh, function(c) {
            a.i[c] = !0
        }, b);
        ji(Th, function(c, d) {
            return Dn(a, c, d)
        }, b);
        ji(Uh, function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        ji(gi, function(c) {
            return void Hn(a, c)
        }, b);
        ji(Rh, function(c, d) {
            return void Gn(a, c, d)
        }, b)
    }

    function En(a, b) {
        return (a = gb(a, function(c) {
            return c.V() == b
        })) && F(a, dm, 2) || []
    }

    function In(a, b) {
        var c = F(a, bm, 2),
            d = c.length,
            e = I(A(a, 8), 0);
        a = d * I(A(a, 1), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * jd());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = P(xh).g;
        return !c || e && !sg(E(c, gg, 3), e) ? null : c
    };

    function Mn() {
        this.g = function() {}
    }

    function Nn(a) {
        P(Mn).g(a)
    };
    var On, Pn, Qn, Rn, Sn, Tn;

    function Un(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? xn() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new th(null != (Rn = null == (On = E(a, jm, 5)) ? void 0 : I(A(On, 2), 0)) ? Rn : 0, null != (Sn = null == (Pn = E(a, jm, 5)) ? void 0 : I(A(Pn, 4), 0)) ? Sn : 0, null != (Tn = null == (Qn = E(a, jm, 5)) ? void 0 : ic(Qn, 3)) ? Tn : !1) : f;
        d.hasOwnProperty("init-done") ? (ki(gi, d)(eb(F(a, hm, 2), function(g) {
            return g.toJSON()
        })), ki(hi, d)(eb(F(a, wg, 1), function(g) {
            return g.toJSON()
        }), e), b && ki(ii, d)(b), Vn(e, d)) : (Ln(P(Cn).init(F(a, hm, 2), e, f, c), d), li(d), mi(d), ni(d), Vn(e, d), Lh(F(a, wg, 1), [e], f, void 0, !0), yh = yh || !(!c || !c.qb), Nn(P(An)), b && Nn(b))
    }

    function Vn(a, b) {
        var c = b = void 0 === b ? xn() : b;
        pi(P(oi), c, a);
        Wn(b, a);
        a = b;
        P(Mn).g = ki(ii, a);
        P(Xf).l()
    }

    function Wn(a, b) {
        var c = P(Xf);
        c.h = function(d, e) {
            return ki(Wh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return ki(Xh, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return ki(Yh, a, function() {
                return ""
            })(d, e, b)
        };
        c.g = function(d, e) {
            return ki(ci, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            ki(Sh, a)(b)
        }
    };

    function Xn(a) {
        var b = P(oi).j(a);
        Q(tf) && tn(P(mn), a, b)
    }

    function Yn(a, b, c) {
        var d = U(a);
        if (d.plle) Vn(1, xn(a));
        else {
            d.plle = !0;
            d = E(b, fm, 12);
            var e = ic(b, 9);
            Un(d, wn(c, b), {
                Ma: e && !!a.google_disable_experiments,
                qb: e
            }, xn(a));
            if (c = J(b, 15)) c = Number(c), P(oi).i(c);
            b = v(Xb(b, 19, 0, !1));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, P(oi).g(c);
            Xn(12);
            Xn(10);
            a = ad(a) || a;
            Wj(a.location, "google_mc_lab") && P(oi).g(44738307);
            Wj(a.location, "google_auto_storify_swipeable") && P(oi).g(44773747);
            Wj(a.location, "google_auto_storify_scrollable") && P(oi).g(44773746)
        }
    };
    var Zn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function $n(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function V(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Pi.call(this, a, b);
        this.ha = c;
        this.sb = d
    }
    w(V, Pi);
    V.prototype.ra = function() {
        return this.ha
    };
    V.prototype.h = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function ao(a) {
        return function(b) {
            return !!(b.ha & a)
        }
    };
    var bo = {},
        co = (bo.image_stacked = 1 / 1.91, bo.image_sidebyside = 1 / 3.82, bo.mobile_banner_image_sidebyside = 1 / 3.82, bo.pub_control_image_stacked = 1 / 1.91, bo.pub_control_image_sidebyside = 1 / 3.82, bo.pub_control_image_card_stacked = 1 / 1.91, bo.pub_control_image_card_sidebyside = 1 / 3.74, bo.pub_control_text = 0, bo.pub_control_text_card = 0, bo),
        eo = {},
        fo = (eo.image_stacked = 80, eo.image_sidebyside = 0, eo.mobile_banner_image_sidebyside = 0, eo.pub_control_image_stacked = 80, eo.pub_control_image_sidebyside = 0, eo.pub_control_image_card_stacked =
            85, eo.pub_control_image_card_sidebyside = 0, eo.pub_control_text = 80, eo.pub_control_text_card = 80, eo),
        go = {},
        ho = (go.pub_control_image_stacked = 100, go.pub_control_image_sidebyside = 200, go.pub_control_image_card_stacked = 150, go.pub_control_image_card_sidebyside = 250, go.pub_control_text = 100, go.pub_control_text_card = 150, go);

    function io(a) {
        var b = 0;
        a.W && b++;
        a.L && b++;
        a.M && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.W.split(",");
        var c = a.M.split(",");
        a = a.L.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            M: d,
            L: e,
            Ra: b
        }
    }

    function jo(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var ko = kb("script");

    function lo(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.u = a;
        this.Y = b;
        this.ha = void 0 === c ? null : c;
        this.g = void 0 === d ? null : d;
        this.R = void 0 === e ? null : e;
        this.h = void 0 === f ? null : f;
        this.i = void 0 === g ? null : g;
        this.G = void 0 === h ? null : h;
        this.I = void 0 === k ? null : k;
        this.j = void 0 === l ? null : l;
        this.l = void 0 === m ? null : m;
        this.P = void 0 === q ? null : q;
        this.T = this.B = this.v = null
    }
    lo.prototype.size = function() {
        return this.Y
    };

    function mo(a, b, c) {
        null != a.ha && (c.google_responsive_formats = a.ha);
        null != a.R && (c.google_safe_for_responsive_override = a.R);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.u;
            null != a.g && (c.armr = a.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.G && (c.gfwroml = a.G);
        null != a.I && (c.gfwromr = a.I);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.P && (c.gfwroz = a.P);
        null != a.v && (c.gml = a.v);
        null != a.B && (c.gmr = a.B);
        null != a.T && (c.gzi = a.T);
        b = ad(window) || window;
        Wj(b.location, "google_responsive_dummy_ad") &&
            (ib([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 === a.g) && 2 !== a.g && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + ko + ">window.top.postMessage('" + a + "', '*');\n          </" + ko + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var no = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function oo(a, b) {
        Pi.call(this, a, b)
    }
    w(oo, Pi);
    oo.prototype.g = function(a) {
        return Math.min(1200, Math.max(this.K, Math.round(a)))
    };

    function po(a, b) {
        qo(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new lo(9, new oo(a, Math.floor(a * b.google_phwr)));
        var c = Vc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * co.mobile_banner_image_sidebyside + fo.mobile_banner_image_sidebyside) + 96), a = {
            da: a,
            ca: c,
            L: 1,
            M: 12,
            W: "mobile_banner_image_sidebyside"
        }) : (a = jo(a), a = {
            da: a.width,
            ca: a.height,
            L: 1,
            M: 13,
            W: "image_sidebyside"
        }) : (a = jo(a), a = {
            da: a.width,
            ca: a.height,
            L: 4,
            M: 2,
            W: "image_stacked"
        });
        ro(b, a);
        return new lo(9, new oo(a.da,
            a.ca))
    }

    function so(a, b) {
        qo(a, b);
        var c = io({
            M: b.google_content_recommendation_rows_num,
            L: b.google_content_recommendation_columns_num,
            W: b.google_content_recommendation_ui_type
        });
        if (c.O) a = {
            da: 0,
            ca: 0,
            L: 0,
            M: 0,
            W: "image_stacked",
            O: c.O
        };
        else {
            var d = 2 === c.Ra.length && 468 <= a ? 1 : 0;
            var e = c.Ra[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = ho[e];
            for (var g = c.L[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.M[d];
            d = Math.floor(((a - 8 * f - 8) / f * co[e] + fo[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Ab: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    Ab: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                da: a.width,
                ca: a.height,
                L: f,
                M: c,
                W: e
            }
        }
        if (a.O) throw new S(a.O);
        ro(b, a);
        return new lo(9, new oo(a.da, a.ca))
    }

    function qo(a, b) {
        if (0 >= a) throw new S("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function ro(a, b) {
        a.google_content_recommendation_ui_type = b.W;
        a.google_content_recommendation_columns_num = b.L;
        a.google_content_recommendation_rows_num = b.M
    };

    function to(a, b) {
        Pi.call(this, a, b)
    }
    w(to, Pi);
    to.prototype.g = function() {
        return this.K
    };
    to.prototype.h = function(a, b, c) {
        Oi(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var uo = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function vo(a, b) {
        Pi.call(this, a, b)
    }
    w(vo, Pi);
    vo.prototype.g = function() {
        return Math.min(1200, this.K)
    };

    function wo(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = Ji(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = Fe(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && Mi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Oi(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new S("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new S("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new lo(11, new Pi(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new S("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new S("Invalid height: height=" + f);
            if (50 > f) throw new S("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new S("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new lo(11, new Pi(a, f))
        }
        d = uo[f];
        if (!d) throw new S("Invalid data-ad-layout value: " + f);
        c = Ti(c, b);
        b = Fe(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new lo(11, "in-article" == f ? new vo(a, b) : new Pi(a, b))
    };

    function xo(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function yo(a, b) {
        for (var c = zo.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var W = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        zo = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];

    function Ao(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            D: a,
            F: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Bo(b) || e.google_ad_resize ? (b = Ki(a, c, d, e), c = !0 !== b ? {
            D: a,
            F: b
        } : {
            D: Fe(c) || a,
            F: !0
        }) : c = {
            D: a,
            F: 2
        };
        b = c.F;
        return !0 !== b ? {
            D: a,
            F: b
        } : d.parentElement ? {
            D: c.D,
            F: b
        } : {
            D: a,
            F: b
        }
    }

    function Co(a, b, c, d, e) {
        var f = rk(247, function() {
                return Ao(a, b, c, d, e)
            }),
            g = f.D;
        f = f.F;
        var h = !0 === f,
            k = L(d.style.width),
            l = L(d.style.height),
            m = Do(g, b, c, d, e, h);
        g = m.ba;
        h = m.Z;
        var q = m.ra;
        m = m.Qa;
        var u = Eo(b, q),
            y, G = (y = Qi(d, c, "marginLeft", L)) ? y + "px" : "",
            B = (y = Qi(d, c, "marginRight", L)) ? y + "px" : "";
        y = Qi(d, c, "zIndex") || "";
        return new lo(u, g, q, null, m, f, h, G, B, l, k, y)
    }

    function Bo(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Do(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Fe(c)) ? 4 : 3 : Ii(b);
        var g = !1,
            h = !1,
            k = 488 > Fe(c);
        if (k) {
            var l = Di(d, c);
            var m = Ti(d, c);
            g = !m && l;
            h = m && l
        }
        m = [Ri(a), ao(b)];
        m.push(Si(k, c, d, h));
        null != e.google_max_responsive_height && m.push(Vi(e.google_max_responsive_height));
        k = [function(u) {
            return !u.sb
        }];
        if (g || h) g = Wi(c, d), k.push(Vi(g));
        var q = yo(xo(m), xo(k));
        if (!q) throw new S("No slot size for availableWidth=" + a);
        m = rk(248, function() {
            var u;
            a: if (f) {
                if (e.gfwrnh && (u = L(e.gfwrnh))) {
                    u = {
                        ba: new to(a, u),
                        Z: !0
                    };
                    break a
                }
                u =
                    a / 1.2;
                var y = Math;
                var G = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var B = Infinity;
                else {
                    B = d;
                    var H = Infinity;
                    do {
                        var T = Qi(B, c, "height", L);
                        T && (H = Math.min(H, T));
                        (T = Qi(B, c, "maxHeight", L)) && (H = Math.min(H, T))
                    } while ((B = B.parentElement) && "HTML" != B.tagName);
                    B = H
                }
                y = G.call(y, u, B);
                if (y < .5 * u || 100 > y) y = u;
                u = {
                    ba: new to(a, Math.floor(y)),
                    Z: y < u ? 102 : !0
                }
            } else u = {
                ba: q,
                Z: 100
            };
            return u
        });
        g = m.ba;
        m = m.Z;
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
            ba: Fo(a,
                c, d, g, e),
            Z: !1,
            ra: b,
            Qa: l
        } : {
            ba: g,
            Z: m,
            ra: b,
            Qa: l
        }
    }

    function Eo(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function Fo(a, b, c, d, e) {
        var f = e.google_ad_height || Qi(c, b, "height", L);
        b = wo(a, b, c, f, e).size();
        return b.K * b.height() > a * d.height() ? new V(b.K, b.height(), 1) : d
    };

    function Go(a, b, c, d, e) {
        var f;
        (f = Fe(b)) ? 488 > Fe(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Oi(b, c), f = {
            D: f,
            F: !0
        }) : f = {
            D: a,
            F: 5
        } : f = {
            D: a,
            F: 4
        }: f = {
            D: a,
            F: 10
        };
        var g = f;
        f = g.D;
        g = g.F;
        if (!0 !== g || a == f) return new lo(12, new Pi(a, d), null, null, !0, g, 100);
        a = Do(f, "auto", b, c, e, !0);
        return new lo(1, a.ba, a.ra, 2, !0, g, a.Z)
    };

    function Ho(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = v(no), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Bo(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Io(b), 1);
        if (27 === b.google_reactive_ad_format) return Io(b), 1
    }

    function Jo(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Qi(b, d, "width", L) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = Ko(a, e, b, c, d)) ? f : Co(e, c.google_ad_format, d, b, c);
        f.size().h(d, c, b);
        mo(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function Ko(a, b, c, d, e) {
        var f = d.google_ad_height || Qi(c, e, "height", L);
        switch (a) {
            case 5:
                return f = rk(247, function() {
                    return Ao(b, d.google_ad_format, e, c, d)
                }), a = f.D, f = f.F, !0 === f && b != a && Oi(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), po(a, d);
            case 9:
                return so(b, d);
            case 8:
                return wo(b, e, c, f, d);
            case 10:
                return Go(b, e, c, f, d)
        }
    }

    function Io(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Lo(a, b) {
        var c = ad(b);
        if (c) {
            c = Fe(c);
            var d = fd(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var Mo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        No = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        Oo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        Po = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        Qo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function Ro(a) {
        pk.Ya(function(b) {
            b.shv = String(a);
            b.mjsv = "m202210130101";
            var c = P(oi).h(),
                d = U(x);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function So(a) {
        var b = a.xb;
        return a.lb || ("dev" === b ? "dev" : "")
    };
    var To = "undefined" === typeof sttc ? void 0 : sttc;

    function Uo(a) {
        var b = pk;
        try {
            return rc(a, eg), new km(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new km
    };

    function Vo(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Wo(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Xo() {
        var a = new p.Set,
            b = Yj();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Yo(a) {
        a = a.id;
        return null != a && (Xo().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }

    function Zo(a, b, c) {
        if (!a.sources) return !1;
        switch ($o(a)) {
            case 2:
                var d = ap(a);
                if (d) return c.some(function(f) {
                    return bp(d, f)
                });
            case 1:
                var e = cp(a);
                if (e) return b.some(function(f) {
                    return bp(e, f)
                })
        }
        return !1
    }

    function $o(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function cp(a) {
        return dp(a, function(b) {
            return b.currentRect
        })
    }

    function ap(a) {
        return dp(a, function(b) {
            return b.previousRect
        })
    }

    function dp(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function ep() {
        Ik.call(this);
        this.h = this.g = this.R = this.P = this.G = 0;
        this.Ea = this.Ba = Number.NEGATIVE_INFINITY;
        this.xa = this.za = this.Aa = this.Ca = this.Ha = this.l = this.Ga = this.Y = 0;
        this.ya = !1;
        this.T = this.I = this.B = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Fa = a ? a.getAttribute("data-google-query-id") : null;
        this.j = null;
        this.Da = !1;
        this.ja = function() {}
    }
    w(ep, Ik);

    function fp() {
        var a = new ep;
        if (Q(Bf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, gp(a).observe({
                    type: c,
                    buffered: !0
                });
                hp(a)
            }
        }
    }

    function gp(a) {
        a.j || (a.j = new PerformanceObserver(dj(640, function(b) {
            var c = ip !== window.scrollX || jp !== window.scrollY ? [] : kp,
                d = lp();
            b = v(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.G += Number(e.value);
                        Number(e.value) > f.P && (f.P = Number(e.value));
                        f.R += 1;
                        var g = Zo(e, c, d);
                        g && (f.l += e.value, f.Ca++);
                        if (5E3 < e.startTime - f.Ba || 1E3 < e.startTime - f.Ea) f.Ba = e.startTime, f.g = 0, f.h = 0;
                        f.Ea = e.startTime;
                        f.g += e.value;
                        g && (f.h += e.value);
                        f.g > f.Y && (f.Y = f.g, f.Ha = f.h, f.Ga = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.Aa = Math.floor(e.renderTime || e.loadTime);
                    a.za = e.size;
                    break;
                case "first-input":
                    a.xa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ya = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.B += e, a.I = Math.max(a.I, e), a.T += 1
            }
        })));
        return a.j
    }

    function hp(a) {
        var b = dj(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && mp(a)
            }),
            c = dj(641, function() {
                return void mp(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ja = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            gp(a).disconnect()
        }
    }
    ep.prototype.i = function() {
        Ik.prototype.i.call(this);
        this.ja()
    };

    function mp(a) {
        if (!a.Da) {
            a.Da = !0;
            gp(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Wo("cls", a.G), b += Wo("mls", a.P), b += Vo("nls", a.R), window.LayoutShiftAttribution && (b += Wo("cas", a.l), b += Vo("nas", a.Ca)), b += Wo("wls", a.Y), b += Wo("tls", a.Ga), window.LayoutShiftAttribution && (b += Wo("was", a.Ha)));
            window.LargestContentfulPaint && (b += Vo("lcp", a.Aa), b += Vo("lcps", a.za));
            window.PerformanceEventTiming && a.ya && (b += Vo("fid", a.xa));
            window.PerformanceLongTaskTiming &&
                (b += Vo("cbt", a.B), b += Vo("mbt", a.I), b += Vo("nlt", a.T));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Yo(e.value) && c++;
            b += Vo("nif", c);
            b += Vo("ifi", Gd(window));
            c = P(oi).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Fa ? "&qqid=" + encodeURIComponent(a.Fa) : Vo("pvsid", wd(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.u || (a.u = !0, a.i())
        }
    }

    function bp(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function lp() {
        var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(Yo),
            b = [].concat(ka(Xo())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        ip = window.scrollX;
        jp = window.scrollY;
        return kp = [].concat(ka(a), ka(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var ip = void 0,
        jp = void 0,
        kp = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function np(a, b, c) {
        Ik.call(this);
        var d = this;
        this.h = a;
        this.g = [];
        b && op() && this.g.push(X);
        c && this.g.push(Y);
        if (document.hasTrustToken && !Q(Sf)) {
            var e = new p.Map;
            this.g.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.h ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(ka(e), ka(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    w(np, Ik);

    function op() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function pp() {
        var a = void 0 === a ? window.document : a;
        var b = P(Xf).g(Vf.g, Vf.defaultValue);
        vd(b, a)
    }

    function qp(a, b) {
        return a || ".google.ch" === b || "function" === typeof M.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function rp() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function sp() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return rp()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), rp();
            Z(X.issuerOrigin, 9)
        })
    }

    function tp() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? rp() : sp()
        })
    }

    function up() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = wd(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = Yf(Uf);
                        Math.random() <= f && oe({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function vp(a) {
        if (document.hasTrustToken && !Q(Sf) && a.h) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.g.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = tp(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.g.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = up(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };

    function wp(a) {
        K.call(this, a, -1, xp)
    }
    w(wp, K);

    function yp(a, b) {
        return C(a, 2, b)
    }

    function zp(a, b) {
        return C(a, 3, b)
    }

    function Ap(a, b) {
        return C(a, 4, b)
    }

    function Bp(a, b) {
        return C(a, 5, b)
    }

    function Cp(a, b) {
        return C(a, 9, b)
    }

    function Dp(a, b) {
        return hc(a, 10, b)
    }

    function Ep(a, b) {
        return C(a, 11, b)
    }

    function Fp(a, b) {
        return C(a, 1, b)
    }

    function Gp(a, b) {
        return C(a, 7, b)
    }

    function Hp(a) {
        K.call(this, a)
    }
    w(Hp, K);
    Hp.prototype.getVersion = function() {
        return J(this, 2)
    };
    var xp = [10, 6];
    var Ip = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Jp() {
        var a;
        return null != (a = M.google_tag_data) ? a : M.google_tag_data = {}
    }

    function Kp() {
        var a, b;
        return "function" === typeof(null == (a = M.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Lp() {
        if (!Kp()) return null;
        var a = Jp();
        if (a.uach_promise) return a.uach_promise;
        var b = M.navigator.userAgentData.getHighEntropyValues(Ip).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function Mp(a) {
        var b;
        return Ep(Dp(Bp(yp(Fp(Ap(Gp(Cp(zp(new wp, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Hp;
            d = C(d, 1, c.brand);
            return C(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Np() {
        var a, b;
        return null != (b = null == (a = Lp()) ? void 0 : a.then(function(c) {
            return Mp(c)
        })) ? b : null
    };

    function Op(a, b) {
        b.google_ad_host || (a = Gm(a)) && (b.google_ad_host = a)
    }

    function Pp(a, b, c) {
        c = void 0 === c ? "" : c;
        M.google_sa_impl && !M.document.getElementById("google_shimpl") && (delete M.google_sa_queue, delete M.google_sa_impl);
        M.google_sa_queue || (M.google_sa_queue = [], M.google_process_slots = sk(215, function() {
            return Qp(M.google_sa_queue)
        }), a = Rp(c, a, b), bd(M.document, a).id = "google_shimpl")
    }

    function Qp(a) {
        var b = a.shift();
        "function" === typeof b && rk(216, b);
        a.length && x.setTimeout(sk(215, function() {
            return Qp(a)
        }), 0)
    }

    function Sp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Rp(a, b, c) {
        b = Lc(Kc(ic(c, 4) ? b.yb : b.zb).toString());
        var d = {};
        a: {
            if (ic(c, 4)) {
                if (a = a || kn(M)) {
                    c = {};
                    a = (c.client = a, c.plah = M.location.host, c);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        Tp(a, d);
        Tp(Zf() ? {
            bust: Zf()
        } : {}, d);
        return Ic(b, d)
    }

    function Tp(a, b) {
        kd(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Up(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            for (var c = [x.top], d = [], e = 0, f; f = c[e++];) {
                b && !$c(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < d.length; b++) try {
                var h = d[b].frames.google_esf;
                if (h) {
                    zd = h;
                    break a
                }
            } catch (k) {}
            zd = null
        }
        if (zd) return null;d = cd("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = Kc(a.Fb).toString();d.style.display = "none";
        return d
    }

    function Vp(a, b, c, d) {
        Wp(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" + h++;
            e = g;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0);
            g = cd("DIV");
            g.id = e + "_host";
            var l = g.style;
            l.border = "none";
            l.height = k + "px";
            l.width = h + "px";
            l.margin = "0px";
            l.padding = "0px";
            l.position = "relative";
            l.visibility = "visible";
            l.backgroundColor = "transparent";
            g.style.display = "inline-block";
            c.appendChild(g);
            f = (f = f.google_shadow_mode) && "string" === typeof f && "open" ===
                f ? "open" : "closed";
            a: {
                try {
                    if (Q(xf) && g) {
                        var m = g.attachShadow({
                            mode: f
                        });
                        break a
                    }
                } catch (q) {}
                m = void 0
            }
            return {
                mb: e,
                outerInsElement: g,
                innerInsElement: g,
                shadowRoot: m
            }
        })
    }

    function Wp(a, b, c, d, e) {
        var f = e(a, b);
        e = f.mb;
        Xp(a, c, b);
        c = Ta;
        var g = (new Date).getTime();
        b.google_lrv = J(d, 2);
        b.google_async_iframe_id = e;
        b.shadow_root = f.shadowRoot;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        Sp(a, function() {
            var h = f.outerInsElement,
                k = f.innerInsElement;
            if (!(h && k && h.isConnected && k.isConnected) && (k = a.document.getElementById(String(b.google_async_iframe_id) +
                    "_host"), h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == k || null == h)) throw Error("no_ins");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                outerInsElement: h,
                innerInsElement: k
            })) && uk(911, h)
        }, d)
    }

    function Xp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Zn[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = ld(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var u = a.parent;
                for (e = 0; u && u !== a && 25 > e; ++e) {
                    var y = u.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = u;
                    u = a.parent
                }
            } catch (G) {}
            c.google_ad_dom_fingerprint = ld(h + b.join()).toString()
        }
    }

    function Yp() {
        var a = ad(x);
        a && (a = De(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Zp(a) {
        pp();
        qp(om(), J(a, 8)) || sk(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = Q(b.PeriodicSyncManager ? Qf : Rf);
            var c = Q(Tf);
            b = new np(!0, b, c);
            0 < Yf(Wf) ? M.google_trust_token_operation_promise = vp(b) : vp(b)
        })();
        a = Np();
        null != a && a.then(function(b) {
            a: {
                Ib = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), oc);
                    break a
                } finally {
                    Ib = !1
                }
                c = void 0
            }
            M.google_user_agent_client_hint = c
        });
        yn()
    };

    function $p(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function aq(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Zc(c, "client");
            d && (b.google_ad_client = $p("google_ad_client", d));
            (c = Zc(c, "host")) && (b.google_ad_host = $p("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ua(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = $p(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function bq(a) {
        if (a = Cd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function cq(a, b, c, d) {
        aq(a, b);
        if (c.document && c.document.body && !Ho(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Lo(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Zn[e + "x" + g];
                var h = f;
                if (e) {
                    var k = $n(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new S("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = Co(f, "auto", c, a, b);
                h = f;
                g.size().h(c, b,
                    a);
                mo(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.K > f && !e && (b.google_ad_width = g.K, a.style.width = g.K + "px")
            }
        }
        e = a.offsetWidth || Qi(a, c, "width", L) || b.google_ad_width || 0;
        if (488 > Fe(c)) {
            f = ad(c) || c;
            g = b.google_ad_client;
            if (d = Wj(f.location, "google_responsive_slot_preview") || Q(sf) || qm(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Ho(c, b) || Fi(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = fd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!ib(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = Ji(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = Ho(c, b)) Jo(e, a, b, c, d);
        else {
            if (Fi(a, b)) {
                if (d = fd(a, c)) a.style.width = d.width, a.style.height = d.height, Ei(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = bq(c)
            } else Ei(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Jo(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Ki(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };
    var dq = ja(["(a=0)=>{let b;const c=class{};}"]);

    function eq() {
        var a = dq[0];
        var b = Dc();
        a = b ? b.createScript(a) : a;
        a = new Fc(a, Ec);
        try {
            b = window;
            var c = a instanceof Fc && a.constructor === Fc ? a.g : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return {
                supports: !0,
                error: ""
            }
        } catch (d) {
            return {
                supports: !1,
                error: String(d)
            }
        }
    };

    function fq(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Qc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function gq(a) {
        Ik.call(this);
        this.h = a;
        this.g = null
    }
    w(gq, Ik);
    gq.prototype.i = function() {
        Ik.prototype.i.call(this)
    };

    function hq(a) {
        Ik.call(this);
        this.j = a;
        this.g = null;
        this.h = !1
    }
    w(hq, Ik);
    var iq = null,
        jq = [],
        kq = new p.Map,
        lq = -1;

    function mq(a) {
        return Yi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function nq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        oq(a, b, c)
    }

    function oq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = cq);
        var e = b.google_reactive_ads_config;
        e || cq(a, b, d, c);
        Op(d, b);
        if (!pq(a, b, d)) {
            e || (d.google_lpabyc = Gi(a, d) + Qi(a, d, "height", L));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(M).page_contains_reactive_tag && !U(M).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Em(!1);
                        return
                    }
                    throw new S("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(M).page_contains_reactive_tag = !0;
                Em(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Fd(d);
            kd(fn, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(M).first_tag_on_page || 0);
            rk(164, function() {
                Vp(d, b, a, c)
            })
        }
    }

    function pq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Cm(c);
        if (f && f.Ia && "on" !== b.google_adtest && !e) {
            e = Gi(a, c);
            var g = Ee(c).clientHeight;
            if (!f.sa || f.sa && ((0 == g ? null : e / g) || 0) >= f.sa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Ka(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Cb && (null !== pd(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== pd(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = fd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function qq(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (mq(e) && "reserved" !== e.dataset.adsbygoogleStatus && (!a || d.id === a)) return d
        }
        return null
    }

    function rq(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    sq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function tq() {
        var a = cd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        sd(a, {
            display: "none"
        });
        return a
    }

    function uq(a, b) {
        var c = {};
        kd(Ae, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        Ja(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = tq();
        yd.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(M).pause_ad_requests;
        nq(d, e, b)
    }

    function vq(a, b) {
        function c() {
            return uq(a, b)
        }
        De(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) c();
        else {
            var e = Pc(sk(191, c));
            Qc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function sq(a, b, c) {
        var d = {};
        rk(165, function() {
            return wq(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function xq(a) {
        delete a.google_checked_head;
        kd(a, function(b, c) {
            Xi[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function yq(a, b) {
        var c = M.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || M.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) zq(c);
            else {
                var e = {};
                aq(c, e);
                xq(e);
                var f = Bc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                M.adsbygoogle || (M.adsbygoogle = []);
                d = M.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                var g;
                e.google_adbreak_test || (null == (g = kc(b, Zl, 13, Wb)) ? 0 : ic(g, 3)) && Q(yf) ? Aq(f, a) : fq(function() {
                    Aq(f, a)
                })
            }
        }
    }

    function zq(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Zc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new S("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Bq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function wq(a, b, c, d) {
        if (null == a) throw new S("push() called with no parameters.");
        Tb(d, $l, 14) && Cq(a, Zb(mm(d), 1), J(d, 2));
        var e = Bq(a);
        if (0 !== e) d = Fm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ta), null == iq ? (Dq(a), jq.push(a)) : 3 === e ? rk(787, function() {
            iq.handleAdConfig(a)
        }) : uk(730, iq.handleAdBreak(a));
        else {
            Ta = (new Date).getTime();
            Pp(c, d, Eq(a));
            Fq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new S("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Gq(a, d);
            else if ((e = a.params) && kd(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Hq(a.element);
                aq(e, b);
                c = U(x).head_tag_slot_vars || {};
                kd(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !U(x).head_tag_slot_vars) throw new S("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new S("Ad client is missing from the slot.");
                Q(wf) || (b.google_apsail = wm(b.google_ad_client));
                var f = (c = 0 === (U(M).first_tag_on_page || 0) && Zm(b)) && $m(c);
                c && (f || (Gq(c, d), U(M).skip_next_reactive_tag = !0), Q(vf) && f && Iq(c));
                0 === (U(M).first_tag_on_page || 0) && (U(M).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(M).pause_ad_requests;
                nq(e, b, d);
                !Q(vf) && c && f && Iq(c)
            }
        }
    }
    var Jq = !1;

    function Cq(a, b, c) {
        Jq || (Jq = !0, a = Eq(a) || kn(M), tk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Eq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Fq() {
        if (Q(mf)) {
            var a = Cm(M);
            if (!(a = a && a.Ia)) {
                try {
                    var b = M.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Yl(b) : null;
                a = !(b && Xl(b) && b)
            }
            a || Dm(M, 1)
        }
    }

    function Iq(a) {
        xd(function() {
            De(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function Gq(a, b) {
        if (U(M).skip_next_reactive_tag) U(M).skip_next_reactive_tag = !1;
        else {
            0 === (U(M).first_tag_on_page || 0) && (U(M).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = U(x);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            an(a, b);
            vq(a, b)
        }
    }

    function Hq(a) {
        if (a) {
            if (!mq(a) && (a.id ? a = qq(a.id) : a = null, !a)) throw new S("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new S("'element' is not a good DOM element.");
        } else if (a = qq(), !a) throw new S("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Kq() {
        var a = new Kk(M),
            b = new gq(M),
            c = new hq(M),
            d = M.__cmp ? 1 : 0;
        a = Lk(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null == (e = b.h) ? void 0 : e.__uspapi)) || (b.g ? b = b.g : (b.g = qd(b.h, "__uspapiLocator"), b = b.g), f = null != b);
        c.h || (c.g || (c.g = qd(c.j, "googlefcPresent")), c.h = !0);
        tk("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.g ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function Lq(a) {
        yk().S[Ak(26)] = !!Number(a)
    }

    function Mq(a) {
        Number(a) ? U(M).pause_ad_requests = !0 : (U(M).pause_ad_requests = !1, a = function() {
            if (!U(M).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                M.dispatchEvent(c)
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function Nq(a) {
        tk("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        M._gfp_a_ = a
    }

    function Oq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Aq(a, b) {
        b = Xm(Ic(Lc(Kc(b.Bb).toString()), Zf() ? {
            bust: Zf()
        } : {})).then(function(c) {
            null == iq && (c.init(a), iq = c, Pq())
        });
        uk(723, b);
        r(b, "finally").call(b, function() {
            jq.length = 0;
            tk("slotcar", {
                event: "api_ld",
                time: Date.now() - Ta,
                time_pr: Date.now() - lq
            })
        })
    }

    function Pq() {
        for (var a = v(kq), b = a.next(); !b.done; b = a.next()) {
            var c = v(b.value);
            b = c.next().value;
            c = c.next().value; - 1 !== c && (x.clearTimeout(c), kq.delete(b))
        }
        a = {};
        for (b = 0; b < jq.length; a = {
                ia: a.ia,
                ea: a.ea
            }, b++) kq.has(b) || (a.ea = jq[b], a.ia = Bq(a.ea), rk(723, function(d) {
            return function() {
                3 === d.ia ? iq.handleAdConfig(d.ea) : 2 === d.ia && uk(730, iq.handleAdBreakBeforeReady(d.ea))
            }
        }(a)))
    }

    function Dq(a) {
        var b = jq.length;
        if (2 === Bq(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === lq && (lq = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), kq.set(b, -1), tk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * Yf(zf));
            kq.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        pk.Za(vk);
        rk(166, function() {
            var e = Uo(b);
            Ro(J(e, 2));
            pm(ic(e, 6));
            d();
            Bd(16, [1, e.toJSON()]);
            var f = Dd(Cd(M)) || M,
                g = c(So({
                    lb: a,
                    xb: J(e, 2)
                }), e);
            tm(f, e);
            Yn(f, e, null === M.document.currentScript ? 1 : vn(g.Eb));
            Q(nf) ? qn() : sn();
            if (!Ya() || 0 <= Va(ab(), 11)) {
                qk(Q(Cf));
                Zp(e);
                Kl();
                try {
                    fp()
                } catch (q) {}
                Yp();
                yq(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    tk("new_abg_tag", {
                        value: String(ic(e, 16)),
                        frequency: .01
                    }, .01);
                    Kq();
                    var k = {
                        push: function(q) {
                            sq(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k,
                            "requestNonPersonalizedAds", {
                                set: Lq
                            }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Mq
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Nq
                        }), Object.defineProperty(k, "onload", {
                            set: Oq
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = v(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    rq(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (f = Up(g)) && document.documentElement.appendChild(f);
                    f = eq();
                    tk("modern_js", {
                        fy: I(A(e, 1), 0),
                        supports: String(f.supports),
                        c: 2012,
                        e: f.error
                    }, .01)
                }
            }
        })
    })("m202210130101", To, function(a, b) {
        var c = 2012 < I(A(b, 1), 0) ? "_fy" + I(A(b, 1), 0) : "",
            d = J(b, 3),
            e = J(b, 2);
        b = Ed(Mo, a, c);
        d = Ed(No, e, d);
        return {
            Bb: b,
            zb: Ed(Oo, a, c),
            yb: Ed(Po, a, c),
            ec: Ed(Qo, a, c),
            Fb: d,
            Eb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20221017\",\"r20190131\",null,null,null,null,\".google.com.sa\",null,null,null,[[[1082,null,null,[1]],[1209,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1159,null,[null,500]],[1122,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1206,null,null,[1]],[1184,null,null,[1]],[1190,null,null,[1]],[380254521,null,null,[1]],[381914117,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[63669,null,null,[1]],[1033,null,null,[1]],[null,null,null,[null,null,null,[\"A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui\/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+zsdH3aNZT\/bkjT8U\/o5ACzyaeNYzTvtoVmwf\/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ\/BdfVnbM\/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr\/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1947,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,1165,null,[null,1000]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1115,null,[null,-1]],[null,1194,null,[null,1]],[null,469675170,null,[null,30000]],[1186,null,null,[1]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[10,[[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[500,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44768832,[[1160,null,null,[1]]]]]],[10,[[44767166],[44767167]]],[10,[[44769305],[44769306,[[313,null,null,[1]]]]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44770147],[44770148,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44773339,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44773340,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[null,[[44771607],[44771608,[[1200,null,null,[1]]]]],null,51],[50,[[44773613],[44773614,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1000,[[44774652,null,[4,null,6,null,null,null,null,[\"44774648\"]]],[44774653,[[1086,null,null,[1]]],[4,null,6,null,null,null,null,[\"44774649\"]]]]],[10,[[44775121,[[null,null,1166,[null,null,\"h.3.0.0\"]],[10000,null,null,[1]]]],[44776004]],null,51],[1,[[44775965],[44775966,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44776360],[44776361,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[21066428],[21066429]]],[50,[[31069177],[31069178,[[1198,null,null,[1]]]]]],[10,[[31069972],[31069973,[[1208,null,null,[1]]]]]],[1,[[31070201],[31070202,[[1210,null,null,[1]]]]]],[1000,[[31070319,[[null,null,14,[null,null,\"31070319\"]]],[6,null,null,null,6,null,\"31070319\"]],[31070320,[[null,null,14,[null,null,\"31070320\"]]],[6,null,null,null,6,null,\"31070320\"]]],[4,null,55],63],[1000,[[31070367,[[null,null,14,[null,null,\"31070367\"]]],[6,null,null,null,6,null,\"31070367\"]],[31070368,[[null,null,14,[null,null,\"31070368\"]]],[6,null,null,null,6,null,\"31070368\"]]],[4,null,55],63],[100,[[31070385],[31070386,[[1211,null,null,[1]]]]]],[1000,[[31070415,[[null,null,14,[null,null,\"31070415\"]]],[6,null,null,null,6,null,\"31070415\"]],[31070416,[[null,null,14,[null,null,\"31070416\"]]],[6,null,null,null,6,null,\"31070416\"]]],[4,null,55],63],[10,[[31070423],[31070424,[[1212,null,null,[1]]]]]],[10,[[31070425],[31070426,[[1213,null,null,[1]]]]]],[10,[[44770765],[44770766,[[1134,null,null,[1]]]]]],[50,[[44770880],[44770881,[[1171,null,null,[1]]]]]],[1,[[44772268],[44772269,[[1185,null,null,[1]]]]]],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[10,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44775016],[44775017,[[473283545,null,null,[1]]]]],null,66],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[31068455],[31068456],[44775620],[44775621],[44776074]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[17,[[50,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]],[10,[[31069794,[[null,1103,null,[null,31069794]]]],[31069795,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31069795]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,null,null,115],[1,[[31070275,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31070275]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]]]],[31070276,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31070276]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,300]],[null,1194,null,[null,2]],[471262996,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,40,null,115],[1,[[31070278,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31070278]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]]]],[31070279,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31070279]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[471262996,null,null,[1]],[469675169,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,60,null,115],[1,[[31070280,[[null,1103,null,[null,31070280]],[1121,null,null,[1]]]],[31070281,[[1120,null,null,[1]],[null,1103,null,[null,31070281]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[1121,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,80,null,115],[10,[[44775305,[[null,1103,null,[null,44775305]]]],[44775306,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44775306]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,20,null,115],[10,[[44776362,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44776362]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]],[44776363,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44776363]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]],[479047366,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,140,null,115],[10,[[44776447,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44776447]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]]]],[44776448,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44776448]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[478725123,null,null,[1]]]],[44776449,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44776449]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]],[44776450,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44776450]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[478725123,null,null,[1]],[472491850,null,null,[1]]]],[44776451,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44776451]],[1192,null,null,[1]],[473840707,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[469675169,null,null,[1]],[479047366,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],null,null,null,null,90,null,115]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102],[50,[[31068919],[31068920],[31068921]],null,null,null,null,null,401,null,102]]],[13,[[10,[[31065824],[31065825,[[424117738,null,null,[1]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[10,[[31069563],[31069564,[[471682731,null,null,[1]]]]]],[1000,[[31069602]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[1000,[[31069603,null,[4,null,8,null,null,null,null,[\"anonymouslyFramed\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[10,[[31070380],[31070381,[[477209535,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]],[1000,[[31070382,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[200,[[31070383,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]],[31070384,[[null,null,null,[null,null,null,[\"A\/6fvn8\/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N\/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nrjb\/iPi\/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,472572701],[439828594,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[50,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[null,[[31067825],[31067826,[[1971,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,\"31070415\",null,null,1991417376,[44759876,44759927,44759842]]");