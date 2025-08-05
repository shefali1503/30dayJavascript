// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


function sumArray(arr){
    let sum=0;
    for (const element of arr) {
        if(element < 0)break;
        sum += element
    }return sum
}

let arr =[1,2,3,-4,5]
console.log("The sum of the elements of arrays till we encounter negative number = " + sumArray(arr))