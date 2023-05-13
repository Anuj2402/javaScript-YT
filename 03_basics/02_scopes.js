// global and block level scope

// var c = 300 // it cannot be  acces as its  declare under var


let a= 300

if (true) {
    let a = 10
    const  b= 20
    var  c = 30
    // console.log("INNER SCOPE", a);
}


// console.log(a); // it canot be access out of scope 
// console.log(b); // it canot be access out of scope 
// console.log(c);   // as this is defined under "var" so it can be acces out of scope also 
                    // thats why it is not preferred widely
// **************************************************************                    


function one(){

    const username = "Anuj";

    function two(){
        const website = "youtube";
        // console.log(username + " " + website);
    }
    // console.log(website);

     two()
}
// console.log(username);

one()

// same scoping using if else

if (true) {
    const username = "Anuj"
    if (username === "Anuj") {
        const website = "chatGPT"
        // console.log(username + website);
        
    }
    // console.log(website); // error as it is outside scope
}
// console.log(username);

// **************************INTRESTING EX***********************


function addone(num){
    return num + 1
}

console.log (addone(5))


// addTwo(5)  //error Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2
}

console.log(addTwo(5)) // run