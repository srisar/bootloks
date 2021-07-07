// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"NdG1R":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "3150dcae12e5ccdc76d7c4d48cc4a7f9";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"7fPzZ":[function(require,module,exports) {
var _srcBootloks = require("../../src/bootloks");
let output = document.getElementById("output");
document.getElementById("btnInfoDialog").addEventListener("click", () => {
  _srcBootloks.infoDialog({
    message: "This is the message"
  });
});
document.getElementById("btnInfoDialogMore").addEventListener("click", () => {
  _srcBootloks.infoDialog({
    message: "This is the message",
    title: "Custom title comes here 🚀"
  });
});
document.getElementById("btnInfoDialogCallback").addEventListener("click", () => {
  _srcBootloks.infoDialog({
    message: "This is the message",
    title: "Custom title comes here 🚀"
  }, function () {
    alert("The dialog box was closed");
  });
});
document.getElementById("btnSuccessDialog").addEventListener("click", () => {
  _srcBootloks.successDialog({
    message: "Task successfully completed. <br> <span class='fw-bold'>You can now relax.</span>",
    title: "🚀 All done sire"
  }, function () {
    alert("The dialog box was closed");
  });
});
document.getElementById("btnErrorDialog").addEventListener("click", () => {
  _srcBootloks.errorDialog({
    message: "Task failed. I am sorry I have let you down.",
    title: "Oopsies... Can do nothin'"
  }, function () {
    alert("The dialog box was closed");
  });
});
document.getElementById("btnTextInputBasic").addEventListener("click", () => {
  _srcBootloks.textPrompt({
    message: "Care to share your favorite color? Mine is <span class='text-danger'>red.</span>"
  }, function (data) {
    /*make sure to sanitize the input data*/
    let value = data.trim();
    if (value !== "") {
      output.innerText = "You have typed " + value + ". Are you sure that is a color?";
    }
  });
});
document.getElementById("btnTextInput").addEventListener("click", () => {
  _srcBootloks.textPrompt({
    message: "What is your favorite color?",
    title: "Color please... ⛄"
  }, function (data) {
    /*make sure to sanitize the input data*/
    let value = data.trim();
    if (value !== "") {
      output.innerText = "You have typed " + value;
    }
  }, function () {
    output.innerText = "You cancelled the prompt 😢";
  });
});
document.getElementById("btnMultiTextInput").addEventListener("click", () => {
  _srcBootloks.textAreaPrompt({
    message: "Can you write something in two lines?",
    title: "Haiku, Might it be?"
  }, function (data) {
    /*make sure to sanitize the input data*/
    let value = data.trim();
    if (value !== "") {
      output.innerHTML = value;
    }
  }, function () {
    output.innerText = "You cancelled the prompt 😢";
  });
});
document.getElementById("btnNumberInput").addEventListener("click", () => {
  _srcBootloks.numberPrompt({
    message: "What is the meaning of life?",
    title: "Do you need a guide to galaxy?"
  }, function (data) {
    /*make sure to sanitize the input data*/
    let value = parseInt(data);
    if (!isNaN(value)) {
      if (value === 42) output.innerText = "Nice."; else output.innerText = "You certainly need a guide to the galaxy";
    }
  }, function () {
    output.innerText = "You cancelled the prompt 😢";
  });
});
document.getElementById("btnDateInput").addEventListener("click", () => {
  _srcBootloks.datePrompt({
    message: "Choose a random date",
    title: "Date mystery"
  }, function (data) {
    output.innerText = data;
  }, function () {
    output.innerText = "You cancelled the prompt 😢";
  });
});
document.getElementById("btnDrpDateField").addEventListener("click", () => {
  _srcBootloks.drpDatePrompt({
    message: "Choose a date"
  }, data => {
    let output = document.getElementById("drp-output");
    output.innerText = data;
  });
});
document.getElementById("btnDrpDateRangeField").addEventListener("click", () => {
  _srcBootloks.drpDateRangePrompt({
    message: "Choose a date",
    startDate: "2020-05-10"
  }, data => {
    let output = document.getElementById("drp-output");
    output.innerText = data;
  });
});

},{"../../src/bootloks":"7psb6"}],"7psb6":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "infoDialog", function () {
  return infoDialog;
});
_parcelHelpers.export(exports, "successDialog", function () {
  return successDialog;
});
_parcelHelpers.export(exports, "errorDialog", function () {
  return errorDialog;
});
_parcelHelpers.export(exports, "textPrompt", function () {
  return textPrompt;
});
_parcelHelpers.export(exports, "textAreaPrompt", function () {
  return textAreaPrompt;
});
_parcelHelpers.export(exports, "datePrompt", function () {
  return datePrompt;
});
_parcelHelpers.export(exports, "numberPrompt", function () {
  return numberPrompt;
});
_parcelHelpers.export(exports, "drpDatePrompt", function () {
  return drpDatePrompt;
});
_parcelHelpers.export(exports, "drpDateRangePrompt", function () {
  return drpDateRangePrompt;
});
/**
* Generates the modal window with given data and callbacks
* @param element
* @param params
* @param okButtonCallback
* @param cancelButtonCallback
*/
function generateModal(element, params, okButtonCallback, cancelButtonCallback) {
  document.body.appendChild(element);
  let myPromptDialog = new bootstrap.Modal(document.getElementById(params.id), {
    backdrop: "static"
  });
  myPromptDialog.show();
  function okEvent(e) {
    if (e.target && e.target.id === "ss-button-prompt-ok") {
      let field = document.getElementById("ss-prompt-input-value");
      /*check if it drp date-range field*/
      if (field.classList.contains("drp-range-control")) {
        let dates = field.value.split(" - ");
        okButtonCallback(dates);
      } else {
        okButtonCallback(field.value);
      }
      myPromptDialog.hide();
    }
  }
  function cancelEvent(e) {
    if (e.target && e.target.id === "ss-button-prompt-cancel") {
      if (cancelButtonCallback !== undefined) {
        cancelButtonCallback();
      }
      myPromptDialog.hide();
    }
  }
  document.addEventListener("click", okEvent);
  document.addEventListener("click", cancelEvent);
  document.getElementById(params.id).addEventListener("hidden.bs.modal", function () {
    document.removeEventListener("click", okEvent);
    document.removeEventListener("click", cancelEvent);
    let dom = document.getElementById(params.id);
    const modal = bootstrap.Modal.getInstance(dom);
    modal.dispose();
    document.getElementById("ss-modal-dialog-container").remove();
  });
}
class AlertDialog {
  constructor(params = {
    message: "",
    title: "",
    id: "",
    borderClass: "",
    closeButtonText: ""
  }, closeCallback) {
    params.id = params.id ?? "ss-dialog-box-modal";
    params.title = params.title ?? "Alert";
    params.message = params.message ?? "";
    params.borderClass = params.borderClass ?? "border-primary";
    params.closeButtonText = params.closeButtonText ?? "Close";
    params.titleTextColor = params.titleTextColor ?? "text-primary";
    let element = document.createElement("div");
    element.id = "ss-modal-dialog-container";
    element.innerHTML = `<div class="modal fade" id="${params.id}" tabindex="-1" aria-labelledby="" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >` + `<div class="modal-dialog">` + `<div class="modal-content border ${params.borderClass}">` + `<div class="modal-header">` + `<p class="modal-title text-uppercase fw-bold ${params.titleTextColor}">${params.title}</p>` + `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` + `</div>` + `<div class="modal-body">${params.message}</div>` + `<div class="modal-footer">` + `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${params.closeButtonText}</button>` + `</div>` + `</div>` + `</div>` + `</div>`;
    document.body.appendChild(element);
    let myAlertModal = new bootstrap.Modal(document.getElementById(params.id), {
      backdrop: true
    });
    myAlertModal.show();
    document.getElementById(params.id).addEventListener("hide.bs.modal", function () {
      document.getElementById("ss-modal-dialog-container").remove();
      if (closeCallback !== undefined) {
        closeCallback();
      }
    });
  }
}
class CustomPrompt {
  constructor(params = {
    message: "",
    title: "",
    id: "",
    fieldType: ""
  }, okButtonCallback, cancelButtonCallback) {
    params.id = params.id ?? "ss-prompt-box-modal";
    params.title = params.title ?? "Prompt";
    params.message = params.message ?? "";
    params.fieldType = params.fieldType ?? "text";
    let element = document.createElement("div");
    element.id = "ss-modal-dialog-container";
    /*types of fields*/
    let inputField = "<input type='text' class='form-control' id='ss-prompt-input-value'>";
    if (params.fieldType === "textarea") inputField = "<textarea rows='5' class='form-control' id='ss-prompt-input-value'></textarea>";
    if (params.fieldType === "number") inputField = "<input type='number' class='form-control' id='ss-prompt-input-value'>";
    if (params.fieldType === "date") inputField = "<input type='date' class='form-control' id='ss-prompt-input-value'>";
    if (params.fieldType === "drp-date") inputField = "<input type='text' class='form-control drp-control' id='ss-prompt-input-value'>";
    if (params.fieldType === "drp-date-range") inputField = "<input type='text' class='form-control drp-range-control' id='ss-prompt-input-value'>";
    element.innerHTML = `<div class="modal fade" id="${params.id}" tabindex="-1" aria-labelledby="" aria-hidden="true">` + `<div class="modal-dialog">` + `<div class="modal-content">` + `<div class="modal-header">` + `<p class="modal-title text-uppercase fw-bold">${params.title}</p>` + `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` + `</div>` + `<div class="modal-body">` + `${params.message}` + `${inputField}` + `</div>` + ` <div class="modal-footer">` + `<button type="button" class="btn btn-success" id="ss-button-prompt-ok">Ok</button>` + `<button type="button" class="btn btn-secondary" id="ss-button-prompt-cancel" data-bs-dismiss="modal">Cancel</button>` + `</div>` + `</div>` + `</div>` + `</div>`;
    generateModal(element, params, okButtonCallback, cancelButtonCallback);
  }
}
function infoDialog(params = {}, closeCallback) {
  params.title = params.title ?? "Information";
  new AlertDialog({
    message: params.message,
    title: params.title,
    borderClass: "border-primary",
    closeButtonText: "Ok",
    titleTextColor: "text-primary"
  }, closeCallback);
}
function successDialog(params = {}, closeCallback) {
  params.title = params.title ?? "Success";
  new AlertDialog({
    message: params.message,
    title: params.title,
    borderClass: "border-success",
    closeButtonText: "Ok",
    titleTextColor: "text-success"
  }, closeCallback);
}
function errorDialog(params = {}, closeCallback) {
  params.title = params.title ?? "Error";
  new AlertDialog({
    message: params.message,
    title: params.title,
    borderClass: "border-danger",
    closeButtonText: "Ok",
    titleTextColor: "text-danger"
  }, closeCallback);
}
function textPrompt(params = {}, okCallback, cancelCallback) {
  new CustomPrompt({
    message: params.message,
    title: params.title,
    fieldType: "text"
  }, okCallback, cancelCallback);
}
function textAreaPrompt(params = {}, okCallback, cancelCallback) {
  new CustomPrompt({
    message: params.message,
    title: params.title,
    fieldType: "textarea"
  }, okCallback, cancelCallback);
}
function datePrompt(params = {}, okCallback, cancelCallback) {
  new CustomPrompt({
    message: params.message,
    title: params.title,
    fieldType: "date"
  }, okCallback, cancelCallback);
}
function numberPrompt(params = {}, okCallback, cancelCallback) {
  new CustomPrompt({
    message: params.message,
    title: params.title,
    fieldType: "number"
  }, okCallback, cancelCallback);
}
function drpDatePrompt(params = {}, okCallback, cancelCallback) {
  new CustomPrompt({
    message: params.message,
    title: params.title,
    fieldType: "drp-date"
  }, okCallback, cancelCallback);
  let sDate = params.startDate ?? moment().format("YYYY-MM-DD");
  $(".drp-control").daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    autoApply: true,
    startDate: sDate,
    locale: {
      format: "YYYY-MM-DD"
    }
  });
}
function drpDateRangePrompt(params = {}, okCallback, cancelCallback) {
  new CustomPrompt({
    message: params.message,
    title: params.title,
    fieldType: "drp-date-range"
  }, okCallback, cancelCallback);
  let sDate = params.startDate ?? moment().format("YYYY-MM-DD");
  let eDate = params.endDate ?? moment().format("YYYY-MM-DD");
  $(".drp-range-control").daterangepicker({
    showDropdowns: true,
    startDate: sDate,
    endDate: eDate,
    autoApply: true,
    locale: {
      format: "YYYY-MM-DD"
    }
  });
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["NdG1R","7fPzZ"], "7fPzZ", "parcelRequire9eda")

//# sourceMappingURL=index.8cc4a7f9.js.map
