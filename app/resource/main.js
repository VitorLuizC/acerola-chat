'use strict';

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};

  /******/ // The require function
  /******/function __webpack_require__(moduleId) {

    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;

    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };

    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ // Flag the module as loaded
    /******/module.l = true;

    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }

  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;

  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;

  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };

  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };

  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };

  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";

  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 1);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return getElement;
  });
  /* unused harmony export getElements */
  /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
    return dismissDefault;
  });
  /**
   * Get an element by CSS selector.
   * @param {string} selector
   * @param {HTMLElement|Document} parent
   * @returns {HTMLElement}
   */
  function getElement(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    var element = parent.querySelector(selector);
    if (!element) throw new Error('Element "' + selector + '" not found.');
    return element;
  }

  /**
   * Get elements by CSS selector.
   * @param {string} selectors
   * @param {HTMLElement|Document} parent
   * @returns {Array.<HTMLElement>}
   */
  function getElements(selectors) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    var elements = parent.querySelectorAll(selectors);
    if (elements.length === 0) throw new Error('Elements "' + selectors + '" not found.');
    return Array.from(elements);
  }

  /**
   * Returns a nice event handler.
   * @param {Function} callback
   */
  function dismissDefault(callback) {
    /**
     * Event handler. Could dismiss default action.
     * @param {Event} event
     */
    function handler(event) {
      var value = callback.apply(this, event);
      event.preventDefault();
      event.stopPropagation();
      return value;
    }

    return handler;
  }

  /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_html_js__ = __webpack_require__(0);

  /**
   * Global socket client instance.
   */
  var socket = io();

  var list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_html_js__["a" /* getElement */])('#list');
  var send = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_html_js__["a" /* getElement */])('#send');
  var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_html_js__["a" /* getElement */])('#text');

  send.addEventListener('click', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_html_js__["b" /* dismissDefault */])(function () {
    socket.emit('send', createMessage());
  }));

  socket.on('receive', function (message) {
    list.appendChild(createItem(message));
  });

  /**
   * @typedef Message
   * @type {Object}
   * @property {string} text
   * @property {string} time
   */

  /**
   * @returns {Message}
   */
  function createMessage() {
    var date = new Date();

    return {
      text: text.value,
      time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    };
  }

  /**
   * @param {Message} message
   * @returns {HTMLLIElement}
   */
  function createItem(message) {
    var item = document.createElement('li');

    item.innerHTML = '\n    <p>' + message.text + '</p>\n    <small>' + message.time + '</small>\n  ';

    return item;
  }

  /***/
}]);
