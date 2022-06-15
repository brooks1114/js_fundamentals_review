
// Write a for loop that counts from 0 to 100, printing each number to the console.

//     for(let x = 0; x <= 100; x++) {
//     console.log(x);
// }

// Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console.

//     for(let x = 0; x <= 100; x += 2) {
//     console.log(x);
// }


// Write a for loop that counts down from 100 to 0, printing each number to the console.


//     for(let x = 100; x >= 0; x--) {
//     console.log(x);
// }

// Write a for loop that counts from 0 to 50 but only prints the odd numbers that are multiples of 5 to the console.
//     for(let x = 0; x <= 50; x++) {
//     if (x % 5 == 0 && x % 2 !== 0) {
//         console.log(x);
//     }
// }


// Keeping track of a total with a loop.

// Create a variable called total and assign it a value of 0(make sure total is defined outside of your loop).
// Create a loop that counts from 1 to 10, incrementing by 1.
// On each iteration of the loop, add 3 to the total variable in step 1.
// After your loop, print the value of total to the console.

// let total = 0;

// for (x = 1; x <= 10; x++) {
//     total = total + 3;
// }
// console.log(total);



// Refactor the last questions loop to use the while () loop syntax

// let total = 0;
// let x = 1;

// while (x <= 10) {
//     total = total + 3;
//     x++;
// }
// console.log(total);


// What do the continue and break statements do in JavaScript in the context of a loop ?

// break - The break statement allows us to control exiting a loop if a given condition is triggered
// continue - allows us to control skipping an iteration in a loop without causing the code to break out of the loop, and re - enter the loop for more iterations. 

// Example of continue: will print 0 through 10 except 3, when 3 is triggered it does not excape the loop
// for (let x = 0; x <= 10; x++) {
//     if (x === 3) { continue; }
//     console.log("The number is " + x);
// }



// Fizz Buzz Interview Question

// Write a loop that prints all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.


// for (x = 0; x <= 100; x++) {
//     (x % 15 == 0) ? console.log("FizzBuzz") :
//     (x % 3 == 0) ? console.log("Fizz") :
//     (x % 5 == 0) ? console.log("Buzz") :
//     console.log(x);

// }


// What is the difference between the do...while() and the while() or for() loop?

// the do while loop, this type of loop gurantees that the loop will be entered at least 1 time minimum. 
// Whereas the other 2 loop types could never be entered depending on the conditional