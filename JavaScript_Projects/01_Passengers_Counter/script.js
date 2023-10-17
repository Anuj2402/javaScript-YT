

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")


let count=0
function increment(){
    // console.log("clickeddd");
    count+=1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr // += for saving the previous text also 
    countEl.textContent = 0 // resotre the count value
    count =0;


}