// https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript

const debounce = function (fn, t) {
  let id;
  return function (...args) {
    clearTimeout(id); // you can pass a undefined
    id = setTimeout(() => fn(...args), t);
  };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
