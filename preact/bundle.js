(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n3, l3) {
    for (var u3 in l3)
      n3[u3] = l3[u3];
    return n3;
  }
  function a(n3) {
    var l3 = n3.parentNode;
    l3 && l3.removeChild(n3);
  }
  function h(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o3, null);
  }
  function v(n3, i3, t3, o3, r3) {
    var f3 = { type: n3, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function p(n3) {
    return n3.children;
  }
  function d(n3, l3) {
    this.props = n3, this.context = l3;
  }
  function _(n3, l3) {
    if (null == l3)
      return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u3; l3 < n3.__k.length; l3++)
      if (null != (u3 = n3.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n3.type ? _(n3) : null;
  }
  function k(n3) {
    var l3, u3;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
        if (null != (u3 = n3.__k[l3]) && null != u3.__e) {
          n3.__e = n3.__c.base = u3.__e;
          break;
        }
      return k(n3);
    }
  }
  function b(n3) {
    (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n3; g.__r = t.length; )
      n3 = t.sort(function(n4, l3) {
        return n4.__v.__b - l3.__v.__b;
      }), t = [], n3.some(function(n4) {
        var l3, u3, i3, t3, o3, r3;
        n4.__d && (o3 = (t3 = (l3 = n4).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
      });
  }
  function w(n3, l3, u3, i3, t3, o3, r3, c3, s2, a3) {
    var h3, y2, d3, k3, b2, g3, w3, x = i3 && i3.__k || e, C3 = x.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (k3 = u3.__k[h3] = null == (k3 = l3[h3]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h3]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x[h3] = void 0;
        else
          for (y2 = 0; y2 < C3; y2++) {
            if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
              x[y2] = void 0;
              break;
            }
            d3 = null;
          }
        j(n3, k3, d3 = d3 || f, t3, o3, r3, c3, s2, a3), b2 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b2, k3)), null != b2 ? (null == g3 && (g3 = b2), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s2 = m(k3, s2, n3) : s2 = A(n3, k3, d3, x, b2, s2), "function" == typeof u3.type && (u3.__d = s2)) : s2 && d3.__e == s2 && s2.parentNode != n3 && (s2 = _(d3));
      }
    for (u3.__e = g3, h3 = C3; h3--; )
      null != x[h3] && ("function" == typeof u3.type && null != x[h3].__e && x[h3].__e == u3.__d && (u3.__d = _(i3, h3 + 1)), N(x[h3], x[h3]));
    if (w3)
      for (h3 = 0; h3 < w3.length; h3++)
        M(w3[h3], w3[++h3], w3[++h3]);
  }
  function m(n3, l3, u3) {
    for (var i3, t3 = n3.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n3, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n3, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n3)
          n3.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n3.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n3, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n3, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n3, o3, l3[o3], u3[o3], i3);
  }
  function $(n3, l3, u3) {
    "-" === l3[0] ? n3.setProperty(l3, u3) : n3[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n3, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n3.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n3.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n3.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n3.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n3 ? l3.toLowerCase().slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u3, u3 ? i3 || n3.addEventListener(l3, o3 ? T : I, o3) : n3.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n3)
          try {
            n3[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n4) {
          }
        "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n3.setAttribute(l3, u3) : n3.removeAttribute(l3));
      }
  }
  function I(n3) {
    this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function T(n3) {
    this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function j(n3, u3, i3, t3, o3, r3, f3, e3, c3) {
    var a3, h3, v3, y2, _2, k3, b2, g3, m4, x, A2, C3, $2, H2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof H2) {
          if (g3 = u3.props, m4 = (a3 = H2.contextType) && t3[a3.__c], x = a3 ? m4 ? m4.props.value : a3.__ : t3, i3.__c ? b2 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in H2 && H2.prototype.render ? u3.__c = h3 = new H2(g3, x) : (u3.__c = h3 = new d(g3, x), h3.constructor = H2, h3.render = O), m4 && m4.sub(h3), h3.props = g3, h3.state || (h3.state = {}), h3.context = x, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), null == h3.__s && (h3.__s = h3.state), null != H2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, H2.getDerivedStateFromProps(g3, h3.__s))), y2 = h3.props, _2 = h3.state, v3)
            null == H2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g3 !== y2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g3, x), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g3, h3.__s, x) || u3.__v === i3.__v) {
              h3.props = g3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n4) {
                n4 && (n4.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(g3, h3.__s, x), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(y2, _2, k3);
            });
          }
          if (h3.context = x, h3.props = g3, h3.__v = u3, h3.__P = n3, A2 = l.__r, C3 = 0, "prototype" in H2 && H2.prototype.render)
            h3.state = h3.__s, h3.__d = false, A2 && A2(u3), a3 = h3.render(h3.props, h3.state, h3.context);
          else
            do {
              h3.__d = false, A2 && A2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++C3 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n3, Array.isArray($2) ? $2 : [$2], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n4) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n4, u3, i3);
    }
  }
  function z(n3, u3) {
    l.__c && l.__c(u3, n3), n3.some(function(u4) {
      try {
        n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
          n4.call(u4);
        });
      } catch (n4) {
        l.__e(n4, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, e3, c3) {
    var s2, h3, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s2 = r3[k3]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
          l3 = s2, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h3 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y2, o3, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function M(n3, u3, i3) {
    try {
      "function" == typeof n3 ? n3(u3) : n3.current = u3;
    } catch (n4) {
      l.__e(n4, i3);
    }
  }
  function N(n3, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n3), (t3 = n3.ref) && (t3.current && t3.current !== n3.__e || M(t3, null, u3)), null != (t3 = n3.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u3);
        }
      t3.base = t3.__P = null, n3.__c = void 0;
    }
    if (t3 = n3.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, "function" != typeof n3.type);
    i3 || null == n3.__e || a(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function O(n3, l3, u3) {
    return this.constructor(n3, u3);
  }
  function P(u3, i3, t3) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  n = e.slice, l = { __e: function(n3, l3, u3, i3) {
    for (var t3, o3, r3; l3 = l3.__; )
      if ((t3 = l3.__c) && !t3.__)
        try {
          if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n3)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n3, i3 || {}), r3 = t3.__d), r3)
            return t3.__E = t3;
        } catch (l4) {
          n3 = l4;
        }
    throw n3;
  } }, u = 0, i = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, d.prototype.setState = function(n3, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n3 && (n3 = n3(s({}, u3), this.props)), n3 && s(u3, n3), null != n3 && this.__v && (l3 && this.__h.push(l3), b(this));
  }, d.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // node_modules/htm/dist/htm.module.js
  var n2 = function(t3, s2, r3, e3) {
    var u3;
    s2[0] = 0;
    for (var h3 = 1; h3 < s2.length; h3++) {
      var p3 = s2[h3++], a3 = s2[h3] ? (s2[0] |= p3 ? 1 : 2, r3[s2[h3++]]) : s2[++h3];
      3 === p3 ? e3[0] = a3 : 4 === p3 ? e3[1] = Object.assign(e3[1] || {}, a3) : 5 === p3 ? (e3[1] = e3[1] || {})[s2[++h3]] = a3 : 6 === p3 ? e3[1][s2[++h3]] += a3 + "" : p3 ? (u3 = t3.apply(a3, n2(t3, a3, r3, ["", null])), e3.push(u3), a3[0] ? s2[0] |= 2 : (s2[h3 - 2] = 0, s2[h3] = u3)) : e3.push(a3);
    }
    return e3;
  };
  var t2 = /* @__PURE__ */ new Map();
  function htm_module_default(s2) {
    var r3 = t2.get(this);
    return r3 || (r3 = /* @__PURE__ */ new Map(), t2.set(this, r3)), (r3 = n2(this, r3.get(s2) || (r3.set(s2, r3 = function(n3) {
      for (var t3, s3, r4 = 1, e3 = "", u3 = "", h3 = [0], p3 = function(n4) {
        1 === r4 && (n4 || (e3 = e3.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n4, e3) : 3 === r4 && (n4 || e3) ? (h3.push(3, n4, e3), r4 = 2) : 2 === r4 && "..." === e3 && n4 ? h3.push(4, n4, 0) : 2 === r4 && e3 && !n4 ? h3.push(5, 0, true, e3) : r4 >= 5 && ((e3 || !n4 && 5 === r4) && (h3.push(r4, 0, e3, s3), r4 = 6), n4 && (h3.push(r4, n4, 0, s3), r4 = 6)), e3 = "";
      }, a3 = 0; a3 < n3.length; a3++) {
        a3 && (1 === r4 && p3(), p3(a3));
        for (var l3 = 0; l3 < n3[a3].length; l3++)
          t3 = n3[a3][l3], 1 === r4 ? "<" === t3 ? (p3(), h3 = [h3], r4 = 3) : e3 += t3 : 4 === r4 ? "--" === e3 && ">" === t3 ? (r4 = 1, e3 = "") : e3 = t3 + e3[0] : u3 ? t3 === u3 ? u3 = "" : e3 += t3 : '"' === t3 || "'" === t3 ? u3 = t3 : ">" === t3 ? (p3(), r4 = 1) : r4 && ("=" === t3 ? (r4 = 5, s3 = e3, e3 = "") : "/" === t3 && (r4 < 5 || ">" === n3[a3][l3 + 1]) ? (p3(), 3 === r4 && (h3 = h3[0]), r4 = h3, (h3 = h3[0]).push(2, 0, r4), r4 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (p3(), r4 = 2) : e3 += t3), 3 === r4 && "!--" === e3 && (r4 = 4, h3 = h3[0]);
      }
      return p3(), h3;
    }(s2)), r3), arguments, [])).length > 1 ? r3 : r3[0];
  }

  // node_modules/htm/preact/index.module.js
  var m2 = htm_module_default.bind(h);

  // node_modules/preact/hooks/dist/hooks.module.js
  var r2;
  var u2;
  var i2;
  var o2;
  var f2 = 0;
  var c2 = [];
  var e2 = [];
  var a2 = l.__b;
  var v2 = l.__r;
  var l2 = l.diffed;
  var m3 = l.__c;
  var d2 = l.unmount;
  function p2(t3, r3) {
    l.__h && l.__h(u2, t3, f2 || r3), f2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: e2 }), i3.__[t3];
  }
  function y(n3) {
    return f2 = 1, h2(C2, n3);
  }
  function h2(n3, t3, i3) {
    var o3 = p2(r2++, 2);
    if (o3.t = n3, !o3.__c && (o3.__ = [i3 ? i3(t3) : C2(void 0, t3), function(n4) {
      var t4 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t4, n4);
      t4 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = u2, !u2.u)) {
      u2.u = true;
      var f3 = u2.shouldComponentUpdate;
      u2.shouldComponentUpdate = function(n4, t4, r3) {
        if (!o3.__c.__H)
          return true;
        var u3 = o3.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u3.every(function(n5) {
          return !n5.__N;
        }))
          return !f3 || f3.call(this, n4, t4, r3);
        var i4 = false;
        return u3.forEach(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i4 = true);
          }
        }), !!i4 && (!f3 || f3.call(this, n4, t4, r3));
      };
    }
    return o3.__N || o3.__;
  }
  function g2() {
    for (var t3; t3 = c2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(w2), t3.__H.__h.forEach(z2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n3) {
    "function" != typeof n3.type || n3.o || n3.type === p ? n3.o || (n3.o = n3.__ && n3.__.o ? n3.__.o : "") : n3.o = (n3.__ && n3.__.o ? n3.__.o : "") + (n3.__ && n3.__.__k ? n3.__.__k.indexOf(n3) : 0), u2 = null, a2 && a2(n3);
  }, l.__r = function(n3) {
    v2 && v2(n3), r2 = 0;
    var t3 = (u2 = n3.__c).__H;
    t3 && (i2 === u2 ? (t3.__h = [], u2.__h = [], t3.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = e2, n4.__N = n4.i = void 0;
    })) : (t3.__h.forEach(w2), t3.__h.forEach(z2), t3.__h = [])), i2 = u2;
  }, l.diffed = function(t3) {
    l2 && l2(t3);
    var r3 = t3.__c;
    r3 && r3.__H && (r3.__H.__h.length && (1 !== c2.push(r3) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || k2)(g2)), r3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== e2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = e2;
    })), i2 = u2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(w2), t4.__h = t4.__h.filter(function(n3) {
          return !n3.__ || z2(n3);
        });
      } catch (u3) {
        r3.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), m3 && m3(t3, r3);
  }, l.unmount = function(t3) {
    d2 && d2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n3) {
      try {
        w2(n3);
      } catch (n4) {
        r3 = n4;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var j2 = "function" == typeof requestAnimationFrame;
  function k2(n3) {
    var t3, r3 = function() {
      clearTimeout(u3), j2 && cancelAnimationFrame(t3), setTimeout(n3);
    }, u3 = setTimeout(r3, 100);
    j2 && (t3 = requestAnimationFrame(r3));
  }
  function w2(n3) {
    var t3 = u2, r3 = n3.__c;
    "function" == typeof r3 && (n3.__c = void 0, r3()), u2 = t3;
  }
  function z2(n3) {
    var t3 = u2;
    n3.__c = n3.__(), u2 = t3;
  }
  function C2(n3, t3) {
    return "function" == typeof t3 ? t3(n3) : t3;
  }

  // preact/index.js
  function Hello() {
    const [target, setTarget] = y("world");
    return m2`<p>Hello, ${target}</p>`;
  }
  P(m2`<${Hello} />`, document.body);
})();
