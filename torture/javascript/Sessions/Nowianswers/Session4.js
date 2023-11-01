// 1. Write a function that reverses a given array.
const leFunnyArr = ['course!', 'of', 'stepladder', 'a', 'grab', 'To', 'road?', 'the', 'cross', 'lalafell', 'the', 'did', 'Why']

function reverse(things) {
    return things
        .reverse()
}
//console.log(reverse(leFunnyArr))
console.log(reverse(leFunnyArr).join(" "))              // Makes the joke readable by .joining it


// 2. Write a function that finds and returns the second largest number in an array.
const olympicMedals = [4, 5, 6, 6, 5]

function silverMedal(participants) {
    return participants 
        .sort((a, b) => {return b - a})                 // Creates a copy of the array and sorts it from high to low
        [participants.lastIndexOf(participants[0]) + 1] // Finds the last index of the highest number and adds +1 to that index so it finds the 2nd highest distinct number
}                                                       // This took me like 15 minutes to do until I realized it changes the original array and then I spent like 30 minutes on simpleself created problems umu
console.log(silverMedal(olympicMedals))


// 3. Write a function that removes all falsy values from an array.
function truthy(things) {
    return things
        .filter((value) => value != false)              // TIL: "!==" is more like "===" as opposed to "==" like my brain originally thought. Took me 10-15 min as I thought I was somehow using .filter wrong
}       
// Examples
console.log(truthy([0, 1, 2]));
// [1, 2]
console.log(truthy([-1, 0, false, 1, 'a', '']));
// [-1, 1, 'a']


// 4. Write a function that counts the number of occurrences of a specific element in an array.
function aCounting(things, target) {
    return things
        .filter((value) => value == target)
        .length
}
// Examples
console.log(aCounting([1, 2, 3, 4], 1)); // 1
console.log(aCounting([1, 2, 3, 4], 5)); // 0
console.log(aCounting([1, 2, 3, 2, 1], 2)); // 2


// 5. Write a function that converts a string to spinal case (all-lowercase-words-joined-by-dashes).
const HozenInMoPBeLike = "Oook her in the dooker"
function spinal(words) {
    return words
        .replaceAll(" ", "-")
        .toLowerCase()
}
console.log(spinal(HozenInMoPBeLike))


// 6. Write a function that sorts an array of numbers in ascending order without using any built-in functions or methods. 
function sort(numbers) {
    //const originalLength = numbers.length             // See comment below⌄
    const newArray = [] 
    while (numbers.length > 0) {                        // ChatGPT's idea. Looks cleaner than mine, which is the line below. Also removes the need for "originalLength" variable
    //for (let i = 0; i < originalLength; i++) {  
        let smollest = Infinity      
        for (let ni = 0; ni < numbers.length; ni++) {
            if (numbers[ni] < smollest) {
                smollest = numbers[ni]
            }
        }
        newArray.push(smollest)
        numbers.splice(numbers.indexOf(smollest), 1)
    } 
    return newArray
}

console.log(sort([9, 8, 5, 7, 6, 2])) // [2, 5, 6, 7, 8, 9]


// 7. Write a function that finds all pairs of 2 numbers in an array where their sum is equal to a specified target.
function nyoDupwicates(elements) {  
    elements.sort()    
    for (let i = 0; i < elements.length;) {
        if (elements[i] === elements[i+1]) {
            elements.splice(i, 1)
        } else {
            i++
        }
    }
    return elements
}

function politicallyCorrectCouples(num, target) {
    const matchFound = []
    const numbers = num.slice()
    nyoDupwicates(numbers)
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                matchFound.push([numbers[i], numbers[j]])
                delete numbers[i]
                delete numbers[j]
                }
            }
        }
    return matchFound;
}
// Examples
console.log(politicallyCorrectCouples([1, 2, 3, 4, 5], 5).flat());
// Output: [[1, 4], [2, 3]]
console.log(politicallyCorrectCouples([7, 5, 2, 3, 6, 1, 3, 1, 2, 4, 1, 5], 8).flat());
// Output: [[7, 1], [2, 6], [3, 5]]



// 8. but not actually
function isPrime(number) {
    if (number < 2) {
        return false
    } else if (number == 2) {
        return true
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    } return true
}

// 8. Write a function that sums all prime numbers up to a given number.
function sumsPrime(number) {
    let sumOfPrimes = 0
    for (let i = 2; i <= number; i++) {
        if (isPrime(i) == true) {
            sumOfPrimes += i
        }
    }
    return sumOfPrimes
} 
console.log(sumsPrime(6)) // 2 + 3 + 5 = 10


// 9. Write a function that reverses a given integer.
function reverseNumber(number) {
    const copyCat = number.toString()                   // Makes it into a string so .length works
    let noMathNeeded = ""                               // Placeholder for final product
    let wi = 0                                          // While index (for the while loop)
    for (let i = copyCat.length-1; i >= 0; i--) {       // Loop that reverses the numbered string
        noMathNeeded += copyCat.charAt(i)               
    } while (noMathNeeded.charAt[wi] == 0) {            // While loop that checks if it start with a 0 and increases the starting index if it does
            wi++
    } return noMathNeeded
            .slice(wi)*1                                // Slices off the extra 0's and turns it back into a number again
}
// you may want to look up the actual math of how this can be done.             // https://youtu.be/ahCgADqInX8?feature=shared
// this is in theory a very easy problem but might be confusing cuz it's almost entirely math

// Examples
console.log(reverseNumber(42)); // 24
console.log(reverseNumber(105)); // 501
console.log(reverseNumber(60)); // 6
console.log(typeof(reverseNumber(701000))) // number       But also 107 if you removed the typeof thingy


// 10. Write a function that flattens a nested array.
function flatten(things) {
    return things
        .flat(Infinity)
}

// Examples
console.log(flatten([1, 2, [3, 5, 1], [2, 4]]));
// [1, 2, 3, 5, 1, 2, 4]
console.log(flatten(['a', 'b', 'c', 'd']));
// ['a', 'b', 'c', 'd']
console.log(flatten([1, 2, ['a', 'b'], [3, ['c', 'd']], 4, [5, 'e']]));
// [1, 2, 'a', 'b', 3, 'c', 'd', 4, 5, 'e']