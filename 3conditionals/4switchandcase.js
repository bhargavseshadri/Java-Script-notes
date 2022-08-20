// application with the following rules:
// ADMIN - gets full access
// SUBADMIN - gets access to create del courses
// TESTPREP - gets access to create del tests
// USER  - get access to consume content

var user = "admin";
switch(user){
    case "admin":
        console.log("you get full access");
        break;
        case "subadmin":
        console.log("you get full access to create and courses");
        break;
        case "testprep":
        console.log("you get full access create and del test");
        break;
        case "user":
        console.log("you get full access to the content");
        break;
    default:
        console.log("trail user");
        break;

        
}