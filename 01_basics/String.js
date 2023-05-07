const name = "Anuj"
const repoCount = 50;

//This is old way of printing strings 
// console.log(name + repoCount + " " + "KUMAR"); 

// recent method -> using backticks which includes string interpolation

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare STRING
const gameName = new String("anujKumar");

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); // cahnge to uppercase
console.log(gameName.charAt(2)); // letter at particular index
console.log(gameName.indexOf('j')); // index of particular character
console.log(gameName.indexOf('j')); // index of particular character


const newString = gameName.substring(0,7);
console.log(newString);

const anotherString = gameName.slice(-7,4);   // it will count from back as it has neg start value
console.log(anotherString);

const newStringone = "   Anuj    "
console.log(newStringone.trim());


const url = "http://Anujkumar.com//Anuj%20kumar";
// it will replace %20 to - 
console.log(url.replace('%20','-'));

//it will check that the particular string is there or not
console.log(url.includes("sundar"));

//go through MDN doc to know more about Strings