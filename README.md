# airbnb-browser-shims <sup>[![Version Badge][2]][1]</sup>

Browser and JS language shims used by Airbnb.

Just require/import `airbnb-browser-shims`, and the environment will be shimmed.

```js
import 'airbnb-browser-shims';
```

## Included shims

 - JS language shims from [airbnb-js-shims](https://github.com/airbnb/js-shims)
 - [ima-babel6-polyfill](https://www.npmjs.com/package/ima-babel6-polyfill) - fixes Babel 6 bugs with `super` calls in IE 9 and 10
 - [document.contains](https://developer.mozilla.org/en/docs/Web/API/Node/contains)
 - [classlist-polyfill](https://www.npmjs.com/package/classlist-polyfill) - Element.prototype.classList polyfill (only in browsers)
 - [raf](https://www.npmjs.com/package/raf) - requestAnimationFrame polyfill for browsers and node
 - [requestIdleCallback](https://www.npmjs.com/package/ric-shim)
 - [matchmedia-polyfill](https://github.com/paulirish/matchMedia.js/) - window.matchMedia polyfill (only in browsers)
 - [whatwg-fetch](https://github.com/github/fetch) - fetch polyfill (only in browsers, supports IE9+)
 - `TouchList[Symbol.iterator]` - when `Symbol` and `TouchList` are both present
 - [element-closest](https://npmjs.com/element-closest) - Element.prototype.closest polyfill (only in browsers)
 - [smoothscroll-polyfill](https://www.npmjs.com/package/smoothscroll-polyfill) - Scroll behavior specification polyfill (only in browsers)
 - [window-location-origin](https://www.npmjs.com/package/window-location-origin) - window.location.origin (for IE < 11)
 - [input-placeholder-polyfill](https://www.npmjs.com/package/input-placeholder-polyfill) - input placeholder polyfill (for IE < 10)

## Only browser shims

If you only want to bring in the browser shims and not the JS language shims
(from `airbnb-js-shims`), you can import `airbnb-browser-shims/browser-only`. If
you choose this route, you will want to be sure that you are properly bringing
in the language shims for the browsers you support somehow. For example:

```js
import 'airbnb-js-shims/target/es2015';
import 'airbnb-browser-shims/browser-only';
```

[1]: https://npmjs.org/package/airbnb-browser-shims
[2]: http://versionbadg.es/airbnb/browser-shims.svg
