// Promise chaining in JavaScript is a technique where multiple asynchronous operations are executed in sequence, each one waiting for the previous to complete. This is done by returning a promise from one .then() handler and chaining the next .then() to it.

// new Promise((resolve, reject) => {
//     let rand = Math.random()
//     if (rand > 0.3) {
//         setTimeout(() => {
//             resolve("Step 1 done");
//         }, 1000);
//     }
//     else{
//         reject("Step 1 not done")
//     }
// })
//     .then(result => {//if the 1st promise is resolved
//         console.log(result); // "Step 1 done"
//         return "Step 2 done"; // passed to next .then() afterthat this becomes the result
//     })
//     .then(result => {
//         console.log(result); // "Step 2 done"
//         return "Step 3 done";
//     })
//     .then(result => {
//         console.log(result); // "Step 3 done"
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });


// function step1() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("✔ Step 1 complete"), 1000);
//   });
// }
// function step2() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("✔ Step 2 complete"), 1000);
//   });
// }
// function step3() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("✔ Step 3 complete"), 1000);
//   });
// }

// // Chain them:
// step1()
//   .then(result => {
//     console.log(result);
//     return step2(); // returns another promise
//   })
//   .then(result => {
//     console.log(result);
//     return step3(); // returns another promise
//   })
//   .then(result => {
//     console.log(result);
//     console.log("🎉 All steps done!");
//   })
//   .catch(err => {
//     console.error("Something went wrong:", err);
//   });


// function step1() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("✔ Step 1 complete"), 1000);
//   });
// }
// function step2() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("✔ Step 2 complete"), 1000);
//   });
// }
// function step3() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("✔ Step 3 complete"), 1000);
//   });
// }

// // Chain them:
// step1()
//   .then(result => {
//     console.log(result);
//     return step2(); // returns another promise
//   })
//   .then(result => {
//     console.log(result);
//     return step3(); // returns another promise
//   })
//   .then(result => {
//     console.log(result);
//     console.log("🎉 All steps done!");
//   })
//   .catch(err => {
//     console.error("Something went wrong:", err);
//   });
// 


function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("✔ Step 1 complete"), 1000);
    });
}
// Chain them:
step1()
    .then(result => {
        console.log(result);
        return new Promise(resolve => {
            setTimeout(() => resolve("✔ Step 2 complete"), 1000);
        });
    })
    .then(result => {
        console.log(result);
        return new Promise(resolve => {
            setTimeout(() => resolve("✔ Step 3 complete"), 1000);
        });
    })
    .then(result => {
        console.log(result);
        console.log("🎉 All steps done!");
    })
    .catch(err => {
        console.error("Something went wrong:", err);
    });
