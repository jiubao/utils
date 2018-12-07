export const on = (element, evt, handler, options = defaultEventOptions) => {
  element.addEventListener(evt, handler, options)
  return () => off(element, evt, handler, options)
}

export const off = (element, evt, handler, options = defaultEventOptions) => {
  element.removeEventListener(evt, handler, options)
}
