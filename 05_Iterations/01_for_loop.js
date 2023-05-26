// FOR LOOP

for (let index = 0; index <=10; index++) {
    const element = index;
    // console.log(element);
    
}
// console.log(element); this will give error as it is out of sope

// for (let i = 0; i <= 10; i++) {
//     const element =  i;
//     if(element == 5){
//         console.log("5 is best number"); 
        
//        }
//        console.log(element);
// }

// nasted For loop

// for(let i=0;i<=10;i++){
//     console.log(`INner loop value ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`outer loop value ${j} and inner loop ${i}`);
//     }
// }

// for(let i=1;i<=10;i++){
//     // console.log(`INner loop value ${i}`);
//     console.log("TABLES>>>>>>>>>>>>");
//     for(let j=1;j<=10;j++){
//         // console.log(`outer loop value ${j} and inner loop ${i}`);
        
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }
// **********************************************************

// let myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length); // it will give the size of the given array

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];

//     console.log(element);
// }

// BREAK and CONTINUE ***************************************

// for(let i =1 ; i<=20; i++){
//     if(i== 5){
//         console.log("Detected 5-> now loop will break");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for(let i =1 ; i<=20; i++){
    if(i== 5){
        console.log("Detected 5-> now loop will break");
        continue; // this will skip the given condition
    }
    console.log(`value of i is ${i}`);
}