function doAddition(x){
    return function(y){
        return x + y;

    };
}
var add = doAddition(5);
console.log(add(10));


// accessing using "CURRING METHOD"
console.log(doAddition(10)(20));
