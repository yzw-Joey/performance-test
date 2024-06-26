'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../browser.js');
var easings = require('../easings.js');
var types = require('../types.js');
var raf = require('../raf.js');
var style = require('./style.js');
var core = require('@vueuse/core');

const isScroll = (el, isVertical) => {
  if (!core.isClient)
    return false;
  const key = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(isVertical)];
  const overflow = style.getStyle(el, key);
  return ["scroll", "auto", "overlay"].some((s) => overflow.includes(s));
};
const getScrollContainer = (el, isVertical) => {
  if (!core.isClient)
    return;
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent))
      return window;
    if (isScroll(parent, isVertical))
      return parent;
    parent = parent.parentNode;
  }
  return parent;
};
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!core.isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
function scrollIntoView(container, selected) {
  if (!core.isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
function animateScrollTo(container, from, to, duration, callback) {
  const startTime = Date.now();
  let handle;
  const scroll = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easings.easeInOutCubic(time > duration ? duration : time, from, to, duration);
    if (types.isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < duration) {
      handle = raf.rAF(scroll);
    } else if (typeof callback === "function") {
      callback();
    }
  };
  scroll();
  return () => {
    handle && raf.cAF(handle);
  };
}
const getScrollElement = (target, container) => {
  if (types.isWindow(container)) {
    return target.ownerDocument.documentElement;
  }
  return container;
};
const getScrollTop = (container) => {
  if (types.isWindow(container)) {
    return window.scrollY;
  }
  return container.scrollTop;
};

exports.animateScrollTo = animateScrollTo;
exports.getScrollBarWidth = getScrollBarWidth;
exports.getScrollContainer = getScrollContainer;
exports.getScrollElement = getScrollElement;
exports.getScrollTop = getScrollTop;
exports.isScroll = isScroll;
exports.scrollIntoView = scrollIntoView;
//# sourceMappingURL=scroll.js.map
