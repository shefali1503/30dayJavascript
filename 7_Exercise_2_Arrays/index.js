//for loop
let n = 5
let fact = 1
for (let i = 1; i <= n; i++) {
    fact = fact * i
}
console.log(`Factorial of ${n} is ${fact}`)

//reduce method
let arr= []
for (let i = n; i >= 1; i--) {
    arr.push(i)
}
const factorial =(a,b)=>{
    return a * b;
}
console.log(arr.reduce(factorial))