// https://leetcode.com/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript

// To enable method chaining in your class methods, you need to make sure that the methods return the object itself (i.e., this)
// after performing their operations. This allows you to call another method on the returned object.

class Calculator {
  constructor(value) {
    this.result = value;
    return this;
  }

  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()); // 10 + 5 - 7 = 8
console.log(new Calculator(2).multiply(5).power(2).getResult()); // (2 * 5) ^ 2 = 100
console.log(new Calculator(20).divide(0).getResult()); // 20 / 0
