const one = () => {
    console.log("i am one");
};

const two = () => {
    setTimeout(() => {
        console.log("hurrayyy");
    }, 3000)
    console.log("i am two");
};

const three = () => {
    console.log("i am three");
};

one();
three();
two();

