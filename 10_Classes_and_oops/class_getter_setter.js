class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}anuj`
    }

    set password(value){
        this._password = value
    }
}

const Anuj = new User("A@anuj.ai", "abc")
console.log(Anuj.email);
