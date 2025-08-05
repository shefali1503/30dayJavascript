// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
//step1 pass arr to the async function
//step 2 As we have to make the promise for each number of array so we use a map() function in JSmap() JavaScript ka ek array method hai jo:---"Har element ke upar ek function chalata hai aur uske return value se ek naya array banata hai." 

async function doubledelay(nums) {
    const promises = nums.map(num =>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
            resolve(num * 2);
        }, 500);
        })  
    })
    return Promise.all(promises);
}
async function main() {
    let arr = [1,2,3]//2,4,6
    console.log(await doubledelay(arr))
}
main()