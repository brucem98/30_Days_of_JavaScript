// https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

const chunk = function (arr, size) {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, size);
    res.push(chunk);
  }
  return res;
};

console.log(chunk([1, 9, 6, 3, 2], (size = 3)));
