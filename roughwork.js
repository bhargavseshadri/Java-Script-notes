const one = () => {
    return "i am one";
};

/*const two = () => {
    setTimeout(() => {
        return "I am two";
    }, 3000)
  
};*/

const two = () => {              //creating promise
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("i am two");  // we can use the reject in the same if we want
        },3000)

        setTimeout(() => {
            reject("i am rejected");  // we can use the reject in the same if we want
        },5000)
    });
   
}


const three = () => {
   return "i am three";
};

const callMe = async() => {   //variable for calling above methods
    let  valOne = one();
    console.log(valOne);

    let  valTwo = await two();  //to wait for some time for output like above described 2 seconds we use AWAIT keyword
    console.log(valTwo);

    let  valThree = three();
    console.log(valThree );
};

callMe();
