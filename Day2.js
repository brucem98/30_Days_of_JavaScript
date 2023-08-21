// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

const createCounter = (n) => {
  return function counter() {
    return n++; // hidden state
  };
};

const counter = createCounter(3);
console.log(counter());
console.log(counter());
console.log(counter());
