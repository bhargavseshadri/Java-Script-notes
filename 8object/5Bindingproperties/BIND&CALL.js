const bhargav = {
    firstname : "Seshadri",
    lastname : "bhargav",
    role: "admin",
    courseCount : 3,
    getInfo : function () {
        console.log(`
        firstname is ${this.firstname}
        lastname is ${this.lastname}
        and he is studying ${this.courseCount} courses
        `);
        
    },
};

const dj = {
    firstname : "tillu",
    lastname : "dj",
    role : "singer",
    courseCount : 5  ,

};

//to bind the objects using BIND 
//one way

bhargav.getInfo.bind(dj)();

 //or

 var djInfo = bhargav.getInfo.bind(dj);
 djInfo();
//using call method
bhargav.getInfo.call(dj);





