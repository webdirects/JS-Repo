
// declaration
let arr = new Array();
let ar = [];

let fruits = ["Apple", "Orange", "Plum"];

// accessing elements
console.log(fruits[0]);

//replacing element
fruits[2] = 'Pear'
console.log(fruits);

// adding new item
fruits[3] = 'Lemon'
console.log(fruits);

// length 
console.log(fruits.length);

// pop : Extracts the last element of the array and returns it
console.log(fruits.pop());

// push : Append the element to the end of the array
fruits.push("Mango")
console.log(fruits);

// shift : Extracts the first element of the array and returns it
console.log(fruits.shift());
console.log(fruits);

// unshift: Add the element to the beginning of the array
fruits.unshift('Apple')
console.log(fruits);

// loops
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

