

let arr = ["I", "go", "home"];

delete arr[1] // delete the index 1 element.
console.log(arr);

// The above "delete" approach is good for deleting the items
// in objects, but not in arrays.

// splice:  delete an element from the array
arr = ["I", "go", "home"];
arr.splice(1, 1)
console.log(arr);

// splice: deleting element and replacing it with others
arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's Dance", "together")
console.log(arr);


// splice : Just adding element : put deleteCount = 0
arr.splice(2, 0, "complex", "language");
console.log(arr);

// slice : It returns a new array copying to it all items from index start to end
arr = ["t", "e", "s", "t"]; 
console.log(arr.slice(1,3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end)

// concat: creates a new array that includes values from other arrays and additional items.
arr1 = [1,2]
arr2 = [3,4]
console.log(arr1.concat(arr2));  


