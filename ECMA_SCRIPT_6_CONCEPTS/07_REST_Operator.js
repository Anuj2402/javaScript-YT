/*
The REST operator in JavaScript ( ... ) is a powerful tool that allows you to collect an indefinite number of arguments into an array. It was introduced in ES6 and is now supported by all major browsers.
*/

function add(num){

    console.log(num);
}

add(4, 3, 2,1); // still it willl print 4 only 

// solving this using REST ooperator 
function sub(...num){
    console.log(num);
    console.log(arguments);
}
sub(4,3,2,1) // output -> [4,3,2,1] a array of values

