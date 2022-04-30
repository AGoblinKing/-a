(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/@mediapipe/holistic/holistic.js
  var require_holistic = __commonJS({
    "node_modules/@mediapipe/holistic/holistic.js"(exports) {
      (function() {
        "use strict";
        var x;
        function aa(a) {
          var b = 0;
          return function() {
            return b < a.length ? { done: false, value: a[b++] } : { done: true };
          };
        }
        var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
          if (a == Array.prototype || a == Object.prototype)
            return a;
          a[b] = c.value;
          return a;
        };
        function ca(a) {
          a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
              return c;
          }
          throw Error("Cannot find global object");
        }
        var y = ca(this);
        function z(a, b) {
          if (b)
            a: {
              var c = y;
              a = a.split(".");
              for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c))
                  break a;
                c = c[e];
              }
              a = a[a.length - 1];
              d = c[a];
              b = b(d);
              b != d && b != null && ba(c, a, { configurable: true, writable: true, value: b });
            }
        }
        z("Symbol", function(a) {
          function b(g) {
            if (this instanceof b)
              throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + e++, g);
          }
          function c(g, f) {
            this.g = g;
            ba(this, "description", { configurable: true, writable: true, value: f });
          }
          if (a)
            return a;
          c.prototype.toString = function() {
            return this.g;
          };
          var d = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", e = 0;
          return b;
        });
        z("Symbol.iterator", function(a) {
          if (a)
            return a;
          a = Symbol("Symbol.iterator");
          for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = y[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, { configurable: true, writable: true, value: function() {
              return da(aa(this));
            } });
          }
          return a;
        });
        function da(a) {
          a = { next: a };
          a[Symbol.iterator] = function() {
            return this;
          };
          return a;
        }
        function B(a) {
          var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : { next: aa(a) };
        }
        function D(a) {
          if (!(a instanceof Array)) {
            a = B(a);
            for (var b, c = []; !(b = a.next()).done; )
              c.push(b.value);
            a = c;
          }
          return a;
        }
        var ea = typeof Object.create == "function" ? Object.create : function(a) {
          function b() {
          }
          b.prototype = a;
          return new b();
        }, fa;
        if (typeof Object.setPrototypeOf == "function")
          fa = Object.setPrototypeOf;
        else {
          var ha;
          a: {
            var ia = { a: true }, ja = {};
            try {
              ja.__proto__ = ia;
              ha = ja.a;
              break a;
            } catch (a) {
            }
            ha = false;
          }
          fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
            return a;
          } : null;
        }
        var ka = fa;
        function E(a, b) {
          a.prototype = ea(b.prototype);
          a.prototype.constructor = a;
          if (ka)
            ka(a, b);
          else
            for (var c in b)
              if (c != "prototype")
                if (Object.defineProperties) {
                  var d = Object.getOwnPropertyDescriptor(b, c);
                  d && Object.defineProperty(a, c, d);
                } else
                  a[c] = b[c];
          a.da = b.prototype;
        }
        function la() {
          this.l = false;
          this.i = null;
          this.h = void 0;
          this.g = 1;
          this.s = this.m = 0;
          this.j = null;
        }
        function ma(a) {
          if (a.l)
            throw new TypeError("Generator is already running");
          a.l = true;
        }
        la.prototype.o = function(a) {
          this.h = a;
        };
        function na(a, b) {
          a.j = { U: b, V: true };
          a.g = a.m || a.s;
        }
        la.prototype.return = function(a) {
          this.j = { return: a };
          this.g = this.s;
        };
        function F(a, b, c) {
          a.g = c;
          return { value: b };
        }
        function oa(a) {
          this.g = new la();
          this.h = a;
        }
        function pa(a, b) {
          ma(a.g);
          var c = a.g.i;
          if (c)
            return qa(a, "return" in c ? c["return"] : function(d) {
              return { value: d, done: true };
            }, b, a.g.return);
          a.g.return(b);
          return ra(a);
        }
        function qa(a, b, c, d) {
          try {
            var e = b.call(a.g.i, c);
            if (!(e instanceof Object))
              throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
              return a.g.l = false, e;
            var g = e.value;
          } catch (f) {
            return a.g.i = null, na(a.g, f), ra(a);
          }
          a.g.i = null;
          d.call(a.g, g);
          return ra(a);
        }
        function ra(a) {
          for (; a.g.g; )
            try {
              var b = a.h(a.g);
              if (b)
                return a.g.l = false, { value: b.value, done: false };
            } catch (c) {
              a.g.h = void 0, na(a.g, c);
            }
          a.g.l = false;
          if (a.g.j) {
            b = a.g.j;
            a.g.j = null;
            if (b.V)
              throw b.U;
            return { value: b.return, done: true };
          }
          return { value: void 0, done: true };
        }
        function sa(a) {
          this.next = function(b) {
            ma(a.g);
            a.g.i ? b = qa(a, a.g.i.next, b, a.g.o) : (a.g.o(b), b = ra(a));
            return b;
          };
          this.throw = function(b) {
            ma(a.g);
            a.g.i ? b = qa(a, a.g.i["throw"], b, a.g.o) : (na(a.g, b), b = ra(a));
            return b;
          };
          this.return = function(b) {
            return pa(a, b);
          };
          this[Symbol.iterator] = function() {
            return this;
          };
        }
        function ta(a) {
          function b(d) {
            return a.next(d);
          }
          function c(d) {
            return a.throw(d);
          }
          return new Promise(function(d, e) {
            function g(f) {
              f.done ? d(f.value) : Promise.resolve(f.value).then(b, c).then(g, e);
            }
            g(a.next());
          });
        }
        function H(a) {
          return ta(new sa(new oa(a)));
        }
        z("Promise", function(a) {
          function b(f) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.o = false;
            var k = this.j();
            try {
              f(k.resolve, k.reject);
            } catch (h) {
              k.reject(h);
            }
          }
          function c() {
            this.g = null;
          }
          function d(f) {
            return f instanceof b ? f : new b(function(k) {
              k(f);
            });
          }
          if (a)
            return a;
          c.prototype.h = function(f) {
            if (this.g == null) {
              this.g = [];
              var k = this;
              this.i(function() {
                k.l();
              });
            }
            this.g.push(f);
          };
          var e = y.setTimeout;
          c.prototype.i = function(f) {
            e(f, 0);
          };
          c.prototype.l = function() {
            for (; this.g && this.g.length; ) {
              var f = this.g;
              this.g = [];
              for (var k = 0; k < f.length; ++k) {
                var h = f[k];
                f[k] = null;
                try {
                  h();
                } catch (l) {
                  this.j(l);
                }
              }
            }
            this.g = null;
          };
          c.prototype.j = function(f) {
            this.i(function() {
              throw f;
            });
          };
          b.prototype.j = function() {
            function f(l) {
              return function(n) {
                h || (h = true, l.call(k, n));
              };
            }
            var k = this, h = false;
            return { resolve: f(this.C), reject: f(this.l) };
          };
          b.prototype.C = function(f) {
            if (f === this)
              this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (f instanceof b)
              this.F(f);
            else {
              a:
                switch (typeof f) {
                  case "object":
                    var k = f != null;
                    break a;
                  case "function":
                    k = true;
                    break a;
                  default:
                    k = false;
                }
              k ? this.v(f) : this.m(f);
            }
          };
          b.prototype.v = function(f) {
            var k = void 0;
            try {
              k = f.then;
            } catch (h) {
              this.l(h);
              return;
            }
            typeof k == "function" ? this.G(k, f) : this.m(f);
          };
          b.prototype.l = function(f) {
            this.s(2, f);
          };
          b.prototype.m = function(f) {
            this.s(1, f);
          };
          b.prototype.s = function(f, k) {
            if (this.h != 0)
              throw Error("Cannot settle(" + f + ", " + k + "): Promise already settled in state" + this.h);
            this.h = f;
            this.i = k;
            this.h === 2 && this.D();
            this.A();
          };
          b.prototype.D = function() {
            var f = this;
            e(function() {
              if (f.B()) {
                var k = y.console;
                typeof k !== "undefined" && k.error(f.i);
              }
            }, 1);
          };
          b.prototype.B = function() {
            if (this.o)
              return false;
            var f = y.CustomEvent, k = y.Event, h = y.dispatchEvent;
            if (typeof h === "undefined")
              return true;
            typeof f === "function" ? f = new f("unhandledrejection", { cancelable: true }) : typeof k === "function" ? f = new k("unhandledrejection", { cancelable: true }) : (f = y.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", false, true, f));
            f.promise = this;
            f.reason = this.i;
            return h(f);
          };
          b.prototype.A = function() {
            if (this.g != null) {
              for (var f = 0; f < this.g.length; ++f)
                g.h(this.g[f]);
              this.g = null;
            }
          };
          var g = new c();
          b.prototype.F = function(f) {
            var k = this.j();
            f.J(k.resolve, k.reject);
          };
          b.prototype.G = function(f, k) {
            var h = this.j();
            try {
              f.call(k, h.resolve, h.reject);
            } catch (l) {
              h.reject(l);
            }
          };
          b.prototype.then = function(f, k) {
            function h(p2, m) {
              return typeof p2 == "function" ? function(q2) {
                try {
                  l(p2(q2));
                } catch (t) {
                  n(t);
                }
              } : m;
            }
            var l, n, r = new b(function(p2, m) {
              l = p2;
              n = m;
            });
            this.J(h(f, l), h(k, n));
            return r;
          };
          b.prototype.catch = function(f) {
            return this.then(void 0, f);
          };
          b.prototype.J = function(f, k) {
            function h() {
              switch (l.h) {
                case 1:
                  f(l.i);
                  break;
                case 2:
                  k(l.i);
                  break;
                default:
                  throw Error("Unexpected state: " + l.h);
              }
            }
            var l = this;
            this.g == null ? g.h(h) : this.g.push(h);
            this.o = true;
          };
          b.resolve = d;
          b.reject = function(f) {
            return new b(function(k, h) {
              h(f);
            });
          };
          b.race = function(f) {
            return new b(function(k, h) {
              for (var l = B(f), n = l.next(); !n.done; n = l.next())
                d(n.value).J(k, h);
            });
          };
          b.all = function(f) {
            var k = B(f), h = k.next();
            return h.done ? d([]) : new b(function(l, n) {
              function r(q2) {
                return function(t) {
                  p2[q2] = t;
                  m--;
                  m == 0 && l(p2);
                };
              }
              var p2 = [], m = 0;
              do
                p2.push(void 0), m++, d(h.value).J(r(p2.length - 1), n), h = k.next();
              while (!h.done);
            });
          };
          return b;
        });
        function ua(a, b) {
          a instanceof String && (a += "");
          var c = 0, d = false, e = { next: function() {
            if (!d && c < a.length) {
              var g = c++;
              return { value: b(g, a[g]), done: false };
            }
            d = true;
            return { done: true, value: void 0 };
          } };
          e[Symbol.iterator] = function() {
            return e;
          };
          return e;
        }
        var va = typeof Object.assign == "function" ? Object.assign : function(a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
              for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
          }
          return a;
        };
        z("Object.assign", function(a) {
          return a || va;
        });
        z("Object.is", function(a) {
          return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
          };
        });
        z("Array.prototype.includes", function(a) {
          return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var g = d[c];
              if (g === b || Object.is(g, b))
                return true;
            }
            return false;
          };
        });
        z("String.prototype.includes", function(a) {
          return a ? a : function(b, c) {
            if (this == null)
              throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp)
              throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return this.indexOf(b, c || 0) !== -1;
          };
        });
        z("Array.prototype.keys", function(a) {
          return a ? a : function() {
            return ua(this, function(b) {
              return b;
            });
          };
        });
        var wa = this || self;
        function I(a, b) {
          a = a.split(".");
          var c = wa;
          a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
          for (var d; a.length && (d = a.shift()); )
            a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
        }
        ;
        function xa(a) {
          wa.setTimeout(function() {
            throw a;
          }, 0);
        }
        ;
        function ya(a) {
          xa(a);
          return;
          throw Error("invalid error level: 1");
        }
        function za(a, b) {
          ya(Error("Invalid wire type: " + a + " (at position " + b + ")"));
        }
        function Aa() {
          ya(Error("Failed to read varint, encoding is invalid."));
        }
        ;
        function Ba(a, b) {
          b = String.fromCharCode.apply(null, b);
          return a == null ? b : a + b;
        }
        var Ca, Da = typeof TextDecoder !== "undefined", Ea, Fa = typeof TextEncoder !== "undefined";
        function Ga(a) {
          if (Fa)
            a = (Ea || (Ea = new TextEncoder())).encode(a);
          else {
            var b = void 0;
            b = b === void 0 ? false : b;
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
              var g = a.charCodeAt(e);
              if (128 > g)
                d[c++] = g;
              else {
                if (2048 > g)
                  d[c++] = g >> 6 | 192;
                else {
                  if (55296 <= g && 57343 >= g) {
                    if (56319 >= g && e < a.length) {
                      var f = a.charCodeAt(++e);
                      if (56320 <= f && 57343 >= f) {
                        g = 1024 * (g - 55296) + f - 56320 + 65536;
                        d[c++] = g >> 18 | 240;
                        d[c++] = g >> 12 & 63 | 128;
                        d[c++] = g >> 6 & 63 | 128;
                        d[c++] = g & 63 | 128;
                        continue;
                      } else
                        e--;
                    }
                    if (b)
                      throw Error("Found an unpaired surrogate");
                    g = 65533;
                  }
                  d[c++] = g >> 12 | 224;
                  d[c++] = g >> 6 & 63 | 128;
                }
                d[c++] = g & 63 | 128;
              }
            }
            a = d.subarray(0, c);
          }
          return a;
        }
        ;
        var Ha = {}, Ia = null;
        function Ja(a) {
          var b;
          b === void 0 && (b = 0);
          Ka();
          b = Ha[b];
          for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, g = 0; e < a.length - 2; e += 3) {
            var f = a[e], k = a[e + 1], h = a[e + 2], l = b[f >> 2];
            f = b[(f & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[g++] = l + f + k + h;
          }
          l = 0;
          h = d;
          switch (a.length - e) {
            case 2:
              l = a[e + 1], h = b[(l & 15) << 2] || d;
            case 1:
              a = a[e], c[g] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + h + d;
          }
          return c.join("");
        }
        function La(a) {
          var b = a.length, c = 3 * b / 4;
          c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
          var d = new Uint8Array(c), e = 0;
          Ma(a, function(g) {
            d[e++] = g;
          });
          return d.subarray(0, e);
        }
        function Ma(a, b) {
          function c(h) {
            for (; d < a.length; ) {
              var l = a.charAt(d++), n = Ia[l];
              if (n != null)
                return n;
              if (!/^[\s\xa0]*$/.test(l))
                throw Error("Unknown base64 encoding at char: " + l);
            }
            return h;
          }
          Ka();
          for (var d = 0; ; ) {
            var e = c(-1), g = c(0), f = c(64), k = c(64);
            if (k === 64 && e === -1)
              break;
            b(e << 2 | g >> 4);
            f != 64 && (b(g << 4 & 240 | f >> 2), k != 64 && b(f << 6 & 192 | k));
          }
        }
        function Ka() {
          if (!Ia) {
            Ia = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
              var d = a.concat(b[c].split(""));
              Ha[c] = d;
              for (var e = 0; e < d.length; e++) {
                var g = d[e];
                Ia[g] === void 0 && (Ia[g] = e);
              }
            }
          }
        }
        ;
        var Na = typeof Uint8Array === "function", Oa;
        function Pa(a) {
          this.g = a;
          if (a !== null && a.length === 0)
            throw Error("ByteString should be constructed with non-empty values");
        }
        Pa.prototype.toJSON = function() {
          if (this.g == null)
            var a = "";
          else
            a = this.g, a = this.g = a == null || typeof a === "string" ? a : Na && a instanceof Uint8Array ? Ja(a) : null;
          return a;
        };
        var Qa = typeof Uint8Array.prototype.slice === "function";
        function Ra(a, b, c) {
          return b === c ? Oa || (Oa = new Uint8Array(0)) : Qa ? a.slice(b, c) : new Uint8Array(a.subarray(b, c));
        }
        var K = 0, L = 0;
        function Sa(a) {
          if (a.constructor === Uint8Array)
            return a;
          if (a.constructor === ArrayBuffer)
            return new Uint8Array(a);
          if (a.constructor === Array)
            return new Uint8Array(a);
          if (a.constructor === String)
            return La(a);
          if (a.constructor === Pa) {
            if (a.g == null)
              var b = Oa || (Oa = new Uint8Array(0));
            else {
              b = Uint8Array;
              var c = a.g;
              c = c == null || Na && c != null && c instanceof Uint8Array ? c : typeof c === "string" ? La(c) : null;
              a = a.g = c;
              b = new b(a);
            }
            return b;
          }
          if (a instanceof Uint8Array)
            return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
          throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers");
        }
        ;
        function Ta(a, b) {
          b = b === void 0 ? {} : b;
          b = b.u === void 0 ? false : b.u;
          this.h = null;
          this.g = this.i = this.m = 0;
          this.l = false;
          this.u = b;
          a && Ua(this, a);
        }
        function Ua(a, b) {
          a.h = Sa(b);
          a.m = 0;
          a.i = a.h.length;
          a.g = a.m;
        }
        Ta.prototype.reset = function() {
          this.g = this.m;
        };
        function Va(a) {
          for (var b = 128, c = 0, d = 0, e = 0; 4 > e && 128 <= b; e++)
            b = a.h[a.g++], c |= (b & 127) << 7 * e;
          128 <= b && (b = a.h[a.g++], c |= (b & 127) << 28, d |= (b & 127) >> 4);
          if (128 <= b)
            for (e = 0; 5 > e && 128 <= b; e++)
              b = a.h[a.g++], d |= (b & 127) << 7 * e + 3;
          if (128 > b) {
            a = c >>> 0;
            b = d >>> 0;
            if (d = b & 2147483648)
              a = ~a + 1 >>> 0, b = ~b >>> 0, a == 0 && (b = b + 1 >>> 0);
            a = 4294967296 * b + (a >>> 0);
            return d ? -a : a;
          }
          a.l = true;
          Aa();
        }
        function M(a) {
          a.g > a.i && (a.l = true, ya(Error("Tried to read past the end of the data " + a.g + " > " + a.i)));
        }
        Ta.prototype.j = function() {
          var a = this.h, b = a[this.g], c = b & 127;
          if (128 > b)
            return this.g += 1, M(this), c;
          b = a[this.g + 1];
          c |= (b & 127) << 7;
          if (128 > b)
            return this.g += 2, M(this), c;
          b = a[this.g + 2];
          c |= (b & 127) << 14;
          if (128 > b)
            return this.g += 3, M(this), c;
          b = a[this.g + 3];
          c |= (b & 127) << 21;
          if (128 > b)
            return this.g += 4, M(this), c;
          b = a[this.g + 4];
          c |= (b & 15) << 28;
          if (128 > b)
            return this.g += 5, M(this), c >>> 0;
          this.g += 5;
          if (128 <= a[this.g++] && 128 <= a[this.g++] && 128 <= a[this.g++] && 128 <= a[this.g++] && 128 <= a[this.g++])
            return this.l = true, Aa(), c;
          M(this);
          return c;
        };
        Ta.prototype.o = function() {
          var a = this.h[this.g], b = this.h[this.g + 1];
          var c = this.h[this.g + 2];
          var d = this.h[this.g + 3];
          this.g += 4;
          M(this);
          c = (a << 0 | b << 8 | c << 16 | d << 24) >>> 0;
          a = 2 * (c >> 31) + 1;
          b = c >>> 23 & 255;
          c &= 8388607;
          return b == 255 ? c ? NaN : Infinity * a : b == 0 ? a * Math.pow(2, -149) * c : a * Math.pow(2, b - 150) * (c + Math.pow(2, 23));
        };
        var Wa = [];
        function Xa() {
          this.g = new Uint8Array(64);
          this.h = 0;
        }
        function N(a, b) {
          if (!(a.h + 1 < a.g.length)) {
            var c = a.g;
            a.g = new Uint8Array(Math.ceil(1 + 2 * a.g.length));
            a.g.set(c);
          }
          a.g[a.h++] = b;
        }
        Xa.prototype.length = function() {
          return this.h;
        };
        Xa.prototype.end = function() {
          var a = this.g, b = this.h;
          this.h = 0;
          return Ra(a, 0, b);
        };
        function Ya(a, b) {
          for (; 127 < b; )
            N(a, b & 127 | 128), b >>>= 7;
          N(a, b);
        }
        ;
        function Za(a) {
          var b = {}, c = b.N === void 0 ? false : b.N;
          this.m = { u: b.u === void 0 ? false : b.u };
          this.N = c;
          b = this.m;
          Wa.length ? (c = Wa.pop(), b && (c.u = b.u), a && Ua(c, a), a = c) : a = new Ta(a, b);
          this.g = a;
          this.l = this.g.g;
          this.h = this.i = -1;
          this.j = false;
        }
        Za.prototype.reset = function() {
          this.g.reset();
          this.h = this.i = -1;
        };
        function $a(a) {
          var b = a.g;
          (b = b.g == b.i) || (b = a.j) || (b = a.g, b = b.l || 0 > b.g || b.g > b.i);
          if (b)
            return false;
          a.l = a.g.g;
          var c = a.g.j();
          b = c >>> 3;
          c &= 7;
          if (!(0 <= c && 5 >= c))
            return a.j = true, za(c, a.l), false;
          a.i = b;
          a.h = c;
          return true;
        }
        function ab(a) {
          switch (a.h) {
            case 0:
              if (a.h != 0)
                ab(a);
              else
                a: {
                  a = a.g;
                  for (var b = a.g, c = 0; 10 > c; c++) {
                    if ((a.h[b] & 128) === 0) {
                      a.g = b + 1;
                      M(a);
                      break a;
                    }
                    b++;
                  }
                  a.l = true;
                  Aa();
                }
              break;
            case 1:
              a = a.g;
              a.g += 8;
              M(a);
              break;
            case 2:
              a.h != 2 ? ab(a) : (b = a.g.j(), a = a.g, a.g += b, M(a));
              break;
            case 5:
              a = a.g;
              a.g += 4;
              M(a);
              break;
            case 3:
              b = a.i;
              do {
                if (!$a(a)) {
                  a.j = true;
                  ya(Error("Unmatched start-group tag: stream EOF"));
                  break;
                }
                if (a.h == 4) {
                  a.i != b && (a.j = true, ya(Error("Unmatched end-group tag")));
                  break;
                }
                ab(a);
              } while (1);
              break;
            default:
              a.j = true, za(a.h, a.l);
          }
        }
        function bb3(a, b, c) {
          a.N || (a = Ra(a.g.h, c, a.g.g), (c = b.o) ? c.push(a) : b.o = [a]);
        }
        function cb(a, b, c) {
          var d = a.g.i, e = a.g.j(), g = a.g.g + e;
          a.g.i = g;
          c(b, a);
          c = g - a.g.g;
          if (c !== 0)
            throw Error("Message parsing ended unexpectedly. Expected to read " + (e + " bytes, instead read " + (e - c) + " bytes, either the data ended unexpectedly or the message misreported its own length"));
          a.g.g = g;
          a.g.i = d;
          return b;
        }
        function db(a, b, c) {
          var d = a.g.j();
          for (d = a.g.g + d; a.g.g < d; )
            c.push(b.call(a.g));
        }
        var eb = [];
        function fb() {
          this.h = [];
          this.i = 0;
          this.g = new Xa();
        }
        function gb(a, b) {
          b.length !== 0 && (a.h.push(b), a.i += b.length);
        }
        function hb(a, b, c) {
          Ya(a.g, 8 * b + 2);
          Ya(a.g, c.length);
          gb(a, a.g.end());
          gb(a, c);
        }
        ;
        var ib = typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol(void 0) : void 0;
        function jb(a, b) {
          Object.isFrozen(a) || (ib ? a[ib] |= b : a.g !== void 0 ? a.g |= b : Object.defineProperties(a, { g: { value: b, configurable: true, writable: true, enumerable: false } }));
        }
        function kb(a) {
          if (!a)
            return 0;
          var b;
          ib ? b = a[ib] : b = a.g;
          return b == null ? 0 : b;
        }
        function lb(a) {
          if (!Array.isArray(a))
            return a;
          jb(a, 1);
          return a;
        }
        function mb(a) {
          if (!Array.isArray(a))
            throw Error("cannot mark non-array as immutable");
          jb(a, 2);
        }
        ;
        function nb(a) {
          return a !== null && typeof a === "object" && a.constructor === Object;
        }
        function ob(a) {
          switch (typeof a) {
            case "number":
              return isFinite(a) ? a : String(a);
            case "object":
              return Na && a != null && a instanceof Uint8Array ? Ja(a) : a;
            default:
              return a;
          }
        }
        ;
        function pb(a, b) {
          if (a != null)
            return Array.isArray(a) || nb(a) ? qb(a, b) : b(a);
        }
        function qb(a, b) {
          if (Array.isArray(a)) {
            for (var c = Array(a.length), d = 0; d < a.length; d++)
              c[d] = pb(a[d], b);
            kb(a) & 1 && lb(c);
            return c;
          }
          c = {};
          for (d in a)
            c[d] = pb(a[d], b);
          return c;
        }
        ;
        var rb;
        function O(a, b, c) {
          var d = rb;
          rb = null;
          a || (a = d);
          d = this.constructor.ba;
          a || (a = d ? [d] : []);
          this.j = (d ? 0 : -1) - (this.constructor.$ || 0);
          this.m = this.g = null;
          this.h = a;
          a: {
            d = this.h.length;
            a = d - 1;
            if (d && (d = this.h[a], nb(d))) {
              this.l = a - this.j;
              this.i = d;
              break a;
            }
            b !== void 0 && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
          }
          if (c)
            for (b = 0; b < c.length; b++)
              a = c[b], a < this.l ? (a += this.j, (d = this.h[a]) ? lb(d) : this.h[a] = sb) : (tb(this), (d = this.i[a]) ? lb(d) : this.i[a] = sb);
        }
        var sb = Object.freeze(lb([]));
        function tb(a) {
          var b = a.l + a.j;
          a.h[b] || (a.i = a.h[b] = {});
        }
        function P(a, b, c) {
          return b === -1 ? null : (c === void 0 ? 0 : c) || b >= a.l ? a.i ? a.i[b] : void 0 : a.h[b + a.j];
        }
        function ub(a, b, c) {
          c = c === void 0 ? true : c;
          var d = d === void 0 ? false : d;
          var e = P(a, b, d);
          e == null && (e = sb);
          e === sb ? (e = lb([]), Q(a, b, e, d)) : c && Array.isArray(e) && kb(e) & 2 && (e = e.slice(), Q(a, b, e, d));
          return e;
        }
        function vb(a) {
          var b = ub(a, 3, false);
          a.m || (a.m = {});
          if (!a.m[3]) {
            for (var c = 0; c < b.length; c++)
              b[c] = +b[c];
            a.m[3] = true;
          }
          return b;
        }
        function R(a, b, c) {
          a = P(a, b);
          return a == null ? c : a;
        }
        function S(a, b, c) {
          a = P(a, b);
          a = a == null ? a : +a;
          return a == null ? c === void 0 ? 0 : c : a;
        }
        function Q(a, b, c, d) {
          (d === void 0 ? 0 : d) || b >= a.l ? (tb(a), a.i[b] = c) : a.h[b + a.j] = c;
        }
        function wb(a, b, c) {
          if (c === -1)
            return null;
          a.g || (a.g = {});
          var d = a.g[c];
          if (d)
            return d;
          var e = P(a, c, false);
          if (e == null)
            return d;
          b = new b(e);
          return a.g[c] = b;
        }
        function xb(a, b, c) {
          a.g || (a.g = {});
          var d = a.g[c];
          if (!d) {
            var e = ub(a, c, false);
            d = [];
            for (var g = Array.isArray(e) ? !!(kb(e) & 2) : false, f = 0; f < e.length; f++)
              d[f] = new b(e[f]), g && mb(d[f].h);
            g && (mb(d), Object.freeze(d));
            a.g[c] = d;
          }
          return d;
        }
        function yb(a, b, c, d, e) {
          var g = xb(a, d, b);
          c = c ? c : new d();
          a = ub(a, b);
          e != void 0 ? (g.splice(e, 0, c), a.splice(e, 0, T(c))) : (g.push(c), a.push(T(c)));
        }
        O.prototype.toJSON = function() {
          var a = T(this);
          return qb(a, ob);
        };
        function T(a) {
          if (a.g)
            for (var b in a.g) {
              var c = a.g[b];
              if (Array.isArray(c))
                for (var d = 0; d < c.length; d++)
                  c[d] && T(c[d]);
              else
                c && T(c);
            }
          return a.h;
        }
        O.prototype.toString = function() {
          return T(this).toString();
        };
        function zb(a, b) {
          if (a = a.o) {
            gb(b, b.g.end());
            for (var c = 0; c < a.length; c++)
              gb(b, a[c]);
          }
        }
        function Ab(a) {
          var b = a[0];
          switch (a.length) {
            case 2:
              var c = a[1];
              return function(h, l, n) {
                return b(h, l, n, c);
              };
            case 3:
              var d = a[1], e = a[2];
              return function(h, l, n) {
                return b(h, l, n, d, e);
              };
            case 4:
              var g = a[1], f = a[2], k = a[3];
              return function(h, l, n) {
                return b(h, l, n, g, f, k);
              };
            default:
              throw Error("unsupported number of parameters, expected [2-4], got " + a.length);
          }
        }
        function U(a, b, c) {
          for (; $a(b) && b.h != 4; ) {
            var d = b.i, e = c[d];
            if (e) {
              if (Array.isArray(e) && (e = c[d] = Ab(e)), !e(b, a, d)) {
                d = b;
                e = a;
                var g = d.l;
                ab(d);
                bb3(d, e, g);
              }
            } else
              d = b, e = a, g = d.l, ab(d), bb3(d, e, g);
          }
          return a;
        }
        function Bb(a, b) {
          var c = new fb();
          b(a, c);
          a = c.i + c.g.length();
          if (a === 0)
            c = new Uint8Array(0);
          else {
            a = new Uint8Array(a);
            for (var d = c.h, e = d.length, g = b = 0; g < e; g++) {
              var f = d[g];
              f.length !== 0 && (a.set(f, b), b += f.length);
            }
            d = c.g;
            e = d.h;
            e !== 0 && (a.set(d.g.subarray(0, e), b), d.h = 0);
            c.h = [a];
            c = a;
          }
          return c;
        }
        function Cb(a, b, c) {
          if (eb.length) {
            var d = eb.pop();
            a && (Ua(d.g, a), d.i = -1, d.h = -1);
            a = d;
          } else
            a = new Za(a);
          try {
            return c(new b(), a);
          } finally {
            b = a.g, b.h = null, b.m = 0, b.i = 0, b.g = 0, b.l = false, b.u = false, a.i = -1, a.h = -1, a.j = false, 100 > eb.length && eb.push(a);
          }
        }
        function W(a, b, c) {
          b = P(b, c);
          if (b != null) {
            Ya(a.g, 8 * c + 5);
            a = a.g;
            var d = b;
            d = (c = 0 > d ? 1 : 0) ? -d : d;
            d === 0 ? 0 < 1 / d ? K = L = 0 : (L = 0, K = 2147483648) : isNaN(d) ? (L = 0, K = 2147483647) : 34028234663852886e22 < d ? (L = 0, K = (c << 31 | 2139095040) >>> 0) : 11754943508222875e-54 > d ? (d = Math.round(d / Math.pow(2, -149)), L = 0, K = (c << 31 | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, L = 0, K = (c << 31 | b + 127 << 23 | d & 8388607) >>> 0);
            c = K;
            N(a, c >>> 0 & 255);
            N(a, c >>> 8 & 255);
            N(a, c >>> 16 & 255);
            N(a, c >>> 24 & 255);
          }
        }
        function X(a, b, c) {
          if (a.h !== 5)
            return false;
          Q(b, c, a.g.o());
          return true;
        }
        function Db(a, b, c) {
          if (a.h !== 5 && a.h !== 2)
            return false;
          b = ub(b, c);
          a.h == 2 ? db(a, Ta.prototype.o, b) : b.push(a.g.o());
          return true;
        }
        function Eb(a, b, c) {
          if (a.h !== 0)
            return false;
          Q(b, c, Va(a.g));
          return true;
        }
        function Fb(a, b, c) {
          if (a.h !== 0)
            return false;
          Q(b, c, a.g.j());
          return true;
        }
        function Gb(a, b, c) {
          if (a.h !== 2)
            return false;
          var d = a.g.j();
          a = a.g;
          var e = a.g;
          a.g += d;
          M(a);
          a = a.h;
          var g;
          if (Da)
            (g = Ca) || (g = Ca = new TextDecoder("utf-8", { fatal: false })), g = g.decode(a.subarray(e, e + d));
          else {
            d = e + d;
            for (var f = [], k = null, h, l, n; e < d; )
              h = a[e++], 128 > h ? f.push(h) : 224 > h ? e >= d ? f.push(65533) : (l = a[e++], 194 > h || (l & 192) !== 128 ? (e--, f.push(65533)) : f.push((h & 31) << 6 | l & 63)) : 240 > h ? e >= d - 1 ? f.push(65533) : (l = a[e++], (l & 192) !== 128 || h === 224 && 160 > l || h === 237 && 160 <= l || ((g = a[e++]) & 192) !== 128 ? (e--, f.push(65533)) : f.push((h & 15) << 12 | (l & 63) << 6 | g & 63)) : 244 >= h ? e >= d - 2 ? f.push(65533) : (l = a[e++], (l & 192) !== 128 || (h << 28) + (l - 144) >> 30 !== 0 || ((g = a[e++]) & 192) !== 128 || ((n = a[e++]) & 192) !== 128 ? (e--, f.push(65533)) : (h = (h & 7) << 18 | (l & 63) << 12 | (g & 63) << 6 | n & 63, h -= 65536, f.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : f.push(65533), 8192 <= f.length && (k = Ba(k, f), f.length = 0);
            g = Ba(k, f);
          }
          Q(b, c, g);
          return true;
        }
        function Hb(a, b, c, d, e) {
          if (a.h !== 2)
            return false;
          a = cb(a, new d(), e);
          var g = g === void 0 ? false : g;
          b.g || (b.g = {});
          d = a ? T(a) : a;
          b.g[c] = a;
          Q(b, c, d, g);
          return true;
        }
        function Ib(a, b, c, d, e) {
          if (a.h !== 2)
            return false;
          a = cb(a, new d(), e);
          yb(b, c, a, d, void 0);
          return true;
        }
        function Jb(a, b, c) {
          if (a.h !== 0 && a.h !== 2)
            return false;
          b = ub(b, c);
          a.h == 2 ? db(a, Ta.prototype.j, b) : b.push(a.g.j());
          return true;
        }
        function Kb(a, b, c) {
          if (a.h !== 0)
            return false;
          Q(b, c, Va(a.g));
          return true;
        }
        ;
        function Y(a) {
          O.call(this, a, -1, Lb);
        }
        var Mb;
        E(Y, O);
        Y.prototype.getRows = function() {
          return P(this, 1);
        };
        Y.prototype.getCols = function() {
          return P(this, 2);
        };
        Y.prototype.getPackedDataList = function() {
          return vb(this);
        };
        Y.prototype.getLayout = function() {
          return R(this, 4, 0);
        };
        function Nb(a, b) {
          return U(a, b, Mb || (Mb = { 1: Fb, 2: Fb, 3: Db, 4: Kb }));
        }
        var Lb = [3];
        function Ob(a) {
          O.call(this, a);
        }
        var Pb;
        E(Ob, O);
        function Qb(a, b) {
          var c = P(a, 1);
          if (c != null && c != null) {
            Ya(b.g, 8);
            var d = b.g;
            if (0 <= c)
              Ya(d, c);
            else {
              for (var e = 0; 9 > e; e++)
                N(d, c & 127 | 128), c >>= 7;
              N(d, 1);
            }
          }
          W(b, a, 2);
          d = P(a, 3);
          d != null && hb(b, 3, Ga(d));
          d = P(a, 4);
          d != null && hb(b, 4, Ga(d));
          zb(a, b);
        }
        function Rb(a, b) {
          return U(a, b, Pb || (Pb = { 1: Fb, 2: X, 3: Gb, 4: Gb }));
        }
        ;
        function Sb(a) {
          O.call(this, a, -1, Tb);
        }
        var Ub;
        E(Sb, O);
        Sb.prototype.addClassification = function(a, b) {
          yb(this, 1, a, Ob, b);
          return this;
        };
        function Vb(a, b) {
          return U(a, b, Ub || (Ub = { 1: [Ib, Ob, Rb] }));
        }
        var Tb = [1];
        function Wb(a) {
          O.call(this, a);
        }
        var Xb;
        E(Wb, O);
        function Yb(a, b) {
          W(b, a, 1);
          W(b, a, 2);
          W(b, a, 3);
          W(b, a, 4);
          W(b, a, 5);
          zb(a, b);
        }
        function Zb(a, b) {
          return U(a, b, Xb || (Xb = { 1: X, 2: X, 3: X, 4: X, 5: X }));
        }
        ;
        function $b(a) {
          O.call(this, a, -1, ac);
        }
        var bc;
        E($b, O);
        function cc(a, b) {
          return U(a, b, bc || (bc = { 1: [Ib, Wb, Zb] }));
        }
        var ac = [1];
        function dc(a) {
          O.call(this, a);
        }
        var ec;
        E(dc, O);
        function fc(a, b) {
          W(b, a, 1);
          W(b, a, 2);
          W(b, a, 3);
          W(b, a, 4);
          W(b, a, 5);
          var c = P(a, 6);
          if (c != null && c != null) {
            Ya(b.g, 48);
            var d = b.g, e = c;
            c = 0 > e;
            e = Math.abs(e);
            var g = e >>> 0;
            e = Math.floor((e - g) / 4294967296);
            e >>>= 0;
            c && (e = ~e >>> 0, g = (~g >>> 0) + 1, 4294967295 < g && (g = 0, e++, 4294967295 < e && (e = 0)));
            K = g;
            L = e;
            c = K;
            for (g = L; 0 < g || 127 < c; )
              N(d, c & 127 | 128), c = (c >>> 7 | g << 25) >>> 0, g >>>= 7;
            N(d, c);
          }
          zb(a, b);
        }
        function gc(a, b) {
          return U(a, b, ec || (ec = { 1: X, 2: X, 3: X, 4: X, 5: X, 6: Eb }));
        }
        ;
        function Z(a) {
          O.call(this, a, -1, hc);
        }
        var ic;
        E(Z, O);
        Z.prototype.getVertexType = function() {
          return R(this, 1, 0);
        };
        Z.prototype.getPrimitiveType = function() {
          return R(this, 2, 0);
        };
        Z.prototype.getVertexBufferList = function() {
          return vb(this);
        };
        Z.prototype.getIndexBufferList = function() {
          return ub(this, 4);
        };
        function jc(a, b) {
          return U(a, b, ic || (ic = { 1: Kb, 2: Kb, 3: Db, 4: Jb }));
        }
        var hc = [3, 4];
        function kc(a) {
          O.call(this, a);
        }
        var lc;
        E(kc, O);
        kc.prototype.getMesh = function() {
          return wb(this, Z, 1);
        };
        kc.prototype.getPoseTransformMatrix = function() {
          return wb(this, Y, 2);
        };
        function mc(a, b) {
          return U(a, b, lc || (lc = { 1: [Hb, Z, jc], 2: [Hb, Y, Nb] }));
        }
        ;
        var nc = [[61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]], oc = [[263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [
          386,
          385
        ], [385, 384], [384, 398], [398, 362]], pc = [[276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]], qc = [[33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]], rc = [[46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]], sc = [
          [10, 338],
          [338, 297],
          [297, 332],
          [332, 284],
          [284, 251],
          [251, 389],
          [389, 356],
          [356, 454],
          [454, 323],
          [323, 361],
          [361, 288],
          [288, 397],
          [397, 365],
          [365, 379],
          [379, 378],
          [378, 400],
          [400, 377],
          [377, 152],
          [152, 148],
          [148, 176],
          [176, 149],
          [149, 150],
          [150, 136],
          [136, 172],
          [172, 58],
          [58, 132],
          [132, 93],
          [93, 234],
          [234, 127],
          [127, 162],
          [162, 21],
          [21, 54],
          [54, 103],
          [103, 67],
          [67, 109],
          [109, 10]
        ], tc = [].concat(D(nc), D(oc), D(pc), D(qc), D(rc), D(sc));
        function uc(a, b, c) {
          c = a.createShader(c === 0 ? a.VERTEX_SHADER : a.FRAGMENT_SHADER);
          a.shaderSource(c, b);
          a.compileShader(c);
          if (!a.getShaderParameter(c, a.COMPILE_STATUS))
            throw Error("Could not compile WebGL shader.\n\n" + a.getShaderInfoLog(c));
          return c;
        }
        ;
        function vc(a) {
          return xb(a, Ob, 1).map(function(b) {
            return { index: R(b, 1, 0), score: S(b, 2), label: P(b, 3) != null ? R(b, 3, "") : void 0, displayName: P(b, 4) != null ? R(b, 4, "") : void 0 };
          });
        }
        ;
        function wc(a) {
          return { x: S(a, 1), y: S(a, 2), z: S(a, 3), visibility: P(a, 4) != null ? S(a, 4) : void 0 };
        }
        function xc(a) {
          return xb(Cb(a, $b, cc), Wb, 1).map(wc);
        }
        ;
        function yc(a, b) {
          this.h = a;
          this.g = b;
          this.l = 0;
        }
        function zc(a, b, c) {
          Ac(a, b);
          if (typeof a.g.canvas.transferToImageBitmap === "function")
            return Promise.resolve(a.g.canvas.transferToImageBitmap());
          if (c)
            return Promise.resolve(a.g.canvas);
          if (typeof createImageBitmap === "function")
            return createImageBitmap(a.g.canvas);
          a.i === void 0 && (a.i = document.createElement("canvas"));
          return new Promise(function(d) {
            a.i.height = a.g.canvas.height;
            a.i.width = a.g.canvas.width;
            a.i.getContext("2d", {}).drawImage(a.g.canvas, 0, 0, a.g.canvas.width, a.g.canvas.height);
            d(a.i);
          });
        }
        function Ac(a, b) {
          var c = a.g;
          if (a.m === void 0) {
            var d = uc(c, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", 0), e = uc(c, "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }", 1), g = c.createProgram();
            c.attachShader(g, d);
            c.attachShader(g, e);
            c.linkProgram(g);
            if (!c.getProgramParameter(g, c.LINK_STATUS))
              throw Error("Could not compile WebGL program.\n\n" + c.getProgramInfoLog(g));
            d = a.m = g;
            c.useProgram(d);
            e = c.getUniformLocation(d, "sampler0");
            a.j = { I: c.getAttribLocation(d, "aVertex"), H: c.getAttribLocation(d, "aTex"), ca: e };
            a.s = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, a.s);
            c.enableVertexAttribArray(a.j.I);
            c.vertexAttribPointer(a.j.I, 2, c.FLOAT, false, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), c.STATIC_DRAW);
            c.bindBuffer(c.ARRAY_BUFFER, null);
            a.o = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, a.o);
            c.enableVertexAttribArray(a.j.H);
            c.vertexAttribPointer(a.j.H, 2, c.FLOAT, false, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), c.STATIC_DRAW);
            c.bindBuffer(c.ARRAY_BUFFER, null);
            c.uniform1i(e, 0);
          }
          d = a.j;
          c.useProgram(a.m);
          c.canvas.width = b.width;
          c.canvas.height = b.height;
          c.viewport(0, 0, b.width, b.height);
          c.activeTexture(c.TEXTURE0);
          a.h.bindTexture2d(b.glName);
          c.enableVertexAttribArray(d.I);
          c.bindBuffer(c.ARRAY_BUFFER, a.s);
          c.vertexAttribPointer(d.I, 2, c.FLOAT, false, 0, 0);
          c.enableVertexAttribArray(d.H);
          c.bindBuffer(c.ARRAY_BUFFER, a.o);
          c.vertexAttribPointer(d.H, 2, c.FLOAT, false, 0, 0);
          c.bindFramebuffer(c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER, null);
          c.clearColor(0, 0, 0, 0);
          c.clear(c.COLOR_BUFFER_BIT);
          c.colorMask(true, true, true, true);
          c.drawArrays(c.TRIANGLE_FAN, 0, 4);
          c.disableVertexAttribArray(d.I);
          c.disableVertexAttribArray(d.H);
          c.bindBuffer(c.ARRAY_BUFFER, null);
          a.h.bindTexture2d(0);
        }
        function Bc(a) {
          this.g = a;
        }
        ;
        var Cc = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
        function Dc(a, b) {
          return b + a;
        }
        function Ec(a, b) {
          window[a] = b;
        }
        function Fc(a) {
          var b = document.createElement("script");
          b.setAttribute("src", a);
          b.setAttribute("crossorigin", "anonymous");
          return new Promise(function(c) {
            b.addEventListener("load", function() {
              c();
            }, false);
            b.addEventListener("error", function() {
              c();
            }, false);
            document.body.appendChild(b);
          });
        }
        function Gc() {
          return H(function(a) {
            switch (a.g) {
              case 1:
                return a.m = 2, F(a, WebAssembly.instantiate(Cc), 4);
              case 4:
                a.g = 3;
                a.m = 0;
                break;
              case 2:
                return a.m = 0, a.j = null, a.return(false);
              case 3:
                return a.return(true);
            }
          });
        }
        function Hc(a) {
          this.g = a;
          this.listeners = {};
          this.j = {};
          this.F = {};
          this.m = {};
          this.s = {};
          this.G = this.o = this.R = true;
          this.C = Promise.resolve();
          this.P = "";
          this.B = {};
          this.locateFile = a && a.locateFile || Dc;
          if (typeof window === "object")
            var b = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
          else if (typeof location !== "undefined")
            b = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
          else
            throw Error("solutions can only be loaded on a web page or in a web worker");
          this.S = b;
          if (a.options) {
            b = B(Object.keys(a.options));
            for (var c = b.next(); !c.done; c = b.next()) {
              c = c.value;
              var d = a.options[c].default;
              d !== void 0 && (this.j[c] = typeof d === "function" ? d() : d);
            }
          }
        }
        x = Hc.prototype;
        x.close = function() {
          this.i && this.i.delete();
          return Promise.resolve();
        };
        function Ic(a) {
          var b, c, d, e, g, f, k, h, l, n, r;
          return H(function(p2) {
            switch (p2.g) {
              case 1:
                if (!a.R)
                  return p2.return();
                b = a.g.files === void 0 ? [] : typeof a.g.files === "function" ? a.g.files(a.j) : a.g.files;
                return F(p2, Gc(), 2);
              case 2:
                c = p2.h;
                if (typeof window === "object")
                  return Ec("createMediapipeSolutionsWasm", { locateFile: a.locateFile }), Ec("createMediapipeSolutionsPackedAssets", { locateFile: a.locateFile }), f = b.filter(function(m) {
                    return m.data !== void 0;
                  }), k = b.filter(function(m) {
                    return m.data === void 0;
                  }), h = Promise.all(f.map(function(m) {
                    var q2 = Jc(a, m.url);
                    if (m.path !== void 0) {
                      var t = m.path;
                      q2 = q2.then(function(w) {
                        a.overrideFile(t, w);
                        return Promise.resolve(w);
                      });
                    }
                    return q2;
                  })), l = Promise.all(k.map(function(m) {
                    return m.simd === void 0 || m.simd && c || !m.simd && !c ? Fc(a.locateFile(m.url, a.S)) : Promise.resolve();
                  })).then(function() {
                    var m, q2, t;
                    return H(function(w) {
                      if (w.g == 1)
                        return m = window.createMediapipeSolutionsWasm, q2 = window.createMediapipeSolutionsPackedAssets, t = a, F(w, m(q2), 2);
                      t.h = w.h;
                      w.g = 0;
                    });
                  }), n = function() {
                    return H(function(m) {
                      a.g.graph && a.g.graph.url ? m = F(m, Jc(a, a.g.graph.url), 0) : (m.g = 0, m = void 0);
                      return m;
                    });
                  }(), F(p2, Promise.all([l, h, n]), 7);
                if (typeof importScripts !== "function")
                  throw Error("solutions can only be loaded on a web page or in a web worker");
                d = b.filter(function(m) {
                  return m.simd === void 0 || m.simd && c || !m.simd && !c;
                }).map(function(m) {
                  return a.locateFile(m.url, a.S);
                });
                importScripts.apply(null, D(d));
                e = a;
                return F(p2, createMediapipeSolutionsWasm(Module), 6);
              case 6:
                e.h = p2.h;
                a.l = new OffscreenCanvas(1, 1);
                a.h.canvas = a.l;
                g = a.h.GL.createContext(a.l, {
                  antialias: false,
                  alpha: false,
                  aa: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
                });
                a.h.GL.makeContextCurrent(g);
                p2.g = 4;
                break;
              case 7:
                a.l = document.createElement("canvas");
                r = a.l.getContext("webgl2", {});
                if (!r && (r = a.l.getContext("webgl", {}), !r))
                  return alert("Failed to create WebGL canvas context when passing video frame."), p2.return();
                a.D = r;
                a.h.canvas = a.l;
                a.h.createContext(a.l, true, true, {});
              case 4:
                a.i = new a.h.SolutionWasm(), a.R = false, p2.g = 0;
            }
          });
        }
        function Kc(a) {
          var b, c, d, e, g, f, k, h;
          return H(function(l) {
            if (l.g == 1) {
              if (a.g.graph && a.g.graph.url && a.P === a.g.graph.url)
                return l.return();
              a.o = true;
              if (!a.g.graph || !a.g.graph.url) {
                l.g = 2;
                return;
              }
              a.P = a.g.graph.url;
              return F(l, Jc(a, a.g.graph.url), 3);
            }
            l.g != 2 && (b = l.h, a.i.loadGraph(b));
            c = B(Object.keys(a.B));
            for (d = c.next(); !d.done; d = c.next())
              e = d.value, a.i.overrideFile(e, a.B[e]);
            a.B = {};
            if (a.g.listeners)
              for (g = B(a.g.listeners), f = g.next(); !f.done; f = g.next())
                k = f.value, Lc(a, k);
            h = a.j;
            a.j = {};
            a.setOptions(h);
            l.g = 0;
          });
        }
        x.reset = function() {
          var a = this;
          return H(function(b) {
            a.i && (a.i.reset(), a.m = {}, a.s = {});
            b.g = 0;
          });
        };
        x.setOptions = function(a, b) {
          var c = this;
          if (b = b || this.g.options) {
            for (var d = [], e = [], g = {}, f = B(Object.keys(a)), k = f.next(); !k.done; g = { K: g.K, L: g.L }, k = f.next()) {
              var h = k.value;
              h in this.j && this.j[h] === a[h] || (this.j[h] = a[h], k = b[h], k !== void 0 && (k.onChange && (g.K = k.onChange, g.L = a[h], d.push(function(l) {
                return function() {
                  var n;
                  return H(function(r) {
                    if (r.g == 1)
                      return F(r, l.K(l.L), 2);
                    n = r.h;
                    n === true && (c.o = true);
                    r.g = 0;
                  });
                };
              }(g))), k.graphOptionXref && (h = { valueNumber: k.type === 1 ? a[h] : 0, valueBoolean: k.type === 0 ? a[h] : false, valueString: k.type === 2 ? a[h] : "" }, k = Object.assign(Object.assign(Object.assign({}, { calculatorName: "", calculatorIndex: 0 }), k.graphOptionXref), h), e.push(k))));
            }
            if (d.length !== 0 || e.length !== 0)
              this.o = true, this.A = (this.A === void 0 ? [] : this.A).concat(e), this.v = (this.v === void 0 ? [] : this.v).concat(d);
          }
        };
        function Mc(a) {
          var b, c, d, e, g, f, k;
          return H(function(h) {
            switch (h.g) {
              case 1:
                if (!a.o)
                  return h.return();
                if (!a.v) {
                  h.g = 2;
                  break;
                }
                b = B(a.v);
                c = b.next();
              case 3:
                if (c.done) {
                  h.g = 5;
                  break;
                }
                d = c.value;
                return F(h, d(), 4);
              case 4:
                c = b.next();
                h.g = 3;
                break;
              case 5:
                a.v = void 0;
              case 2:
                if (a.A) {
                  e = new a.h.GraphOptionChangeRequestList();
                  g = B(a.A);
                  for (f = g.next(); !f.done; f = g.next())
                    k = f.value, e.push_back(k);
                  a.i.changeOptions(e);
                  e.delete();
                  a.A = void 0;
                }
                a.o = false;
                h.g = 0;
            }
          });
        }
        x.initialize = function() {
          var a = this;
          return H(function(b) {
            return b.g == 1 ? F(b, Ic(a), 2) : b.g != 3 ? F(b, Kc(a), 3) : F(b, Mc(a), 0);
          });
        };
        function Jc(a, b) {
          var c, d;
          return H(function(e) {
            if (b in a.F)
              return e.return(a.F[b]);
            c = a.locateFile(b, "");
            d = fetch(c).then(function(g) {
              return g.arrayBuffer();
            });
            a.F[b] = d;
            return e.return(d);
          });
        }
        x.overrideFile = function(a, b) {
          this.i ? this.i.overrideFile(a, b) : this.B[a] = b;
        };
        x.clearOverriddenFiles = function() {
          this.B = {};
          this.i && this.i.clearOverriddenFiles();
        };
        x.send = function(a, b) {
          var c = this, d, e, g, f, k, h, l, n, r;
          return H(function(p2) {
            switch (p2.g) {
              case 1:
                if (!c.g.inputs)
                  return p2.return();
                d = 1e3 * (b === void 0 || b === null ? performance.now() : b);
                return F(p2, c.C, 2);
              case 2:
                return F(p2, c.initialize(), 3);
              case 3:
                e = new c.h.PacketDataList();
                g = B(Object.keys(a));
                for (f = g.next(); !f.done; f = g.next())
                  if (k = f.value, h = c.g.inputs[k]) {
                    a: {
                      var m = a[k];
                      switch (h.type) {
                        case "video":
                          var q2 = c.m[h.stream];
                          q2 || (q2 = new yc(c.h, c.D), c.m[h.stream] = q2);
                          q2.l === 0 && (q2.l = q2.h.createTexture());
                          if (typeof HTMLVideoElement !== "undefined" && m instanceof HTMLVideoElement) {
                            var t = m.videoWidth;
                            var w = m.videoHeight;
                          } else
                            typeof HTMLImageElement !== "undefined" && m instanceof HTMLImageElement ? (t = m.naturalWidth, w = m.naturalHeight) : (t = m.width, w = m.height);
                          w = { glName: q2.l, width: t, height: w };
                          t = q2.g;
                          t.canvas.width = w.width;
                          t.canvas.height = w.height;
                          t.activeTexture(t.TEXTURE0);
                          q2.h.bindTexture2d(q2.l);
                          t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, m);
                          q2.h.bindTexture2d(0);
                          q2 = w;
                          break a;
                        case "detections":
                          q2 = c.m[h.stream];
                          q2 || (q2 = new Bc(c.h), c.m[h.stream] = q2);
                          q2.data || (q2.data = new q2.g.DetectionListData());
                          q2.data.reset(m.length);
                          for (w = 0; w < m.length; ++w) {
                            t = m[w];
                            var v = q2.data, C = v.setBoundingBox, J = w;
                            var G = t.T;
                            var u = new dc();
                            Q(u, 1, G.X);
                            Q(u, 2, G.Y);
                            Q(u, 3, G.height);
                            Q(u, 4, G.width);
                            Q(u, 5, G.rotation);
                            Q(u, 6, G.W);
                            G = Bb(u, fc);
                            C.call(v, J, G);
                            if (t.O)
                              for (v = 0; v < t.O.length; ++v) {
                                u = t.O[v];
                                var A = u.visibility ? true : false;
                                C = q2.data;
                                J = C.addNormalizedLandmark;
                                G = w;
                                u = Object.assign(Object.assign({}, u), { visibility: A ? u.visibility : 0 });
                                A = new Wb();
                                Q(A, 1, u.x);
                                Q(A, 2, u.y);
                                Q(A, 3, u.z);
                                u.visibility && Q(A, 4, u.visibility);
                                u = Bb(A, Yb);
                                J.call(C, G, u);
                              }
                            if (t.M)
                              for (v = 0; v < t.M.length; ++v)
                                C = q2.data, J = C.addClassification, G = w, u = t.M[v], A = new Ob(), Q(A, 2, u.score), u.index && Q(A, 1, u.index), u.label && Q(A, 3, u.label), u.displayName && Q(A, 4, u.displayName), u = Bb(A, Qb), J.call(C, G, u);
                          }
                          q2 = q2.data;
                          break a;
                        default:
                          q2 = {};
                      }
                    }
                    l = q2;
                    n = h.stream;
                    switch (h.type) {
                      case "video":
                        e.pushTexture2d(Object.assign(Object.assign({}, l), { stream: n, timestamp: d }));
                        break;
                      case "detections":
                        r = l;
                        r.stream = n;
                        r.timestamp = d;
                        e.pushDetectionList(r);
                        break;
                      default:
                        throw Error("Unknown input config type: '" + h.type + "'");
                    }
                  }
                c.i.send(e);
                return F(p2, c.C, 4);
              case 4:
                e.delete(), p2.g = 0;
            }
          });
        };
        function Nc(a, b, c) {
          var d, e, g, f, k, h, l, n, r, p2, m, q2, t, w;
          return H(function(v) {
            switch (v.g) {
              case 1:
                if (!c)
                  return v.return(b);
                d = {};
                e = 0;
                g = B(Object.keys(c));
                for (f = g.next(); !f.done; f = g.next())
                  k = f.value, h = c[k], typeof h !== "string" && h.type === "texture" && b[h.stream] !== void 0 && ++e;
                1 < e && (a.G = false);
                l = B(Object.keys(c));
                f = l.next();
              case 2:
                if (f.done) {
                  v.g = 4;
                  break;
                }
                n = f.value;
                r = c[n];
                if (typeof r === "string")
                  return t = d, w = n, F(v, Oc(a, n, b[r]), 14);
                p2 = b[r.stream];
                if (r.type === "detection_list") {
                  if (p2) {
                    var C = p2.getRectList();
                    for (var J = p2.getLandmarksList(), G = p2.getClassificationsList(), u = [], A = 0; A < C.size(); ++A) {
                      var V = Cb(C.get(A), dc, gc);
                      V = { T: { X: S(V, 1), Y: S(V, 2), height: S(V, 3), width: S(V, 4), rotation: S(V, 5, 0), W: R(V, 6, 0) }, O: xc(J.get(A)), M: vc(Cb(G.get(A), Sb, Vb)) };
                      u.push(V);
                    }
                    C = u;
                  } else
                    C = [];
                  d[n] = C;
                  v.g = 7;
                  break;
                }
                if (r.type === "proto_list") {
                  if (p2) {
                    C = Array(p2.size());
                    for (J = 0; J < p2.size(); J++)
                      C[J] = p2.get(J);
                    p2.delete();
                  } else
                    C = [];
                  d[n] = C;
                  v.g = 7;
                  break;
                }
                if (p2 === void 0) {
                  v.g = 3;
                  break;
                }
                if (r.type === "float_list") {
                  d[n] = p2;
                  v.g = 7;
                  break;
                }
                if (r.type === "proto") {
                  d[n] = p2;
                  v.g = 7;
                  break;
                }
                if (r.type !== "texture")
                  throw Error("Unknown output config type: '" + r.type + "'");
                m = a.s[n];
                m || (m = new yc(a.h, a.D), a.s[n] = m);
                return F(v, zc(m, p2, a.G), 13);
              case 13:
                q2 = v.h, d[n] = q2;
              case 7:
                r.transform && d[n] && (d[n] = r.transform(d[n]));
                v.g = 3;
                break;
              case 14:
                t[w] = v.h;
              case 3:
                f = l.next();
                v.g = 2;
                break;
              case 4:
                return v.return(d);
            }
          });
        }
        function Oc(a, b, c) {
          var d;
          return H(function(e) {
            return typeof c === "number" || c instanceof Uint8Array || c instanceof a.h.Uint8BlobList ? e.return(c) : c instanceof a.h.Texture2dDataOut ? (d = a.s[b], d || (d = new yc(a.h, a.D), a.s[b] = d), e.return(zc(d, c, a.G))) : e.return(void 0);
          });
        }
        function Lc(a, b) {
          for (var c = b.name || "$", d = [].concat(D(b.wants)), e = new a.h.StringList(), g = B(b.wants), f = g.next(); !f.done; f = g.next())
            e.push_back(f.value);
          g = a.h.PacketListener.implement({ onResults: function(k) {
            for (var h = {}, l = 0; l < b.wants.length; ++l)
              h[d[l]] = k.get(l);
            var n = a.listeners[c];
            n && (a.C = Nc(a, h, b.outs).then(function(r) {
              r = n(r);
              for (var p2 = 0; p2 < b.wants.length; ++p2) {
                var m = h[d[p2]];
                typeof m === "object" && m.hasOwnProperty && m.hasOwnProperty("delete") && m.delete();
              }
              r && (a.C = r);
            }));
          } });
          a.i.attachMultiListener(e, g);
          e.delete();
        }
        x.onResults = function(a, b) {
          this.listeners[b || "$"] = a;
        };
        I("Solution", Hc);
        I("OptionType", { BOOL: 0, NUMBER: 1, Z: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
        function Pc(a) {
          return a.map(Qc);
        }
        function Qc(a) {
          a = Cb(a, kc, mc);
          var b = a.getMesh();
          if (!b)
            return a;
          var c = new Float32Array(b.getVertexBufferList());
          b.getVertexBufferList = function() {
            return c;
          };
          var d = new Uint32Array(b.getIndexBufferList());
          b.getIndexBufferList = function() {
            return d;
          };
          return a;
        }
        ;
        function Rc(a) {
          var b = this;
          a = a || {};
          this.g = new Hc({
            locateFile: a.locateFile,
            files: [{ url: "holistic_solution_packed_assets_loader.js" }, { simd: false, url: "holistic_solution_wasm_bin.js" }, { simd: true, url: "holistic_solution_simd_wasm_bin.js" }],
            graph: { url: "holistic.binarypb" },
            inputs: { image: { type: "video", stream: "input_frames_gpu" } },
            listeners: [{ wants: "left_hand_landmarks right_hand_landmarks face_landmarks pose_landmarks world_landmarks segmentation_mask image_transformed multi_face_geometry".split(" "), outs: { image: {
              type: "texture",
              stream: "image_transformed"
            }, leftHandLandmarks: { type: "proto", stream: "left_hand_landmarks", transform: xc }, rightHandLandmarks: { type: "proto", stream: "right_hand_landmarks", transform: xc }, faceLandmarks: { type: "proto", stream: "face_landmarks", transform: xc }, poseLandmarks: { type: "proto", stream: "pose_landmarks", transform: xc }, ea: { type: "proto", stream: "world_landmarks", transform: xc }, segmentationMask: { type: "texture", stream: "segmentation_mask" }, multiFaceGeometry: { type: "proto_list", stream: "multi_face_geometry", transform: Pc } } }],
            options: { useCpuInference: { type: 0, graphOptionXref: { calculatorType: "InferenceCalculator", fieldName: "use_cpu_inference" }, default: "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document }, enableFaceGeometry: { type: 0, graphOptionXref: { calculatorName: "EnableFaceGeometryConstant", calculatorType: "ConstantSidePacketCalculator", fieldName: "bool_value" } }, selfieMode: { type: 0, graphOptionXref: {
              calculatorType: "GlScalerCalculator",
              calculatorIndex: 1,
              fieldName: "flip_horizontal"
            } }, modelComplexity: { type: 1, default: 1, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorModelComplexity", fieldName: "int_value" }, onChange: function(c) {
              var d, e, g, f;
              return H(function(k) {
                if (k.g == 1) {
                  d = "";
                  switch (c) {
                    case 1:
                      d = "pose_landmark_full.tflite";
                      break;
                    case 2:
                      d = "pose_landmark_heavy.tflite";
                      break;
                    default:
                      d = "pose_landmark_lite.tflite";
                  }
                  e = "third_party/mediapipe/modules/pose_landmark/" + d;
                  g = b.g.locateFile(d, "");
                  return F(k, fetch(g), 3);
                }
                if (k.g != 2)
                  return F(k, k.h.arrayBuffer(), 2);
                f = k.h;
                b.g.overrideFile(e, f);
                return F(k, b.g.reset(), 0);
              });
            } }, smoothLandmarks: { type: 0, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorSmoothLandmarks", fieldName: "bool_value" } }, enableSegmentation: { type: 0, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorEnableSegmentation", fieldName: "bool_value" } }, smoothSegmentation: {
              type: 0,
              graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorSmoothSegmentation", fieldName: "bool_value" }
            }, refineFaceLandmarks: { type: 0, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorRefineFaceLandmarks", fieldName: "bool_value" } }, minDetectionConfidence: { type: 1, graphOptionXref: {
              calculatorType: "TensorsToDetectionsCalculator",
              calculatorName: "holisticlandmarkgpu__poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",
              fieldName: "min_score_thresh"
            } }, minTrackingConfidence: { type: 1, graphOptionXref: { calculatorType: "ThresholdingCalculator", calculatorName: "holisticlandmarkgpu__poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator", fieldName: "threshold" } }, cameraNear: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "near" } }, cameraFar: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "far" } }, cameraVerticalFovDegrees: {
              type: 1,
              graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "vertical_fov_degrees" }
            } }
          });
        }
        x = Rc.prototype;
        x.close = function() {
          this.g.close();
          return Promise.resolve();
        };
        x.onResults = function(a) {
          this.g.onResults(a);
        };
        x.initialize = function() {
          var a = this;
          return H(function(b) {
            return F(b, a.g.initialize(), 0);
          });
        };
        x.reset = function() {
          this.g.reset();
        };
        x.send = function(a) {
          var b = this;
          return H(function(c) {
            return F(c, b.g.send(a), 0);
          });
        };
        x.setOptions = function(a) {
          this.g.setOptions(a);
        };
        I("Holistic", Rc);
        I("FACE_GEOMETRY", { Layout: { COLUMN_MAJOR: 0, ROW_MAJOR: 1, 0: "COLUMN_MAJOR", 1: "ROW_MAJOR" }, PrimitiveType: { TRIANGLE: 0, 0: "TRIANGLE" }, VertexType: { VERTEX_PT: 0, 0: "VERTEX_PT" }, DEFAULT_CAMERA_PARAMS: { verticalFovDegrees: 63, near: 1, far: 1e4 } });
        I("FACEMESH_LIPS", nc);
        I("FACEMESH_LEFT_EYE", oc);
        I("FACEMESH_LEFT_EYEBROW", pc);
        I("FACEMESH_LEFT_IRIS", [[474, 475], [475, 476], [476, 477], [477, 474]]);
        I("FACEMESH_RIGHT_EYE", qc);
        I("FACEMESH_RIGHT_EYEBROW", rc);
        I("FACEMESH_RIGHT_IRIS", [[469, 470], [470, 471], [471, 472], [472, 469]]);
        I("FACEMESH_FACE_OVAL", sc);
        I("FACEMESH_CONTOURS", tc);
        I("FACEMESH_TESSELATION", [
          [127, 34],
          [34, 139],
          [139, 127],
          [11, 0],
          [0, 37],
          [37, 11],
          [232, 231],
          [231, 120],
          [120, 232],
          [72, 37],
          [37, 39],
          [39, 72],
          [128, 121],
          [121, 47],
          [47, 128],
          [232, 121],
          [121, 128],
          [128, 232],
          [104, 69],
          [69, 67],
          [67, 104],
          [175, 171],
          [171, 148],
          [148, 175],
          [118, 50],
          [50, 101],
          [101, 118],
          [73, 39],
          [39, 40],
          [40, 73],
          [9, 151],
          [151, 108],
          [108, 9],
          [48, 115],
          [115, 131],
          [131, 48],
          [194, 204],
          [204, 211],
          [211, 194],
          [74, 40],
          [40, 185],
          [185, 74],
          [80, 42],
          [42, 183],
          [183, 80],
          [40, 92],
          [92, 186],
          [186, 40],
          [230, 229],
          [229, 118],
          [118, 230],
          [202, 212],
          [
            212,
            214
          ],
          [214, 202],
          [83, 18],
          [18, 17],
          [17, 83],
          [76, 61],
          [61, 146],
          [146, 76],
          [160, 29],
          [29, 30],
          [30, 160],
          [56, 157],
          [157, 173],
          [173, 56],
          [106, 204],
          [204, 194],
          [194, 106],
          [135, 214],
          [214, 192],
          [192, 135],
          [203, 165],
          [165, 98],
          [98, 203],
          [21, 71],
          [71, 68],
          [68, 21],
          [51, 45],
          [45, 4],
          [4, 51],
          [144, 24],
          [24, 23],
          [23, 144],
          [77, 146],
          [146, 91],
          [91, 77],
          [205, 50],
          [50, 187],
          [187, 205],
          [201, 200],
          [200, 18],
          [18, 201],
          [91, 106],
          [106, 182],
          [182, 91],
          [90, 91],
          [91, 181],
          [181, 90],
          [85, 84],
          [84, 17],
          [17, 85],
          [206, 203],
          [203, 36],
          [36, 206],
          [148, 171],
          [171, 140],
          [140, 148],
          [
            92,
            40
          ],
          [40, 39],
          [39, 92],
          [193, 189],
          [189, 244],
          [244, 193],
          [159, 158],
          [158, 28],
          [28, 159],
          [247, 246],
          [246, 161],
          [161, 247],
          [236, 3],
          [3, 196],
          [196, 236],
          [54, 68],
          [68, 104],
          [104, 54],
          [193, 168],
          [168, 8],
          [8, 193],
          [117, 228],
          [228, 31],
          [31, 117],
          [189, 193],
          [193, 55],
          [55, 189],
          [98, 97],
          [97, 99],
          [99, 98],
          [126, 47],
          [47, 100],
          [100, 126],
          [166, 79],
          [79, 218],
          [218, 166],
          [155, 154],
          [154, 26],
          [26, 155],
          [209, 49],
          [49, 131],
          [131, 209],
          [135, 136],
          [136, 150],
          [150, 135],
          [47, 126],
          [126, 217],
          [217, 47],
          [223, 52],
          [52, 53],
          [53, 223],
          [45, 51],
          [51, 134],
          [134, 45],
          [211, 170],
          [
            170,
            140
          ],
          [140, 211],
          [67, 69],
          [69, 108],
          [108, 67],
          [43, 106],
          [106, 91],
          [91, 43],
          [230, 119],
          [119, 120],
          [120, 230],
          [226, 130],
          [130, 247],
          [247, 226],
          [63, 53],
          [53, 52],
          [52, 63],
          [238, 20],
          [20, 242],
          [242, 238],
          [46, 70],
          [70, 156],
          [156, 46],
          [78, 62],
          [62, 96],
          [96, 78],
          [46, 53],
          [53, 63],
          [63, 46],
          [143, 34],
          [34, 227],
          [227, 143],
          [123, 117],
          [117, 111],
          [111, 123],
          [44, 125],
          [125, 19],
          [19, 44],
          [236, 134],
          [134, 51],
          [51, 236],
          [216, 206],
          [206, 205],
          [205, 216],
          [154, 153],
          [153, 22],
          [22, 154],
          [39, 37],
          [37, 167],
          [167, 39],
          [200, 201],
          [201, 208],
          [208, 200],
          [36, 142],
          [142, 100],
          [
            100,
            36
          ],
          [57, 212],
          [212, 202],
          [202, 57],
          [20, 60],
          [60, 99],
          [99, 20],
          [28, 158],
          [158, 157],
          [157, 28],
          [35, 226],
          [226, 113],
          [113, 35],
          [160, 159],
          [159, 27],
          [27, 160],
          [204, 202],
          [202, 210],
          [210, 204],
          [113, 225],
          [225, 46],
          [46, 113],
          [43, 202],
          [202, 204],
          [204, 43],
          [62, 76],
          [76, 77],
          [77, 62],
          [137, 123],
          [123, 116],
          [116, 137],
          [41, 38],
          [38, 72],
          [72, 41],
          [203, 129],
          [129, 142],
          [142, 203],
          [64, 98],
          [98, 240],
          [240, 64],
          [49, 102],
          [102, 64],
          [64, 49],
          [41, 73],
          [73, 74],
          [74, 41],
          [212, 216],
          [216, 207],
          [207, 212],
          [42, 74],
          [74, 184],
          [184, 42],
          [169, 170],
          [170, 211],
          [211, 169],
          [
            170,
            149
          ],
          [149, 176],
          [176, 170],
          [105, 66],
          [66, 69],
          [69, 105],
          [122, 6],
          [6, 168],
          [168, 122],
          [123, 147],
          [147, 187],
          [187, 123],
          [96, 77],
          [77, 90],
          [90, 96],
          [65, 55],
          [55, 107],
          [107, 65],
          [89, 90],
          [90, 180],
          [180, 89],
          [101, 100],
          [100, 120],
          [120, 101],
          [63, 105],
          [105, 104],
          [104, 63],
          [93, 137],
          [137, 227],
          [227, 93],
          [15, 86],
          [86, 85],
          [85, 15],
          [129, 102],
          [102, 49],
          [49, 129],
          [14, 87],
          [87, 86],
          [86, 14],
          [55, 8],
          [8, 9],
          [9, 55],
          [100, 47],
          [47, 121],
          [121, 100],
          [145, 23],
          [23, 22],
          [22, 145],
          [88, 89],
          [89, 179],
          [179, 88],
          [6, 122],
          [122, 196],
          [196, 6],
          [88, 95],
          [95, 96],
          [96, 88],
          [138, 172],
          [172, 136],
          [136, 138],
          [215, 58],
          [58, 172],
          [172, 215],
          [115, 48],
          [48, 219],
          [219, 115],
          [42, 80],
          [80, 81],
          [81, 42],
          [195, 3],
          [3, 51],
          [51, 195],
          [43, 146],
          [146, 61],
          [61, 43],
          [171, 175],
          [175, 199],
          [199, 171],
          [81, 82],
          [82, 38],
          [38, 81],
          [53, 46],
          [46, 225],
          [225, 53],
          [144, 163],
          [163, 110],
          [110, 144],
          [52, 65],
          [65, 66],
          [66, 52],
          [229, 228],
          [228, 117],
          [117, 229],
          [34, 127],
          [127, 234],
          [234, 34],
          [107, 108],
          [108, 69],
          [69, 107],
          [109, 108],
          [108, 151],
          [151, 109],
          [48, 64],
          [64, 235],
          [235, 48],
          [62, 78],
          [78, 191],
          [191, 62],
          [129, 209],
          [209, 126],
          [126, 129],
          [111, 35],
          [35, 143],
          [
            143,
            111
          ],
          [117, 123],
          [123, 50],
          [50, 117],
          [222, 65],
          [65, 52],
          [52, 222],
          [19, 125],
          [125, 141],
          [141, 19],
          [221, 55],
          [55, 65],
          [65, 221],
          [3, 195],
          [195, 197],
          [197, 3],
          [25, 7],
          [7, 33],
          [33, 25],
          [220, 237],
          [237, 44],
          [44, 220],
          [70, 71],
          [71, 139],
          [139, 70],
          [122, 193],
          [193, 245],
          [245, 122],
          [247, 130],
          [130, 33],
          [33, 247],
          [71, 21],
          [21, 162],
          [162, 71],
          [170, 169],
          [169, 150],
          [150, 170],
          [188, 174],
          [174, 196],
          [196, 188],
          [216, 186],
          [186, 92],
          [92, 216],
          [2, 97],
          [97, 167],
          [167, 2],
          [141, 125],
          [125, 241],
          [241, 141],
          [164, 167],
          [167, 37],
          [37, 164],
          [72, 38],
          [38, 12],
          [12, 72],
          [38, 82],
          [82, 13],
          [13, 38],
          [63, 68],
          [68, 71],
          [71, 63],
          [226, 35],
          [35, 111],
          [111, 226],
          [101, 50],
          [50, 205],
          [205, 101],
          [206, 92],
          [92, 165],
          [165, 206],
          [209, 198],
          [198, 217],
          [217, 209],
          [165, 167],
          [167, 97],
          [97, 165],
          [220, 115],
          [115, 218],
          [218, 220],
          [133, 112],
          [112, 243],
          [243, 133],
          [239, 238],
          [238, 241],
          [241, 239],
          [214, 135],
          [135, 169],
          [169, 214],
          [190, 173],
          [173, 133],
          [133, 190],
          [171, 208],
          [208, 32],
          [32, 171],
          [125, 44],
          [44, 237],
          [237, 125],
          [86, 87],
          [87, 178],
          [178, 86],
          [85, 86],
          [86, 179],
          [179, 85],
          [84, 85],
          [85, 180],
          [180, 84],
          [83, 84],
          [84, 181],
          [181, 83],
          [201, 83],
          [83, 182],
          [182, 201],
          [137, 93],
          [93, 132],
          [132, 137],
          [76, 62],
          [62, 183],
          [183, 76],
          [61, 76],
          [76, 184],
          [184, 61],
          [57, 61],
          [61, 185],
          [185, 57],
          [212, 57],
          [57, 186],
          [186, 212],
          [214, 207],
          [207, 187],
          [187, 214],
          [34, 143],
          [143, 156],
          [156, 34],
          [79, 239],
          [239, 237],
          [237, 79],
          [123, 137],
          [137, 177],
          [177, 123],
          [44, 1],
          [1, 4],
          [4, 44],
          [201, 194],
          [194, 32],
          [32, 201],
          [64, 102],
          [102, 129],
          [129, 64],
          [213, 215],
          [215, 138],
          [138, 213],
          [59, 166],
          [166, 219],
          [219, 59],
          [242, 99],
          [99, 97],
          [97, 242],
          [2, 94],
          [94, 141],
          [141, 2],
          [75, 59],
          [59, 235],
          [235, 75],
          [24, 110],
          [110, 228],
          [
            228,
            24
          ],
          [25, 130],
          [130, 226],
          [226, 25],
          [23, 24],
          [24, 229],
          [229, 23],
          [22, 23],
          [23, 230],
          [230, 22],
          [26, 22],
          [22, 231],
          [231, 26],
          [112, 26],
          [26, 232],
          [232, 112],
          [189, 190],
          [190, 243],
          [243, 189],
          [221, 56],
          [56, 190],
          [190, 221],
          [28, 56],
          [56, 221],
          [221, 28],
          [27, 28],
          [28, 222],
          [222, 27],
          [29, 27],
          [27, 223],
          [223, 29],
          [30, 29],
          [29, 224],
          [224, 30],
          [247, 30],
          [30, 225],
          [225, 247],
          [238, 79],
          [79, 20],
          [20, 238],
          [166, 59],
          [59, 75],
          [75, 166],
          [60, 75],
          [75, 240],
          [240, 60],
          [147, 177],
          [177, 215],
          [215, 147],
          [20, 79],
          [79, 166],
          [166, 20],
          [187, 147],
          [147, 213],
          [213, 187],
          [112, 233],
          [233, 244],
          [244, 112],
          [233, 128],
          [128, 245],
          [245, 233],
          [128, 114],
          [114, 188],
          [188, 128],
          [114, 217],
          [217, 174],
          [174, 114],
          [131, 115],
          [115, 220],
          [220, 131],
          [217, 198],
          [198, 236],
          [236, 217],
          [198, 131],
          [131, 134],
          [134, 198],
          [177, 132],
          [132, 58],
          [58, 177],
          [143, 35],
          [35, 124],
          [124, 143],
          [110, 163],
          [163, 7],
          [7, 110],
          [228, 110],
          [110, 25],
          [25, 228],
          [356, 389],
          [389, 368],
          [368, 356],
          [11, 302],
          [302, 267],
          [267, 11],
          [452, 350],
          [350, 349],
          [349, 452],
          [302, 303],
          [303, 269],
          [269, 302],
          [357, 343],
          [343, 277],
          [277, 357],
          [452, 453],
          [453, 357],
          [357, 452],
          [333, 332],
          [
            332,
            297
          ],
          [297, 333],
          [175, 152],
          [152, 377],
          [377, 175],
          [347, 348],
          [348, 330],
          [330, 347],
          [303, 304],
          [304, 270],
          [270, 303],
          [9, 336],
          [336, 337],
          [337, 9],
          [278, 279],
          [279, 360],
          [360, 278],
          [418, 262],
          [262, 431],
          [431, 418],
          [304, 408],
          [408, 409],
          [409, 304],
          [310, 415],
          [415, 407],
          [407, 310],
          [270, 409],
          [409, 410],
          [410, 270],
          [450, 348],
          [348, 347],
          [347, 450],
          [422, 430],
          [430, 434],
          [434, 422],
          [313, 314],
          [314, 17],
          [17, 313],
          [306, 307],
          [307, 375],
          [375, 306],
          [387, 388],
          [388, 260],
          [260, 387],
          [286, 414],
          [414, 398],
          [398, 286],
          [335, 406],
          [406, 418],
          [418, 335],
          [364, 367],
          [
            367,
            416
          ],
          [416, 364],
          [423, 358],
          [358, 327],
          [327, 423],
          [251, 284],
          [284, 298],
          [298, 251],
          [281, 5],
          [5, 4],
          [4, 281],
          [373, 374],
          [374, 253],
          [253, 373],
          [307, 320],
          [320, 321],
          [321, 307],
          [425, 427],
          [427, 411],
          [411, 425],
          [421, 313],
          [313, 18],
          [18, 421],
          [321, 405],
          [405, 406],
          [406, 321],
          [320, 404],
          [404, 405],
          [405, 320],
          [315, 16],
          [16, 17],
          [17, 315],
          [426, 425],
          [425, 266],
          [266, 426],
          [377, 400],
          [400, 369],
          [369, 377],
          [322, 391],
          [391, 269],
          [269, 322],
          [417, 465],
          [465, 464],
          [464, 417],
          [386, 257],
          [257, 258],
          [258, 386],
          [466, 260],
          [260, 388],
          [388, 466],
          [456, 399],
          [399, 419],
          [419, 456],
          [284, 332],
          [332, 333],
          [333, 284],
          [417, 285],
          [285, 8],
          [8, 417],
          [346, 340],
          [340, 261],
          [261, 346],
          [413, 441],
          [441, 285],
          [285, 413],
          [327, 460],
          [460, 328],
          [328, 327],
          [355, 371],
          [371, 329],
          [329, 355],
          [392, 439],
          [439, 438],
          [438, 392],
          [382, 341],
          [341, 256],
          [256, 382],
          [429, 420],
          [420, 360],
          [360, 429],
          [364, 394],
          [394, 379],
          [379, 364],
          [277, 343],
          [343, 437],
          [437, 277],
          [443, 444],
          [444, 283],
          [283, 443],
          [275, 440],
          [440, 363],
          [363, 275],
          [431, 262],
          [262, 369],
          [369, 431],
          [297, 338],
          [338, 337],
          [337, 297],
          [273, 375],
          [375, 321],
          [321, 273],
          [450, 451],
          [
            451,
            349
          ],
          [349, 450],
          [446, 342],
          [342, 467],
          [467, 446],
          [293, 334],
          [334, 282],
          [282, 293],
          [458, 461],
          [461, 462],
          [462, 458],
          [276, 353],
          [353, 383],
          [383, 276],
          [308, 324],
          [324, 325],
          [325, 308],
          [276, 300],
          [300, 293],
          [293, 276],
          [372, 345],
          [345, 447],
          [447, 372],
          [352, 345],
          [345, 340],
          [340, 352],
          [274, 1],
          [1, 19],
          [19, 274],
          [456, 248],
          [248, 281],
          [281, 456],
          [436, 427],
          [427, 425],
          [425, 436],
          [381, 256],
          [256, 252],
          [252, 381],
          [269, 391],
          [391, 393],
          [393, 269],
          [200, 199],
          [199, 428],
          [428, 200],
          [266, 330],
          [330, 329],
          [329, 266],
          [287, 273],
          [273, 422],
          [422, 287],
          [250, 462],
          [
            462,
            328
          ],
          [328, 250],
          [258, 286],
          [286, 384],
          [384, 258],
          [265, 353],
          [353, 342],
          [342, 265],
          [387, 259],
          [259, 257],
          [257, 387],
          [424, 431],
          [431, 430],
          [430, 424],
          [342, 353],
          [353, 276],
          [276, 342],
          [273, 335],
          [335, 424],
          [424, 273],
          [292, 325],
          [325, 307],
          [307, 292],
          [366, 447],
          [447, 345],
          [345, 366],
          [271, 303],
          [303, 302],
          [302, 271],
          [423, 266],
          [266, 371],
          [371, 423],
          [294, 455],
          [455, 460],
          [460, 294],
          [279, 278],
          [278, 294],
          [294, 279],
          [271, 272],
          [272, 304],
          [304, 271],
          [432, 434],
          [434, 427],
          [427, 432],
          [272, 407],
          [407, 408],
          [408, 272],
          [394, 430],
          [430, 431],
          [431, 394],
          [395, 369],
          [369, 400],
          [400, 395],
          [334, 333],
          [333, 299],
          [299, 334],
          [351, 417],
          [417, 168],
          [168, 351],
          [352, 280],
          [280, 411],
          [411, 352],
          [325, 319],
          [319, 320],
          [320, 325],
          [295, 296],
          [296, 336],
          [336, 295],
          [319, 403],
          [403, 404],
          [404, 319],
          [330, 348],
          [348, 349],
          [349, 330],
          [293, 298],
          [298, 333],
          [333, 293],
          [323, 454],
          [454, 447],
          [447, 323],
          [15, 16],
          [16, 315],
          [315, 15],
          [358, 429],
          [429, 279],
          [279, 358],
          [14, 15],
          [15, 316],
          [316, 14],
          [285, 336],
          [336, 9],
          [9, 285],
          [329, 349],
          [349, 350],
          [350, 329],
          [374, 380],
          [380, 252],
          [252, 374],
          [318, 402],
          [402, 403],
          [403, 318],
          [6, 197],
          [
            197,
            419
          ],
          [419, 6],
          [318, 319],
          [319, 325],
          [325, 318],
          [367, 364],
          [364, 365],
          [365, 367],
          [435, 367],
          [367, 397],
          [397, 435],
          [344, 438],
          [438, 439],
          [439, 344],
          [272, 271],
          [271, 311],
          [311, 272],
          [195, 5],
          [5, 281],
          [281, 195],
          [273, 287],
          [287, 291],
          [291, 273],
          [396, 428],
          [428, 199],
          [199, 396],
          [311, 271],
          [271, 268],
          [268, 311],
          [283, 444],
          [444, 445],
          [445, 283],
          [373, 254],
          [254, 339],
          [339, 373],
          [282, 334],
          [334, 296],
          [296, 282],
          [449, 347],
          [347, 346],
          [346, 449],
          [264, 447],
          [447, 454],
          [454, 264],
          [336, 296],
          [296, 299],
          [299, 336],
          [338, 10],
          [10, 151],
          [151, 338],
          [278, 439],
          [
            439,
            455
          ],
          [455, 278],
          [292, 407],
          [407, 415],
          [415, 292],
          [358, 371],
          [371, 355],
          [355, 358],
          [340, 345],
          [345, 372],
          [372, 340],
          [346, 347],
          [347, 280],
          [280, 346],
          [442, 443],
          [443, 282],
          [282, 442],
          [19, 94],
          [94, 370],
          [370, 19],
          [441, 442],
          [442, 295],
          [295, 441],
          [248, 419],
          [419, 197],
          [197, 248],
          [263, 255],
          [255, 359],
          [359, 263],
          [440, 275],
          [275, 274],
          [274, 440],
          [300, 383],
          [383, 368],
          [368, 300],
          [351, 412],
          [412, 465],
          [465, 351],
          [263, 467],
          [467, 466],
          [466, 263],
          [301, 368],
          [368, 389],
          [389, 301],
          [395, 378],
          [378, 379],
          [379, 395],
          [412, 351],
          [351, 419],
          [419, 412],
          [436, 426],
          [426, 322],
          [322, 436],
          [2, 164],
          [164, 393],
          [393, 2],
          [370, 462],
          [462, 461],
          [461, 370],
          [164, 0],
          [0, 267],
          [267, 164],
          [302, 11],
          [11, 12],
          [12, 302],
          [268, 12],
          [12, 13],
          [13, 268],
          [293, 300],
          [300, 301],
          [301, 293],
          [446, 261],
          [261, 340],
          [340, 446],
          [330, 266],
          [266, 425],
          [425, 330],
          [426, 423],
          [423, 391],
          [391, 426],
          [429, 355],
          [355, 437],
          [437, 429],
          [391, 327],
          [327, 326],
          [326, 391],
          [440, 457],
          [457, 438],
          [438, 440],
          [341, 382],
          [382, 362],
          [362, 341],
          [459, 457],
          [457, 461],
          [461, 459],
          [434, 430],
          [430, 394],
          [394, 434],
          [414, 463],
          [463, 362],
          [362, 414],
          [396, 369],
          [369, 262],
          [262, 396],
          [354, 461],
          [461, 457],
          [457, 354],
          [316, 403],
          [403, 402],
          [402, 316],
          [315, 404],
          [404, 403],
          [403, 315],
          [314, 405],
          [405, 404],
          [404, 314],
          [313, 406],
          [406, 405],
          [405, 313],
          [421, 418],
          [418, 406],
          [406, 421],
          [366, 401],
          [401, 361],
          [361, 366],
          [306, 408],
          [408, 407],
          [407, 306],
          [291, 409],
          [409, 408],
          [408, 291],
          [287, 410],
          [410, 409],
          [409, 287],
          [432, 436],
          [436, 410],
          [410, 432],
          [434, 416],
          [416, 411],
          [411, 434],
          [264, 368],
          [368, 383],
          [383, 264],
          [309, 438],
          [438, 457],
          [457, 309],
          [352, 376],
          [376, 401],
          [401, 352],
          [274, 275],
          [275, 4],
          [4, 274],
          [421, 428],
          [
            428,
            262
          ],
          [262, 421],
          [294, 327],
          [327, 358],
          [358, 294],
          [433, 416],
          [416, 367],
          [367, 433],
          [289, 455],
          [455, 439],
          [439, 289],
          [462, 370],
          [370, 326],
          [326, 462],
          [2, 326],
          [326, 370],
          [370, 2],
          [305, 460],
          [460, 455],
          [455, 305],
          [254, 449],
          [449, 448],
          [448, 254],
          [255, 261],
          [261, 446],
          [446, 255],
          [253, 450],
          [450, 449],
          [449, 253],
          [252, 451],
          [451, 450],
          [450, 252],
          [256, 452],
          [452, 451],
          [451, 256],
          [341, 453],
          [453, 452],
          [452, 341],
          [413, 464],
          [464, 463],
          [463, 413],
          [441, 413],
          [413, 414],
          [414, 441],
          [258, 442],
          [442, 441],
          [441, 258],
          [257, 443],
          [443, 442],
          [442, 257],
          [259, 444],
          [444, 443],
          [443, 259],
          [260, 445],
          [445, 444],
          [444, 260],
          [467, 342],
          [342, 445],
          [445, 467],
          [459, 458],
          [458, 250],
          [250, 459],
          [289, 392],
          [392, 290],
          [290, 289],
          [290, 328],
          [328, 460],
          [460, 290],
          [376, 433],
          [433, 435],
          [435, 376],
          [250, 290],
          [290, 392],
          [392, 250],
          [411, 416],
          [416, 433],
          [433, 411],
          [341, 463],
          [463, 464],
          [464, 341],
          [453, 464],
          [464, 465],
          [465, 453],
          [357, 465],
          [465, 412],
          [412, 357],
          [343, 412],
          [412, 399],
          [399, 343],
          [360, 363],
          [363, 440],
          [440, 360],
          [437, 399],
          [399, 456],
          [456, 437],
          [420, 456],
          [456, 363],
          [363, 420],
          [401, 435],
          [435, 288],
          [288, 401],
          [
            372,
            383
          ],
          [383, 353],
          [353, 372],
          [339, 255],
          [255, 249],
          [249, 339],
          [448, 261],
          [261, 255],
          [255, 448],
          [133, 243],
          [243, 190],
          [190, 133],
          [133, 155],
          [155, 112],
          [112, 133],
          [33, 246],
          [246, 247],
          [247, 33],
          [33, 130],
          [130, 25],
          [25, 33],
          [398, 384],
          [384, 286],
          [286, 398],
          [362, 398],
          [398, 414],
          [414, 362],
          [362, 463],
          [463, 341],
          [341, 362],
          [263, 359],
          [359, 467],
          [467, 263],
          [263, 249],
          [249, 255],
          [255, 263],
          [466, 467],
          [467, 260],
          [260, 466],
          [75, 60],
          [60, 166],
          [166, 75],
          [238, 239],
          [239, 79],
          [79, 238],
          [162, 127],
          [127, 139],
          [139, 162],
          [72, 11],
          [11, 37],
          [37, 72],
          [121, 232],
          [
            232,
            120
          ],
          [120, 121],
          [73, 72],
          [72, 39],
          [39, 73],
          [114, 128],
          [128, 47],
          [47, 114],
          [233, 232],
          [232, 128],
          [128, 233],
          [103, 104],
          [104, 67],
          [67, 103],
          [152, 175],
          [175, 148],
          [148, 152],
          [119, 118],
          [118, 101],
          [101, 119],
          [74, 73],
          [73, 40],
          [40, 74],
          [107, 9],
          [9, 108],
          [108, 107],
          [49, 48],
          [48, 131],
          [131, 49],
          [32, 194],
          [194, 211],
          [211, 32],
          [184, 74],
          [74, 185],
          [185, 184],
          [191, 80],
          [80, 183],
          [183, 191],
          [185, 40],
          [40, 186],
          [186, 185],
          [119, 230],
          [230, 118],
          [118, 119],
          [210, 202],
          [202, 214],
          [214, 210],
          [84, 83],
          [83, 17],
          [17, 84],
          [77, 76],
          [76, 146],
          [146, 77],
          [161, 160],
          [160, 30],
          [30, 161],
          [190, 56],
          [56, 173],
          [173, 190],
          [182, 106],
          [106, 194],
          [194, 182],
          [138, 135],
          [135, 192],
          [192, 138],
          [129, 203],
          [203, 98],
          [98, 129],
          [54, 21],
          [21, 68],
          [68, 54],
          [5, 51],
          [51, 4],
          [4, 5],
          [145, 144],
          [144, 23],
          [23, 145],
          [90, 77],
          [77, 91],
          [91, 90],
          [207, 205],
          [205, 187],
          [187, 207],
          [83, 201],
          [201, 18],
          [18, 83],
          [181, 91],
          [91, 182],
          [182, 181],
          [180, 90],
          [90, 181],
          [181, 180],
          [16, 85],
          [85, 17],
          [17, 16],
          [205, 206],
          [206, 36],
          [36, 205],
          [176, 148],
          [148, 140],
          [140, 176],
          [165, 92],
          [92, 39],
          [39, 165],
          [245, 193],
          [193, 244],
          [244, 245],
          [27, 159],
          [159, 28],
          [28, 27],
          [
            30,
            247
          ],
          [247, 161],
          [161, 30],
          [174, 236],
          [236, 196],
          [196, 174],
          [103, 54],
          [54, 104],
          [104, 103],
          [55, 193],
          [193, 8],
          [8, 55],
          [111, 117],
          [117, 31],
          [31, 111],
          [221, 189],
          [189, 55],
          [55, 221],
          [240, 98],
          [98, 99],
          [99, 240],
          [142, 126],
          [126, 100],
          [100, 142],
          [219, 166],
          [166, 218],
          [218, 219],
          [112, 155],
          [155, 26],
          [26, 112],
          [198, 209],
          [209, 131],
          [131, 198],
          [169, 135],
          [135, 150],
          [150, 169],
          [114, 47],
          [47, 217],
          [217, 114],
          [224, 223],
          [223, 53],
          [53, 224],
          [220, 45],
          [45, 134],
          [134, 220],
          [32, 211],
          [211, 140],
          [140, 32],
          [109, 67],
          [67, 108],
          [108, 109],
          [146, 43],
          [43, 91],
          [91, 146],
          [231, 230],
          [230, 120],
          [120, 231],
          [113, 226],
          [226, 247],
          [247, 113],
          [105, 63],
          [63, 52],
          [52, 105],
          [241, 238],
          [238, 242],
          [242, 241],
          [124, 46],
          [46, 156],
          [156, 124],
          [95, 78],
          [78, 96],
          [96, 95],
          [70, 46],
          [46, 63],
          [63, 70],
          [116, 143],
          [143, 227],
          [227, 116],
          [116, 123],
          [123, 111],
          [111, 116],
          [1, 44],
          [44, 19],
          [19, 1],
          [3, 236],
          [236, 51],
          [51, 3],
          [207, 216],
          [216, 205],
          [205, 207],
          [26, 154],
          [154, 22],
          [22, 26],
          [165, 39],
          [39, 167],
          [167, 165],
          [199, 200],
          [200, 208],
          [208, 199],
          [101, 36],
          [36, 100],
          [100, 101],
          [43, 57],
          [57, 202],
          [202, 43],
          [242, 20],
          [20, 99],
          [99, 242],
          [56, 28],
          [
            28,
            157
          ],
          [157, 56],
          [124, 35],
          [35, 113],
          [113, 124],
          [29, 160],
          [160, 27],
          [27, 29],
          [211, 204],
          [204, 210],
          [210, 211],
          [124, 113],
          [113, 46],
          [46, 124],
          [106, 43],
          [43, 204],
          [204, 106],
          [96, 62],
          [62, 77],
          [77, 96],
          [227, 137],
          [137, 116],
          [116, 227],
          [73, 41],
          [41, 72],
          [72, 73],
          [36, 203],
          [203, 142],
          [142, 36],
          [235, 64],
          [64, 240],
          [240, 235],
          [48, 49],
          [49, 64],
          [64, 48],
          [42, 41],
          [41, 74],
          [74, 42],
          [214, 212],
          [212, 207],
          [207, 214],
          [183, 42],
          [42, 184],
          [184, 183],
          [210, 169],
          [169, 211],
          [211, 210],
          [140, 170],
          [170, 176],
          [176, 140],
          [104, 105],
          [105, 69],
          [69, 104],
          [193, 122],
          [122, 168],
          [168, 193],
          [50, 123],
          [123, 187],
          [187, 50],
          [89, 96],
          [96, 90],
          [90, 89],
          [66, 65],
          [65, 107],
          [107, 66],
          [179, 89],
          [89, 180],
          [180, 179],
          [119, 101],
          [101, 120],
          [120, 119],
          [68, 63],
          [63, 104],
          [104, 68],
          [234, 93],
          [93, 227],
          [227, 234],
          [16, 15],
          [15, 85],
          [85, 16],
          [209, 129],
          [129, 49],
          [49, 209],
          [15, 14],
          [14, 86],
          [86, 15],
          [107, 55],
          [55, 9],
          [9, 107],
          [120, 100],
          [100, 121],
          [121, 120],
          [153, 145],
          [145, 22],
          [22, 153],
          [178, 88],
          [88, 179],
          [179, 178],
          [197, 6],
          [6, 196],
          [196, 197],
          [89, 88],
          [88, 96],
          [96, 89],
          [135, 138],
          [138, 136],
          [136, 135],
          [138, 215],
          [215, 172],
          [172, 138],
          [
            218,
            115
          ],
          [115, 219],
          [219, 218],
          [41, 42],
          [42, 81],
          [81, 41],
          [5, 195],
          [195, 51],
          [51, 5],
          [57, 43],
          [43, 61],
          [61, 57],
          [208, 171],
          [171, 199],
          [199, 208],
          [41, 81],
          [81, 38],
          [38, 41],
          [224, 53],
          [53, 225],
          [225, 224],
          [24, 144],
          [144, 110],
          [110, 24],
          [105, 52],
          [52, 66],
          [66, 105],
          [118, 229],
          [229, 117],
          [117, 118],
          [227, 34],
          [34, 234],
          [234, 227],
          [66, 107],
          [107, 69],
          [69, 66],
          [10, 109],
          [109, 151],
          [151, 10],
          [219, 48],
          [48, 235],
          [235, 219],
          [183, 62],
          [62, 191],
          [191, 183],
          [142, 129],
          [129, 126],
          [126, 142],
          [116, 111],
          [111, 143],
          [143, 116],
          [118, 117],
          [117, 50],
          [50, 118],
          [223, 222],
          [
            222,
            52
          ],
          [52, 223],
          [94, 19],
          [19, 141],
          [141, 94],
          [222, 221],
          [221, 65],
          [65, 222],
          [196, 3],
          [3, 197],
          [197, 196],
          [45, 220],
          [220, 44],
          [44, 45],
          [156, 70],
          [70, 139],
          [139, 156],
          [188, 122],
          [122, 245],
          [245, 188],
          [139, 71],
          [71, 162],
          [162, 139],
          [149, 170],
          [170, 150],
          [150, 149],
          [122, 188],
          [188, 196],
          [196, 122],
          [206, 216],
          [216, 92],
          [92, 206],
          [164, 2],
          [2, 167],
          [167, 164],
          [242, 141],
          [141, 241],
          [241, 242],
          [0, 164],
          [164, 37],
          [37, 0],
          [11, 72],
          [72, 12],
          [12, 11],
          [12, 38],
          [38, 13],
          [13, 12],
          [70, 63],
          [63, 71],
          [71, 70],
          [31, 226],
          [226, 111],
          [111, 31],
          [36, 101],
          [101, 205],
          [205, 36],
          [203, 206],
          [206, 165],
          [165, 203],
          [126, 209],
          [209, 217],
          [217, 126],
          [98, 165],
          [165, 97],
          [97, 98],
          [237, 220],
          [220, 218],
          [218, 237],
          [237, 239],
          [239, 241],
          [241, 237],
          [210, 214],
          [214, 169],
          [169, 210],
          [140, 171],
          [171, 32],
          [32, 140],
          [241, 125],
          [125, 237],
          [237, 241],
          [179, 86],
          [86, 178],
          [178, 179],
          [180, 85],
          [85, 179],
          [179, 180],
          [181, 84],
          [84, 180],
          [180, 181],
          [182, 83],
          [83, 181],
          [181, 182],
          [194, 201],
          [201, 182],
          [182, 194],
          [177, 137],
          [137, 132],
          [132, 177],
          [184, 76],
          [76, 183],
          [183, 184],
          [185, 61],
          [61, 184],
          [184, 185],
          [186, 57],
          [57, 185],
          [185, 186],
          [216, 212],
          [
            212,
            186
          ],
          [186, 216],
          [192, 214],
          [214, 187],
          [187, 192],
          [139, 34],
          [34, 156],
          [156, 139],
          [218, 79],
          [79, 237],
          [237, 218],
          [147, 123],
          [123, 177],
          [177, 147],
          [45, 44],
          [44, 4],
          [4, 45],
          [208, 201],
          [201, 32],
          [32, 208],
          [98, 64],
          [64, 129],
          [129, 98],
          [192, 213],
          [213, 138],
          [138, 192],
          [235, 59],
          [59, 219],
          [219, 235],
          [141, 242],
          [242, 97],
          [97, 141],
          [97, 2],
          [2, 141],
          [141, 97],
          [240, 75],
          [75, 235],
          [235, 240],
          [229, 24],
          [24, 228],
          [228, 229],
          [31, 25],
          [25, 226],
          [226, 31],
          [230, 23],
          [23, 229],
          [229, 230],
          [231, 22],
          [22, 230],
          [230, 231],
          [232, 26],
          [26, 231],
          [231, 232],
          [233, 112],
          [112, 232],
          [232, 233],
          [244, 189],
          [189, 243],
          [243, 244],
          [189, 221],
          [221, 190],
          [190, 189],
          [222, 28],
          [28, 221],
          [221, 222],
          [223, 27],
          [27, 222],
          [222, 223],
          [224, 29],
          [29, 223],
          [223, 224],
          [225, 30],
          [30, 224],
          [224, 225],
          [113, 247],
          [247, 225],
          [225, 113],
          [99, 60],
          [60, 240],
          [240, 99],
          [213, 147],
          [147, 215],
          [215, 213],
          [60, 20],
          [20, 166],
          [166, 60],
          [192, 187],
          [187, 213],
          [213, 192],
          [243, 112],
          [112, 244],
          [244, 243],
          [244, 233],
          [233, 245],
          [245, 244],
          [245, 128],
          [128, 188],
          [188, 245],
          [188, 114],
          [114, 174],
          [174, 188],
          [134, 131],
          [131, 220],
          [220, 134],
          [174, 217],
          [217, 236],
          [236, 174],
          [236, 198],
          [198, 134],
          [134, 236],
          [215, 177],
          [177, 58],
          [58, 215],
          [156, 143],
          [143, 124],
          [124, 156],
          [25, 110],
          [110, 7],
          [7, 25],
          [31, 228],
          [228, 25],
          [25, 31],
          [264, 356],
          [356, 368],
          [368, 264],
          [0, 11],
          [11, 267],
          [267, 0],
          [451, 452],
          [452, 349],
          [349, 451],
          [267, 302],
          [302, 269],
          [269, 267],
          [350, 357],
          [357, 277],
          [277, 350],
          [350, 452],
          [452, 357],
          [357, 350],
          [299, 333],
          [333, 297],
          [297, 299],
          [396, 175],
          [175, 377],
          [377, 396],
          [280, 347],
          [347, 330],
          [330, 280],
          [269, 303],
          [303, 270],
          [270, 269],
          [151, 9],
          [9, 337],
          [337, 151],
          [344, 278],
          [278, 360],
          [360, 344],
          [424, 418],
          [
            418,
            431
          ],
          [431, 424],
          [270, 304],
          [304, 409],
          [409, 270],
          [272, 310],
          [310, 407],
          [407, 272],
          [322, 270],
          [270, 410],
          [410, 322],
          [449, 450],
          [450, 347],
          [347, 449],
          [432, 422],
          [422, 434],
          [434, 432],
          [18, 313],
          [313, 17],
          [17, 18],
          [291, 306],
          [306, 375],
          [375, 291],
          [259, 387],
          [387, 260],
          [260, 259],
          [424, 335],
          [335, 418],
          [418, 424],
          [434, 364],
          [364, 416],
          [416, 434],
          [391, 423],
          [423, 327],
          [327, 391],
          [301, 251],
          [251, 298],
          [298, 301],
          [275, 281],
          [281, 4],
          [4, 275],
          [254, 373],
          [373, 253],
          [253, 254],
          [375, 307],
          [307, 321],
          [321, 375],
          [280, 425],
          [425, 411],
          [411, 280],
          [200, 421],
          [
            421,
            18
          ],
          [18, 200],
          [335, 321],
          [321, 406],
          [406, 335],
          [321, 320],
          [320, 405],
          [405, 321],
          [314, 315],
          [315, 17],
          [17, 314],
          [423, 426],
          [426, 266],
          [266, 423],
          [396, 377],
          [377, 369],
          [369, 396],
          [270, 322],
          [322, 269],
          [269, 270],
          [413, 417],
          [417, 464],
          [464, 413],
          [385, 386],
          [386, 258],
          [258, 385],
          [248, 456],
          [456, 419],
          [419, 248],
          [298, 284],
          [284, 333],
          [333, 298],
          [168, 417],
          [417, 8],
          [8, 168],
          [448, 346],
          [346, 261],
          [261, 448],
          [417, 413],
          [413, 285],
          [285, 417],
          [326, 327],
          [327, 328],
          [328, 326],
          [277, 355],
          [355, 329],
          [329, 277],
          [309, 392],
          [392, 438],
          [438, 309],
          [381, 382],
          [
            382,
            256
          ],
          [256, 381],
          [279, 429],
          [429, 360],
          [360, 279],
          [365, 364],
          [364, 379],
          [379, 365],
          [355, 277],
          [277, 437],
          [437, 355],
          [282, 443],
          [443, 283],
          [283, 282],
          [281, 275],
          [275, 363],
          [363, 281],
          [395, 431],
          [431, 369],
          [369, 395],
          [299, 297],
          [297, 337],
          [337, 299],
          [335, 273],
          [273, 321],
          [321, 335],
          [348, 450],
          [450, 349],
          [349, 348],
          [359, 446],
          [446, 467],
          [467, 359],
          [283, 293],
          [293, 282],
          [282, 283],
          [250, 458],
          [458, 462],
          [462, 250],
          [300, 276],
          [276, 383],
          [383, 300],
          [292, 308],
          [308, 325],
          [325, 292],
          [283, 276],
          [276, 293],
          [293, 283],
          [264, 372],
          [372, 447],
          [447, 264],
          [346, 352],
          [352, 340],
          [340, 346],
          [354, 274],
          [274, 19],
          [19, 354],
          [363, 456],
          [456, 281],
          [281, 363],
          [426, 436],
          [436, 425],
          [425, 426],
          [380, 381],
          [381, 252],
          [252, 380],
          [267, 269],
          [269, 393],
          [393, 267],
          [421, 200],
          [200, 428],
          [428, 421],
          [371, 266],
          [266, 329],
          [329, 371],
          [432, 287],
          [287, 422],
          [422, 432],
          [290, 250],
          [250, 328],
          [328, 290],
          [385, 258],
          [258, 384],
          [384, 385],
          [446, 265],
          [265, 342],
          [342, 446],
          [386, 387],
          [387, 257],
          [257, 386],
          [422, 424],
          [424, 430],
          [430, 422],
          [445, 342],
          [342, 276],
          [276, 445],
          [422, 273],
          [273, 424],
          [424, 422],
          [306, 292],
          [292, 307],
          [307, 306],
          [
            352,
            366
          ],
          [366, 345],
          [345, 352],
          [268, 271],
          [271, 302],
          [302, 268],
          [358, 423],
          [423, 371],
          [371, 358],
          [327, 294],
          [294, 460],
          [460, 327],
          [331, 279],
          [279, 294],
          [294, 331],
          [303, 271],
          [271, 304],
          [304, 303],
          [436, 432],
          [432, 427],
          [427, 436],
          [304, 272],
          [272, 408],
          [408, 304],
          [395, 394],
          [394, 431],
          [431, 395],
          [378, 395],
          [395, 400],
          [400, 378],
          [296, 334],
          [334, 299],
          [299, 296],
          [6, 351],
          [351, 168],
          [168, 6],
          [376, 352],
          [352, 411],
          [411, 376],
          [307, 325],
          [325, 320],
          [320, 307],
          [285, 295],
          [295, 336],
          [336, 285],
          [320, 319],
          [319, 404],
          [404, 320],
          [329, 330],
          [330, 349],
          [349, 329],
          [334, 293],
          [293, 333],
          [333, 334],
          [366, 323],
          [323, 447],
          [447, 366],
          [316, 15],
          [15, 315],
          [315, 316],
          [331, 358],
          [358, 279],
          [279, 331],
          [317, 14],
          [14, 316],
          [316, 317],
          [8, 285],
          [285, 9],
          [9, 8],
          [277, 329],
          [329, 350],
          [350, 277],
          [253, 374],
          [374, 252],
          [252, 253],
          [319, 318],
          [318, 403],
          [403, 319],
          [351, 6],
          [6, 419],
          [419, 351],
          [324, 318],
          [318, 325],
          [325, 324],
          [397, 367],
          [367, 365],
          [365, 397],
          [288, 435],
          [435, 397],
          [397, 288],
          [278, 344],
          [344, 439],
          [439, 278],
          [310, 272],
          [272, 311],
          [311, 310],
          [248, 195],
          [195, 281],
          [281, 248],
          [375, 273],
          [273, 291],
          [291, 375],
          [175, 396],
          [396, 199],
          [199, 175],
          [312, 311],
          [311, 268],
          [268, 312],
          [276, 283],
          [283, 445],
          [445, 276],
          [390, 373],
          [373, 339],
          [339, 390],
          [295, 282],
          [282, 296],
          [296, 295],
          [448, 449],
          [449, 346],
          [346, 448],
          [356, 264],
          [264, 454],
          [454, 356],
          [337, 336],
          [336, 299],
          [299, 337],
          [337, 338],
          [338, 151],
          [151, 337],
          [294, 278],
          [278, 455],
          [455, 294],
          [308, 292],
          [292, 415],
          [415, 308],
          [429, 358],
          [358, 355],
          [355, 429],
          [265, 340],
          [340, 372],
          [372, 265],
          [352, 346],
          [346, 280],
          [280, 352],
          [295, 442],
          [442, 282],
          [282, 295],
          [354, 19],
          [19, 370],
          [370, 354],
          [285, 441],
          [441, 295],
          [295, 285],
          [
            195,
            248
          ],
          [248, 197],
          [197, 195],
          [457, 440],
          [440, 274],
          [274, 457],
          [301, 300],
          [300, 368],
          [368, 301],
          [417, 351],
          [351, 465],
          [465, 417],
          [251, 301],
          [301, 389],
          [389, 251],
          [394, 395],
          [395, 379],
          [379, 394],
          [399, 412],
          [412, 419],
          [419, 399],
          [410, 436],
          [436, 322],
          [322, 410],
          [326, 2],
          [2, 393],
          [393, 326],
          [354, 370],
          [370, 461],
          [461, 354],
          [393, 164],
          [164, 267],
          [267, 393],
          [268, 302],
          [302, 12],
          [12, 268],
          [312, 268],
          [268, 13],
          [13, 312],
          [298, 293],
          [293, 301],
          [301, 298],
          [265, 446],
          [446, 340],
          [340, 265],
          [280, 330],
          [330, 425],
          [425, 280],
          [322, 426],
          [426, 391],
          [391, 322],
          [
            420,
            429
          ],
          [429, 437],
          [437, 420],
          [393, 391],
          [391, 326],
          [326, 393],
          [344, 440],
          [440, 438],
          [438, 344],
          [458, 459],
          [459, 461],
          [461, 458],
          [364, 434],
          [434, 394],
          [394, 364],
          [428, 396],
          [396, 262],
          [262, 428],
          [274, 354],
          [354, 457],
          [457, 274],
          [317, 316],
          [316, 402],
          [402, 317],
          [316, 315],
          [315, 403],
          [403, 316],
          [315, 314],
          [314, 404],
          [404, 315],
          [314, 313],
          [313, 405],
          [405, 314],
          [313, 421],
          [421, 406],
          [406, 313],
          [323, 366],
          [366, 361],
          [361, 323],
          [292, 306],
          [306, 407],
          [407, 292],
          [306, 291],
          [291, 408],
          [408, 306],
          [291, 287],
          [287, 409],
          [409, 291],
          [287, 432],
          [432, 410],
          [410, 287],
          [427, 434],
          [434, 411],
          [411, 427],
          [372, 264],
          [264, 383],
          [383, 372],
          [459, 309],
          [309, 457],
          [457, 459],
          [366, 352],
          [352, 401],
          [401, 366],
          [1, 274],
          [274, 4],
          [4, 1],
          [418, 421],
          [421, 262],
          [262, 418],
          [331, 294],
          [294, 358],
          [358, 331],
          [435, 433],
          [433, 367],
          [367, 435],
          [392, 289],
          [289, 439],
          [439, 392],
          [328, 462],
          [462, 326],
          [326, 328],
          [94, 2],
          [2, 370],
          [370, 94],
          [289, 305],
          [305, 455],
          [455, 289],
          [339, 254],
          [254, 448],
          [448, 339],
          [359, 255],
          [255, 446],
          [446, 359],
          [254, 253],
          [253, 449],
          [449, 254],
          [253, 252],
          [252, 450],
          [450, 253],
          [252, 256],
          [256, 451],
          [451, 252],
          [
            256,
            341
          ],
          [341, 452],
          [452, 256],
          [414, 413],
          [413, 463],
          [463, 414],
          [286, 441],
          [441, 414],
          [414, 286],
          [286, 258],
          [258, 441],
          [441, 286],
          [258, 257],
          [257, 442],
          [442, 258],
          [257, 259],
          [259, 443],
          [443, 257],
          [259, 260],
          [260, 444],
          [444, 259],
          [260, 467],
          [467, 445],
          [445, 260],
          [309, 459],
          [459, 250],
          [250, 309],
          [305, 289],
          [289, 290],
          [290, 305],
          [305, 290],
          [290, 460],
          [460, 305],
          [401, 376],
          [376, 435],
          [435, 401],
          [309, 250],
          [250, 392],
          [392, 309],
          [376, 411],
          [411, 433],
          [433, 376],
          [453, 341],
          [341, 464],
          [464, 453],
          [357, 453],
          [453, 465],
          [465, 357],
          [343, 357],
          [357, 412],
          [412, 343],
          [437, 343],
          [343, 399],
          [399, 437],
          [344, 360],
          [360, 440],
          [440, 344],
          [420, 437],
          [437, 456],
          [456, 420],
          [360, 420],
          [420, 363],
          [363, 360],
          [361, 401],
          [401, 288],
          [288, 361],
          [265, 372],
          [372, 353],
          [353, 265],
          [390, 339],
          [339, 249],
          [249, 390],
          [339, 448],
          [448, 255],
          [255, 339]
        ]);
        I("HAND_CONNECTIONS", [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]]);
        I("POSE_CONNECTIONS", [[0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]]);
        I("POSE_LANDMARKS", { NOSE: 0, LEFT_EYE_INNER: 1, LEFT_EYE: 2, LEFT_EYE_OUTER: 3, RIGHT_EYE_INNER: 4, RIGHT_EYE: 5, RIGHT_EYE_OUTER: 6, LEFT_EAR: 7, RIGHT_EAR: 8, LEFT_RIGHT: 9, RIGHT_LEFT: 10, LEFT_SHOULDER: 11, RIGHT_SHOULDER: 12, LEFT_ELBOW: 13, RIGHT_ELBOW: 14, LEFT_WRIST: 15, RIGHT_WRIST: 16, LEFT_PINKY: 17, RIGHT_PINKY: 18, LEFT_INDEX: 19, RIGHT_INDEX: 20, LEFT_THUMB: 21, RIGHT_THUMB: 22, LEFT_HIP: 23, RIGHT_HIP: 24, LEFT_KNEE: 25, RIGHT_KNEE: 26, LEFT_ANKLE: 27, RIGHT_ANKLE: 28, LEFT_HEEL: 29, RIGHT_HEEL: 30, LEFT_FOOT_INDEX: 31, RIGHT_FOOT_INDEX: 32 });
        I("POSE_LANDMARKS_LEFT", { LEFT_EYE_INNER: 1, LEFT_EYE: 2, LEFT_EYE_OUTER: 3, LEFT_EAR: 7, LEFT_RIGHT: 9, LEFT_SHOULDER: 11, LEFT_ELBOW: 13, LEFT_WRIST: 15, LEFT_PINKY: 17, LEFT_INDEX: 19, LEFT_THUMB: 21, LEFT_HIP: 23, LEFT_KNEE: 25, LEFT_ANKLE: 27, LEFT_HEEL: 29, LEFT_FOOT_INDEX: 31 });
        I("POSE_LANDMARKS_RIGHT", { RIGHT_EYE_INNER: 4, RIGHT_EYE: 5, RIGHT_EYE_OUTER: 6, RIGHT_EAR: 8, RIGHT_LEFT: 10, RIGHT_SHOULDER: 12, RIGHT_ELBOW: 14, RIGHT_WRIST: 16, RIGHT_PINKY: 18, RIGHT_INDEX: 20, RIGHT_THUMB: 22, RIGHT_HIP: 24, RIGHT_KNEE: 26, RIGHT_ANKLE: 28, RIGHT_HEEL: 30, RIGHT_FOOT_INDEX: 32 });
        I("POSE_LANDMARKS_NEUTRAL", { NOSE: 0 });
        I("matrixDataToMatrix", function(a) {
          for (var b = a.getCols(), c = a.getRows(), d = a.getPackedDataList(), e = [], g = 0; g < c; g++)
            e.push(Array(b));
          for (g = 0; g < c; g++)
            for (var f = 0; f < b; f++) {
              var k = a.getLayout() === 1 ? g * b + f : f * c + g;
              e[g][f] = d[k];
            }
          return e;
        });
        I("VERSION", "0.5.1635989137");
      }).call(exports);
    }
  });

  // node_modules/@mediapipe/camera_utils/camera_utils.js
  var require_camera_utils = __commonJS({
    "node_modules/@mediapipe/camera_utils/camera_utils.js"(exports) {
      (function() {
        "use strict";
        function n(a) {
          var b = 0;
          return function() {
            return b < a.length ? { done: false, value: a[b++] } : { done: true };
          };
        }
        var q2 = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, e) {
          if (a == Array.prototype || a == Object.prototype)
            return a;
          a[b] = e.value;
          return a;
        };
        function t(a) {
          a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
          for (var b = 0; b < a.length; ++b) {
            var e = a[b];
            if (e && e.Math == Math)
              return e;
          }
          throw Error("Cannot find global object");
        }
        var u = t(this);
        function v(a, b) {
          if (b)
            a: {
              var e = u;
              a = a.split(".");
              for (var f = 0; f < a.length - 1; f++) {
                var h = a[f];
                if (!(h in e))
                  break a;
                e = e[h];
              }
              a = a[a.length - 1];
              f = e[a];
              b = b(f);
              b != f && b != null && q2(e, a, { configurable: true, writable: true, value: b });
            }
        }
        v("Symbol", function(a) {
          function b(l) {
            if (this instanceof b)
              throw new TypeError("Symbol is not a constructor");
            return new e(f + (l || "") + "_" + h++, l);
          }
          function e(l, c) {
            this.g = l;
            q2(this, "description", { configurable: true, writable: true, value: c });
          }
          if (a)
            return a;
          e.prototype.toString = function() {
            return this.g;
          };
          var f = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", h = 0;
          return b;
        });
        v("Symbol.iterator", function(a) {
          if (a)
            return a;
          a = Symbol("Symbol.iterator");
          for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
            var f = u[b[e]];
            typeof f === "function" && typeof f.prototype[a] != "function" && q2(f.prototype, a, { configurable: true, writable: true, value: function() {
              return w(n(this));
            } });
          }
          return a;
        });
        function w(a) {
          a = { next: a };
          a[Symbol.iterator] = function() {
            return this;
          };
          return a;
        }
        function x(a) {
          var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : { next: n(a) };
        }
        function y() {
          this.i = false;
          this.g = null;
          this.o = void 0;
          this.j = 1;
          this.m = 0;
          this.h = null;
        }
        function z(a) {
          if (a.i)
            throw new TypeError("Generator is already running");
          a.i = true;
        }
        y.prototype.l = function(a) {
          this.o = a;
        };
        function A(a, b) {
          a.h = { F: b, G: true };
          a.j = a.m;
        }
        y.prototype.return = function(a) {
          this.h = { return: a };
          this.j = this.m;
        };
        function B(a) {
          this.g = new y();
          this.h = a;
        }
        function C(a, b) {
          z(a.g);
          var e = a.g.g;
          if (e)
            return D(a, "return" in e ? e["return"] : function(f) {
              return { value: f, done: true };
            }, b, a.g.return);
          a.g.return(b);
          return H(a);
        }
        function D(a, b, e, f) {
          try {
            var h = b.call(a.g.g, e);
            if (!(h instanceof Object))
              throw new TypeError("Iterator result " + h + " is not an object");
            if (!h.done)
              return a.g.i = false, h;
            var l = h.value;
          } catch (c) {
            return a.g.g = null, A(a.g, c), H(a);
          }
          a.g.g = null;
          f.call(a.g, l);
          return H(a);
        }
        function H(a) {
          for (; a.g.j; )
            try {
              var b = a.h(a.g);
              if (b)
                return a.g.i = false, { value: b.value, done: false };
            } catch (e) {
              a.g.o = void 0, A(a.g, e);
            }
          a.g.i = false;
          if (a.g.h) {
            b = a.g.h;
            a.g.h = null;
            if (b.G)
              throw b.F;
            return { value: b.return, done: true };
          }
          return { value: void 0, done: true };
        }
        function I(a) {
          this.next = function(b) {
            z(a.g);
            a.g.g ? b = D(a, a.g.g.next, b, a.g.l) : (a.g.l(b), b = H(a));
            return b;
          };
          this.throw = function(b) {
            z(a.g);
            a.g.g ? b = D(a, a.g.g["throw"], b, a.g.l) : (A(a.g, b), b = H(a));
            return b;
          };
          this.return = function(b) {
            return C(a, b);
          };
          this[Symbol.iterator] = function() {
            return this;
          };
        }
        function J(a) {
          function b(f) {
            return a.next(f);
          }
          function e(f) {
            return a.throw(f);
          }
          return new Promise(function(f, h) {
            function l(c) {
              c.done ? f(c.value) : Promise.resolve(c.value).then(b, e).then(l, h);
            }
            l(a.next());
          });
        }
        v("Promise", function(a) {
          function b(c) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.o = false;
            var d = this.j();
            try {
              c(d.resolve, d.reject);
            } catch (g) {
              d.reject(g);
            }
          }
          function e() {
            this.g = null;
          }
          function f(c) {
            return c instanceof b ? c : new b(function(d) {
              d(c);
            });
          }
          if (a)
            return a;
          e.prototype.h = function(c) {
            if (this.g == null) {
              this.g = [];
              var d = this;
              this.i(function() {
                d.l();
              });
            }
            this.g.push(c);
          };
          var h = u.setTimeout;
          e.prototype.i = function(c) {
            h(c, 0);
          };
          e.prototype.l = function() {
            for (; this.g && this.g.length; ) {
              var c = this.g;
              this.g = [];
              for (var d = 0; d < c.length; ++d) {
                var g = c[d];
                c[d] = null;
                try {
                  g();
                } catch (k) {
                  this.j(k);
                }
              }
            }
            this.g = null;
          };
          e.prototype.j = function(c) {
            this.i(function() {
              throw c;
            });
          };
          b.prototype.j = function() {
            function c(k) {
              return function(m) {
                g || (g = true, k.call(d, m));
              };
            }
            var d = this, g = false;
            return { resolve: c(this.A), reject: c(this.l) };
          };
          b.prototype.A = function(c) {
            if (c === this)
              this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (c instanceof b)
              this.C(c);
            else {
              a:
                switch (typeof c) {
                  case "object":
                    var d = c != null;
                    break a;
                  case "function":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              d ? this.v(c) : this.m(c);
            }
          };
          b.prototype.v = function(c) {
            var d = void 0;
            try {
              d = c.then;
            } catch (g) {
              this.l(g);
              return;
            }
            typeof d == "function" ? this.D(d, c) : this.m(c);
          };
          b.prototype.l = function(c) {
            this.u(2, c);
          };
          b.prototype.m = function(c) {
            this.u(1, c);
          };
          b.prototype.u = function(c, d) {
            if (this.h != 0)
              throw Error("Cannot settle(" + c + ", " + d + "): Promise already settled in state" + this.h);
            this.h = c;
            this.i = d;
            this.h === 2 && this.B();
            this.H();
          };
          b.prototype.B = function() {
            var c = this;
            h(function() {
              if (c.I()) {
                var d = u.console;
                typeof d !== "undefined" && d.error(c.i);
              }
            }, 1);
          };
          b.prototype.I = function() {
            if (this.o)
              return false;
            var c = u.CustomEvent, d = u.Event, g = u.dispatchEvent;
            if (typeof g === "undefined")
              return true;
            typeof c === "function" ? c = new c("unhandledrejection", { cancelable: true }) : typeof d === "function" ? c = new d("unhandledrejection", { cancelable: true }) : (c = u.document.createEvent("CustomEvent"), c.initCustomEvent("unhandledrejection", false, true, c));
            c.promise = this;
            c.reason = this.i;
            return g(c);
          };
          b.prototype.H = function() {
            if (this.g != null) {
              for (var c = 0; c < this.g.length; ++c)
                l.h(this.g[c]);
              this.g = null;
            }
          };
          var l = new e();
          b.prototype.C = function(c) {
            var d = this.j();
            c.s(d.resolve, d.reject);
          };
          b.prototype.D = function(c, d) {
            var g = this.j();
            try {
              c.call(d, g.resolve, g.reject);
            } catch (k) {
              g.reject(k);
            }
          };
          b.prototype.then = function(c, d) {
            function g(p2, r) {
              return typeof p2 == "function" ? function(E) {
                try {
                  k(p2(E));
                } catch (F) {
                  m(F);
                }
              } : r;
            }
            var k, m, G = new b(function(p2, r) {
              k = p2;
              m = r;
            });
            this.s(g(c, k), g(d, m));
            return G;
          };
          b.prototype.catch = function(c) {
            return this.then(void 0, c);
          };
          b.prototype.s = function(c, d) {
            function g() {
              switch (k.h) {
                case 1:
                  c(k.i);
                  break;
                case 2:
                  d(k.i);
                  break;
                default:
                  throw Error("Unexpected state: " + k.h);
              }
            }
            var k = this;
            this.g == null ? l.h(g) : this.g.push(g);
            this.o = true;
          };
          b.resolve = f;
          b.reject = function(c) {
            return new b(function(d, g) {
              g(c);
            });
          };
          b.race = function(c) {
            return new b(function(d, g) {
              for (var k = x(c), m = k.next(); !m.done; m = k.next())
                f(m.value).s(d, g);
            });
          };
          b.all = function(c) {
            var d = x(c), g = d.next();
            return g.done ? f([]) : new b(function(k, m) {
              function G(E) {
                return function(F) {
                  p2[E] = F;
                  r--;
                  r == 0 && k(p2);
                };
              }
              var p2 = [], r = 0;
              do
                p2.push(void 0), r++, f(g.value).s(G(p2.length - 1), m), g = d.next();
              while (!g.done);
            });
          };
          return b;
        });
        var K = typeof Object.assign == "function" ? Object.assign : function(a, b) {
          for (var e = 1; e < arguments.length; e++) {
            var f = arguments[e];
            if (f)
              for (var h in f)
                Object.prototype.hasOwnProperty.call(f, h) && (a[h] = f[h]);
          }
          return a;
        };
        v("Object.assign", function(a) {
          return a || K;
        });
        var L = this || self;
        var M = { facingMode: "user", width: 640, height: 480 };
        function N(a, b) {
          this.video = a;
          this.i = 0;
          this.h = Object.assign(Object.assign({}, M), b);
        }
        N.prototype.stop = function() {
          var a = this, b, e, f, h;
          return J(new I(new B(function(l) {
            if (a.g) {
              b = a.g.getTracks();
              e = x(b);
              for (f = e.next(); !f.done; f = e.next())
                h = f.value, h.stop();
              a.g = void 0;
            }
            l.j = 0;
          })));
        };
        N.prototype.start = function() {
          var a = this, b;
          return J(new I(new B(function(e) {
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists.");
            b = a.h;
            return e.return(navigator.mediaDevices.getUserMedia({ video: { facingMode: b.facingMode, width: b.width, height: b.height } }).then(function(f) {
              O(a, f);
            }).catch(function(f) {
              var h = "Failed to acquire camera feed: " + f;
              console.error(h);
              alert(h);
              throw f;
            }));
          })));
        };
        function P(a) {
          window.requestAnimationFrame(function() {
            Q(a);
          });
        }
        function O(a, b) {
          a.g = b;
          a.video.srcObject = b;
          a.video.onloadedmetadata = function() {
            a.video.play();
            P(a);
          };
        }
        function Q(a) {
          var b = null;
          a.video.paused || a.video.currentTime === a.i || (a.i = a.video.currentTime, b = a.h.onFrame());
          b ? b.then(function() {
            P(a);
          }) : P(a);
        }
        var R = ["Camera"], S = L;
        R[0] in S || typeof S.execScript == "undefined" || S.execScript("var " + R[0]);
        for (var T; R.length && (T = R.shift()); )
          R.length || N === void 0 ? S[T] && S[T] !== Object.prototype[T] ? S = S[T] : S = S[T] = {} : S[T] = N;
      }).call(exports);
    }
  });

  // node_modules/is-mobile/index.js
  var require_is_mobile = __commonJS({
    "node_modules/is-mobile/index.js"(exports, module) {
      "use strict";
      module.exports = isMobile;
      module.exports.isMobile = isMobile;
      module.exports.default = isMobile;
      var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
      var notMobileRE = /CrOS/;
      var tabletRE = /android|ipad|playbook|silk/i;
      function isMobile(opts) {
        if (!opts)
          opts = {};
        let ua = opts.ua;
        if (!ua && typeof navigator !== "undefined")
          ua = navigator.userAgent;
        if (ua && ua.headers && typeof ua.headers["user-agent"] === "string") {
          ua = ua.headers["user-agent"];
        }
        if (typeof ua !== "string")
          return false;
        let result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
        if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) {
          result = true;
        }
        return result;
      }
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  var identity = (x) => x;
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  var src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
  }
  var is_client = typeof window !== "undefined";
  var now = is_client ? () => window.performance.now() : () => Date.now();
  var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
  var tasks = /* @__PURE__ */ new Set();
  function run_tasks(now2) {
    tasks.forEach((task) => {
      if (!task.c(now2)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0)
      raf(run_tasks);
  }
  function loop(callback) {
    let task;
    if (tasks.size === 0)
      raf(run_tasks);
    return {
      promise: new Promise((fulfill) => {
        tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        tasks.delete(task);
      }
    };
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function get_root_for_style(node) {
    if (!node)
      return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
      return root;
    }
    return node.ownerDocument;
  }
  function append_empty_stylesheet(node) {
    const style_element = element("style");
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
  }
  function append_stylesheet(node, style) {
    append(node.head || node, style);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function set_attributes(node, attributes) {
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
      if (attributes[key] == null) {
        node.removeAttribute(key);
      } else if (key === "style") {
        node.style.cssText = attributes[key];
      } else if (key === "__value") {
        node.value = node[key] = attributes[key];
      } else if (descriptors[key] && descriptors[key].set) {
        node[key] = attributes[key];
      } else {
        attr(node, key, attributes[key]);
      }
    }
  }
  function set_custom_element_data(node, prop, value) {
    if (prop in node) {
      node[prop] = typeof node[prop] === "boolean" && value === "" ? true : value;
    } else {
      attr(node, prop, value);
    }
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    if (value === null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  function toggle_class(element2, name, toggle) {
    element2.classList[toggle ? "add" : "remove"](name);
  }
  function custom_event(type, detail, bubbles = false) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }
  var managed_styles = /* @__PURE__ */ new Map();
  var active = 0;
  function hash(str) {
    let hash2 = 5381;
    let i = str.length;
    while (i--)
      hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
    return hash2 >>> 0;
  }
  function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
  }
  function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for (let p2 = 0; p2 <= 1; p2 += step) {
      const t = a + (b - a) * ease(p2);
      keyframes += p2 * 100 + `%{${fn(t, 1 - t)}}
`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
      rules[name] = true;
      stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
  }
  function delete_rule(node, name) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1);
    const deleted = previous.length - next.length;
    if (deleted) {
      node.style.animation = next.join(", ");
      active -= deleted;
      if (!active)
        clear_rules();
    }
  }
  function clear_rules() {
    raf(() => {
      if (active)
        return;
      managed_styles.forEach((info) => {
        const { stylesheet } = info;
        let i = stylesheet.cssRules.length;
        while (i--)
          stylesheet.deleteRule(i);
        info.rules = {};
      });
      managed_styles.clear();
    });
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var promise;
  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(() => {
        promise = null;
      });
    }
    return promise;
  }
  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }
  var null_transition = { duration: 0 };
  function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
      if (animation_name)
        delete_rule(node, animation_name);
    }
    function go() {
      const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
      if (css)
        animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
      tick2(0, 1);
      const start_time = now() + delay;
      const end_time = start_time + duration;
      if (task)
        task.abort();
      running = true;
      add_render_callback(() => dispatch(node, true, "start"));
      task = loop((now2) => {
        if (running) {
          if (now2 >= end_time) {
            tick2(1, 0);
            dispatch(node, true, "end");
            cleanup();
            return running = false;
          }
          if (now2 >= start_time) {
            const t = easing((now2 - start_time) / duration);
            tick2(t, 1 - t);
          }
        }
        return running;
      });
    }
    let started = false;
    return {
      start() {
        if (started)
          return;
        started = true;
        delete_rule(node);
        if (is_function(config)) {
          config = config();
          wait().then(go);
        } else {
          go();
        }
      },
      invalidate() {
        started = false;
      },
      end() {
        if (running) {
          cleanup();
          running = false;
        }
      }
    };
  }
  function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
      const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
      if (css)
        animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
      const start_time = now() + delay;
      const end_time = start_time + duration;
      add_render_callback(() => dispatch(node, false, "start"));
      loop((now2) => {
        if (running) {
          if (now2 >= end_time) {
            tick2(0, 1);
            dispatch(node, false, "end");
            if (!--group.r) {
              run_all(group.c);
            }
            return false;
          }
          if (now2 >= start_time) {
            const t = easing((now2 - start_time) / duration);
            tick2(1 - t, t);
          }
        }
        return running;
      });
    }
    if (is_function(config)) {
      wait().then(() => {
        config = config();
        go();
      });
    } else {
      go();
    }
    return {
      end(reset) {
        if (reset && config.tick) {
          config.tick(1, 0);
        }
        if (running) {
          if (animation_name)
            delete_rule(node, animation_name);
          running = false;
        }
      }
    };
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function get_spread_update(levels, updates) {
    const update3 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update3[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update3))
        update3[key] = void 0;
    }
    return update3;
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance19, create_fragment22, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance19 ? instance19(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment22 ? create_fragment22($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // src/component/scatter.ts
  var bb = new AFRAME.THREE.Box3();
  AFRAME.registerComponent("scatter", {
    schema: {
      type: "string",
      default: "-0.5 -0.5 -0.5 0.5 0.5 0.5"
    },
    update() {
      bb.setFromArray(this.data.split(" ").map(parseFloat));
      this.el.object3D.position.x += bb.min.x + Math.random() * (bb.max.x - bb.min.x);
      this.el.object3D.position.y += bb.min.y + Math.random() * (bb.max.y - bb.min.y);
      this.el.object3D.position.z += bb.min.z + Math.random() * (bb.max.z - bb.min.z);
    }
  });

  // src/component/activate.ts
  AFRAME.registerComponent("activate", {
    multiple: true,
    update() {
      const pool = this.el.components[`pool__${this.id}`];
      if (!pool)
        return;
      let ent;
      for (let i = 0; i < pool.data.size; i++) {
        ent = pool.requestEntity();
        ent.play();
      }
    }
  });

  // src/component/ring.ts
  AFRAME.registerComponent("ring", {
    schema: {
      count: { type: "number", default: 10 },
      radius: { type: "number", default: 5 }
    },
    update() {
      const d = this.el.object3D.parent.userData;
      const i = (d.ringDex === void 0 ? d.ringDex = 1 : d.ringDex++) % this.data.count / this.data.count * Math.PI * 2;
      this.el.object3D.position.set(Math.sin(i), 0, Math.cos(i)).multiplyScalar(this.data.radius);
    }
  });

  // src/component/vrm-input.ts
  var import_holistic = __toESM(require_holistic());
  var import_camera_utils = __toESM(require_camera_utils());

  // src/state.ts
  var state_default = {
    "binds": {
      "n": "control selfie",
      "m": "control not selfie",
      "h": "hi! | hey ! | hey you! | hello...",
      "i": "it's doer 1 | it's me, doer 1 | doer 1 that's me",
      "f1": "control help",
      "f2": "control not help",
      "!": "welcome to a.goblin.life",
      "@": "these are keybinds",
      "#": "press ~ or enter then type ~ bind 3 to change this bind",
      "$": "press f1 to explore other commands",
      "%": "good luck, have fun",
      "^": "foobar",
      "7": "Lorum ipsum",
      "8": "Vas rel por",
      "9": "In vas flam",
      "0": "nox",
      "f": "~ not pointerlock",
      "q": "~ toggle drop",
      "e": "~ toggle throw"
    },
    "vars": {},
    "selfie": false,
    avatar: {
      doer: "./vrm/doer.2.vrm",
      current: "./vrm/doer.2.vrm"
    },
    binds_icon: {
      "!": "\u{1F525}",
      "@": "\u{1F3F4}\u200D\u2620\uFE0F",
      "#": "\u{1F495}",
      "$": "\u{1F3DC}\uFE0F",
      "%": "\u{1F32A}\uFE0F",
      "^": "\u{1F308}",
      7: "\u{1F30A}",
      8: "\u{1F30B}",
      9: "\u{1F30C}",
      0: "\u{1F30D}"
    },
    visible: true
  };

  // src/value.ts
  var Value = class {
    constructor(value = void 0) {
      this.$ = value;
    }
    set(value) {
      this.$ = value;
      this.poke();
      return this;
    }
    on(subscribe2) {
      if (this.reactions === void 0) {
        this.reactions = /* @__PURE__ */ new Set();
      }
      this.reactions.add(subscribe2);
      subscribe2(this.$);
      return () => this.reactions.delete(subscribe2);
    }
    subscribe(subscribe2) {
      return this.on(subscribe2);
    }
    log(msg) {
      this.on(() => console.log(msg, this.$));
      return this;
    }
    poke() {
      if (this.reactions === void 0)
        return;
      for (let callback of this.reactions) {
        callback(this.$);
      }
      return this;
    }
    not(store) {
      store.on(($v) => {
        if (!$v || !this.$)
          return;
        this.set(false);
      });
      this.on(($v) => {
        if (!$v || !store.$)
          return;
        store.set(false);
      });
      return this;
    }
    save(where) {
      try {
        const v = JSON.parse(localStorage.getItem(where));
        if (v !== void 0 && v !== null) {
          this.set(v);
        }
      } catch (ex) {
      }
      this.on((v) => {
        localStorage.setItem(where, JSON.stringify(v));
      });
      return this;
    }
  };

  // src/timing.ts
  var import_is_mobile = __toESM(require_is_mobile());
  var tick = new Value(0);
  var avatar_current = new Value(state_default.avatar.current).save("avatar_current_2");
  var avatar_doer = new Value(state_default.avatar.doer).save("avatar_doer_1");
  var voice_current = new Value("UK English").save("voice_current");
  var voice_doer = new Value("Aus | UK English").save("voice_doer");
  var scouter = new Value("green").save("scouter");
  var videos = new Value(["7Cchlyg7XNI", "WajD8HPS0JI", "pxCwIWL4_wA"]);
  var video = new Value("doer1.8").save("video_2");
  var ground = new Value([]);
  var open_ui = new Value(true).save("ui");
  var open_home = new Value(true);
  var open_game = new Value(false);
  var open_text = new Value(void 0);
  var open_loading = new Value(false);
  var open_help = new Value(false);
  var open_stats = new Value(false).save("stats");
  var open_debug = new Value(false).save("debugger");
  var open_targeting = new Value(false).save("targeting_5");
  var open_live = new Value(false);
  var open_hostid = new Value(true);
  var do_drop = new Value(false);
  var do_throw = new Value(false).not(do_drop);
  var loc = location.search.slice(1).split("&").map((i) => i.split("="));
  var args = new Value(new Map(loc));
  var camera = new Value();
  var camera_el = new Value();
  var toggle_selfie = new Value(state_default.selfie).save("selfie");
  var toggle_visible = new Value(state_default.visible).save("visible");
  var do_echo = new Value(false).save("do_echo2");
  var do_vary = new Value(true);
  var ismobile = new Value((0, import_is_mobile.default)());
  var toggle_pointerlock = new Value(true);
  var time = new Value(new AFRAME.THREE.Uniform(0));
  var size = new Value(new AFRAME.THREE.Vector3(1, 1, 1));
  open_game.on(($g) => {
    if (open_game.$) {
      open_loading.set(true);
    }
  });
  var motd = new Value(`\u{1F38A}v0.3.4\u{1F38A}

\u2705 Sky \u2705 Mobile 
\u2705 Proximity UI \u2705 Physical Items
\u2705 Location UI

\u274C Drop/Stow/Pickup Items
\u274C Use Items
\u274C Bag
\u274C Networked Multiplayer 
\u274C Pose Animations recorded from our VRM
\u274C AI  

Camera data is processed by mediapipe via tensorflow locally.

Microphone data is handled by the browser provider, ie: Chrome / Edge / etc.

Cookies are not used to track your personal data by us. localStorage is used for persistance. 
There are iframes to 3rd parties that may attempt to track you, like youtube. 
Users can load assets remotely using HTTP to other websites. We're not responsible for their content, contact the host directly.
If that's a problem then reject this terms of use by closing your browser or navigating away from this website.

Accountless. 

Age 18+ only.

`);
  var ticker = () => {
    requestAnimationFrame(ticker);
    tick.set(tick.$ + 1);
  };
  var loading = new Value(`Loading...

 WASD Move > Z+C Rotate
 Enter > Chat
 ~ > Command
 Space > Jump
 
 Default Binds:
 
 Q: Toggle Drop
 E: Toggle Throw
 N: Selfie
 M: NotSelfie
 H: Hi | Hi! | Hello | Heya | Yo
 F1: Help
 F2: NotHelp
`);
  ticker();
  var helptext = new Value(`\u{1F916}Commands\u{1F916}

~ echo 
echo on, persisted

~ not echo 
echo off, persisted

~ avatar ...url 
set avatar to URL, persisted

~ clear avatar 
set avatar to default

~ bind key ...commands 
bind key to commands, persisted

~ not bind key
unbinds key, persisted

~ var name ...commands 
binds variable name to commands

~ not var name 
unbinds variable name

~ stats 
show fps stats

~ not stats
hide fps stats


~ help
show this help

~ not help
hide this help

~ voice ...nameToSearch
set voice to nameToSearch ie: aus would find an Australian voice or UK for British, persisted
per browser

~ swap
swap places with your doer

~ visible
show your avatar

~ not visible
hide your avatar

~ selfie
selfie camera mode

~ not selfie
not selfie camera mode

~ target
show targeting UI, persists

~ not target
hide targeting UI, persists

~ scouter ...color
set your targeting UI to be that color, persists

~ not scouter
reset scout color to green, persists

~ ui
show onscreen UI

~ not ui
hide onscreen UI

~ icon bindkey ...icon
show icon on onscreen ui for that bindkey (1-5)

~ not icon bindkey
remove icon from onscreen ui for that bindkey (1-5)

~ size number
set size of your avatar

~ not size
reset back to 1 for size

~ join ...room
~ host

`);

  // src/component/vrm.ts
  var { VRMUtils, VRM } = THREE_VRM;
  var currentVRM = new Value();
  var mirrorVRM = new Value();
  currentVRM.on(($vrm) => {
    if (!$vrm || !open_loading.$)
      return;
    currentVRM.$.scene.visible = toggle_visible.$;
    open_loading.set(false);
  });
  toggle_visible.on(() => {
    if (!currentVRM.$)
      return;
    currentVRM.$.scene.visible = toggle_visible.$;
  });
  function Load(url) {
    return new Promise((resolve, reject) => {
      const loader = new AFRAME.THREE.GLTFLoader();
      loader.crossOrigin = "anonymous";
      loader.load(url, (gltf) => {
        VRM.from(gltf).then((vrm) => {
          resolve(vrm);
        });
      }, (progress) => {
      }, reject);
    });
  }
  AFRAME.registerComponent("vrm", {
    schema: {
      src: { type: "string", default: "" },
      fps: { type: "bool", default: false },
      current: { type: "bool", default: false },
      mirror: { type: "bool", default: false }
    },
    load() {
      Load(this.data.src).then((vrm) => {
        VRMUtils.removeUnnecessaryVertices(vrm.scene);
        VRMUtils.removeUnnecessaryJoints(vrm.scene);
        this.el.setObject3D("mesh", vrm.scene);
        this.data.vrm = vrm;
        if (this.data.current) {
          vrm.firstPerson.setup();
          camera.$.layers.enable(vrm.firstPerson.firstPersonOnlyLayer);
          camera.$.layers.disable(vrm.firstPerson.thirdPersonOnlyLayer);
          currentVRM.set(vrm);
        }
        if (this.data.mirror) {
          mirrorVRM.set(vrm);
        }
      });
    },
    init() {
      this.cancel();
      this.load();
      if (this.data.src !== "") {
        if (this.data.current) {
          this.cancels.push(avatar_current.on(($av) => {
            if ($av !== this.data.src) {
              this.el.removeObject3D("mesh");
              currentVRM.$?.dispose();
              this.data.src = $av;
              open_loading.set(true);
              this.load();
            }
          }));
        }
        if (this.data.doer) {
          this.cancels.push(avatar_doer.on(($av) => {
            if ($av !== this.data.src) {
              this.el.removeObject3D("mesh");
              mirrorVRM.$?.dispose();
              this.data.src = $av;
              open_loading.set(true);
              this.load();
            }
          }));
        }
      }
    },
    cancel() {
      if (!this.cancels) {
        this.cancels = [];
        return;
      }
      this.cancels.forEach((c) => c());
      this.cancels = [];
    },
    remove() {
      this.cancel();
      this.el.removeObject3D("mesh");
    }
  });

  // src/component/net.ts
  var host = new Value(args.$.has("host"));
  var guest = new Value(args.$.has("join"));
  var room = new Value(args.$.get("join"));
  var passcode = new Value("").save("passcode");
  var scene;
  var paths = {};
  var state = {};
  var update2 = {};
  var interop = 0;
  AFRAME.registerSystem("net", {
    init() {
      scene = this.el.object3D;
      this.tick = AFRAME.utils.throttleTick(this.tick, 200, this);
      guest.on(() => {
        if (!guest.$)
          return;
        this.connect();
        console.log(scene.components);
      });
      host.on(() => {
        if (!host.$)
          return;
        this.connect();
      });
    },
    process() {
      for (let entry of Object.entries(update2)) {
        const [path, value] = entry;
        if (state[path]) {
          Object.assign(state[path], value);
        } else {
          state[path] = value;
        }
      }
    },
    tick() {
      if (!host.$)
        return;
      this.process();
      if (!this.ready) {
        update2 = {};
        return;
      }
      this.ws.send("UPD" /* UPDATE */ + this.password + JSON.stringify(update2));
      update2 = {};
    },
    fullUpdate() {
      this.ws.send("UPD" /* UPDATE */ + this.password + JSON.stringify(state));
    },
    connect() {
      if (this.ws)
        return;
      console.log("connecting");
      const lhost = window.location.host === "a.goblin.life" ? "ws.goblin.life" : window.location.host;
      const ws = new WebSocket(`${window.location.protocol === "https" ? "wss" : "ws"}://${lhost}/`);
      this.ws = ws;
      ws.addEventListener("close", () => {
        console.log("closed");
        this.ws = void 0;
        setTimeout(() => {
          this.connect();
        }, 1e4);
      });
      ws.addEventListener("open", () => {
        console.log("connected");
        if (host.$) {
          console.log("send host");
          this.ws.send("HST" /* HOST */ + room.$);
        }
        if (guest.$) {
          this.ws.send("JON" /* JOIN */ + room.$);
          this.ready = true;
        }
      });
      ws.addEventListener("message", (e) => {
        switch ("" + e.data.slice(0, 3)) {
          default:
            console.log(e.data.slice(0, 3));
            break;
          case "ERR" /* ERROR */:
            console.log("ERROR", e.data.slice(3));
            break;
          case "UPD" /* UPDATE */:
            if (host.$)
              return;
            interop = 0;
            const update3 = JSON.parse(e.data.slice(3));
            for (let entry of Object.entries(update3)) {
              const [path, value] = entry;
              if (!paths[path])
                continue;
              if (!state[path]) {
                state[path] = value;
              } else {
                Object.assign(state[path], value);
              }
              paths[path].components.host.netUpdate(value);
            }
            break;
          case "HST" /* HOST */:
            console.log("got host");
            this.password = "" + e.data.slice(3, 39);
            passcode.set(this.password);
            room.set("" + e.data.slice(39));
            this.ready = true;
            this.fullUpdate();
            break;
        }
      });
    }
  });
  function Mixins(el) {
    return el.mixinEls.map((el2) => el2.id).join(".");
  }
  function MakePath(el) {
    if (el.tagName === "A-SCENE") {
      return "";
    } else {
      const target = el.parentNode;
      const p2 = MakePath(target);
      const host2 = el.components.host?.data !== void 0 && typeof el.components.host.data === "string" ? el.components.host.data : false;
      return (p2 !== "" ? p2 + "/" : "") + (host2 || el.id || Mixins(el)) || "";
    }
  }
  var p = new AFRAME.THREE.Vector3();
  var s = new AFRAME.THREE.Vector3();
  var q = new AFRAME.THREE.Quaternion();
  AFRAME.registerComponent("host", {
    schema: {
      type: "string"
    },
    init() {
      this.slowtick = AFRAME.utils.throttleTick(this.slowtick, 200, this);
      this.netpath = MakePath(this.el);
      let i = 2;
      const og = this.netpath;
      while (paths[this.netpath]) {
        this.netpath = og + i;
        i++;
      }
      paths[this.netpath] = this.el;
      this.cancel = host.on(($h) => {
        if (!$h)
          return;
        this.markUpdate();
        state[this.netpath] = update2[this.netpath];
      });
    },
    markUpdate() {
      const u = update2[this.netpath] = update2[this.netpath] || {};
      const o3d = this.el.object3D;
      u.p = o3d.position.toArray(u.p);
      u.q = o3d.quaternion.toArray(u.q);
      u.s = o3d.scale.toArray(u.s);
      u.v = o3d.visible ? 1 : 0;
    },
    slowtick() {
      let type = this.el.components["ammo-body"]?.data.type;
      if (guest.$ && (type === "kinematic" || type === "dynamic")) {
        type = this.el.components["ammo-body"].data.type = "static";
      }
      if (!host.$ || type === "static")
        return;
      this.markUpdate();
    },
    tick(_, dt) {
      this.slowtick();
      interop += dt / 1e3;
      if (guest.$ && state[this.netpath] && this.lastUpdate > interop) {
        const i = Math.min(1, interop / 350);
        const o3d = this.el.object3D;
        q.fromArray(state[this.netpath].q);
        if (Math.abs(o3d.quaternion.angleTo(q)) > 1e-3)
          o3d.quaternion.slerp(q, i);
        p.fromArray(state[this.netpath].p);
        if (o3d.position.distanceTo(p) > 1e-3)
          o3d.position.lerp(p, i);
        s.fromArray(state[this.netpath].s);
        if (o3d.scale.distanceTo(s) > 1e-3)
          o3d.scale.lerp(s, i);
      }
    },
    netUpdate(update3) {
      this.lastUpdate = interop + 250;
      const o3d = this.el.object3D;
      if (update3.v !== void 0) {
        o3d.visible = update3.v;
      }
    },
    remove() {
      delete paths[this.netpath];
      this.cancel();
    }
  });
  AFRAME.registerComponent("net-avatar", {
    init() {
    }
  });

  // src/component/avatar.ts
  function Random(targets) {
    const keys = Object.keys(targets.$);
    const t = targets.$[keys[Math.floor(keys.length * Math.random())]];
    return t;
  }
  var hands = ["hand_left", "hand_right"];
  var AVATAR = new Value();
  var WIPE_TARGET = new Value("");
  AFRAME.registerComponent("avatar", {
    schema: {
      ["hand_left" /* hand_left */]: { type: "selector" },
      ["hand_right" /* hand_right */]: { type: "selector" },
      ["bag1" /* bag1 */]: { type: "selector" },
      ["bag2" /* bag2 */]: { type: "selector" },
      ["bag3" /* bag3 */]: { type: "selector" },
      ["bag4" /* bag4 */]: { type: "selector" },
      ["bag5" /* bag5 */]: { type: "selector" },
      ["bag6" /* bag6 */]: { type: "selector" }
    },
    init() {
      this.updated = new Value(this.data);
      this.cancel = this.updated.on(() => {
        if (!this.el.parentEl.components.vrm?.data?.current)
          return;
        AVATAR.poke();
      });
      requestAnimationFrame(() => {
        if (this.el.parentEl.components.vrm?.data.current) {
          AVATAR.set(this);
        }
      });
      this.targets = new Value({});
      this.cancel2 = WIPE_TARGET.on(($wt) => {
        delete this.targets.$[$wt];
        this.targets.poke();
        if (this.el.parentEl.components.vrm?.data?.current) {
          ground.$.splice(ground.$.indexOf(this.el.object3D.uuid), 1);
          ground.poke();
        }
      });
      this.collideStart = this.collideStart.bind(this);
      this.collideEnd = this.collideEnd.bind(this);
      this.el.addEventListener("collidestart", this.collideStart);
      this.el.addEventListener("collideend", this.collideEnd);
    },
    remove() {
      this.cancel2();
      this.cancel();
      this.el.removeEventListener("collidestart", this.collideStart);
      this.el.removeEventListener("collideend", this.collideEnd);
    },
    isCurrent() {
      return this.el.parentEl.components.vrm.attrValue.current === "true";
    },
    doUse(slot = "hand_left") {
      const e = { whom: this.el, slot };
      if (this.data[slot]) {
        this.data[slot].emit("use", e, false);
        return;
      }
      if (hands.indexOf(slot) === -1)
        return;
      Random(this.targets)?.emit("use", e, false);
    },
    doThrow(slot = "hand_left") {
      const item = this.data[slot];
      if (!item)
        return;
      delete this.data[slot];
      this.updated.poke();
      item.emit("throw", { whom: this.el, slot }, false);
    },
    doDrop(slot = "hand_left") {
      const item = this.data[slot];
      if (!item)
        return;
      delete this.data[slot];
      this.updated.poke();
      item.emit("drop", { whom: this.el, slot }, false);
    },
    collideStart(e) {
      const o = e.detail.targetEl;
      if (!o.components.target)
        return;
      this.targets.$[o.object3D.uuid] = o;
      this.targets.poke();
      if (this.isCurrent()) {
        o.emit("bump", { whom: this.el });
        ground.$.push(o.components.target.data);
        ground.poke();
      }
    },
    collideEnd(e) {
      const o = e.detail.targetEl;
      if (!o?.object3D || !o.components.target)
        return;
      delete this.targets.$[o.object3D.uuid];
      this.targets.poke();
      if (this.isCurrent()) {
        ground.$.splice(ground.$.indexOf(o.components.target.data), 1);
        ground.poke();
      }
    },
    tick() {
    }
  });

  // src/control.ts
  var binds = new Value(clone(state_default.binds)).save("binds");
  var vars = new Value(clone(state_default.vars)).save("vars");
  var binds_icon = new Value(clone(state_default.binds_icon)).save("binds_icon");
  function clone(target) {
    return Object.fromEntries(Object.entries(target));
  }
  function saveState() {
    console.log(JSON.stringify({
      binds: binds.$,
      vars: vars.$,
      selfie: toggle_selfie.$
    }, null, "	"));
  }
  function loadState(state2) {
    binds.set(state2.binds);
    vars.set(state2.vars);
    toggle_selfie.set(state2.selfie);
  }
  window.loadState = loadState;
  var EMod = /* @__PURE__ */ ((EMod2) => {
    EMod2["not"] = "not";
    EMod2["clear"] = "clear";
    EMod2["toggle"] = "toggle";
    return EMod2;
  })(EMod || {});
  var controls = {
    ["bind" /* Bind */]: (items) => {
      binds.$[items[2]] = items.slice(3).join(" ");
      binds.poke();
    },
    ["notbind" /* NotBind */]: (items) => {
      delete binds.$[items[3]];
      binds.poke();
    },
    ["clearbind" /* ClearBind */]: (items) => {
      binds.set(clone(state_default.binds));
    },
    ["var" /* Var */]: (items) => {
      vars.$[items[2]] = items.slice(3).join(" ");
      vars.poke();
    },
    ["notvar" /* NotVar */]: (items) => {
      delete vars.$[items[3]];
      vars.poke();
    },
    ["clearvar" /* ClearVar */]: (items) => {
      vars.set(clone(state_default.vars));
    },
    ["selfie" /* Selfie */]: (items) => {
      toggle_selfie.set(true);
    },
    ["notselfie" /* NotSelfie */]: (items) => {
      toggle_selfie.set(false);
    },
    ["save" /* Save */]: () => {
      saveState();
    },
    ["swap" /* Swap */]: (items) => {
      const cur = avatar_current.$;
      avatar_current.set(avatar_doer.$);
      avatar_doer.set(cur);
    },
    ["visible" /* Visible */]: (items) => {
      toggle_visible.set(true);
    },
    ["notvisible" /* NotVisible */]: (items) => {
      toggle_visible.set(false);
    },
    ["avatar" /* Avatar */]: (items) => {
      avatar_current.set(items[2]);
    },
    ["clearavatar" /* ClearAvatar */]: (items) => {
      avatar_current.set(state_default.avatar.current);
    },
    ["echo" /* Echo */]: (items) => {
      do_echo.set(true);
    },
    ["notecho" /* NotEcho */]: (items) => {
      do_echo.set(false);
    },
    ["help" /* Help */]: (items) => {
      open_help.set(true);
    },
    ["nothelp" /* NotHelp */]: (items) => {
      open_help.set(false);
    },
    ["stats" /* Stats */]: (items) => {
      open_stats.set(true);
    },
    ["notstats" /* NotStats */]: (items) => {
      open_stats.set(false);
    },
    ["voice" /* Voice */]: (items) => {
      voice_current.set(items.slice(2).join(" "));
    },
    ["host" /* Host */]: (items) => {
      host.set(true);
    },
    ["nothost" /* NotHost */]: (items) => {
      host.set(false);
    },
    ["target" /* Target */]: (items) => {
      open_targeting.set(true);
    },
    ["nottarget" /* NotTarget */]: (items) => {
      open_targeting.set(false);
    },
    ["debug" /* Debug */]: (items) => {
      open_debug.set(true);
    },
    ["notdebug" /* NotDebug */]: (items) => {
      open_debug.set(false);
    },
    ["vary" /* Vary */]: (items) => {
      do_vary.poke();
    },
    ["scouter" /* Scouter */]: (items) => {
      scouter.set(items.join(" "));
    },
    ["notscouter" /* NotScouter */]: (items) => {
      scouter.set("green");
    },
    ["size" /* Size */]: (items) => {
      const n = parseFloat(items[2]);
      size.$.set(n, n, n);
      size.poke();
    },
    ["notsize" /* NotSize */]: (items) => {
      size.$.set(1, 1, 1);
      size.poke();
    },
    ["pos" /* Pos */]: (items) => {
    },
    ["notpos" /* NotPos */]: (items) => {
    },
    ["room" /* Room */]: (items) => {
      open_hostid.set(true);
    },
    ["notroom" /* NotRoom */]: (items) => {
      open_hostid.set(false);
    },
    ["join" /* Join */]: (items) => {
      if (host.$)
        host.set(false);
      guest.set(true);
      room.set(items.slice(2).join(" "));
    },
    ["notjoin" /* NotJoin */]: (items) => {
      guest.set(false);
      room.set("");
    },
    ["ui" /* UI */]: (items) => {
      open_ui.set(true);
    },
    ["notui" /* NotUI */]: (items) => {
      open_ui.set(false);
    },
    ["icon" /* Icon */]: (items) => {
      binds_icon.$[items[2]] = items.slice(3).join(" ");
    },
    ["noticon" /* NotIcon */]: (items) => {
      delete binds_icon.$[items[2]];
    },
    ["clearicon" /* ClearIcon */]: (items) => {
      binds_icon.set(clone(state_default.binds_icon));
    },
    ["use" /* Use */]: (items) => {
      if (do_drop.$) {
        AVATAR.$.doDrop(items[2]);
        return;
      }
      if (do_throw.$) {
        AVATAR.$.doThrow(items[2]);
        return;
      }
      AVATAR.$.doUse(items[2]);
    },
    ["notuse" /* NotUse */]: (items) => {
      AVATAR.$.doDrop(items[3]);
    },
    ["throw" /* ClearUse */]: (items) => {
      AVATAR.$.doThrow(items[3]);
    },
    ["pointerlock" /* PointerLock */]: (items) => {
      toggle_pointerlock.set(true);
    },
    ["notpointerlock" /* NotPointerLock */]: (items) => {
      toggle_pointerlock.set(false);
    },
    ["togglepointerlock" /* TogglePointerLock */]: (items) => {
      toggle_pointerlock.set(!toggle_pointerlock.$);
    },
    ["toggledrop" /* ToggleDrop */]: (items) => {
      do_drop.set(!do_drop.$);
    },
    ["togglethrow" /* ToggleThrow */]: (items) => {
      do_throw.set(!do_throw.$);
    }
  };

  // src/input.ts
  var key_down = new Value("");
  var key_up = new Value("");
  var key_map = new Value({});
  function bounce(e) {
    return e.target.tagName === "INPUT";
  }
  window.addEventListener("keydown", (e) => {
    if (bounce(e))
      return;
    e.preventDefault();
    const k = e.key.toLowerCase();
    key_down.set(k);
  });
  key_down.on(($k) => {
    key_map.$[$k] = true;
    key_map.poke();
  });
  window.addEventListener("keyup", (e) => {
    if (bounce(e))
      return;
    const k = e.key.toLowerCase();
    key_up.set(k);
  });
  key_up.on(($k) => {
    key_map.$[$k] = false;
    key_map.poke();
  });
  var analog_left_y = new Value(0);
  var analog_left_x = new Value(0);
  var analog_right_y = new Value(0);
  var analog_right_x = new Value(0);

  // src/chat.ts
  var recog = new Value();
  var recognition;
  var synth = window.speechSynthesis;
  function init2() {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      recog.set(event);
    };
    recognition.onend = () => {
      if (open_live.$)
        recognition.start();
    };
  }
  function findVoice(voiceName) {
    const voices = synth.getVoices();
    return voices.find((voice) => voice.name.toLowerCase().indexOf(voiceName.toLowerCase()) !== -1);
  }
  var talk = new Value("");
  var assist = new Value("");
  var findTilde = /~/g;
  function say(said) {
    if (!said)
      return;
    said = said.replace(findTilde, "control");
    if (doControl(said) && !do_echo.$)
      return;
    const spli = said.split("|");
    said = spli[Math.floor(Math.random() * spli.length)];
    const voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance(said);
    utterThis.voice = findVoice(voice_current.$) || findVoice("Aus") || findVoice("UK English Female") || voices[0];
    utterThis.pitch = 1;
    utterThis.rate = 0.8;
    utterThis.volume = 1;
    synth.speak(utterThis);
  }
  function doControl(said) {
    const items = said.replace("~", "control").toLowerCase().trim().split(" ");
    if (items[0] !== "control")
      return false;
    if (EMod[items[1]] !== void 0) {
      items[1] += items[2];
    }
    if (controls[items[1]]) {
      controls[items[1]](items);
    } else if (vars.$[items[1]]) {
      talk.set(vars.$[items[1]]);
    } else {
      return false;
    }
    return true;
  }
  talk.on(say);
  recog.on((event) => {
    if (!event)
      return;
    var said = event.results[event.results.length - 1][0].transcript.trim();
    talk.set(said);
  });
  var start = () => {
    if (!recognition)
      init2();
    recognition.start();
  };
  function end() {
    recognition?.stop();
  }
  var cancels = [];
  open_live.on(($l) => {
    if ($l) {
      start();
    } else {
      end();
    }
  });
  binds.on(($binds) => {
    cancels.forEach((cancel) => cancel());
    cancels = [];
    Object.entries($binds).forEach(([key, value]) => {
      const cancel = key_down.on(($k) => {
        if ($k !== key)
          return;
        talk.set(value);
      });
      cancels.push(cancel);
    });
  });

  // src/component/vrm-input.ts
  var { VRMSchema } = THREE_VRM;
  var clamp = Kalidokit.Utils.clamp;
  var lerp = Kalidokit.Vector.lerp;
  var euler = new AFRAME.THREE.Euler();
  var quat = new AFRAME.THREE.Quaternion();
  var rigRotation = (vrm, name, rotation = { x: 0, y: 0, z: 0 }, dampener = 1, lerpAmount = 0.3) => {
    const Part = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName[name]);
    if (!Part) {
      return;
    }
    euler.set(rotation.x * dampener, rotation.y * dampener, rotation.z * dampener);
    let quaternion = quat.setFromEuler(euler);
    Part.quaternion.slerp(quaternion, lerpAmount);
  };
  var v3 = new AFRAME.THREE.Vector3();
  var rigPosition = (vrm, name, position = { x: 0, y: 0, z: 0 }, dampener = 1, lerpAmount = 0.3) => {
    const Part = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName[name]);
    if (!Part) {
      return;
    }
    let vector = v3.set(position.x * dampener, position.y * dampener, position.z * dampener);
    Part.position.lerp(vector, lerpAmount);
  };
  var oldLookTarget = new AFRAME.THREE.Euler();
  var rigFace = (vrm, riggedFace) => {
    rigRotation(vrm, "Neck", riggedFace.head, 0.7);
    const Blendshape = vrm.blendShapeProxy;
    const PresetName = VRMSchema.BlendShapePresetName;
    riggedFace.eye.l = lerp(clamp(1 - riggedFace.eye.l, 0, 1), Blendshape.getValue(PresetName.Blink), 0.5);
    riggedFace.eye.r = lerp(clamp(1 - riggedFace.eye.r, 0, 1), Blendshape.getValue(PresetName.Blink), 0.5);
    riggedFace.eye = Kalidokit.Face.stabilizeBlink(riggedFace.eye, riggedFace.head.y);
    Blendshape.setValue(PresetName.Blink, riggedFace.eye.l);
    Blendshape.setValue(PresetName.I, lerp(riggedFace.mouth.shape.I, Blendshape.getValue(PresetName.I), 0.5));
    Blendshape.setValue(PresetName.A, lerp(riggedFace.mouth.shape.A, Blendshape.getValue(PresetName.A), 0.5));
    Blendshape.setValue(PresetName.E, lerp(riggedFace.mouth.shape.E, Blendshape.getValue(PresetName.E), 0.5));
    Blendshape.setValue(PresetName.O, lerp(riggedFace.mouth.shape.O, Blendshape.getValue(PresetName.O), 0.5));
    Blendshape.setValue(PresetName.U, lerp(riggedFace.mouth.shape.U, Blendshape.getValue(PresetName.U), 0.5));
    let lookTarget = euler.set(lerp(oldLookTarget.x, riggedFace.pupil.y, 0.4), lerp(oldLookTarget.y, riggedFace.pupil.x, 0.4), 0, "XYZ");
    oldLookTarget.copy(lookTarget);
    vrm.lookAt.applyer.lookAt(lookTarget);
  };
  var animateVRM = (vrm, results, riggedPose, riggedLeftHand, riggedRightHand) => {
    if (!vrm || !videoElement.$) {
      return;
    }
    let riggedFace;
    const faceLandmarks = results.faceLandmarks;
    const pose3DLandmarks = results.ea;
    const pose2DLandmarks = results.poseLandmarks;
    const leftHandLandmarks = results.rightHandLandmarks;
    const rightHandLandmarks = results.leftHandLandmarks;
    if (faceLandmarks) {
      riggedFace = Kalidokit.Face.solve(faceLandmarks, {
        runtime: "mediapipe",
        video: videoElement.$
      });
      rigFace(vrm, riggedFace);
    }
    if (pose2DLandmarks && pose3DLandmarks) {
      rigRotation(vrm, "Hips", riggedPose.Hips.rotation, 0.7);
      rigPosition(vrm, "Hips", {
        x: -riggedPose.Hips.position.x,
        y: riggedPose.Hips.position.y + 1,
        z: -riggedPose.Hips.position.z
      }, 1, 0.07);
      rigRotation(vrm, "Chest", riggedPose.Spine, 0.25, 0.3);
      rigRotation(vrm, "Spine", riggedPose.Spine, 0.45, 0.3);
      rigRotation(vrm, "RightUpperArm", riggedPose.RightUpperArm, 1, 0.3);
      rigRotation(vrm, "RightLowerArm", riggedPose.RightLowerArm, 1, 0.3);
      rigRotation(vrm, "LeftUpperArm", riggedPose.LeftUpperArm, 1, 0.3);
      rigRotation(vrm, "LeftLowerArm", riggedPose.LeftLowerArm, 1, 0.3);
      rigRotation(vrm, "LeftUpperLeg", riggedPose.LeftUpperLeg, 1, 0.3);
      rigRotation(vrm, "LeftLowerLeg", riggedPose.LeftLowerLeg, 1, 0.3);
      rigRotation(vrm, "RightUpperLeg", riggedPose.RightUpperLeg, 1, 0.3);
      rigRotation(vrm, "RightLowerLeg", riggedPose.RightLowerLeg, 1, 0.3);
    }
    if (leftHandLandmarks) {
      rigRotation(vrm, "LeftHand", {
        z: riggedPose.LeftHand.z,
        y: riggedLeftHand.LeftWrist.y,
        x: riggedLeftHand.LeftWrist.x
      });
      rigRotation(vrm, "LeftRingProximal", riggedLeftHand.LeftRingProximal);
      rigRotation(vrm, "LeftRingIntermediate", riggedLeftHand.LeftRingIntermediate);
      rigRotation(vrm, "LeftRingDistal", riggedLeftHand.LeftRingDistal);
      rigRotation(vrm, "LeftIndexProximal", riggedLeftHand.LeftIndexProximal);
      rigRotation(vrm, "LeftIndexIntermediate", riggedLeftHand.LeftIndexIntermediate);
      rigRotation(vrm, "LeftIndexDistal", riggedLeftHand.LeftIndexDistal);
      rigRotation(vrm, "LeftMiddleProximal", riggedLeftHand.LeftMiddleProximal);
      rigRotation(vrm, "LeftMiddleIntermediate", riggedLeftHand.LeftMiddleIntermediate);
      rigRotation(vrm, "LeftMiddleDistal", riggedLeftHand.LeftMiddleDistal);
      rigRotation(vrm, "LeftThumbProximal", riggedLeftHand.LeftThumbProximal);
      rigRotation(vrm, "LeftThumbIntermediate", riggedLeftHand.LeftThumbIntermediate);
      rigRotation(vrm, "LeftThumbDistal", riggedLeftHand.LeftThumbDistal);
      rigRotation(vrm, "LeftLittleProximal", riggedLeftHand.LeftLittleProximal);
      rigRotation(vrm, "LeftLittleIntermediate", riggedLeftHand.LeftLittleIntermediate);
      rigRotation(vrm, "LeftLittleDistal", riggedLeftHand.LeftLittleDistal);
    }
    if (rightHandLandmarks) {
      rigRotation(vrm, "RightHand", {
        z: riggedPose.RightHand.z,
        y: riggedRightHand.RightWrist.y,
        x: riggedRightHand.RightWrist.x
      });
      rigRotation(vrm, "RightRingProximal", riggedRightHand.RightRingProximal);
      rigRotation(vrm, "RightRingIntermediate", riggedRightHand.RightRingIntermediate);
      rigRotation(vrm, "RightRingDistal", riggedRightHand.RightRingDistal);
      rigRotation(vrm, "RightIndexProximal", riggedRightHand.RightIndexProximal);
      rigRotation(vrm, "RightIndexIntermediate", riggedRightHand.RightIndexIntermediate);
      rigRotation(vrm, "RightIndexDistal", riggedRightHand.RightIndexDistal);
      rigRotation(vrm, "RightMiddleProximal", riggedRightHand.RightMiddleProximal);
      rigRotation(vrm, "RightMiddleIntermediate", riggedRightHand.RightMiddleIntermediate);
      rigRotation(vrm, "RightMiddleDistal", riggedRightHand.RightMiddleDistal);
      rigRotation(vrm, "RightThumbProximal", riggedRightHand.RightThumbProximal);
      rigRotation(vrm, "RightThumbIntermediate", riggedRightHand.RightThumbIntermediate);
      rigRotation(vrm, "RightThumbDistal", riggedRightHand.RightThumbDistal);
      rigRotation(vrm, "RightLittleProximal", riggedRightHand.RightLittleProximal);
      rigRotation(vrm, "RightLittleIntermediate", riggedRightHand.RightLittleIntermediate);
      rigRotation(vrm, "RightLittleDistal", riggedRightHand.RightLittleDistal);
    }
  };
  var videoElement = new Value();
  var canvasElement = new Value();
  var onResults = (results) => {
    if (!open_live.$)
      return;
    const faceLandmarks = results.faceLandmarks;
    const pose3DLandmarks = results.ea;
    const pose2DLandmarks = results.poseLandmarks;
    const leftHandLandmarks = results.rightHandLandmarks;
    const rightHandLandmarks = results.leftHandLandmarks;
    let riggedFace, riggedPose, riggedLeftHand, riggedRightHand;
    if (pose2DLandmarks && pose3DLandmarks) {
      riggedPose = Kalidokit.Pose.solve(pose3DLandmarks, pose2DLandmarks, {
        runtime: "mediapipe",
        video: videoElement.$
      });
    }
    if (leftHandLandmarks) {
      riggedLeftHand = Kalidokit.Hand.solve(leftHandLandmarks, "Left");
    }
    if (rightHandLandmarks) {
      riggedRightHand = Kalidokit.Hand.solve(rightHandLandmarks, "Right");
    }
    animateVRM(currentVRM.$, results, riggedPose, riggedLeftHand, riggedRightHand);
    animateVRM(mirrorVRM.$, results, riggedPose, riggedLeftHand, riggedRightHand);
  };
  var holistic = new import_holistic.Holistic({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/${file}`;
    }
  });
  holistic.setOptions({
    modelComplexity: 0.5,
    smoothLandmarks: true,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
    refineFaceLandmarks: true
  });
  holistic.onResults(onResults);
  var width = 320;
  var height = 240;
  videoElement.on(($ve) => {
    if (!$ve)
      return;
    canvasElement.$.width = width;
    canvasElement.$.height = height;
    const ctx = canvasElement.$.getContext("2d");
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    let camera2;
    open_live.on(($l) => {
      if (!camera2 && $l) {
        camera2 = new import_camera_utils.Camera($ve, {
          onFrame: async () => {
            ctx.drawImage($ve, 0, 0, width, height);
            await holistic.send({ image: canvasElement.$ });
          },
          width,
          height
        });
      }
      if ($l)
        camera2.start();
      if (!$l && camera2)
        camera2.stop();
    });
  });
  tick.on(() => {
    if (currentVRM.$) {
      currentVRM.$.update(0.01);
    }
    if (mirrorVRM.$) {
      mirrorVRM.$.update(0.01);
    }
  });
  function Random2(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  talk.on(async ($talk) => {
    if (!$talk)
      return;
    const s2 = Math.sin(Math.PI * tick.$);
    const spl = $talk.split(" ");
    spl.push("pop");
    const intv = setInterval(() => {
      const item = spl.pop();
      if (!item) {
        clearInterval(intv);
        return;
      }
      mirrorVRM.$?.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName[Random2("OEIAU")], 0.5 + 2 * s2);
    }, 1 / 3.5 * 1e3);
  });

  // src/component/uniforms.ts
  AFRAME.registerComponent("uniforms", {
    init() {
      this.el.object3D.frustumCulled = false;
    },
    tick() {
      time.$.value = this.el.time;
      time.poke();
    }
  });

  // src/component/vary.ts
  var vec3 = new AFRAME.THREE.Vector3();
  var bb2 = new AFRAME.THREE.Box3();
  AFRAME.registerComponent("vary", {
    multiple: true,
    schema: {
      property: { type: "string", default: "position" },
      range: { type: "string", default: "-1 -1 -1 1 1 1" }
    },
    init() {
      this.range = this.data.range.split(" ").map((v) => parseFloat(v));
      this.cancel = do_vary.on(this.vary.bind(this));
    },
    vary() {
      const o3d = this.el.object3D;
      bb2.setFromArray(this.range);
      if (this.data.property.indexOf("recolor") === 0) {
        this.el.setAttribute(this.data.property, `rgb(${bb2.min.x + Math.random() * (bb2.max.x - bb2.min.x)}, ${bb2.min.y + Math.random() * (bb2.max.y - bb2.min.y)}, ${bb2.min.z + Math.random() * (bb2.max.z - bb2.min.z)})`);
        return;
      }
      o3d[this.data.property]?.set(bb2.min.x + Math.random() * (bb2.max.x - bb2.min.x), bb2.min.y + Math.random() * (bb2.max.y - bb2.min.y), bb2.min.z + Math.random() * (bb2.max.z - bb2.min.z));
    },
    remove() {
      this.cancel();
    }
  });

  // src/component/random.ts
  AFRAME.registerComponent("random", {
    multiple: true,
    schema: {
      type: "string"
    },
    init() {
      const spi = this.data.split("|");
      const mix = spi[Math.floor(Math.random() * spi.length)];
      this.el.setAttribute("mixin", this.el.getAttribute("mixin") || ` ${mix}`);
    }
  });

  // src/component/tag.ts
  AFRAME.registerComponent("tag", {
    multiple: true,
    schema: {
      type: "string",
      default: "true"
    },
    init() {
      if (!this.el.tags) {
        this.el.tags = {};
      }
      this.el.tags[this.id] = this.data;
    }
  });

  // src/component/target.ts
  AFRAME.registerComponent("target", {
    schema: {
      type: "string",
      default: ""
    },
    init() {
    }
  });

  // src/ui/webcam.svelte
  function create_fragment(ctx) {
    let div;
    let video2;
    let t;
    let canvas;
    return {
      c() {
        div = element("div");
        video2 = element("video");
        t = space();
        canvas = element("canvas");
        attr(div, "class", "hidden svelte-2e2o1w");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, video2);
        ctx[2](video2);
        append(div, t);
        append(div, canvas);
        ctx[3](canvas);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        ctx[2](null);
        ctx[3](null);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let canvasElementSource;
    let videoElementSource;
    function video_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        videoElementSource = $$value;
        $$invalidate(1, videoElementSource);
      });
    }
    function canvas_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        canvasElementSource = $$value;
        $$invalidate(0, canvasElementSource);
      });
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 3) {
        $: {
          if (canvasElementSource && !canvasElement.$) {
            canvasElement.set(canvasElementSource);
          }
          if (videoElementSource && !videoElement.$) {
            videoElement.set(videoElementSource);
          }
        }
      }
    };
    return [canvasElementSource, videoElementSource, video_binding, canvas_binding];
  }
  var Webcam = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  };
  var webcam_default = Webcam;

  // src/component/wasd-controller.ts
  var vec32 = new AFRAME.THREE.Vector3();
  var quat2 = new AFRAME.THREE.Quaternion();
  function getRoot(o3d) {
    if (o3d.parent.name === "Root") {
      return o3d.parent;
    }
    return getRoot(o3d.parent);
  }
  AFRAME.registerComponent("wasd-controller", {
    schema: {
      speed: { type: "number", default: 0.5 },
      rot: { type: "number", default: 25e-4 }
    },
    init() {
      this.jump = AFRAME.utils.throttleTick(this.jump, 2e3, this);
      this.next = 0;
    },
    remove() {
      this.cancel();
    },
    jump() {
      this.el.emit("jump");
    },
    step() {
      this.el.emit("step");
    },
    tick(t, delta) {
      if (guest.$)
        return;
      if (!this.el.body)
        return;
      const o3d = this.el.object3D;
      let force;
      vec32.set(0, 0, 0);
      let intensity = 1;
      let hop = 5;
      if (key_map.$["shift"]) {
        intensity = 2;
      }
      if (key_map.$[" "] && o3d.position.y < 0.5) {
        hop *= delta;
        this.jump();
        vec32.y = hop;
      }
      if (key_map.$["w"]) {
        vec32.y += 5;
        vec32.z += -this.data.speed * delta * intensity;
      }
      if (key_map.$["s"]) {
        vec32.y += 5;
        vec32.z += this.data.speed * delta * intensity;
      }
      if (key_map.$["a"]) {
        vec32.y += 5;
        vec32.x += -this.data.speed * delta * intensity;
      }
      if (key_map.$["d"]) {
        vec32.y += 5;
        vec32.x += this.data.speed * delta * intensity;
      }
      if (key_map.$["z"]) {
        vec32.y += 5;
        const root = getRoot(camera.$);
        root.rotation.y += this.data.rot * delta;
      }
      if (key_map.$["c"]) {
        vec32.y += 5;
        const root = getRoot(camera.$);
        root.rotation.y -= this.data.rot * delta;
      }
      const l = Math.abs(vec32.length());
      if (l > 0 && camera.$) {
        camera.$.updateMatrixWorld();
        quat2.setFromRotationMatrix(camera.$.matrixWorld);
        const up = vec32.y;
        vec32.applyQuaternion(quat2);
        force = new Ammo.btVector3(vec32.x, up, vec32.z);
        this.el.body.applyForce(force);
        this.el.body.activate();
        Ammo.destroy(force);
        if (t - this.next > 0) {
          this.step();
          this.next = t + 1e3 - l * 40 + Math.random() * 100 + (t % 100 > 50 ? 250 : 0);
        }
      }
    }
  });

  // src/component/sfxr.ts
  AFRAME.registerComponent("sfxr", {
    multiple: true,
    schema: {
      oldParams: { default: true },
      wave_type: { default: 1 },
      p_env_attack: { default: 0 },
      p_env_sustain: { default: 0.31718502829007483 },
      p_env_punch: { default: 0 },
      p_env_decay: { default: 0.2718540993592685 },
      p_base_freq: { default: 0.26126191208337196 },
      p_freq_limit: { default: 0 },
      p_freq_ramp: { default: 0.43787689856926615 },
      p_freq_dramp: { default: 0 },
      p_vib_strength: { default: 0 },
      p_vib_speed: { default: 0 },
      p_arp_mod: { default: 0 },
      p_arp_speed: { default: 0 },
      p_duty: { default: 1 },
      p_duty_ramp: { default: 0 },
      p_repeat_speed: { default: 0.7558565452384385 },
      p_pha_offset: { default: 0 },
      p_pha_ramp: { default: 0 },
      p_lpf_freq: { default: 1 },
      p_lpf_ramp: { default: 0 },
      p_lpf_resonance: { default: 0 },
      p_hpf_freq: { default: 0 },
      p_hpf_ramp: { default: 0 },
      p_vib_delay: { default: 0 },
      sound_vol: { default: 0.4 },
      sample_rate: { default: 44100 },
      sample_size: { default: 8 },
      autoplay: { type: "boolean", default: false },
      spatial: { type: "boolean", default: true }
    },
    init: function() {
      if (this.id) {
        this.event = this.event.bind(this);
        this.el.addEventListener(this.id, this.event);
      }
      if (this.autoplay) {
        this.event();
      }
    },
    event() {
      if (!this.audio)
        this.audio = new SoundEffect(Object.assign(new Params(), this.data).mutate().mutate().mutate()).generate().getAudio();
      this.audio.play();
    },
    remove() {
      if (this.cancel)
        clearTimeout(this.cancel);
      this.el.removeEventListener(this.id, this.event);
    }
  });

  // src/util.ts
  var stringify = AFRAME.utils.styleParser.stringify;

  // src/sound/action.ts
  var sfx_jump = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": 0,
    "p_env_sustain": 0.14827504779514308,
    "p_env_punch": 0,
    "p_env_decay": 0.2604416321207049,
    "p_base_freq": 0.3492950945673611,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.1370009340411704,
    "p_freq_dramp": 0,
    "p_vib_strength": 0,
    "p_vib_speed": 0,
    "p_arp_mod": 0,
    "p_arp_speed": 0,
    "p_duty": 0.4063339547539369,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0.25097654676858755,
    "p_hpf_ramp": 0,
    "sound_vol": 1e-3,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_shthump = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.14288772521725981,
    "p_env_sustain": 0.18947118560584877,
    "p_env_punch": 0.5333044335665993,
    "p_env_decay": 0.09659737108218491,
    "p_base_freq": 0.9026222794210492,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.42397347917953465,
    "p_freq_dramp": 0,
    "p_vib_strength": 0.4563193465356852,
    "p_vib_speed": 0.4239749801602483,
    "p_arp_mod": 0.5993362888774147,
    "p_arp_speed": 0.7955386638193522,
    "p_duty": 0,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0.9733010009859232,
    "p_hpf_ramp": 0,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_near_miss = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.5437457551781613,
    "p_env_sustain": 0.21063143417314412,
    "p_env_punch": 0.2542619527213554,
    "p_env_decay": -0.2564894724385278,
    "p_base_freq": 0.49999545852664595,
    "p_freq_limit": 0,
    "p_freq_ramp": -8434691459481186e-22,
    "p_freq_dramp": 0.001432130337006416,
    "p_vib_strength": -0.5052584806939552,
    "p_vib_speed": -0.9065028252455742,
    "p_arp_mod": -0.27221993435987546,
    "p_arp_speed": 0.5987949474724483,
    "p_duty": -0.20376620840891269,
    "p_duty_ramp": 13669716600822202e-21,
    "p_repeat_speed": -0.44811129857507037,
    "p_pha_offset": -0.15439370603593736,
    "p_pha_ramp": 6282153539375482e-22,
    "p_lpf_freq": 0.03813951357680645,
    "p_lpf_ramp": 0.1697485457762507,
    "p_lpf_resonance": 0.6316165961198439,
    "p_hpf_freq": 0.8137072361400771,
    "p_hpf_ramp": 14227234806808646e-20,
    "sound_vol": 0.1,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_charge_up = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.3874825490203318,
    "p_env_sustain": 0.7190222106791869,
    "p_env_punch": 0.004265468954162491,
    "p_env_decay": -0.6087350641913779,
    "p_base_freq": 1.1261794460876196,
    "p_freq_limit": 0,
    "p_freq_ramp": -14025183021737829e-24,
    "p_freq_dramp": -0.0039038649574089294,
    "p_vib_strength": -0.7817875606283197,
    "p_vib_speed": -0.3797615980243507,
    "p_arp_mod": -0.7625171146742447,
    "p_arp_speed": -0.33517809114980546,
    "p_duty": 0.17373764646665757,
    "p_duty_ramp": 0.059359124093710525,
    "p_repeat_speed": -0.7419334407993086,
    "p_pha_offset": 0.9523126517430207,
    "p_pha_ramp": -0.09739333601144026,
    "p_lpf_freq": 0.9958033214806387,
    "p_lpf_ramp": 0.2033764059805292,
    "p_lpf_resonance": -0.9659966879893127,
    "p_hpf_freq": 0.0031298963649359023,
    "p_hpf_ramp": 0.22308580095770741,
    "sound_vol": 0.1,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_bump = stringify({
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": -13846885693587297e-20,
    "p_env_sustain": 0.009640721255066926,
    "p_env_punch": 0.0030335447507990367,
    "p_env_decay": 0.2794994504966408,
    "p_base_freq": 0.01504519423224339,
    "p_freq_limit": 0,
    "p_freq_ramp": -7804659067900858e-21,
    "p_freq_dramp": -11121166912703114e-20,
    "p_vib_strength": 0.06434611697985575,
    "p_vib_speed": -0.6406129915245771,
    "p_arp_mod": -0.5098012413331912,
    "p_arp_speed": -0.41947845119034843,
    "p_duty": 0.7860739068985212,
    "p_duty_ramp": 0.14527949840944718,
    "p_repeat_speed": 0.8257105682199826,
    "p_pha_offset": 0.06471548367218008,
    "p_pha_ramp": -1429869098729941e-19,
    "p_lpf_freq": 0.23407713985719159,
    "p_lpf_ramp": 9247443839314244e-20,
    "p_lpf_resonance": 0.27873708489880533,
    "p_hpf_freq": 11343465197386403e-21,
    "p_hpf_ramp": 0.0520462756379083,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_arrowshot = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.19423902391398637,
    "p_env_sustain": 1.064881775595702,
    "p_env_punch": 0.21902691783473585,
    "p_env_decay": -0.23966316098991747,
    "p_base_freq": 0.12040450627117918,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.7335892574850826,
    "p_freq_dramp": -0.001740558138581788,
    "p_vib_strength": -0.5275662717440277,
    "p_vib_speed": -0.14150638730301734,
    "p_arp_mod": 0.6708398878919186,
    "p_arp_speed": 0.35203043363429787,
    "p_duty": 0.8780540295948374,
    "p_duty_ramp": -0.09841291379124431,
    "p_repeat_speed": -0.8435256478026987,
    "p_pha_offset": -0.7697820749778174,
    "p_pha_ramp": -0.4367776273640769,
    "p_lpf_freq": 0.7708797266832073,
    "p_lpf_ramp": -0.4564972895125054,
    "p_lpf_resonance": 0.2546609942323266,
    "p_hpf_freq": 0.26577039558388404,
    "p_hpf_ramp": -0.5357249680458842,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/sound/person.ts
  var sfx_doer1 = stringify({
    "oldParams": true,
    "wave_type": 2,
    "p_env_attack": -14140292398049939e-21,
    "p_env_sustain": 0.2783775417625987,
    "p_env_punch": 0.19110524829085512,
    "p_env_decay": 0.24291011008920216,
    "p_base_freq": 0.4628825807009038,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.001036644707209624,
    "p_freq_dramp": -5468717507720412e-19,
    "p_vib_strength": 0.6131331238497073,
    "p_vib_speed": -0.34944443470188613,
    "p_arp_mod": -0.8766410041733139,
    "p_arp_speed": -0.037249007282142976,
    "p_duty": -0.2235259325594261,
    "p_duty_ramp": -0.0017080456605581328,
    "p_repeat_speed": -0.3291382658203825,
    "p_pha_offset": -0.3729294690701458,
    "p_pha_ramp": -23313889856112357e-20,
    "p_lpf_freq": 0.991722302732238,
    "p_lpf_ramp": -0.2380101450884604,
    "p_lpf_resonance": -0.7996369184745049,
    "p_hpf_freq": 0.002463573855517682,
    "p_hpf_ramp": -0.877137470405033,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_step = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": -0.001992137071507483,
    "p_env_sustain": 0.02887634247502266,
    "p_env_punch": 0.06602000202423139,
    "p_env_decay": 0.18711795113690988,
    "p_base_freq": 0.78615754090854,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.9130772193580317,
    "p_freq_dramp": 0.7839164432200496,
    "p_vib_strength": -0.0028002409007415597,
    "p_vib_speed": -0.5241176461726615,
    "p_arp_mod": -0.12051833616856555,
    "p_arp_speed": 0.10814053862244011,
    "p_duty": 0.42531293422570826,
    "p_duty_ramp": -0.6085685939428387,
    "p_repeat_speed": 0.06740669958577028,
    "p_pha_offset": 0.792814619606911,
    "p_pha_ramp": -0.05861207666646063,
    "p_lpf_freq": 0.6276262068790779,
    "p_lpf_ramp": 0.6497584737007176,
    "p_lpf_resonance": -0.4663861975759924,
    "p_hpf_freq": 0.11248103763612881,
    "p_hpf_ramp": 0.0763884580208738,
    "sound_vol": 0.01,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_step2 = stringify({
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": 0.03236098469619712,
    "p_env_sustain": 0.2705724972779315,
    "p_env_punch": 0.029632247273632333,
    "p_env_decay": 0.5256501669572298,
    "p_base_freq": 0.458615573442568,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.0034449992484306764,
    "p_freq_dramp": -0.8176704139729954,
    "p_vib_strength": 0.05463151067372264,
    "p_vib_speed": 0.8023353751525573,
    "p_arp_mod": -0.4185293161595989,
    "p_arp_speed": 0.1543336714233381,
    "p_duty": -0.5634192018692583,
    "p_duty_ramp": -0.25289157705045817,
    "p_repeat_speed": -0.9294585252887337,
    "p_pha_offset": 0.02542836266244359,
    "p_pha_ramp": 0.236112658177757,
    "p_lpf_freq": 0.9998162946102427,
    "p_lpf_ramp": 0.45118968025298606,
    "p_lpf_resonance": -0.4482408045401636,
    "p_hpf_freq": 674561078276487e-18,
    "p_hpf_ramp": 5318547697887226e-19,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_step3 = stringify({
    "oldParams": true,
    "wave_type": 2,
    "p_env_attack": 0.27990485227055584,
    "p_env_sustain": 0.020506998010026076,
    "p_env_punch": 0.16596659461414084,
    "p_env_decay": 0.20794936589878876,
    "p_base_freq": 0.39098197565281834,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.5191345290176836,
    "p_freq_dramp": -3908268883617118e-20,
    "p_vib_strength": 35777445777187156e-20,
    "p_vib_speed": -0.633528747529275,
    "p_arp_mod": -0.049517999495189535,
    "p_arp_speed": 0.43650489199637477,
    "p_duty": -0.4039380025688972,
    "p_duty_ramp": -0.0016339049005769744,
    "p_repeat_speed": 0.4575409109472983,
    "p_pha_offset": -0.26822338283957997,
    "p_pha_ramp": -0.15228830174630165,
    "p_lpf_freq": 0.977206070084553,
    "p_lpf_ramp": -0.06562380503361015,
    "p_lpf_resonance": 0.3960568108105873,
    "p_hpf_freq": 0.2551407112349606,
    "p_hpf_ramp": -0.06906816447380913,
    "sound_vol": 5e-3,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/node/characters.svelte
  function create_fragment2(ctx) {
    let a_mixin;
    let t0;
    let a_entity1;
    let a_entity0;
    let a_entity1_vrm_value;
    let a_entity1_scale_value;
    let t1;
    let a_entity2;
    let a_entity2_vrm_value;
    return {
      c() {
        a_mixin = element("a-mixin");
        t0 = space();
        a_entity1 = element("a-entity");
        a_entity0 = element("a-entity");
        t1 = space();
        a_entity2 = element("a-entity");
        set_custom_element_data(a_mixin, "id", "character");
        set_custom_element_data(a_mixin, "ammo-body", "gravity: 0 -20 0; type: dynamic; mass: 1; linearDamping: 0.95; angularDamping: 1;angularFactor: 0 1 0;");
        set_custom_element_data(a_mixin, "ammo-shape", "type: capsule; fit: manual; halfExtents: 0.35 0.6 0.35; offset: 0 0.75 0");
        set_custom_element_data(a_entity0, "class", "vrm-interaction");
        set_custom_element_data(a_entity0, "avatar", "");
        set_custom_element_data(a_entity0, "ammo-body", "type: kinematic;  mass: 0; collisionFilterGroup: 3; disableCollision: true; emitCollisionEvents: true; collisionFilterMask:1;scaleAutoUpdate:false");
        set_custom_element_data(a_entity0, "ammo-shape", "type: sphere; sphereRadius: 2.5; fit:manual;");
        set_custom_element_data(a_entity1, "mixin", "shadow character");
        set_custom_element_data(a_entity1, "position", "0 1 0");
        set_custom_element_data(a_entity1, "vrm", a_entity1_vrm_value = "src: " + ctx[0] + "; current: true");
        set_custom_element_data(a_entity1, "look-controls", "");
        set_custom_element_data(a_entity1, "scale", a_entity1_scale_value = ctx[1].x + " " + ctx[1].y + " " + ctx[1].z);
        set_custom_element_data(a_entity1, "host", "current");
        set_custom_element_data(a_entity1, "wasd-controller", "");
        set_custom_element_data(a_entity1, "net-avatar", "");
        set_custom_element_data(a_entity1, "sfxr__jump", sfx_jump);
        set_custom_element_data(a_entity2, "mixin", "shadow character");
        set_custom_element_data(a_entity2, "position", "0 1 -1");
        set_custom_element_data(a_entity2, "rotation", "0 180 0");
        set_custom_element_data(a_entity2, "host", "doer");
        set_custom_element_data(a_entity2, "sfxr__bump", sfx_doer1);
        set_custom_element_data(a_entity2, "target", "\u{1F9D9}\u200D\u2640\uFE0F");
        set_custom_element_data(a_entity2, "net-avatar", "");
        set_custom_element_data(a_entity2, "vrm", a_entity2_vrm_value = "src: " + ctx[2] + "; mirror: true");
      },
      m(target, anchor) {
        insert(target, a_mixin, anchor);
        insert(target, t0, anchor);
        insert(target, a_entity1, anchor);
        append(a_entity1, a_entity0);
        insert(target, t1, anchor);
        insert(target, a_entity2, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & 1 && a_entity1_vrm_value !== (a_entity1_vrm_value = "src: " + ctx2[0] + "; current: true")) {
          set_custom_element_data(a_entity1, "vrm", a_entity1_vrm_value);
        }
        if (dirty & 2 && a_entity1_scale_value !== (a_entity1_scale_value = ctx2[1].x + " " + ctx2[1].y + " " + ctx2[1].z)) {
          set_custom_element_data(a_entity1, "scale", a_entity1_scale_value);
        }
        if (dirty & 4 && a_entity2_vrm_value !== (a_entity2_vrm_value = "src: " + ctx2[2] + "; mirror: true")) {
          set_custom_element_data(a_entity2, "vrm", a_entity2_vrm_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a_mixin);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a_entity1);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(a_entity2);
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    let $avatar_current;
    let $size;
    let $avatar_doer;
    component_subscribe($$self, avatar_current, ($$value) => $$invalidate(0, $avatar_current = $$value));
    component_subscribe($$self, size, ($$value) => $$invalidate(1, $size = $$value));
    component_subscribe($$self, avatar_doer, ($$value) => $$invalidate(2, $avatar_doer = $$value));
    return [$avatar_current, $size, $avatar_doer];
  }
  var Characters = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, {});
    }
  };
  var characters_default = Characters;

  // src/component/camera-controller.ts
  AFRAME.registerComponent("camera-controller", {
    init() {
      camera.set(this.el.object3D);
      camera_el.set(this);
      currentVRM.on(($vrm) => {
        if (!$vrm)
          return;
        this.hideHead();
        $vrm.firstPerson.firstPersonBone.add(this.el.object3D);
      });
    },
    showHead() {
      const { layers } = this.el.object3D.children[0];
      this.data.head = true;
      layers.disable(currentVRM.$.firstPerson.firstPersonOnlyLayer);
      layers.enable(currentVRM.$.firstPerson.thirdPersonOnlyLayer);
    },
    hideHead() {
      const { layers } = this.el.object3D.children[0];
      this.data.head = false;
      layers.enable(currentVRM.$.firstPerson.firstPersonOnlyLayer);
      layers.disable(currentVRM.$.firstPerson.thirdPersonOnlyLayer);
    },
    remove() {
      if (currentVRM.$) {
        currentVRM.$?.firstPerson.firstPersonBone.remove(this.el.object3D);
      }
      this.cancel();
    },
    tick(_, dt) {
      if (!currentVRM.$)
        return;
      if (toggle_selfie.$ !== this.selfie) {
        if (toggle_selfie.$) {
          this.showHead();
          this.el.object3D.position.set(0, 0.1, -0.75);
          this.el.object3D.lookAt(0, 5, 0);
        } else {
          this.el.object3D.position.set(0, 0, 0);
          this.el.object3D.quaternion.identity();
          this.hideHead();
        }
        this.selfie = toggle_selfie.$;
      }
    }
  });

  // src/component/copy.ts
  var vec33 = new AFRAME.THREE.Vector3();
  var quat3 = new AFRAME.THREE.Quaternion();
  var scale = new AFRAME.THREE.Vector3();
  AFRAME.registerComponent("copy", {
    schema: {
      target: { type: "selector" },
      position: { type: "bool", default: true },
      quaternion: { type: "bool", defualt: true },
      scale: { type: "bool", default: false }
    },
    tick() {
      if (!this.data.target)
        return;
      const o3d = this.el.object3D;
      const o_o3d = this.data.target.object3D;
      o_o3d.updateMatrixWorld();
      o_o3d.matrixWorld.decompose(vec33, quat3, scale);
      if (this.data.position) {
        o3d.position.copy(vec33);
      }
      if (this.data.quaternion) {
        o3d.quaternion.copy(quat3);
      }
    }
  });

  // src/component/look.ts
  var registerComponent = AFRAME.registerComponent;
  var THREE = AFRAME.THREE;
  var utils = AFRAME.utils;
  var PI_2 = Math.PI / 2;
  registerComponent("look", {
    dependencies: ["position", "rotation"],
    schema: {
      enabled: { default: true },
      pointerLockEnabled: { default: false },
      reverseMouseDrag: { default: false },
      reverseTouchDrag: { default: false },
      touchEnabled: { default: true },
      mouseEnabled: { default: true }
    },
    init: function() {
      this.deltaYaw = 0;
      this.previousHMDPosition = new THREE.Vector3();
      this.hmdQuaternion = new THREE.Quaternion();
      this.position = new THREE.Vector3();
      this.rotation = {};
      this.deltaRotation = {};
      this.savedPose = null;
      this.pointerLocked = false;
      this.setupMouseControls();
      this.bindMethods();
      this.previousMouseEvent = {};
      this.savedPose = {
        position: new THREE.Vector3(),
        rotation: new THREE.Euler()
      };
      if (this.el.sceneEl.is("vr-mode") || this.el.sceneEl.is("ar-mode")) {
        this.onEnterVR();
      }
    },
    update: function(oldData) {
      var data = this.data;
      if (data.enabled !== oldData.enabled) {
        this.updateGrabCursor(data.enabled);
      }
      if (oldData && !data.pointerLockEnabled !== oldData.pointerLockEnabled) {
        this.removeEventListeners();
        this.addEventListeners();
        if (this.pointerLocked) {
          this.exitPointerLock();
        }
      }
    },
    tick: function(t) {
      var data = this.data;
      if (!data.enabled) {
        return;
      }
      this.updateOrientation();
    },
    play: function() {
      this.addEventListeners();
    },
    pause: function() {
      this.removeEventListeners();
      if (this.pointerLocked) {
        this.exitPointerLock();
      }
    },
    remove: function() {
      this.removeEventListeners();
      if (this.pointerLocked) {
        this.exitPointerLock();
      }
    },
    bindMethods: function() {
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.onTouchStart = this.onTouchStart.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);
      this.onTouchEnd = this.onTouchEnd.bind(this);
      this.onEnterVR = this.onEnterVR.bind(this);
      this.onExitVR = this.onExitVR.bind(this);
      this.onPointerLockChange = this.onPointerLockChange.bind(this);
      this.onPointerLockError = this.onPointerLockError.bind(this);
    },
    setupMouseControls: function() {
      this.mouseDown = false;
      this.pitchObject = new THREE.Object3D();
      this.yawObject = new THREE.Object3D();
      this.yawObject.position.y = 10;
      this.yawObject.add(this.pitchObject);
    },
    addEventListeners: function() {
      var sceneEl = this.el.sceneEl;
      var canvasEl = sceneEl.canvas;
      if (!canvasEl) {
        sceneEl.addEventListener("render-target-loaded", this.addEventListeners.bind(this));
        return;
      }
      this.cancel = toggle_pointerlock.on(($t) => {
        if (!this.pointerLocked)
          return;
        if ($t) {
          canvasEl.requestPointerLock();
        } else {
          document.exitPointerLock();
        }
      });
      canvasEl.addEventListener("mousedown", this.onMouseDown, false);
      window.addEventListener("mousemove", this.onMouseMove, false);
      window.addEventListener("mouseup", this.onMouseUp, false);
      canvasEl.addEventListener("touchstart", this.onTouchStart);
      window.addEventListener("touchmove", this.onTouchMove);
      window.addEventListener("touchend", this.onTouchEnd);
      sceneEl.addEventListener("enter-vr", this.onEnterVR);
      sceneEl.addEventListener("exit-vr", this.onExitVR);
      if (this.data.pointerLockEnabled) {
        document.addEventListener("pointerlockchange", this.onPointerLockChange, false);
        document.addEventListener("mozpointerlockchange", this.onPointerLockChange, false);
        document.addEventListener("pointerlockerror", this.onPointerLockError, false);
      }
    },
    removeEventListeners: function() {
      var sceneEl = this.el.sceneEl;
      var canvasEl = sceneEl && sceneEl.canvas;
      if (!canvasEl) {
        return;
      }
      canvasEl.removeEventListener("mousedown", this.onMouseDown);
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      canvasEl.removeEventListener("touchstart", this.onTouchStart);
      window.removeEventListener("touchmove", this.onTouchMove);
      window.removeEventListener("touchend", this.onTouchEnd);
      sceneEl.removeEventListener("enter-vr", this.onEnterVR);
      sceneEl.removeEventListener("exit-vr", this.onExitVR);
      document.removeEventListener("pointerlockchange", this.onPointerLockChange, false);
      document.removeEventListener("mozpointerlockchange", this.onPointerLockChange, false);
      document.removeEventListener("pointerlockerror", this.onPointerLockError, false);
    },
    updateOrientation: function() {
      var object3D = this.el.object3D;
      var pitchObject = this.pitchObject;
      var yawObject = this.yawObject;
      var sceneEl = this.el.sceneEl;
      if ((sceneEl.is("vr-mode") || sceneEl.is("ar-mode")) && sceneEl.checkHeadsetConnected()) {
        return;
      }
      object3D.rotation.x = pitchObject.rotation.x;
      object3D.rotation.y = yawObject.rotation.y;
    },
    onMouseMove: function(evt) {
      var direction;
      var movementX;
      var movementY;
      var pitchObject = this.pitchObject;
      var previousMouseEvent = this.previousMouseEvent;
      var yawObject = this.yawObject;
      if (!this.data.enabled || !this.mouseDown && !this.pointerLocked) {
        return;
      }
      if (this.pointerLocked) {
        movementX = evt.movementX || evt.mozMovementX || 0;
        movementY = evt.movementY || evt.mozMovementY || 0;
      } else {
        movementX = evt.screenX - previousMouseEvent.screenX;
        movementY = evt.screenY - previousMouseEvent.screenY;
      }
      this.previousMouseEvent.screenX = evt.screenX;
      this.previousMouseEvent.screenY = evt.screenY;
      direction = this.data.reverseMouseDrag ? 1 : -1;
      yawObject.rotation.y += movementX * 2e-3 * direction;
      pitchObject.rotation.x += movementY * 2e-3 * direction;
      pitchObject.rotation.x = Math.max(-PI_2 / 3, Math.min(PI_2 / 3, pitchObject.rotation.x));
    },
    onMouseDown: function(evt) {
      var sceneEl = this.el.sceneEl;
      if (!this.data.enabled || !this.data.mouseEnabled || (sceneEl.is("vr-mode") || sceneEl.is("ar-mode")) && sceneEl.checkHeadsetConnected()) {
        return;
      }
      if (evt.button !== 0 && evt.button !== 2) {
        return;
      }
      var canvasEl = sceneEl && sceneEl.canvas;
      this.mouseDown = true;
      this.previousMouseEvent.screenX = evt.screenX;
      this.previousMouseEvent.screenY = evt.screenY;
      this.showGrabbingCursor();
      if (this.data.pointerLockEnabled && !this.pointerLocked) {
        if (canvasEl.requestPointerLock) {
          canvasEl.requestPointerLock();
        } else if (canvasEl.mozRequestPointerLock) {
          canvasEl.mozRequestPointerLock();
        }
      } else {
        doControl("control use " + (evt.button === 0 ? "hand_left" : "hand_right"));
      }
    },
    showGrabbingCursor: function() {
      this.el.sceneEl.canvas.style.cursor = "grabbing";
    },
    hideGrabbingCursor: function() {
      this.el.sceneEl.canvas.style.cursor = "";
    },
    onMouseUp: function(evt) {
      if (this.pointerLocked) {
        doControl("control not use " + (evt.button === 0 ? "left" : "right"));
      }
      this.mouseDown = false;
      this.hideGrabbingCursor();
    },
    onTouchStart: function(evt) {
      if (evt.touches.length !== 1 || !this.data.touchEnabled || this.el.sceneEl.is("vr-mode") || this.el.sceneEl.is("ar-mode")) {
        return;
      }
      this.touchStart = {
        x: evt.touches[0].pageX,
        y: evt.touches[0].pageY
      };
      this.touchStarted = true;
    },
    onTouchMove: function(evt) {
      var direction;
      var canvas = this.el.sceneEl.canvas;
      var deltaY;
      var yawObject = this.yawObject;
      if (!this.touchStarted || !this.data.touchEnabled) {
        return;
      }
      deltaY = 2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x) / canvas.clientWidth;
      direction = this.data.reverseTouchDrag ? 1 : -1;
      yawObject.rotation.y -= deltaY * 0.5 * direction;
      this.touchStart = {
        x: evt.touches[0].pageX,
        y: evt.touches[0].pageY
      };
    },
    onTouchEnd: function() {
      this.touchStarted = false;
    },
    onEnterVR: function() {
      var sceneEl = this.el.sceneEl;
      if (!sceneEl.checkHeadsetConnected()) {
        return;
      }
      this.saveCameraPose();
      this.el.object3D.rotation.set(0, 0, 0);
      if (sceneEl.hasWebXR) {
        this.el.object3D.matrixAutoUpdate = false;
        this.el.object3D.updateMatrix();
      }
    },
    onExitVR: function() {
      if (!this.el.sceneEl.checkHeadsetConnected()) {
        return;
      }
      this.restoreCameraPose();
      this.el.object3D.matrixAutoUpdate = true;
    },
    onPointerLockChange: function() {
      this.pointerLocked = !!(document.pointerLockElement || document.mozPointerLockElement);
    },
    onPointerLockError: function() {
      this.pointerLocked = false;
    },
    exitPointerLock: function() {
      document.exitPointerLock();
      this.pointerLocked = false;
    },
    updateGrabCursor: function(enabled) {
      var sceneEl = this.el.sceneEl;
      function enableGrabCursor() {
        sceneEl.canvas.classList.add("a-grab-cursor");
      }
      function disableGrabCursor() {
        sceneEl.canvas.classList.remove("a-grab-cursor");
      }
      if (!sceneEl.canvas) {
        if (enabled) {
          sceneEl.addEventListener("render-target-loaded", enableGrabCursor);
        } else {
          sceneEl.addEventListener("render-target-loaded", disableGrabCursor);
        }
        return;
      }
      if (enabled) {
        enableGrabCursor();
        return;
      }
      disableGrabCursor();
    },
    saveCameraPose: function() {
      var el = this.el;
      this.savedPose.position.copy(el.object3D.position);
      this.savedPose.rotation.copy(el.object3D.rotation);
      this.hasSavedPose = true;
    },
    restoreCameraPose: function() {
      var el = this.el;
      var savedPose = this.savedPose;
      if (!this.hasSavedPose) {
        return;
      }
      el.object3D.position.copy(savedPose.position);
      el.object3D.rotation.copy(savedPose.rotation);
      this.hasSavedPose = false;
    }
  });

  // src/camera.svelte
  function create_if_block(ctx) {
    let a_entity;
    let mounted;
    let dispose;
    return {
      c() {
        a_entity = element("a-entity");
        set_custom_element_data(a_entity, "scale", "0.1 0.1 20");
        set_custom_element_data(a_entity, "position", "0 0 -1");
        set_custom_element_data(a_entity, "ammo-body", "type: kinematic;disableCollision: true;emitCollisionEvents: true;collisionFilterMask: 3;");
        set_custom_element_data(a_entity, "ammo-shape", "type: box; halfExtents: 0.05 0.05 6;offset: 0 0 -8; fit: manual;");
      },
      m(target, anchor) {
        insert(target, a_entity, anchor);
        if (!mounted) {
          dispose = [
            listen(a_entity, "collidestart", ctx[4]),
            listen(a_entity, "collideend", ctx[5])
          ];
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(a_entity);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment3(ctx) {
    let a_mixin;
    let t0;
    let a_camera;
    let a_entity0;
    let a_entity0_visible_value;
    let t1;
    let t2;
    let a_entity1;
    let if_block = ctx[3] && create_if_block(ctx);
    return {
      c() {
        a_mixin = element("a-mixin");
        t0 = space();
        a_camera = element("a-camera");
        a_entity0 = element("a-entity");
        t1 = space();
        if (if_block)
          if_block.c();
        t2 = space();
        a_entity1 = element("a-entity");
        set_custom_element_data(a_mixin, "id", "bbs");
        set_custom_element_data(a_mixin, "geometry", "primitive: circle; segments: 4;");
        set_custom_element_data(a_mixin, "animation", "property: rotation; to: 0 360 0; loop: true; dur: 1000; easing: linear");
        set_custom_element_data(a_mixin, "material", "wireframe: true; color: #00ff00; shader: flat;");
        set_custom_element_data(a_entity0, "geometry", "primitive: box; width: 0.4; height: 0.4; depth: 0.1");
        set_custom_element_data(a_entity0, "material", "shader: flat; transparent: true; opacity: 0.5; color: #006ace");
        set_custom_element_data(a_entity0, "position", "0 -0.2 -0.5");
        set_custom_element_data(a_entity0, "rotation", "-40 0 0");
        set_custom_element_data(a_entity0, "visible", a_entity0_visible_value = ctx[1] || ctx[2]);
        set_custom_element_data(a_camera, "active", "");
        set_custom_element_data(a_camera, "fov", "85");
        set_custom_element_data(a_camera, "id", "camera");
        set_custom_element_data(a_camera, "camera-controller", "");
        set_custom_element_data(a_camera, "far", "50000");
        set_custom_element_data(a_camera, "position", "0 4 0");
        set_custom_element_data(a_camera, "wasd-controls", "enabled: false;");
        set_custom_element_data(a_camera, "look", "enabled: true;pointerLockEnabled: true;  reverseTouchDrag: true;");
        set_custom_element_data(a_camera, "look-controls", "enabled: false;");
        set_custom_element_data(a_entity1, "pool__targeting", "mixin: bbs; size: 10");
      },
      m(target, anchor) {
        insert(target, a_mixin, anchor);
        insert(target, t0, anchor);
        insert(target, a_camera, anchor);
        append(a_camera, a_entity0);
        append(a_camera, t1);
        if (if_block)
          if_block.m(a_camera, null);
        insert(target, t2, anchor);
        insert(target, a_entity1, anchor);
        ctx[6](a_entity1);
      },
      p(ctx2, [dirty]) {
        if (dirty & 6 && a_entity0_visible_value !== (a_entity0_visible_value = ctx2[1] || ctx2[2])) {
          set_custom_element_data(a_entity0, "visible", a_entity0_visible_value);
        }
        if (ctx2[3]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(a_camera, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a_mixin);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a_camera);
        if (if_block)
          if_block.d();
        if (detaching)
          detach(t2);
        if (detaching)
          detach(a_entity1);
        ctx[6](null);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let $open_loading;
    let $open_help;
    let $open_targeting;
    component_subscribe($$self, open_loading, ($$value) => $$invalidate(1, $open_loading = $$value));
    component_subscribe($$self, open_help, ($$value) => $$invalidate(2, $open_help = $$value));
    component_subscribe($$self, open_targeting, ($$value) => $$invalidate(3, $open_targeting = $$value));
    let el;
    open_targeting.on(($t) => {
      if (!$t)
        return;
    });
    const ents = {};
    const box = new AFRAME.THREE.Box3();
    open_targeting.on((t) => {
      if (!t) {
        Object.values(ents).forEach((e) => {
          el.components.pool__targeting.returnEntity(e);
          delete ents[e.object3D.uuid];
        });
      }
    });
    function collidestart(e) {
      const who = e.detail.targetEl;
      if (who.id === "ground")
        return;
      const keys = Object.keys(ents);
      if (keys.length >= 10) {
        const key = keys[Math.floor(Math.random() * keys.length)];
        el.components.pool__targeting.returnEntity(ents[key]);
        delete ents[key];
      }
      const ent = el.components.pool__targeting.requestEntity();
      ent.play();
      ents[who.object3D.uuid] = ent;
      box.setFromObject(who.object3D);
      box.getSize(ent.object3D.scale);
      box.getCenter(ent.object3D.position);
    }
    function collideend(e) {
      const who = e.detail.targetEl;
      if (!ents[who.object3D.uuid])
        return;
      el.components.pool__targeting.returnEntity(ents[who.object3D.uuid]);
      delete ents[who.object3D.uuid];
    }
    function a_entity1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        el = $$value;
        $$invalidate(0, el);
      });
    }
    return [
      el,
      $open_loading,
      $open_help,
      $open_targeting,
      collidestart,
      collideend,
      a_entity1_binding
    ];
  }
  var Camera2 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment3, safe_not_equal, {});
    }
  };
  var camera_default = Camera2;

  // src/ui/heard.svelte
  function create_fragment4(ctx) {
    let div;
    let textarea;
    let div_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        textarea = element("textarea");
        attr(textarea, "class", "entry svelte-1msl7xv");
        textarea.readOnly = true;
        attr(div, "class", div_class_value = "lofi " + (ctx[1] ? "mobile" : "") + " svelte-1msl7xv");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, textarea);
        set_input_value(textarea, ctx[0]);
        if (!mounted) {
          dispose = listen(textarea, "input", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          set_input_value(textarea, ctx2[0]);
        }
        if (dirty & 2 && div_class_value !== (div_class_value = "lofi " + (ctx2[1] ? "mobile" : "") + " svelte-1msl7xv")) {
          attr(div, "class", div_class_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    let $ismobile;
    component_subscribe($$self, ismobile, ($$value) => $$invalidate(1, $ismobile = $$value));
    let text2 = "\u{1F47E}Welcome to a.Goblin.Life\u{1F47E}";
    talk.on(() => {
      if (!talk.$)
        return;
      $$invalidate(0, text2 = talk.$ + "\n" + text2);
    });
    function textarea_input_handler() {
      text2 = this.value;
      $$invalidate(0, text2);
    }
    return [text2, $ismobile, textarea_input_handler];
  }
  var Heard = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment4, safe_not_equal, {});
    }
  };
  var heard_default = Heard;

  // src/shader/floaty.vert
  var floaty_default = "// time uniform\nvec4 Floaty(in vec4 v) {\n    float t = time * 0.00005 + v.x*v.y*v.z / 100.;\n    float dst = 100.;\n    v.x += sin(t) * dst + cos(t * 2.) * dst;\n    v.y += cos(t) * dst/100. ;\n    v.z += sin(t) * dst+ sin(t * 2.) * dst;\n    return v;\n}";

  // src/component/floaty.ts
  var main = `
vec4 mvPosition = vec4(transformed, 1.0);

mvPosition = modelViewMatrix * Floaty(mvPosition);
mvPosition = projectionMatrix * mvPosition;
gl_Position = mvPosition;
`;
  AFRAME.registerComponent("floaty", {
    init() {
      this.setup = this.setup.bind(this);
      this.setup();
      this.el.addEventListener("model-loaded", this.setup);
    },
    remove() {
      this.el.removeEventListener("model-loaded", this.setup);
    },
    setup() {
      this.el.object3D.traverse((c) => {
        if (c.material) {
          const prev = c.material.onBeforeCompile;
          c.material.onBeforeCompile = (shader) => {
            if (!shader.uniforms.time) {
              shader.uniforms.time = time.$;
              shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                "#include <common>",
                "uniform float time;",
                floaty_default
              ].join("\n")).replace("#include <project_vertex>", main);
            } else {
              shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                "#include <common>",
                floaty_default
              ].join("\n")).replace("(mvPosition);", "(Floaty(mvPosition));");
            }
            if (prev) {
              prev(shader);
            }
          };
          c.material.needsUpdate = true;
        }
      });
    }
  });

  // src/shader/windy.vert
  var windy_default = "vec4 Windy(in vec4 v) {\n    float t = -time * 0.0002 + v.x*v.y*v.z*100.;\n    float dst = 0.02;\n    v.x += sin(t) * dst;\n    v.y += cos(t) * dst/10.;\n    v.z += sin(t) * dst;\n    return v; \n}";

  // src/component/windy.ts
  var main2 = `
vec4 mvPosition = vec4(transformed, 1.0);

mvPosition = modelViewMatrix * Windy(mvPosition);
mvPosition = projectionMatrix * mvPosition;
gl_Position = mvPosition;
`;
  AFRAME.registerComponent("windy", {
    init() {
      this.setup = this.setup.bind(this);
      this.setup();
      this.el.addEventListener("model-loaded", this.setup);
    },
    remove() {
      this.el.removeEventListener("model-loaded", this.setup);
    },
    setup() {
      this.el.object3D.traverse((c) => {
        if (c.material) {
          const prev = c.material.onBeforeCompile;
          c.material.onBeforeCompile = (shader) => {
            if (!shader.uniforms.time) {
              shader.uniforms.time = time.$;
              shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                "#include <common>",
                "uniform float time;",
                windy_default
              ].join("\n")).replace("#include <project_vertex>", main2);
            } else {
              shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                "#include <common>",
                windy_default
              ].join("\n")).replace("(mvPosition);", "(Windy(mvPosition));");
            }
            if (prev) {
              prev(shader);
            }
          };
          c.material.needsUpdate = true;
        }
      });
    }
  });

  // src/component/alive.ts
  AFRAME.registerComponent("alive", {
    schema: {
      type: { type: "string", default: "random" },
      hp: { type: "number", default: 10 }
    },
    init() {
      this.tick = AFRAME.utils.throttleTick(this.tick, 250, this);
    },
    tick() {
      if (this[this.data.type])
        this[this.data.type]();
    },
    random() {
      if (!this.el.body || guest.$)
        return;
      const speed = 250;
      const x = (Math.random() - 0.5) * speed, y = (Math.random() - 0.5) * speed, z = (Math.random() - 0.5) * speed;
      const force = new Ammo.btVector3(x, y, z);
      this.el.body.applyForce(force);
      const torq = new Ammo.btVector3(x * 0.2, y * 0.2, z * 0.2);
      this.el.body.applyTorque(torq);
      this.el.body.activate();
      Ammo.destroy(force);
      Ammo.destroy(torq);
      if (this.el.components.avatar) {
        this.avatar();
      }
    },
    avatar() {
      this.el.components.avatar?.doUse();
    }
  });

  // src/sound/plush.ts
  var sfx_squeek = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": -0.03825496773355172,
    "p_env_sustain": 0.2712243258639075,
    "p_env_punch": -0.040620749955223676,
    "p_env_decay": 0.08717376043129219,
    "p_base_freq": 0.5991919454359508,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.12899175352157,
    "p_freq_dramp": -0.2047203643716314,
    "p_vib_strength": -0.03986261619061358,
    "p_vib_speed": -0.11749563502028569,
    "p_arp_mod": 0.007946087450328324,
    "p_arp_speed": 0.08232690976131513,
    "p_duty": 0.18540096796064842,
    "p_duty_ramp": 0.08576715780609281,
    "p_repeat_speed": 0.08007409543733945,
    "p_pha_offset": -0.11110279223654707,
    "p_pha_ramp": -0.05729119776895752,
    "p_lpf_freq": 1.0702826743407952,
    "p_lpf_ramp": 0.027317809739609497,
    "p_lpf_resonance": 0.03217976614080667,
    "p_hpf_freq": -0.061780063423290135,
    "p_hpf_ramp": 0.05994838413016637,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8,
    "p_vib_delay": null
  });

  // src/sound/material.ts
  var sfx_wood = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.17376130068206297,
    "p_env_sustain": 0.006303938426766295,
    "p_env_punch": 0,
    "p_env_decay": 0.06192324654181807,
    "p_base_freq": 0.9472372633910334,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.5406430983069259,
    "p_freq_dramp": 0,
    "p_vib_strength": 0,
    "p_vib_speed": 0,
    "p_arp_mod": 0,
    "p_arp_speed": 0,
    "p_duty": 0,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0.9682005530613256,
    "p_hpf_ramp": 0,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/sound/animals.ts
  var sfx_cat = stringify({
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": 0.41762676199321386,
    "p_env_sustain": 0.472018557677806,
    "p_env_punch": 0.2223574906291296,
    "p_env_decay": -0.24948129831117205,
    "p_base_freq": -0.3152087399672988,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.2945332953062531,
    "p_freq_dramp": -0.9606932000625092,
    "p_vib_strength": 100667591679878e-18,
    "p_vib_speed": -0.8152355840444634,
    "p_arp_mod": 0.532823873640992,
    "p_arp_speed": -0.3709213297574965,
    "p_duty": 0.33091534100845577,
    "p_duty_ramp": 0.062061657847819945,
    "p_repeat_speed": 0.6973355722504344,
    "p_pha_offset": -0.4335518761438936,
    "p_pha_ramp": 0.028460506087941397,
    "p_lpf_freq": 0.9999999799659793,
    "p_lpf_ramp": 0.01677619904459581,
    "p_lpf_resonance": 0.004515281319145359,
    "p_hpf_freq": 3325274419334111e-19,
    "p_hpf_ramp": 7682252453488168e-19,
    "sound_vol": 0.1,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_bird = stringify({
    "oldParams": true,
    "wave_type": 2,
    "p_env_attack": -0.5984439330783985,
    "p_env_sustain": 0.9816371247911583,
    "p_env_punch": 5185768111939373e-19,
    "p_env_decay": 0.3161300993341185,
    "p_base_freq": 0.2085164499954622,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.04202073781268929,
    "p_freq_dramp": -0.024968588968825714,
    "p_vib_strength": 0.71946686722983,
    "p_vib_speed": -0.5121385075927258,
    "p_arp_mod": 0.528122886555956,
    "p_arp_speed": 0.025331920746700654,
    "p_duty": 0.9568794696039387,
    "p_duty_ramp": 0.023123884097627632,
    "p_repeat_speed": 0.36835431362974536,
    "p_pha_offset": 0.11057762324380299,
    "p_pha_ramp": 0.581189087185058,
    "p_lpf_freq": 0.10037433152407471,
    "p_lpf_ramp": 0.008331274115915104,
    "p_lpf_resonance": -0.9793191723490668,
    "p_hpf_freq": 0.13327861965545218,
    "p_hpf_ramp": 0.02163136268236316,
    "sound_vol": 0.1,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/sound/weird.ts
  var sfx_funky = stringify({
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": -0.9192406785662338,
    "p_env_sustain": 0.8010534562702957,
    "p_env_punch": 0.33640020691336436,
    "p_env_decay": 0.7541608973887692,
    "p_base_freq": 0.4778268792557094,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.01807016365681045,
    "p_freq_dramp": -0.23053964804425275,
    "p_vib_strength": -0.035193108942296256,
    "p_vib_speed": -0.6173866790069966,
    "p_arp_mod": -0.24148629623990026,
    "p_arp_speed": 0.09348043157023245,
    "p_duty": -0.8476723174997787,
    "p_duty_ramp": 0.7418831293476,
    "p_repeat_speed": -0.5016700309856787,
    "p_pha_offset": 0.06347777376403543,
    "p_pha_ramp": 0.6199262544128508,
    "p_lpf_freq": 0.8220941160909532,
    "p_lpf_ramp": -0.048203668173397995,
    "p_lpf_resonance": -0.5021904942920927,
    "p_hpf_freq": 9489111210711238e-21,
    "p_hpf_ramp": -9867947982253324e-21,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_creepy_laugh_tick = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": -0.3280457010891552,
    "p_env_sustain": 0.18434516844583157,
    "p_env_punch": 0.1632181482686918,
    "p_env_decay": 0.7231333979954346,
    "p_base_freq": 0.0036614800715226116,
    "p_freq_limit": 0,
    "p_freq_ramp": 3772633662265947e-19,
    "p_freq_dramp": 0.039931896414474484,
    "p_vib_strength": -0.0032388002229577556,
    "p_vib_speed": -0.6764823801076294,
    "p_arp_mod": -0.36383047415701286,
    "p_arp_speed": -0.5699637667613411,
    "p_duty": -0.8653626138729766,
    "p_duty_ramp": -55064010376876563e-21,
    "p_repeat_speed": -0.9577576633142213,
    "p_pha_offset": 0.07445202183803853,
    "p_pha_ramp": 13994162281422594e-21,
    "p_lpf_freq": 0.20836405197480867,
    "p_lpf_ramp": -0.004984808273603362,
    "p_lpf_resonance": 0.4958603109123527,
    "p_hpf_freq": 6800319932675319e-19,
    "p_hpf_ramp": 6786906281003671e-20,
    "sound_vol": 0.1,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_deep_robot = stringify({
    "oldParams": true,
    "wave_type": 2,
    "p_env_attack": 0.13791065496896482,
    "p_env_sustain": 0.8782510573096332,
    "p_env_punch": 0.5894573359656802,
    "p_env_decay": -0.33016079468034853,
    "p_base_freq": 0.4939626076905844,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.8669933002114877,
    "p_freq_dramp": 0.005621616358800546,
    "p_vib_strength": -0.3006963873236229,
    "p_vib_speed": 0.47746016771907973,
    "p_arp_mod": -0.45092510168698974,
    "p_arp_speed": 0.3441518866024431,
    "p_duty": -0.19332124097437786,
    "p_duty_ramp": 5677424774126971e-23,
    "p_repeat_speed": 0.7546041229369478,
    "p_pha_offset": -0.5188355034406639,
    "p_pha_ramp": 0.6510303165357664,
    "p_lpf_freq": 0.9998826327152541,
    "p_lpf_ramp": -16303662090782825e-20,
    "p_lpf_resonance": 0.6444231032262433,
    "p_hpf_freq": 0.00567599784279786,
    "p_hpf_ramp": -0.20269131042924488,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/sound/instrument.ts
  var sfx_flute = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.14288772521725981,
    "p_env_sustain": 0.18947118560584877,
    "p_env_punch": 0.5333044335665993,
    "p_env_decay": 0.09659737108218491,
    "p_base_freq": 0.9026222794210492,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.42397347917953465,
    "p_freq_dramp": 0,
    "p_vib_strength": 0.4563193465356852,
    "p_vib_speed": 0.4239749801602483,
    "p_arp_mod": 0.5993362888774147,
    "p_arp_speed": 0.7955386638193522,
    "p_duty": 0,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0.9733010009859232,
    "p_hpf_ramp": 0,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/sound/environmental.ts
  var sfx_ocean_wave = stringify({
    "oldParams": true,
    "wave_type": 3,
    "p_env_attack": 0.5556760006828355,
    "p_env_sustain": 0.0337208705378243,
    "p_env_punch": 0.06661310825440675,
    "p_env_decay": 0.8498426503604288,
    "p_base_freq": 0.9336514314190918,
    "p_freq_limit": 0,
    "p_freq_ramp": -17317990742389828e-21,
    "p_freq_dramp": 0.04003199770035713,
    "p_vib_strength": -0.3600218278439513,
    "p_vib_speed": -0.4889315012844966,
    "p_arp_mod": -0.2665171765520853,
    "p_arp_speed": -0.9920057551923653,
    "p_duty": 0.38330803386598156,
    "p_duty_ramp": 0.12730858247054855,
    "p_repeat_speed": 0.34667549901553274,
    "p_pha_offset": -0.3636143446485891,
    "p_pha_ramp": 0.5112956082917978,
    "p_lpf_freq": 0.9973218412320243,
    "p_lpf_ramp": -0.02053721923090333,
    "p_lpf_resonance": 0.29761507388543107,
    "p_hpf_freq": 1788922983255846e-19,
    "p_hpf_ramp": -4931163108983139e-22,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_bubbles = stringify({
    "oldParams": true,
    "wave_type": 2,
    "p_env_attack": -0.001047877761309565,
    "p_env_sustain": 0.5825408213939561,
    "p_env_punch": 0.14551201868101102,
    "p_env_decay": -0.13135600427017202,
    "p_base_freq": 0.5005093783041626,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.42089033621230576,
    "p_freq_dramp": 0.5668927454485396,
    "p_vib_strength": 0.13890013287095082,
    "p_vib_speed": -0.37140865783113775,
    "p_arp_mod": 0.3700817196216195,
    "p_arp_speed": -0.31951664985817496,
    "p_duty": 0.8720197508573864,
    "p_duty_ramp": 0.1053883413465776,
    "p_repeat_speed": 0.5381880098433642,
    "p_pha_offset": -0.11451660257829079,
    "p_pha_ramp": 0.008796888807675013,
    "p_lpf_freq": 0.9994682075523775,
    "p_lpf_ramp": -0.5683664028398049,
    "p_lpf_resonance": 0.13760483696935344,
    "p_hpf_freq": 0.060553421934612904,
    "p_hpf_ramp": 2663055589996638e-19,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_alarm = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": 6407867872972012e-19,
    "p_env_sustain": 0.5604569249692155,
    "p_env_punch": 0.006296067388581809,
    "p_env_decay": -0.12982588235622305,
    "p_base_freq": 0.3389248631302222,
    "p_freq_limit": 0,
    "p_freq_ramp": 0.0987084432186084,
    "p_freq_dramp": -0.10579158281178329,
    "p_vib_strength": 0.030389567430492776,
    "p_vib_speed": -0.8373535582380898,
    "p_arp_mod": 0.7643785950762751,
    "p_arp_speed": 0.3531810812184384,
    "p_duty": -0.425461327242437,
    "p_duty_ramp": -0.28092844687804946,
    "p_repeat_speed": -0.015469928887706264,
    "p_pha_offset": -0.5804150251251793,
    "p_pha_ramp": -0.9672528515967128,
    "p_lpf_freq": 0.7821283398835585,
    "p_lpf_ramp": 0.05562932382025703,
    "p_lpf_resonance": 0.29361407117304816,
    "p_hpf_freq": 0.03439469651553264,
    "p_hpf_ramp": -17874798680698258e-20,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/node/forest.svelte
  function create_fragment5(ctx) {
    let a_mixin0;
    let t0;
    let a_mixin1;
    let t1;
    let a_mixin2;
    let t2;
    let a_mixin3;
    let t3;
    let a_mixin4;
    let t4;
    let a_mixin5;
    let t5;
    let a_mixin6;
    let a_mixin6_ring_value;
    let t6;
    let a_entity0;
    let t7;
    let a_mixin7;
    let t8;
    let a_entity1;
    let t9;
    let a_entity2;
    let t10;
    let a_mixin8;
    let t11;
    let a_entity3;
    let t12;
    let a_entity4;
    let t13;
    let a_entity5;
    let t14;
    let a_entity6;
    let t15;
    let a_mixin9;
    let t16;
    let a_mixin10;
    let t17;
    let a_mixin11;
    let t18;
    let a_mixin12;
    let t19;
    let a_entity7;
    let t20;
    let a_entity8;
    let t21;
    let a_entity9;
    let t22;
    let a_entity10;
    let t23;
    let a_mixin13;
    let t24;
    let a_entity11;
    let t25;
    let a_mixin14;
    let t26;
    let a_entity12;
    let t27;
    let a_mixin15;
    let t28;
    let a_entity13;
    let a_mixin7_levels = [
      { id: "tree" },
      { target: "\u{1F332}" },
      { class: "climbable env" },
      { tag__env: "" },
      { shadow: "receive: false" },
      { windy: "" },
      { sfxr__use: sfx_wood },
      { sfxr__bump: sfx_wood },
      { "gltf-model": "./glb/tree.glb" },
      { scatter: ctx[0] },
      {
        vary: "property: scale; range: 4 2 4 8 10 8"
      },
      ctx[1],
      { host: "" }
    ];
    let a_mixin7_data = {};
    for (let i = 0; i < a_mixin7_levels.length; i += 1) {
      a_mixin7_data = assign(a_mixin7_data, a_mixin7_levels[i]);
    }
    let a_mixin13_levels = [
      { id: "trunk" },
      ctx[2],
      { "gltf-model": "./glb/trunk.glb" },
      { tag__env: "" },
      { vary: trunkVary },
      { sfxr__bump: sfx_bubbles },
      { target: "\u{1FAB5}" },
      { scatter: ctx[0] }
    ];
    let a_mixin13_data = {};
    for (let i = 0; i < a_mixin13_levels.length; i += 1) {
      a_mixin13_data = assign(a_mixin13_data, a_mixin13_levels[i]);
    }
    let a_mixin14_levels = [
      { id: "trunkLong" },
      { target: "\u{1FAB5}" },
      ctx[2],
      { sfxr__bump: sfx_creepy_laugh_tick },
      { "gltf-model": "./glb/trunkLong.glb" },
      { vary: trunkVary },
      { scatter: ctx[0] }
    ];
    let a_mixin14_data = {};
    for (let i = 0; i < a_mixin14_levels.length; i += 1) {
      a_mixin14_data = assign(a_mixin14_data, a_mixin14_levels[i]);
    }
    let a_mixin15_levels = [
      { id: "pillarObelisk" },
      { "gltf-model": "./glb/pillarObelisk.glb" },
      ctx[2],
      { vary: trunkVary },
      { scatter: ctx[0] },
      { tag__env: "" },
      { target: "\u26E9\uFE0F" },
      { sfxr__bump: sfx_cat }
    ];
    let a_mixin15_data = {};
    for (let i = 0; i < a_mixin15_levels.length; i += 1) {
      a_mixin15_data = assign(a_mixin15_data, a_mixin15_levels[i]);
    }
    return {
      c() {
        a_mixin0 = element("a-mixin");
        t0 = space();
        a_mixin1 = element("a-mixin");
        t1 = space();
        a_mixin2 = element("a-mixin");
        t2 = space();
        a_mixin3 = element("a-mixin");
        t3 = space();
        a_mixin4 = element("a-mixin");
        t4 = space();
        a_mixin5 = element("a-mixin");
        t5 = space();
        a_mixin6 = element("a-mixin");
        t6 = space();
        a_entity0 = element("a-entity");
        t7 = space();
        a_mixin7 = element("a-mixin");
        t8 = space();
        a_entity1 = element("a-entity");
        t9 = space();
        a_entity2 = element("a-entity");
        t10 = space();
        a_mixin8 = element("a-mixin");
        t11 = space();
        a_entity3 = element("a-entity");
        t12 = space();
        a_entity4 = element("a-entity");
        t13 = space();
        a_entity5 = element("a-entity");
        t14 = space();
        a_entity6 = element("a-entity");
        t15 = space();
        a_mixin9 = element("a-mixin");
        t16 = space();
        a_mixin10 = element("a-mixin");
        t17 = space();
        a_mixin11 = element("a-mixin");
        t18 = space();
        a_mixin12 = element("a-mixin");
        t19 = space();
        a_entity7 = element("a-entity");
        t20 = space();
        a_entity8 = element("a-entity");
        t21 = space();
        a_entity9 = element("a-entity");
        t22 = space();
        a_entity10 = element("a-entity");
        t23 = space();
        a_mixin13 = element("a-mixin");
        t24 = space();
        a_entity11 = element("a-entity");
        t25 = space();
        a_mixin14 = element("a-mixin");
        t26 = space();
        a_entity12 = element("a-entity");
        t27 = space();
        a_mixin15 = element("a-mixin");
        t28 = space();
        a_entity13 = element("a-entity");
        set_custom_element_data(a_mixin0, "id", "smolitem");
        set_custom_element_data(a_mixin0, "tag__env", "");
        set_custom_element_data(a_mixin0, "sfxr__bump", sfx_shthump);
        set_custom_element_data(a_mixin0, "ammo-body", "type: static; mass: 0;");
        set_custom_element_data(a_mixin0, "ammo-shape", "type: sphere; fit: manual; sphereRadius: 1;");
        set_custom_element_data(a_mixin1, "id", "smolfix");
        set_custom_element_data(a_mixin1, "ammo-shape", "offset: -1.85 0 0.85;");
        set_custom_element_data(a_mixin2, "id", "flowers");
        set_custom_element_data(a_mixin2, "mixin", "smolitem smolfix");
        set_custom_element_data(a_mixin2, "shadow", "");
        set_custom_element_data(a_mixin2, "tag__env", "");
        set_custom_element_data(a_mixin2, "target", "\u{1F33A}");
        set_custom_element_data(a_mixin2, "gltf-model", "./glb/flowers.glb");
        set_custom_element_data(a_mixin2, "windy", "");
        set_custom_element_data(a_mixin2, "scatter", ctx[0]);
        set_custom_element_data(a_mixin2, "vary", vary);
        set_custom_element_data(a_mixin2, "host", "flowers");
        set_custom_element_data(a_mixin3, "id", "mushroom");
        set_custom_element_data(a_mixin3, "target", "\u{1F344}");
        set_custom_element_data(a_mixin3, "mixin", "smolitem smolfix");
        set_custom_element_data(a_mixin3, "shadow", "");
        set_custom_element_data(a_mixin3, "tag__env", "");
        set_custom_element_data(a_mixin3, "gltf-model", "./glb/mushrooms.glb");
        set_custom_element_data(a_mixin3, "windy", "");
        set_custom_element_data(a_mixin3, "scatter", ctx[0]);
        set_custom_element_data(a_mixin3, "vary", vary);
        set_custom_element_data(a_mixin3, "host", "mushroom");
        set_custom_element_data(a_mixin4, "id", "flowersLow");
        set_custom_element_data(a_mixin4, "target", "\u{1F339}");
        set_custom_element_data(a_mixin4, "tag__env", "");
        set_custom_element_data(a_mixin4, "mixin", "smolitem smolfix");
        set_custom_element_data(a_mixin4, "shadow", "");
        set_custom_element_data(a_mixin4, "gltf-model", "./glb/flowersLow.glb");
        set_custom_element_data(a_mixin4, "windy", "");
        set_custom_element_data(a_mixin4, "scatter", ctx[0]);
        set_custom_element_data(a_mixin4, "vary", vary);
        set_custom_element_data(a_mixin4, "host", "flowersLow");
        set_custom_element_data(a_mixin5, "id", "rock");
        set_custom_element_data(a_mixin5, "shadow", "");
        set_custom_element_data(a_mixin5, "target", "\u{1FAA8}");
        set_custom_element_data(a_mixin5, "tag__env", "");
        set_custom_element_data(a_mixin5, "vary", "property: scale; range: 0.5 0.25 0.5 2 1 2");
        set_custom_element_data(a_mixin5, "scatter", ctx[0]);
        set_custom_element_data(a_mixin5, "sfxr__use", sfx_bump);
        set_custom_element_data(a_mixin5, "sfxr__bump", sfx_bump);
        set_custom_element_data(a_mixin5, "gltf-model", "./glb/rockB.glb");
        set_custom_element_data(a_mixin5, "ammo-body", "type: static; mass: 0");
        set_custom_element_data(a_mixin5, "host", "");
        set_custom_element_data(a_mixin5, "ammo-shape", "type: sphere; fit: manual; sphereRadius: 1.5 ");
        set_custom_element_data(a_mixin6, "id", "mountains");
        set_custom_element_data(a_mixin6, "shadow", "");
        set_custom_element_data(a_mixin6, "host", "");
        set_custom_element_data(a_mixin6, "gltf-model", "./glb/rockC.glb");
        set_custom_element_data(a_mixin6, "ring", a_mixin6_ring_value = "radius: " + groundSize * 0.7 + "; count: 50");
        set_custom_element_data(a_mixin6, "ammo-body", "type: static; mass: 0;");
        set_custom_element_data(a_mixin6, "vary", "property: scale; range: 12 2 12 15 20 15");
        set_custom_element_data(a_mixin6, "ammo-shape", "type: box;fit: manual; halfExtents:15 7.5 15; offset: 0 7.5 0");
        set_custom_element_data(a_entity0, "pool__mountains", "mixin: mountains; size: 50");
        set_custom_element_data(a_entity0, "activate__mountains", "");
        set_attributes(a_mixin7, a_mixin7_data);
        set_custom_element_data(a_entity1, "pool__tree", "mixin: tree; size: 150");
        set_custom_element_data(a_entity1, "activate__tree", "");
        set_custom_element_data(a_entity2, "pool__mushroom", "mixin: mushroom; size: 20");
        set_custom_element_data(a_entity2, "activate__mushroom", "");
        set_custom_element_data(a_mixin8, "id", "grass");
        set_custom_element_data(a_mixin8, "windy", "");
        set_custom_element_data(a_mixin8, "mixin", "smolitem");
        set_custom_element_data(a_mixin8, "gltf-model", "./glb/grass.glb");
        set_custom_element_data(a_mixin8, "shadow", "");
        set_custom_element_data(a_mixin8, "tag__env", "");
        set_custom_element_data(a_mixin8, "target", "\u{1F33F}");
        set_custom_element_data(a_mixin8, "scatter", ctx[0]);
        set_custom_element_data(a_mixin8, "host", "grass");
        set_custom_element_data(a_mixin8, "vary", "property: scale; range: 1 0.5 1 1.5 1.5 1.5");
        set_custom_element_data(a_entity3, "pool__grass", "mixin: grass; size: 50");
        set_custom_element_data(a_entity3, "activate__grass", "");
        set_custom_element_data(a_entity4, "pool__rock", "mixin: rock; size: 50");
        set_custom_element_data(a_entity4, "activate__rock", "");
        set_custom_element_data(a_entity5, "pool__flowers", "mixin: flowers; size: 50");
        set_custom_element_data(a_entity5, "activate__flowers", "");
        set_custom_element_data(a_entity6, "pool__flowerslow", "mixin: flowersLow; size: 50");
        set_custom_element_data(a_entity6, "activate__flowerslow", "");
        set_custom_element_data(a_mixin9, "id", "animal");
        set_custom_element_data(a_mixin9, "gltf-model", "./char/Horse.glb");
        set_custom_element_data(a_mixin9, "ammo-body", "type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.98;angularFactor: 0 1 0;");
        set_custom_element_data(a_mixin9, "scale", "0.35 0.35 0.35");
        set_custom_element_data(a_mixin9, "ammo-shape", "type: capsule; fit: manual; halfExtents: 0.6 0.4 0.2; cylinderAxis: z; offset: 0 0.6 0");
        set_custom_element_data(a_mixin9, "shadow", "cast: true; receive: false;");
        set_custom_element_data(a_mixin9, "alive", "type: random;");
        set_custom_element_data(a_mixin9, "motion-events", "");
        set_custom_element_data(a_mixin9, "gltf-events", "");
        set_custom_element_data(a_mixin9, "target", "\u{1F40E}");
        set_custom_element_data(a_mixin9, "material", "shader: flat;");
        set_custom_element_data(a_mixin9, "host", "horse");
        set_custom_element_data(a_mixin9, "sfxr__use", sfx_squeek);
        set_custom_element_data(a_mixin9, "sfxr__bump", sfx_squeek);
        set_custom_element_data(a_mixin9, "scatter", ctx[0]);
        set_custom_element_data(a_mixin10, "id", "sheep");
        set_custom_element_data(a_mixin10, "host", "sheep");
        set_custom_element_data(a_mixin10, "gltf-model", "./char/Sheep.glb");
        set_custom_element_data(a_mixin10, "target", "\u{1F411}");
        set_custom_element_data(a_mixin11, "id", "cow");
        set_custom_element_data(a_mixin11, "host", "cow");
        set_custom_element_data(a_mixin11, "gltf-model", "./char/Cow.glb");
        set_custom_element_data(a_mixin11, "target", "\u{1F404}");
        set_custom_element_data(a_mixin12, "id", "frog");
        set_custom_element_data(a_mixin12, "host", "frog");
        set_custom_element_data(a_mixin12, "gltf-model", "./char/easy_Frog.glb");
        set_custom_element_data(a_mixin12, "target", "\u{1F438}");
        set_custom_element_data(a_mixin12, "color", "white");
        set_custom_element_data(a_entity7, "pool__horse", "mixin: animal; size: 5;");
        set_custom_element_data(a_entity7, "activate__horse", "");
        set_custom_element_data(a_entity8, "pool__sheep", "mixin: animal sheep; size: 5;");
        set_custom_element_data(a_entity8, "activate__sheep", "");
        set_custom_element_data(a_entity9, "pool__animal", "mixin: animal cow; size: 5;");
        set_custom_element_data(a_entity9, "activate__animal", "");
        set_custom_element_data(a_entity10, "pool__animal", "mixin: animal frog; size: 5;");
        set_custom_element_data(a_entity10, "activate__animal", "");
        set_attributes(a_mixin13, a_mixin13_data);
        set_custom_element_data(a_entity11, "pool__trunk", "mixin: trunk; size: 20");
        set_custom_element_data(a_entity11, "activate__trunk", "");
        set_attributes(a_mixin14, a_mixin14_data);
        set_custom_element_data(a_entity12, "pool__trunklong", "mixin: trunkLong; size: 20");
        set_custom_element_data(a_entity12, "activate__trunklong", "");
        set_attributes(a_mixin15, a_mixin15_data);
        set_custom_element_data(a_entity13, "pool__pillarobelisk", "mixin: pillarObelisk; size: 10");
        set_custom_element_data(a_entity13, "activate__pillarobelisk", "");
      },
      m(target, anchor) {
        insert(target, a_mixin0, anchor);
        insert(target, t0, anchor);
        insert(target, a_mixin1, anchor);
        insert(target, t1, anchor);
        insert(target, a_mixin2, anchor);
        insert(target, t2, anchor);
        insert(target, a_mixin3, anchor);
        insert(target, t3, anchor);
        insert(target, a_mixin4, anchor);
        insert(target, t4, anchor);
        insert(target, a_mixin5, anchor);
        insert(target, t5, anchor);
        insert(target, a_mixin6, anchor);
        insert(target, t6, anchor);
        insert(target, a_entity0, anchor);
        insert(target, t7, anchor);
        insert(target, a_mixin7, anchor);
        insert(target, t8, anchor);
        insert(target, a_entity1, anchor);
        insert(target, t9, anchor);
        insert(target, a_entity2, anchor);
        insert(target, t10, anchor);
        insert(target, a_mixin8, anchor);
        insert(target, t11, anchor);
        insert(target, a_entity3, anchor);
        insert(target, t12, anchor);
        insert(target, a_entity4, anchor);
        insert(target, t13, anchor);
        insert(target, a_entity5, anchor);
        insert(target, t14, anchor);
        insert(target, a_entity6, anchor);
        insert(target, t15, anchor);
        insert(target, a_mixin9, anchor);
        insert(target, t16, anchor);
        insert(target, a_mixin10, anchor);
        insert(target, t17, anchor);
        insert(target, a_mixin11, anchor);
        insert(target, t18, anchor);
        insert(target, a_mixin12, anchor);
        insert(target, t19, anchor);
        insert(target, a_entity7, anchor);
        insert(target, t20, anchor);
        insert(target, a_entity8, anchor);
        insert(target, t21, anchor);
        insert(target, a_entity9, anchor);
        insert(target, t22, anchor);
        insert(target, a_entity10, anchor);
        insert(target, t23, anchor);
        insert(target, a_mixin13, anchor);
        insert(target, t24, anchor);
        insert(target, a_entity11, anchor);
        insert(target, t25, anchor);
        insert(target, a_mixin14, anchor);
        insert(target, t26, anchor);
        insert(target, a_entity12, anchor);
        insert(target, t27, anchor);
        insert(target, a_mixin15, anchor);
        insert(target, t28, anchor);
        insert(target, a_entity13, anchor);
      },
      p(ctx2, [dirty]) {
        set_attributes(a_mixin7, a_mixin7_data = get_spread_update(a_mixin7_levels, [
          { id: "tree" },
          { target: "\u{1F332}" },
          { class: "climbable env" },
          { tag__env: "" },
          { shadow: "receive: false" },
          { windy: "" },
          { sfxr__use: sfx_wood },
          { sfxr__bump: sfx_wood },
          { "gltf-model": "./glb/tree.glb" },
          { scatter: ctx2[0] },
          {
            vary: "property: scale; range: 4 2 4 8 10 8"
          },
          ctx2[1],
          { host: "" }
        ]));
        set_attributes(a_mixin13, a_mixin13_data = get_spread_update(a_mixin13_levels, [
          { id: "trunk" },
          ctx2[2],
          { "gltf-model": "./glb/trunk.glb" },
          { tag__env: "" },
          { vary: trunkVary },
          { sfxr__bump: sfx_bubbles },
          { target: "\u{1FAB5}" },
          { scatter: ctx2[0] }
        ]));
        set_attributes(a_mixin14, a_mixin14_data = get_spread_update(a_mixin14_levels, [
          { id: "trunkLong" },
          { target: "\u{1FAB5}" },
          ctx2[2],
          { sfxr__bump: sfx_creepy_laugh_tick },
          { "gltf-model": "./glb/trunkLong.glb" },
          { vary: trunkVary },
          { scatter: ctx2[0] }
        ]));
        set_attributes(a_mixin15, a_mixin15_data = get_spread_update(a_mixin15_levels, [
          { id: "pillarObelisk" },
          { "gltf-model": "./glb/pillarObelisk.glb" },
          ctx2[2],
          { vary: trunkVary },
          { scatter: ctx2[0] },
          { tag__env: "" },
          { target: "\u26E9\uFE0F" },
          { sfxr__bump: sfx_cat }
        ]));
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a_mixin0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a_mixin1);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(a_mixin2);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(a_mixin3);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(a_mixin4);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(a_mixin5);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(a_mixin6);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(a_entity0);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(a_mixin7);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(a_entity1);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(a_entity2);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(a_mixin8);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(a_entity3);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(a_entity4);
        if (detaching)
          detach(t13);
        if (detaching)
          detach(a_entity5);
        if (detaching)
          detach(t14);
        if (detaching)
          detach(a_entity6);
        if (detaching)
          detach(t15);
        if (detaching)
          detach(a_mixin9);
        if (detaching)
          detach(t16);
        if (detaching)
          detach(a_mixin10);
        if (detaching)
          detach(t17);
        if (detaching)
          detach(a_mixin11);
        if (detaching)
          detach(t18);
        if (detaching)
          detach(a_mixin12);
        if (detaching)
          detach(t19);
        if (detaching)
          detach(a_entity7);
        if (detaching)
          detach(t20);
        if (detaching)
          detach(a_entity8);
        if (detaching)
          detach(t21);
        if (detaching)
          detach(a_entity9);
        if (detaching)
          detach(t22);
        if (detaching)
          detach(a_entity10);
        if (detaching)
          detach(t23);
        if (detaching)
          detach(a_mixin13);
        if (detaching)
          detach(t24);
        if (detaching)
          detach(a_entity11);
        if (detaching)
          detach(t25);
        if (detaching)
          detach(a_mixin14);
        if (detaching)
          detach(t26);
        if (detaching)
          detach(a_entity12);
        if (detaching)
          detach(t27);
        if (detaching)
          detach(a_mixin15);
        if (detaching)
          detach(t28);
        if (detaching)
          detach(a_entity13);
      }
    };
  }
  var groundSize = 200;
  var vary = "property: scale; range: 1.5 1.25 1.5 3 2 3";
  var trunkVary = "property:scale; range: 2 1 2 5 2 5";
  function instance5($$self) {
    const scatter = [-groundSize / 2, 0, -groundSize / 2, groundSize / 2, 0, groundSize / 2].join(" ");
    const boxBlocker = {
      "ammo-body": "type: static; mass: 0;",
      "ammo-shape": "type: box; fit: manual; halfExtents: 1 2.5 1; offset: 0 2.5 0"
    };
    const smolBoxBlocker = {
      "ammo-body": "type: static; mass: 0;",
      "ammo-shape": "type: box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: 0 0 0"
    };
    return [scatter, boxBlocker, smolBoxBlocker];
  }
  var Forest = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance5, create_fragment5, safe_not_equal, {});
    }
  };
  var forest_default = Forest;

  // src/ui/live.svelte
  function create_fragment6(ctx) {
    let div;
    let div_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        attr(div, "class", div_class_value = "action " + (ctx[0] ? "live" : "") + " " + (ctx[1] ? "mobile" : "") + " svelte-1pri5vm");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if (!mounted) {
          dispose = listen(div, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 3 && div_class_value !== (div_class_value = "action " + (ctx2[0] ? "live" : "") + " " + (ctx2[1] ? "mobile" : "") + " svelte-1pri5vm")) {
          attr(div, "class", div_class_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function instance6($$self, $$props, $$invalidate) {
    let $open_live;
    let $ismobile;
    component_subscribe($$self, open_live, ($$value) => $$invalidate(0, $open_live = $$value));
    component_subscribe($$self, ismobile, ($$value) => $$invalidate(1, $ismobile = $$value));
    const click_handler = () => {
      open_live.set(!open_live.$);
    };
    return [$open_live, $ismobile, click_handler];
  }
  var Live = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment6, safe_not_equal, {});
    }
  };
  var live_default = Live;

  // src/node/debug.svelte
  var Debug = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, null, safe_not_equal, {});
    }
  };
  var debug_default = Debug;

  // src/component/grid.ts
  AFRAME.registerComponent("grid", {
    schema: {
      width: { type: "number", default: 1 },
      length: { type: "number", default: 1 },
      spacing: { type: "number", default: 1 },
      fill: { type: "bool", default: false }
    },
    init() {
      const d = this.el.object3D.parent.userData;
      if (this.data.fill) {
        const i = (d.ringDex === void 0 ? d.ringDex = 0 : d.ringDex++) % (this.data.width * this.data.length);
        this.el.object3D.position.set(i % this.data.width - this.data.width / 2, 0, Math.floor(i / this.data.width) - this.data.length / 2).multiplyScalar(this.data.spacing);
      } else {
        const i = (d.ringDex === void 0 ? d.ringDex = 0 : d.ringDex++) % (this.data.width * 2 + this.data.length * 2);
        this.el.object3D.position.set(i % (this.data.width * 2) - this.data.width, 0, Math.floor(i / (this.data.width * 2)) - this.data.length).multiplyScalar(this.data.spacing);
      }
    }
  });

  // src/component/recolor.ts
  AFRAME.registerComponent("recolor", {
    multiple: true,
    schema: {
      type: "color",
      default: "#0F0"
    },
    init() {
      this.el.addEventListener("model-loaded", this.loaded = this.loaded.bind(this));
    },
    update() {
      if (this.e) {
        this.loaded(this.e);
      }
    },
    remove() {
      this.el.removeEventListener("model-loaded", this.loaded);
    },
    loaded(e) {
      this.e = e;
      e.detail.model.traverse((o) => {
        if (o.isMesh) {
          o.material.roughness = 1;
          o.material.metalness = 0;
          if (this.id === "" || o.material.name.toLowerCase().includes(this.id)) {
            o.material.color.set(this.data);
            o.material.needsUpdate = true;
          }
        }
      });
    }
  });

  // src/node/house.svelte
  function create_fragment7(ctx) {
    let a_entity0;
    let t0;
    let a_mixin0;
    let t1;
    let a_entity1;
    let a_entity1_location_value;
    let t2;
    let a_entity2;
    let t3;
    let a_entity3;
    let t4;
    let a_entity4;
    let t5;
    let a_entity5;
    let t6;
    let a_entity6;
    let t7;
    let a_entity7;
    let t8;
    let a_entity8;
    let t9;
    let a_entity9;
    let t10;
    let a_entity10;
    let t11;
    let a_entity11;
    let t12;
    let a_mixin1;
    let t13;
    let a_entity12;
    let t14;
    let a_entity13;
    let mounted;
    let dispose;
    return {
      c() {
        a_entity0 = element("a-entity");
        t0 = space();
        a_mixin0 = element("a-mixin");
        t1 = space();
        a_entity1 = element("a-entity");
        t2 = space();
        a_entity2 = element("a-entity");
        t3 = space();
        a_entity3 = element("a-entity");
        t4 = space();
        a_entity4 = element("a-entity");
        t5 = space();
        a_entity5 = element("a-entity");
        t6 = space();
        a_entity6 = element("a-entity");
        t7 = space();
        a_entity7 = element("a-entity");
        t8 = space();
        a_entity8 = element("a-entity");
        t9 = space();
        a_entity9 = element("a-entity");
        t10 = space();
        a_entity10 = element("a-entity");
        t11 = space();
        a_entity11 = element("a-entity");
        t12 = space();
        a_mixin1 = element("a-mixin");
        t13 = space();
        a_entity12 = element("a-entity");
        t14 = space();
        a_entity13 = element("a-entity");
        set_custom_element_data(a_entity0, "class", "loot drop");
        set_custom_element_data(a_entity0, "pool__dagger", "mixin: dagger; size: 5;");
        set_custom_element_data(a_entity0, "activate__dagger", "");
        set_custom_element_data(a_entity0, "pool__item", "mixin: chest; size: 3;");
        set_custom_element_data(a_entity0, "activate__item", "");
        set_custom_element_data(a_entity0, "pool__bow", "mixin: bow; size: 5;");
        set_custom_element_data(a_entity0, "activate__bow", "");
        set_custom_element_data(a_entity0, "pool__arrow", "mixin: arrow; size: 5;");
        set_custom_element_data(a_entity0, "activate__arrow", "");
        set_custom_element_data(a_entity0, "pool__barrel", "mixin: barrel; size: 1;");
        set_custom_element_data(a_entity0, "activate__barrel", "");
        set_custom_element_data(a_entity0, "pool__crate", "mixin: crate; size: 5;");
        set_custom_element_data(a_entity0, "activate__crate", "");
        set_custom_element_data(a_entity0, "position", "0 4 0");
        set_custom_element_data(a_mixin0, "id", "wall");
        set_custom_element_data(a_mixin0, "ammo-body", "type: static; mass: 0; ");
        set_custom_element_data(a_mixin0, "ammo-shape", "type: box; fit: manual; half-extents: 5 4 1.5; offset: 0 0.5 0.5;");
        set_custom_element_data(a_mixin0, "geometry", "");
        set_custom_element_data(a_mixin0, "scale", "10 4 10");
        set_custom_element_data(a_mixin0, "shadow", "receive: false");
        set_custom_element_data(a_entity1, "id", "ground");
        set_custom_element_data(a_entity1, "geometry", "");
        set_custom_element_data(a_entity1, "material", "color: #281b0d;");
        set_custom_element_data(a_entity1, "ammo-body", "type: kinematic; collisionFilterGroup: 1;  collisionFilterMask:1; disableCollision: true; mass: 0; emitCollisionEvents: true; scaleAutoUpdate: false");
        set_custom_element_data(a_entity1, "ammo-shape", "type: box; fit: manual; half-extents: 10 0.2 10; ");
        set_custom_element_data(a_entity1, "shadow", "");
        set_custom_element_data(a_entity1, "scale", "20 0.1 20");
        set_custom_element_data(a_entity1, "position", "0 0 0");
        set_custom_element_data(a_entity1, "location", a_entity1_location_value = "name: \u{1F6D6}; box:" + -15 + " 0 " + -15 + " " + 15 + " 30 " + 15);
        set_custom_element_data(a_entity2, "mixin", "wall");
        set_custom_element_data(a_entity2, "gltf-model", "./glb/cabinWindow.glb");
        set_custom_element_data(a_entity2, "position", "0 0 -5");
        set_custom_element_data(a_entity3, "mixin", "wall");
        set_custom_element_data(a_entity3, "gltf-model", "./glb/cabinWindow.glb");
        set_custom_element_data(a_entity3, "position", "0 0 5");
        set_custom_element_data(a_entity4, "mixin", "wall");
        set_custom_element_data(a_entity4, "gltf-model", "./glb/cabinDoor.glb");
        set_custom_element_data(a_entity4, "rotation", "0 90 0");
        set_custom_element_data(a_entity4, "position", "-5 0 0");
        set_custom_element_data(a_entity4, "ammo-shape", "type: box; fit: manual; half-extents: 2 4 1; offset: -4 0.5 0.5;");
        set_custom_element_data(a_entity5, "mixin", "wall");
        set_custom_element_data(a_entity5, "rotation", "0 90 0");
        set_custom_element_data(a_entity5, "position", "-5 0 0");
        set_custom_element_data(a_entity5, "material", "visible: false;");
        set_custom_element_data(a_entity5, "ammo-shape", "type: box; fit: manual; half-extents: 2 4 1; offset: 4 0.5 0.5;");
        set_custom_element_data(a_entity6, "mixin", "wall");
        set_custom_element_data(a_entity6, "gltf-model", "./glb/cabinWindow.glb");
        set_custom_element_data(a_entity6, "rotation", "0 90 0");
        set_custom_element_data(a_entity6, "position", "5 0 0");
        set_custom_element_data(a_entity7, "shadow", "");
        set_custom_element_data(a_entity7, "gltf-model", "./glb/cabinWindow.glb");
        set_custom_element_data(a_entity7, "scale", "10 2 10");
        set_custom_element_data(a_entity7, "rotation", "0 90 0");
        set_custom_element_data(a_entity7, "position", "-5 4 0");
        set_custom_element_data(a_entity8, "shadow", "");
        set_custom_element_data(a_entity8, "gltf-model", "./glb/cabinWindow.glb");
        set_custom_element_data(a_entity8, "scale", "10 2 10");
        set_custom_element_data(a_entity8, "rotation", "0 90 0");
        set_custom_element_data(a_entity8, "position", "5 4 0");
        set_custom_element_data(a_entity9, "shadow", "receive: false");
        set_custom_element_data(a_entity9, "gltf-model", "./glb/cabinRoofCenter.glb");
        set_custom_element_data(a_entity9, "scale", "10 4 10");
        set_custom_element_data(a_entity9, "rotation", "0 90 0");
        set_custom_element_data(a_entity9, "position", "0 3.5 0");
        set_custom_element_data(a_entity10, "shadow", "");
        set_custom_element_data(a_entity10, "gltf-model", "./glb/cabinFloor.glb");
        set_custom_element_data(a_entity10, "scale", "10 4 10");
        set_custom_element_data(a_entity10, "rotation", "0 0 0");
        set_custom_element_data(a_entity10, "position", "0 -0.1 0");
        set_custom_element_data(a_entity11, "light", "type: point; distance: 12; intensity: 2; position: 0 1 0");
        set_custom_element_data(a_mixin1, "id", "elf");
        set_custom_element_data(a_mixin1, "gltf-model", "./char/Elf.glb");
        set_custom_element_data(a_mixin1, "recolor__skin", "#212F00");
        set_custom_element_data(a_mixin1, "recolor__hat", "black");
        set_custom_element_data(a_mixin1, "recolor__clothes", "black");
        set_custom_element_data(a_mixin1, "recolor__face", "#F0F");
        set_custom_element_data(a_mixin1, "scale", "0.35 0.5 0.35");
        set_custom_element_data(a_mixin1, "material", "shader: flat;");
        set_custom_element_data(a_mixin1, "ammo-body", "type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.98;angularFactor: 0 1 0;");
        set_custom_element_data(a_mixin1, "ammo-shape", "type: capsule; fit: manual; halfExtents: 0.6 0.4 0.2; cylinderAxis: z; offset: 0 0.6 0");
        set_custom_element_data(a_mixin1, "shadow", "cast: true; receive: false;");
        set_custom_element_data(a_mixin1, "alive", "type: random;");
        set_custom_element_data(a_mixin1, "target", "\u{1F9DD}");
        set_custom_element_data(a_mixin1, "host", "elf");
        set_custom_element_data(a_mixin1, "avatar", "");
        set_custom_element_data(a_mixin1, "sfxr__use", sfx_squeek);
        set_custom_element_data(a_mixin1, "sfxr__bump", sfx_squeek);
        set_custom_element_data(a_mixin1, "scatter", "-5 1 -5 5 5 5");
        set_custom_element_data(a_entity12, "pool__elf", "mixin: elf; size: 5;");
        set_custom_element_data(a_entity12, "activate__elf", "");
        set_custom_element_data(a_entity13, "mixin", "elf");
        set_custom_element_data(a_entity13, "host", "viking");
        set_custom_element_data(a_entity13, "gltf-model", "./char/Viking_Female.glb");
      },
      m(target, anchor) {
        insert(target, a_entity0, anchor);
        insert(target, t0, anchor);
        insert(target, a_mixin0, anchor);
        insert(target, t1, anchor);
        insert(target, a_entity1, anchor);
        insert(target, t2, anchor);
        insert(target, a_entity2, anchor);
        insert(target, t3, anchor);
        insert(target, a_entity3, anchor);
        insert(target, t4, anchor);
        insert(target, a_entity4, anchor);
        insert(target, t5, anchor);
        insert(target, a_entity5, anchor);
        insert(target, t6, anchor);
        insert(target, a_entity6, anchor);
        insert(target, t7, anchor);
        insert(target, a_entity7, anchor);
        insert(target, t8, anchor);
        insert(target, a_entity8, anchor);
        insert(target, t9, anchor);
        insert(target, a_entity9, anchor);
        insert(target, t10, anchor);
        insert(target, a_entity10, anchor);
        insert(target, t11, anchor);
        insert(target, a_entity11, anchor);
        insert(target, t12, anchor);
        insert(target, a_mixin1, anchor);
        insert(target, t13, anchor);
        insert(target, a_entity12, anchor);
        insert(target, t14, anchor);
        insert(target, a_entity13, anchor);
        if (!mounted) {
          dispose = listen(a_entity1, "collidestart", collidestart_handler);
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a_entity0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a_mixin0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(a_entity1);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(a_entity2);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(a_entity3);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(a_entity4);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(a_entity5);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(a_entity6);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(a_entity7);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(a_entity8);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(a_entity9);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(a_entity10);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(a_entity11);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(a_mixin1);
        if (detaching)
          detach(t13);
        if (detaching)
          detach(a_entity12);
        if (detaching)
          detach(t14);
        if (detaching)
          detach(a_entity13);
        mounted = false;
        dispose();
      }
    };
  }
  var collidestart_handler = (e) => {
    const el = e.detail.targetEl;
    if (el.tags?.env) {
      el.remove();
    }
  };
  var House = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment7, safe_not_equal, {});
    }
  };
  var house_default = House;

  // src/ui/netdata.svelte
  function create_if_block2(ctx) {
    let div;
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        t = text(ctx[1]);
        attr(div, "class", "netdata svelte-1beqevp");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
        if (!mounted) {
          dispose = listen(div, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 2)
          set_data(t, ctx2[1]);
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment8(ctx) {
    let if_block_anchor;
    let if_block = ctx[0] && ctx[1] && create_if_block2(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (ctx2[0] && ctx2[1]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block2(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance7($$self, $$props, $$invalidate) {
    let $open_hostid;
    let $room;
    component_subscribe($$self, open_hostid, ($$value) => $$invalidate(0, $open_hostid = $$value));
    component_subscribe($$self, room, ($$value) => $$invalidate(1, $room = $$value));
    const click_handler = () => {
      const p2 = `${location.protocol}//${location.host}/?go&join=${$room}`;
      navigator.clipboard.writeText(p2);
    };
    return [$open_hostid, $room, click_handler];
  }
  var Netdata = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance7, create_fragment8, safe_not_equal, {});
    }
  };
  var netdata_default = Netdata;

  // src/shader/space.ts
  var spacefrag = `
varying vec2 vUv;
uniform vec3 color;
uniform float timeMsec; // A-Frame time in milliseconds.

#define iterations 17
#define formuparam 0.53

#define volsteps 20
#define stepsize 0.1

#define zoom   0.800
#define tile   0.850
#define speed  0.010 

#define brightness 0.0015
#define darkmatter 0.300
#define distfading 0.730
#define saturation 0.850

void main() {
  //get coords and direction

  vec3 dir=vec3(vUv*zoom,1.);
  float time=timeMsec*speed+.25;

  //volumetric rendering
  float s=0.1,fade=1.;
  vec3 v=vec3(0.);
  for (int r=0; r<volsteps; r++) {
      vec3 p=s*dir*.5;
      p = abs(vec3(tile)-mod(p,vec3(tile*2.))); // tiling fold
      float pa,a=pa=0.;
      for (int i=0; i<iterations; i++) { 
          p=abs(p)/dot(p,p)-formuparam; // the magic formula
          a+=abs(length(p)-pa); // absolute sum of average change
          pa=length(p);
      }
      float dm=max(0.,darkmatter-a*a*.001); //dark matter
      a*=a*a; // add contrast
      if (r>6) fade*=1.-dm; // dark matter, don't render near
      //v+=vec3(dm,dm*.5,0.);
      v+=fade;
      v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; // coloring based on distance
      fade*=distfading; // distance fading
      s+=stepsize;
  }
  v=mix(vec3(length(v)),v,saturation); //color adjust
  float r = v.r;
  v.r = v.b;
  v.b = r;

  gl_FragColor = vec4(v*.01,1.);	
}

`;
  var spaceVert = `
varying vec2 vUv;

void main() {
  vUv = uv;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
  AFRAME.registerShader("space", {
    schema: {},
    fragmentShader: spacefrag,
    vertexShader: spaceVert
  });

  // src/node/environmental.svelte
  function create_fragment9(ctx) {
    let a_plane;
    let a_plane_width_value;
    let a_plane_height_value;
    let a_plane_location_value;
    let t0;
    let a_entity0;
    let a_sphere;
    let a_entity0_position_value;
    let a_entity0_light_value;
    let t1;
    let a_entity1;
    let a_entity1_position_value;
    let a_entity1_light_value;
    let t2;
    let a_entity2;
    let a_entity2_light_value;
    let t3;
    let a_mixin0;
    let t4;
    let a_entity3;
    let a_entity3_position_value;
    let a_entity3_animation_value;
    let a_entity3_animation__scale_value;
    let t5;
    let a_entity4;
    let t6;
    let a_mixin1;
    let a_mixin1_vary_value;
    let t7;
    let a_entity5;
    let t8;
    let a_mixin2;
    let a_mixin2_vary_value;
    let t9;
    let a_entity6;
    let t10;
    let a_sky;
    return {
      c() {
        a_plane = element("a-plane");
        t0 = space();
        a_entity0 = element("a-entity");
        a_sphere = element("a-sphere");
        t1 = space();
        a_entity1 = element("a-entity");
        t2 = space();
        a_entity2 = element("a-entity");
        t3 = space();
        a_mixin0 = element("a-mixin");
        t4 = space();
        a_entity3 = element("a-entity");
        t5 = space();
        a_entity4 = element("a-entity");
        t6 = space();
        a_mixin1 = element("a-mixin");
        t7 = space();
        a_entity5 = element("a-entity");
        t8 = space();
        a_mixin2 = element("a-mixin");
        t9 = space();
        a_entity6 = element("a-entity");
        t10 = space();
        a_sky = element("a-sky");
        set_custom_element_data(a_plane, "shadow", "");
        set_custom_element_data(a_plane, "id", "ground");
        set_custom_element_data(a_plane, "position", "0 0 0");
        set_custom_element_data(a_plane, "rotation", "-90 0 0");
        set_custom_element_data(a_plane, "width", a_plane_width_value = ctx[0] * 1.5);
        set_custom_element_data(a_plane, "height", a_plane_height_value = ctx[0] * 1.5);
        set_custom_element_data(a_plane, "ammo-body", "type: static; mass: 0;");
        set_custom_element_data(a_plane, "ammo-shape", "type:box");
        set_custom_element_data(a_plane, "color", "#334411");
        set_custom_element_data(a_plane, "location", a_plane_location_value = "name: \u{1F332};  box: " + -ctx[0] * 1.5 + " 0 " + -ctx[0] * 1.5 + " " + ctx[0] * 1.5 + " 100 " + ctx[0] * 1.5);
        set_custom_element_data(a_sphere, "position", "0 100 0");
        set_custom_element_data(a_sphere, "radius", "10");
        set_custom_element_data(a_sphere, "material", "color: yellow; shader: flat;");
        set_custom_element_data(a_entity0, "position", a_entity0_position_value = ctx[0] / 4 + " " + ctx[0] * 2 + " " + ctx[0] / 4);
        set_custom_element_data(a_entity0, "light", a_entity0_light_value = ctx[1]({
          type: "directional",
          color: light,
          castShadow: true,
          shadowCameraTop: ctx[0],
          shadowCameraLeft: -ctx[0],
          shadowCameraRight: ctx[0],
          shadowCameraBottom: -ctx[0],
          shadowMapHeight: 1024 * 4,
          shadowMapWidth: 1024 * 4,
          intensity: 1
        }));
        set_custom_element_data(a_entity1, "position", a_entity1_position_value = "-" + ctx[0] / 3 + " " + ctx[0] * 2 + " -" + ctx[0] / 3);
        set_custom_element_data(a_entity1, "light", a_entity1_light_value = ctx[1]({
          type: "directional",
          color: light,
          intensity: 1
        }));
        set_custom_element_data(a_entity2, "light", a_entity2_light_value = "type:ambient; color:" + light + "; intensity:1;");
        set_custom_element_data(a_mixin0, "id", "cloud");
        set_custom_element_data(a_mixin0, "scatter", ctx[2]);
        set_custom_element_data(a_mixin0, "material", "color: #ffffff; shader: flat; ");
        set_custom_element_data(a_mixin0, "geometry", "");
        set_custom_element_data(a_mixin0, "scale", "15 5 10");
        set_custom_element_data(a_mixin0, "vary", "property: scale; range: 1 1 1 1.5 1.5 1.5");
        set_custom_element_data(a_entity3, "pool__cloud", "mixin: shadow cloud; size: 50");
        set_custom_element_data(a_entity3, "activate__cloud", "");
        set_custom_element_data(a_entity3, "position", a_entity3_position_value = "0 35 " + ctx[0]);
        set_custom_element_data(a_entity3, "animation", a_entity3_animation_value = "property:object3D.position.z; to:-" + ctx[0] + "; dur: " + 400 * 300 * 2 + "; loop: true;");
        set_custom_element_data(a_entity3, "animation__scale", a_entity3_animation__scale_value = "property:object3D.scale; from: 0 0 0; to:1 1 1; dur: " + 400 * 300 / 2 + "; loop: true; dir: alternate");
        set_custom_element_data(a_entity4, "sound", "autoplay: true; loop: true; volume: 0.05; src:#sound-bg;positional:false");
        set_custom_element_data(a_mixin1, "id", "floof");
        set_custom_element_data(a_mixin1, "geometry", "");
        set_custom_element_data(a_mixin1, "scale", "0.05 0.05 0.05");
        set_custom_element_data(a_mixin1, "material", "color: white; shader: flat;");
        set_custom_element_data(a_mixin1, "vary", a_mixin1_vary_value = "property: position; range: -" + ctx[0] * 0.75 + " 0 -" + ctx[0] * 0.75 + " " + ctx[0] * 0.75 + " 4 " + ctx[0] * 0.75);
        set_custom_element_data(a_mixin1, "floaty", "");
        set_custom_element_data(a_entity5, "pool__floof", "mixin: floof; size: 100;");
        set_custom_element_data(a_entity5, "activate__floof", "");
        set_custom_element_data(a_mixin2, "id", "birds");
        set_custom_element_data(a_mixin2, "geometry", "");
        set_custom_element_data(a_mixin2, "scale", "0.25 0.15 0.15");
        set_custom_element_data(a_mixin2, "material", "color: yellow; shader: flat;");
        set_custom_element_data(a_mixin2, "vary", a_mixin2_vary_value = "property: position; range: -" + ctx[0] * 0.75 + " 10.5 -" + ctx[0] * 0.75 + " " + ctx[0] * 0.75 + " 40 " + ctx[0] * 0.75);
        set_custom_element_data(a_mixin2, "floaty", "");
        set_custom_element_data(a_entity6, "pool__birds", "mixin: birds; size: 50;");
        set_custom_element_data(a_entity6, "activate__birds", "");
        set_custom_element_data(a_sky, "shader", "space");
      },
      m(target, anchor) {
        insert(target, a_plane, anchor);
        insert(target, t0, anchor);
        insert(target, a_entity0, anchor);
        append(a_entity0, a_sphere);
        insert(target, t1, anchor);
        insert(target, a_entity1, anchor);
        insert(target, t2, anchor);
        insert(target, a_entity2, anchor);
        insert(target, t3, anchor);
        insert(target, a_mixin0, anchor);
        insert(target, t4, anchor);
        insert(target, a_entity3, anchor);
        insert(target, t5, anchor);
        insert(target, a_entity4, anchor);
        insert(target, t6, anchor);
        insert(target, a_mixin1, anchor);
        insert(target, t7, anchor);
        insert(target, a_entity5, anchor);
        insert(target, t8, anchor);
        insert(target, a_mixin2, anchor);
        insert(target, t9, anchor);
        insert(target, a_entity6, anchor);
        insert(target, t10, anchor);
        insert(target, a_sky, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & 1 && a_plane_width_value !== (a_plane_width_value = ctx2[0] * 1.5)) {
          set_custom_element_data(a_plane, "width", a_plane_width_value);
        }
        if (dirty & 1 && a_plane_height_value !== (a_plane_height_value = ctx2[0] * 1.5)) {
          set_custom_element_data(a_plane, "height", a_plane_height_value);
        }
        if (dirty & 1 && a_plane_location_value !== (a_plane_location_value = "name: \u{1F332};  box: " + -ctx2[0] * 1.5 + " 0 " + -ctx2[0] * 1.5 + " " + ctx2[0] * 1.5 + " 100 " + ctx2[0] * 1.5)) {
          set_custom_element_data(a_plane, "location", a_plane_location_value);
        }
        if (dirty & 1 && a_entity0_position_value !== (a_entity0_position_value = ctx2[0] / 4 + " " + ctx2[0] * 2 + " " + ctx2[0] / 4)) {
          set_custom_element_data(a_entity0, "position", a_entity0_position_value);
        }
        if (dirty & 1 && a_entity0_light_value !== (a_entity0_light_value = ctx2[1]({
          type: "directional",
          color: light,
          castShadow: true,
          shadowCameraTop: ctx2[0],
          shadowCameraLeft: -ctx2[0],
          shadowCameraRight: ctx2[0],
          shadowCameraBottom: -ctx2[0],
          shadowMapHeight: 1024 * 4,
          shadowMapWidth: 1024 * 4,
          intensity: 1
        }))) {
          set_custom_element_data(a_entity0, "light", a_entity0_light_value);
        }
        if (dirty & 1 && a_entity1_position_value !== (a_entity1_position_value = "-" + ctx2[0] / 3 + " " + ctx2[0] * 2 + " -" + ctx2[0] / 3)) {
          set_custom_element_data(a_entity1, "position", a_entity1_position_value);
        }
        if (dirty & 1 && a_entity3_position_value !== (a_entity3_position_value = "0 35 " + ctx2[0])) {
          set_custom_element_data(a_entity3, "position", a_entity3_position_value);
        }
        if (dirty & 1 && a_entity3_animation_value !== (a_entity3_animation_value = "property:object3D.position.z; to:-" + ctx2[0] + "; dur: " + 400 * 300 * 2 + "; loop: true;")) {
          set_custom_element_data(a_entity3, "animation", a_entity3_animation_value);
        }
        if (dirty & 1 && a_mixin1_vary_value !== (a_mixin1_vary_value = "property: position; range: -" + ctx2[0] * 0.75 + " 0 -" + ctx2[0] * 0.75 + " " + ctx2[0] * 0.75 + " 4 " + ctx2[0] * 0.75)) {
          set_custom_element_data(a_mixin1, "vary", a_mixin1_vary_value);
        }
        if (dirty & 1 && a_mixin2_vary_value !== (a_mixin2_vary_value = "property: position; range: -" + ctx2[0] * 0.75 + " 10.5 -" + ctx2[0] * 0.75 + " " + ctx2[0] * 0.75 + " 40 " + ctx2[0] * 0.75)) {
          set_custom_element_data(a_mixin2, "vary", a_mixin2_vary_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a_plane);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a_entity0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(a_entity1);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(a_entity2);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(a_mixin0);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(a_entity3);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(a_entity4);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(a_mixin1);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(a_entity5);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(a_mixin2);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(a_entity6);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(a_sky);
      }
    };
  }
  var light = "#FEE";
  function instance8($$self, $$props, $$invalidate) {
    const str = AFRAME.utils.styleParser.stringify.bind(AFRAME.utils.styleParser);
    let { groundSize: groundSize2 = 300 } = $$props;
    const scatterBig = [-groundSize2, 0, -groundSize2, groundSize2, 0, groundSize2].join(" ");
    $$self.$$set = ($$props2) => {
      if ("groundSize" in $$props2)
        $$invalidate(0, groundSize2 = $$props2.groundSize);
    };
    return [groundSize2, str, scatterBig];
  }
  var Environmental = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance8, create_fragment9, safe_not_equal, { groundSize: 0 });
    }
  };
  var environmental_default = Environmental;

  // src/sound/sfx-ui.ts
  var sfx_button = {
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": 0,
    "p_env_sustain": 0.011865020903832235,
    "p_env_punch": 0.30895536338441726,
    "p_env_decay": 0.10919225163293156,
    "p_base_freq": 0.600326884813042,
    "p_freq_limit": 0,
    "p_freq_ramp": 0,
    "p_freq_dramp": 0,
    "p_vib_strength": 0,
    "p_vib_speed": 0,
    "p_arp_mod": 0,
    "p_arp_speed": 0,
    "p_duty": 0,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0,
    "p_hpf_ramp": 0,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8
  };
  var sfx_button_sound = new SoundEffect(Object.assign(new Params(), sfx_button).mutate().mutate().mutate()).generate().getAudio();
  var sfx_button_play = () => {
    sfx_button_sound.play();
  };

  // src/ui/body.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[12] = list[i];
    return child_ctx;
  }
  function create_else_block(ctx) {
    let div2;
    let div0;
    let t0_value = (ctx[6]?.data.bag1?.components.target?.data || " ") + "";
    let t0;
    let t1;
    let div1;
    let t2_value = (ctx[6]?.data.bag2?.components.target?.data || " ") + "";
    let t2;
    let t3;
    let div5;
    let div3;
    let t4_value = (ctx[6]?.data.bag3?.components.target?.data || " ") + "";
    let t4;
    let t5;
    let div4;
    let t6_value = (ctx[6]?.data.bag4?.components.target?.data || " ") + "";
    let t6;
    let t7;
    let div8;
    let div6;
    let t8_value = (ctx[6]?.data.bag5?.components.target?.data || " ") + "";
    let t8;
    let t9;
    let div7;
    let t10_value = (ctx[6]?.data.bag6?.components.target?.data || " ") + "";
    let t10;
    let mounted;
    let dispose;
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        t0 = text(t0_value);
        t1 = space();
        div1 = element("div");
        t2 = text(t2_value);
        t3 = space();
        div5 = element("div");
        div3 = element("div");
        t4 = text(t4_value);
        t5 = space();
        div4 = element("div");
        t6 = text(t6_value);
        t7 = space();
        div8 = element("div");
        div6 = element("div");
        t8 = text(t8_value);
        t9 = space();
        div7 = element("div");
        t10 = text(t10_value);
        attr(div0, "class", "button bounce svelte-1x5jkv8");
        attr(div1, "class", "button bounce svelte-1x5jkv8");
        attr(div2, "class", "flex bag pouch  svelte-1x5jkv8");
        attr(div3, "class", "button bounce svelte-1x5jkv8");
        attr(div4, "class", "button bounce svelte-1x5jkv8");
        attr(div5, "class", "flex bag pouch svelte-1x5jkv8");
        attr(div6, "class", "button bounce svelte-1x5jkv8");
        attr(div7, "class", "button bounce svelte-1x5jkv8");
        attr(div8, "class", "flex bag pouch svelte-1x5jkv8");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div0, t0);
        append(div2, t1);
        append(div2, div1);
        append(div1, t2);
        insert(target, t3, anchor);
        insert(target, div5, anchor);
        append(div5, div3);
        append(div3, t4);
        append(div5, t5);
        append(div5, div4);
        append(div4, t6);
        insert(target, t7, anchor);
        insert(target, div8, anchor);
        append(div8, div6);
        append(div6, t8);
        append(div8, t9);
        append(div8, div7);
        append(div7, t10);
        if (!mounted) {
          dispose = [
            listen(div0, "focus", sfx_button_play),
            listen(div0, "mouseover", sfx_button_play),
            listen(div1, "focus", sfx_button_play),
            listen(div1, "mouseover", sfx_button_play),
            listen(div3, "focus", sfx_button_play),
            listen(div3, "mouseover", sfx_button_play),
            listen(div4, "focus", sfx_button_play),
            listen(div4, "mouseover", sfx_button_play),
            listen(div6, "focus", sfx_button_play),
            listen(div6, "mouseover", sfx_button_play),
            listen(div7, "focus", sfx_button_play),
            listen(div7, "mouseover", sfx_button_play)
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 64 && t0_value !== (t0_value = (ctx2[6]?.data.bag1?.components.target?.data || " ") + ""))
          set_data(t0, t0_value);
        if (dirty & 64 && t2_value !== (t2_value = (ctx2[6]?.data.bag2?.components.target?.data || " ") + ""))
          set_data(t2, t2_value);
        if (dirty & 64 && t4_value !== (t4_value = (ctx2[6]?.data.bag3?.components.target?.data || " ") + ""))
          set_data(t4, t4_value);
        if (dirty & 64 && t6_value !== (t6_value = (ctx2[6]?.data.bag4?.components.target?.data || " ") + ""))
          set_data(t6, t6_value);
        if (dirty & 64 && t8_value !== (t8_value = (ctx2[6]?.data.bag5?.components.target?.data || " ") + ""))
          set_data(t8, t8_value);
        if (dirty & 64 && t10_value !== (t10_value = (ctx2[6]?.data.bag6?.components.target?.data || " ") + ""))
          set_data(t10, t10_value);
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(div5);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(div8);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block3(ctx) {
    let div;
    let each_value = ctx[7];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "bag grid flex svelte-1x5jkv8");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
      },
      p(ctx2, dirty) {
        if (dirty & 184) {
          each_value = ctx2[7];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block(ctx) {
    let div;
    let t0_value = (ctx[5][ctx[12]] || ctx[12]) + "";
    let t0;
    let t1;
    let div_class_value;
    let mounted;
    let dispose;
    function click_handler_2() {
      return ctx[10](ctx[12]);
    }
    return {
      c() {
        div = element("div");
        t0 = text(t0_value);
        t1 = space();
        attr(div, "class", div_class_value = "button bounce bound " + (ctx[3] === "" + ctx[12] ? "down" : "inactive") + " " + (ctx[4][ctx[12]] ? "active" : "") + " svelte-1x5jkv8");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, t1);
        if (!mounted) {
          dispose = [
            listen(div, "focus", sfx_button_play),
            listen(div, "mouseover", sfx_button_play),
            listen(div, "click", click_handler_2)
          ];
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & 32 && t0_value !== (t0_value = (ctx[5][ctx[12]] || ctx[12]) + ""))
          set_data(t0, t0_value);
        if (dirty & 24 && div_class_value !== (div_class_value = "button bounce bound " + (ctx[3] === "" + ctx[12] ? "down" : "inactive") + " " + (ctx[4][ctx[12]] ? "active" : "") + " svelte-1x5jkv8")) {
          attr(div, "class", div_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment10(ctx) {
    let div2;
    let div0;
    let t1;
    let div1;
    let t3;
    let t4;
    let div4;
    let div3;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
      if (ctx2[2]["shift"])
        return create_if_block3;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        div0.textContent = "\u{1F9EB}";
        t1 = space();
        div1 = element("div");
        div1.textContent = "\u{1FA83}";
        t3 = space();
        if_block.c();
        t4 = space();
        div4 = element("div");
        div3 = element("div");
        div3.textContent = "\u{1F500}";
        attr(div0, "class", "button bounce  svelte-1x5jkv8");
        toggle_class(div0, "disable", !ctx[0]);
        attr(div1, "class", "button bounce  svelte-1x5jkv8");
        toggle_class(div1, "disable", !ctx[1]);
        attr(div2, "class", "flex bag red svelte-1x5jkv8");
        attr(div3, "class", "button bounce svelte-1x5jkv8");
        attr(div4, "class", "flex bag pouch svelte-1x5jkv8");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div2, t1);
        append(div2, div1);
        insert(target, t3, anchor);
        if_block.m(target, anchor);
        insert(target, t4, anchor);
        insert(target, div4, anchor);
        append(div4, div3);
        if (!mounted) {
          dispose = [
            listen(div0, "focus", sfx_button_play),
            listen(div0, "mouseover", sfx_button_play),
            listen(div0, "click", ctx[8]),
            listen(div1, "focus", sfx_button_play),
            listen(div1, "mouseover", sfx_button_play),
            listen(div1, "click", ctx[9]),
            listen(div3, "focus", sfx_button_play),
            listen(div3, "mouseover", sfx_button_play),
            listen(div3, "click", ctx[11])
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          toggle_class(div0, "disable", !ctx2[0]);
        }
        if (dirty & 2) {
          toggle_class(div1, "disable", !ctx2[1]);
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(t4.parentNode, t4);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div2);
        if (detaching)
          detach(t3);
        if_block.d(detaching);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(div4);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance9($$self, $$props, $$invalidate) {
    let $do_drop;
    let $do_throw;
    let $key_map;
    let $key_down;
    let $binds;
    let $binds_icon;
    let $AVATAR;
    component_subscribe($$self, do_drop, ($$value) => $$invalidate(0, $do_drop = $$value));
    component_subscribe($$self, do_throw, ($$value) => $$invalidate(1, $do_throw = $$value));
    component_subscribe($$self, key_map, ($$value) => $$invalidate(2, $key_map = $$value));
    component_subscribe($$self, key_down, ($$value) => $$invalidate(3, $key_down = $$value));
    component_subscribe($$self, binds, ($$value) => $$invalidate(4, $binds = $$value));
    component_subscribe($$self, binds_icon, ($$value) => $$invalidate(5, $binds_icon = $$value));
    component_subscribe($$self, AVATAR, ($$value) => $$invalidate(6, $AVATAR = $$value));
    let bound = ["!", "@", "#", "$", "%", "^"];
    const click_handler = () => do_drop.set(!$do_drop);
    const click_handler_1 = () => do_throw.set(!$do_throw);
    const click_handler_2 = (b) => {
      key_down.set("" + b);
      key_up.set("" + b);
    };
    const click_handler_3 = () => {
      set_store_value(key_map, $key_map["shift"] = !$key_map["shift"], $key_map);
      key_map.poke();
    };
    return [
      $do_drop,
      $do_throw,
      $key_map,
      $key_down,
      $binds,
      $binds_icon,
      $AVATAR,
      bound,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3
    ];
  }
  var Body = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance9, create_fragment10, safe_not_equal, {});
    }
  };
  var body_default = Body;

  // src/component/location.ts
  var location2 = new Value([]);
  var locations = {};
  var wpos = new AFRAME.THREE.Vector3();
  AFRAME.registerSystem("loc", {
    init() {
      this.tick = AFRAME.utils.throttleTick(this.tick, 1e3, this);
    },
    tick() {
      camera.$.updateMatrixWorld();
      camera.$.getWorldPosition(wpos);
      for (let entry of Object.entries(locations)) {
        const [key, value] = entry;
        const n = value.data.name;
        const l = location2.$.indexOf(n);
        if (value.playerIsIn(wpos)) {
          if (l !== -1)
            continue;
          location2.$.push(n);
          location2.poke();
        } else if (l !== -1) {
          location2.$.splice(l, 1);
          location2.poke();
        }
      }
    }
  });
  var vec34 = new AFRAME.THREE.Vector3();
  AFRAME.registerComponent("location", {
    schema: {
      name: { type: "string" },
      box: { type: "string", default: "-1 -1 -1 1 1 1" }
    },
    init() {
      locations[this.data.name] = this;
      this.bb = new AFRAME.THREE.Box3();
      this.bb.setFromArray(this.data.box.split(" ").map(parseFloat));
    },
    playerIsIn(playerPos) {
      return this.bb.containsPoint(vec34.copy(playerPos).sub(this.el.object3D.position));
    },
    remove() {
      delete locations[this.data.name];
    }
  });

  // node_modules/svelte/easing/index.mjs
  function bounceOut(t) {
    const a = 4 / 11;
    const b = 8 / 11;
    const c = 9 / 10;
    const ca = 4356 / 361;
    const cb = 35442 / 1805;
    const cc = 16061 / 1805;
    const t2 = t * t;
    return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
  }
  function bounceInOut(t) {
    return t < 0.5 ? 0.5 * (1 - bounceOut(1 - t * 2)) : 0.5 * bounceOut(t * 2 - 1) + 0.5;
  }
  function cubicOut(t) {
    const f = t - 1;
    return f * f * f + 1;
  }

  // node_modules/svelte/transition/index.mjs
  function scale2(node, { delay = 0, duration = 400, easing = cubicOut, start: start2 = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === "none" ? "" : style.transform;
    const sd = 1 - start2;
    const od = target_opacity * (1 - opacity);
    return {
      delay,
      duration,
      easing,
      css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
    };
  }

  // src/ui/location.svelte
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    return child_ctx;
  }
  function create_each_block_1(ctx) {
    let div;
    let t0_value = ctx[5] + "";
    let t0;
    let t1;
    let div_intro;
    let div_outro;
    let current;
    return {
      c() {
        div = element("div");
        t0 = text(t0_value);
        t1 = space();
        attr(div, "class", "loc svelte-1ytmb75");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, t1);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty & 1) && t0_value !== (t0_value = ctx[5] + ""))
          set_data(t0, t0_value);
      },
      i(local) {
        if (current)
          return;
        add_render_callback(() => {
          if (div_outro)
            div_outro.end(1);
          div_intro = create_in_transition(div, scale2, { easing: bounceInOut });
          div_intro.start();
        });
        current = true;
      },
      o(local) {
        if (div_intro)
          div_intro.invalidate();
        div_outro = create_out_transition(div, scale2, { easing: bounceInOut });
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (detaching && div_outro)
          div_outro.end();
      }
    };
  }
  function create_each_block2(ctx) {
    let div;
    let t0_value = ctx[2] + "";
    let t0;
    let t1;
    let div_intro;
    let div_outro;
    let current;
    return {
      c() {
        div = element("div");
        t0 = text(t0_value);
        t1 = space();
        attr(div, "class", "loc svelte-1ytmb75");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, t1);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty & 2) && t0_value !== (t0_value = ctx[2] + ""))
          set_data(t0, t0_value);
      },
      i(local) {
        if (current)
          return;
        add_render_callback(() => {
          if (div_outro)
            div_outro.end(1);
          div_intro = create_in_transition(div, scale2, { easing: bounceInOut });
          div_intro.start();
        });
        current = true;
      },
      o(local) {
        if (div_intro)
          div_intro.invalidate();
        div_outro = create_out_transition(div, scale2, { easing: bounceInOut });
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (detaching && div_outro)
          div_outro.end();
      }
    };
  }
  function create_fragment11(ctx) {
    let div0;
    let t;
    let div1;
    let current;
    let each_value_1 = ctx[0];
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
      each_blocks_1[i] = null;
    });
    let each_value = ctx[1];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div0 = element("div");
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t = space();
        div1 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div0, "class", "location svelte-1ytmb75");
        attr(div1, "class", "ground svelte-1ytmb75");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(div0, null);
        }
        insert(target, t, anchor);
        insert(target, div1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div1, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value_1 = ctx2[0];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
              transition_in(each_blocks_1[i], 1);
            } else {
              each_blocks_1[i] = create_each_block_1(child_ctx);
              each_blocks_1[i].c();
              transition_in(each_blocks_1[i], 1);
              each_blocks_1[i].m(div0, null);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (dirty & 2) {
          each_value = ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div1, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out_1(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks_1[i]);
        }
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks_1 = each_blocks_1.filter(Boolean);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          transition_out(each_blocks_1[i]);
        }
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        destroy_each(each_blocks_1, detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance10($$self, $$props, $$invalidate) {
    let $location;
    let $ground;
    component_subscribe($$self, location2, ($$value) => $$invalidate(0, $location = $$value));
    component_subscribe($$self, ground, ($$value) => $$invalidate(1, $ground = $$value));
    return [$location, $ground];
  }
  var Location = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance10, create_fragment11, safe_not_equal, {});
    }
  };
  var location_default = Location;

  // src/ui/onscreen-ui.svelte
  function create_fragment12(ctx) {
    let location3;
    let t0;
    let div4;
    let div3;
    let div0;
    let t1_value = (ctx[4]?.data.hand_left?.components.target.data || "\u{1F9BE}") + "";
    let t1;
    let t2;
    let div1;
    let t4;
    let div2;
    let t5_value = (ctx[4]?.data.hand_right?.components.target.data || "\u{1F9BE}") + "";
    let t5;
    let div4_class_value;
    let t6;
    let div9;
    let div8;
    let div5;
    let t8;
    let body;
    let t9;
    let div7;
    let div6;
    let div8_class_value;
    let current;
    let mounted;
    let dispose;
    location3 = new location_default({});
    body = new body_default({});
    return {
      c() {
        create_component(location3.$$.fragment);
        t0 = space();
        div4 = element("div");
        div3 = element("div");
        div0 = element("div");
        t1 = text(t1_value);
        t2 = space();
        div1 = element("div");
        div1.textContent = "\u{1F998}";
        t4 = space();
        div2 = element("div");
        t5 = text(t5_value);
        t6 = space();
        div9 = element("div");
        div8 = element("div");
        div5 = element("div");
        div5.textContent = "\u{1F4AC}";
        t8 = space();
        create_component(body.$$.fragment);
        t9 = space();
        div7 = element("div");
        div6 = element("div");
        attr(div0, "class", "button bounce svelte-l07t5s");
        attr(div1, "class", "jump button bounce svelte-l07t5s");
        attr(div2, "class", "reverse button bounce svelte-l07t5s");
        attr(div3, "class", "flexer svelte-l07t5s");
        attr(div4, "class", div4_class_value = "bind-bar " + (ctx[3] ? "mobile" : "") + " svelte-l07t5s");
        attr(div5, "class", "speak button bounce svelte-l07t5s");
        attr(div6, "class", "dot svelte-l07t5s");
        set_style(div6, "margin-top", ctx[2] * 100 + "%");
        set_style(div6, "margin-left", ctx[1] * 100 + "%");
        attr(div7, "class", "move button bounce svelte-l07t5s");
        attr(div8, "class", div8_class_value = "motion " + (ctx[3] ? "mobile" : "") + " svelte-l07t5s");
        attr(div9, "class", "holder svelte-l07t5s");
      },
      m(target, anchor) {
        mount_component(location3, target, anchor);
        insert(target, t0, anchor);
        insert(target, div4, anchor);
        append(div4, div3);
        append(div3, div0);
        append(div0, t1);
        append(div3, t2);
        append(div3, div1);
        append(div3, t4);
        append(div3, div2);
        append(div2, t5);
        insert(target, t6, anchor);
        insert(target, div9, anchor);
        append(div9, div8);
        append(div8, div5);
        append(div8, t8);
        mount_component(body, div8, null);
        append(div8, t9);
        append(div8, div7);
        append(div7, div6);
        ctx[12](div7);
        current = true;
        if (!mounted) {
          dispose = [
            listen(div0, "focus", sfx_button_play),
            listen(div0, "mouseover", sfx_button_play),
            listen(div0, "click", ctx[8]),
            listen(div1, "focus", sfx_button_play),
            listen(div1, "mouseover", sfx_button_play),
            listen(div1, "click", ctx[9]),
            listen(div2, "focus", sfx_button_play),
            listen(div2, "mouseover", sfx_button_play),
            listen(div2, "click", ctx[10]),
            listen(div5, "focus", sfx_button_play),
            listen(div5, "mouseover", sfx_button_play),
            listen(div5, "click", ctx[11]),
            listen(div7, "touchmove", ctx[5]),
            listen(div7, "touchend", ctx[6]),
            listen(div7, "mousemove", ctx[5]),
            listen(div7, "mousedown", ctx[7]),
            listen(div7, "touchstart", ctx[7]),
            listen(div7, "mouseleave", ctx[6]),
            listen(div7, "mouseup", ctx[6]),
            listen(div7, "focus", sfx_button_play),
            listen(div7, "mouseover", sfx_button_play)
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & 16) && t1_value !== (t1_value = (ctx2[4]?.data.hand_left?.components.target.data || "\u{1F9BE}") + ""))
          set_data(t1, t1_value);
        if ((!current || dirty & 16) && t5_value !== (t5_value = (ctx2[4]?.data.hand_right?.components.target.data || "\u{1F9BE}") + ""))
          set_data(t5, t5_value);
        if (!current || dirty & 8 && div4_class_value !== (div4_class_value = "bind-bar " + (ctx2[3] ? "mobile" : "") + " svelte-l07t5s")) {
          attr(div4, "class", div4_class_value);
        }
        if (!current || dirty & 4) {
          set_style(div6, "margin-top", ctx2[2] * 100 + "%");
        }
        if (!current || dirty & 2) {
          set_style(div6, "margin-left", ctx2[1] * 100 + "%");
        }
        if (!current || dirty & 8 && div8_class_value !== (div8_class_value = "motion " + (ctx2[3] ? "mobile" : "") + " svelte-l07t5s")) {
          attr(div8, "class", div8_class_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(location3.$$.fragment, local);
        transition_in(body.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(location3.$$.fragment, local);
        transition_out(body.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(location3, detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(div4);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(div9);
        destroy_component(body);
        ctx[12](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance11($$self, $$props, $$invalidate) {
    let $ismobile;
    let $AVATAR;
    component_subscribe($$self, ismobile, ($$value) => $$invalidate(3, $ismobile = $$value));
    component_subscribe($$self, AVATAR, ($$value) => $$invalidate(4, $AVATAR = $$value));
    let holder;
    let x = 0.5;
    let y = 0.5;
    let interacting = false;
    function update3(e) {
      if (e.touches) {
        e.x = e.touches[0].clientX;
        e.y = e.touches[0].clientY;
      }
      e.preventDefault();
      e.stopPropagation();
      const { x: bx, y: by, width: width2, height: height2 } = holder.getBoundingClientRect();
      let target_x = 0;
      let target_y = 0;
      target_y = e.y - by;
      target_x = e.x - bx;
      const ye = target_y / height2;
      const xd = target_x / width2;
      $$invalidate(1, x = Math.min(Math.max(0, xd), 1));
      $$invalidate(2, y = Math.min(Math.max(0, ye), 1));
      if (!interacting)
        return;
      if (x > 0.6) {
        key_down.set("c");
      } else {
        key_up.set("c");
      }
      if (x < 0.4) {
        key_down.set("z");
      } else {
        key_up.set("z");
      }
      if (y > 0.6) {
        key_down.set("s");
      } else {
        key_up.set("s");
      }
      if (y < 0.4) {
        key_down.set("w");
      } else {
        key_up.set("w");
      }
      if (y < 0.2 || y > 0.8) {
        key_down.set("shift");
      } else {
        key_up.set("shift");
      }
    }
    function stop_interact(e) {
      e.preventDefault();
      e.stopPropagation();
      interacting = false;
      key_up.set("w");
      key_up.set("s");
      key_up.set("z");
      key_up.set("c");
      key_up.set("shift");
    }
    function interact(e) {
      e.preventDefault();
      e.stopPropagation();
      interacting = true;
    }
    const click_handler = () => doControl("~ use hand_left");
    const click_handler_1 = () => {
      key_down.set(" ");
      setTimeout(() => {
        key_up.set(" ");
      }, 300);
    };
    const click_handler_2 = () => doControl("~ use hand_right");
    const click_handler_3 = () => {
      open_text.set("");
      requestAnimationFrame(() => {
        document.getElementById("text").focus();
      });
    };
    function div7_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        holder = $$value;
        $$invalidate(0, holder);
      });
    }
    return [
      holder,
      x,
      y,
      $ismobile,
      $AVATAR,
      update3,
      stop_interact,
      interact,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      div7_binding
    ];
  }
  var Onscreen_ui = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance11, create_fragment12, safe_not_equal, {});
    }
  };
  var onscreen_ui_default = Onscreen_ui;

  // src/sound/sfx-item.ts
  var sfx_item = stringify({
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": 0,
    "p_env_sustain": 0.09283549995297223,
    "p_env_punch": 0.34204811746491576,
    "p_env_decay": 0.2417616903132828,
    "p_base_freq": 0.7295019250921798,
    "p_freq_limit": 0,
    "p_freq_ramp": 0,
    "p_freq_dramp": 0,
    "p_vib_strength": 0,
    "p_vib_speed": 0,
    "p_arp_mod": 0.23880219791297394,
    "p_arp_speed": 0.687508324811289,
    "p_duty": 0,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0,
    "p_hpf_ramp": 0,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_item3 = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": -0.003934407542108663,
    "p_env_sustain": 0.524366769037737,
    "p_env_punch": 0.008665538364896794,
    "p_env_decay": 0.3396477438397971,
    "p_base_freq": 0.4143056310860395,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.0014206315544120496,
    "p_freq_dramp": 0.0706245059769714,
    "p_vib_strength": -0.021815287929415027,
    "p_vib_speed": -0.8205013654289433,
    "p_arp_mod": -0.3189473993423517,
    "p_arp_speed": -0.48605230596033877,
    "p_duty": -0.632832818119808,
    "p_duty_ramp": 0.012317492869445515,
    "p_repeat_speed": 0.4008256724923345,
    "p_pha_offset": -0.33575449214840836,
    "p_pha_ramp": -0.27298287585827274,
    "p_lpf_freq": 0.945630556731045,
    "p_lpf_ramp": -0.32357457218842606,
    "p_lpf_resonance": 0.9677887682942008,
    "p_hpf_freq": 0.7626844242863982,
    "p_hpf_ramp": -0.06844341625774902,
    "sound_vol": 0.25,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_item2 = stringify({
    "oldParams": true,
    "wave_type": 1,
    "p_env_attack": 0,
    "p_env_sustain": 0.008299432590524236,
    "p_env_punch": 0.32452583374074934,
    "p_env_decay": 0.10867751061393696,
    "p_base_freq": 0.6635334138022878,
    "p_freq_limit": 0,
    "p_freq_ramp": 0,
    "p_freq_dramp": 0,
    "p_vib_strength": 0,
    "p_vib_speed": 0,
    "p_arp_mod": 0,
    "p_arp_speed": 0,
    "p_duty": 0,
    "p_duty_ramp": 0,
    "p_repeat_speed": 0,
    "p_pha_offset": 0,
    "p_pha_ramp": 0,
    "p_lpf_freq": 1,
    "p_lpf_ramp": 0,
    "p_lpf_resonance": 0,
    "p_hpf_freq": 0,
    "p_hpf_ramp": 0,
    "sound_vol": 0.1,
    "sample_rate": 44100,
    "sample_size": 8
  });
  var sfx_coin = sfx_item;
  var sfx_sword = stringify({
    "oldParams": true,
    "wave_type": 0,
    "p_env_attack": 0.01170061848590746,
    "p_env_sustain": 0.38258168244711566,
    "p_env_punch": 0.4949117709716029,
    "p_env_decay": -0.5413731161748394,
    "p_base_freq": 0.6064967287850096,
    "p_freq_limit": 0,
    "p_freq_ramp": -0.0027619916598632267,
    "p_freq_dramp": 0.13054169432259277,
    "p_vib_strength": -0.12034741124987401,
    "p_vib_speed": -0.6142620625116471,
    "p_arp_mod": 0.4824634603701816,
    "p_arp_speed": -0.9752244407251189,
    "p_duty": 0.6163566918721113,
    "p_duty_ramp": -0.02039153140666421,
    "p_repeat_speed": 0.6648383616289166,
    "p_pha_offset": -0.7825406348773116,
    "p_pha_ramp": 0.6010971763764806,
    "p_lpf_freq": 0.9963279479200927,
    "p_lpf_ramp": -0.0872884773789926,
    "p_lpf_resonance": -0.21956057669869944,
    "p_hpf_freq": 6766695547147069e-25,
    "p_hpf_ramp": 0.3150220565247538,
    "sound_vol": 0.05,
    "sample_rate": 44100,
    "sample_size": 8
  });

  // src/component/item.ts
  var vec35 = new AFRAME.THREE.Vector3();
  var quat4 = new AFRAME.THREE.Quaternion();
  AFRAME.registerComponent("item", {
    schema: {
      holder: { type: "selector" },
      action: { type: "string", default: "" }
    },
    init() {
      this.updated = new Value(this.data);
      this.el.addEventListener("use", this.use = this.use.bind(this));
      this.el.addEventListener("throw", this.throw = this.throw.bind(this));
      this.el.addEventListener("drop", this.drop = this.drop.bind(this));
    },
    drop(e) {
      if (!this.data.holder)
        return;
      this.el.object3D.getWorldPosition(this.el.object3D.position);
      this.reset();
      delete this.data.holder;
      this.updated.poke();
    },
    throw(e) {
      if (!this.data.holder)
        return;
      const p2 = this.data.holder;
      this.drop(e);
      vec35.set(-30, 10, 0).applyQuaternion(p2.object3D.parent.getWorldQuaternion(quat4));
      const force = new Ammo.btVector3(vec35.x, vec35.y, vec35.z);
      const torque = new Ammo.btVector3(10, 10, 10);
      this.el.body.applyForce(force);
      this.el.body.applyTorque(torque);
      this.el.body.activate();
      Ammo.destroy(force);
      Ammo.destroy(torque);
    },
    action(slot, whom) {
      doControl(this.data.action);
      this.el.emit("action", { slot, whom });
    },
    reset() {
      this.ogParent.add(this.el.object3D);
      this.el.removeAttribute("animation");
      this.el.removeAttribute("animation__action");
      this.el.setAttribute("ammo-body", this.ogBody);
      this.el.setAttribute("ammo-shape", this.ogShape);
    },
    equip(e) {
      const { slot, whom } = e.detail;
      this.data.holder = whom;
      const avatar = whom.components["avatar"];
      avatar.data[slot] = this.el;
      avatar.updated.poke();
      this.ogParent = this.el.object3D.parent;
      this.ogBody = this.el.getAttribute("ammo-body");
      this.ogShape = this.el.getAttribute("ammo-shape");
      this.el.removeAttribute("ammo-body");
      this.el.removeAttribute("ammo-shape");
      WIPE_TARGET.set(this.el.object3D.uuid);
      if (avatar.isCurrent()) {
        camera.$.add(this.el.object3D);
        AVATAR.poke();
      } else {
        whom.object3D.add(this.el.object3D);
      }
      switch (slot) {
        case "bag1":
        case "bag2":
        case "bag3":
        case "bag4":
        case "bag5":
        case "bag6":
          break;
        case "hand_left":
        case "hand_right":
          this.el.setAttribute("animation__action", "startEvents: action; autoplay: false; property: object3D.rotation; dur: 1000; easing: linear; to: -90 0 0; loop: 2; dur: 500; dir: alternate; ");
          this.el.setAttribute("animation", "property: object3D.position.y; from: -0.5; to: -.25; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate;");
          this.el.object3D.position.set(slot.indexOf("right") !== -1 ? 0.4 : -0.4, 0, -1);
          this.el.object3D.lookAt(0, 1, -5);
          break;
        default:
          console.log("attached", slot, whom, this.el);
          break;
      }
      whom.emit("equip", { item: this.el, slot });
    },
    use(e) {
      const { slot, whom } = e.detail;
      const avatar = whom.components["avatar"];
      const existing = avatar.data[slot];
      if (existing) {
        if (existing !== this.el)
          return;
        this.action(slot, whom);
        return;
      }
      this.equip(e);
    },
    remove() {
      this.el.removeEventListener("use", this.use);
      this.el.removeEventListener("throw", this.throw);
      this.el.removeEventListener("drop", this.drop);
    }
  });

  // src/node/items.svelte
  function create_fragment13(ctx) {
    let a_mixin0;
    let t0;
    let a_mixin1;
    let t1;
    let a_mixin2;
    let t2;
    let a_mixin3;
    let t3;
    let a_mixin4;
    let t4;
    let a_mixin5;
    let t5;
    let a_mixin6;
    let t6;
    let a_mixin7;
    return {
      c() {
        a_mixin0 = element("a-mixin");
        t0 = space();
        a_mixin1 = element("a-mixin");
        t1 = space();
        a_mixin2 = element("a-mixin");
        t2 = space();
        a_mixin3 = element("a-mixin");
        t3 = space();
        a_mixin4 = element("a-mixin");
        t4 = space();
        a_mixin5 = element("a-mixin");
        t5 = space();
        a_mixin6 = element("a-mixin");
        t6 = space();
        a_mixin7 = element("a-mixin");
        set_custom_element_data(a_mixin0, "id", "dagger");
        set_custom_element_data(a_mixin0, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin0, "gltf-model", "./glb/dagger.glb");
        set_custom_element_data(a_mixin0, "scale", "0.01 0.01 0.01");
        set_custom_element_data(a_mixin0, "target", "\u{1F5E1}\uFE0F");
        set_custom_element_data(a_mixin0, "item", "");
        set_custom_element_data(a_mixin0, "sfxr__use", sfx_sword);
        set_custom_element_data(a_mixin0, "sfxr__bump", sfx_sword);
        set_custom_element_data(a_mixin0, "ammo-body", "type: dynamic;scaleAutoUpdate: false; mass: 0.1;");
        set_custom_element_data(a_mixin0, "ammo-shape", "type:box; fit: manual; halfExtents: 0.2 0.75 0.2; offset: 0 0.45 0");
        set_custom_element_data(a_mixin1, "id", "armor_black");
        set_custom_element_data(a_mixin1, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin1, "gltf-model", "./glb/armor_black.glb");
        set_custom_element_data(a_mixin1, "scale", "0.01 0.01 0.01");
        set_custom_element_data(a_mixin1, "ammo-body", "type: dynamic;scaleAutoUpdate: false;");
        set_custom_element_data(a_mixin1, "ammo-shape", "type:box; fit: manual; halfExtents: 0.4 0.4 0.4; offset: 0 0 0");
        set_custom_element_data(a_mixin2, "id", "chest");
        set_custom_element_data(a_mixin2, "target", "\u{1F9F0}");
        set_custom_element_data(a_mixin2, "sfxr__use", sfx_item);
        set_custom_element_data(a_mixin2, "sfxr__bump", sfx_coin);
        set_custom_element_data(a_mixin2, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin2, "gltf-model", "./glb/chest.glb");
        set_custom_element_data(a_mixin2, "scale", "0.01 0.01 0.01");
        set_custom_element_data(a_mixin2, "ammo-body", "type: dynamic;scaleAutoUpdate: false;mass: 5;");
        set_custom_element_data(a_mixin2, "ammo-shape", "type:box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: 0 0.4 0");
        set_custom_element_data(a_mixin3, "id", "bow");
        set_custom_element_data(a_mixin3, "target", "\u{1F3F9}");
        set_custom_element_data(a_mixin3, "sfxr__use", sfx_near_miss);
        set_custom_element_data(a_mixin3, "sfxr__bump", sfx_near_miss);
        set_custom_element_data(a_mixin3, "item", "");
        set_custom_element_data(a_mixin3, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin3, "gltf-model", "./glb/bow.glb");
        set_custom_element_data(a_mixin3, "scale", "0.01 0.01 0.01");
        set_custom_element_data(a_mixin3, "ammo-body", "type: dynamic;scaleAutoUpdate: false;mass: 0.1;");
        set_custom_element_data(a_mixin3, "ammo-shape", "type:box; fit: manual; halfExtents: 0.5 1 0.15; offset: 0 0 0");
        set_custom_element_data(a_mixin4, "id", "arrow");
        set_custom_element_data(a_mixin4, "target", "\u2197\uFE0F");
        set_custom_element_data(a_mixin4, "item", "");
        set_custom_element_data(a_mixin4, "sfxr__use", sfx_item);
        set_custom_element_data(a_mixin4, "sfxr__bump", sfx_coin);
        set_custom_element_data(a_mixin4, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin4, "gltf-model", "./glb/arrow.glb");
        set_custom_element_data(a_mixin4, "scale", "0.01 0.01 0.01");
        set_custom_element_data(a_mixin4, "ammo-body", "type: dynamic;scaleAutoUpdate: false;mass: 0.1;");
        set_custom_element_data(a_mixin4, "ammo-shape", "type:box; fit: manual; halfExtents: 0.1 1 0.1; offset: 0 0 0");
        set_custom_element_data(a_mixin5, "id", "bag");
        set_custom_element_data(a_mixin5, "target", "\u{1F45D}");
        set_custom_element_data(a_mixin5, "sfxr__use", sfx_item);
        set_custom_element_data(a_mixin5, "sfxr__bump", sfx_coin);
        set_custom_element_data(a_mixin5, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin5, "gltf-model", "./glb/bag.glb");
        set_custom_element_data(a_mixin5, "scale", "0.01 0.01 0.01");
        set_custom_element_data(a_mixin5, "ammo-body", "type: dynamic;scaleAutoUpdate: false;mass: 0.5;");
        set_custom_element_data(a_mixin5, "ammo-shape", "type:box; fit: manual; halfExtents: 0.4 0.4 0.4; offset: 0 0 0");
        set_custom_element_data(a_mixin6, "id", "barrel");
        set_custom_element_data(a_mixin6, "target", "\u{1F6E2}\uFE0F");
        set_custom_element_data(a_mixin6, "sfxr__use", sfx_item);
        set_custom_element_data(a_mixin6, "sfxr__bump", sfx_coin);
        set_custom_element_data(a_mixin6, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin6, "gltf-model", "./glb/barrel.glb");
        set_custom_element_data(a_mixin6, "scale", "2 2 2");
        set_custom_element_data(a_mixin6, "ammo-body", "type: dynamic;scaleAutoUpdate: false;mass: 20;");
        set_custom_element_data(a_mixin6, "ammo-shape", "type:box; fit: manual; halfExtents: 0.75 0.75 0.75; offset: 0 0.5 0");
        set_custom_element_data(a_mixin7, "id", "crate");
        set_custom_element_data(a_mixin7, "target", "\u{1F4E6}");
        set_custom_element_data(a_mixin7, "sfxr__use", sfx_item);
        set_custom_element_data(a_mixin7, "sfxr__bump", sfx_coin);
        set_custom_element_data(a_mixin7, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_mixin7, "gltf-model", "./glb/crate.glb");
        set_custom_element_data(a_mixin7, "scale", "2 2 2");
        set_custom_element_data(a_mixin7, "ammo-body", "type: dynamic;scaleAutoUpdate: false;mass: 10;");
        set_custom_element_data(a_mixin7, "ammo-shape", "type:box; fit: manual; halfExtents: 0.5 0.5 0.5; offset: -2 0.5 1");
      },
      m(target, anchor) {
        insert(target, a_mixin0, anchor);
        insert(target, t0, anchor);
        insert(target, a_mixin1, anchor);
        insert(target, t1, anchor);
        insert(target, a_mixin2, anchor);
        insert(target, t2, anchor);
        insert(target, a_mixin3, anchor);
        insert(target, t3, anchor);
        insert(target, a_mixin4, anchor);
        insert(target, t4, anchor);
        insert(target, a_mixin5, anchor);
        insert(target, t5, anchor);
        insert(target, a_mixin6, anchor);
        insert(target, t6, anchor);
        insert(target, a_mixin7, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(a_mixin0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(a_mixin1);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(a_mixin2);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(a_mixin3);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(a_mixin4);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(a_mixin5);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(a_mixin6);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(a_mixin7);
      }
    };
  }
  var Items = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment13, safe_not_equal, {});
    }
  };
  var items_default = Items;

  // src/game.svelte
  function create_if_block4(ctx) {
    let live;
    let t0;
    let heard;
    let t1;
    let onscreenui;
    let current;
    live = new live_default({});
    heard = new heard_default({});
    onscreenui = new onscreen_ui_default({});
    return {
      c() {
        create_component(live.$$.fragment);
        t0 = space();
        create_component(heard.$$.fragment);
        t1 = space();
        create_component(onscreenui.$$.fragment);
      },
      m(target, anchor) {
        mount_component(live, target, anchor);
        insert(target, t0, anchor);
        mount_component(heard, target, anchor);
        insert(target, t1, anchor);
        mount_component(onscreenui, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(live.$$.fragment, local);
        transition_in(heard.$$.fragment, local);
        transition_in(onscreenui.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(live.$$.fragment, local);
        transition_out(heard.$$.fragment, local);
        transition_out(onscreenui.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(live, detaching);
        if (detaching)
          detach(t0);
        destroy_component(heard, detaching);
        if (detaching)
          detach(t1);
        destroy_component(onscreenui, detaching);
      }
    };
  }
  function create_fragment14(ctx) {
    let webcam;
    let t0;
    let netdata;
    let t1;
    let t2;
    let a_scene;
    let a_assets;
    let a_sphere;
    let t3;
    let audio;
    let audio_src_value;
    let t4;
    let a_mixin;
    let t5;
    let items;
    let t6;
    let camera2;
    let t7;
    let characters;
    let t8;
    let forest;
    let t9;
    let house;
    let t10;
    let debug_1;
    let t11;
    let environmental;
    let a_scene_physics_value;
    let current;
    webcam = new webcam_default({});
    netdata = new netdata_default({});
    let if_block = ctx[0] && create_if_block4(ctx);
    items = new items_default({});
    camera2 = new camera_default({});
    characters = new characters_default({});
    forest = new forest_default({});
    house = new house_default({});
    debug_1 = new debug_default({});
    environmental = new environmental_default({ props: { groundSize: 200 } });
    return {
      c() {
        create_component(webcam.$$.fragment);
        t0 = space();
        create_component(netdata.$$.fragment);
        t1 = space();
        if (if_block)
          if_block.c();
        t2 = space();
        a_scene = element("a-scene");
        a_assets = element("a-assets");
        a_sphere = element("a-sphere");
        t3 = space();
        audio = element("audio");
        t4 = space();
        a_mixin = element("a-mixin");
        t5 = space();
        create_component(items.$$.fragment);
        t6 = space();
        create_component(camera2.$$.fragment);
        t7 = space();
        create_component(characters.$$.fragment);
        t8 = space();
        create_component(forest.$$.fragment);
        t9 = space();
        create_component(house.$$.fragment);
        t10 = space();
        create_component(debug_1.$$.fragment);
        t11 = space();
        create_component(environmental.$$.fragment);
        set_custom_element_data(a_sphere, "color", "blue");
        set_custom_element_data(a_sphere, "radius", "5");
        attr(audio, "id", "sound-bg");
        if (!src_url_equal(audio.src, audio_src_value = "./sound/bg-ocean.mp3"))
          attr(audio, "src", audio_src_value);
        set_custom_element_data(a_mixin, "id", "shadow");
        set_custom_element_data(a_mixin, "shadow", "cast: true; receive: false");
        set_custom_element_data(a_scene, "keyboard-shortcuts", "enterVR: false");
        set_custom_element_data(a_scene, "stats", ctx[1]);
        set_custom_element_data(a_scene, "renderer", "alpha: false; color;colorManagement: true;");
        set_custom_element_data(a_scene, "shadow", "type:basic;");
        set_custom_element_data(a_scene, "device-orientation-permission-ui", "enabled: false");
        set_custom_element_data(a_scene, "physics", a_scene_physics_value = "driver: ammo; debug: " + ctx[2] + "; iterations: 2; fixedTimeStep: 0.01667; maxSubSteps: 2;");
        set_custom_element_data(a_scene, "uniforms", "");
        set_custom_element_data(a_scene, "net", "");
      },
      m(target, anchor) {
        mount_component(webcam, target, anchor);
        insert(target, t0, anchor);
        mount_component(netdata, target, anchor);
        insert(target, t1, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t2, anchor);
        insert(target, a_scene, anchor);
        append(a_scene, a_assets);
        append(a_assets, a_sphere);
        append(a_assets, t3);
        append(a_assets, audio);
        append(a_assets, t4);
        append(a_assets, a_mixin);
        append(a_assets, t5);
        mount_component(items, a_assets, null);
        append(a_scene, t6);
        mount_component(camera2, a_scene, null);
        append(a_scene, t7);
        mount_component(characters, a_scene, null);
        append(a_scene, t8);
        mount_component(forest, a_scene, null);
        append(a_scene, t9);
        mount_component(house, a_scene, null);
        append(a_scene, t10);
        mount_component(debug_1, a_scene, null);
        append(a_scene, t11);
        mount_component(environmental, a_scene, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (ctx2[0]) {
          if (if_block) {
            if (dirty & 1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block4(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t2.parentNode, t2);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (!current || dirty & 2) {
          set_custom_element_data(a_scene, "stats", ctx2[1]);
        }
        if (!current || dirty & 4 && a_scene_physics_value !== (a_scene_physics_value = "driver: ammo; debug: " + ctx2[2] + "; iterations: 2; fixedTimeStep: 0.01667; maxSubSteps: 2;")) {
          set_custom_element_data(a_scene, "physics", a_scene_physics_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(webcam.$$.fragment, local);
        transition_in(netdata.$$.fragment, local);
        transition_in(if_block);
        transition_in(items.$$.fragment, local);
        transition_in(camera2.$$.fragment, local);
        transition_in(characters.$$.fragment, local);
        transition_in(forest.$$.fragment, local);
        transition_in(house.$$.fragment, local);
        transition_in(debug_1.$$.fragment, local);
        transition_in(environmental.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(webcam.$$.fragment, local);
        transition_out(netdata.$$.fragment, local);
        transition_out(if_block);
        transition_out(items.$$.fragment, local);
        transition_out(camera2.$$.fragment, local);
        transition_out(characters.$$.fragment, local);
        transition_out(forest.$$.fragment, local);
        transition_out(house.$$.fragment, local);
        transition_out(debug_1.$$.fragment, local);
        transition_out(environmental.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(webcam, detaching);
        if (detaching)
          detach(t0);
        destroy_component(netdata, detaching);
        if (detaching)
          detach(t1);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(a_scene);
        destroy_component(items);
        destroy_component(camera2);
        destroy_component(characters);
        destroy_component(forest);
        destroy_component(house);
        destroy_component(debug_1);
        destroy_component(environmental);
      }
    };
  }
  function instance12($$self, $$props, $$invalidate) {
    let $open_ui;
    let $open_stats;
    let $open_debug;
    component_subscribe($$self, open_ui, ($$value) => $$invalidate(0, $open_ui = $$value));
    component_subscribe($$self, open_stats, ($$value) => $$invalidate(1, $open_stats = $$value));
    component_subscribe($$self, open_debug, ($$value) => $$invalidate(2, $open_debug = $$value));
    return [$open_ui, $open_stats, $open_debug];
  }
  var Game = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance12, create_fragment14, safe_not_equal, {});
    }
  };
  var game_default = Game;

  // src/ui/title.svelte
  function create_fragment15(ctx) {
    let div3;
    let t8;
    let div7;
    return {
      c() {
        div3 = element("div");
        div3.innerHTML = `<div class="favicon svelte-1u5pxqu"></div> 
	<div class="full svelte-1u5pxqu"><div class="title svelte-1u5pxqu"><offset class="svelte-1u5pxqu"><b class="svelte-1u5pxqu">a</b>  <br/></offset> 
			<b class="svelte-1u5pxqu">G</b>oblin
			<offset class="svelte-1u5pxqu"><b class="svelte-1u5pxqu">L</b>ife</offset></div></div>`;
        t8 = space();
        div7 = element("div");
        div7.innerHTML = `<div class="button kofi svelte-1u5pxqu"><a href="https://ko-fi.com/Z8Z1C37O3" target="_blank" class="svelte-1u5pxqu">\u{1FA99}</a></div> 
	<div style="width: 40vh;"></div> 
	<div class="button discord svelte-1u5pxqu"><a href="https://twitter.com/agoblinlife" target="_blank" class="svelte-1u5pxqu">\u{1F426}</a></div>`;
        attr(div3, "class", "intro svelte-1u5pxqu");
        attr(div7, "class", "ads svelte-1u5pxqu");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        insert(target, t8, anchor);
        insert(target, div7, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div3);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(div7);
      }
    };
  }
  var Title = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment15, safe_not_equal, {});
    }
  };
  var title_default = Title;

  // src/ui/video.svelte
  function create_fragment16(ctx) {
    let iframe;
    let iframe_width_value;
    let iframe_src_value;
    return {
      c() {
        iframe = element("iframe");
        attr(iframe, "width", iframe_width_value = 1 / ctx[1].length * 100 + "%");
        attr(iframe, "height", "100%");
        if (!src_url_equal(iframe.src, iframe_src_value = "https://www.youtube.com/embed/" + ctx[0]))
          attr(iframe, "src", iframe_src_value);
        attr(iframe, "title", "YouTube video player");
        attr(iframe, "frameborder", "0");
        attr(iframe, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.allowFullscreen = true;
      },
      m(target, anchor) {
        insert(target, iframe, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & 2 && iframe_width_value !== (iframe_width_value = 1 / ctx2[1].length * 100 + "%")) {
          attr(iframe, "width", iframe_width_value);
        }
        if (dirty & 1 && !src_url_equal(iframe.src, iframe_src_value = "https://www.youtube.com/embed/" + ctx2[0])) {
          attr(iframe, "src", iframe_src_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(iframe);
      }
    };
  }
  function instance13($$self, $$props, $$invalidate) {
    let $videos;
    component_subscribe($$self, videos, ($$value) => $$invalidate(1, $videos = $$value));
    let { src = "MePBW53Rtpw" } = $$props;
    $$self.$$set = ($$props2) => {
      if ("src" in $$props2)
        $$invalidate(0, src = $$props2.src);
    };
    return [src, $videos];
  }
  var Video = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment16, safe_not_equal, { src: 0 });
    }
  };
  var video_default = Video;

  // src/ui/home.svelte
  function get_each_context3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    return child_ctx;
  }
  function create_each_block3(ctx) {
    let video2;
    let current;
    video2 = new video_default({ props: { src: ctx[3] } });
    return {
      c() {
        create_component(video2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(video2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const video_changes = {};
        if (dirty & 2)
          video_changes.src = ctx2[3];
        video2.$set(video_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(video2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(video2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(video2, detaching);
      }
    };
  }
  function create_fragment17(ctx) {
    let div10;
    let div0;
    let t0;
    let title;
    let t1;
    let div8;
    let div3;
    let div1;
    let t2;
    let textarea;
    let t3;
    let div2;
    let t4;
    let div7;
    let div4;
    let t5;
    let div5;
    let t7;
    let div6;
    let t8;
    let div9;
    let current;
    let mounted;
    let dispose;
    title = new title_default({});
    let each_value = ctx[1];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div10 = element("div");
        div0 = element("div");
        t0 = space();
        create_component(title.$$.fragment);
        t1 = space();
        div8 = element("div");
        div3 = element("div");
        div1 = element("div");
        t2 = space();
        textarea = element("textarea");
        t3 = space();
        div2 = element("div");
        t4 = space();
        div7 = element("div");
        div4 = element("div");
        t5 = space();
        div5 = element("div");
        div5.textContent = "\u{1F4DF}";
        t7 = space();
        div6 = element("div");
        t8 = space();
        div9 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div0, "class", "sprites sprite svelte-wh29xi");
        attr(div1, "class", "flex svelte-wh29xi");
        attr(textarea, "type", "text");
        attr(textarea, "class", "text button svelte-wh29xi");
        attr(textarea, "maxlength", "200");
        textarea.value = ctx[0];
        textarea.readOnly = true;
        attr(div2, "class", "flex svelte-wh29xi");
        attr(div3, "class", "span2 full svelte-wh29xi");
        attr(div4, "class", "flex svelte-wh29xi");
        attr(div5, "type", "button");
        attr(div5, "class", "button icon svelte-wh29xi");
        attr(div5, "value", "GO");
        attr(div6, "class", "flex svelte-wh29xi");
        attr(div7, "class", "span2 full svelte-wh29xi");
        attr(div8, "class", "vbox svelte-wh29xi");
        attr(div9, "class", "flex span2 case svelte-wh29xi");
        attr(div10, "class", "menu svelte-wh29xi");
      },
      m(target, anchor) {
        insert(target, div10, anchor);
        append(div10, div0);
        append(div10, t0);
        mount_component(title, div10, null);
        append(div10, t1);
        append(div10, div8);
        append(div8, div3);
        append(div3, div1);
        append(div3, t2);
        append(div3, textarea);
        append(div3, t3);
        append(div3, div2);
        append(div8, t4);
        append(div8, div7);
        append(div7, div4);
        append(div7, t5);
        append(div7, div5);
        append(div7, t7);
        append(div7, div6);
        append(div10, t8);
        append(div10, div9);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div9, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen(textarea, "copy", copy_handler),
            listen(textarea, "paste", paste_handler),
            listen(textarea, "keydown", keydown_handler),
            listen(div5, "click", ctx[2])
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & 1) {
          textarea.value = ctx2[0];
        }
        if (dirty & 2) {
          each_value = ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context3(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block3(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div9, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(title.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(title.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div10);
        destroy_component(title);
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var copy_handler = (e) => {
    e.preventDefault();
  };
  var paste_handler = (e) => {
    e.preventDefault();
  };
  var keydown_handler = (e) => {
  };
  function instance14($$self, $$props, $$invalidate) {
    let $motd;
    let $videos;
    component_subscribe($$self, motd, ($$value) => $$invalidate(0, $motd = $$value));
    component_subscribe($$self, videos, ($$value) => $$invalidate(1, $videos = $$value));
    if (args.$.has("go")) {
      open_game.set(true);
      open_home.set(false);
    }
    const click_handler = () => {
      open_home.set(false);
      open_game.set(true);
    };
    return [$motd, $videos, click_handler];
  }
  var Home = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance14, create_fragment17, safe_not_equal, {});
    }
  };
  var home_default = Home;

  // src/ui/text.svelte
  function create_if_block5(ctx) {
    let div;
    let input;
    let div_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        input = element("input");
        attr(input, "id", "text");
        attr(input, "type", "text");
        attr(input, "class", "entry svelte-ul99pz");
        input.autofocus = true;
        attr(div, "class", div_class_value = "lofi " + (ctx[2] ? "mobile" : "") + " svelte-ul99pz");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, input);
        set_input_value(input, ctx[1]);
        ctx[6](input);
        input.focus();
        if (!mounted) {
          dispose = [
            listen(input, "input", ctx[5]),
            listen(input, "blur", ctx[4]),
            listen(input, "keydown", ctx[7])
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & 2 && input.value !== ctx2[1]) {
          set_input_value(input, ctx2[1]);
        }
        if (dirty & 4 && div_class_value !== (div_class_value = "lofi " + (ctx2[2] ? "mobile" : "") + " svelte-ul99pz")) {
          attr(div, "class", div_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        ctx[6](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment18(ctx) {
    let if_block_anchor;
    let if_block = ctx[1] !== void 0 && create_if_block5(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (ctx2[1] !== void 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block5(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance15($$self, $$props, $$invalidate) {
    let $open_text;
    let $ismobile;
    component_subscribe($$self, open_text, ($$value) => $$invalidate(1, $open_text = $$value));
    component_subscribe($$self, ismobile, ($$value) => $$invalidate(2, $ismobile = $$value));
    let ele;
    function send() {
      talk.set(open_text.$);
      open_text.set(void 0);
    }
    function escape() {
      open_text.set(void 0);
    }
    key_down.on(() => {
      switch (key_down.$) {
        case "`":
          if (open_text.$ === void 0) {
            open_text.set("~ ");
            requestAnimationFrame(() => ele?.focus());
          }
          break;
        case "enter":
          if (open_text.$ === void 0) {
            open_text.set("");
            requestAnimationFrame(() => ele?.focus());
          }
      }
    });
    function input_input_handler() {
      $open_text = this.value;
      open_text.set($open_text);
    }
    function input_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        ele = $$value;
        $$invalidate(0, ele);
      });
    }
    const keydown_handler2 = (e) => {
      if (e.key === "Enter") {
        send();
      }
      switch (e.key) {
        case "Enter":
          send();
          break;
        case "Escape":
          escape();
          break;
      }
    };
    return [
      ele,
      $open_text,
      $ismobile,
      send,
      escape,
      input_input_handler,
      input_binding,
      keydown_handler2
    ];
  }
  var Text = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance15, create_fragment18, safe_not_equal, {});
    }
  };
  var text_default = Text;

  // src/ui/loading.svelte
  function create_fragment19(ctx) {
    let div4;
    let div0;
    let t0;
    let title;
    let t1;
    let div3;
    let div1;
    let t2;
    let textarea;
    let t3;
    let div2;
    let current;
    title = new title_default({});
    return {
      c() {
        div4 = element("div");
        div0 = element("div");
        t0 = space();
        create_component(title.$$.fragment);
        t1 = space();
        div3 = element("div");
        div1 = element("div");
        t2 = space();
        textarea = element("textarea");
        t3 = space();
        div2 = element("div");
        attr(div0, "class", "sprites sprite svelte-6729qq");
        attr(div1, "class", "flex svelte-6729qq");
        attr(textarea, "type", "text");
        attr(textarea, "class", "text button svelte-6729qq");
        attr(textarea, "maxlength", "200");
        textarea.value = ctx[0];
        textarea.readOnly = true;
        attr(div2, "class", "flex svelte-6729qq");
        attr(div3, "class", "span2 full svelte-6729qq");
        attr(div4, "class", "menu svelte-6729qq");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div0);
        append(div4, t0);
        mount_component(title, div4, null);
        append(div4, t1);
        append(div4, div3);
        append(div3, div1);
        append(div3, t2);
        append(div3, textarea);
        append(div3, t3);
        append(div3, div2);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & 1) {
          textarea.value = ctx2[0];
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(title.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(title.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div4);
        destroy_component(title);
      }
    };
  }
  function instance16($$self, $$props, $$invalidate) {
    let $loading;
    component_subscribe($$self, loading, ($$value) => $$invalidate(0, $loading = $$value));
    return [$loading];
  }
  var Loading = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance16, create_fragment19, safe_not_equal, {});
    }
  };
  var loading_default = Loading;

  // src/ui/help.svelte
  function create_fragment20(ctx) {
    let div5;
    let div0;
    let t0;
    let div4;
    let div3;
    let div1;
    let t1;
    let textarea;
    let t2;
    let div2;
    let mounted;
    let dispose;
    return {
      c() {
        div5 = element("div");
        div0 = element("div");
        t0 = space();
        div4 = element("div");
        div3 = element("div");
        div1 = element("div");
        t1 = space();
        textarea = element("textarea");
        t2 = space();
        div2 = element("div");
        attr(div0, "class", "sprites sprite svelte-1qmwcry");
        attr(div1, "class", "flex svelte-1qmwcry");
        attr(textarea, "type", "text");
        attr(textarea, "class", "text button svelte-1qmwcry");
        attr(textarea, "maxlength", "200");
        textarea.value = ctx[0];
        textarea.readOnly = true;
        attr(div2, "class", "flex svelte-1qmwcry");
        attr(div3, "class", "span2 full svelte-1qmwcry");
        attr(div4, "class", "vbox svelte-1qmwcry");
        attr(div5, "class", "menu svelte-1qmwcry");
      },
      m(target, anchor) {
        insert(target, div5, anchor);
        append(div5, div0);
        append(div5, t0);
        append(div5, div4);
        append(div4, div3);
        append(div3, div1);
        append(div3, t1);
        append(div3, textarea);
        append(div3, t2);
        append(div3, div2);
        if (!mounted) {
          dispose = [
            listen(div1, "click", ctx[1]),
            listen(div2, "click", ctx[1])
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          textarea.value = ctx2[0];
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div5);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance17($$self, $$props, $$invalidate) {
    let $helptext;
    component_subscribe($$self, helptext, ($$value) => $$invalidate(0, $helptext = $$value));
    function close() {
      open_help.set(false);
    }
    return [$helptext, close];
  }
  var Help = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance17, create_fragment20, safe_not_equal, {});
    }
  };
  var help_default = Help;

  // src/main.svelte
  function create_if_block_3(ctx) {
    let help;
    let current;
    help = new help_default({});
    return {
      c() {
        create_component(help.$$.fragment);
      },
      m(target, anchor) {
        mount_component(help, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(help.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(help.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(help, detaching);
      }
    };
  }
  function create_if_block_2(ctx) {
    let loading2;
    let current;
    loading2 = new loading_default({});
    return {
      c() {
        create_component(loading2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(loading2, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(loading2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(loading2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(loading2, detaching);
      }
    };
  }
  function create_if_block_1(ctx) {
    let home;
    let current;
    home = new home_default({});
    return {
      c() {
        create_component(home.$$.fragment);
      },
      m(target, anchor) {
        mount_component(home, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(home.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(home.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(home, detaching);
      }
    };
  }
  function create_if_block6(ctx) {
    let game;
    let current;
    game = new game_default({});
    return {
      c() {
        create_component(game.$$.fragment);
      },
      m(target, anchor) {
        mount_component(game, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(game.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(game.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(game, detaching);
      }
    };
  }
  function create_fragment21(ctx) {
    let text_1;
    let t0;
    let t1;
    let t2;
    let t3;
    let if_block3_anchor;
    let current;
    text_1 = new text_default({});
    let if_block0 = ctx[0] && create_if_block_3(ctx);
    let if_block1 = ctx[1] && create_if_block_2(ctx);
    let if_block2 = ctx[2] && create_if_block_1(ctx);
    let if_block3 = ctx[3] && create_if_block6(ctx);
    return {
      c() {
        create_component(text_1.$$.fragment);
        t0 = space();
        if (if_block0)
          if_block0.c();
        t1 = space();
        if (if_block1)
          if_block1.c();
        t2 = space();
        if (if_block2)
          if_block2.c();
        t3 = space();
        if (if_block3)
          if_block3.c();
        if_block3_anchor = empty();
      },
      m(target, anchor) {
        mount_component(text_1, target, anchor);
        insert(target, t0, anchor);
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t1, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t2, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, t3, anchor);
        if (if_block3)
          if_block3.m(target, anchor);
        insert(target, if_block3_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (ctx2[0]) {
          if (if_block0) {
            if (dirty & 1) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_3(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t1.parentNode, t1);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (ctx2[1]) {
          if (if_block1) {
            if (dirty & 2) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_2(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t2.parentNode, t2);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (ctx2[2]) {
          if (if_block2) {
            if (dirty & 4) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_1(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(t3.parentNode, t3);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        if (ctx2[3]) {
          if (if_block3) {
            if (dirty & 8) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block6(ctx2);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(text_1.$$.fragment, local);
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block2);
        transition_in(if_block3);
        current = true;
      },
      o(local) {
        transition_out(text_1.$$.fragment, local);
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block2);
        transition_out(if_block3);
        current = false;
      },
      d(detaching) {
        destroy_component(text_1, detaching);
        if (detaching)
          detach(t0);
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t1);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t2);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(t3);
        if (if_block3)
          if_block3.d(detaching);
        if (detaching)
          detach(if_block3_anchor);
      }
    };
  }
  function instance18($$self, $$props, $$invalidate) {
    let $open_help;
    let $open_loading;
    let $open_home;
    let $open_game;
    component_subscribe($$self, open_help, ($$value) => $$invalidate(0, $open_help = $$value));
    component_subscribe($$self, open_loading, ($$value) => $$invalidate(1, $open_loading = $$value));
    component_subscribe($$self, open_home, ($$value) => $$invalidate(2, $open_home = $$value));
    component_subscribe($$self, open_game, ($$value) => $$invalidate(3, $open_game = $$value));
    return [$open_help, $open_loading, $open_home, $open_game];
  }
  var Main = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance18, create_fragment21, safe_not_equal, {});
    }
  };
  var main_default = Main;

  // src/index.ts
  var app = new main_default({
    target: document.getElementById("svelte"),
    props: {}
  });
  window.addEventListener("contextmenu", (e) => e.preventDefault());
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
