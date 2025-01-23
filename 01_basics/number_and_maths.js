console.log("shivangi");
const score = 400
console.log(score);

const accountBalance = new Number(6748292002); //In next year
console.log(accountBalance);

console.log(accountBalance.toString().length);
console.log(accountBalance.toFixed(2));

const otherNumber = 1123.8996
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //applies commas according to us standards
//For giving commaas according to indian standards see this below
console.log(hundreds.toLocaleString('en-IN'));

/* *********** MATHS *************** */
//MATHS library comes by default in javascript
console.log(Math);
console.log(Math.abs(-4)); //absolute converts only negative into positive
console.log(Math.round(4.3));
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.3)); //4
console.log(Math.min(4, 3, 5, 6));
console.log(Math.max(4, 3, 5, 6));
console.log(Math.random());//Its value will always come between 0 and 1
console.log((Math.random()*10) + 1); //If no zero should come then add 1
console.log(Math.floor(Math.random()*10) + 1); //To get rounded off value

//In case to define min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula