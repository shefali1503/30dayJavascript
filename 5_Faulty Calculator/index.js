/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation that happens between these two numbers:");



let random = Math.random();
console.log(random)

function faulty(num1,operation,num2){
    if(operation == "+" ){
        return num1-num2;
    }
    else if(operation == "*"){
        return num1+num2;
    }
    else if(operation == "-"){
        return num1/num2;
    }
    else if(operation == "/"){
        return num1**num2
    }
}

function correct(num1,operation,num2){
    if(operation == "+" ){
        return num1+num2;
    }
    else if(operation == "*"){
        return num1*num2;
    }
    else if(operation == "-"){
        return num1-num2;
    }
    else if(operation == "/"){
        return num1/num2
    }
}

if(random < 0.1){
    alert("The result is : " + faulty(num1,operation,num2));
    console.log(faulty(num1,operation,num2))
}
else{
    alert("The result is : "+ correct(num1,operation,num2));
    console.log(correct(num1,operation,num2))
}