const one = () => {
    console.log("i am one");
};

const two = () => {
    setTimeout(() => {
        console.log("hurrayyy");
    }, 3000) //3000 means it wait for 3 seconds
    console.log("i am two"); // this will print until the 3 seconds over
};

const three = () => {
    console.log("i am three");
};

one();
two();
three();

