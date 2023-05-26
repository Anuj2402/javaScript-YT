// FOR EACH loop

const coding = ["js", "rb", "cpp", "java", "python"]

coding.forEach(function name(item){
    // console.log(item);
})
// OR
coding.forEach(function (item){
    // console.log(item);
})

// using ARRoW Function
coding.forEach( (val) => {
    // console.log(val);
})


function printME(item){
    // console.log(item);

}

coding.forEach(printME) // give only reference becz we are not () executing here


// coding.forEach((item, index, arr ) => {
//     console.log(item, index,arr);

// })

// ************************************************
myCoding = [
    {
        languageName : "javascript",
        languageFilename : "js"
        
    },
    {
        languageName : "java",
        languageFilename : "java"

    },
    {
        languageName : "python",
        languageFilename : "py"

    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})


myCoding.forEach((item)=> {
    console.log(item.languageFilename);
})