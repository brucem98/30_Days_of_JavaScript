// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

const promiseAll = async function (functions) {
  return await new Promise((resolve, reject) => {
    let arr = Array(functions.length); // initialize arr of size functions.length
    let waitingFor = functions.length;

    for (let i = 0; i < functions.length; ++i) {
      functions[i]()
        .then((result) => {
          arr[i] = result;
          if (--waitingFor === 0) resolve(arr);
        })
        .catch(reject);
    }
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
