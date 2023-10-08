
let incomes = [62000, 67000,75000]
let total = 0;

for (const income of incomes){
    console.log(income); // output -> all  the array element
     total+=income;
}

console.log(total); // output -> 204000

//Iterating Over Strings 

let fullName = "Anuj Kumar rai"

for(const char of fullName){
    console.log(char);
}



// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for(const student of students){
    const {name , city}= student; // destructuring the objects;
    
    console.log(`${name} lives in ${city}`);
    //Another way
    console.log( student.name + " lives in " + student.city );
     
}