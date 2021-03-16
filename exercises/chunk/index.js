// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * Questions
 * A) are we mutating the original array?
 * 
 */

/**
 * we can use a nested for loop here
 * first we loop over the array
 * then we loop over the values in it? that sounds wrong. maybe it's not nested,
 * but just there's pushing happening inside the for loop
 * 
 * having trouble thinking about initializing each chunk, where to do it???
 */

function chunk(array, size) {
    // initialize the return value, a newArray full of chunks
    let newArray = []
    // initialize the chunk, which will be added to the new array
    let chunk = []

    // loop over the original array
    for (const element of array) {
        // if the chunk is still smaller than its max size, push another element into it
        // I think this might fail because if we run out of elements we aren't adding the new chunk
        if (chunk.length < size) {
            chunk.push(element)
        } 
        if (chunk.length === size || array[array.length-1] === element) {
        // if the chunk is large enough, or we are at the last available element (QQ imprecise condition)
        // note: condition is imprecise because we are checking the element value, not its index
        // if we used a traditional for loop instead, there'd definitely be a certain check
        // add the chunk to the newArray
            newArray.push(chunk)
        // repoint the chunk variable to a different array in memory, so we can build a new chunk
            chunk = []
        }
    }
    // don't forget to return something!
    return newArray;
}

module.exports = chunk;
