(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@jiubao/passive')) :
  typeof define === 'function' && define.amd ? define(['exports', '@jiubao/passive'], factory) :
  (factory((global.raf = {}),global.supportPassive));
}(this, (function (exports,supportPassive) { 'use strict';

  supportPassive = supportPassive && supportPassive.hasOwnProperty('default') ? supportPassive['default'] : supportPassive;

  var passive = supportPassive();
  var defaultEventOptions = passive ? {capture: false, passive: true} : false;

  var on = function (element, evt, handler, options) {
    if ( options === void 0 ) options = defaultEventOptions;

    element.addEventListener(evt, handler, options);
    return function () { return off(element, evt, handler, options); }
  };

  var off = function (element, evt, handler, options) {
    if ( options === void 0 ) options = defaultEventOptions;

    element.removeEventListener(evt, handler, options);
  };

  var isFunction = function (value) { return typeof value === 'function'; };
  var isString = function (value) { return typeof value === 'string'; };
  var isArray = function (arr) { return Array.isArray(arr) || arr instanceof Array; };

  var html = function (literalSections) {
    var subsets = [], len = arguments.length - 1;
    while ( len-- > 0 ) subsets[ len ] = arguments[ len + 1 ];

    return subsets.reduce(function (result, current, index) { return result + current + literalSections[index + 1]; }, literalSections[0]);
  };

  var hasClass = function (elm, className) { return elm.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(elm.className); };
  var addClass = function (elm, className) {
  	if (!hasClass(elm, className)) {
  		elm.className += (elm.className ? ' ' : '') + className;
  	}
  };
  var removeClass = function (elm, className) {
  	var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
  	elm.className = elm.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  };

  var inViewport = function (item) {
    var rect = item.getBoundingClientRect();
    return (rect.top < window.innerHeight && rect.bottom > 0) &&
      (rect.left < window.innerWidth && rect.right > 0)
  };

  exports.on = on;
  exports.off = off;
  exports.isFunction = isFunction;
  exports.isString = isString;
  exports.isArray = isArray;
  exports.html = html;
  exports.hasClass = hasClass;
  exports.addClass = addClass;
  exports.removeClass = removeClass;
  exports.inViewport = inViewport;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
