// singleton-> when you create object using constructor then this singleton is created

// object.create


//objects literals


const mySym = Symbol("key1") //declearing symbol

const jsUser = {
            name : "Anuj",
            "full name" : "Anuj kumar rai",
            // mySym : "myKey1",
            [mySym] : "myKey1",
            age : 18,
            email : "anuj@google.com",
            lastLoginDate : ["monday", "Saturday"]

}

// ways to access the attributes of objects

// console.log(jsUser.email); // run
// console.log(jsUser[email]); // error
// console.log(jsUser["email"]); // run
// console.log(jsUser["full name"]); // run
// console.log(typeof jsUser.mySym); // run -> string
// console.log( jsUser[mySym]); // run

jsUser.email = "anuj@chatgpt.com"
// Object.freeze(jsUser) // thsi will freeze the last updated info
jsUser.email = "anuj@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting()); // run
console.log(jsUser.greetingTwo()); // run
console.log(jsUser.greeting); // output -> [function(anonymous)]

