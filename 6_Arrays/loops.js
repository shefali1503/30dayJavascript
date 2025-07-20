const a=[12,93,56,8,1]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

a.forEach((index,value,a)=> {
    console.log(index,value,a)
});
// a.forEach((value)=> {
//     console.log(value)
// });

for (const element of a) {
    console.log(element)
}


let obj={
    a:1,//key:property
    b:2,
    c:3
};


for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}

