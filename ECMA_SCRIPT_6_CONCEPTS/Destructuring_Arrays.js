
const names = ["Anuj" ,"Kumar" , "Rai"]

// Destructuring the array
let [firstName , middleName , lastName]= ["Anuj" , "kumar ", "Rai"]

console.log(lastName);  //output -> Rai 
console.log(firstName); //output -> Anuj

//we can also override the values 
lastName = "Yadav"
console.log(lastName); // output -> Yadav