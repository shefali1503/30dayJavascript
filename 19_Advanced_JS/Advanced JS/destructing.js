//CONCEPT OF DESTRUCTING
//Destructing is used to unpack the values from the array 

let [x,y]=[7,20];
console.log(x,y)//7 20

//x will be assigned and y will be assigned 20

let [a,b,...rest]=[1,2,3,4,5,6,7]
console.log(a,b,rest)
//a will get 1, b will get 2and rest will have array[3,4,5,6,7]

//Destructing in objects
const obj = {
    m: 1,
    n: 2,
    o: 3
};

const { m, n } = obj;
console.log(m, n); // Output: 1 2