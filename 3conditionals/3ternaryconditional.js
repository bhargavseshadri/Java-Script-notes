//user case -- show user a signout if he is authenticated
// otherwise show him login/signup button

var authenticated = true;

//one method
//if (authenticated) {
//    console.log("show signout button");

//}
//else{
//    console.log("show login button");
//}

authenticated ? console.log("signout button") : console.log("login");