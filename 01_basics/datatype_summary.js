// Primitive Datatype

//  7 types-> String, number , Boolean, null, undefined, Symbol,
//  BigInt

const score = 100;
const sconeValue = 100.3 


const isLoggedIn = false
const outsideTemp = null;
let userEmail;

// here symbol is used to create uniquness among two variables

const id =Symbol("123")
const anotherId = Symbol("123")
// console.log(id==anotherId);

const bigNumber = 397286396327090138n;

// Reference (non primitive)
//Array , Object , FUnction

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Anuj",
    age : 22,

}

const myFunction = function(){

    console.log("hello world");
}

console.log(typeof bigNumber );