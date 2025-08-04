//jokes array
function showjoke() {
    const jokes = ["Why was the mobile phone wearing glasses?... Because it lost its contacts.",
        "What was the spider doing on the computer?... He was making a web-site!",
        "What do you call an iPhone that sleeps too much?... Dead Siri-ous.",
        "What did the computer have during his break time?... He had a byte!",
        "What is the computer's favorite snack to eat?... Microchips!",
        "What shoes do computers love the most?... Re-boots!",
        "Why did the computer go to the dentist?... To get his Bluetooth checked.",
        "What is the biggest lie anyone can tell?...I have read and agreed to all the terms and conditions.",
        "What kind of computer sings the best?... A Dell.",
        "Why did the developer become so poor?... Because he cleared his cache."
    ]

    let random = Math.floor(Math.random() * 10);

    let div = document.querySelector(".jokes");
   div.innerHTML = jokes[random]
}

let btn = document.querySelector(".btn")
btn.addEventListener("click",showjoke)