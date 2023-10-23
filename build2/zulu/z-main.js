(function (w, d) {
  zaraz.debug = (dV = "") => {
    document.cookie = `zarazDebug=${dV}; path=/`;
    location.reload();
  };
  window.zaraz._al = function (di, dj, dk) {
    w.zaraz.listeners.push({ item: di, type: dj, callback: dk });
    di.addEventListener(dj, dk);
  };
  zaraz.preview = (dl = "") => {
    document.cookie = `zarazPreview=${dl}; path=/`;
    location.reload();
  };
  zaraz.i = function (dM) {
    const dN = d.createElement("div");
    dN.innerHTML = unescape(dM);
    const dO = dN.querySelectorAll("script");
    for (let dP = 0; dP < dO.length; dP++) {
      const dQ = d.createElement("script");
      dO[dP].innerHTML && (dQ.innerHTML = dO[dP].innerHTML);
      for (const dR of dO[dP].attributes) dQ.setAttribute(dR.name, dR.value);
      d.head.appendChild(dQ);
      dO[dP].remove();
    }
    d.body.appendChild(dN);
  };
  zaraz.f = async function (dS, dT) {
    const dU = { credentials: "include", keepalive: !0, mode: "no-cors" };
    if (dT) {
      dU.method = "POST";
      dU.body = new URLSearchParams(dT);
      dU.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    }
    return await fetch(dS, dU);
  };
  zaraz.ecommerce = async (dm, dn, dp) => {
    (void 0 !== dn && "object" == typeof dn) || (dn = {});
    dn.__zarazEcommerce = !0;
    return await zaraz.track(dm, dn, dp);
  };
  !(function (dW, dX, dY, dZ, d$, ea) {
    function eb(ed, ee) {
      ea ? dZ(ed, ee || 32) : d$.push(ed, ee);
    }
    function ec(ef, eg, eh, ei) {
      return (
        (eg && dX.getElementById(eg)) ||
          ((ei = dX.createElement(ef || "SCRIPT")),
          eg && (ei.id = eg),
          eh && (ei.onload = eh),
          dX.head.appendChild(ei)),
        ei || {}
      );
    }
    (ea = /p/.test(dX.readyState)),
      dW.addEventListener("on" + dY in dW ? dY : "load", function () {
        for (ea = 1; d$[0]; ) eb(d$.shift(), d$.shift());
      }),
      (eb._ = ec),
      (dW.defer = eb),
      (dW.deferscript = function (ej, ek, el, em) {
        eb(function () {
          ec("", ek, em).src = ej;
        }, el);
      });
  })(this, d, "pageshow", setTimeout, []);
  defer(function () {
    for (; zaraz.deferred.length; ) zaraz.deferred.pop()();
    Object.defineProperty(zaraz.deferred, "push", {
      configurable: !0,
      enumerable: !1,
      writable: !0,
      value: function (...en) {
        let eo = Array.prototype.push.apply(this, en);
        for (; zaraz.deferred.length; ) zaraz.deferred.pop()();
        return eo;
      },
    });
  }, 5500);
  addEventListener("visibilitychange", function () {
    for (; zaraz.deferred.length; ) zaraz.deferred.pop()();
  });
  window.zaraz._p = async (bv) =>
    new Promise((bw) => {
      if (bv) {
        bv.e &&
          bv.e.forEach((bx) => {
            try {
              new Function(bx)();
            } catch (by) {
              console.error(`Error executing script: ${bx}\n`, by);
            }
          });
        Promise.allSettled((bv.f || []).map((bz) => fetch(bz[0], bz[1])));
      }
      bw();
    });
  zaraz.pageVariables = {};
  zaraz.__zcl = zaraz.__zcl || {};
  zaraz.track = async function (dq, dr, ds) {
    return new Promise((dt, du) => {
      const dv = { name: dq, data: {} };
      for (const dw of [localStorage, sessionStorage])
        Object.keys(dw || {})
          .filter((dy) => dy.startsWith("_zaraz_"))
          .forEach((dx) => {
            try {
              dv.data[dx.slice(7)] = JSON.parse(dw.getItem(dx));
            } catch {
              dv.data[dx.slice(7)] = dw.getItem(dx);
            }
          });
      Object.keys(zaraz.pageVariables).forEach(
        (dz) => (dv.data[dz] = JSON.parse(zaraz.pageVariables[dz]))
      );
      Object.keys(zaraz.__zcl).forEach(
        (dA) => (dv.data[`__zcl_${dA}`] = zaraz.__zcl[dA])
      );
      dv.data.__zarazMCListeners = zaraz.__zarazMCListeners;
      //
      dv.data = { ...dv.data, ...dr };
      dv.zarazData = zarazData;
      fetch("/zulu/z", {
        credentials: "include",
        keepalive: !0,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dv),
      })
        .catch(() => {
          //
          return fetch("/zulu/z", {
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dv),
          });
        })
        .then(function (dC) {
          zarazData._let = new Date().getTime();
          dC.ok || du();
          return 204 !== dC.status && dC.json();
        })
        .then(async (dB) => {
          await zaraz._p(dB);
          "function" == typeof ds && ds();
        })
        .finally(() => dt());
    });
  };
  zaraz.set = function (dD, dE, dF) {
    try {
      dE = JSON.stringify(dE);
    } catch (dG) {
      return;
    }
    prefixedKey = "_zaraz_" + dD;
    sessionStorage && sessionStorage.removeItem(prefixedKey);
    localStorage && localStorage.removeItem(prefixedKey);
    delete zaraz.pageVariables[dD];
    if (void 0 !== dE) {
      dF && "session" == dF.scope
        ? sessionStorage && sessionStorage.setItem(prefixedKey, dE)
        : dF && "page" == dF.scope
        ? (zaraz.pageVariables[dD] = dE)
        : localStorage && localStorage.setItem(prefixedKey, dE);
      zaraz.__watchVar = { key: dD, value: dE };
    }
  };
  for (const { m: dH, a: dI } of zarazData.q.filter(({ m: dJ }) =>
    ["debug", "set"].includes(dJ)
  ))
    zaraz[dH](...dI);
  for (const { m: dK, a: dL } of zaraz.q) zaraz[dK](...dL);
  delete zaraz.q;
  delete zarazData.q;
  zaraz.fulfilTrigger = function (cI, cJ, cK, cL) {
    zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
    zaraz.__zarazTriggerMap[cI] || (zaraz.__zarazTriggerMap[cI] = "");
    zaraz.__zarazTriggerMap[cI] += "*" + cJ + "*";
    zaraz.track(
      "__zarazEmpty",
      { ...cK, __zarazClientTriggers: zaraz.__zarazTriggerMap[cI] },
      cL
    );
  };
  zaraz._c = (fU) => {
    const { event: fV, ...fW } = fU;
    zaraz.track(fV, { ...fW, __zarazClientEvent: !0 });
  };
  zaraz._syncedAttributes = [
    "altKey",
    "clientX",
    "clientY",
    "pageX",
    "pageY",
    "button",
  ];
  zaraz.__zcl.track = !0;
  d.addEventListener("visibilitychange", (fX) => {
    zaraz._c(
      {
        event: "visibilityChange",
        visibilityChange: [
          { state: d.visibilityState, timestamp: new Date().getTime() },
        ],
      },
      1
    );
  });
  zaraz.__zcl.visibilityChange = !0;
  zaraz.__zarazMCListeners = {
    "google-analytics_v4_bbe7": ["visibilityChange"],
  };
  zaraz._p({
    e: [
      '(function(w,d){w.zarazData.executed.push("6a042f42-624d-4887-b30e-746193bd66aa");w.zarazData.executed.push("Pageview");})(window,document)',
      "const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);",
      '\nloadjs.ready(\'app\', function(){\n  setTimeout(function(){\n       window.zaraz.track("page_loaded")\n       loadjs.done("page_loaded")\n  }, 3000);\n\n});\n',
    ],
    f: [
      [
        "https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-7SH41H6HMK&cid=38cfcd1c-83e5-4ae1-a261-75da5c2bc020&_u=KGDAAEADQAAAAC%7E&z=2096690219",
        {},
      ],
    ],
  });
})(window, document);
