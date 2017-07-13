'use strict';

/* eslint global-require: 0 */

// Fixes super-constructor calls in IE9/10
require('ima-babel6-polyfill');

// document.contains polyfill
require('./document-contains');

// console.* polyfill for old browsers
require('console-polyfill');

require('webrtc-adapter');

require('whatwg-fetch');

require('function.prototype.name').shim();

if (typeof window !== 'undefined') {
  // Element.classList polyfill
  require('classlist-polyfill');

  // Element.closest polyfill
  require('element-closest');

  // Polyfill for smooth scrolling behavior
  require('smoothscroll-polyfill').polyfill();

  // Polyfill window.matchMedia (primarily for IE9)
  require('matchmedia-polyfill');
  require('matchmedia-polyfill/matchMedia.addListener');
}

require('raf/polyfill');

global.requestIdleCallback = require('ric-shim');

global.cancelIdleCallback = global.requestIdleCallback.cancelIdleCallback;

var hasSymbols = typeof Symbol === 'function' && Symbol.iterator;

/* globals TouchList */
if (hasSymbols && typeof TouchList === 'function' && typeof TouchList.prototype[Symbol.iterator] !== 'function') {
  TouchList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
}
