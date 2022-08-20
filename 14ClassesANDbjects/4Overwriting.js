class user {
    constructor(name , email){
        this.name = name;
        this.email = email;
    };
    login(){
        return "you are logged In as ADMIN";
    }
};

//CHILD CLASS
class subadmin extends user{
    constructor(name,email){
        super(name,email);      //NOTE=learn about super keyword
    }
    getAdminInfo(){
        return "i AM SUBADMIN"
    }
    login(){              //OVERWRITING 
        return "you are logged In as SUBADMIN";
    }
};

const jerry = new subadmin("jerry","jerry@gmail.com");
console.log(jerry.login());
console.log(jerry.getAdminInfo());
