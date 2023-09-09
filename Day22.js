// https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript

class arrLast{
    constructor(arr){
        this.arr = arr;
    }

    last () {
        if(this.arr === 0) {
            return -1;
        } else {
            return this.arr[this.arr.length -1];
        }
    }
}

const arr = new arrLast([1, 2, 3]);
console.log(arr.last()); // 3
 