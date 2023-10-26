let randomNumber = Math.random()

console.log(randomNumber)
/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/

let randomNumber2 = Math.random() * 6

console.log(randomNumber2)
/* 

In which range will our randomNumber be now?

From: 0
To: 5.999999
Math.random() - > output -> 0 ----> 0.9999
Math.random() * 6 - > output -> 0 ----> 5.9999

*/


// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(12.999999999999)

console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

let randomNumber3 = Math.floor( Math.random() * 6 )

console.log(randomNumber3)

/* 

Write down all the possible values randomNumber can hold now!

output ->  0,1,2,3,4,5


*/
// Try to modify the expression so that we get a range from 1 to 6
let randomNumber4 = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumber4);


// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber5 = Math.floor( Math.random() * 6 ) + 1
    return randomNumber5
}

console.log( rollDice() )


//Rock, Paper , scissor game 
let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() ) 