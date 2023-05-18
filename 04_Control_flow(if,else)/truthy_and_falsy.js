// const UserEmail = ""

// if(UserEmail){
//     console.log("got the user email");
// }
// else{
//     console.log("Don't have user email");
// }

//  falsy values
// false, 0 , -0, BingInt, 0n, "", null, undefined, NanN

// surprising Truthy values
// "0", 'false', " ", [], {}, function(){} ->empty functon

// if(UserEmail.length === 0 ){
//     console.log("Array is empty");
// }

//checking object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
// checks the value should not be null
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 20 ?? 30

console.log(val1);

// Terniary Operator
// consition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("grater than 80") : console.log("less than 80");

