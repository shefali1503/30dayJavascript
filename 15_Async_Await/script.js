// An async function is a special type of function that always returns a Promise — even if you return a simple value.
// It allows you to write asynchronous code in a synchronous (top-to-bottom) style using the await keyword inside it.


// | `async` | Marks a function as asynchronous (returns a Promise) |
// | `await` | Waits for a promise to resolve before continuing     |


async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I got the data")
        }, 3000);
    })
}

async function main(){
console.log("Login")
console.log("Type of data request")
console.log("Something else")

let data = await getdata()//await generally works in async function

console.log(data)//it will be a promise after wait it will contain the value of promise that is in resolve

console.log("Process data")

console.log("task 2")
}

main()

    
// to stop the upcoming operations so that the asyncpromise is fulfilled first
    // .then((v) => {
    //     console.log(data)//it will be a promise

    //     console.log("Process data")

    //     console.log("task 2")
    // })
