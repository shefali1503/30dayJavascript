let rand = Math.floor(Math.random() * 3)

let obj = {
    0: "S",
    1: "W",
    2: "G"
}

let user_input = prompt("Guess between S(snake) , W(water) or G(gun)")

let computer_output = obj[rand]

if (user_input === computer_output) {//all draw cases
    alert("Draw")
}

else if ((user_input === "S" && computer_output === "G") || (user_input === "W" && computer_output === "S") || (user_input === "G" && computer_output === "W")) {
    alert("You lose")
}
else {
    alert("You win")
}

//snake loses from gun buts wins from water
//water loses from snake but win from gun
//gun loses from water but win from snake
