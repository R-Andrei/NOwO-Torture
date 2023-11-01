// 1. Write a function that calculates the factorial of a given number.
function factorial(number) {
    if (number === 0) {
        return 1
    } else {
        for (let i = number - 1; i > 0; i--) {
            number *= i
        } return number
    }
}
// Examples
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(8)); // 40320


// 2. Write a function that checks whether a given number is prime.
function isPrime(number) {
    if (number < 2) {
        return false
    } else if (number == 2) {
        return true
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            } else {
                return true
            }
        }
    }
}
// Examples
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(420)); // -> false
console.log(isPrime(131)); // -> true



// 3. Write a function that counts the number of vowels in a given string.
function vowels(sentence) {
    let count = 0
    for (let i = 0; i < sentence.length; i++) {
        switch (sentence[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                count++
                break;
        }
    }
    return count
}
// Examples
console.log(vowels('fufu the barbarian')); // 7
console.log(vowels('nowi the viking')); // 5
console.log(vowels('uhh yoshi the well endowed or something')); // 12



// 4. Write a function that prints out numbers from 1 to n. 
// For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers that are multiples of both three and five, print "FizzBuzz".
function FizzBuzz(number) {
    let print
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            print = "FizzBuzz"
        } else if (i % 3 == 0) {
            print = "Fizz"
        } else if (i % 5 == 0) {
            print = "Buzz"
        } else {
            print = i
        }
        console.log(print)
    }
}
// Examples
FizzBuzz(5);
// 1
// 2
// Fizz
// 4
// Buzz
FizzBuzz(15);
// [1] 1
// [2] 2
// [3] Fizz
// ...
// [14] 14
// [15] FizzBuzz



// 5. Write a function that finds and returns the longest word in a sentence.
function long(sentence) {
    const proGamer = sentence.split(/\W/g)
    //proGamer.sort((longest, shortest) => {return shortest.length - longest.length})
    return proGamer
        .sort((first, second) => second.length - first.length) //Leaving this here so I can remmeber to ask questions about this
    [0]
}
// Examples
// EASY MODE
console.log(long('Fufu senpai is so smart')); // senpai
console.log(long('Color needs to remember to use const at least once in a while')); // remember

// HARD MODE (you don't HAVE to do this if u don't know how)
console.log(long('Fufu-senpai is so smoort.')); // senpai
console.log(long('Color needs to remember to use const... (at least once in a while)')); // remember



// 6 Write a function that capitalizes the first letter of each word in a sentence.
function capitalize(sentence) {             //This one works
    return sentence.split(/\s/g)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}
// Examples
console.log(capitalize('Maybe I shouldn\'t have went with so many string based problems.'));
// Maybe I Shouldn't Have Went With So Many String Based Problems.
console.log(capitalize('Now I need to come up with a lot of funny sentences.'));
// Now I Need To Come Up With A Lot Of Funny Sentences.
console.log(capitalize('I\'m a proogramer not a coomedian.'));
// I'm A Proogramer Not A Coomedian. :<<<<



// 7. Write a function that finds and returns the first missing number in an array of sequential integers.
function missing(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + 1 !== numbers[i + 1]) {
            return numbers[i] + 1
        }
    } return -1
}
// Examples
console.log(missing([4, 5, 7])); // 6
console.log(missing([1, 2, 3, 4])); // -1
console.log(missing([2, 3, 5, 6, 8])); // 4



// 8. Write a function that removes duplicate elements from an array.

//I know this isn't what you actually wanted but I thought it was funny
/*function nyoDupwicates(elements) {  
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
*/
/* I also learned that using a set is the simplest way of doing this

function nyoDupwicates(elements) {
    return [...new Set(elements)];
  }*/

function nyoDupwicates(elements) {
    return elements.filter((value, index, self) => self.indexOf(value) === index)
}



// Examples
console.log(nyoDupwicates([1, 2, 2, 3, 69, 1, 'I had to use it at least once.']));
// [1, 2, 3, 69, 'I had to use it at least once.']
console.log(nyoDupwicates(['fufu', 'fufu', 'fufu', 'sexes', 'nowi', 'nowi', 'fufu', 'nowi']));
// ['fufu', 'sexes', 'nowi']


const nowi = {
    status: 'scared',
    torture: () => { console.log('Today we shall learn how to deliver maximum emotional damage.'); }
}
nowi.torture();