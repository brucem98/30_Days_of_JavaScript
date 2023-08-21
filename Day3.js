// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

const expect = (val) => {
  const originalVal = val;

  return {
    toBe: function (val) {
      if (originalVal === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val) {
      if (originalVal !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect("hello").notToBe("cya")); // throws "Equal"
