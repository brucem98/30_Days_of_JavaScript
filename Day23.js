// https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
    
};

console.log(sortBy([5, 4, 1, 2, 3], fn = (x) => x));