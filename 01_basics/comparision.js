//This basic comparision will always work fine

// console.log(2>1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

// here two different datatype comparision will create unpredictable output
// console.log("2" > 1);
// console.log("02" > 1);

//the reason is that an equality check == and comparisions > < >=
// <= works differently
// comparisions convert null to a number , trating it as 0(zero)
//  thats why null>=0 is true , but null > 0 is false

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

