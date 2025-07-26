let boxes=document.querySelectorAll(".box")


function randomcolor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    return `rgb(${r} , ${g} , ${b})`
}
Array.from(boxes).forEach(e=>{  
    e.style.backgroundColor =  randomcolor()
    e.style.color = randomcolor()
})
