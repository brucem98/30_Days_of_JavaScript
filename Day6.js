// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript

const filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(
  filter(
    [0, 10, 20, 30],
    (fn = function greaterThan10(n) {
      return n > 10;
    })
  )
); // [20, 30]

console.log(
  filter(
    [1, 2, 3],
    (fn = function firstIndex(n, i) {
      return i === 0;
    })
  )
);
