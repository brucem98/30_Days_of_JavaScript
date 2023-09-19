// https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((sum, current) => sum + current, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(
  obj1 + obj2, // 10
  String(obj1), // "[1,2]"
  String(obj2) // "[3,4]"
);
