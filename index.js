'use strict';

require('airbnb-js-shims');

// Fixes super-constructor calls in IE9/10
require('ima-babel6-polyfill');

// document.contains polyfill
require('./document-contains');

require('webrtc-adapter');

// Element.classList polyfill
require('classlist-polyfill');
