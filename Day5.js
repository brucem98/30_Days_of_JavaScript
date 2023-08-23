// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

// The returned array should be created such that returnedArray[i] = fn(arr[i], i)

const map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

console.log(
  map(
    [1, 2, 3],
    (fn = function plusone(n) {
      return n + 1;
    })
  )
);

console.log(
  map(
    [1, 2, 3],
    (fn = function plusI(n, i) {
      return n + i;
    })
  )
);
