// https://leetcode.com/problems/valid-palindrome/description/

const isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return newStr.split("").reverse().join("") === newStr ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), // true
isPalindrome("race a car")); // false