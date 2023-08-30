// https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

const addTwoPromises = async function (promise1, promise2) {
  // Wait for all promises to resolve and get their value
  const [value1, value2] = await Promise.all([promise1, promise2]);

  // Returns a new promise that resolves when values are added
  return value1 + value2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
