const myObject = {
    js : 'javascripts',
    cpp : 'c++',
    rb : 'Ruby',
    swift : "swift by Apple"
}

for (const key in myObject) {
    // console.log(key); // this will print  only the keys not value
}
for (const key in myObject) {
    // console.log(myObject[key]); // this will print  only the values not key
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`); // this will print  both  key and value pair
}
// ****************************************************************************************************
//FOR IN loop on ARRAY


const prog_lang= ["js", "rb",  "cpp", "py", "java"]

for (const key in prog_lang) {
    console.log(key); // this will print the Array key
}
for (const key in prog_lang) {
    console.log(prog_lang[key]); // this will print the Array values
}

// NOTE -> FOR IN loops will not works in case of MAPS