document.querySelectorAll(".box").forEach(e=>{
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    e.style.backgroundColor = `rgb(${r} , ${g} , ${b})`
    e.style.color = `rgb(${g} , ${r} , ${b})`
})
