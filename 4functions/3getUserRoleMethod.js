/* defining a function that can answer the role of  a user.
a user can be on following roles.*/
// application with the following rules:
// ADMIN - gets full access
// SUBADMIN - gets access to create del courses
// TESTPREP - gets access to create del tests
// USER  - get access to consume content

function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            
            break; // break is not necessary here
            case "subadmin":
            return `${name} is sub-admin with  access to create and del`;
            
            break;
            case "testprep":
            return `${name} is  testprep with  access and del tests`;
        
            
            break;
            case "user":
            return `${name} is user with content access`;
            
            break;
    
        default:
            return `${name} is a trail user`;
            break;
    }
}

var getRole = getUserRole("seshadri","user");
console.log(getRole);

console.log(getUserRole("Bhargav", "admin"));

