// Create a function named greeting that prints the "Hello World" to the console.

function greeting() {
    console.log("Hello World");

}
greeting();


// Create a function named countingCharacters that takes a string as a parameter.

// If the length of the string is less than 10, print the strings length to the console
// If the string length is more than 10, print a message that the string is too long and include the string in the message.

// using function declaration

function countingCharacters(string) {
    if (string.length > 10) {
        console.log("the string is too long :" + string);
    }
}

countingCharacters("Too short");
countingCharacters("This will be more than the ten char");


// using function expression - A name is not required, but best practice is to give it a name [let functionExpression = function uniqueNameHere(string)]
// however, uniqueNameHere can not be called in the code, it is for logging only

let functionExpression = function (string) {
    if (string.length > 10) {
        console.log("the string is too long :" + string);
    }
}

functionExpression("Too short");
functionExpression("This will be more than the ten char");



// Create a function named difference that accepts two numbers as parameters.

// If either of the parameters provided is not a number, the function should return the following error: "Input(s) must be a number!".
// It should return the difference if both parameters are numbers.
// Call the function within a console.log() statement to print the information returned from the function. This is different than having the function print to the console directly.
/*
    Examples: 
    difference("hello", 3) // "Input(s) must be a number!"
    difference(3, 5) // 2
    difference(5, 1) // 4
 */

let difference = function (num1, num2) {
    let errorCheckMesage = "Input(s) must be a number!";
    if (isNaN(num1) || isNaN(num2)) {
        return errorCheckMesage;
    }
    return Math.abs(num1 - num2);

}

console.log(difference(9, 4));
console.log(difference(4, 9));
console.log(difference("w", 4));
console.log(difference(9, "map"));



// Using the function expression syntax, create a new function named advancedGreeting.

// It should accept hour as a parameter
// If the hour is less than 12, return a "Good morning" greeting
// If the hour is between 12 and 18, return a "Good afternoon" greeting
// If the hour is between 18 and 24, return a "Good night" greeting
// All other values should return "Invalid hour input".
// Can we access variables created inside the scope of a function outside of that function? Can a function access variables created in a parent scope?

message = "default message in advancedGreeting";

let advancedGreeting = function (hour) {


    (hour >= 1 && hour < 12) ? message = "Good morning" :
        (hour >= 12 && hour < 18) ? message = "Good afternoon" :
            (hour >= 18 && hour <= 24) ? message = "Good night" :
                message = "Invalid hour input"


    return message;

}

for(i=0;i<26;i++){
console.log(`The hour is ${i} so ${advancedGreeting(i)}`);
}



// Can we access variables created inside the scope of a function outside of that function? 
// A: No variables declared in a function are scoped to the function only, they are not global and so can not be accessed outside the function.
// Can a function access variables created in a parent scope?
// Yes. Functions have access to global variables


