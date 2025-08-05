// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// "hello" -"olleh"

let str = "Hello"
//split will change the string into an array [ 'H', 'e', 'l', 'l', 'o' ],reverse will reverse it[ 'o', 'l', 'l', 'e', 'H' ] and join will again join it to make a string olleH

console.log(str + str.split('').reverse().join(''))