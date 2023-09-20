// let myName = "Anuj     "
// let mysirName = "Kumar     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anuj = function(){
    console.log(`Anuj is present in all objects`);
}

Array.prototype.heyAnuj = function(){
    console.log(`Anuj says hello`);
}

// heroPower.anuj()
// myHeros.anuj()
// myHeros.heyAnuj()
// heroPower.heyAnuj()

// inheritance

const User = {
    name: "Anuj",
    email: "Anuj@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Anujkumarrai     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Anuj".trueLength()
"iceTea".trueLength()