

function sayMyNAme(){

    console.log("A");
    console.log("N");
    console.log("u");
    console.log("j");
}


// sayMyNAme -> this will give reference of the function
// sayMyNAme()  //-> this will execute the function

// function addTwoNumbers(number1, number2){ 
   // when you define funtion then the value is called parameters 
    // console.log(number1 + number2); 
// }

// addTwoNumbers(3,4); // when you call function then the value is called arguments
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
// addTwoNumbers(3, null);


// another way

function addTwoNumbers(number1, number2){ 

    // let result = number1 + number2
    // console.log("Anuj"); 
    // return result

    //also 
    return number1 + number2
    
 }
 
const result = addTwoNumbers(3,5)
// console.log("Result:", result);

// default value is sam in this function
function loginUserMessage(username = "sam" ){
    // if(username === undefined){
    //     console.log("Please enter your username");
    //     return 
    // }

    //2nd way
    if(!username){
        console.log("Please enter your username");
        return 
    }
    return (`${username} just logged in`)
}

// console.log(loginUserMessage("Anuj")); 
// console.log(loginUserMessage());  // output -> undefined
// ****************************************************************************

// (...) ->tripple dot this is a REST or SPREAD operator
function calculateCartPrice(val1,val2,...num1){
        return num1
}

// console.log(calculateCartPrice(200,400,500,2000));


const user = {
    // when you make typo in object section then the output will be UNDEFINED
    username : "Anuj",
    price : 199
}

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user);

//we can also pass directly without creating objects
// handleObject({
//     username : "sam",
//     price : 399
// })

// we can also pass array

const mynewArray = [100,400,200,500]

function returnSecondvalue(getArray){
    return getArray[1]

}

// console.log(returnSecondvalue(mynewArray));
console.log(returnSecondvalue([100,300,200,500]));
