/* in this we use NEW KEYWORD and we also used PROTO oR
PROTOTYPE keyword also*/

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
Bhargav.getFirstname();

//console.log(Bhargav);

var sam = new User("sam", 2);
sam.getCourseCount();
sam.getFirstname();

//console.log(sam);