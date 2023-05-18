// if statement

// const isUSerloggedIN = true

// if(2 === "2"){
//     console.log("ececuted");
// }
// console.log("i am out");

//comparision
// <,>, <=, >=, =(assinging value), ==(checking equality), !=(not eqaual),===(cheking data type and equality both)


// temperature = 41

// if(temperature <50){
//     console.log("temp is less than 50");

// }
// else{
// console.log("temp is greater than 50");
// }

// console.log("execute"); // out of scope so it will run eventually


const score = 200

if(score>100){

    const power = "fly"
    // console.log(`user power : ${power}`); //run
}
// console.log(`user power :  ${power}`); // eroor-> power is not defined


const balance =1000
//below line is very bad practice 
// if(balance > 500) console.log("test"),console.log("test2");


// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const USerloggedIN = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = false

if(USerloggedIN && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInfromEmail || loggedInfromGoogle){
    console.log("proceed further you are logged in");
}
