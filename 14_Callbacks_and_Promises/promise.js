//a promise is the resolution of the callback hell or pyramid doom
//it is the promise for code execution if it is resolved or rejected
//reject and reslve are the two callbacks that are provided as per the code execution

console.log("Promises")
let prom1=new Promise((resolve,reject)=>{//new Promise is a constructor for making promises
    let rand=Math.random()//0-1
    console.log(rand)
    if(rand<0.5){
        reject("Numnber generated cannot be processed as it is less than 0.5.")//error 
    }
    else{
        setTimeout( () => {
        console.log("number is accepted as it is greater than 0.5")
        resolve("Ok")
       },1000)
    }
})

let prom2=new Promise((resolve,reject)=>{
    let rand=Math.random()//0-1
    console.log(rand)
    if(rand<0.5){
        reject("Numnber generated cannot be processed as it is less than 0.5.--2")//error 
    }
    else{
         setTimeout( () => {
        console.log("number is accepted as it is greater than 0.5 --2")
        resolve("Ok--2")
       },1000)
    }
})

let prom3= Promise.race([prom1, prom2])

prom3.then((a)=>{
    console.log(a)//completion of code that is givesthe value of resolve
}).catch(err=>{//error catching
    console.log(err)
})