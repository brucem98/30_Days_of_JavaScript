// https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript

Array.prototype.groupBy = function (fn) {
  const res = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    if (!res.hasOwnProperty(key)) {
      res[key] = [];
    }
    res[key].push(this[i]);
  }
  return res;
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
