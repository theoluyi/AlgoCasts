// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true    "abba"
//   palindrome("abcdefg") === false    "gfedcba"

// new challenge: do it without storing a new value?
// JS is single threaded so I can't run two for loops side by side at once,
// but if I could, I would do forward and reverse, checking each currentChar
// against the other for loop's
// but maybe I could use multiple pointers

function palindrome(str) {
    for (let i = 0; i < str.length; ++i) {
        let left = str[i]; 
        let right = str[str.length-1-i];
        if (left !== right) return false
    }
    return true 
}


// function palindrome(str) {
//     const reversedStr = str.split("").reduce((h,i)=> i+h, "")
//     return (str === reversedStr)? true : false 
// }

module.exports = palindrome;
