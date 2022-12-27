//const variables cannot be changed further

const accountId = 12121;
let accountEmail = "anuj@gmail.com";
var accountPassword = "1234";
accountCity = "jaipur";

let accountState; // it  will print undefined 

/*
    prefer not to use var
    because of the issue in block scope and functional scope
*/


// accountId = 2; // not allowed as constant(const) cannot be changed
//console.log(accountID);

accountEmail = "cmrit@gmail.com";
accountPassword = "54321";
accountCity = "Bangaluru";

//prints normal output
console.log([accountId, accountEmail, accountPassword, accountCity]);
//THIS WILL PRINT ALL VALUES IN TABULAR FORM
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

