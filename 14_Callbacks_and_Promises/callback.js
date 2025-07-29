//CallBack functions in JavaScript
// A callback function is a function passed as an argument to another function, which is then invoked (called back) after the outer function has finished its execution
// ✅ Callbacks are often used to handle asynchronous operations, but they can also be used in synchronous code.



// function loadScript(src,callback){
//   let script=document.createElement('script')
//   script.src=src;
//   script.onload=()=>callback(script)
//   document.head.append(script)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (script)=>{
//   alert("Script is loaded")
//   alert(script.src)
// });

// let fn=()=>{
//   alert(script.src)
// }

let callback=(message,fn)=>{
  alert(message)
}
function loadScript(src,callback){
  let script=document.createElement('script')
  script.src=src;
  script.onload = callback("Script is loaded")
  document.head.append(script)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)