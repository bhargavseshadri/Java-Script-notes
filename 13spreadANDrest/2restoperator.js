function sumTwo (...args){
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
        
    }
    return sum;
}

console.log(sumTwo(2,3,4,5,6,7,8,9));
