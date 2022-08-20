//allow the user to access if he is
// logged in from email or google or FB
//  || this symbol means OR

var email = true;
var facebook = false;
var google= false;

if (email || facebook || google){
    console.log("Login success");
}