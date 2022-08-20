function sumOne(a ,b){
    return a+b;
    

};

var myA = [5,9];

//console.log(sumOne(myA));
//it gives error to avoid this we use spread operator



//spread operator
console.log(sumOne(...myA));