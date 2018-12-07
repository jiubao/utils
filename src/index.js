export const on = (element, evt, handler, options = defaultEventOptions) => {
  element.addEventListener(evt, handler, options)
  return () => off(element, evt, handler, options)
}

export const off = (element, evt, handler, options = defaultEventOptions) => {
  element.removeEventListener(evt, handler, options)
}

export const inViewport = item => {
  var rect = item.getBoundingClientRect()
  return (rect.top < window.innerHeight && rect.bottom > 0) &&
    (rect.left < window.innerWidth && rect.right > 0)
}
