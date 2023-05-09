// Array 
//The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable name, 
// and has members for performing common array operations.

const myArray = [0,1,2,3,4,5]; // In js array can contain diff datatype also
// console.log(myArray[0]); // ways to access ele of array

//Another way to declare array
const myArray2 = new Array(1,2,3,4,5);
// console.log(myArray2[1]);

//Array Methods

 myArray.push(7); // this method will push the ele at the end of the array
myArray.pop();    // this will remove the last ele of the array
// console.log(myArray);

// myArray.unshift(10) // this method shift all the ele to add specified ele at first index 
// of the araay so this is very time consuming

// myArray.shift() // this will remove the first ele of the array
// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));


const newArray = myArray.join()
// join () method will change the array ele into STRING
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// Two important methods
//  slice and splice
//  slice = this mothod has no impact on original array
// splice = this method will remove the selected part from the original array
console.log("A" , myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B", myArray); // here original array will print

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log("C", myArray);  //here modified array will print
// ******************PART 01 *********************************






