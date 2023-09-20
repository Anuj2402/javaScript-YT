// Object litrals
const user = {
    username: "Anuj",
    logInCount : 9,
    SignedIn: true,
    getUserDetails: function(){
        // console.log("Got the user details from the dtabase");
        console.log(`calling UserName Inside object function ${this.username}`);
        console.log(this); // function context of 'this' keyword
    }
}


console.log(user.username);
// console.log(user.getUserDetails); // cant give only reference 
console.log(user.getUserDetails());
console.log(this); // global context of this keyword  output is empty object {}
// but if we print the same global context this keyword inside browser then we got 'window' as a output



// Constructor Function
// this function mainy use 'NEW' key to create new instances

function User(username, logInCount, isLogedIN){
    // left hand side is variable and right side is passed value
    this.username = username;
    this.logInCount = logInCount;
    this.isLogedIN = isLogedIN;
    // return this; // this also done by default 

    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }
}

// const userOne = User("Anuj", 12, false);
// const userTwo = User("Ram", 12, true);       // without new keyword this will overwrite the userOne values with 
//                                             // userTwo values  
// console.log(userOne);

// now using new key word we get the new instances of the declared variable 
const userOne =  new User("Anuj", 12, false);
const userTwo = new User("Ram", 12, true);  
console.log(userOne);
console.log(userTwo);


