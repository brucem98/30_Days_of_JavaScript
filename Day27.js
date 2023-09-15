// https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript

// recursion

const compactObject = function (obj) {
  // these three if statements deal with when obj is not an iterable object
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  // this for loop is when obj is an iterable object
  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
};

console.log(compactObject([null, 0, false, 1]));
