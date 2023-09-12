// https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript

const join = function (arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const merged = {};

  combinedArray.forEach((obj) => {
    const id = obj.id;
    if (!merged[id]) {
      merged[id] = { ...obj };
    } else {
      merged[id] = { ...merged[id], ...obj }; //ensures properties from arr2 take precedence over arr1
    }
  });

  const joinedArray = Object.values(merged);
  joinedArray.sort((a, b) => a.id - b.id);

  return joinedArray;
};

console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [{ id: 3, x: 5 }]
  )
);
