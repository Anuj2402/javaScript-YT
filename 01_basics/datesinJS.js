// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
//press ctrl + space to get all the Date methods suggetions

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // outPut will be object (imp)

// let myCreatedDate = new Date(2023, 0,23);
// let myCreatedDate = new Date(2023, 0,23, 5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-12-2023");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()// will give timestamp in mili seconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//changing it into second from mili seconds
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 to get perfect month number


newDate.toLocaleString('default',{
    weekday : "long"
})