// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//Typescript & Javascript does not allow you to compare different datatypes
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true --> //This is because in javascript equality check (==) and comparision operators (<,>, >=, <=) work differently.
//Comparision convert null to a number treating it as 0 (zero). That's why null >= 0 is true and null > 0 is false

//=== -> strict check i.e., checks data types as well
console.log("2" === 2); // because data types are different