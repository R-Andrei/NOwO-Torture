export default 'Session 4';

// 1. Write a function that reverses a given array.
function reverse(things) {
    // blaccu mahou
}

// 2. Write a function that finds and returns the second largest number in an array.
function silverMedal(participants) {
    // nowi_frown.jpg or at least i'm half expecting this one to give you more trouble than it should
}

// 3. Write a function that removes all falsy values from an array.
function truthy(things) {
    // tip: the point is to let the language decide what is falsy ¯\_(ツ)_/¯
}
// Examples
console.log(truthy([0, 1, 2]));
// [1, 2]
console.log(truthy([-1, 0, false, 1, 'a', '']));
// [-1, 1, 'a']

// 4. Write a function that counts the number of occurrences of a specific element in an array.
function aCounting(things, target) {
    // "a counting" get it? haha
}
// Examples
console.log(aCounting([1, 2, 3, 4], 1)); // 1
console.log(aCounting([1, 2, 3, 4], 5)); // 0
console.log(aCounting([1, 2, 3, 2, 1], 2)); // 2


// 5. Write a function that converts a string to spinal case (all-lowercase-words-joined-by-dashes).
function spinal(words) {
    // 
}

// 6. Write a function that sorts an array of numbers in ascending order without using any built-in functions or methods. 
function sort(numbers) {
    // this should be easy, right? right???
    // maybe read a bit about sorting algorithms
    // don't even think about doing the most efficient one(s), u will stop programming
}


// 7. Write a function that finds all pairs of 2 numbers in an array where their sum is equal to a specified target.
function politicallyCorrectCouples(numbers, target) {
    // the previous problem might or might not hold part of the solution to this one
    // it's fine to display the elements in the order they appear in, no need to sort or anything
}
// Examples
politicallyCorrectCouples([1, 2, 3, 4, 5], 5);
// [[1, 4], [2, 3]]
politicallyCorrectCouples([7, 5, 2, 3, 6, 1, 3, 1, 2, 4, 1, 5], 8);
// [[7, 1], [2, 6], [3, 5]]


// 8. Write a function that sums all prime numbers up to a given number.
function sumsPrime(number) {
    // it's not programming without any ptsd
}

// 9. Write a function that reverses a given integer.
function reverseNumber(number) {
    // you may want to look up the actual math of how this can be done
    // this is in theory a very easy problem but might be confusing cuz it's almost entirely math
}
// Examples
console.log(reverseNumber(42)); // 24
console.log(reverseNumber(105)); // 501
console.log(reverseNumber(60)); // 6

// 10. Write a function that flattens a nested array.
function flatten(things) {
    // good luck lmao
}

// Examples
console.log(flatten([1, 2, [3, 5, 1], [2, 4]]));
// [1, 2, 3, 5, 1, 2, 4]
console.log(flatten(['a', 'b', 'c', 'd']));
// ['a', 'b', 'c', 'd']
console.log(flatten([1, 2, ['a', 'b'], [3, ['c', 'd']], 4, [5, 'e']]));
// [1, 2, 'a', 'b', 3, 'c', 'd', 4, 5, 'e']