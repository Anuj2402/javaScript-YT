// For of loop

// ["","",""]
//[{},{},{}] array ke andar object

const arr = [1,2,3,4,5, "anuj"]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}


// MAPS Ds

const map = new Map()

map.set('IN', "India")  
map.set('USA', "United states of America")  
map.set('FR', "france") 
map.set('IN', "India")  // this will not print as map stores only uinque value 


// console.log(map);

// iteration on maps
for (const key of map) {
    // console.log(key); // this will give key value pair inside an array
}

for (const [key, value] of map) {
    console.log(key, ':->' , value);
}


// Objects is not iterable using 'for of'  loop