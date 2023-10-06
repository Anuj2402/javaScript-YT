//Destructuring of Objects 
/*
const Student = {
    name : "Anuj",
    club : "Coders",
    address : {
        city : "Bangalore"
    }
};

//Earlier 
// console.log(Student.name);
// console.log(Student.address.city);

//Destructure with object
const {name , club , address : {city}} = Student;
//Accessing 
console.log(`${name} Codes for ${club} at ${city}`);
console.log(`${name} lives in ${city}`);
*/
// Example Two
const student = {
    name : "ram",
    age  : "24",
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }

};

const {name , age, projects : {diceGame} } = student;
console.log(`${name} is ${age} years old ans he created a mini project called &{diceGame}`);