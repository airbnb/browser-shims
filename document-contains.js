'use strict';

/* globals document, Element */

var shim;

if (typeof document !== 'undefined' && !document.contains) {
  shim = function contains(node) {
    /* eslint prefer-rest-params: 0, no-param-reassign: 0 */
    if (arguments.length < 1) {
      throw new TypeError('1 argument is required');
    }

    do {
      if (this === node) {
        return true;
      }
      if (node) {
        node = node.parentNode;
      }
    } while (node);

    return false;
  };
  document.contains = shim;
  Element.prototype.contains = shim;
}

