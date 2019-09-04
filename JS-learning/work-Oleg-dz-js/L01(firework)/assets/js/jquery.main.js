"use strict";

function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
}

// function on
jQuery(document).ready(function() {
    greensockInit(), greensockInit2(), btmAnimate();
});

//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------
var btmAnimate = function() {
    var btnVar = document.querySelector(".btn-start"), mainPageVar = document.querySelector(".main-section"), jsHiddenVar = document.querySelectorAll(".js-hidden"), tl = new TimelineMax();
    btnVar.addEventListener("click", function() {
        tl.to(mainPageVar, 1, {
            opacity: 0,
            scale: .9
        }).set(jsHiddenVar, {
            className: "+=js-hidden-off"
        });
    });
}, timerInit = function() {
    var timer1 = new function(obj) {
        var _this = this;
        this.time = obj.time, this.fps = obj.fps, this.onEnd = obj.onEnd || null, this.onStart = obj.onStart || null, 
        this.onTick = obj.onTick || null, this.intervalID = null, this.start = function() {
            return _this.interval = setInterval(_this.update, 1e3 / _this.fps), _this.onStart && _this.onStart(), 
            _this;
        }, this.stop = function() {
            clearInterval(_this.interval), _this.onEnd && _this.onEnd();
        }, this.update = function() {
            return 0 < _this.time ? _this.time -= 1 / _this.fps : _this.stop(), _this.onTick && _this.onTick(), 
            _this.get();
        }, this.get = function(par) {
            switch (par) {
              case void 0:
                return _this.time;

              case "dig":
                return Math.ceil(_this.time);

              case "end":
                return _this.onEnd();
            }
        };
    }({
        time: 30,
        fps: 60,
        onTick: tick,
        onEnd: function() {
            console.log("timer ended");
        },
        onStart: function() {
            console.log("timer started");
        }
    });
    function tick() {
        id("output").innerHTML = timer1.get("dig"), id("slider").style.width = timer1.get() / 30 * 100 + "%";
    }
    function id(id) {
        return document.getElementById(id);
    }
    timer1.start(), requestAnimationFrame(tick);
};

 //https://www.youtube.com/watch?v=BAfiXPkubYw
// tutorial https://abraxabra.ru/blog/prochee/greensock-for-beginners-a-tutorial-on-web-animation-part-1/
// function init
function greensockInit() {
    TweenMax.set(".my-element", {
        paddingBottom: 60,
        rotation: -15
    }), // just css value
    TweenMax.from(".my-element", 6, {
        color: "#DC143C"
    }), TweenMax.to(".my-element", 6, {
        rotation: 0,
        color: "#00FF00",
        delay: 6
    });
    //second animation with construction
    var tl = new TimelineMax();
    TweenMax.set(".my-element2", {
        position: "relative"
    }), tl.fromTo(".my-element2", 4, {
        // from state
        opacity: 1,
        top: "-100px"
    }, {
        // to end state
        opacity: .5,
        top: "100px"
    }).to(".my-element2", 4, {
        top: "-100px",
        opacity: 1,
        ease: Bounce.line
    }).to(".my-element3", 4, {
        scale: .5
    }).to(".my-element2", 4, {
        top: "0px",
        scale: .8
    });
    //The third animation with group
    var tl2 = new TimelineMax();
    TweenMax.set(".my-element4", {
        display: "flex"
    }), tl2.staggerTo(".my-element4 img", .5, {
        rotation: 180
    }, 1).staggerTo(".my-element4 img", .5, {
        rotation: 0
    }, 1);
}

function greensockInit2() {
    var tl = new TimelineMax(), $box1 = $(".box1"), $box2 = $(".box2"), $box3 = $(".box3"), $box4 = $(".box4"), $allBox = $(".box1, .box2, .box3, .box4"), restart = $(".restart-box"), pause = $(".pause-box"), play = $(".play-box");
    tl.to($box1, 1, {
        left: "100%"
    }).to($box2, 1, {
        right: "100%"
    }, "-=1").to($box2, 1, {
        bottom: "-100%"
    }).to($box3, 1, {
        top: "-100%"
    }, "-=1").to($box4, 1, {
        top: "-100%"
    }).to($box1, 1, {
        bottom: "-100%"
    }, "-=1").to($box2, 1, {
        right: "0"
    }).to($box1, 1, {
        left: "0"
    }, "-=1").to($box1, 1, {
        top: "0"
    }).to($box2, 1, {
        top: "0"
    }, "-=1").to($box3, 1, {
        top: "0%"
    }, "-=1").to($box4, 1, {
        top: "0%"
    }, "-=1").to($allBox, 3, {
        rotation: 180
    }).to($allBox, 3, {
        fontSize: "100px"
    }, "+=1").add("newPoint").to($allBox, 5, {
        scale: .5
    }).to($allBox, 5, {
        scale: .9
    }).to($box1, 3, {
        rotation: 360,
        fontSize: "50px"
    }, "newPoint").to($box2, 3, {
        rotation: 0,
        fontSize: "80px"
    }, "newPoint").to($box3, 3, {
        rotation: 360,
        fontSize: "120px"
    }, "newPoint").to($box4, 3, {
        rotation: 0,
        fontSize: "140px"
    }, "newPoint"), restart.on("click", function() {
        $allBox.removeAttr("style"), tl.restart();
    }), pause.on("click", function() {
        tl.pause();
    }), play.on("click", function() {
        tl.play();
    });
}

 //-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------
