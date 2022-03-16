! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.test_waters = t() : e.test_waters = t() }(this, (function() { return (() => { "use strict"; var e = { d: (t, n) => { for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] }) }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } },
            t = {};

        function n(e, t, n, r, o, u, i) { try { var a = e[u](i),
                    c = a.value } catch (e) { return void n(e) }
            a.done ? t(c) : Promise.resolve(c).then(r, o) }

        function r(e) { return function() { var t = this,
                    r = arguments; return new Promise((function(o, u) { var i = e.apply(t, r);

                    function a(e) { n(i, o, u, a, c, "next", e) }

                    function c(e) { n(i, o, u, a, c, "throw", e) }
                    a(void 0) })) } }

        function o(e) { for (var t = ["helllo", [1, 2, 3],
                    ["item one", "item two"], { id: 1, name: "lesley" }, !0, 34, {},
                    void 0, null, 0, "", -4
                ], n = [], r = 0; r < t.length; r++) { var o = {},
                    u = t[r],
                    i = void 0; try { i = e(t[r]) } catch (e) { i = e }
                o.input = u, o.output = i, n.push(o) } return n }

        function u(e, t, n) { for (var r = [], o = 0; o < n.length; o++) { var u = {};
                u.name = e, u.input = n[o]; var i = t(n[o]);
                u.output = i, r.push(u) } return r }

        function i(e, t, n) { return a.apply(this, arguments) }

        function a() { return (a = r(regeneratorRuntime.mark((function e(t, n, r) { var o, u, i, a; return regeneratorRuntime.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            o = [], u = 0;
                        case 2:
                            if (!(u < r.length)) { e.next = 14; break } return (i = {}).name = t, i.input = r[u], e.next = 8, n(r[u]);
                        case 8:
                            a = e.sent, i.output = a, o.push(i);
                        case 11:
                            u++, e.next = 2; break;
                        case 14:
                            return e.abrupt("return", o);
                        case 15:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) } return e.r(t), e.d(t, { test: () => o, testAsyncFunction: () => i, testFunction: () => u }), t })() }));