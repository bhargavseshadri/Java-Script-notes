//USERCASE TO KNOW THE DISCOUNT PERCENTAGE

//discount = (listprice - sellingprice)/listprice + 100

var sellingprice = 199;
var listprice = 799;
var discountpercent = ((listprice - sellingprice)/ listprice)+100;
console.log("discount percentage is:"+discountpercent);

//to roundup the decimal value
displayDiscountPercentage = Math.round(discountpercent);
console.log(displayDiscountPercentage + "%off");
