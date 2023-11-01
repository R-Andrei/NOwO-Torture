export default 'Session2';

// FIRST FUFUSESSION. DIFFICULT: EASY (lmao)

// 1. Write a function that takes an integer and returns true if it's even or false if it's uneven.
function parity(number) {
    return number % 2 === 0; // or !!(number % 2)
}
// Examples
parity(5); // -> false
parity(22); // -> true
parity(0); // -> true
parity(-69); // -> false



// 2. Write a function that prints the first n natural numbers.
function naturals(n) {
    for (let number = 1; number <= n; number++)
        console.log(number);
}
// Examples
naturals(3);
// 1
// 2
// 3

naturals(5);
// 1
// 2
// 3
// 4
// 5



// 3. Write a function that takes an integer as input and prints whether the integer is 'Positive', 'Negative', 'Cringe'(zero) or 'Based'(you decide).
function reputation(number) {
    if (number === 69)
        console.log('Based');
    else if (number === 0)
        console.log('Cringe');
    else if (number > 0)
        console.log('Positive');
    else
        console.log('Negative');
}
// Examples
reputation(-1);
// Negative

reputation(13);
// Positive

reputation(69);
// Based

reputation(0);
// Cringe



// 4. Write a function that finds and returns the smallest and largest number(s) in an array.
function yeet(numbers) {
    const yeetedNumbers = [numbers[0], numbers[0]];
    for (const number of numbers) {
        if (number < yeetedNumbers[0]) // min
            yeetedNumbers[0] = number;
        if (number > yeetedNumbers[1]) // max
            yeetedNumbers[1] = number;
    }
    return yeetedNumbers;
}

// Examples
const numbers1 = [1, 2, 7, 9, 14, 3];
yeet(numbers1); // -> [1, 14]

const numbers2 = [-41, 128, 7, 7, 5, 1337, -41];
yeet(numbers2); // -> [-41, 1337]

const numbers3 = [69];
yeet(numbers3); // -> [69, 69] 



// 5. Write a function that takes an array of strings and prints out everything inside of it in order while adding either 'Trick' or 'Treat' to the beginning of each string
// depending on whether the position of the item in the array is even or uneven. (let's say Treat for even and Trick for uneven)
function spooky(words) {

    if (!isNaN(words) && words === 69)
        console.log('Okay you win... Nice!');

    else if (!(words instanceof Array)) {
        console.log("'words' parameter must be an array");
    }

    else if (words instanceof Array && words.length === 0)
        console.log("Cmon, kid. Gimme SOMETHING to work with!");

    else
        for (const [index, word] of words.entries()) {

            if (typeof word !== 'string') {
                console.log('This is a strings only club.');
                break; // or return, to stop execution here
            }

            console.log(`${(index % 2 === 0) ? 'Treat' : 'Trick'} ${word}`);
        }
}
// Examples
const words1 = ['Herro', 'Warudo'];
spooky(words1);
// Treat Herro
// Trick Warudo

const words2 = ['me to a nice dinner uwu', 'my dad into marrying your mom so we can be related', 'deez nuts', 'im so funny'];
spooky(words2);
// Treat me to a nice dinner uwu
// Trick my dad into marrying your mom so we can be related
// Treat deez nuts
// Trick im so funny

// 5.evil. Spooky in-season bonus objective: Make sure that no matter what arguments are given to it, the spooky function doesn't throw any errors and doesn't return any unexpected results!
// Bonus bonus points for creativity.
// Examples
const lalaWords = ['Hello I am a lalafel and my age is my level.', { Age: 12, Hotel: 'Trivago' }];
spooky(lalaWords);
// All array elements must be strings!

const confusion = 'What is love';
spooky(confusion);
// 'words' parameter must be an array!

const lastOneIPromiseTM = 69;
spooky(lastOneIPromiseTM);
// I guess passing this as an argument is fine... Trick... or something.

const hmm = [];
spooky(hmm);



// (FINAL BOSS) 6. Create a function that takes in the following parameters: name, age, occupation, skills and returns a "Person" object containing those properties.
// (The 'skills' property has to be an array of strings)
    // 6.a. Using your function, create an array of 4 persons.
    // 6.b. Write a function that takes a group of people and returns the average numbers of skills they possess.
    // 6.c. Write a function that takes a group of people and returns the name of the person with the most skills.

// You get no tips for this one, I want to see how hot your brain can get uwu
// Your solution goes here - May you ever walk in the light of the Crystal
// 6
const makePeep = (name, age, occupation, skills) => ({
    name, age, occupation, skills
});

// 6.a
const peeps = [
    makePeep('Fufu', 29, 'Sex Warlord', ['Where', 'Do', 'I', 'Even', 'Start']),
    makePeep('Nowi', 19, 'Programming Expert', ['All', 'Of', 'The', 'Skills']),
    makePeep('Salt', 30, 'Nobody Knows', ['Literally none']),
    makePeep('Blizz dev #143', 37, 'Breastmilk Enjoyer', ['Drinking', 'Staring', 'Procrastinating'])
];

// 6.b
const assessAsInAssessmentNotAsInButts = (peeps) => {
    return peeps
        .map((peep) => peep.skills.length)                      // first map through the objects and only get the number of skills
        .reduce((previous, current) => previous + current, 0)   // then calculate the total number of skills for all peeps
        / peeps.length;                                         // finally divide that number by the total number of peeps to get the average
}

assessAsInAssessmentNotAsInButts(peeps);

// 6.c
const weGotABadassOverHere = (peeps) => {
    return peeps
        .map((peep) => ({ ...peep, skillsNumber: peep.skills.length }))     // map through peeps to calculate the number of skills for each
        .sort((first, second) => first.skillsNumber > second.skillsNumber)  // sort the peeps in descending order based on their total number of skills
        [0].name                                                            // and pick the name of the first peep in the list
}

const MVP = (peeps) => {
    return peeps
        .sort((first, second) => second.skills.length - first.skills.length)    // sort the peeps in descending order based on their total number of skills
        [0].name                                                                // and pick the name of the first peep in the list
}

console.log(weGotABadassOverHere(peeps));
console.log(MVP(peeps));