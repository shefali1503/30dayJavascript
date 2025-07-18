// console.log("Hi i am a tutorial on JS Functions");

// function desc(name) {
//     console.log("Hey "+ name +" you are so nice");
//     console.log(name +" i love your shirt");
//     console.log(name +" is a nice student");
//     console.log(name +" is a web developer");

// }
// desc("Swati");
// desc("Rohan");
// desc("Harry");

//Sum function that will sum two no's and return its result
function sum(a,b) {     
    return(a+b);
}

console.log(sum(4,15));//function call

let result=sum(8,9);
console.log(result);

let x=5;
let y=15;
let z=sum(x,y);
console.log(z);

//anotherway to make a function .it is also known as arrow function
//inside a variable a function is descibed.genrally convient ,sum2 here is a vafriable itself
//used whenever we want to pass this func inside another func with the use of the variablename
const sum2=(a,b)=>{
    let c=a+b;
    return c;
}

console.log(sum2(15,15));

//default parameters-which have parameters that have pre defined value.If the value is not explicitly given in the func call it will use the default value otherwise the value given in the function call

function defaultsum(a,b,c=4){
    console.log(a,b,c)
    return a+b+c
}
console.log(defaultsum(1,4));
console.log(defaultsum(1,4,3));
console.log(defaultsum(1));
