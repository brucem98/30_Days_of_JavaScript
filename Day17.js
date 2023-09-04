// https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript

class TimeLimitedCache {
  cache = new Map(); // initialize hash map we dont need constructor this time

  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
      // value in alreadyExists is now an object so it will never evaluate to false as long as the object isnt null so we can use 0 key
      clearTimeout(alreadyExists.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutId });
    return Boolean(alreadyExists); // returns true or false as required  similar to if statements
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}

// Your TimeLimitedCache object will be instantiated and called as such:
const obj = new TimeLimitedCache();
console.log(
  obj.set(1, 42, 1000), // false
  obj.get(1), // 42
  obj.count() // 1
);
