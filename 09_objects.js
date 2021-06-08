'use strict'

// Empty object

// let user = new Object(); // Object Constructor Syntax (empty object)
let object = {
    name: 'Manas',
    age: 30,
    "likes birds": true, // multiword property name (dont do it)
    likes_birds: true
}; //object literal syntax 

// getting property values of the object.
console.log(object.name);
console.log(object.age);
console.log(object.likes_birds);

// adding property from outside the object
object.isAdmin = true;
console.log(object);

// delete property
delete object.age
console.log(object);

// property value shorthand
function makeUser(name, age) {
    return {
        name, // same as name: name
        age: age,
    }
}

let user = makeUser("Manas", 21)
alert(user.name)

// checking properties in the object
let intob = {};
alert(intob.name === undefined);

// in keyword
intob.name = "Manas";
alert('name' in intob);
alert('age' in intob)

// for...in loop

for (let key in object){
    alert(key)
    alert(object[key])
}