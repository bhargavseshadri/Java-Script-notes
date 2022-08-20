//to import the defined class in 1CLASS.js
//one way is
//import user from "./1class"

//another way is
const user = require("./1class.js");
const bhargav = new  user("bhargav","bhargav@gmail.com");
console.log(bhargav.getInfo());
