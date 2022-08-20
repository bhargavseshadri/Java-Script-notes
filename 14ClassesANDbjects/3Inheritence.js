//PARENT CLASS
class user {
    constructor(name , email){
        this.name = name;
        this.email = email;
    };
    login(){
        return "you are logged In";
    }
};

//CHILD CLASS
class subadmin extends user{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "i AM SUBADMIN"
    }
};

//object
const tom = new subadmin("tom","tom@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
    