'use strict';

require('airbnb-js-shims');

// Fixes super-constructor calls in IE9/10
require('ima-babel6-polyfill');

// document.contains polyfill
require('./document-contains');

require('webrtc-adapter');

if (typeof window !== 'undefined') {
  // Element.classList polyfill
  require('classlist-polyfill'); // eslint-disable-line global-require
}

require('raf/polyfill');
