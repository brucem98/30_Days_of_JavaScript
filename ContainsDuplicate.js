// https://leetcode.com/problems/contains-duplicate/

// using a for loop

const containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), // true
  containsDuplicate([1, 2, 3, 4]) // false
);
