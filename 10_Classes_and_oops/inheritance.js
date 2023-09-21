//INHERITANCE IN JAVASCRIPT
class User {
    constructor(username){
        this.username = username;
    }

    LogMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCoure(){
        console.log(`A new course was added by ${this.username}`);
    }
}
// const Anuj =  Teacher("AnujKUmar", "Anuj@google.com", '123');
// this will give TypeError(Class constructor Teacher cannot be invoked without 'new' keyword)

 const Anuj = new Teacher("AnujKUmar", "Anuj@google.com", '123');

console.log(Anuj);
console.log(Anuj.addCoure());

const Anuj200 = new  User ("Anuj20000")
Anuj200.LogMe();
Anuj.LogMe();
// Anuj200.addCoure(); // not accessable 

// console.log(Anuj === Anuj200); // false
console.log(Anuj instanceof Teacher);  // True
console.log(Anuj instanceof User);  // True
console.log(Anuj200 instanceof User);  // True
console.log(Anuj200 instanceof Teacher);  // False




