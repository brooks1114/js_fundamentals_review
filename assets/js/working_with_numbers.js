// Create a variable using the let keyword and assign a number to it.
let number = 5;
console.log(" step 1 = " + number);
// On a new line, add 15 to your variable
number = number + 15;
console.log(" step 2 = " + number);
// On a new line, subtract 8 from your variable without using the variable when calculating the new value
number -= 8;
console.log(" step 3 = " + number);
// Calculate the average of 26, 44, 72, 86, 112. Assign the calculated average to a new variable.
let average = (26 + 44 + 72 + 86 + 112)/5;
console.log(" step 4 = " + average);
// Modify the following code so it outputs 15 without adding any new lines of code.
// let theNumber = 14;
// console.log(theNumber++)
let theNumber = 14;
console.log(++theNumber);
console.log(" step 5 = " + theNumber);
// What operator can you use to find out if a variable contains a number?
let isNumber = 10;
let notNumber = "a";
console.log(typeof isNumber);
console.log(typeof notNumber);