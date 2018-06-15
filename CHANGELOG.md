Unreleased
=================

2.1.1 / 2018-06-14
=================
  * [Deps] update `airbnb-js-shims`, `matchmedia-polyfill`
  * [Dev Deps] update `eslint`, `eslint-plugin-import`, `nsp`, `tape`

2.1.0 / 2018-01-24
=================
  * [New] add window.location.origin polyfill
  * [Deps] update `airbnb-js-shims`, `console-polyfill`, `raf`
  * [Dev Deps] update `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`
  * [Tests] up to `node` `v9.4`, `v8.5`, `v6.12`; pin included builds to LTS

2.0.0 / 2017-09-22
=================
  * [Breaking] Remove `webrtc-adapter`
  * [Dev Deps] update `eslint`

1.12.0 / 2017-09-14
=================
  * [New] Bump the webrtc-adapter dependency to latest version
  * [Deps] update `airbnb-js-shims`, `smoothscroll-polyfill`, `whatwg-fetch`
  * [Dev Deps] update `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `tape`
  * [Tests] up to `node` `v8.5`, `v6.11`
  * [Tests] use `nvm install-latest-npm` to ensure new npm doesn’t break on older node

1.11.1 / 2017-06-07
=================
  * [Fix] `TouchList` is a constructor
  * [Dev Deps] update `eslint-plugin-import`

1.11.0 / 2017-05-25
=================
  * [New] Add `smoothscroll-polyfill`

1.10.0 / 2017-05-23
=================
  * [New] Add Element.prototype.closest polyfill

1.9.0 / 2017-05-23
=================
  * [New] polyfill Symbol.iterator on TouchList
  * [Deps] update `classlist-polyfill`, `raf`
  * [Dev Deps] update `eslint`, `eslint-config-airbnb-base`

1.8.0 / 2017-03-22
=================
  * [Deps] update `airbnb-js-shims`
  * [Dev Deps] update `eslint`, `eslint-config-airbnb-base`
  * [Deps] downgrade `whatwg-fetch` to v0.11 for full IE9 support

1.7.0 / 2017-02-16
=================
  * [New] split out browser-only entry point

1.6.0 / 2017-02-06
=================
  * [New] add whatwg-fetch (#10)
  * [Deps] update `webrtc-adapter`
  * [Dev Deps] update `eslint`, `eslint-config-airbnb-base`
  * [Tests] up to `node` `v7.5`, `v6.9`, `v4.7`; improve test matrix

1.5.0 / 2016-11-23
=================
  * [New] add `console.*` polyfills (#7)

1.4.0 / 2016-11-18
=================
  * [New] add `requestIdleCallback` (#6)
  * [Deps] update `webrtc-adapter`
  * [Dev Deps] update `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `safe-publish-latest`, `tape`

1.3.1 / 2016-10-23
=================
  * Fix v1.3.0 publish

1.3.0 / 2016-09-13
=================
  * [New] Add matchMedia polyfill (#3)

1.2.0 / 2016-09-02
=================
  * [New] add `requestAnimationFrame` polyfill. Works in browsers + node
  * [Dev Deps] update `eslint`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`

1.1.0 / 2016-08-25
=================
  * [New] add `classList` polyfill; only require it in browsers
  * [Dev Deps] add `safe-publish-latest`; update `eslint-plugin-import`
  * [Docs] add npm version badge

1.0.0 / 2016-08-17
=================
  * Initial release.
