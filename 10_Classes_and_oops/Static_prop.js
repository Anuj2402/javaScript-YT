class User {
    constructor(username){
        this.nsername = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
    // 'static' keyword stops the method from accessing from outside or anywhere
    static createId(){
        return '1234'
    }
}

const Anuj = new User("AnujKumarRai")
// console.log(Anuj);
// console.log(Anuj.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const Iphone = new Teacher("Iphone15Max", "Apple@iohone.com")
// console.log(Iphone);
Iphone.logMe();