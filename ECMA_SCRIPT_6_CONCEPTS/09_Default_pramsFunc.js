//Understanding Default parameters  in the functions 
/*
const leadSinger = (artist) => {
    console.log(`${artist} is the lead singer in cold play`);
}

console.log(leadSinger("chris Martin")); //output-> chrish Martin is the lead singer in cold play
*/


//Passing the default parameter
const leadSinger = (artist="someone") => {
    console.log(`${artist} is the lead singer in cold play`);
}

console.log(leadSinger()); // undefined
console.log(leadSinger("Anuj")); 


/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const foodIteams = (food="something") => {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

// console.log(foodIteams("milk"));
console.log(foodIteams());