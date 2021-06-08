'use strict'

let user = {
    name: 'Manas',
}

let id = Symbol('id')

// console.log(id.description);

user[id] = 1;
console.log(user[id]);
