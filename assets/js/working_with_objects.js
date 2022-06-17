// Create an object that represents a person

// the object should have a name, an age, and a favorite color.
// using console.log() outside of the object, access the properties of the object to print: "Hello, My name is name. I am age years old and my favorite color is favoriteColor". 
// Replacing the italic words with the correct property from the object.


let person = {
    name: "John",
    age: "40",
    favoriteColor: "Red"

}

console.log(`Hello, My name is ${person.name}. I am ${person.age} years old and my favorite color is ${person.favoriteColor}`)


// Add a method called sayHello to the person object created above that returns the same message that the previous console.log() printed to the console. 
// Be sure to use the properties within the object to replace the italicized words. Below the object, call the new method within a console.log() statement.


let person2 = {
    name: "Bob",
    age: "30",
    favoriteColor: "Green",

    sayHello: function () {
        console.log(`Hello, My name is ${this.name}. I am ${this.age} years old and my favorite color is ${this.favoriteColor}`)

    }
}

person2.sayHello();


// Given the object below that represents a student, add a method averageGrade that returns the average grade for the student by averaging the students grades array.
//  Make sure you test the method by printing the average grade to the console.

let sumAnArray = function (array) {

    return array.reduce((partialSum, a) => partialSum + a, 0);

}

let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],

    averageGrade: function () {
        return sumAnArray(this.grades) / this.grades.length;
    },

    printDetails: function () {

        return (`Hello, My name is ${this.name} and I am a student. I am ${this.age} years old and my major is ${this.major}. My current average grade is ${this.averageGrade()}.`);
    }

}
console.log("The students average was : " + studentBob.averageGrade());
console.log(studentBob.printDetails());

// Add a new method to the studentBob object called printDetails that 
// prints: "Hello, My name is name and I am a student. I am age years old and my major is major. My current average grade is averageGrade.
// made edits above 


// Loop through the following array of objects and print out the name property of each object to the console.
//  As a bonus, see if you can find a string method that would make the names appear with all uppercase letters when printed.

const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

charactersArray.forEach(o => console.log(o.name.toUpperCase()));


// Using the Array.filter() method on charactersArray, create a new array called filteredCharactersArray that only contains characters where the mass is greater than 80.

function massGreaterThanEighty(array){
    return array.mass>80;
}

const filteredCharactersArray = charactersArray.filter(massGreaterThanEighty);
console.log(filteredCharactersArray);


// Using the Array.map() method on charactersArray, create a new array called characterNames that only contains names of each character as a string.

// Not needed, but if the name were in seperate indexes, there is a join function with a concat built in:
// function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");

function getCharacterName(array){
    return array.name;
}

const characterNames = charactersArray.map(getCharacterName);
console.log(characterNames);


// Using the Array.some() method on charactersArray. Check to see if a character has blue eyes. 
// If they do, print "Some characters have blue eyes" otherwise print "No characters have blue eyes" to the console.

let someoneHasBlueEyesMessage = "Some characters have blue eyes";
let someoneDoesNotHaveBlueEyesMessage = "No characters have blue eyes";

if (charactersArray.some(e => e.eye_color === 'blue')) {
    console.log(someoneHasBlueEyesMessage);
  }else{
    console.log(someoneDoesNotHaveBlueEyesMessage);
  }


//   Using the Array.every() method on charactersArray. Check to see if all characters are male. 
//   If they every character is male, print "All the characters are male" to the console.

let allGendersAremale = "All the characters are male"
let notAllGendersAremale = "Not All the characters are male"

if (charactersArray.every(e => e.gender === 'male')) {
    console.log(allGendersAremale);
  }else{
    console.log(notAllGendersAremale);
  }




//   Using a loop or Array.reduce() calculate the total mass of all the characters. Print the total mass to the console.
//  Create a reuseable function with these 2 lines below
function sumMass(acc, obj) { return acc + parseInt(obj.mass);}
var result = charactersArray.reduce(sumMass, 0);

// or create an inline function as this 1 line below
// var result = charactersArray.reduce(function (acc, obj) { return acc + parseInt(obj.mass); }, 0);


console.log(result);  // should be 346

let sumObjProperty = (acc, obj, property) => {
    return acc + parseInt(obj[property])
}
let result2 = charactersArray.reduce((acc, obj) => sumObjProperty(acc, obj, "mass"), 0);
console.log(result2); 

// Create a function called tagFavorite that takes an array as one parameter and a string that represents your favorite character's name as another parameter. 
// This function does not need to return anything.

// Create a loop inside the function that loops over the array passed in.
// Add a property to each object in the array called favoriteCharacter and default it to false
// If the character name matches the character name passed in, set the favoriteCharacter property to true for that character's object
// Test your function by passing in the charactersArray and your favorite character's name when running the function. 
// Print the charactersArray after you run the function to ensure the objects updated properly.

let myFavoriteCharacter = 'Darth Vader';

function addPropertyIfMissingFavoriteCharacter(array){

    array.forEach(obj => {
        if(obj.favoriteCharacter == undefined){
        obj['favoriteCharacter'] = "false";
        }
    });
}

function setFavoriteCharacter(array, favCharacter){
    array.forEach(obj => {
        if(obj.name === favCharacter){
        obj.favoriteCharacter = "true";
        }
    });
}

addPropertyIfMissingFavoriteCharacter(charactersArray);
setFavoriteCharacter(charactersArray, myFavoriteCharacter);
// addPropertyIfMissingFavoriteCharacter threw this in here to test that the property is not overridden, because it already exists from the Fn call above. it works as expected.
addPropertyIfMissingFavoriteCharacter(charactersArray);
console.log(charactersArray); 


