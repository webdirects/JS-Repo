'use strict'

let year = prompt("IN which year ECMAScript-2015 specification published ?");

if (year < 2015) 
{
    alert("Too early...")
} 
else if(year > 2015)
{
    alert("Too late")
}
else
{
    alert("Exactly!")
}

// ? opeator
let age = prompt("How old are you?")
let accessAllowed = (age > 18) ? true : false;
alert(accessAllowed)

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let result = (a + b < 4) ? 'Below' : 'Over';
alert(result)