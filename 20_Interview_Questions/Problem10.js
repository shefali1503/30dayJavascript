// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


async function brewCoffee(type) {
    const coffeeTypes = {
        "Latte": 5,
        "Iced Americano": 6,
        "Capachino": 4,
        "Pumpkin Latte": 7,
        "Mocha": 8
    }
   
    let timetaken = coffeeTypes[type];

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${type} is ready.`)
        }, timetaken * 1000);
    })
}

async function main() {
    console.log(await brewCoffee("Capachino"))
}
main()