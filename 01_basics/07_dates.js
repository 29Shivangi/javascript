let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23); //Month in javascript starts from 0
console.log(myCreatedDate.toDateString());

let myNewCreatedDate = new Date(2025, 0, 23, 5, 3); //5, 3 gives time
console.log(myNewCreatedDate.toLocaleString());

let myNewDate = new Date("05-02-2025")
console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); //gives milliseconds of date

console.log(myTimeStamp);
console.log(myNewDate.getTime());
// console.log(Date.now()/1000);//to convert ms into s
// //or
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getHours());// and many more functions

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate);