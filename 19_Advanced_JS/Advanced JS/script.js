async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(345)
        }, 1000);
    })
}
//we cannot run await without async function biut we donot want to run it inside a async function we can also use IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It’s a common design pattern used to create a private scope and avoid polluting the global namespace.

(async function () {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})();
//we donot need to call this function that will be automatically invoked once encountered