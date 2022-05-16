
// All the cheat sheet for all Math functions and formulae.
let m = Math;
console.log(m);
//Printing some of these functions manually.
// Printing the constants from Math Object
console.log("The value of Math.E is ", Math.E); // for value of e
console.log("The value of Math.PI is ", Math.PI); // for value of pi
console.log("The value of Math.LN2 is ", Math.LN2); // for value of log
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2); // for value of square root of 1/2.
console.log("The value of Math.LOG2E is ", Math.LOG2E); // for the value of log 2 to the base e.;

// Let's display the values of two variables a and b
let a = 2323.2323;
let b = 4563.99999;
console.log("The value of the a is : ", a);
console.log("The value of the b is : ", b);
// Let's display the round value of these two variables.
console.log("The round values of a is : ", Math.round(a));
console.log("The round values of b is : ", Math.round(b));

// Using the ciel and floor function to round the number to its nearest integer.
console.log(
  "Here the number 16.7 would be round off to 17 by using the ciel function",
  Math.ceil(16.7)
);
console.log(
  "Here the number 16.7 would now be rounded off to 16 by using floor function",
  Math.floor(16.7)
);
// Let's display the values of the trigo. functions.
// Trinonometric Functions
console.log("The value of sin(pi/2) is ", Math.sin(Math.PI / 2));
console.log("The value of tan(pi/2) is ", Math.tan(Math.PI / 2));
console.log("The value of cos(pi/2) is ", Math.cos(Math.PI / 2));
//Let's use the min and max functions in JS.
console.log(
  "The maximum of 102,121,1212 is : ",
  Math.max(102, 121, 1212)
);
console.log("The minimum of 23,2 ,323 is", Math.min(23, 2, 323));
// Let's display a random number and it will keep on refreshing again and again
let aNum = 3223;
console.log("The random number is :", Math.random(aNum));
