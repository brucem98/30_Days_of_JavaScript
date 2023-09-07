// https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript

var isEmpty = function (obj) {
  //objects and array return true even if they are empty so we use Object.keys
  return Object.keys(obj).length === 0;
};

console.log(isEmpty({ x: 5, y: 42 }), isEmpty({}), isEmpty([]));
