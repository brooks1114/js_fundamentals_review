// Create 5 variables. All variables should be assigned a string value.
// Assign 1 variable a verb
// Assign 1 variable a noun
// Assign 1 variable an adjective
// Assign 1 variable a color
// Assign 1 variable a name
let verb = "run";
let noun = "dog";
let adjective = "fast";
let color = "red";
let theName = "Erik";


// Create a variable called madlib and assign it a string value.

// Use all the variables created in step one to construct a Madlib.
// Use the + operator for concatenation when building your Madlib.
// Use the appropriate escape characters to make sure each sentence in the Madlib appears on a new line.
// Print the Madlib to the console

let madlib = "";
madlib = ("There is a " + noun + " named " + theName + ".\n"
    + "He is " + color + ".\n"
    + "He can " + verb + " real real " + adjective + ".");
console.log(" madlib step 1 = \n" + madlib);

// Create a variable called madlibLiteral. Refactor your Madlib using template literals and interpolation. Print the new variable to the console.
let madlibLiteral = "";
madlibLiteral = (`There is a ${noun} named ${theName} \nHe is ${color}. \nHe can ${verb} real real ${adjective}.`);
console.log(" madlibLiteral step 2 = \n" + madlibLiteral);

// Why would we want to convert a string to a number in JavaScript and what is one way to accomplish this?
// A: If you were intending on performing any math functions on a variable you would want to be sure that the variables are numbers, not strings, before performing any operations.
var numberAsString = "10";
var makeSureIsNumber = parseInt(numberAsString);
console.log("numberAsString is of type: " + typeof numberAsString);
console.log("makeSureIsNumber is of type: " + typeof makeSureIsNumber);
