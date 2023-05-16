// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kai bar
//  tho use global variable ke pollution ko hatane ke liya hamne IIFE ka use kiya


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);

})(); // when you declare two or more function then semicolon is impt

//here 1st () -> for defination of unction and 2nd () -> for execution of function

//arrow functon 
( () => {
    console.log(`DB CONNECTED TWO`);

})();

//passing values
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})("ANUJ KUMAR")