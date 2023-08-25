// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

const reduce = function (nums, fn, init) {
  let value = init;
  for (let i = 0; i < nums.length; i++) {
    value = fn(value, nums[i]);
  }
  return value;
};

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
