'use strict'

// string conversion

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// Number Conversion
let str = '1243';
console.log(typeof str); 

let num = Number(str);
console.log(typeof num);

// Boolean Conversion
console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Hello"));
console.log(Boolean(""));