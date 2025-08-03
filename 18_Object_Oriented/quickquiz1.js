//Create a clas of users and create a few methods along with the constructors

class user{
    constructor(username){
        this.username=username;
        console.log("A new user with username " +username+ " is created")
    }

    login(){
        console.log("User logged in")
    }
    logout(){
        console.log("User logged out")
    }
}

let user1 = new user("abcd1235")
console.log(user1.login())
console.log(user1.logout())

//OUTPUT
// A new user with username abcd1235 is created
// User logged in
// undefined
// User logged out
// undefined