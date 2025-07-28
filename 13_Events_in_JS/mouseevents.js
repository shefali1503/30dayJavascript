let button=document.getElementById("btn")

//click
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>You have clicked the button</b>"
})

//double click
button.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor="red"
})

//right click
button.addEventListener("contextmenu",()=>{
    alert("You have clicked right")
})

//mousedown-Fired when a pointing device button is pressed on an element.
button.addEventListener("mousedown",()=>{
    alert("You have clicked the button mousedown event")
})

// mouseover-Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.
button.addEventListener("mouseover",()=>{
    alert("Mouseover event")
})

button.removeEventListener("mouseover",()=>{
    alert("Mouseover event")
})