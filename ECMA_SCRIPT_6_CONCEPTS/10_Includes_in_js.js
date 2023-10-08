
/*
The includes() method in JavaScript is used to check if an array or string contains a specific value. It is a case-sensitive method and returns a boolean value, true if the value is found and false if it is not found.

The includes() method can be used on both arrays and strings. For arrays, it checks if the array contains the specified value. For strings, it checks if the string contains the specified substring.
*/

let numArray = [1,2,3,4,5];
console.log(numArray.includes(10)); // fasle as it is not there in the array
console.log((numArray.includes(2))); // true as it is there in the array

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if(listIngredients.includes("chocolate")){
    console.log("We are going to make a chocolate cake")
}else{
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
}