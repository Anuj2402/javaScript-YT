/*
Here are some of the benefits of using object literals:

They are concise and easy to read and write.
They are efficient, as they create new objects directly without the need for a constructor function.
They are flexible, as they can be used to create a wide variety of object types, including simple objects, nested objects, and objects with functions as property values.

*/
//Example ONE
// function addressMaker(city, state) {
//     const newAdress = {city, state};  //values gets automatically assign to the variables 
    
//     console.log(newAdress);
// }

// addressMaker('Austin', 'Texas');
// addressMaker('Bangalore', 'Karnataka');
// addressMaker('Katihar', 'Bihar');
// -----------------------------------------------------------------------------------------------------------





// EXAPMLE TWO
/*
function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    
}

addressMaker({city: 'Austin', state: 'Texas'});
*/
// applying Destructuring  ans object litrals in above snipt 
function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
       city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Austin', state: 'Texas'});