//Promises
//Creating Promises for Payment Status

const buyFlightTicket = ()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const error = true; // error status 

            if(error){
                reject("Sorry your payment was not successful")
            }else{
                resolve("Thank you your Payment was successful")
            }

        },3000) // 3000 is for waithig for 3 sec


    })

}

//Two chain method 
buyFlightTicket()
.then((success)=> console.log(success))
.catch((error) => console.log(error));


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

//one way
const userData = new Promise((resolve, reject) => {
    const error = true;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


//Another way
/*
const userData = ()=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const error =true;

            if(error){
                reject("500 Level Error")
            }else{
                resolve({
                    firseName : "Anuj",
                    Age : 22,
                    email : "Anujyadav@exampke.com"
                });
            }

        },3000)
        


    });
}

userData()
        .then((data) => console.log(data))
        .catch((error)=> console.log(error))

    */