// reduce function

const myNums = [1,2,3]

// if we dont pass initial value to the acc then accumulator will take array intial value
// const myTotal = myNums.reduce(function (accumulator , currentValue) {
//     console.log(`acc : ${accumulator} and currval : ${currentValue}`);
//     return accumulator + currentValue
// },0)

// same thing using arrow '=>' function
const myTotal = myNums.reduce( (accumulator, currentvalue) => accumulator + currentvalue , 0)

// console.log(myTotal);

// Example

const shoppingcart = [
    {
        itemName : "js course",
        price : 2999

    },
    {
        itemName : "py course",
        price : 999

    },
    {
        itemName : "mobileDev course",
        price : 5999

    },
    {
        itemName : " data science course",
        price : 12999

    },
]

const priceToPay = shoppingcart.reduce( (acc,item) => acc+item.price, 0) 
// here 0 shows initial value of acc

console.log(priceToPay);