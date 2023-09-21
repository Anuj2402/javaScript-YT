// All these are part of Ecma script 6(ES6)
// constructor
/*
class User {
    constructor(username, email, password){
            this.username = username;
            this.email = email;
            this.password = password

    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}
*/
// const Anuj = new User("Anuj", "Anuj@gmail.com", "123")

// console.log(Anuj);
// console.log(Anuj.encryptPassword());
// console.log(Anuj.changeUsername());


// Behind the scene

function User(username , email, password){
    this.username= username;
    this.email= email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const Anuj2 = new User("Anuj2", "Anuj@gmail.com", "123")
console.log(Anuj2);
console.log(Anuj2.encryptPassword());
console.log(Anuj2.changeUsername());
