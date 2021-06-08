'use strict'
function sum(a,b) {
    return a + b;
}

let result = sum(1,2);
console.log(result);

// different way to write it.
let sayHi = function(){
    console.log('HI');
}
sayHi()

// Function Callbacks

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk(){
    alert("You aggreed");
}

function showCancel(){
    alert("You canceled the execution!")
}

ask("Do you agree", showOk, showCancel);

// Arrow Functions
let sum = (a,b) => a + b;
console.log(sum(1,2));