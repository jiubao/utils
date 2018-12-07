(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.raf = {})));
}(this, (function (exports) { 'use strict';

  var on = function (element, evt, handler, options) {
    if ( options === void 0 ) options = defaultEventOptions;

    element.addEventListener(evt, handler, options);
    return function () { return off(element, evt, handler, options); }
  };

  var off = function (element, evt, handler, options) {
    if ( options === void 0 ) options = defaultEventOptions;

    element.removeEventListener(evt, handler, options);
  };

  exports.on = on;
  exports.off = off;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
