/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
don't use arrays
*/

let random1=Math.floor(Math.random()*3)+1
let random2=Math.floor(Math.random()*3)+1
let random3=Math.floor(Math.random()*3)+1


let first_word={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let second_word={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let third_word={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
console.log(`Business name is ${first_word[random1]} ${second_word[random2]} ${third_word[random3]}`)
