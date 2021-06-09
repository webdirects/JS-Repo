'use strict'

// single quote initialisation
let single = 'single-quoted'

// String Manipulation
function sum(a,b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`);

// new line characters
let guestList = "Guests:\n * John\n * Pete\n * Mary"
console.log(guestList);

// unicode
console.log('\u{1F60D}');

// string length
let name = 'Manas'
console.log(name.length);

// accessing characters
// 1st: using brackets [] 
let str = 'hello';
console.log(str[0]);

// 2nd: using charAt(i)
console.log(str.charAt(1));

// accessing last character
console.log(str[str.length - 1]);

// interating over string
for (let char of "hello") {
    console.log(char);
}

// uppercase and lowecase
console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());

// single character lowercased or uppercased
console.log('Interface'[0].toLowerCase());

// Searching for a substring
str = 'Widget with id';
console.log(str.indexOf('Widget'));
console.log(str.indexOf('id'));

// includes
console.log('Widget with id'.includes('Widget'));

// str.startsWith , str.endsWith
console.log("Widget".startsWith("Wid"));
console.log("Widget".endsWith("get"));

// str.slice
str = 'stringify';
console.log(str.slice(0, 5));

// if no second arg, then slice will go to end
console.log(str.slice(2));

// slicing backwards
console.log(str.slice(-1));

// str.substr(start [, length])
console.log(str.substr(2,4));
console.log(str.substr(-4, 2));