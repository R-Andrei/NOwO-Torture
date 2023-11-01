//export default 'Session2';

// FIRST FUFUSESSION. DIFFICULT: EASY (lmao)

// 1. Write a function that takes an integer and returns true if it's even or false if it's uneven.
function parity(number) {
    if (number%2 == 0) {
        //console.log("even")
        return true
    } else if (number%2 == 1 || number%2 == -1) {
        //console.log("odd")
        return false
    }
}
// Examples
parity(5); // -> false
parity(22); // -> true
parity(0); // -> true
parity(-69); // -> false



// 2. Write a function that prints the first n natural numbers.
function naturals(n) {
    for (let i = 0; i < n; i++) {
        console.log(i+1)
    }
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
    if (number == 0) {
        console.log("Cringe")
    } else if (number > 0 && number < 69) {
        console.log("Positive")
    } else if (number < 0) {
        console.log("Negative")
    } else if (number == 69) {
        console.log("Based")
    } else if (number > 69) {
        console.log("Positive")     //Just incase you were gonna be like "But 'reputation(70)' :Pepega:"
    }
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
/* Old solution before I found out about whatever the "..." operator is called
function yeet(numbers) {
    let big = numbers[0]
    let smol= numbers[0]
    for (num of numbers) {
        if (big < num) {
            big = num
        } else if (smol > num) {
            smol = num
        }
    }
    //console.log([smol, big])
    return [smol, big]
}*/
function yeet(numbers) {
    //console.log([Math.min(...numbers), Math.max(...numbers)])
    return [Math.min(...numbers), Math.max(...numbers)]
}

// Examples
const numbers1 = [1, 2, 7, 9, 14, 3];
yeet(numbers1); // -> [1, 14]

const numbers2 = [-41, 128, 7, 7, 5, 1337, -41];
yeet(numbers2); // -> [-41, 1337]

const numbers3 = [69];
yeet(numbers3); // -> [69, 69] 



// 5. Write a function that takes an array of strings and prints out everything inside of it in order while adding either 'Trick' or 'Treat' to the beginning of each string
// depending on whether the position of the item in the array is even or uneven. (Treat for even, Trick for uneven
function spooky(words) {
    if (Array.isArray(words) == true) {
        for (let word of words) {
            if (typeof word === "string") {
                if (parity(words.indexOf(word)) == true) {
                    console.log('Treat ' + words[words.indexOf(word)])
                } else if (parity(words.indexOf(word)) == false) {
                    console.log('Trick ' + words[words.indexOf(word)])
                }
                }
            }
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



// (FINAL BOSS) 6. Create a function that takes in the following parameters: name, age, occupation, skills and returns a "Person" object containing those properties.
// (The 'skills' property has to be an array of strings)
    // 6.a. Using your function, create an array of 4 persons.
    // 6.b. Write a function that takes a group of people and returns the average numbers of skills they possess.
    // 6.c. Write a function that takes a group of people and returns the name of the person with the most skills.

// You get no tips for this one, I want to see how hot your brain can get uwu
// Your solution goes here - May you ever walk in the light of the Crystal

person = (name, age, work, skills) => {
    const women = {                     //get it? Because women are objects EHEHEHEHEHEHEHHEHEHWHEHEHHEHHEHHEHERWHHEWHEWHJEHEHEHEHHEHEHEHEHEHHEHEHEHEHH
        name: name,
        age: age,
        occupation: work, 
        skills: skills,
    };
    return women
}

let squad = [
    person("Bill", 12, "Deceased", ["jumping", "flying", "penetrating"]), 
    person("Nick", 14, "Mechanic", ["felatio", "autofelatio"]),
    person("Joe", 69, "President", ["sleeping", "talking"]),
    person("Bob", 11, "NEET", ["eating"])
]
console.log(squad)
socialCreditScore = (squad) => {
    let counter = 0
    let sumOfSkills = 0
    for (person of squad) {
        sumOfSkills += squad[counter].skills.length
        counter++
    }
    //console.log(sumOfSkills/counter)
    return sumOfSkills/counter
}
socialCreditScore(squad) //2

MVP = (squad) => {
    let SkillArray = []
    let counter = 0
    for (person of squad) {
        SkillArray.push(squad[counter].skills.length)
        counter++
    } 
    console.log(squad[SkillArray.indexOf(Math.max(...SkillArray))].name)
    return squad[SkillArray.indexOf(Math.max(...SkillArray))].name
}
MVP(squad)