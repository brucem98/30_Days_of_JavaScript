// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

const once = function (fn) {
  let enable = true;

  return function (...args) {
    if (enable) {
      enable = false;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
