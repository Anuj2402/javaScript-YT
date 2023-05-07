const score= 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
//it will fixed the no. of digit after the decimal point
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;
// it will give the precise value upto the mention no. of digit
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// it will separate the zeroes according to indian standards
// console.log(hundreds.toLocaleString('en-IN'));

// two more imp numbers methodes are
// 1. MAX_VALUE
// 2. MIN_VALUE

// ****************************MATHS*************************************

console.log(Math);
// console.log(Math.abs(-4)); // gives absolute value
// round off to the neareast value
// console.log(Math.round(4.3)); 
// console.log(Math.round(4.9));

// console.log(Math.ceil(4.3)); // always round off to the upper neareast value
// console.log(Math.floor(4.9)); // always round off to the lower neareast value
// console.log(Math.min(4,3,10,9));  // finding min
// console.log(Math.max(4,3,10,9));  // finding max

console.log(Math.random()); // always give output in range 0 to 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min =10;
const max = 20;
// it will give value btw 10 and 20

console.log(Math.floor(Math.random() *(max-min +1)+ min));