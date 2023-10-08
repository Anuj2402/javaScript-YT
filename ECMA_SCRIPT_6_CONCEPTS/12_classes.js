 class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    
    makeNoise(sound="Loud Noise" ) {
        console.log(sound);
    }
    /*
    The get keyword in JavaScript is used to create getter functions. Getter functions are special functions that are called when a property is accessed.

    Getter functions can be used to perform any necessary logic before the property value is returned. For example, a getter function could be used to validate the property value or to perform some kind of calculation.
    */

    get metaData() {
        return `Type : ${this.type} , Legs: ${this.legs}`
    }


    /*
    Static methods can be called directly on the class, without having to create an instance of the class. Static properties can be accessed directly on the class, or on instances of the class.
    
    */
    static return10(){
        return 10;
    }
}

let cat = new Animal('Dog', 4);
console.log(cat);
cat.legs = 3;

console.log(cat.legs)
cat.makeNoise("Meow")
console.log(Animal.return10()); // output -> 10

console.log(cat.metaData);



 class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

console.log(Cat.makeNoise);
console.log(Cat.metaData);

/*
**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
*/

class Player {
    constructor(name, country){
        this.name= name;
        this.country = country;
    }

    introduce(){
        console.log(`${this.name} was born in ${this.country}`);
    }
}
//This is for creating new instances of player class
const intro = new Player("Messi", "Argentina");
// console.log(intro);
intro.introduce(); // output -> Messi was born in Argentina 


class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    
    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

const roger = new TennisPlayer( "Roger Federer", "Spain", 38);

roger.playTennis(); // Roger Federer is 38 years old and knows how to play tennis
roger.introduce();