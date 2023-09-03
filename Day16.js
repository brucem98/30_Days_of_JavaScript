// https://leetcode.com/problems/promise-time-limit/

const timeLimit = function(fn, t) {
	return async function(...args) {
    // Return promise, promises can return or reject
    return new Promise((resolve, reject) => {
        const id = setTimeout(()=> reject("Time Limit Exceeded"), t); // first parameter of setTimeout is a function which is why we pass an anonymous function
        fn(...args)
            .then((res) => resolve(res)) //waits for function to complete
            .catch((err) => reject(err))
            .finally(() => clearTimeout(id));
    }) 
    }
};

const timeLimit2 = function(fn, t) {
	return async function(...args) {
    // Return promise, promises can return or reject
    return new Promise(async (resolve, reject) => {
        const id = setTimeout(()=> reject("Time Limit Exceeded"), t); // first parameter of setTimeout is a function which is why we pass an anonymous function
        try {
            const res = await fn(...args);
            resolve(res);
        } catch(err) {
            reject(err);
        }
    }) 
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms