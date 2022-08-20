//callback function

//ONE WAY IS
/* var isEven = (Element) => {
    return Element % 2 === 0;
};

var result = [2,4,6,8].every(isEven);
console.log(result); */



//another way is(important) here we won't use RETURN keyword 
var result = [2,3,6,8,10].every((e) => (e % 2 === 0));
console.log(result);



