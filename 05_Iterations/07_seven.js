const myNumber = [1,2,3,4,5,6,7,8,9,10]

// when you doest start scope{}
// const newNums = myNumber.map( (num) => (num + 10))
// console.log(newNums);

//  when you starts a scope
// const newNums = myNumber.map( (num) => {
//     return num + 10;
// })
// console.log(newNums);


// CHAINING 

const newNums = myNumber
                .map( (num) => num * 10)
                .map( (num) => num+1)
                .filter( (num) => num >=40) // this apply filters by applying conditions


// console.log(newNums);



