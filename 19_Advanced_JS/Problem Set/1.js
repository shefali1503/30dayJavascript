//WA js program to print Hello Worls with 2 second delay

(async function hello_world() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello")
            console.log("world")
            resolve();
        }, 2000);
    })

})()