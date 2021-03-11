// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const obj = {};
    for (const char of str) {
        obj[char] = obj[char]? obj[char] + 1 : 1;
    }
    
    // {null: 0} // dont want POJO bc keys harder to overwrite than array elements
    const highFreq =  [null, 0] 
    for (const key in obj) {
        const thisFreq = obj[key];
        if (thisFreq > highFreq[1]) {
            highFreq[1] = thisFreq;
            highFreq[0] = key;
        }
    }

    return highFreq[0]
}

maxChar("abcccccccd")

module.exports = maxChar;