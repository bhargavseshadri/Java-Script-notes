const symbols = {
    yt : "youtube",
    ig : "isntagram",
    fb : "facebook",
    pr : "prime"
};

for (const x in symbols){
    console.log(symbols[x]);
    //or
    console.log(`key is: ${x} and value is: ${symbols[x]}`);
}
