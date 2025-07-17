//wap to print the marks of a student using for-in loop
let obj={
    Harry:"90",
    Rohan:"70",
    Akash:"90"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,":",element)
}