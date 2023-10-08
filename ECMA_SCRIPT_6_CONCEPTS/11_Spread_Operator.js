/*
The spread operator in JavaScript ( ... ) is a powerful tool that allows you to easily copy and expand arrays and objects. It was introduced in ES6 and is now supported by all major browsers.

*/


let perosonalFriends = ["Anuj" , "Mayank", "Atishay"]

let friends = perosonalFriends;
perosonalFriends.push("Ayush")
/*
we push the value only in personaFriends but our friends variable also gets updated
 this is happening because when we assigning the value of personalFriends to friends we just copying the value of personalFriends into friends also friends variable refers to the personalFriends  
*/
// console.log(friends); 
// console.log(perosonalFriends);



// We can solve this by using SPREAD OPERATOR

let perosonalFriendsTwo = ["Anuj" , "Mayank", "Atishay"]

let friendTwo= ["Ayush",...perosonalFriendsTwo, "John" ]  // here we are actually making new copy and storing it into friends Variable
perosonalFriendsTwo.push("RAM") 
console.log(perosonalFriendsTwo); //outpur-> ["Anuj" , "Mayank", "Atishay", "RAM"]
console.log(friendTwo); // here friends remain the same  output -> ["Anuj" , "Mayank", "Atishay"]

// Lets Apply the Spread Oprator on Objects Now

let person ={
    name : "Anuj",
    age : 22,
    city : "Bangalore"
}

let employee = {
    ...person, // this will copy all the property of object person
    salary : 500000,
    Position : "Software Devloper"
}

console.log(employee);


/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];
const Basket = ["Bread", ...shoppingList, "ghee"]

console.log(Basket); // ["Bread",eggs", "milk", "butter", "ghee"];