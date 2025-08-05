// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// example [1,2,3,4,5,6,7] =[1,1,2,2,3,3,4,4,5,5,6,6,7,7]
// example [1,1,2,3]=[1,1,1,2,3]


// function doubleArray(arr){
//     let anotherArray = []
//     for(let i = 0 ; i < arr.length ; i++){
//         if(i>=1 && arr[i] === arr[i-1]){
//             anotherArray.push(arr[i])
//         }
//         else{
//             anotherArray.push(arr[i],arr[i])
            
//         }
//     }
//     return (anotherArray)

// }

//2nd solution

function doubleArray(arr) {
    let result = [];
    let prev = null;

    for (let num of arr) {
        if (num === prev) {
            result.push(num);
        } else {
            result.push(num, num);
        }
        prev = num;
    }

    return result;
}


let arr = [1,2,2,3,3,4]

let doubleArr = doubleArray(arr)
console.log(doubleArr)


