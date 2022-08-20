class user {
    constructor(name , email){
        this.name = name;
        this.email = email;
    };
    #courseList = [];               //private variable

    getInfo(){
        return{name:this.name , email:this.email};
    }
    setCourselist(name){                       //setter
        this.#courseList.push(name);
    }
    getCourseList(){                      //getter
        return this.#courseList;
    }
}
module.exports = user;

//creating object
const rock = new user("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.setCourselist("angular");
console.log(rock.getCourseList());
console.log(rock.courseList);