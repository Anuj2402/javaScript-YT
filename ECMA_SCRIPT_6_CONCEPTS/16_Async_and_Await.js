//By Defalut JavaScript is Synchronous i.e it's executes step by step 
const photos = [];

function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = uploadStatus;
    
    console.log(result); // output - > Promise {}
    console.log(photos.length); // output -> 0
}

photoUpload();



// Practice -> after using async Await
const photoes = [];

async function photoUploads(){
    let uploadStatus = new Promise((resolve, rejecr)=> {
        setTimeout(()=>{
               photoes.push("Profile pic added")
               resolve("Pic is uploaded")   
        },3000)
    })
    let result = await uploadStatus;
    console.log(result); // output -> Pic is uploaded
    console.log(photoes.length); // 1
}

photoUploads();




//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(data);
    console.log(data.value);
}

getJoke();