//Spread syntax allows the iterables such as string,arrays etc to be expanded in the places where zero or more arguments are expected.
// The spread syntax (...) is used to expand iterable elements (like arrays, objects, or strings) into individual elements.
// ... Spread: Expands elements (used in arrays, objects, function calls)

// ... Rest: Gathers elements (used in function parameters or destructuring)


//FOR ARRAYS
const arr=[1,2,3,7,11]
const arr2=[...arr]
console.log(arr2)//[ 1, 2, 3, 7, 11 ]
console.log(...arr , ...arr2)//1 2 3 7 11 1 2 3 7 11
//Pass array elements as function arguments:
console.log(Math.max(...arr))//11

//FOR OBJECTS
//create object from array
const obj1 = {...arr}
console.log(obj1)
// { '0': 1, '1': 2, '2': 3, '3': 7, '4': 11 }
// Copy an object:
const obj2 = {...obj1}
console.log(obj2)//{ '0': 1, '1': 2, '2': 3, '3': 7, '4': 11 }
// Merge objects:
const o1 = { a: 1 };
const o2 = { b: 2 };
const combined = { ...o1, ...o2 };
console.log(combined); // { a: 1, b: 2 }

//Override Properties
const original = { x: 1, y: 2 };
const updated = { ...original, y: 100 };
console.log(updated); // { x: 1, y: 100 }

//FOR STRINGS
const str = "hello";
const letters = [...str];
console.log(letters); // ['h', 'e', 'l', 'l', 'o']


//QUICK QUIZ1
const a="the",b="no"
const c = {a,b}
console.log(c)//{ a: 'the', b: 'no' }