// Create 2 variables, x and y, and assign them a number value.
let x = 9;
let y = 4;

// Using an if statement, print "Hello World" to the console if x is greater than y;

if (x>y){
    console.log("Hello World");
}

// Update the if statement to print "Goodbye World" to the console if x is not greater than y without modifying the existing condition.

if (x>y){
    console.log("Hello World");
}else {
    console.log("Goodbye World");
}

// What are some examples of falsy values in JavaScript?
// boolean false
// the number 0 (not string "0")
// empty strings ""
// null
// undefined
// NaN - not a number


// What will the following code output to the console and why? Answer is the console will print out consdition 5 is true
// let number1 = 8;
// let number2 = "9";

// if("0" === 0){
//     console.log("condition 1 is true")
// }else if(number1 > number2){
//     console.log("condition 2 is true")
// }else if(typeof number2 === "number"){
//     console.log("condition 3 is true")
// }else if(typeof number2 !== "number" && number1 > number2){
//     console.log("condition 4 is true")
// }else if("0" == 0){
//     console.log("condition 5 is true")
// }else{
//     console.log("no condition was true")
// }

// === v ==
// when using == javascript will attempt to convert the type of the variable and check for equality.

// So this expression is false because the type mismatch
// if("0" === 0){
//     console.log("condition 1 is true")

// False because 1 is a string and one is a number
// }else if(number1 > number2){
//     console.log("condition 2 is true")


// False because "9" is not equal "number"
// }else if(typeof number2 === "number"){
//     console.log("condition 3 is true")

// False. simplified [typeof number2 !== "number"] is true, but the && number1 > number2 is False, so expression is false
// }else if(typeof number2 !== "number" && number1 > number2){
//     console.log("condition 4 is true")

//  this is true because the string is converted to a number and evaluates true and javascript will not evaluate the remaining else blocks
// }else if("0" == 0){
//     console.log("condition 5 is true")

// not evaluated by js
// }else{
//     console.log("no condition was true")

// What is the difference between the == and === operator? What is the best practice to use and why?
// when checking for equality use ===, to avoid js from interpreting the code/variables



// Refactor the if statement below to use a ternary operator:


// let addButter = true;
// let popcorn = "The popcorn is ready!";

// if(addButter) {
//     popcorn = "The popcorn is delicious!";
// } else {
//     popcorn =  "The popcorn is good but could use some butter :("
// }

// console.log( popcorn )

let addButter = true;
let popcorn = "The popcorn is ready!";

(addButter) ? popcorn = "The popcorn is delicious!" :  popcorn =  "The popcorn is good but could use some butter :(";

console.log( popcorn )



// What will the code below output and why?  the console will log "I did not get tickets" because soldOut = true, the not "!" evaluates the variable as "Not True"but because 
// soldOut is set to true then it evaluates as false, with the combination of the && the whole expression is false and so the Ternary operator is going to spit out the false value.
// which is the string after the :

// let soldOut = true;
// let onSale = true

// let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

// console.log(message);



// Refactor the code from the previous question to use an if statement to instead of ternary to set the message variable.

let soldOut = true;
let onSale = true;
let message = "";

if(!soldOut && onSale){
    message = "I got tickets!";

}else {
    message = "I did not get tickets";
}

console.log(message);