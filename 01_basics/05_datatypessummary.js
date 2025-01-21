//Primitive

//7 types -> string , number, boolean, null, undefined, symbol, bigInt

// const score = 100 //number
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null;
// let userEmail; 

// //symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId) // false


//Non-Primitive datatypes
//array, objects, functions

const heros = ["Shaktiman", "Nagraj", "Doga"] //array
//object
let myObj = {
    name: "Shivangi",
    age: 22,
}

//function
const myfun = function(){
    console.log("Hi SHivangi");
}

console.log(typeof heros);

/************************ */
//STACK MEMORY
let myYTName = "shivangiyoutube.com"
let anotherName = myYTName
anotherName = "Vision"

console.log(myYTName);
console.log(anotherName);

//HEAP MEMORY
let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivangi@2mail.com"
console.log(userOne.email)
console.log(userTwo.email)