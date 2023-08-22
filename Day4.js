// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript

function createCounter(init) {
  let count = init;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      count = init; // init is our hidden state;
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(
  counter.increment(), // 6
  counter.reset(), // 5
  counter.decrement() // 4
);
