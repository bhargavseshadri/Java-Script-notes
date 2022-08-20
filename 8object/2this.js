console.log(this);


var user = {
    firstname  :"BHARGAV",
    lastname : "SESHADRI",
    CourseCount : "5",
    getcourseCount : function () {
        console.log("LINE 9",this);
        
    },
};

user.getcourseCount()