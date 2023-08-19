// https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript

const createHelloWorld = () => {
  return (helloWorld = () => {
    return "Hello World";
  });
};

const f = createHelloWorld();
console.log(f(42)); // "Hello World"
