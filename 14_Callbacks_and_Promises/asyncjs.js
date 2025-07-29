//Asynchronous Nature of JavaScript


//non blocking function (asynchronous)-they run in the background and donot block the flow of synchronous statements
setTimeout(() => {
   console.log("I am inside the timeout function") 
}, 2000);

//blocking statements (synchronous) -they run in sync one after the another
console.log("hi")
console.log("How are you")

//asynchronous nature of js states that it will run the blocking functions first which is dependent upon wach other whereas the non bloacking function or statements will be deffered to be performed after that

setTimeout(() => {
   console.log("I am inside the timeout function") 
}, 0);

console.log("the end")


/*
hi
How are you
the end
I am inside the timeout function
I am inside the timeout function
*/