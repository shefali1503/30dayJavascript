//all the methods that can be used to for promise class

// Method	Description
// Promise.all()	Waits for all to succeed, fails fast
// Promise.race()	Resolves/rejects with the first one that finishes
// Promise.allSettled()	Waits for all to settle (success or error)
// Promise.any()	Resolves with first success, fails if all fail
// Promise.resolve()	Creates a resolved promise
// Promise.reject()	Creates a rejected promise
let prom1=new Promise((resolve,reject)=>{//new Promise is a constructor for making promises
    let rand=Math.random()//0-1
    console.log(rand)
    if(rand<0.5){
        reject("error in prom1")//error 
    }
    else{
        setTimeout( () => {
        resolve("Ok--1")
       },5000)
    }
})

let prom2=new Promise((resolve,reject)=>{
    let rand=Math.random()//0-1
    console.log(rand)
    if(rand<0.5){
        reject("Error in prom2")//error 
    }
    else{
         setTimeout( () => {
        resolve("Ok--2")
       },5000)
    }
})

// console.log(Promise.all([prom1,prom2]))//it will return a array of their results when the promise fulfil
// console.log(Promise.allSettled([prom1,prom2]))//it will return all the settled promises as an array

console.log(Promise.any([prom1,prom2]))//waits for the first promise to be fulfilled(resolve) and its result becomes its output.if every promise is rejected it will throw an aggregrate error



let prom3=Promise.race([prom1, prom2])//wait the promise to settle(either reject or resolve) and the result or error of first settled promise become its outcome

prom3.then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})


//promise.resolve-Creates a resolved promise with the given value.
Promise.resolve("I am resolved").then((result)=>{
    console.log(result)
})

//promise.reject-Created a trejected promise with the given error
Promise.reject("Error").catch((err)=>{
    console.log(err)
})