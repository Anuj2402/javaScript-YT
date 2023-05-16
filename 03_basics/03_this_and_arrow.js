const user = {
     username : "ANUJ",
     price : 999,

        welcomeMessage : function() {
            console.log(`${this.username}, welcome to website`);
            // console.log(this); // this will give the details of all the current contex
        }

}

// user.welcomeMessage()
// user.username = "sam" // here we changed the context 
// user.welcomeMessage()


// console.log(this); // -> this will give empty '{}' context as this declare out of scope 
                    // in node js environment it will so empty global context
                    // but in early ways it will executed in console so it shows (windows) as an output
                    // so broweser has global object as (window object)


// function chai(){
//     let username  = "Anuj"
//     console.log(this.username);
// }

//  chai()

// const chai = function(){
//     let username  = "Anuj"       // both will give undefine as an output
//     console.log(this.username);
// }
// chai()

// const chai =   () => {
//     let username  = "Anuj"       // both will give undefine as an output
//     console.log(this);    // empty parenthesis
// }
// chai()

// **************************ARROW*****************************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicite return -> no need to write return key word also use parenthesis()
// const addTwo = (num1, num2) => ( num1 + num2)
// how to return object using implicite return 
const addTwo = (num1, num2) => ({username : "ANUJ"}) // wrap in parenthesis

console.log(addTwo(3,4));


