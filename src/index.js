export default function timeout(fn, ...restArgs) {
  let id = void 0;

  function processTimeout(...args) {
    id = void 0;

    fn.apply(this, args);
  }

  id = setTimeout(processTimeout, ...restArgs);

  function clear() {
    if (typeof id === 'undefined') {
      return;
    }

    clearTimeout(id);
    id = void 0;
  }

  return clear;
}
