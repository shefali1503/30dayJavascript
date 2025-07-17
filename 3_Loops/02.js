//wap to print the marks of a student using for loop
let obj={
    Harry:"90",
    Rohan:"70",
    Akash:"90"
}
let keys = Object.keys(obj); // Get all the keys in an array


for(let i=0 ;i<keys.length ; i++){
    let element=keys[i];
    console.log(element,obj[element]);
}