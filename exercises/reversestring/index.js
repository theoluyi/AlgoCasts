// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split("").reduce((h,i) => i + h, "")
}

reverse('abcde')

// function reverse(str) {
//     let reverseString = ""
//     for (let i = str.length-1; i >=0; --i) {
//         currentChar = str[i]
//         reverseString = reverseString.concat(currentChar)

//     }
//     return reverseString
// }

module.exports = reverse;