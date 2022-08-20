var User = function(firstname, courseCount){
    this.firstname = firstname;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is: ${this.courseCount}`)
    };

};  

User.prototype.getFirstname = function(){
    console.log(`your firstname is: ${this.firstname}`);
};

var Bhargav = new User("Bhargav",2);
Bhargav.getCourseCount(); 
if (Bhargav.hasOwnProperty("firstname")){
    Bhargav.getFirstname();
}
//here we get the first name only if the if condition is true


var sam = new User("sam", 2);
sam.getCourseCount();
sam.getFirstname();