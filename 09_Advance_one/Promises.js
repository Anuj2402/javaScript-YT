/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation

A Promise is in one of these states:

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.

*/


//Creating a promise
//promise one
const promiseOne = new Promise(function(resolve, reject){
    // Do asyn task 
    //DB calls, cryptography, networks
    setTimeout(function(){
        console.log("Asyn Task is complete");
        resolve() // this method is for connectiong promiseOne with (.then) so that we can consume it 
    }, 1000)
})

// consuming a promise
// .then ka direct connection hain resolve ke sath
promiseOne.then(function(){
    console.log("promise consumed");
})

//ANOTHER WAY TO create and consume promises together
//Promise TWo
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ASYN task 2 is also complete");

        resolve()
    }, 1000)
}).then(function(){
    console.log("Asyn two resolved");
})

//Creating third Promise 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Its a promise three operation ");
        resolve({ username:"Anuj2402", email:"Anuj@example.com"}) // we can pass the values in the resolve method also
    },1000)
})
// this is how we can access the value from the reslve() method
promiseThree.then(function(user){
    console.log(user);
})

//Creating promise Four
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
         let error = false;
         if(!error){
            resolve({username: "Anuj", password:"123"});
         }else{
            reject('ERROR : Something went wrong')
         }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolve or rejected");
})

//Creating PromiseFive  
//Another way 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username: "JAVASCRIPT", password:"123"});
        }else{
           reject('ERROR : JS  went wrong')
        }
   },1000)
})
// here we are not handling the rejected state 

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }

// to handle the errro or rejected state we use try & cathch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive(); // calling the function

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/Anuj2402')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.