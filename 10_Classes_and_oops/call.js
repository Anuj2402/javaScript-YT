function setUserName(username){
    // complex Db calls
    this.username = username;
    console.log("called");

}

function createUser(username , email, password){
    setUserName.call(this, username);
    
    this.email = email;
    this.password = password;
}

const result = new createUser("anuj", "Anuj@chatgpt.com" , "123");
console.log(result);