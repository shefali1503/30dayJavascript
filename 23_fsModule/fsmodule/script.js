const { error } = require('console');
const fs = require ('fs')
// console.log(fs)

//Creating a file using fs
//It blocks the event loop until the file is written.fs.writeFileSync is synchronous
// fs.writeFileSync("abc.txt","I am a synchronous file");
// console.log("file added successfully")

fs.writeFile("xyz.txt","hey, i am second file but i am asynchronous in nature",()=>{
    console.log("Finally file is added")
    fs.readFile("xyz.txt",(error,data)=>{
        console.log(error,data.toString());//null for error as there is no error
        //we have to convert data into the string as it will otherwise retun some buffer bytes
    })
})
console.log("the end");
// Node asks the OS (through libuv) to write the data to xyz.txt. This is non-blocking: Node does not wait for the write to finish.


//appending a file - adding content to a existing file and if file doesnt exist it will create a new file
fs.appendFile("abc.txt"," I am the appended data in the file",(e,d)=>{
    console.log(e,d);
})