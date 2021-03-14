function f(a, b) {
  console.log(a + b);
}
function defer(ms) {
  let f = this;
  return function (...args) {
    setTimeout(function () {
      f(...args);
    }, ms);
  };
}
Function.prototype.defer = defer;
f.defer(1000)(1, 2);
