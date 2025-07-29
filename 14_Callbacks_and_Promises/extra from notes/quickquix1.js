function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script')
        script.src=src;
        script.onload =()=>resolve("Script is successfully loaded")
        script.onerror =()=>reject(new Error("Script failed to load"))

        document.head.append(script)
    })
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")

.then(message=>{
    console.log(message)
}).catch(err=>{
    console.log(err)
})