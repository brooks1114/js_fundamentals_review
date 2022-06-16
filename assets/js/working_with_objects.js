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