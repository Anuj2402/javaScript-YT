//Array part 02

const marval_heros= ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marval_heros.push(dc_heros); //this will merge the whole dc array into marval array
// console.log(marval_heros);
// console.log(marval_heros[3][1]); // output = flash

const all_heros = marval_heros.concat(dc_heros);
//concat will merge two array into a single set of array
// console.log(all_heros);

//SPREAD METHOD -> (...)
// thsi spread the two array and merge
const all_new_heros = [...marval_heros, ...dc_heros];
// console.log(all_new_heros);

//flat() method -> 
// remove all the nasted array to give merged sing array as an output
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usable_another_array = another_array.flat(Infinity);
// console.log(usable_another_array);

console.log(Array.isArray("ANUJ")); // to check input is array or not
console.log(Array.from("ANUJ")); // to change it into array
console.log(Array.from({name:"ANUJ"}));  // output -> empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));// it will merge and give array as an output
