let score = "anuj"

// console.log(typeof score);
// console.log(typeof (score));

let valueINnumber = Number(score);
// console.log(typeof valueINnumber);
// console.log( valueINnumber); // NaN (NOT A NUMBER)

//NOTES
// 33 => 33
// "33abc" => NaN (not a number) but type is number
// true =>1; false => 0;

let isLoggedIN = "ANUJ"
//corverting in boolean
let booleanisLoggedIn = Boolean(isLoggedIN)
//console.log(booleanisLoggedIn);

//NOTES
// 1 => true; 0 => false
// "" => flase  
//"ANUJ" => true

let AnyNumber = 33
//changed into string

let NumberTostring = String(AnyNumber)
// console.log(NumberTostring);
// console.log(typeof NumberTostring); 


// *****************************OPERATIONS***************************************

let value = 3;
let Negvalue = -value;
// console.log(Negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello"
let str2 = "ANUJ"

let str3 = str1 + " " +  str2;
// console.log(str3);

// console.log(1 + "2");  // first element  datatype will affect the output
//these are not good practice (bad code)
// console.log("1" + 2);
// console.log(1 + 2 + "3");
// console.log("1"+ 2 + 3); // if string 1st then all output will affected by it

//Read mdn incrementer documentry for better understanding on this topic
let counter = 99;
counter++;
console.log(counter);


