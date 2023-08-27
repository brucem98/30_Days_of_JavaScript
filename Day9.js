// https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

const argumentsLength = function (...args) {
  const arguments = [...args];
  return arguments.length;
};

console.log(argumentsLength(1, 2, 3)); // 3
