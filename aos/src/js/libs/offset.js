/**
 * Get offset of DOM element
 * like there were no transforms applied on it
 *
 * @param  {Node}                   el        [DOM element]
 * @param  {(HTMLElement|Window)}   container [AOS container]
 * @return {Object}                           [top and left offset]
 */
const offset = function(el, container) {
  let _x = 0;
  let _y = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
    _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent === container ? null : el.offsetParent;
  }

  return {
    top: _y,
    left: _x
  };
};

export default offset;
