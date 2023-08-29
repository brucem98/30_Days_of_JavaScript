// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript

//dynamic programming, caching- we wan't the function to only run once for the same input by storing it in object after first run

function memoize(fn) {
  const cache = {}; // store the result of a function with different parameters; making a hash map

  return function (...args) {
    const key = JSON.stringify(args); // because args is an array which is an object which cant be key of hash map so we convert it to a string
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args); //object destructuring to add to object
    return cache[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1

// function f(...args) {
//   console.log(JSON.stringify(args));
// }

// f(1, 2, 3);
