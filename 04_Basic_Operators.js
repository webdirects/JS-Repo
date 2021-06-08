'use strict'

// +, -, *, /, %, **

console.log(2+3);
console.log(3-2);
console.log(3*2);
console.log(5/2);
console.log(5%2);
console.log(2**2);

// string concatenation
let s = "my" + "string";
console.log(s);

let a = ('1' + 2);
console.log(a);

console.log(2 + 2 + '1');

// Unary Number Conversion
let x = 1;
console.log(+x); // no effect
console.log(+true); // affected
console.log(+"");

let apples = "2"
let oranges = "3";
let sum = apples + oranges; // string concatenation
console.log(typeof sum);

sum = +apples + +oranges;
console.log(typeof sum);