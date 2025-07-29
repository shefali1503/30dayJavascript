//We can even have multiple handlers in a single promise that works independenlty thta is donot passthe value to one another

let prom=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Data is loaded");
    },3000);
})

//handler 1

prom.then(result=>{
    console.log("Handler 1: ",result);
})

prom.then(result=>{
    console.log("Handler 2: ",result);
})
