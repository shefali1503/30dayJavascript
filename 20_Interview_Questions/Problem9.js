// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


async function placeOrder(){
    return new Promise((resolve,reject)=>{
        let rand =Math.floor(Math.random()*6)+1//ranges between 1--6
        setTimeout(() => {
            resolve("Order Confirmed")
        }, rand * 1000);
    })
}

async function main() {
    console.log(await placeOrder())
}
main()