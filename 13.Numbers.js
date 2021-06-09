
// for big numbers
let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes
console.log(billion);
console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

// for small numbers
let ms = 1e-6; // six zeroes to the left from 1
console.log(ms);

// Number to string conversion
let num = 255
console.log(num.toString());

console.log(123456..toString()); // Two dots to call a method

// Math.floor
console.log(Math.floor(3.1)); // Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

// Math.ceil
console.log(Math.ceil(3.1)) // Rounds up: 3.1 becomes 4

// Math.round
console.log(Math.round(3.6)); // Rounds to the nearest integer

// toFixed(n)
num = 12.34;
console.log(num.toFixed(1)); // rounds the number to n digits after the point

// isNaN
console.log(isNaN(NaN));
console.log(isNaN("str"));

// ifFinite
console.log(isFinite("15"));
console.log(isFinite("str"));

// parseInt and parseFloat
// They “read” a number from a string until they can’t. 
console.log(parseInt('100px'));
console.log(parseFloat('12.5em'));

// Math.random()
console.log(Math.random());

// Minimum and Maximum
console.log(Math.max(3,5,6));
console.log(Math.min(3,7,2));

// Math.pow(n, power)
console.log(Math.pow(2, 10));