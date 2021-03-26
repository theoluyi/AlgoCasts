// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const objectA = {};
    const objectB = {};

    // Check if strings are the same length, if not they can't be anagrams
    if (stringA.length !== stringB.length) {
        return false;
    }
    const simpStringA = stringA.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
    const simpStringB = stringB.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
    // console.log('simpStringA :>> ', simpStringA);
    // console.log('simpStringB :>> ', simpStringB);
    for (const char of simpStringA) {
        if (objectA[char]) {
            objectA[char] += 1;
        }
        else {
            objectA[char] = 1;
        }
    }
    for (const char of simpStringB) {
        if (objectB[char]) {
            objectB[char] += 1;
        }
        else {
            objectB[char] = 1;
        }
    }

    // We want to check to make sure that these objects have the same number of keys
    for (const key in objectA) {
        if (objectA[key] !== objectB[key]) {
            return false
        }

    }
    return true;

}

module.exports = anagrams;
