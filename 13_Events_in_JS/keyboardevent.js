// keydown-Fired when a key is pressed.

document.addEventListener("keydown",(a)=>{
    console.log(a,a.keyCode)
})
//output-KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …} 'a'

// keypress Deprecated-Fired when a key that produces a character value is pressed down.

// keyup-Fired when a key is released.
document.addEventListener("keyup",(e)=>{
    alert("key is released")
})