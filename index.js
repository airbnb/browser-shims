'use strict';

/* eslint global-require: 0 */

require('airbnb-js-shims');

// Fixes super-constructor calls in IE9/10
require('ima-babel6-polyfill');

// document.contains polyfill
require('./document-contains');

// console.* polyfill for old browsers
require('console-polyfill');

require('webrtc-adapter');

require('whatwg-fetch');

if (typeof window !== 'undefined') {
  // Element.classList polyfill
  require('classlist-polyfill');

  // Polyfill window.matchMedia (primarily for IE9)
  require('matchmedia-polyfill');
  require('matchmedia-polyfill/matchMedia.addListener');
}

require('raf/polyfill');

global.requestIdleCallback = require('ric-shim');

global.cancelIdleCallback = global.requestIdleCallback.cancelIdleCallback;
