//js function that returns a promise after n seconds. The function takes n as a parameter .Use and IIFE function to execute the function with different values of n
async function nprom(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve(`Promise resolved after ${n} seconds`);
        }, n * 1000);
    })
}

(async function main() {
    let ans = await nprom(2)
    console.log(ans)
    ans=await nprom(3)
    console.log(ans)
})()


