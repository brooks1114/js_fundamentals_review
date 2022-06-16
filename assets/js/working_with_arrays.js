// https://www.w3schools.com/jsref/jsref_obj_array.asp


// What are two ways you can create an array in JavaScript?
let createArrayOne = [1, 2, 3];
let createArrayTwo = Array.of(1, 2, 3);

// How can we we tell if a variable is holding an array?
console.log(Array.isArray(createArrayOne));
console.log(Array.isArray(createArrayTwo));

// What data type is returned from an array with the typeof?   
// A: arrays are an object
console.log(typeof (createArrayTwo));


// What is an index in the context of an array?
// A: index is the position the data is in in the array [1, 2, 3] index[0] = 1



// Given the following array, const carMakes = ["Honda", "Toyota", "Mazda"]

// On a separate line use a built-in array method to add "Mercedes" to the end of the array [PUSH]
// On a separate line use a built-in array method to add "BMW" to the beginning of the array [UNSHIFT]
// Print "Toyota" to the console accessing it by it's index

const carMakes = ["Honda", "Toyota", "Mazda"];
console.log(carMakes);
carMakes.push("Mercedes");
console.log(carMakes);
carMakes.unshift("BMW");
console.log(carMakes);
console.log(carMakes[2]);



// Using a built-in array method, create a new array from the first 3 values in the carMakes array and store it in a new variable.
//  Your new array should contain the values ["BMW", "Honda", "Toyota"]

let newCarArray = [];
for (x = 0; x < 3; x++) {
    newCarArray[x] = carMakes.shift();
}

console.log("newCarArray contains: " + newCarArray);



// Using built-in Array Methods and working with this array: const ericInfo = ["Eric", "Senior Instructor", "Florida"];
const ericInfo = ["Eric", "Senior Instructor", "Florida"];
console.log("ericInfo contains: " + ericInfo);
// Remove "Eric" from the ericInfo array
ericInfo.shift();
console.log("ericInfo contains: " + ericInfo);
// Update "Florida" to "South Carolina"
let index = ericInfo.indexOf("Florida");
ericInfo[index] = "South Carolina";
console.log("ericInfo contains: " + ericInfo);
// Add "Schwartz" to the end of the array
ericInfo.push("Schwartz");
console.log("ericInfo contains: " + ericInfo);
// The final array should look like this: ["Senior Instructor", "South Carolina", "Schwartz"]
// Please feel free to look up array methods that you can use to accomplish the transformation above.



// Print "apple" from each of the arrays below to the console

const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
    ["strawberry", "grape"],
    ["rambutan", "durian"],
    ["orange", "apple"]
];
const fruits3 = [
    ["strawberry", ["pineapple"]],
    ["grape", ["pear", ["apple"], "kiwi"]]
];


console.log("Print apples from fruits1 #1: " + fruits1.filter(function (item) {
    return item == "apple";
}));

fruits1.forEach(function (item) {
    if (item == "apple") {
        console.log("Print apples from fruits1 #2: " + item);
    };
});

console.log("Print apples from fruits2 #1: " + fruits2[2][1]);
// TODO how do I loop through nested arrays, when i dont know the demensions of the array object?


console.log("Print apples from fruits3 #1: " + fruits3[1][1][1]);


// Loop through the following array with a for() or while() loop printing each name to the console.
let i = 0;
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
do{
    
    console.log(studentsArray[i]);
    i=i+1;
    } while (i<studentsArray.length)



    // Loop through the following array with the forEach() Array method printing each name and the names index to the console.

    const studentsArray2 = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
    studentsArray2Index = 0;
    studentsArray2.forEach(printIndexAndName);
    function printIndexAndName(name){
        console.log(studentsArray2Index + ": " + name);
        studentsArray2Index = studentsArray2Index + 1 ;

    }


    // Using the the map Array method square every number in the following array and save the results to a new array called numbersSquaredArray.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersSquaredArray = [];

for (x = 0; x < numbersArray.length; x++){
    numbersSquaredArray.push(squareNumber(numbersArray[x]))
}

function squareNumber(numToSquare){
    return numToSquare * numToSquare
}

console.log("numbersSquaredArray = " + numbersSquaredArray);


// Using a looping method of your choice, loop over and sum all the values the new numbersSqauredArray storing the sum in a variable named arraySum. Print arraySum to the console.

var arraySum = 0;
for (x = 0; x < numbersSquaredArray.length; x++){
    // console.log("Sum of arraySum " + arraySum + " numbersSquaredArray " + numbersSquaredArray[x]);
    arraySum = arraySum + numbersSquaredArray[x];

}

console.log("The sum of numbersSquaredArray = " + arraySum);


// Given the following array, use a built-in array method to check if the array contains "Luke Skywalker" and if it does, print its index to the console.
const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];
const findValue = "Luke Skywalker";

console.log("The Index of Luke Skywalker in the array is: " + starWarsCharactersArray.indexOf(findValue));

