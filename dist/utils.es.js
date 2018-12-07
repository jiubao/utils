var on = function (element, evt, handler, options) {
  if ( options === void 0 ) options = defaultEventOptions;

  element.addEventListener(evt, handler, options);
  return function () { return off(element, evt, handler, options); }
};

var off = function (element, evt, handler, options) {
  if ( options === void 0 ) options = defaultEventOptions;

  element.removeEventListener(evt, handler, options);
};

var inViewport = function (item) {
  var rect = item.getBoundingClientRect();
  return (rect.top < window.innerHeight && rect.bottom > 0) &&
    (rect.left < window.innerWidth && rect.right > 0)
};

export { on, off, inViewport };
