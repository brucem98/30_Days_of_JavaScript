// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ""; 
    }

    // Sort the array of strings to make it easier to find the common prefix
    strs.sort();

    // Take the first and last strings in the sorted array
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    // Iterate through the characters of the first string
    let prefix = "";
    for (let i = 0; i < firstStr.length; i++) {
        // If the character at the current position matches in both the first and last strings
        if (firstStr[i] === lastStr[i]) {
            prefix += firstStr[i];
        } else {
            break; // Break the loop if characters don't match
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));