// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) { 
            console.log("fizz")
        } else if (i % 5 === 0) { 
            console.log("buzz")
        }    
        else {
            console.log(i)
        }
    } // end for loop
}

// is this logic like working upward from the bottom
// of a choice tree?
// the else condition is the most general
// i % 15 === 0 is the most specific
// i % 3 === 0 and i % 5 === 0 are less specific than
// i % 15 === 0, but as specific as each other 
// so the logic (if ... if else ... else) statement flow
// looks like an upside down tree, with the roots at the top (the most)
// or it could be right side up if we just think about a typical data tree
// as being already inverted

// yes, that is it: by convention, trees are drawn growing downwards
// The topmost node in a tree is called the root node. 

// so with that in mind, this is a right side up tree, drawn against the convention
// so that it looks like a real life tree, where the most superficial
// aspects are at the top, and the most generalized is at the bottom (root)

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let message = i;
//         if (i % 3 === 0) {message = "fizz"}
//         if (i % 5 === 0) {message = "buzz"}
//         if (i % 3 === 0 && i % 5 === 0) {message = "fizzbuzz"}
//         console.log(message)
//     }
// }

// second solution: uses assignment
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let message;
//         if (i % 3 !== 0 && i % 5 !== 0) {message = i}
//         if (i % 3 === 0) {message = "fizz"}
//         if (i % 5 === 0) {message = "buzz"}
//         if (i % 3 === 0 && i % 5 === 0) {message = "fizzbuzz"}
//         console.log(message)
//     }
// }

// first working solution, all if statements, no value storing, classic for loop
// most stringent conditions at top
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 !== 0 && i % 5 !== 0) {console.log(i)}
//         if (i % 3 === 0 && i % 5 === 0) {console.log("fizzbuzz")}
//         if (i % 3 === 0) { console.log("fizz")}
//         if (i % 5 === 0) { console.log("buzz")}    
//     }
// }

// first stepwise fix: corrects for loop conditions
// gets console logging correct number of times
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }

// SECOND TRY, DOESN'T WORK EITHER; surprisd that this doesn't, since this seems
// like a much simpler approach; not trying to store values
// would probably benefit from either/or A) pseudocode B) debugger
// function fizzBuzz(n) {
//     for (let i = 0; i < n; i++) {
//         if (i % 3 !== 0 && i % 5 !== 0) {console.log(i)}
//         if (i % 3 === 0 && i % 5 === 0) {console.log("fizzbuzz")}
//         if (i % 3 === 0) { console.log("fizz")}
//         if (i % 5 === 0) { console.log("buzz")}
//     }
// }

// FIRST TRY, DOESN'T WORK; trying to store the values in a message seems
// problematic due to JS dynamic typing / coercion, you get values like NaN and undefined
// function fizzBuzz(n) {
//     for (let i = 1; i < n; i++) {
//         let message 
//         if (i % 3 !== 0 && i % 5 !== 0) {message = i}
//         if (i % 3 === 0 && i % 5 === 0) {message = "fizzbuzz"}
//         if (i % 3 === 0) { message = "fizz"}
//         if (i % 5 === 0) { message = "buzz"}
//         console.log(message)
//     }
// }

module.exports = fizzBuzz;