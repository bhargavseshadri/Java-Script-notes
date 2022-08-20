var myMaps = new Map();

myMaps.set(1 , "one");
myMaps.set(2 , "two");
myMaps.set(3 , "three");
myMaps.set(4 , "four");

console.log(myMaps);


//grab values from maps

//to grab keys
for(let key of myMaps.keys()){
    console.log(`key is ${key}`);    
}

// to grab values from maps
for(let value of myMaps.values()){
    console.log(`value is ${value}`);
}

// to grab both key and value( we use array for this)
for(let [key , value] of myMaps){
    console.log(`key is ${key}:valuse is ${value}`);
}


//another way
myMaps.forEach((v , k) => console.log(`${v} and the key is ${k}`));

//delete

myMaps.delete(2);
console.log(myMaps );