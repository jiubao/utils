var on = function (element, evt, handler, options) {
  if ( options === void 0 ) options = defaultEventOptions;

  element.addEventListener(evt, handler, options);
  return function () { return off(element, evt, handler, options); }
};

var off = function (element, evt, handler, options) {
  if ( options === void 0 ) options = defaultEventOptions;

  element.removeEventListener(evt, handler, options);
};

export { on, off };
