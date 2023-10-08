//Function declaration

function breakfastMenu(){
    return "I'm going to scrambled eggs for breakFast";
}

//Anonymous function because it has no name 
const lunchMenu = function(){
    return "I'm going to eat pizza for lunch";
}

// Arrow function

const dinnerMenu = () => {
    return "I'm going to eat Cheese for dinner";
}
//Another way 1
const dinnerMenu2 = (food) => {
    return `I'm going to eat ${food} for dinner`;
}
//Another way 2
const dinnerMenu3 = (food) => `I'm going to eat ${food} for dinner`;


console.log(dinnerMenu()); //output-> I'm going to eat Cheese for dinner
console.log(dinnerMenu2("checken salad")); //output-> I'm going to eat chicken salad for dinner 
console.log(dinnerMenu3("Ice cream"));