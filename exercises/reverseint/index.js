// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n.toString()[0] !== '-') {
        return n.toString().split("").reverse().join("") * 1;
    }
    if (n.toString()[0] === '-') {
        const stringNum = n.toString().split("").reverse()
        stringNum.unshift(stringNum.pop())
        return stringNum.join("") * 1
    }

}

module.exports = reverseInt;