//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------
//-----module greensock js
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/ var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    var a, b, c, d, e, f, g, i, j, k, l, m, n, o, p, q;
    _gsScope._gsDefine("TweenMax", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        function g(a, b, d) {
            c.call(this, a, b, d), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, 
            this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._repeat && this._uncache(!0), this.render = g.prototype.render;
        }
        var d = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++])) ;
            return c;
        }, e = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }, f = function(a) {
            if ("function" == typeof a) return a;
            var b = "object" == _typeof(a) ? a : {
                each: a
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (!(t = "auto" === b.grid ? 0 : (b.grid || [ 1 / 0 ])[0])) {
                        for (r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && t < u; ) ;
                        t--;
                    }
                    for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, 
                    s = 1 / (r = 0), q = 0; q < u; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), 
                    r < p && (r = p), p < s && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (u < t ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, 
                    v.b = u < 0 ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }, h = 1e-8, i = c._internals, j = i.isSelector, k = i.isArray, l = g.prototype = c.to({}, .1, {}), m = [];
        g.version = "2.1.3", l.constructor = g, l.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, 
        g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, 
        g.render = c.render, g.distribute = f, l.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, 
            this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), 
            c.prototype.invalidate.call(this);
        }, l.updateTo = function(a, b) {
            var d, e = this, f = e.ratio, g = e.vars.immediateRender || a.immediateRender;
            for (d in b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, 
            e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay)), 
            a) e.vars[d] = a[d];
            if (e._initted || g) if (b) e._initted = !1, g && e.render(0, !0, !0); else if (e._gc && e._enabled(!0, !1), 
            e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e), .998 < e._time / e._duration) {
                var h = e._totalTime;
                e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1);
            } else if (e._initted = !1, e._init(), 0 < e._time || g) for (var i, j = 1 / (1 - f), k = e._firstPT; k; ) i = k.s + k.c, 
            k.c *= j, k.s = i - k.c, k = k._next;
            return e;
        }, l.render = function(a, b, d) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var e, f, g, j, k, l, m, n, o, p = this, q = p._dirty ? p.totalDuration() : p._totalDuration, r = p._time, s = p._totalTime, t = p._cycle, u = p._duration, v = p._rawPrevTime;
            if (q - h <= a && 0 <= a ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 != (1 & p._cycle) ? (p._time = 0, 
            p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), 
            p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 
            0 !== u || !p._initted && p.vars.lazy && !d || (p._startTime === p._timeline._duration && (a = 0), 
            (v < 0 || a <= 0 && -h <= a || v === h && "isPause" !== p.data) && v !== a && (d = !0, 
            h < v && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h)) : a < h ? (p._totalTime = p._time = p._cycle = 0, 
            p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && 0 < v) && (f = "onReverseComplete", 
            e = p._reversed), -h < a ? a = 0 : a < 0 && (p._active = !1, 0 !== u || !p._initted && p.vars.lazy && !d || (0 <= v && (d = !0), 
            p._rawPrevTime = n = !b || a || v === a ? a : h)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 
            0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && s <= a && p._cycle--, 
            p._time = p._totalTime - p._cycle * j, p._yoyo && 0 != (1 & p._cycle) && (p._time = u - p._time, 
            (o = p._yoyoEase || p.vars.yoyoEase) && (p._yoyoEase || (!0 !== o || p._initted ? p._yoyoEase = o = !0 === o ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, 
            p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), 
            p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), 
            p._easeType && !o ? (k = p._time / u, (1 === (l = p._easeType) || 3 === l && .5 <= k) && (k = 1 - k), 
            3 === l && (k *= 2), 1 === (m = p._easePower) ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 
            p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), 
            r !== p._time || d || t !== p._cycle) {
                if (!p._initted) {
                    if (p._init(), !p._initted || p._gc) return;
                    if (!d && p._firstPT && (!1 !== p.vars.lazy && p._duration || p.vars.lazy && !p._duration)) return p._time = r, 
                    p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i.lazyTweens.push(p), void (p._lazy = [ a, b ]);
                    !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u);
                }
                for (!1 !== p._lazy && (p._lazy = !1), p._active || !p._paused && p._time !== r && 0 <= a && (p._active = !0), 
                0 === s && (2 === p._initted && 0 < a && p._init(), p._startAt && (0 <= a ? p._startAt.render(a, !0, d) : f = f || "_dummyGS"), 
                !p.vars.onStart || 0 === p._totalTime && 0 !== u || (b || p._callback("onStart"))), 
                g = p._firstPT; g; ) g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, 
                g = g._next;
                p._onUpdate && (a < 0 && p._startAt && p._startTime && p._startAt.render(a, !0, d), 
                b || p._totalTime === s && !f || p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), 
                !f || p._gc && !d || (a < 0 && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), 
                e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 
                0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0));
            } else s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate"));
        }, g.to = function(a, b, c) {
            return new g(a, b, c);
        }, g.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g(a, b, c);
        }, g.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            new g(a, b, d);
        }, g.staggerTo = g.allTo = function(a, b, h, i, l, n, o) {
            var p, q, r, s, t = [], u = f(h.stagger || i), v = h.cycle, w = (h.startAt || m).cycle;
            for (k(a) || ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a))), 
            p = (a = a || []).length - 1, r = 0; r <= p; r++) {
                for (s in q = {}, h) q[s] = h[s];
                if (v && (e(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), 
                w) {
                    for (s in w = q.startAt = {}, h.startAt) w[s] = h.startAt[s];
                    e(q.startAt, a, r);
                }
                q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function() {
                    h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m);
                }), t[r] = new g(a[r], b, q);
            }
            return t;
        }, g.staggerFrom = g.allFrom = function(a, b, c, d, e, f, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g.staggerTo(a, b, c, d, e, f, h);
        }, g.staggerFromTo = g.allFromTo = function(a, b, c, d, e, f, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            g.staggerTo(a, b, d, e, f, h, i);
        }, g.delayedCall = function(a, b, c, d, e) {
            return new g(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            });
        }, g.set = function(a, b) {
            return new g(a, 0, b);
        }, g.isTweening = function(a) {
            return 0 < c.getTweensOf(a, !0).length;
        };
        function n(a, b) {
            for (var d = [], e = 0, f = a._first; f; ) f instanceof c ? d[e++] = f : (b && (d[e++] = f), 
            e = (d = d.concat(n(f, b))).length), f = f._next;
            return d;
        }
        var o = g.getAllTweens = function(b) {
            return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b));
        };
        g.killAll = function(a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var f, g, h, i = o(0 != e), j = i.length, k = c && d && e;
            for (h = 0; h < j; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
        }, g.killChildTweensOf = function(a, b) {
            if (null != a) {
                var e, f, h, l, m, n = i.tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a)), k(a)) for (l = a.length; -1 < --l; ) g.killChildTweensOf(a[l], b); else {
                    for (h in e = [], n) for (f = n[h].target.parentNode; f; ) f === a && (e = e.concat(n[h].tweens)), 
                    f = f.parentNode;
                    for (m = e.length, l = 0; l < m; l++) b && e[l].totalTime(e[l].totalDuration()), 
                    e[l]._enabled(!1, !1);
                }
            }
        };
        var p = function(a, c, d, e) {
            c = !1 !== c, d = !1 !== d;
            for (var f, g, h = o(e = !1 !== e), i = c && d && e, j = h.length; -1 < --j; ) g = h[j], 
            (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
        };
        return g.pauseAll = function(a, b, c) {
            p(!0, a, b, c);
        }, g.resumeAll = function(a, b, c) {
            p(!1, a, b, c);
        }, g.globalTimeScale = function(b) {
            var d = a._rootTimeline, e = c.ticker.time;
            return arguments.length ? (b = b || h, d._startTime = e - (e - d._startTime) * d._timeScale / b, 
            d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, 
            d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale;
        }, l.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this.duration() ? this._time / this._duration : this.ratio;
        }, l.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
        }, l.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return c < a && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, l.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
        }, l.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, 
            this._dirty = !1), this._totalDuration);
        }, l.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, l.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, l.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, g;
    }, !0), _gsScope._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = function(a) {
            b.call(this, a);
            var c, d, e = this, f = e.vars;
            for (d in e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, 
            e._sortChildren = !0, e._onUpdate = f.onUpdate, f) c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
            i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
        }, e = 1e-8, f = c._internals, g = d._internals = {}, h = f.isSelector, i = f.isArray, j = f.lazyTweens, k = f.lazyRender, l = _gsScope._gsDefine.globals, m = function(a) {
            var b, c = {};
            for (b in a) c[b] = a[b];
            return c;
        }, n = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
            delete a.cycle;
        }, o = g.pauseCallback = function() {}, q = function(a, b, c, d) {
            var e = "immediateRender";
            return e in b || (b[e] = !(c && !1 === c[e] || d)), b;
        }, r = function(a) {
            if ("function" == typeof a) return a;
            var b = "object" == _typeof(a) ? a : {
                each: a
            }, c = b.ease, d = b.from || 0, e = b.base || 0, f = {}, g = isNaN(d), h = b.axis, i = {
                center: .5,
                end: 1
            }[d] || 0;
            return function(a, j, k) {
                var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                if (!v) {
                    if (!(t = "auto" === b.grid ? 0 : (b.grid || [ 1 / 0 ])[0])) {
                        for (r = -1 / 0; r < (r = k[t++].getBoundingClientRect().left) && t < u; ) ;
                        t--;
                    }
                    for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, 
                    s = 1 / (r = 0), q = 0; q < u; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), 
                    r < p && (r = p), p < s && (s = p);
                    v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (u < t ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, 
                    v.b = u < 0 ? e - u : e;
                }
                return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
            };
        }, s = d.prototype = new b();
        return d.version = "2.1.3", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, 
        s.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
        }, s.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, q(0, d)), e);
        }, s.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return e = q(0, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }, s.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), s = r(e.stagger || f), t = e.startAt, u = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a), h(a = a || []) && (a = function(a) {
                var b, c = [], d = a.length;
                for (b = 0; b !== d; c.push(a[b++])) ;
                return c;
            }(a)), o = 0; o < a.length; o++) l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), 
            u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
            return this.add(q, g);
        }, s.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.runBackwards = !0, this.staggerTo(a, b, q(0, c), d, e, f, g, h);
        }, s.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, this.staggerTo(a, b, q(0, d, c), e, f, g, h, i);
        }, s.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        }, s.set = function(a, b, d) {
            return this.add(new c(a, 0, q(0, b, null, !0)), d);
        }, d.exportRoot = function(a, b) {
            null == (a = a || {}).smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g, h, i = new d(a), j = i._timeline;
            for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, 
            g = j._first; g; ) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || ((f = g._startTime - g._delay) < 0 && (e = 1), 
            i.add(g, f)), g = h;
            return j.add(i, 0), e && i.totalDuration(), i;
        }, s.add = function(e, f, g, h) {
            var j, k, l, m, n, o, p = this;
            if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; l < k; l++) i(m = e[l]) && (m = new d({
                        tweens: m
                    })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), 
                    j += h;
                    return p._uncache(!0);
                }
                if ("string" == typeof e) return p.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e);
            }
            if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, 
            (!e._duration || 1e-5 < Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime) && e.render(j, !1, !1)), 
            (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration()) for (o = (n = p).rawTime() > e._startTime; n._timeline; ) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), 
            n = n._timeline;
            return p;
        }, s.remove = function(b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, 
                this;
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; -1 < --d; ) this.remove(b[d]);
                return this;
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, s._remove = function(a, c) {
            return b.prototype._remove.call(this, a, c), this._last ? this._time > this.duration() && (this._time = this._duration, 
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, 
            this;
        }, s.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, s.insert = s.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, s.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, s.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, s.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, 
            this.add(f, a);
        }, s.removeLabel = function(a) {
            return delete this._labels[a], this;
        }, s.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, s._parseTimeOrLabel = function(b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; -1 < --g; ) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
            if (f = "number" != typeof b || c ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, 
            "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f); else {
                if (-1 === (g = b.indexOf("="))) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = 1 < g ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
            }
            return Number(b) + c;
        }, s.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b);
        }, s.stop = function() {
            return this.paused(!0);
        }, s.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        }, s.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        }, s.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n, o = this, p = o._time, q = o._dirty ? o.totalDuration() : o._totalDuration, r = o._startTime, s = o._timeScale, t = o._paused;
            if (p !== o._time && (a += o._time - p), o._hasPause && !o._forcingPlayhead && !b) {
                if (p < a) for (d = o._first; d && d._startTime <= a && !l; ) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), 
                d = d._next; else for (d = o._last; d && d._startTime >= a && !l; ) d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (l = d), 
                d = d._prev;
                l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale);
            }
            if (q - e <= a && 0 <= a) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, 
            h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (a <= 0 && -e <= a || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, 
            o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 
            a = q + 1e-4; else if (a < e) if (o._totalTime = o._time = 0, -e < a && (a = 0), 
            (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (0 < o._rawPrevTime || a < 0 && 0 <= o._rawPrevTime)) && (h = "onReverseComplete", 
            f = o._reversed), a < 0) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, 
            h = "onReverseComplete") : 0 <= o._rawPrevTime && o._first && (i = !0), o._rawPrevTime = a; else {
                if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f) for (d = o._first; d && 0 === d._startTime; ) d._duration || (f = !1), 
                d = d._next;
                a = 0, o._initted || (i = !0);
            } else o._totalTime = o._time = o._rawPrevTime = a;
            if (o._time !== p && o._first || c || i || l) {
                if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && 0 < a && (o._active = !0), 
                0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), 
                p <= (m = o._time)) for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t)); ) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), 
                o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g; else for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t)); ) {
                    if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                        if (l === d) {
                            for (l = d._prev; l && l.endTime() > o._time; ) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), 
                            l = l._prev;
                            l = null, o.pause(), o._pauseTime = n;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = g;
                }
                o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || r !== o._startTime && s === o._timeScale || !(0 === o._time || q >= o.totalDuration()) || (f && (j.length && k(), 
                o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)));
            }
        }, s._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next;
            }
            return !1;
        }, s.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; ) g._startTime < e || (g instanceof c ? !1 !== b && (f[h++] = g) : (!1 !== d && (f[h++] = g), 
            !1 !== a && (h = (f = f.concat(g.getChildren(!0, b, d))).length))), g = g._next;
            return f;
        }, s.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0), e = (d = c.getTweensOf(a)).length; -1 < --e; ) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
        }, s.recent = function() {
            return this._recent;
        }, s._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this) return !0;
                b = b.timeline;
            }
            return !1;
        }, s.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), 
            e = e._next;
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
        }, s._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; -1 < --d; ) c[d]._kill(a, b) && (e = !0);
            return e;
        }, s.clear = function(a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; -1 < --c; ) b[c]._enabled(!1, !1);
            return !1 !== a && (this._labels = {}), this._uncache(!0);
        }, s.invalidate = function() {
            for (var b = this._first; b; ) b.invalidate(), b = b._next;
            return a.prototype.invalidate.call(this);
        }, s._enabled = function(a, c) {
            if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c);
        }, s.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e;
        }, s.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), 
            this) : (this._dirty && this.totalDuration(), this._duration);
        }, s.totalDuration = function(a) {
            if (arguments.length) return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
            if (this._dirty) {
                for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f; ) b = f._prev, 
                f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, 
                e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, 
                f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, 
                e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), 
                e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), d < (c = f._startTime + f._totalDuration / f._timeScale) && (d = c), 
                f = b;
                e._duration = e._totalDuration = d, e._dirty = !1;
            }
            return this._totalDuration;
        }, s.paused = function(b) {
            if (!1 === b && this._paused) for (var c = this._first; c; ) c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), 
            c = c._next;
            return a.prototype.paused.apply(this, arguments);
        }, s.usesFrames = function() {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
        }, s.rawTime = function(a) {
            return a && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
        }, d;
    }, !0), _gsScope._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(a, b, c) {
        var d = function(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
        }, e = 1e-8, f = b._internals, g = f.lazyTweens, h = f.lazyRender, i = _gsScope._gsDefine.globals, j = new c(null, null, 1, 0), k = d.prototype = new a();
        return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.3", k.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._uncache(!0), a.prototype.invalidate.call(this);
        }, k.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        }, k.removeCallback = function(a, b) {
            if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); -1 < --d; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
        }, k.removePause = function(b) {
            return this.removeCallback(a._internals.pauseCallback, b);
        }, k.tweenTo = function(a, c) {
            c = c || {};
            var d, e, f, g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, h = c.repeat && i.TweenMax || b;
            for (e in c) g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, 
            f = new h(this, d, g), g.onStart = function() {
                f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), 
                c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
            }, f;
        }, k.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [ a ],
                callbackScope: this
            }, c.immediateRender = !1 !== c.immediateRender;
            var d = this.tweenTo(b, c);
            return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, k.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o, p = this, q = p._time, r = p._dirty ? p.totalDuration() : p._totalDuration, s = p._duration, t = p._totalTime, u = p._startTime, v = p._timeScale, w = p._rawPrevTime, x = p._paused, y = p._cycle;
            if (q !== p._time && (a += p._time - q), r - e <= a && 0 <= a) p._locked || (p._totalTime = r, 
            p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", 
            k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (a <= 0 && -e <= a || w < 0 || w === e) && w !== a && p._first && (k = !0, 
            e < w && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, 
            p._yoyo && 1 & p._cycle ? p._time = a = 0 : a = (p._time = s) + 1e-4; else if (a < e) if (p._locked || (p._totalTime = p._cycle = 0), 
            p._time = 0, -e < a && (a = 0), (0 !== q || 0 === s && w !== e && (0 < w || a < 0 && 0 <= w) && !p._locked) && (j = "onReverseComplete", 
            f = p._reversed), a < 0) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, 
            j = "onReverseComplete") : 0 <= w && p._first && (k = !0), p._rawPrevTime = a; else {
                if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f) for (d = p._first; d && 0 === d._startTime; ) d._duration || (f = !1), 
                d = d._next;
                a = 0, p._initted || (k = !0);
            } else 0 === s && w < 0 && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 
            0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && t <= a && p._cycle--, 
            p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), 
            p._time > s ? a = (p._time = s) + 1e-4 : p._time < 0 ? p._time = a = 0 : a = p._time));
            if (p._hasPause && !p._forcingPlayhead && !b) {
                if (q < (a = p._time) || p._repeat && y !== p._cycle) for (d = p._first; d && d._startTime <= a && !m; ) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), 
                d = d._next; else for (d = p._last; d && d._startTime >= a && !m; ) d._duration || "isPause" === d.data && 0 < d._rawPrevTime && (m = d), 
                d = d._prev;
                m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale, 
                m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)));
            }
            if (p._cycle !== y && !p._locked) {
                var z = p._yoyo && 0 != (1 & y), A = z === (p._yoyo && 0 != (1 & p._cycle)), B = p._totalTime, C = p._cycle, D = p._rawPrevTime, E = p._time;
                if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, 
                p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, 
                p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, 
                p._callback("onRepeat")), q !== p._time) return;
                if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), 
                p._locked = !1, p._paused && !x) return;
                p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
            }
            if (p._time !== q && p._first || c || k || m) {
                if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && 0 < a && (p._active = !0), 
                0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), 
                q <= (n = p._time)) for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x)); ) (d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), 
                p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = i; else for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x)); ) {
                    if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                        if (m === d) {
                            for (m = d._prev; m && m.endTime() > p._time; ) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), 
                            m = m._prev;
                            m = null, p.pause(), p._pauseTime = o;
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }
                    d = i;
                }
                p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || u !== p._startTime && v === p._timeScale || !(0 === p._time || r >= p.totalDuration()) || (f && (g.length && h(), 
                p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)));
            } else t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate"));
        }, k.getActive = function(a, b, c) {
            var d, e, f = [], g = this.getChildren(a || null == a, b || null == a, !!c), h = 0, i = g.length;
            for (d = 0; d < i; d++) (e = g[d]).isActive() && (f[h++] = e);
            return f;
        }, k.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; b < d; b++) if (c[b].time > a) return c[b].name;
            return null;
        }, k.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; -1 < --c; ) if (b[c].time < a) return b[c].name;
            return null;
        }, k.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels) b[c++] = {
                time: this._labels[a],
                name: a
            };
            return b.sort(function(a, b) {
                return a.time - b.time;
            }), b;
        }, k.invalidate = function() {
            return this._locked = !1, a.prototype.invalidate.call(this);
        }, k.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
        }, k.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
        }, k.totalDuration = function(b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), 
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
            this._totalDuration);
        }, k.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration, d = this._cycle, e = d * (c + this._repeatDelay);
            return c < a && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
        }, k.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, k.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, k.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, k.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e);
        }, d;
    }, !0), a = 180 / Math.PI, b = [], c = [], d = [], e = {}, f = _gsScope._gsDefine.globals, 
    g = function(a, b, c, d) {
        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, 
        this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
    }, i = function(a, b, c, d) {
        var e = {
            a: a
        }, f = {}, g = {}, h = {
            c: d
        }, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2, l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8;
        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, 
        g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [ e, f, g, h ];
    }, j = function(a, e, f, g, h) {
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
        for (j = 0; j < w; j++) k = (n = a[x]).a, l = n.d, m = a[x + 1].d, q = h ? (t = b[j], 
        v = ((u = c[j]) + t) * e * .25 / (g ? .5 : d[j] || .5), l - ((o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0)) + (((p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0)) - o) * (3 * t / (t + u) + .5) / 4 || 0))) : l - ((o = l - (l - k) * e * .5) + (p = l + (m - l) * e * .5)) / 2, 
        o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, 
        n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), 
        x += 4) : x++, y = p;
        (n = a[x]).b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, 
        n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
    }, k = function(a, d, e, f) {
        var h, i, j, k, l, m, n = [];
        if (f) for (i = (a = [ f ].concat(a)).length; -1 < --i; ) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
        if ((h = a.length - 2) < 0) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
        for (i = 0; i < h; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), 
        e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n;
    }, l = function(a, f, g, i, _l, m) {
        var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
        for (o in _l = "string" == typeof _l ? "," + _l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", 
        null == f && (f = 1), a[0]) w.push(o);
        if (1 < a.length) {
            for (u = a[a.length - 1], t = !0, n = w.length; -1 < --n; ) if (o = w[n], .05 < Math.abs(x[o] - u[o])) {
                t = !1;
                break;
            }
            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
        }
        for (b.length = c.length = d.length = 0, n = w.length; -1 < --n; ) o = w[n], e[o] = -1 !== _l.indexOf("," + o + ","), 
        v[o] = k(a, o, e[o], m);
        for (n = b.length; -1 < --n; ) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
        if (!i) {
            for (n = w.length; -1 < --n; ) if (e[o]) for (s = (p = v[w[n]]).length - 1, q = 0; q < s; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, 
            d[q] = (d[q] || 0) + r * r;
            for (n = d.length; -1 < --n; ) d[n] = Math.sqrt(d[n]);
        }
        for (n = w.length, q = g ? 4 : 1; -1 < --n; ) p = v[o = w[n]], j(p, f, g, i, e[o]), 
        t && (p.splice(0, q), p.splice(p.length - q, q));
        return v;
    }, m = function(a, b, c) {
        var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === (b = b || "soft") ? 3 : 2, r = "soft" === b, s = [];
        if (r && c && (a = [ c ].concat(a)), null == a || a.length < 1 + q) throw "invalid Bezier data";
        for (m in a[0]) s.push(m);
        for (j = s.length; -1 < --j; ) {
            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; k < l; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), 
            r && 1 < k && k < l - 1 && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
            for (l = n - q + 1, k = n = 0; k < l; k += q) d = i[k], e = i[k + 1], f = i[k + 2], 
            h = 2 == q ? 0 : i[k + 3], i[n++] = o = 3 == q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
            i.length = n;
        }
        return p;
    }, n = function(a, b, c) {
        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; -1 < --p; ) for (f = (m = a[p]).a, 
        g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; k <= c; k++) d = e - (e = ((j = o * k) * j * g + 3 * (l = 1 - j) * (j * h + l * i)) * j), 
        n = p * c + k - 1, b[n] = (b[n] || 0) + d * d;
    }, o = function(a, b) {
        var c, d, e, f, g = [], h = [], i = 0, j = 0, k = (b = b >> 0 || 6) - 1, l = [], m = [];
        for (c in a) n(a[c], g, b);
        for (e = g.length, d = 0; d < e; d++) i += Math.sqrt(g[d]), m[f = d % b] = i, f === k && (j += i, 
        l[f = d / b >> 0] = m, h[f] = j, i = 0, m = []);
        return {
            length: j,
            lengths: h,
            segments: l
        };
    }, p = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.9",
        API: 2,
        global: !0,
        init: function(a, b, c) {
            this._target = a, b instanceof Array && (b = {
                values: b
            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
            var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
            for (d in this._autoRotate = n ? n instanceof Array ? n : [ [ "x", "y", "rotation", !0 === n ? 0 : Number(n) || 0 ] ] : null, 
            k) this._props.push(d);
            for (f = this._props.length; -1 < --f; ) d = this._props[f], this._overwriteProps.push(d), 
            e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), 
            h || j[d] !== i[0][d] && (h = j);
            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), 
            this._segCount = this._beziers[d].length, this._timeRes) {
                var p = o(this._beziers, this._timeRes);
                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, 
                this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], 
                this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
            }
            if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [ n ]), 
            f = n.length; -1 < --f; ) {
                for (g = 0; g < 3; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] && a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)];
                d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, 
                this._overwriteProps.push(d);
            }
            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
        },
        set: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n = this._segCount, o = this._func, p = this._target, q = b !== this._startRatio;
            if (this._timeRes) {
                if (k = this._lengths, l = this._curSeg, m = b * this._length, e = this._li, m > this._l2 && e < n - 1) {
                    for (j = n - 1; e < j && (this._l2 = k[++e]) <= m; ) ;
                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
                } else if (m < this._l1 && 0 < e) {
                    for (;0 < e && (this._l1 = k[--e]) >= m; ) ;
                    0 === e && m < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], 
                    this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
                }
                if (c = e, m -= this._l1, e = this._si, m > this._s2 && e < l.length - 1) {
                    for (j = l.length - 1; e < j && (this._s2 = l[++e]) <= m; ) ;
                    this._s1 = l[e - 1], this._si = e;
                } else if (m < this._s1 && 0 < e) {
                    for (;0 < e && (this._s1 = l[--e]) >= m; ) ;
                    0 === e && m < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
                }
                h = 1 === b ? 1 : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else h = (b - (c = b < 0 ? 0 : 1 <= b ? n - 1 : n * b >> 0) * (1 / n)) * n;
            for (d = 1 - h, e = this._props.length; -1 < --e; ) f = this._props[e], i = (h * h * (g = this._beziers[f][c]).da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, 
            this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i;
            if (this._autoRotate) {
                var r, s, t, u, v, w, x, y = this._autoRotate;
                for (e = y.length; -1 < --e; ) f = y[e][2], w = y[e][3] || 0, x = !0 === y[e][4] ? 1 : a, 
                g = this._beziers[y[e][0]], r = this._beziers[y[e][1]], g && r && (g = g[c], r = r[c], 
                s = g.a + (g.b - g.a) * h, s += ((u = g.b + (g.c - g.b) * h) - s) * h, u += (g.c + (g.d - g.c) * h - u) * h, 
                t = r.a + (r.b - r.a) * h, t += ((v = r.b + (r.c - r.b) * h) - t) * h, v += (r.c + (r.d - r.c) * h - v) * h, 
                i = q ? Math.atan2(v - t, u - s) * x + w : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, p)), 
                o[f] ? p[f](i) : p[f] = i);
            }
        }
    }), q = p.prototype, p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, 
    p.quadraticToCubic = function(a, b, c) {
        return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }, p._cssRegister = function() {
        var a = f.CSSPlugin;
        if (a) {
            var b = a._internals, c = b._parseToProxy, d = b._setPluginRatio, e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
                parser: function(a, b, f, g, h, i) {
                    b instanceof Array && (b = {
                        values: b
                    }), i = new p();
                    var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                    if (n < 0) return h;
                    for (j = 0; j <= n; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                    for (k in b) q[k] = b[k];
                    return q.values = o, (h = new e(a, "bezier", 0, 0, l.pt, 2)).data = l, h.plugin = i, 
                    h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = !0 === q.autoRotate ? 0 : Number(q.autoRotate), 
                    q.autoRotate = null != l.end.left ? [ [ "left", "top", "rotation", j, !1 ] ] : null != l.end.x && [ [ "x", "y", "rotation", j, !1 ] ]), 
                    q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, 
                    l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), 
                    i._onInitTween(l.proxy, q, g._tween), h;
                }
            });
        }
    }, q._mod = function(a) {
        for (var b, c = this._overwriteProps, d = c.length; -1 < --d; ) (b = a[c[d]]) && "function" == typeof b && (this._mod[c[d]] = b);
    }, q._kill = function(a) {
        var b, c, d = this._props;
        for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], 
        c = d.length; -1 < --c; ) d[c] === b && d.splice(c, 1);
        if (d = this._autoRotate) for (c = d.length; -1 < --c; ) a[d[c][2]] && d.splice(c, 1);
        return this._super._kill.call(this, a);
    }, _gsScope._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(a, b) {
        function g() {
            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
        }
        var c, d, e, f, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        (j.constructor = g).version = "2.1.3", g.API = 2, g.defaultTransformPerspective = 0, 
        g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, g.suffixMap = {
            top: j = "px",
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        function ja(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
            null != a && "" !== a || (a = "0 0");
            var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
            if (3 < d.length && !b) {
                for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ja(d[c]));
                return a.join(",");
            }
            return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), 
            ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), 
            a = e + " " + f + (2 < d.length ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), 
            b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), 
            b.ox = parseFloat(e.replace(w, "")), b.oy = parseFloat(f.replace(w, "")), b.v = a), 
            b || a;
        }
        var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, y = /opacity *= *([^)]*)/i, z = /opacity:([^;]*)/i, A = /alpha\(opacity *=.+?\)/i, B = /^(rgb|hsl)/, C = /([A-Z])/g, D = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, F = function(a, b) {
            return b.toUpperCase();
        }, G = /(?:Left|Right|Width)/i, H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, J = /,(?=[^\)]*(?:\(|$))/gi, K = /[\s,\(]/i, L = Math.PI / 180, M = 180 / Math.PI, N = {}, O = {
            style: {}
        }, P = _gsScope.document || {
            createElement: function() {
                return O;
            }
        }, Q = function(a, b) {
            var c = P.createElementNS ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : P.createElement(a);
            return c.style ? c : P.createElement(a);
        }, R = Q("div"), S = Q("img"), T = g._internals = {
            _specialProps: i
        }, U = (_gsScope.navigator || {}).userAgent || "", V = function() {
            var a = U.indexOf("Android"), b = Q("a");
            return m = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === a || 3 < parseFloat(U.substr(a + 8, 2))), 
            o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, n = -1 !== U.indexOf("Firefox"), 
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (p = parseFloat(RegExp.$1)), 
            !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity));
        }(), W = function(a) {
            return y.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        }, X = function(a) {
            _gsScope.console && console.log(a);
        }, Y = "", Z = "", $ = function(a, b) {
            var c, d, e = (b = b || R).style;
            if (void 0 !== e[a]) return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1), c = [ "O", "Moz", "ms", "Ms", "Webkit" ], 
            d = 5; -1 < --d && void 0 === e[c[d] + a]; ) ;
            return 0 <= d ? (Y = "-" + (Z = 3 === d ? "ms" : c[d]).toLowerCase() + "-", Z + a) : null;
        }, _ = "undefined" != typeof window ? window : P.defaultView || {
            getComputedStyle: function() {}
        }, aa = function(a) {
            return _.getComputedStyle(a);
        }, ba = g.getStyle = function(a, b, c, d, e) {
            var f;
            return V || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(C, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), 
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : W(a);
        }, ca = T.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e && "lineHeight" !== c) return d;
            if ("auto" === e || !d) return 0;
            var h, i, j, k = G.test(c), l = a, m = R.style, n = d < 0, o = 1 === d;
            if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight); else {
                if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;", 
                "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e; else {
                    if (l = a.parentNode || P.body, -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"), 
                    i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                    m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(R), h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(R), 
                k && "%" === e && !1 !== g.cacheWidths && ((i = l._gsCache = l._gsCache || {}).time = j, 
                i.width = h / d * 100), 0 !== h || f || (h = ca(a, c, d, e, !0));
            } else i = aa(a).lineHeight, a.style.lineHeight = d, h = parseFloat(aa(a).lineHeight), 
            a.style.lineHeight = i;
            return o && (h /= 100), n ? -h : h;
        }, da = T.calculateOffset = function(a, b, c) {
            if ("absolute" !== ba(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top", e = ba(a, "margin" + d, c);
            return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0);
        }, ea = function(a, b) {
            var c, d, e, f = {};
            if (b = b || aa(a)) if (c = b.length) for (;-1 < --c; ) -1 !== (e = b[c]).indexOf("-transform") && Fa !== e || (f[e.replace(D, F)] = b.getPropertyValue(e)); else for (c in b) -1 !== c.indexOf("Transform") && Ea !== c || (f[c] = b[c]); else if (b = a.currentStyle || a.style) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(D, F)] = b[c]);
            return V || (f.opacity = W(a)), d = Ta(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, 
            f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ha && (f.z = d.z, 
            f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, 
            f;
        }, fa = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(w, "") ? f : 0 : da(a, g), 
            void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            };
        }, ga = {
            width: [ "Left", "Right" ],
            height: [ "Top", "Bottom" ]
        }, ha = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], ia = function(a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase()) return (c || aa(a))[b] || 0;
            if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = ga[b], f = e.length;
            for (c = c || aa(a); -1 < --f; ) d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0, 
            d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d;
        }, ka = function(a, b) {
            return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
        }, la = function(a, b) {
            "function" == typeof a && (a = a(r, q));
            var c = "string" == typeof a && "=" === a.charAt(1);
            return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), 
            null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
        }, ma = function(a, b, c, d) {
            var e, f, g, h, i;
            return "function" == typeof a && (a = a(r, q)), (h = null == a ? b : "number" == typeof a ? a : (e = 360, 
            f = a.split("_"), g = ((i = "=" === a.charAt(1)) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : M) - (i ? 0 : b), 
            f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && ((g %= e) !== g % 180 && (g = g < 0 ? g + e : g - e)), 
            -1 !== a.indexOf("_cw") && g < 0 ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && 0 < g && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), 
            b + g)) < 1e-6 && -1e-6 < h && (h = 0), h;
        }, na = {
            aqua: [ 0, 255, 255 ],
            lime: [ 0, 255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, 255 ],
            navy: [ 0, 0, 128 ],
            white: [ 255, 255, 255 ],
            fuchsia: [ 255, 0, 255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ 255, 255, 0 ],
            orange: [ 255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ 255, 0, 0 ],
            pink: [ 255, 192, 203 ],
            cyan: [ 0, 255, 255 ],
            transparent: [ 255, 255, 255, 0 ]
        }, oa = function(a, b, c) {
            return 255 * (6 * (a = a < 0 ? a + 1 : 1 < a ? a - 1 : a) < 1 ? b + (c - b) * a * 6 : a < .5 ? c : 3 * a < 2 ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
        }, pa = g.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a) if ("number" == typeof a) c = [ a >> 16, a >> 8 & 255, 255 & a ]; else {
                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), na[a]) c = na[a]; else if ("#" === a.charAt(0)) 4 === a.length && (a = "#" + (d = a.charAt(1)) + d + (e = a.charAt(2)) + e + (f = a.charAt(3)) + f), 
                c = [ (a = parseInt(a.substr(1), 16)) >> 16, a >> 8 & 255, 255 & a ]; else if ("hsl" === a.substr(0, 3)) if (c = m = a.match(s), 
                b) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, d = 2 * (i = Number(c[2]) / 100) - (e = i <= .5 ? i * (h + 1) : i + h - i * h), 
                3 < c.length && (c[3] = Number(c[3])), c[0] = oa(g + 1 / 3, d, e), c[1] = oa(g, d, e), 
                c[2] = oa(g - 1 / 3, d, e); else c = a.match(s) || na.transparent;
                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), 3 < c.length && (c[3] = Number(c[3]));
            } else c = na.black;
            return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, i = ((j = Math.max(d, e, f)) + (k = Math.min(d, e, f))) / 2, 
            j === k ? g = h = 0 : (l = j - k, h = .5 < i ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (e < f ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, 
            g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), 
            c;
        }, qa = function(a, b) {
            var c, d, e, f = a.match(ra) || [], g = 0, h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++) d = f[c], g += (e = a.substr(g, a.indexOf(d, g) - g)).length + d.length, 
            3 === (d = pa(d, b)).length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h + a.substr(g);
        }, ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in na) ra += "|" + j + "\\b";
        ra = new RegExp(ra + ")", "gi"), g.colorStringFilter = function(a) {
            var b, c = a[0] + " " + a[1];
            ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = qa(a[0], b), 
            a[1] = qa(a[1], b)), ra.lastIndex = 0;
        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var sa = function(a, b, c, d) {
            if (null == a) return function(a) {
                return a;
            };
            var e, f = b ? (a.match(ra) || [ "" ])[0] : "", g = a.split(f).join("").match(u) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = 0 < k ? g[0].replace(s, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l; else if (d && J.test(a)) {
                    for (o = a.replace(J, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                    return o.join(",");
                }
                if (b = (a.match(ra) || [ f ])[0], n = (m = a.split(b).join("").match(u) || []).length, 
                k > n--) for (;++n < k; ) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
            } : function(a) {
                var b, f, m;
                if ("number" == typeof a) a += l; else if (d && J.test(a)) {
                    for (f = a.replace(J, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                    return f.join(",");
                }
                if (m = (b = a.match("," == j ? u : v) || []).length, k > m--) for (;++m < k; ) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return (h && "none" !== a && a.substr(0, a.indexOf(b[0])) || h) + b.join(j) + i;
            } : function(a) {
                return a;
            };
        }, ta = function(a) {
            return a = a.split(","), function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; i < 4; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g);
            };
        }, ua = (T._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT; i; ) b = h[i.v], 
            i.r ? b = i.r(b) : b < 1e-6 && -1e-6 < b && (b = 0), i.t[i.p] = b, i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 
            1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                if ((c = i.t).type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                        c[f] = e;
                    }
                } else c[f] = c.s + c.xs0;
                i = i._next;
            }
        }, function(a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && ((d._prev = this)._next = d);
        }), va = (T._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = N;
            for (c._transform = null, N = b, d = k = c.parse(a, b, d, e), N = p, f && (c._transform = o, 
            l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l; ) {
                if (d.type <= 1 && (n[h = d.p] = d.s + d.c, m[h] = d.s, f || (j = new ua(d, "s", h, j, d.r), 
                d.c = 0), 1 === d.type)) for (g = d.l; 0 < --g; ) i = "xn" + g, n[h = d.p + "_" + i] = d.data[i], 
                m[h] = d[i], f || (j = new ua(d, i, h, j, d.rxp[i]));
                d = d._next;
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            };
        }, T.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof va || f.push(this.n), 
            this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, 
            c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && ((this._next = g)._prev = this);
        }), wa = function(a, b, c, d, e, f) {
            var g = new va(a, b, c, d - c, e, -1, f);
            return g.b = c, g.e = g.xs0 = d, g;
        }, xa = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), 
            d += "", e && ra.test(d + c) && (g.colorStringFilter(d = [ c, d ]), c = d[0], d = d[1]);
            var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "), E = d.split(", ").join(",").split(" "), F = D.length, G = !1 !== k;
            for (-1 === d.indexOf(",") && -1 === c.indexOf(",") || (E = -1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(J, ", ").split(" "), 
            E.join(" ").replace(J, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), 
            E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (F = (D = (f || "").split(" ")).length), 
            h.plugin = j, h.setRatio = l, m = ra.lastIndex = 0; m < F; m++) if (p = D[m], u = E[m] + "", 
            (x = parseFloat(p)) || 0 === x) h.appendXtra("", x, ka(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") && Math.round, !0); else if (e && ra.test(p)) B = ")" + ((B = u.indexOf(")") + 1) ? u.substr(B) : ""), 
            C = -1 !== u.indexOf("hsl") && V, z = u, p = pa(p, C), u = pa(u, C), (y = 6 < p.length + u.length) && !V && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", 
            h.e = h.e.split(E[m]).join("transparent")) : (V || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(u[1], p[1]), "%,", !1).appendXtra("", p[2], ka(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), 
            y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), 
            ra.lastIndex = 0; else if (v = p.match(s)) {
                if (!(w = u.match(t)) || w.length !== v.length) return h;
                for (n = o = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2) && Math.round, 0 === n), 
                o = z + A.length;
                h["xs" + h.l] += p.substr(o);
            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
                for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                h.e = B + h["xs" + m];
            }
            return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
        }, ya = 9;
        for ((j = va.prototype).l = j.pr = 0; 0 < --ya; ) j["xn" + ya] = 0, j["xs" + ya] = "";
        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, 
        j.appendXtra = function(a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, 
            g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", 0 < h ? (g.data["xn" + h] = b + c, 
            g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), 
            g.xfirst.xs0 = 0)) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e)) : g["xs" + h] += b + (d || ""), g;
        };
        var za = function(a, b) {
            b = b || {}, this.p = b.prefix && $(a) || a, i[a] = i[this.p] = this, this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi), 
            b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, 
            this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, 
            this.pr = b.priority || 0;
        }, Aa = T._registerComplexSpecialProp = function(a, b, c) {
            "object" != _typeof(b) && (b = {
                parser: c
            });
            var d, f = a.split(","), g = b.defaultValue;
            for (c = c || [ g ], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, 
            new za(f[d], b);
        }, Ba = T._registerPluginProp = function(a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                Aa(a, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (X("Error: " + b + " js file not loaded."), 
                        f);
                    }
                });
            }
        };
        (j = za.prototype).parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (J.test(c) || J.test(b) ? (h = b.replace(J, "|").split("|"), i = c.replace(J, "|").split("|")) : m && (h = [ b ], 
            i = [ c ])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; g < j; g++) b = h[g] = h[g] || this.dflt, 
                c = i[g] = i[g] || this.dflt, m && ((k = b.indexOf(m)) !== (l = c.indexOf(m)) && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "), c = i.join(", ");
            }
            return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }, j.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(ba(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
        }, g.registerSpecialProp = function(a, b, c) {
            Aa(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new va(a, e, 0, 0, g, 2, e, !1, c);
                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
                },
                priority: c
            });
        }, g.useSVGTransformAttr = !0;
        var Ca, Da = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ea = $("transform"), Fa = Y + "transform", Ga = $("transformOrigin"), Ha = null !== $("perspective"), Ia = T.Transform = function() {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !(!1 === g.defaultForce3D || !Ha) && (g.defaultForce3D || "auto");
        }, Ja = _gsScope.SVGElement, Ka = function(a, b, c) {
            var d, e = P.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
        }, La = P.documentElement || {}, Ma = function() {
            var a, b, c, d = p || /Android/i.test(U) && !_gsScope.chrome;
            return P.createElementNS && La.appendChild && !d && (a = Ka("svg", La), c = (b = Ka("rect", a, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width, b.style[Ga] = "50% 50%", b.style[Ea] = "scaleX(0.5)", 
            d = c === b.getBoundingClientRect().width && !(n && Ha), La.removeChild(a)), d;
        }(), Na = function(a, b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Sa(a, !0);
            v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (0 === (n = a.getBBox()).x && 0 === n.y && n.width + n.height === 0 && (n = {
                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }), h = [ (-1 !== (b = ja(b).split(" "))[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y ]), 
            c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Ra && (m = w[0], 
            n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], (s = m * p - n * o) && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, 
            j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, 
            l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, 
            v = c), e || !1 !== e && !1 !== g.defaultSmoothOrigin ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, 
            v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
        }, Pa = function(a) {
            try {
                return a.getBBox();
            } catch (b) {
                return function Oa(a) {
                    var b, c = Q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d = this.parentNode, e = this.nextSibling, f = this.style.cssText;
                    if (La.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                        b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Oa;
                    } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                    return e ? d.insertBefore(this, e) : d.appendChild(this), La.removeChild(c), this.style.cssText = f, 
                    b;
                }.call(a, !0);
            }
        }, Qa = function(a) {
            return !(!Ja || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Pa(a));
        }, Ra = [ 1, 0, 0, 1, 0, 0 ], Sa = function(a, b) {
            var c, d, e, f, g, h, i, j = a._gsTransform || new Ia(), l = a.style;
            if (Ea ? d = ba(a, Fa, null, !0) : a.currentStyle && (d = (d = a.currentStyle.filter.match(H)) && 4 === d.length ? [ d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0 ].join(",") : ""), 
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Ea && c && !a.offsetParent && a !== La && (f = l.display, 
            l.display = "block", (i = a.parentNode) && a.offsetParent || (g = 1, h = a.nextSibling, 
            La.appendChild(a)), c = !(d = ba(a, Fa, null, !0)) || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, 
            f ? l.display = f : Xa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : La.removeChild(a))), 
            (j.svg || a.getCTM && Qa(a)) && (c && -1 !== (l[Ea] + "").indexOf("matrix") && (d = l[Ea], 
            c = 0), e = a.getAttribute("transform"), c && e && (d = "matrix(" + (e = a.transform.baseVal.consolidate().matrix).a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", 
            c = 0)), c) return Ra;
            for (e = (d || "").match(s) || [], ya = e.length; -1 < --ya; ) f = Number(e[ya]), 
            e[ya] = (g = f - (f |= 0)) ? (1e5 * g + (g < 0 ? -.5 : .5) | 0) / 1e5 + f : f;
            return b && 6 < e.length ? [ e[0], e[1], e[4], e[5], e[12], e[13] ] : e;
        }, Ta = T.getTransform = function(a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f, h, i, j, k, l, m = d && a._gsTransform || new Ia(), n = m.scaleX < 0, o = 2e-5, p = 1e5, q = Ha && (parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin) || 0, r = parseFloat(g.defaultTransformPerspective) || 0;
            if (m.svg = !(!a.getCTM || !Qa(a)), m.svg && (Na(a, ba(a, Ga, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), 
            Ca = g.useSVGTransformAttr || Ma), (f = Sa(a)) !== Ra) {
                if (16 === f.length) {
                    var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7], F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], L = f[11], N = Math.atan2(D, H);
                    m.zOrigin && (I = F * (K = -m.zOrigin) - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), 
                    m.rotationX = N * M, N && (s = B * (v = Math.cos(-N)) + F * (w = Math.sin(-N)), 
                    t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, 
                    L = E * -w + L * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * M, 
                    N && (t = y * (v = Math.cos(-N)) - G * (w = Math.sin(-N)), u = z * v - H * w, G = y * w + G * v, 
                    H = z * w + H * v, L = A * w + L * v, x = s = x * v - F * w, y = t, z = u), N = Math.atan2(y, x), 
                    m.rotation = N * M, N && (s = x * (v = Math.cos(N)) + y * (w = Math.sin(N)), t = B * v + C * w, 
                    u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, 
                    B = t, F = u), m.rotationX && 359.9 < Math.abs(m.rotationX) + Math.abs(m.rotation) && (m.rotationX = m.rotation = 0, 
                    m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, 
                    m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, 
                    x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * M, 
                    B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, 
                    m.perspective = L ? 1 / (L < 0 ? -L : L) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), 
                    m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
                } else if (!Ha || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                    var O = 6 <= f.length, P = O ? f[0] : 1, Q = f[1] || 0, R = f[2] || 0, S = O ? f[3] : 1;
                    m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), 
                    k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0, l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0, 
                    m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ha && (m.rotationX = m.rotationY = m.z = 0, 
                    m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), 
                    m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
                }
                for (h in 90 < Math.abs(m.skewX) && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, 
                m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, 
                m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q, m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return d && ((a._gsTransform = m).svg && (Ca && a.style[Ea] ? b.delayedCall(.001, function() {
                Xa(a.style, Ea);
            }) : !Ca && a.getAttribute("transform") && b.delayedCall(.001, function() {
                a.removeAttribute("transform");
            }))), m;
        }, Ua = function(a) {
            var b, c, d = this.data, e = -d.rotation * L, f = e + d.skewX * L, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100;
                if (null != d.ox && (u += (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2) - (n * h + (o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2) * i), 
                v += o - (n * j + o * k)), s ? t += ", Dx=" + ((n = q / 2) - (n * h + (o = r / 2) * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")" : t += ", sizingMethod='auto expand')", 
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(I, t) : l.filter = t + " " + b, 
                0 !== a && 1 !== a || 1 != h || 0 !== i || 0 !== j || 1 != k || (s && -1 === t.indexOf("Dx=0, Dy=0") || y.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), 
                !s) {
                    var w, z, A, B = p < 8 ? 1 : -1;
                    for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((h < 0 ? -h : h) * q + (i < 0 ? -i : i) * r)) / 2 + u), 
                    d.ieOffsetY = Math.round((r - ((k < 0 ? -k : k) * r + (j < 0 ? -j : j) * q)) / 2 + v), 
                    ya = 0; ya < 4; ya++) A = (c = -1 !== (w = m[z = ha[ya]]).indexOf("px") ? parseFloat(w) : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0) !== d[z] ? ya < 2 ? -d.ieOffsetX : -d.ieOffsetY : ya < 2 ? n - d.ieOffsetX : o - d.ieOffsetY, 
                    l[z] = (d[z] = Math.round(c - A * (0 === ya || 2 === ya ? 1 : B))) + "px";
                }
            }
        }, Va = T.set3DTransformRatio = T.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, I = z.y, J = z.z, K = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX;
            if (O && (P += O, B += O), !((1 !== a && 0 !== a || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || J || M || D || C || 1 !== G) || Ca && K || !Ha) B || P || K ? (B *= L, 
            x = P * L, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, 
            g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * L), 
            d *= b = Math.sqrt(1 + b * b), g *= b, O && (b = Math.tan(O * L), c *= b = Math.sqrt(1 + b * b), 
            f *= b)), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, 
            Ca && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, 
            I += .01 * z.yPercent * q.height), H < (q = 1e-6) && -q < H && (H = 0), I < q && -q < I && (I = 0)), 
            u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", 
            K && Ca ? this.t.setAttribute("transform", "matrix(" + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"; else {
                if (n && (E < (q = 1e-4) && -q < E && (E = G = 2e-5), F < q && -q < F && (F = G = 2e-5), 
                !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= L, r = c = Math.cos(B), 
                s = f = Math.sin(B), P && (B -= P * L, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * L), 
                r *= b = Math.sqrt(1 + b * b), s *= b, z.skewY && (b = Math.tan(O * L), c *= b = Math.sqrt(1 + b * b), 
                f *= b))), d = -s, g = r; else {
                    if (!(D || C || 1 !== G || M || K)) return void (A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                    c = g = 1, d = f = 0;
                }
                k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", 
                w = "0", (B = D * L) && (r = Math.cos(B), l = o * (i = -(s = Math.sin(B))), e = c * s, 
                h = f * s, o *= k = r, c *= r, f *= r), (B = C * L) && (b = d * (r = Math.cos(B)) + e * (s = Math.sin(B)), 
                t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, 
                k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, 
                g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || K) && (p && (H += e * -p, 
                I += h * -p, J += k * -p + p), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, 
                I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), H < q && -q < H && (H = w), 
                I < q && -q < I && (I = w), J < q && -q < J && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", 
                u += (c < q && -q < c ? w : c) + v + (f < q && -q < f ? w : f) + v + (i < q && -q < i ? w : i), 
                u += v + (l < q && -q < l ? w : l) + v + (d < q && -q < d ? w : d) + v + (g < q && -q < g ? w : g), 
                C || D || 1 !== G ? (u += v + (j < q && -q < j ? w : j) + v + (m < q && -q < m ? w : m) + v + (e < q && -q < e ? w : e), 
                u += v + (h < q && -q < h ? w : h) + v + (k < q && -q < k ? w : k) + v + (o < q && -q < o ? w : o) + v) : u += ",0,0,0,0,1,0,", 
                u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ea] = u;
            }
        };
        (j = Ia.prototype).x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, 
        j.scaleX = j.scaleY = j.scaleZ = 1, Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                var j = (d._lastParsedTransform = i).scale && "function" == typeof i.scale ? i.scale : 0;
                j && (i.scale = j(r, a));
                var k, l, m, n, o, p, s, t, u, v = a._gsTransform, w = a.style, y = Da.length, z = i, A = {}, B = "transformOrigin", C = Ta(a, e, !0, z.parseTransform), D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
                if (C.skewType = z.skewType || C.skewType || g.defaultSkewType, d._transform = C, 
                "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Ea) (l = R.style)[Ea] = D, 
                l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = ba(a, "width"), 
                l.height = ba(a, "height")), P.body.appendChild(R), k = Ta(R, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * L)), 
                C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, 
                Na(a, ja(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, 
                s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Sa(R, !0), 
                k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), P.body.removeChild(R), 
                k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = la(z.xPercent, C.xPercent)), 
                null != z.yPercent && (k.yPercent = la(z.yPercent, C.yPercent)); else if ("object" == _typeof(z)) {
                    if (k = {
                        scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                        scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                        scaleZ: la(z.scaleZ, C.scaleZ),
                        x: la(z.x, C.x),
                        y: la(z.y, C.y),
                        z: la(z.z, C.z),
                        xPercent: la(z.xPercent, C.xPercent),
                        yPercent: la(z.yPercent, C.yPercent),
                        perspective: la(z.transformPerspective, C.perspective)
                    }, null != (o = z.directionalRotation)) if ("object" == _typeof(o)) for (l in o) z[l] = o[l]; else z.rotation = o;
                    "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = la(z.x, C.xPercent)), 
                    "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = la(z.y, C.yPercent)), 
                    k.rotation = ma("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), 
                    Ha && (k.rotationX = ma("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), 
                    k.rotationY = ma("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), 
                    k.skewX = ma(z.skewX, C.skewX), k.skewY = ma(z.skewY, C.skewY);
                }
                for (Ha && null != z.force3D && (C.force3D = z.force3D, n = !0), (m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective) || null == z.scale || (k.scaleZ = 1); -1 < --y; ) (1e-6 < (D = k[u = Da[y]] - C[u]) || D < -1e-6 || null != z[u] || null != N[u]) && (n = !0, 
                f = new va(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin, 
                C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin), 
                f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), 
                p === C.xOffset && s === C.yOffset || (f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), 
                f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ha && m && C.zOrigin) && (Ea ? (n = !0, 
                u = Ga, D || (D = (D = (ba(a, u, e, !1, "50% 50%") + "").split(" "))[0] + " " + D[1] + " " + C.zOrigin + "px"), 
                D += "", (f = new va(w, u, 0, 0, f, -1, B)).b = w[u], f.plugin = h, Ha ? (l = C.zOrigin, 
                D = D.split(" "), C.zOrigin = (2 < D.length ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", 
                (f = new va(C, "zOrigin", 0, 0, f, -1, f.n)).b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)), 
                n && (d._transformType = C.svg && Ca || !m && 3 !== this._transformType ? 2 : 3), 
                j && (i.scale = j), f;
            },
            allowFunc: !0,
            prefix: !0
        }), Aa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Aa("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: sa("inset(0% 0% 0% 0%)", !1, !0)
        }), Aa("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], z = a.style;
                for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), 
                j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = $(y[j])), -1 !== (m = l = ba(a, y[j], e, !1, "0px")).indexOf(" ") && (m = (l = m.split(" "))[0], 
                l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), "" === (s = (u = "=" === n.charAt(1)) ? (p = parseInt(n.charAt(0) + "1", 10), 
                n = n.substr(2), p *= parseFloat(n), n.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(n), 
                n.substr((p + "").length))) && (s = d[c] || t), s !== t && (v = ca(a, "borderLeft", o, t), 
                w = ca(a, "borderTop", o, t), l = "%" === s ? (m = v / q * 100 + "%", w / r * 100 + "%") : "em" === s ? (m = v / (x = ca(a, "borderLeft", 1, "em")) + "em", 
                w / x + "em") : (m = v + "px", w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), 
                g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g;
            },
            prefix: !0,
            formatter: sa("0px 0px 0px 0px", !1, !0)
        }), Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, f, g) {
                return xa(a.style, c, this.format(ba(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
            },
            prefix: !0,
            formatter: sa("0px 0px", !1, !0)
        }), Aa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || aa(a), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && ((m = ba(a, "backgroundImage").replace(E, "")) && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), S.setAttribute("src", m), j = 2; -1 < --j; ) (k = -1 !== (q = h[j]).indexOf("%")) != (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - S.width : a.offsetHeight - S.height, 
                    h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ");
                }
                return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ja
        }), Aa("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(a) {
                return "co" === (a += "").substr(0, 2) ? a : ja(-1 === a.indexOf(" ") ? a + " " + a : a);
            }
        }), Aa("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Aa("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Aa("transformStyle", {
            prefix: !0
        }), Aa("backfaceVisibility", {
            prefix: !0
        }), Aa("userSelect", {
            prefix: !0
        }), Aa("margin", {
            parser: ta("marginTop,marginRight,marginBottom,marginLeft")
        }), Aa("padding", {
            parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), Aa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return b = p < 9 ? (i = a.currentStyle, j = p < 8 ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", 
                this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, e, !1, this.dflt)), 
                this.format(b)), this.parseComplex(a.style, h, b, f, g);
            }
        }), Aa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Aa("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e;
            }
        }), Aa("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                var h = ba(a, "borderTopWidth", e, !1, "0px"), i = this.format(b).split(" "), j = i[0].replace(x, "");
                return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", e, !1, "solid") + " " + ba(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || [ "#000" ])[0];
            }
        }), Aa("borderWidth", {
            parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), Aa("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            }
        });
        var Wa = function(a) {
            var b, c = this.t, d = c.filter || ba(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 == e && (b = -1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), 
            !ba(this.data, "filter")) : (c.filter = d.replace(A, ""), !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), 
            -1 === d.indexOf("pacity") ? 0 == e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(y, "opacity=" + e));
        };
        Aa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(ba(a, "opacity", e, !1, "1")), i = a.style, j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), 
                j && 1 === h && "hidden" === ba(a, "visibility", e) && 0 !== b && (h = 0), V ? f = new va(i, "opacity", h, b - h, f) : ((f = new va(i, "opacity", 100 * h, 100 * (b - h), f)).xn1 = j ? 1 : 0, 
                i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", 
                f.data = a, f.plugin = g, f.setRatio = Wa), j && ((f = new va(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit")).xs0 = "inherit", 
                d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
            }
        });
        var Xa = function(a, b) {
            b && (a.removeProperty ? ("ms" !== b.substr(0, 2) && "webkit" !== b.substr(0, 6) || (b = "-" + b), 
            a.removeProperty(b.replace(C, "-$1").toLowerCase())) : a.removeAttribute(b));
        }, Ya = function(a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b; ) b.v ? c[b.p] = b.v : Xa(c, b.p), 
                b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
        };
        Aa("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if ((g = f._classNamePT = new va(a, d, 0, 0, g, 2)).setRatio = Ya, g.pr = -11, c = !0, 
                g.b = o, k = ea(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n; ) m[n.p] = 1, n = n._next;
                    l.setRatio(1);
                }
                return (a._gsClassPT = g).e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), 
                a.setAttribute("class", g.e), j = fa(a, k, ea(a), i, m), a.setAttribute("class", o), 
                g.data = j.firstMPT, a.style.cssText !== p && (a.style.cssText = p), g.xfirst = f.parse(a, j.difs, g, h);
            }
        });
        var Za = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e) e = !(g.cssText = ""); else for (d = (b = this.e.split(" ").join("").split(",")).length; -1 < --d; ) c = b[d], 
                i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ga : i[c].p), 
                Xa(g, c);
                e && (Xa(g, Ea), (f = this.t._gsTransform) && (f.svg && (this.t.removeAttribute("data-svg-origin"), 
                this.t.removeAttribute("transform")), delete this.t._gsTransform));
            }
        };
        for (Aa("clearProps", {
            parser: function(a, b, d, e, f) {
                return (f = new va(a, d, 0, 0, f, 2)).setRatio = Za, f.e = b, f.pr = -10, f.data = e._tween, 
                c = !0, f;
            }
        }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ya = j.length; ya--; ) Ba(j[ya]);
        (j = g.prototype)._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
            if (!a.nodeType) return !1;
            this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, 
            d = b.suffixMap || g.suffixMap, e = aa(a), f = this._overwriteProps;
            var n, p, s, t, u, v, w, x, y, A = a.style;
            if (l && "" === A.zIndex && ("auto" !== (n = ba(a, "zIndex", e)) && "" !== n || this._addLazySet(A, "zIndex", 0)), 
            "string" == typeof b && (t = A.cssText, n = ea(a, e), A.cssText = t + ";" + b, n = fa(a, n, ea(a)).difs, 
            !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), 
            this._transformType) {
                for (y = 3 === this._transformType, Ea ? m && (l = !0, "" === A.zIndex && ("auto" !== (w = ba(a, "zIndex", e)) && "" !== w || this._addLazySet(A, "zIndex", 0)), 
                o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : A.zoom = 1, 
                s = p; s && s._next; ) s = s._next;
                x = new va(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ea ? Va : Ua, 
                x.data = this._transform || Ta(a, e, !0), x.tween = h, x.pr = -1, f.pop();
            }
            if (c) {
                for (;p; ) {
                    for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                    (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, 
                    p = v;
                }
                this._firstPT = t;
            }
            return !0;
        }, j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, s, t, u = a.style;
            for (g in b) {
                if (n = b[g], h = i[g], "function" != typeof n || h && h.allowFunc || (n = n(r, q)), 
                h) c = h.parse(a, n, g, this, c, f, b); else {
                    if ("--" === g.substr(0, 2)) {
                        this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(g) + "", n + "", g, !1, g);
                        continue;
                    }
                    m = ba(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && B.test(n) ? (s || (n = (3 < (n = pa(n)).length ? "rgba(" : "rgb(") + n.join(",") + ")"), 
                    c = xa(u, g, m, n, !0, "transparent", c, 0, f)) : s && K.test(n) ? c = xa(u, g, m, n, !0, null, c, 0, f) : (o = (j = parseFloat(m)) || 0 === j ? m.substr((j + "").length) : "", 
                    "" !== m && "auto" !== m || (o = "width" === g || "height" === g ? (j = ia(a, g, e), 
                    "px") : "left" === g || "top" === g ? (j = da(a, g, e), "px") : (j = "opacity" !== g ? 0 : 1, 
                    "")), "" === (p = (t = s && "=" === n.charAt(1)) ? (l = parseInt(n.charAt(0) + "1", 10), 
                    n = n.substr(2), l *= parseFloat(n), n.replace(x, "")) : (l = parseFloat(n), s ? n.replace(x, "") : "")) && (p = g in d ? d[g] : o), 
                    n = l || 0 === l ? (t ? l + j : l) + p : b[g], o === p || "" === p && "lineHeight" !== g || !l && 0 !== l || !j || (j = ca(a, g, j, o), 
                    "%" === p ? (j /= ca(a, g, 100, "%") / 100, !0 !== b.strictUnits && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ca(a, g, 1, p) : "px" !== p && (l = ca(a, g, l, p), 
                    p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n)).xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m : X("invalid " + g + " tween value: " + b[g]) : (c = new va(u, g, j, l - j, c, 0, g, !1 !== k && ("px" === p || "zIndex" === g), 0, m, n)).xs0 = p);
                }
                f && c && !c.plugin && (c.plugin = f);
            }
            return c;
        }, j.setRatio = function(a) {
            var b, c, d, e = this._firstPT;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (;e; ) {
                if (b = e.c * a + e.s, e.r ? b = e.r(b) : b < 1e-6 && -1e-6 < b && (b = 0), e.type) if (1 === e.type) if (2 === (d = e.l)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else {
                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                    e.t[e.p] = c;
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0;
                e = e._next;
            } else for (;e; ) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (;e; ) {
                if (2 !== e.type) if (e.r && -1 !== e.type) if (b = e.r(e.s + e.c), e.type) {
                    if (1 === e.type) {
                        for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                    }
                } else e.t[e.p] = b + e.xs0; else e.t[e.p] = e.e; else e.setRatio(a);
                e = e._next;
            }
        }, j._enableTransforms = function(a) {
            this._transform = this._transform || Ta(this._target, e, !0), this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3;
        };
        var $a = function(a) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
        };
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = $a, d.data = this;
        }, j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, 
            d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, 
            a._prev = c), a;
        }, j._mod = function(a) {
            for (var b = this._firstPT; b; ) "function" == typeof a[b.p] && (b.r = a[b.p]), 
            b = b._next;
        }, j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                for (d in f = {}, b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1);
            }
            for (b.className && (c = this._classNamePT) && ((e = c.xfirst) && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), 
            c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), 
            c = this._firstPT; c; ) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), 
            d = c.plugin), c = c._next;
            return a.prototype._kill.call(this, f);
        };
        function _a(a, b, c) {
            var d, e, f, g;
            if (a.slice) for (e = a.length; -1 < --e; ) _a(a[e], b, c); else for (e = (d = a.childNodes).length; -1 < --e; ) g = (f = d[e]).type, 
            f.style && (b.push(ea(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || _a(f, b, c);
        }
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [ i ], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target, _a(a, k, m), i.render(c, !0, !0), _a(a, l), i.render(0, !0, !0), 
            i._enabled(!0), e = m.length; -1 < --e; ) if ((f = fa(m[e], k[e], l[e])).firstMPT) {
                for (g in f = f.difs, d) n[g] && (f[g] = d[g]);
                for (g in h = {}, f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
            }
            return j;
        }, a.activate([ g ]), g;
    }, !0), function() {
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c, !0;
            }
        }), b = function(a) {
            var b = a < 1 ? Math.pow(10, (a + "").length - 2) : 1;
            return function(c) {
                return (Math.round(c / a) * a * b | 0) / b;
            };
        }, c = function(a, b) {
            for (;a; ) a.f || a.blob || (a.m = b || Math.round), a = a._next;
        }, d = a.prototype;
        d._onInitAllProps = function() {
            var a, d, e, f, g = this._tween, h = g.vars.roundProps, i = {}, j = g._propLookup.roundProps;
            if ("object" != _typeof(h) || h.push) for ("string" == typeof h && (h = h.split(",")), 
            e = h.length; -1 < --e; ) i[h[e]] = Math.round; else for (f in h) i[f] = b(h[f]);
            for (f in i) for (a = g._firstPT; a; ) d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), 
            d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), 
            a._next = a._prev = null, g._propLookup[f] = j)), a = d;
            return !1;
        }, d._add = function(a, b, c, d, e) {
            this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b);
        };
    }(), _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(a, b, c, d) {
            var e, f;
            if ("function" != typeof a.setAttribute) return !1;
            for (e in b) "function" == typeof (f = b[e]) && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), 
            this._overwriteProps.push(e);
            return !0;
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(a, b, c, d) {
            "object" != _typeof(b) && (b = {
                rotation: b
            }), this.finals = {};
            var e, f, g, h, i, j, k = !0 === b.useRadians ? 2 * Math.PI : 360;
            for (e in b) "useRadians" !== e && ("function" == typeof (h = b[e]) && (h = h(d, a)), 
            f = (j = (h + "").split("_"))[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), 
            i = (h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0) - g, 
            j.length && (-1 !== (f = j.join("_")).indexOf("short") && ((i %= k) !== i % (k / 2) && (i = i < 0 ? i + k : i - k)), 
            -1 !== f.indexOf("_cw") && i < 0 ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && 0 < i && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), 
            (1e-6 < i || i < -1e-6) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
            return !0;
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a); else for (b = this._firstPT; b; ) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], 
            b = b._next;
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", [ "easing.Ease" ], function(a) {
        var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope, g = f.com.greensock, h = 2 * Math.PI, i = Math.PI / 2, j = g._class, k = function(b, c) {
            var d = j("easing." + b, function() {}, !0), e = d.prototype = new a();
            return e.constructor = d, e.getRatio = c, d;
        }, l = a.register || function() {}, m = function(a, b, c, d, e) {
            var f = j("easing." + a, {
                easeOut: new b(),
                easeIn: new c(),
                easeInOut: new d()
            }, !0);
            return l(f, a), f;
        }, n = function(a, b, c) {
            this.t = a, this.v = b, c && (((this.next = c).prev = this).c = c.v - b, this.gap = c.t - a);
        }, o = function(b, c) {
            var d = j("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0), e = d.prototype = new a();
            return e.constructor = d, e.getRatio = c, e.config = function(a) {
                return new d(a);
            }, d;
        }, p = m("Back", o("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
        }), o("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
        }), o("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
        })), q = j("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7, null == a ? a = .7 : 1 < a && (a = 1), this._p = 1 !== a ? b : 0, 
            this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === c;
        }, !0), r = q.prototype = new a();
        return r.constructor = q, r.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
        }, q.ease = new q(.7, .7), r.config = q.config = function(a, b, c) {
            return new q(a, b, c);
        }, (r = (b = j("easing.SteppedEase", function(a, b) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
        }, !0)).prototype = new a()).constructor = b, r.getRatio = function(a) {
            return a < 0 ? a = 0 : 1 <= a && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
        }, r.config = b.config = function(a, c) {
            return new b(a, c);
        }, (r = (c = j("easing.ExpoScaleEase", function(a, b, c) {
            this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c;
        }, !0)).prototype = new a()).constructor = c, r.getRatio = function(a) {
            return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
        }, r.config = c.config = function(a, b, d) {
            return new c(a, b, d);
        }, (r = (d = j("easing.RoughEase", function(b) {
            for (var c, d, e, f, g, h, i = (b = b || {}).taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = !1 !== b.randomize, p = !0 === b.clamp, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; -1 < --m; ) c = o ? Math.random() : 1 / l * m, 
            d = q ? q.getRatio(c) : c, e = "none" === i ? r : "out" === i ? (f = 1 - c) * f * r : "in" === i ? c * c * r : (f = c < .5 ? 2 * c : 2 * (1 - c)) * f * .5 * r, 
            o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (1 < d ? d = 1 : d < 0 && (d = 0)), 
            j[k++] = {
                x: c,
                y: d
            };
            for (j.sort(function(a, b) {
                return a.x - b.x;
            }), h = new n(1, 1, null), m = l; -1 < --m; ) g = j[m], h = new n(g.x, g.y, h);
            this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
        }, !0)).prototype = new a()).constructor = d, r.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (;b.next && a >= b.t; ) b = b.next;
                b = b.prev;
            } else for (;b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b).v + (a - b.t) / b.gap * b.c;
        }, r.config = function(a) {
            return new d(a);
        }, d.ease = new d(), m("Bounce", k("BounceOut", function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
        }), k("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
        }), k("BounceInOut", function(a) {
            var b = a < .5;
            return a = (a = b ? 1 - 2 * a : 2 * a - 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, 
            b ? .5 * (1 - a) : .5 * a + .5;
        })), m("Circ", k("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a);
        }), k("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1);
        }), k("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        })), m("Elastic", (e = function(b, c, d) {
            var e = j("easing." + b, function(a, b) {
                this._p1 = 1 <= a ? a : 1, this._p2 = (b || d) / (a < 1 ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), 
                this._p2 = h / this._p2;
            }, !0), f = e.prototype = new a();
            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                return new e(a, b);
            }, e;
        })("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
        }, .3), e("ElasticIn", function(a) {
            return -this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2);
        }, .3), e("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
        }, .45)), m("Expo", k("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a);
        }), k("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001;
        }), k("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
        })), m("Sine", k("SineOut", function(a) {
            return Math.sin(a * i);
        }), k("SineIn", function(a) {
            return 1 - Math.cos(a * i);
        }), k("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1);
        })), j("easing.EaseLookup", {
            find: function(b) {
                return a.map[b];
            }
        }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), 
        p;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(a, b) {
    var c = {}, d = a.document, e = a.GreenSockGlobals = a.GreenSockGlobals || a, f = e[b];
    if (f) return "undefined" != typeof module && module.exports && (module.exports = f);
    function s(d, f, g, h) {
        this.sc = r[d] ? r[d].sc : [], (r[d] = this).gsClass = null, this.func = g;
        var i = [];
        this.check = function(j) {
            for (var k, m, n, o, p = f.length, q = p; -1 < --p; ) (k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, 
            q--) : j && k.sc.push(this);
            if (0 === q && g) {
                if (n = (m = ("com.greensock." + d).split(".")).pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), 
                h) if (e[n] = c[n] = o, "undefined" != typeof module && module.exports) if (d === b) for (p in module.exports = c[b] = o, 
                c) o[p] = c[p]; else c[b] && (c[b][n] = o); else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                    return o;
                });
                for (p = 0; p < this.sc.length; p++) this.sc[p].check();
            }
        }, this.check(!0);
    }
    var g, h, i, j, k, l = function(a) {
        var b, c = a.split("."), d = e;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d;
    }, m = l("com.greensock"), n = 1e-8, o = function(a) {
        var b, c = [], d = a.length;
        for (b = 0; b !== d; c.push(a[b++])) ;
        return c;
    }, p = function() {}, q = function() {
        var a = Object.prototype.toString, b = a.call([]);
        return function(c) {
            return null != c && (c instanceof Array || "object" == _typeof(c) && !!c.push && a.call(c) === b);
        };
    }(), r = {}, t = a._gsDefine = function(a, b, c, d) {
        return new s(a, b, c, d);
    }, u = m._class = function(a, b, c) {
        return b = b || function() {}, t(a, [], function() {
            return b;
        }, c), b;
    };
    t.globals = e;
    var v = [ 0, 0, 1, 1 ], w = u("easing.Ease", function(a, b, c, d) {
        this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v;
    }, !0), x = w.map = {}, y = w.register = function(a, b, c, d) {
        for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); -1 < --j; ) for (f = i[j], 
        e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; -1 < --g; ) h = k[g], 
        x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
    };
    for ((i = w.prototype)._calcEnd = !1, i.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : a < .5 ? 2 * a : 2 * (1 - a);
        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 
        1 === b ? 1 - d : 2 === b ? d : a < .5 ? d / 2 : 1 - d / 2;
    }, h = (g = [ "Linear", "Quad", "Cubic", "Quart", "Quint,Strong" ]).length; -1 < --h; ) i = g[h] + ",Power" + h, 
    y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), 
    y(new w(null, null, 3, h), i, "easeInOut");
    x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
    var z = u("events.EventDispatcher", function(a) {
        this._listeners = {}, this._eventTarget = a || this;
    });
    (i = z.prototype).addEventListener = function(a, b, c, d, e) {
        e = e || 0;
        var f, g, h = this._listeners[a], i = 0;
        for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; -1 < --g; ) (f = h[g]).c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
        h.splice(i, 0, {
            c: b,
            s: c,
            up: d,
            pr: e
        });
    }, i.removeEventListener = function(a, b) {
        var c, d = this._listeners[a];
        if (d) for (c = d.length; -1 < --c; ) if (d[c].c === b) return void d.splice(c, 1);
    }, i.dispatchEvent = function(a) {
        var b, c, d, e = this._listeners[a];
        if (e) for (1 < (b = e.length) && (e = e.slice(0)), c = this._eventTarget; -1 < --b; ) (d = e[b]) && (d.up ? d.c.call(d.s || c, {
            type: a,
            target: c
        }) : d.c.call(d.s || c));
    };
    var A = a.requestAnimationFrame, B = a.cancelAnimationFrame, C = Date.now || function() {
        return new Date().getTime();
    }, D = C();
    for (h = (g = [ "ms", "moz", "webkit", "o" ]).length; -1 < --h && !A; ) A = a[g[h] + "RequestAnimationFrame"], 
    B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
    u("Ticker", function(a, b) {
        function s(a) {
            var b, d, j = C() - D;
            o < j && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || 0 < b || !0 === a) && (i.frame++, 
            h += b + (g <= b ? .004 : g - b), d = !0), !0 !== a && (f = e(s)), d && i.dispatchEvent("tick");
        }
        var c, e, f, g, h, i = this, l = C(), m = !(!1 === b || !A) && "auto", o = 500, q = 33;
        z.call(i), i.time = i.frame = 0, i.tick = function() {
            s(!0);
        }, i.lagSmoothing = function(a, b) {
            return arguments.length ? (o = a || 1e8, void (q = Math.min(b, o, 0))) : o < 1e8;
        }, i.sleep = function() {
            null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1));
        }, i.wake = function(a) {
            null !== f ? i.sleep() : a ? l += -D + (D = C()) : 10 < i.frame && (D = C() - o + 5), 
            e = 0 === c ? p : m && A ? A : function(a) {
                return setTimeout(a, 1e3 * (h - i.time) + 1 | 0);
            }, i === j && (k = !0), s(2);
        }, i.fps = function(a) {
            return arguments.length ? (g = 1 / ((c = a) || 60), h = this.time + g, void i.wake()) : c;
        }, i.useRAF = function(a) {
            return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m;
        }, i.fps(a), setTimeout(function() {
            "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1);
        }, 1500);
    }), (i = m.Ticker.prototype = new m.events.EventDispatcher()).constructor = m.Ticker;
    var E = u("core.Animation", function(a, b) {
        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, 
        this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, 
        Z) {
            k || j.wake();
            var c = this.vars.useFrames ? Y : Z;
            c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
    });
    j = E.ticker = new m.Ticker(), (i = E.prototype)._dirty = i._gc = i._initted = i._paused = !1, 
    i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, 
    i._paused = !1;
    (function F() {
        k && 2e3 < C() - D && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
        var a = setTimeout(F, 2e3);
        a.unref && a.unref();
    })(), i.play = function(a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
    }, i.pause = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!0);
    }, i.resume = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!1);
    }, i.seek = function(a, b) {
        return this.totalTime(Number(a), !1 !== b);
    }, i.restart = function(a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0);
    }, i.reverse = function(a, b) {
        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
    }, i.render = function(a, b, c) {}, i.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, 
        !this._gc && this.timeline || this._enabled(!0), this;
    }, i.isActive = function() {
        var a, b = this._timeline, c = this._startTime;
        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n;
    }, i._enabled = function(a, b) {
        return k || j.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), 
        !1;
    }, i._kill = function(a, b) {
        return this._enabled(!1, !1);
    }, i.kill = function(a, b) {
        return this._kill(a, b), this;
    }, i._uncache = function(a) {
        for (var b = a ? this : this.timeline; b; ) b._dirty = !0, b = b.timeline;
        return this;
    }, i._swapSelfInParams = function(a) {
        for (var b = a.length, c = a.concat(); -1 < --b; ) "{self}" === a[b] && (c[b] = this);
        return c;
    }, i._callback = function(a) {
        var b = this.vars, c = b[a], d = b[a + "Params"], e = b[a + "Scope"] || b.callbackScope || this;
        switch (d ? d.length : 0) {
          case 0:
            c.call(e);
            break;

          case 1:
            c.call(e, d[0]);
            break;

          case 2:
            c.call(e, d[0], d[1]);
            break;

          default:
            c.apply(e, d);
        }
    }, i.eventCallback = function(a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, 
            e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
        }
        return this;
    }, i.delay = function(a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), 
        this._delay = a, this) : this._delay;
    }, i.duration = function(a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), 
        this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), 
        this) : (this._dirty = !1, this._duration);
    }, i.totalDuration = function(a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
    }, i.time = function(a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
    }, i.totalTime = function(a, b, c) {
        if (k || j.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (a < 0 && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var d = this._totalDuration, e = this._timeline;
                if (d < a && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, 
                e._dirty || this._uncache(!1), e._timeline) for (;e._timeline; ) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), 
                e = e._timeline;
            }
            this._gc && this._enabled(!0, !1), this._totalTime === a && 0 !== this._duration || (K.length && _(), 
            this.render(a, b, !1), K.length && _());
        }
        return this;
    }, i.progress = i.totalProgress = function(a, b) {
        var c = this.duration();
        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
    }, i.startTime = function(a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), 
        this) : this._startTime;
    }, i.endTime = function(a) {
        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
    }, i.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        var b, c;
        for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (c = (b = this._pauseTime) || 0 === b ? b : this._timeline.totalTime(), 
        this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, 
        c = this.timeline; c && c.timeline; ) c._dirty = !0, c.totalDuration(), c = c.timeline;
        return this;
    }, i.reversed = function(a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), 
        this) : this._reversed;
    }, i.paused = function(a) {
        if (!arguments.length) return this._paused;
        var b, c, d = this._timeline;
        return a != this._paused && d && (k || a || j.wake(), c = (b = d.rawTime()) - this._pauseTime, 
        !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, 
        this._paused = a, this._active = this.isActive(), !a && 0 != c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, 
        this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), 
        this;
    };
    var G = u("core.SimpleTimeline", function(a) {
        E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    (i = G.prototype = new E()).constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, 
    i._sortChildren = !1, i.add = i.insert = function(a, b, c, d) {
        var e, f;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), 
        a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), 
        e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), 
        a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), 
        this;
    }, i._remove = function(a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), 
        a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), 
        a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), 
        this._timeline && this._uncache(!0)), this;
    }, i.render = function(a, b, c) {
        var d, e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e; ) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), 
        e = d;
    }, i.rawTime = function() {
        return k || j.wake(), this._totalTime;
    };
    var H = u("TweenLite", function(b, c, d) {
        if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
        this.target = b = "string" != typeof b ? b : H.selector(b) || b;
        var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
        if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], 
        (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0]) for (this._targets = g = o(b), 
        this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) (f = g[e]) ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), 
        this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && 1 < this._siblings[e].length && ca(f, this, null, 1, this._siblings[e])) : "string" == typeof (f = g[e--] = H.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1); else this._propLookup = {}, 
        this._siblings = aa(b, this, !1), 1 === i && 1 < this._siblings.length && ca(b, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -n, 
        this.render(Math.min(0, -this._delay)));
    }, !0), I = function(b) {
        return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
    };
    (i = H.prototype = new E()).constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, 
    i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.1.3", H.defaultEase = i._ease = new w(null, null, 1, 1), 
    H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function(a, b) {
        j.lagSmoothing(a, b);
    }, H.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (H.selector = c)(b) : (d = d || a.document) ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b;
    };
    var K = [], L = {}, M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+-]=-?[\.\d]/, O = function(a) {
        for (var b, c = this._firstPT; c; ) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, 
        c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : b < 1e-6 && -1e-6 < b && !c.blob && (b = 0), 
        c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }, P = function(a) {
        return (1e3 * a | 0) / 1e3 + "";
    }, Q = function(a, b, c, d) {
        var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0;
        for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], 
        b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, 
        d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; h < i; h++) k = f[h], 
        n += (j = b.substr(m, b.indexOf(k, m) - m)) || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), 
        k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), 
        l.push(g), l._firstPT = {
            _next: l._firstPT,
            t: l,
            p: l.length - 1,
            s: g,
            c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
            f: 0,
            m: o && o < 4 ? Math.round : P
        }), m += k.length;
        return (n += b.substr(m)) && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), 
        l;
    }, R = function(a, b, c, d, e, f, g, h, i) {
        "function" == typeof d && (d = d(i || 0, a));
        var k = _typeof(a[b]), l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1), o = {
            t: a,
            p: b,
            s: m,
            f: "function" === k,
            pg: 0,
            n: e || b,
            m: f ? "function" == typeof f ? f : Math.round : 0,
            pr: 0,
            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
        };
        return "number" == typeof m && ("number" == typeof d || n) || (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, 
        o = {
            t: Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o),
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: e || b,
            pr: 0,
            m: 0
        }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), 
        this._firstPT = o) : void 0;
    }, S = H._internals = {
        isArray: q,
        isSelector: I,
        lazyTweens: K,
        blobDif: Q
    }, T = H._plugins = {}, U = S.tweenLookup = {}, V = 0, W = S.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1
    }, X = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0
    }, Y = E._rootFramesTimeline = new G(), Z = E._rootTimeline = new G(), $ = 30, _ = S.lazyRender = function() {
        var a, b, c = K.length;
        for (L = {}, a = 0; a < c; a++) (b = K[a]) && !1 !== b._lazy && (b.render(b._lazy[0], b._lazy[1], !0), 
        b._lazy = !1);
        K.length = 0;
    };
    Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = !0, setTimeout(_, 1), 
    E._updateRoot = H.render = function() {
        var a, b, c;
        if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1), 
        K.length && _(), j.frame >= $) {
            for (c in $ = j.frame + (parseInt(H.autoSleep, 10) || 120), U) {
                for (a = (b = U[c].tweens).length; -1 < --a; ) b[a]._gc && b.splice(a, 1);
                0 === b.length && delete U[c];
            }
            if ((!(c = Z._first) || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
                for (;c && c._paused; ) c = c._next;
                c || j.sleep();
            }
        }
    }, j.addEventListener("tick", E._updateRoot);
    var aa = function(a, b, c) {
        var d, e, f = a._gsTweenID;
        if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
            target: a,
            tweens: []
        }), b && ((d = U[f].tweens)[e = d.length] = b, c)) for (;-1 < --e; ) d[e] === b && d.splice(e, 1);
        return U[f].tweens;
    }, ba = function(a, b, c, d) {
        var e, f, g = a.vars.onOverwrite;
        return g && (e = g(a, b, c, d)), (g = H.onOverwrite) && (f = g(a, b, c, d)), !1 !== e && !1 !== f;
    }, ca = function(a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || 4 <= d) {
            for (i = e.length, f = 0; f < i; f++) if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break;
            return g;
        }
        var j, k = b._startTime + n, l = [], m = 0, o = 0 === b._duration;
        for (f = e.length; -1 < --f; ) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 
        0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
        for (f = m; -1 < --f; ) if (i = (h = l[f])._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 
        2 !== d || !h._firstPT && h._initted && i) {
            if (2 !== d && !ba(h, b)) continue;
            h._enabled(!1, !1) && (g = !0);
        }
        return g;
    }, da = function(a, b, c) {
        for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
            if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
            d = d._timeline;
        }
        return b < (f /= e) ? f - b : c && f === b || !a._initted && f - b < 2 * n ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n;
    };
    i._init = function() {
        var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration, j = !!g.immediateRender, k = g.ease, l = this._startAt;
        if (g.startAt) {
            for (d in l && (l.render(-1, !0), l.kill()), e = {}, g.startAt) e[d] = g.startAt[d];
            if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && !1 !== g.lazy, 
            e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, 
            e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), 
            j) if (0 < this._time) this._startAt = null; else if (0 !== i) return;
        } else if (g.runBackwards && 0 !== i) if (l) l.render(-1, !0), l.kill(), this._startAt = null; else {
            for (d in 0 !== this._time && (j = !1), c = {}, g) W[d] && "autoCSS" !== d || (c[d] = g[d]);
            if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && !1 !== g.lazy, c.immediateRender = j, 
            this._startAt = H.to(this.target, 0, c), j) {
                if (0 === this._time) return;
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
        }
        if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, 
        g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), 
        this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, 
        this._targets) for (f = this._targets.length, a = 0; a < f; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
        if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), 
        g.runBackwards) for (c = this._firstPT; c; ) c.s += c.c, c.c = -c.c, c = c._next;
        this._onUpdate = g.onUpdate, this._initted = !0;
    }, i._initProps = function(b, c, d, e, f) {
        var g, h, i, j, k, l;
        if (null == b) return !1;
        for (g in L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a && b.nodeType && T.css && !1 !== this.vars.autoCSS && function(a, b) {
            var c, d = {};
            for (c in a) W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], 
            delete a[c]);
            a.css = d;
        }(this.vars, b), this.vars) if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this)); else if (T[g] && (j = new T[g]())._onInitTween(b, this.vars[g], this, f)) {
            for (this._firstPT = k = {
                _next: this._firstPT,
                t: j,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 1,
                n: g,
                pg: 1,
                pr: j._priority,
                m: 0
            }, h = j._overwriteProps.length; -1 < --h; ) c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), 
            k._next && (k._next._prev = k);
        } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
        return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : 1 < this._overwrite && this._firstPT && 1 < d.length && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), 
        this._initProps(b, c, d, e, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), 
        i);
    }, i.render = function(a, b, c) {
        var d, e, f, g, h = this, i = h._time, j = h._duration, k = h._rawPrevTime;
        if (j - n <= a && 0 <= a) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, 
        h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 
        0 !== j || !h._initted && h.vars.lazy && !c || (h._startTime === h._timeline._duration && (a = 0), 
        (k < 0 || a <= 0 && -n <= a || k === n && "isPause" !== h.data) && k !== a && (c = !0, 
        n < k && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n); else if (a < n) h._totalTime = h._time = 0, 
        h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && 0 < k) && (e = "onReverseComplete", 
        d = h._reversed), -n < a ? a = 0 : a < 0 && (h._active = !1, 0 !== j || !h._initted && h.vars.lazy && !c || (0 <= k && (k !== n || "isPause" !== h.data) && (c = !0), 
        h._rawPrevTime = g = !b || a || k === a ? a : n)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0); else if (h._totalTime = h._time = a, 
        h._easeType) {
            var l = a / j, m = h._easeType, o = h._easePower;
            (1 === m || 3 === m && .5 <= l) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), 
            h.ratio = 1 === m ? 1 - l : 2 === m ? l : a / j < .5 ? l / 2 : 1 - l / 2;
        } else h.ratio = h._ease.getRatio(a / j);
        if (h._time !== i || c) {
            if (!h._initted) {
                if (h._init(), !h._initted || h._gc) return;
                if (!c && h._firstPT && (!1 !== h.vars.lazy && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, 
                h._rawPrevTime = k, K.push(h), void (h._lazy = [ a, b ]);
                h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1));
            }
            for (!1 !== h._lazy && (h._lazy = !1), h._active || !h._paused && h._time !== i && 0 <= a && (h._active = !0), 
            0 === i && (h._startAt && (0 <= a ? h._startAt.render(a, !0, c) : e = e || "_dummyGS"), 
            !h.vars.onStart || 0 === h._time && 0 !== j || (b || h._callback("onStart"))), f = h._firstPT; f; ) f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, 
            f = f._next;
            h._onUpdate && (a < 0 && h._startAt && -1e-4 !== a && h._startAt.render(a, !0, c), 
            b || (h._time !== i || d || c) && h._callback("onUpdate")), !e || h._gc && !c || (a < 0 && h._startAt && !h._onUpdate && -1e-4 !== a && h._startAt.render(a, !0, c), 
            d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 
            0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0));
        }
    }, i._kill = function(a, b, c) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, 
        this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
        var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline, n = this._firstPT;
        if ((q(b) || I(b)) && "number" != typeof b[0]) for (d = b.length; -1 < --d; ) this._kill(a, b[d], c) && (i = !0); else {
            if (this._targets) {
                for (d = this._targets.length; -1 < --d; ) if (b === this._targets[d]) {
                    h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], 
                    e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                    break;
                }
            } else {
                if (b !== this.target) return !1;
                h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
            }
            if (h) {
                if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != _typeof(a) || !a._tempKill), 
                c && (H.onOverwrite || this.vars.onOverwrite)) {
                    for (f in j) h[f] && (l = l || []).push(f);
                    if ((l || !a) && !ba(this, c, b, l)) return !1;
                }
                for (f in j) (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), 
                g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), 
                g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                !this._firstPT && this._initted && n && this._enabled(!1, !1);
            }
        }
        return i;
    }, i.invalidate = function() {
        this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
        var a = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, 
        this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], 
        E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, 
        this.render(a, !1, !1 !== this.vars.lazy)), this;
    }, i._enabled = function(a, b) {
        if (k || j.wake(), a && this._gc) {
            var c, d = this._targets;
            if (d) for (c = d.length; -1 < --c; ) this._siblings[c] = aa(d[c], this, !0); else this._siblings = aa(this.target, this, !0);
        }
        return E.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && H._onPluginEvent(a ? "_onEnable" : "_onDisable", this);
    }, H.to = function(a, b, c) {
        return new H(a, b, c);
    }, H.from = function(a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c);
    }, H.fromTo = function(a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
        new H(a, b, d);
    }, H.delayedCall = function(a, b, c, d, e) {
        return new H(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0
        });
    }, H.set = function(a, b) {
        return new H(a, 0, b);
    }, H.getTweensOf = function(a, b) {
        if (null == a) return [];
        var c, d, e, f;
        if (a = "string" != typeof a ? a : H.selector(a) || a, (q(a) || I(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; -1 < --c; ) d = d.concat(H.getTweensOf(a[c], b));
            for (c = d.length; -1 < --c; ) for (f = d[c], e = c; -1 < --e; ) f === d[e] && d.splice(c, 1);
        } else if (a._gsTweenID) for (c = (d = aa(a).concat()).length; -1 < --c; ) (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
        return d || [];
    }, H.killTweensOf = H.killDelayedCallsTo = function(a, b, c) {
        "object" == _typeof(b) && (c = b, b = !1);
        for (var d = H.getTweensOf(a, b), e = d.length; -1 < --e; ) d[e]._kill(c, a);
    };
    var ea = u("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], 
        this._priority = b || 0, this._super = ea.prototype;
    }, !0);
    if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, 
    i.setRatio = O, i._kill = function(a) {
        var b, c = this._overwriteProps, d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; -1 < --b; ) null != a[c[b]] && c.splice(b, 1);
        for (;d; ) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, 
        d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
        return !1;
    }, i._mod = i._roundProps = function(a) {
        for (var b, c = this._firstPT; c; ) (b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), 
        c = c._next;
    }, H._onPluginEvent = function(a, b) {
        var c, d, e, f, g, h = b._firstPT;
        if ("_onInitAllProps" === a) {
            for (;h; ) {
                for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
                (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, 
                h = g;
            }
            h = b._firstPT = e;
        }
        for (;h; ) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
        return c;
    }, ea.activate = function(a) {
        for (var b = a.length; -1 < --b; ) a[b].API === ea.API && (T[new a[b]()._propName] = a[b]);
        return !0;
    }, t.plugin = function(a) {
        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
        var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
            ea.call(this, c, d), this._overwriteProps = e || [];
        }, !0 === a.global), h = g.prototype = new ea(c);
        for (b in (h.constructor = g).API = a.API, f) "function" == typeof a[b] && (h[f[b]] = a[b]);
        return g.version = a.version, ea.activate([ g ]), g;
    }, g = a._gsQueue) {
        for (h = 0; h < g.length; h++) g[h]();
        for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
    }
    k = !1;
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : window, "TweenMax"); //-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------