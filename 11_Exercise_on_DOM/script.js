let e=document.querySelectorAll(".box")

for(let i=0 ; i<e.length ;i++){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    e[i].style.backgroundColor = `rgb(${r} , ${g} , ${b})`
    e[i].style.color = `rgb(${g} , ${r} , ${b})`
}