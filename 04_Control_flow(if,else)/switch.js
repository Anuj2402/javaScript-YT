// switch case

// Basic syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }
//note -> without break all the below case will also run except default

//  if the case is STRING
const month = "feb"

switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("March");
        break;
    case "apl":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}


